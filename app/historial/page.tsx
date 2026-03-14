// app/historial/page.tsx

'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { loadState, agregarHistorial, resetState } from '@/lib/storage/userState'
import type { UserState, EntradaHistorial } from '@/types/user'
import { initialUserState } from '@/types/user'
import { todasLasCasas } from '@/lib/presets'
import type { ModoCalculo } from '@/types/presets'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-ES', {
    day: '2-digit', month: 'short', year: 'numeric',
  })
}

const MODO_EMOJI: Partial<Record<ModoCalculo, string>> = {
  cualificante: '🎯',
  freebet: '🎁',
  reembolso: '💰',
  dutcher: '⚖️',
}

const MODO_LABEL: Partial<Record<ModoCalculo, string>> = {
  cualificante: 'Cualificante',
  freebet: 'Free Bet',
  reembolso: 'Reembolso',
  dutcher: 'Dutcher',
}

const MODOS_FORM: ModoCalculo[] = ['cualificante', 'freebet', 'reembolso', 'dutcher']

// ── Empty state rico ──────────────────────────────────────────────────────────
function EmptyState({ onAdd }: { onAdd: () => void }) {
  return (
    <div className="rounded-2xl bg-white border border-stone-200 p-8 flex flex-col items-center gap-5 text-center">
      <div className="w-14 h-14 rounded-2xl bg-stone-100 flex items-center justify-center text-3xl">
        📋
      </div>
      <div className="max-w-sm">
        <p className="text-stone-700 font-semibold text-base mb-1">Aún no hay operaciones registradas</p>
        <p className="text-stone-400 text-sm leading-relaxed">
          Registra cada apuesta cerrada para medir tu beneficio real, detectar patrones y saber qué estrategias te funcionan mejor.
        </p>
      </div>

      {/* Definición */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 text-xs text-blue-700 max-w-sm">
        <span className="font-semibold">¿Qué es una operación?</span> El resultado final registrado de una apuesta cubierta o conversión de bono — calificante, freebet o reembolso.
      </div>

      {/* Cómo se alimenta */}
      <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
        {[
          { icon: '🏠', label: 'Completar una casa' },
          { icon: '🎁', label: 'Limpiar un bono' },
          { icon: '✏️', label: 'Registrar manualmente' },
        ].map(({ icon, label }) => (
          <div key={label} className="bg-stone-50 rounded-xl p-3 border border-stone-100 text-center">
            <p className="text-xl mb-1">{icon}</p>
            <p className="text-[10px] text-stone-500 leading-tight">{label}</p>
          </div>
        ))}
      </div>

      <button
        onClick={onAdd}
        className="px-5 py-2.5 rounded-xl bg-[#2A1F3D] text-white text-sm font-semibold hover:bg-[#3d2e57] transition-colors"
      >
        + Registrar primera operación
      </button>

      <div className="flex gap-3 pt-1">
        <Link href="/casas" className="text-xs text-emerald-500 hover:underline">Ver casas disponibles →</Link>
        <Link href="/bonos" className="text-xs text-amber-500 hover:underline">Ver bonos pendientes →</Link>
      </div>
    </div>
  )
}

export default function HistorialPage() {
  const [state, setState] = useState<UserState>(initialUserState)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({
    casaId: todasLasCasas[0]?.id ?? '',
    modo: 'cualificante' as ModoCalculo,
    stake: 10,
    resultado: 0,
    notas: '',
  })

  const refresh = useCallback(() => setState(loadState()), [])
  useEffect(() => { refresh() }, [refresh])

  const handleAdd = () => {
    const casa = todasLasCasas.find(c => c.id === form.casaId)
    agregarHistorial({
      casaId: form.casaId,
      casaNombre: casa?.nombre,
      modo: form.modo,
      stake: form.stake,
      resultado: form.resultado,
      notas: form.notas || undefined,
    })
    setShowForm(false)
    setForm({ casaId: todasLasCasas[0]?.id ?? '', modo: 'cualificante', stake: 10, resultado: 0, notas: '' })
    refresh()
  }

  const entradas = state.historial
  const totalResultado = entradas.reduce((a, e) => a + e.resultado, 0)
  const positivas = entradas.filter(e => e.resultado >= 0).length
  const tasaPositiva = entradas.length > 0 ? Math.round((positivas / entradas.length) * 100) : null

  return (
    <div className="flex flex-col gap-6">

      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-stone-100">📋 Historial de operaciones</h1>
          <p className="text-stone-400 text-sm mt-1">
            Una operación = resultado final de una apuesta cubierta o conversión de bono
          </p>
        </div>
        <button
          onClick={() => setShowForm(v => !v)}
          className="px-4 py-2 rounded-xl bg-[#2A1F3D] text-white text-sm font-semibold hover:bg-[#3d2e57] active:scale-95 transition-all"
        >
          + Registrar operación
        </button>
      </div>

      {/* KPIs — solo si hay datos */}
      {entradas.length > 0 && (
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-xl bg-white border border-stone-100 px-4 py-3">
            <p className="text-lg font-bold font-mono text-stone-800">{entradas.length}</p>
            <p className="text-xs text-stone-400 mt-0.5">Operaciones</p>
          </div>
          <div className="rounded-xl bg-white border border-stone-100 px-4 py-3">
            <p className={`text-lg font-bold font-mono ${totalResultado >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
              {totalResultado >= 0 ? '+' : ''}{totalResultado.toFixed(2)} €
            </p>
            <p className="text-xs text-stone-400 mt-0.5">Resultado total</p>
          </div>
          <div className="rounded-xl bg-white border border-stone-100 px-4 py-3">
            <p className="text-lg font-bold font-mono text-stone-800">
              {tasaPositiva !== null ? `${tasaPositiva}%` : 'Sin datos todavía'}
            </p>
            <p className="text-xs text-stone-400 mt-0.5">Tasa positiva</p>
          </div>
        </div>
      )}

      {/* Formulario */}
      {showForm && (
        <div className="rounded-2xl bg-white border border-stone-200 p-5 flex flex-col gap-4">
          <div>
            <h2 className="text-sm font-semibold text-stone-700">Registrar nueva operación</h2>
            <p className="text-xs text-stone-400 mt-0.5">Anota el resultado final tras cerrar la apuesta y la cobertura</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-stone-500 font-medium">Casa</label>
              <select
                value={form.casaId}
                onChange={e => setForm(f => ({ ...f, casaId: e.target.value }))}
                className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2A1F3D]"
              >
                {todasLasCasas.map(c => (
                  <option key={c.id} value={c.id}>{c.nombre}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-stone-500 font-medium">Tipo de operación</label>
              <select
                value={form.modo}
                onChange={e => setForm(f => ({ ...f, modo: e.target.value as ModoCalculo }))}
                className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2A1F3D]"
              >
                {MODOS_FORM.map(m => (
                  <option key={m} value={m}>{MODO_EMOJI[m]} {MODO_LABEL[m]}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-stone-500 font-medium">Stake apostado (€)</label>
              <input
                type="number" value={form.stake} step={0.5} min={0}
                onChange={e => setForm(f => ({ ...f, stake: parseFloat(e.target.value) || 0 }))}
                className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2A1F3D]"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-stone-500 font-medium">Resultado neto (€)</label>
              <input
                type="number" value={form.resultado} step={0.01}
                onChange={e => setForm(f => ({ ...f, resultado: parseFloat(e.target.value) || 0 }))}
                className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2A1F3D]"
              />
              <p className="text-xs text-stone-400">Negativo si fue apuesta calificante con pérdida esperada</p>
            </div>
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label className="text-xs text-stone-500 font-medium">Notas (opcional)</label>
              <input
                type="text" value={form.notas}
                placeholder="ej. freebet Bwin limpiada a cuota 3.2"
                onChange={e => setForm(f => ({ ...f, notas: e.target.value }))}
                className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2A1F3D]"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={handleAdd} className="px-4 py-2 rounded-xl bg-[#2A1F3D] text-white text-sm font-semibold hover:bg-[#3d2e57] transition-all">
              Guardar
            </button>
            <button onClick={() => setShowForm(false)} className="px-4 py-2 rounded-xl border border-stone-200 text-stone-600 text-sm hover:bg-stone-100 transition-all">
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Lista o empty state */}
      {entradas.length === 0 ? (
        <EmptyState onAdd={() => setShowForm(true)} />
      ) : (
        <div className="flex flex-col gap-2">
          {entradas.map((e: EntradaHistorial) => (
            <div key={e.id} className="rounded-xl bg-white border border-stone-100 p-4 flex items-center gap-4 hover:border-stone-200 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-stone-100 flex items-center justify-center text-lg shrink-0">
                {MODO_EMOJI[e.modo] ?? '📋'}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  {e.casaNombre && <span className="font-semibold text-stone-800 text-sm">{e.casaNombre}</span>}
                  <span className="text-xs text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">
                    {MODO_LABEL[e.modo] ?? e.modo}
                  </span>
                </div>
                <div className="flex gap-3 mt-0.5 flex-wrap">
                  <p className="text-xs text-stone-400">{formatDate(e.fecha)}</p>
                  <p className="text-xs text-stone-400">Stake: {e.stake.toFixed(2)} €</p>
                </div>
                {e.notas && <p className="text-xs text-stone-400 truncate mt-0.5">{e.notas}</p>}
              </div>
              <div className="shrink-0 text-right">
                <p className={`font-bold text-sm font-mono ${e.resultado >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                  {e.resultado >= 0 ? '+' : ''}{e.resultado.toFixed(2)} €
                </p>
                <p className="text-[10px] text-stone-400 mt-0.5">
                  {e.resultado >= 0 ? 'beneficio' : 'pérdida calificante'}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Puente con el resto del producto */}
      {entradas.length === 0 && (
        <div className="rounded-2xl bg-white border border-stone-100 p-5">
          <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-3">¿Cómo se alimenta el historial?</p>
          <div className="flex flex-col gap-2">
            {[
              { icon: '🏠', label: 'Completar una casa', sub: 'Marca una oferta como completada desde la ficha de casa', href: '/casas', cta: 'Ver casas' },
              { icon: '🎁', label: 'Limpiar un bono', sub: 'Marca un bono como limpiado desde la sección Bonos', href: '/bonos', cta: 'Ver bonos' },
              { icon: '✏️', label: 'Registro manual', sub: 'Usa el botón "+ Registrar operación" para añadir manualmente', href: null, cta: null },
            ].map(({ icon, label, sub, href, cta }) => (
              <div key={label} className="flex items-center gap-3 py-2 border-b border-stone-50 last:border-0">
                <span className="text-xl shrink-0">{icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-stone-700">{label}</p>
                  <p className="text-xs text-stone-400">{sub}</p>
                </div>
                {href && cta && (
                  <Link href={href} className="text-xs text-emerald-500 hover:underline shrink-0">{cta} →</Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Danger zone */}
      {entradas.length > 0 && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold text-red-700">Zona peligrosa</p>
            <p className="text-xs text-red-500 mt-0.5">Borrar todos los datos locales (irreversible)</p>
          </div>
          <button
            onClick={() => {
              if (confirm('¿Seguro? Se borrarán todos tus datos.')) { resetState(); refresh() }
            }}
            className="text-xs px-3 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition-all"
          >
            Resetear datos
          </button>
        </div>
      )}
    </div>
  )
}
