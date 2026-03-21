"use client"

import { useEffect, useState, useCallback } from "react"
import Link from "next/link"
import { getCasaById } from "@/lib/presets"
import { loadState, actualizarProgresoCasa } from "@/lib/storage/userState"
import type { Casa, EstadoCasa, Fase } from "@/types/presets"
import type { ProgresoCasa } from "@/types/user"

interface CasaDetalleClientProps {
    casaId: string
}

// ── Helpers ───────────────────────────────────────────────────────────────────

const TIPOLOGIA_STYLE: Record<string, { border: string; badge: string; label: string; icon: string }> = {
    "apuesta-recibe": { border: "border-emerald-500", badge: "bg-emerald-100 text-emerald-700", label: "Apuesta & Recibe", icon: "🟢" },
    reembolso: { border: "border-blue-400", badge: "bg-blue-100 text-blue-700", label: "Reembolso", icon: "🔵" },
    rollover: { border: "border-amber-400", badge: "bg-amber-100 text-amber-700", label: "Rollover", icon: "🔄" },
    exchange: { border: "border-purple-500", badge: "bg-purple-100 text-purple-700", label: "Exchange", icon: "♻️" },
}

function getDificultadLabel(d: number) {
    return ["", "Muy fácil", "Fácil", "Media", "Avanzada", "Experto"][d] ?? "Media"
}

function getDificultadColor(d: number) {
    if (d <= 1) return "text-emerald-600"
    if (d <= 2) return "text-green-600"
    if (d === 3) return "text-amber-600"
    if (d === 4) return "text-orange-600"
    return "text-red-600"
}

function getTiempoEstimado(tipologia?: string): string {
    if (tipologia === "apuesta-recibe") return "10–15 min + espera de freebets"
    if (tipologia === "reembolso") return "15–20 min por fase"
    if (tipologia === "rollover") return "30–60 min distribuidos"
    if (tipologia === "exchange") return "Variable según volumen"
    return "15–20 min"
}

function getSiguienteAccion(estado: EstadoCasa, faseActual: number, totalFases: number, casa: Casa): string {
    if (estado === "completada") return "Oferta completada. ¡Bien hecho!"
    if (estado === "descartada") return "Oferta descartada."
    if (estado === "no_empezada") {
        const stakeF1 = casa.promos[0]?.fases[0]?.stakeRecomendado
        return stakeF1
            ? `Regístrate y completa la Fase 1 con stake ${stakeF1} €`
            : "Regístrate y completa la Fase 1"
    }
    const fase = casa.promos.flatMap(p => p.fases).find(f => f.numero === faseActual)
    if (fase) {
        return faseActual >= totalFases
            ? `Completa la Fase ${faseActual} para terminar la oferta`
            : `Continúa en Fase ${faseActual}: ${fase.titulo}`
    }
    return "Continúa con la siguiente fase"
}

// Detecta si una alerta es crítica por palabras clave
function getAlertaNivel(texto: string): "critico" | "importante" | "consejo" {
    const upper = texto.toUpperCase()
    if (upper.includes("CRÍTICO") || upper.includes("MUY IMPORTANTE") || upper.includes("OBLIGATORI")) return "critico"
    if (upper.includes("🚨") || upper.includes("ALERTA") || upper.includes("RIESGO")) return "importante"
    return "consejo"
}

// ── Componente de alerta por nivel ────────────────────────────────────────────
function AlertaItem({ texto }: { texto: string }) {
    const nivel = getAlertaNivel(texto)
    if (nivel === "critico") {
        return (
            <li className="flex gap-2 text-xs bg-red-50 border border-red-200 rounded-lg px-3 py-2 text-red-700">
                <span className="shrink-0 font-bold">🚨</span>
                <span>{texto.replace(/^🚨\s*/, '').replace(/^CRÍTICO:\s*/i, '')}</span>
            </li>
        )
    }
    if (nivel === "importante") {
        return (
            <li className="flex gap-2 text-xs text-amber-700">
                <span className="shrink-0">🚨</span>
                <span>{texto.replace(/^🚨\s*/, '')}</span>
            </li>
        )
    }
    return (
        <li className="flex gap-2 text-xs text-stone-500">
            <span className="shrink-0">💡</span>
            <span>{texto}</span>
        </li>
    )
}

// ── Checklist interactivo por fase ────────────────────────────────────────────
function ChecklistFase({ pasos, faseId }: { pasos: string[]; faseId: string }) {
    const [checked, setChecked] = useState<boolean[]>(pasos.map(() => false))
    const toggle = (i: number) => setChecked(prev => prev.map((v, idx) => idx === i ? !v : v))
    const allChecked = checked.every(Boolean)

    return (
        <div>
            <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">
                Pasos {allChecked && <span className="text-emerald-500 ml-1">✓ Todo listo</span>}
            </p>
            <ol className="flex flex-col gap-2">
                {pasos.map((paso, i) => (
                    <li
                        key={`${faseId}-paso-${i}`}
                        onClick={() => toggle(i)}
                        className={`flex gap-2.5 text-xs cursor-pointer group transition-all ${checked[i] ? "opacity-50" : ""}`}
                    >
                        <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all
              ${checked[i] ? "bg-emerald-500 border-emerald-500 text-white" : "border-stone-300 group-hover:border-emerald-400"}`}>
                            {checked[i] ? "✓" : ""}
                        </span>
                        <span className={`leading-relaxed ${checked[i] ? "line-through text-stone-400" : "text-stone-600"}`}>
                            {paso}
                        </span>
                    </li>
                ))}
            </ol>
        </div>
    )
}

// ── Bloque de fase ────────────────────────────────────────────────────────────
function FaseCard({
    fase, idx, esFaseActual, esFaseCompletada, totalFasesPromo,
    onAvanzar, onCompletar, estadoOferta
}: {
    fase: Fase
    idx: number
    esFaseActual: boolean
    esFaseCompletada: boolean
    totalFasesPromo: number
    onAvanzar: (n: number) => void
    onCompletar: () => void
    estadoOferta: EstadoCasa
}) {
    const [confirmando, setConfirmando] = useState(false)
    const [checks, setChecks] = useState({ deposito: false, apuesta: false, cobertura: false })
    const puedeAvanzar = checks.deposito && checks.apuesta && checks.cobertura

    const alertasCriticas = (fase.alertas ?? []).filter(a => getAlertaNivel(a) === "critico")
    const alertasImportantes = (fase.alertas ?? []).filter(a => getAlertaNivel(a) === "importante")
    const alertasConsejos = (fase.alertas ?? []).filter(a => getAlertaNivel(a) === "consejo")

    return (
        <div className={`bg-white rounded-2xl border shadow-sm overflow-hidden transition-all
      ${esFaseActual ? "border-emerald-300 ring-1 ring-emerald-200" : "border-stone-100"}
      ${esFaseCompletada ? "opacity-60" : ""}
    `}>
            {/* Header fase */}
            <div className={`flex items-center justify-between px-5 py-3 ${esFaseActual ? "bg-emerald-50" : "bg-stone-50"}`}>
                <div className="flex items-center gap-3">
                    <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${esFaseCompletada ? "bg-emerald-500 text-white" : esFaseActual ? "bg-emerald-100 text-emerald-700" : "bg-stone-200 text-stone-500"}`}>
                        {esFaseCompletada ? "✓" : fase.numero}
                    </span>
                    <div>
                        <p className="text-sm font-semibold text-stone-800">{fase.titulo}</p>
                        <p className="text-xs text-stone-400">{fase.descripcion}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 shrink-0 ml-2">
                    {fase.freebetEstimada && (
                        <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">
                            ~{fase.freebetEstimada} €
                        </span>
                    )}
                    {fase.stakeRecomendado && (
                        <span className="text-xs bg-stone-100 text-stone-500 px-2 py-0.5 rounded-full">
                            Stake: {fase.stakeRecomendado} €
                        </span>
                    )}
                </div>
            </div>

            <div className="px-5 py-4 flex flex-col gap-4">

                {/* 1. Qué harás + cuánto necesitas */}
                {fase.stakeRecomendado && (
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-stone-50 rounded-xl p-3 border border-stone-100">
                            <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wide mb-1">Qué harás</p>
                            <p className="text-xs text-stone-700 font-medium">{fase.titulo}</p>
                        </div>
                        <div className="bg-stone-50 rounded-xl p-3 border border-stone-100">
                            <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wide mb-1">Necesitas tener</p>
                            <p className="text-sm font-bold text-stone-800">{fase.stakeRecomendado} €</p>
                            <p className="text-[10px] text-stone-400">disponibles para apostar</p>
                        </div>
                    </div>
                )}

                {/* 2. Alertas críticas primero */}
                {alertasCriticas.length > 0 && (
                    <ul className="flex flex-col gap-1.5">
                        {alertasCriticas.map((a, i) => <AlertaItem key={i} texto={a} />)}
                    </ul>
                )}

                {/* 3. Alertas importantes */}
                {alertasImportantes.length > 0 && (
                    <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
                        <ul className="flex flex-col gap-1">
                            {alertasImportantes.map((a, i) => <AlertaItem key={i} texto={a} />)}
                        </ul>
                    </div>
                )}

                {/* 4. Consejos */}
                {alertasConsejos.length > 0 && (
                    <ul className="flex flex-col gap-1">
                        {alertasConsejos.map((a, i) => <AlertaItem key={i} texto={a} />)}
                    </ul>
                )}

                {/* 5. Pasos con checklist interactivo */}
                {fase.checklist.length > 0 && (
                    <ChecklistFase pasos={fase.checklist} faseId={fase.id} />
                )}

                {/* 6. Si gana / Si pierde — más concreto */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-100">
                        <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-wide mb-1">
                            ✅ Si gana la apuesta
                        </p>
                        <p className="text-xs text-emerald-700 leading-relaxed">{fase.siGana.accion}</p>
                        {fase.siGana.modo && (
                            <span className="inline-block mt-1.5 text-[10px] bg-emerald-100 text-emerald-600 px-1.5 py-0.5 rounded font-medium">
                                → Siguiente: {fase.siGana.modo}
                            </span>
                        )}
                    </div>
                    <div className="bg-blue-50 rounded-xl p-3 border border-blue-100">
                        <p className="text-[10px] font-bold text-blue-500 uppercase tracking-wide mb-1">
                            🔄 Si pierde la apuesta
                        </p>
                        <p className="text-xs text-blue-700 leading-relaxed">{fase.siPierde.accion}</p>
                        {fase.siPierde.urgente && (
                            <span className="inline-block mt-1.5 text-[10px] bg-amber-100 text-amber-600 px-1.5 py-0.5 rounded font-medium">
                                ⚡ Actuar con urgencia
                            </span>
                        )}
                    </div>
                </div>

                {/* 7. CTA con confirmación — avanzar fase */}
                {esFaseActual && idx < totalFasesPromo - 1 && (
                    <div>
                        {!confirmando ? (
                            <button
                                onClick={() => setConfirmando(true)}
                                className="w-full text-sm font-semibold py-2.5 rounded-xl bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors border border-stone-200"
                            >
                                Marcar Fase {fase.numero} como completada →
                            </button>
                        ) : (
                            <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 flex flex-col gap-3">
                                <p className="text-xs font-semibold text-stone-600">Confirma antes de continuar:</p>
                                <div className="flex flex-col gap-2">
                                    {[
                                        { key: "deposito", label: "Depósito o saldo disponible ✓" },
                                        { key: "apuesta", label: "Apuesta A FAVOR colocada ✓" },
                                        { key: "cobertura", label: "Cobertura EN CONTRA en Betfair ✓" },
                                    ].map(({ key, label }) => (
                                        <label key={key} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={checks[key as keyof typeof checks]}
                                                onChange={e => setChecks(p => ({ ...p, [key]: e.target.checked }))}
                                                className="w-4 h-4 accent-emerald-500"
                                            />
                                            <span className="text-xs text-stone-600">{label}</span>
                                        </label>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => { onAvanzar(fase.numero + 1); setConfirmando(false) }}
                                        disabled={!puedeAvanzar}
                                        className={`flex-1 text-sm font-semibold py-2.5 rounded-xl transition-colors
                      ${puedeAvanzar ? "bg-[#2A1F3D] text-white hover:bg-[#3d2e57]" : "bg-stone-100 text-stone-300 cursor-not-allowed"}`}
                                    >
                                        Continuar a Fase {fase.numero + 1} →
                                    </button>
                                    <button
                                        onClick={() => setConfirmando(false)}
                                        className="px-4 text-xs text-stone-400 hover:text-stone-600 transition-colors"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* 7b. CTA completar oferta (última fase) */}
                {esFaseActual && idx === totalFasesPromo - 1 && estadoOferta !== "completada" && (
                    <div>
                        {!confirmando ? (
                            <button
                                onClick={() => setConfirmando(true)}
                                className="w-full text-sm font-semibold py-2.5 rounded-xl bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors border border-stone-200"
                            >
                                Marcar oferta como completada →
                            </button>
                        ) : (
                            <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 flex flex-col gap-3">
                                <p className="text-xs font-semibold text-stone-600">Confirma antes de finalizar:</p>
                                <div className="flex flex-col gap-2">
                                    {[
                                        { key: "deposito", label: "Todas las apuestas realizadas ✓" },
                                        { key: "apuesta", label: "Freebets o bonos utilizados ✓" },
                                        { key: "cobertura", label: "Ganancias recibidas o en proceso ✓" },
                                    ].map(({ key, label }) => (
                                        <label key={key} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={checks[key as keyof typeof checks]}
                                                onChange={e => setChecks(p => ({ ...p, [key]: e.target.checked }))}
                                                className="w-4 h-4 accent-emerald-500"
                                            />
                                            <span className="text-xs text-stone-600">{label}</span>
                                        </label>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => { onCompletar(); setConfirmando(false) }}
                                        disabled={!puedeAvanzar}
                                        className={`flex-1 text-sm font-semibold py-2.5 rounded-xl transition-colors
                      ${puedeAvanzar ? "bg-emerald-500 text-white hover:bg-emerald-400" : "bg-stone-100 text-stone-300 cursor-not-allowed"}`}
                                    >
                                        ✅ Completar oferta
                                    </button>
                                    <button
                                        onClick={() => setConfirmando(false)}
                                        className="px-4 text-xs text-stone-400 hover:text-stone-600 transition-colors"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

// ── Componente principal ──────────────────────────────────────────────────────

export default function CasaDetalleClient({ casaId }: CasaDetalleClientProps) {
    const [casa, setCasa] = useState<Casa | null>(null)
    const [progreso, setProgreso] = useState<ProgresoCasa | undefined>(undefined)
    const [notFound, setNotFound] = useState(false)

    const refresh = useCallback(() => {
        if (!casaId) return
        const found = getCasaById(casaId)
        if (!found) { setNotFound(true); return }
        const state = loadState()
        setCasa(found)
        setProgreso(state.progresos[casaId])
    }, [casaId])

    useEffect(() => { refresh() }, [refresh])

    const handleEstado = (estado: EstadoCasa) => {
        if (!casaId) return
        actualizarProgresoCasa(casaId, { estado })
        refresh()
    }

    const handleFase = (fase: number) => {
        if (!casaId) return
        actualizarProgresoCasa(casaId, { faseActual: fase, estado: "en_progreso" })
        refresh()
    }

    if (notFound) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[40vh] gap-4">
                <p className="text-stone-400 text-lg">Casa no encontrada.</p>
                <Link href="/casas" className="text-sm text-emerald-500 hover:underline">← Volver al listado</Link>
            </div>
        )
    }

    if (!casa) {
        return (
            <div className="flex items-center justify-center min-h-[40vh]">
                <p className="text-stone-400">Cargando...</p>
            </div>
        )
    }

    const style = TIPOLOGIA_STYLE[casa.tipologia ?? "apuesta-recibe"] ?? TIPOLOGIA_STYLE["apuesta-recibe"]
    const estado = progreso?.estado ?? "no_empezada"
    const faseActual = progreso?.faseActual ?? 1
    const todasFases = casa.promos.flatMap(p => p.fases)
    const totalFases = todasFases.length
    const completada = estado === "completada"
    const siguienteAccion = getSiguienteAccion(estado, faseActual, totalFases, casa)
    const tiempoEstimado = getTiempoEstimado(casa.tipologia)

    return (
        <div className="max-w-3xl mx-auto px-4 py-8 flex flex-col gap-6">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-stone-400">
                <Link href="/casas" className="hover:text-stone-200 transition-colors">Casas</Link>
                <span>›</span>
                <span className="text-stone-200">{casa.nombre}</span>
            </div>

            {/* Header — descriptivo + directivo */}
            <div className={`bg-white rounded-3xl border-l-4 ${style.border} shadow-sm p-6`}>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${style.badge} text-lg font-bold`}>
                            {casa.nombre[0]}
                        </div>
                        <div>
                            <div className="flex items-center gap-2 flex-wrap mb-1">
                                <h1 className="text-2xl font-bold text-gray-900">{casa.nombre}</h1>
                                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${style.badge}`}>
                                    {style.icon} {style.label}
                                </span>
                            </div>
                            <p className="text-sm text-gray-500">{casa.descripcionBreve}</p>
                            <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                                <span className={`text-xs font-medium ${getDificultadColor(casa.dificultad ?? 3)}`}>
                                    {"●".repeat(casa.dificultad ?? 3)} {getDificultadLabel(casa.dificultad ?? 3)}
                                </span>
                                <span className="text-xs text-stone-400">Tiempo: {tiempoEstimado}</span>
                                <span className="text-xs text-stone-400">{totalFases} fase{totalFases !== 1 ? "s" : ""}</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-right shrink-0">
                        <p className="text-3xl font-bold text-gray-900">+{casa.beneficioPotencial} €</p>
                        <p className="text-xs text-gray-400">potencial estimado</p>
                    </div>
                </div>

                {/* Siguiente acción — línea directiva */}
                <div className={`mt-4 rounded-xl px-4 py-3 border flex items-start gap-2
          ${completada ? "bg-emerald-50 border-emerald-200" : "bg-blue-50 border-blue-200"}`}>
                    <span className="text-base shrink-0">{completada ? "✅" : "👉"}</span>
                    <div>
                        <p className="text-xs font-bold text-stone-600 uppercase tracking-wide mb-0.5">Siguiente acción</p>
                        <p className="text-sm font-semibold text-stone-800">{siguienteAccion}</p>
                    </div>
                </div>

                {casa.id === "sportium" && (
                    <div className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 flex items-start gap-2">
                        <span className="text-base shrink-0">🧭</span>
                        <div>
                            <p className="text-xs font-bold text-emerald-700 uppercase tracking-wide mb-0.5">Primer paso recomendado</p>
                            <p className="text-sm text-emerald-800">
                                Regístrate, completa la fase y usa la calculadora cuando hagas la apuesta.
                            </p>
                        </div>
                    </div>
                )}

                {/* CTAs */}
                <div className="flex flex-wrap gap-3 mt-4">
                    {casa.url && !completada && (
                        <a
                            href={casa.url} target="_blank" rel="noopener noreferrer"
                            className="bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                        >
                            Registrarse en {casa.nombre} →
                        </a>
                    )}
                    <Link
                        href="/calculadora"
                        className="bg-[#2A1F3D] hover:bg-[#3d2e57] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                    >
                        Abrir calculadora
                    </Link>
                    {completada && (
                        <button
                            onClick={() => handleEstado("no_empezada")}
                            className="text-xs text-stone-400 hover:text-stone-600 px-3 py-2 rounded-xl border border-stone-200 transition-colors"
                        >
                            Reabrir oferta
                        </button>
                    )}
                </div>
            </div>

            {/* Estado + progreso integrados */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-5">
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                    <h2 className="text-sm font-semibold text-stone-700">Tu progreso</h2>
                    {totalFases > 1 && (
                        <span className="text-xs text-stone-400 bg-stone-50 px-2 py-1 rounded-lg border border-stone-100">
                            Fase {Math.min(faseActual, totalFases)} de {totalFases}
                        </span>
                    )}
                </div>

                {/* Barra de progreso */}
                {totalFases > 1 && (
                    <div className="flex gap-1.5 mb-4">
                        {todasFases.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => handleFase(i + 1)}
                                className={`flex-1 h-2 rounded-full transition-all hover:opacity-80
                  ${i + 1 < faseActual || completada ? "bg-emerald-500" :
                                        i + 1 === faseActual ? "bg-emerald-300" : "bg-stone-200"}`}
                                title={`Ir a Fase ${i + 1}`}
                            />
                        ))}
                    </div>
                )}

                {/* Selector de estado */}
                <div className="flex flex-wrap gap-2">
                    {([
                        { value: "no_empezada" as EstadoCasa, label: "Sin empezar", color: "bg-stone-100 text-stone-500" },
                        { value: "en_progreso" as EstadoCasa, label: "En progreso", color: "bg-blue-100 text-blue-600" },
                        { value: "completada" as EstadoCasa, label: "Completada", color: "bg-emerald-100 text-emerald-700" },
                        { value: "descartada" as EstadoCasa, label: "Descartada", color: "bg-red-100 text-red-500" },
                    ]).map(opt => (
                        <button
                            key={opt.value}
                            onClick={() => handleEstado(opt.value)}
                            className={`text-xs px-3 py-1.5 rounded-full font-medium border transition-all
                ${estado === opt.value
                                    ? `${opt.color} border-transparent ring-2 ring-offset-1 ring-current`
                                    : "bg-stone-50 text-stone-400 border-stone-200 hover:border-stone-300"}`}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Fases detalladas */}
            {casa.promos.map(promo => (
                <div key={promo.id} className="flex flex-col gap-4">
                    <div>
                        <h2 className="text-lg font-bold text-stone-100">{promo.titulo}</h2>
                        <p className="text-sm text-stone-400">{promo.descripcion}</p>
                        {promo.vencimiento && (
                            <p className="text-xs text-stone-500 mt-1">⏳ {promo.vencimiento}</p>
                        )}
                    </div>

                    {promo.fases.map((fase, idx) => (
                        <FaseCard
                            key={fase.id}
                            fase={fase}
                            idx={idx}
                            esFaseActual={faseActual === fase.numero}
                            esFaseCompletada={faseActual > fase.numero || estado === "completada"}
                            totalFasesPromo={promo.fases.length}
                            onAvanzar={handleFase}
                            onCompletar={() => handleEstado("completada")}
                            estadoOferta={estado}
                        />
                    ))}
                </div>
            ))}

            {/* Bloque de cierre */}
            <div className="bg-white rounded-2xl border border-stone-100 p-5 flex flex-col gap-4">
                <div>
                    <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-1">Estado actual</p>
                    <p className="text-sm font-semibold text-stone-800">{siguienteAccion}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-stone-100">
                    <Link
                        href="/casas"
                        className="text-xs font-semibold px-4 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors"
                    >
                        ← Ver todas las casas
                    </Link>
                    <Link
                        href="/calculadora"
                        className="text-xs font-semibold px-4 py-2 rounded-lg bg-[#2A1F3D] hover:bg-[#3d2e57] text-white transition-colors"
                    >
                        Abrir calculadora
                    </Link>
                    {!completada && (
                        <button
                            onClick={() => handleEstado("completada")}
                            className="text-xs font-semibold px-4 py-2 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-700 transition-colors ml-auto"
                        >
                            ✅ Marcar como completada
                        </button>
                    )}
                </div>
            </div>

        </div>
    )
}
