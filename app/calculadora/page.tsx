'use client'
// app/calculadora/page.tsx

import { useState } from 'react'

// ─── TIPOS ────────────────────────────────────────────────────────────────────
type Tab = 'oddsmatcher' | 'dutcher'
type ModoClasica = 'dinero-real' | 'apuesta-gratis' | 'bonos' | 'rollover' | 'reembolso'

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function n(v: string) { return parseFloat(v) || 0 }

// Copy condicional para el resultado principal
function getResultadoLabel(valor: number, modo: ModoClasica): { titulo: string; subtitulo: string } {
  if (modo === 'dinero-real' || modo === 'rollover') {
    if (valor >= 0) return { titulo: 'Beneficio estimado', subtitulo: 'Resultado neto garantizado' }
    return { titulo: 'Pérdida calificante', subtitulo: 'Coste de desbloquear la oferta' }
  }
  if (modo === 'apuesta-gratis' || modo === 'bonos') {
    if (valor >= 0) return { titulo: 'Beneficio estimado', subtitulo: 'Conversión de la freebet' }
    return { titulo: 'Resultado estimado', subtitulo: 'Revisa las cuotas' }
  }
  if (modo === 'reembolso') {
    if (valor >= 0) return { titulo: 'Beneficio estimado', subtitulo: 'Incluye valor del reembolso' }
    return { titulo: 'Pérdida calificante', subtitulo: 'Coste de activar el reembolso' }
  }
  return { titulo: 'Resultado estimado', subtitulo: '' }
}

// ─── INPUT FIELD ──────────────────────────────────────────────────────────────
function InputField({
  label, value, onChange, prefix, suffix, hint, type = 'number', microcopy
}: {
  label: string; value: string; onChange: (v: string) => void
  prefix?: string; suffix?: string; hint?: string; type?: string; microcopy?: string
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-600 mb-1">{label}</label>
      {microcopy && <p className="text-xs text-gray-400 mb-1.5">{microcopy}</p>}
      <div className="flex">
        {prefix && <span className="bg-gray-100 border border-r-0 border-gray-200 px-2.5 py-2 text-xs text-gray-500 rounded-l-lg">{prefix}</span>}
        <input
          type={type} value={value} onChange={e => onChange(e.target.value)}
          step="0.01" min="0"
          className={`flex-1 border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all bg-white
            ${prefix ? 'rounded-r-lg' : suffix ? 'rounded-l-lg' : 'rounded-lg'}`}
        />
        {suffix && <span className="bg-gray-100 border border-l-0 border-gray-200 px-2.5 py-2 text-xs text-gray-500 rounded-r-lg">{suffix}</span>}
      </div>
      {hint && <p className="text-xs text-gray-400 mt-1">{hint}</p>}
    </div>
  )
}

// ─── TABLA RESULTADO ──────────────────────────────────────────────────────────
function TablaResultado({
  label1, label2, bm1, bm2, total1, total2, benefSiGana, benefSiPierde
}: {
  label1: string; label2: string
  bm1: number; bm2: number; total1: number; total2: number
  benefSiGana: number; benefSiPierde: number
}) {
  const mismoResultado = Math.abs(benefSiGana - benefSiPierde) < 0.05
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden text-sm">
      <div className="px-4 py-2.5 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Resultado por escenario</span>
        {mismoResultado && (
          <span className="text-xs text-emerald-600 font-medium">✓ Ambos escenarios dan el mismo resultado neto</span>
        )}
      </div>
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-left px-4 py-2 text-xs text-gray-400 font-semibold">ESCENARIO</th>
            <th className="text-right px-4 py-2 text-xs text-gray-400 font-semibold">BOOKMAKER</th>
            <th className="text-right px-4 py-2 text-xs text-gray-400 font-semibold">EXCHANGE</th>
            <th className="text-right px-4 py-2 text-xs text-gray-400 font-semibold">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-100">
            <td className="px-4 py-2.5 text-xs font-medium text-green-700 bg-green-50">✅ {label1}</td>
            <td className="px-4 py-2.5 text-xs text-right font-mono text-green-600">+{bm1.toFixed(2)}</td>
            <td className="px-4 py-2.5 text-xs text-right font-mono text-red-500">-{bm2.toFixed(2)}</td>
            <td className={`px-4 py-2.5 text-xs text-right font-bold ${benefSiGana >= 0 ? 'text-green-600' : 'text-red-500'}`}>
              {benefSiGana >= 0 ? '+' : ''}{benefSiGana.toFixed(2)}
            </td>
          </tr>
          <tr className="border-t border-gray-100">
            <td className="px-4 py-2.5 text-xs font-medium text-blue-700 bg-blue-50">🔄 {label2}</td>
            <td className="px-4 py-2.5 text-xs text-right font-mono text-red-500">-{total1.toFixed(2)}</td>
            <td className="px-4 py-2.5 text-xs text-right font-mono text-green-600">+{total2.toFixed(2)}</td>
            <td className={`px-4 py-2.5 text-xs text-right font-bold ${benefSiPierde >= 0 ? 'text-green-600' : 'text-red-500'}`}>
              {benefSiPierde >= 0 ? '+' : ''}{benefSiPierde.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

// ─── CHECKLIST DE EJECUCIÓN ───────────────────────────────────────────────────
function ChecklistEjecucion({ modo }: { modo: ModoClasica }) {
  const pasos: Record<ModoClasica, string[]> = {
    'dinero-real': [
      'Copia el importe de apuesta (stake)',
      'Abre la casa de apuestas y selecciona el evento',
      'Introduce la cuota y confirma la apuesta A FAVOR',
      'Abre Betfair Exchange en el mismo evento',
      'Introduce el stake lay calculado EN CONTRA',
      'Confirma que las cuotas no han cambiado',
      'Confirma la apuesta lay en Betfair',
    ],
    'apuesta-gratis': [
      'Verifica que tienes la freebet disponible en tu cuenta',
      'Busca un evento con cuota alta (3.00+) en Oddspedia',
      'En la casa: selecciona la cuota y MARCA "Usar Apuesta Gratis"',
      'Copia el stake lay calculado',
      'Abre Betfair Exchange y coloca la apuesta EN CONTRA',
      'Confirma que usas la freebet, no dinero real',
    ],
    'bonos': [
      'Verifica que tienes el bono SR disponible',
      'Selecciona un evento con cuota moderada (2.00-3.00)',
      'En la casa: marca el bono antes de confirmar',
      'Introduce el stake lay en Betfair Exchange',
      'Confirma ambas apuestas',
    ],
    'rollover': [
      'Verifica el volumen pendiente en la sección de bonos',
      'Busca cuotas altas con rating >90% en Oddspedia',
      'Apuesta el stake calculado A FAVOR en la casa',
      'Cubre EN CONTRA en Betfair Exchange',
      'Anota el volumen apostado y repite hasta completar',
    ],
    'reembolso': [
      'Verifica que el reembolso está activo (activar si es manual)',
      'Selecciona un evento con buena liquidez',
      'Apuesta A FAVOR en la casa con el stake indicado',
      'Cubre EN CONTRA en Betfair con el stake lay calculado',
      'Si pierdes: reclamar el reembolso según T&C de la casa',
      'Si recibes freebet: usar calculadora APUESTA GRATIS para limpiarla',
    ],
  }

  return (
    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">📋 Pasos de ejecución</p>
      <ol className="flex flex-col gap-2">
        {pasos[modo].map((paso, i) => (
          <li key={i} className="flex gap-2.5 text-xs text-gray-600">
            <span className="w-5 h-5 rounded-full bg-white border border-gray-200 text-gray-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
              {i + 1}
            </span>
            <span className="leading-relaxed">{paso}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

// ─── ODDSMATCHER ──────────────────────────────────────────────────────────────
function OddsMatcherCalc() {
  const [modo, setModo] = useState<ModoClasica>('dinero-real')
  const [stake, setStake] = useState('100')
  const [cuotaBM, setCuotaBM] = useState('2.00')
  const [cuotaExch, setCuotaExch] = useState('2.10')
  const [comision, setComision] = useState('5')
  const [reembolso, setReembolso] = useState('100')
  const [rolloverX, setRolloverX] = useState('10')
  const [copiado, setCopiado] = useState(false)

  const s = n(stake), cbm = n(cuotaBM), ce = n(cuotaExch), com = n(comision) / 100, reb = n(reembolso)

  let sc = 0, bGana = 0, bPierde = 0
  if (s > 0 && cbm > 0 && ce > 0) {
    if (modo === 'dinero-real') {
      sc = (s * cbm) / (ce - com * ce)
      bGana = s * (cbm - 1) - sc * (ce - 1) * (1 - com)
      bPierde = sc * (1 - com) - s
    } else if (modo === 'apuesta-gratis') {
      sc = (s * (cbm - 1)) / (ce * (1 - com))
      bGana = s * (cbm - 1) - sc * (ce - 1) * (1 - com)
      bPierde = sc * (1 - com)
    } else if (modo === 'bonos') {
      sc = (s * cbm) / (ce * (1 - com))
      bGana = s * (cbm - 1) - sc * (ce - 1) * (1 - com)
      bPierde = sc * (1 - com) - s
    } else if (modo === 'reembolso') {
      const vReb = reb * 0.70
      sc = Math.max(0, (s * cbm - vReb) / (ce * (1 - com)))
      bGana = s * (cbm - 1) - sc * (ce - 1) * (1 - com)
      bPierde = sc * (1 - com) - s + vReb
    } else if (modo === 'rollover') {
      sc = (s * cbm) / (ce - com * ce)
      bGana = s * (cbm - 1) - sc * (ce - 1) * (1 - com)
      bPierde = sc * (1 - com) - s
    }
  }

  const beneficio = Math.min(bGana, bPierde)
  const rating = s > 0 ? ((beneficio + s) / s) * 100 : 0
  const retencion = modo === 'apuesta-gratis' && s > 0 ? (bPierde / s) * 100 : null
  const { titulo, subtitulo } = getResultadoLabel(beneficio, modo)

  const MODOS: { id: ModoClasica; label: string; color: string; colorBg: string }[] = [
    { id: 'dinero-real', label: 'DINERO REAL', color: 'bg-teal-500', colorBg: 'bg-teal-500' },
    { id: 'apuesta-gratis', label: 'APUESTA GRATIS', color: 'bg-blue-500', colorBg: 'bg-blue-500' },
    { id: 'bonos', label: 'BONOS', color: 'bg-purple-500', colorBg: 'bg-purple-500' },
    { id: 'rollover', label: 'ROLLOVER', color: 'bg-amber-500', colorBg: 'bg-amber-500' },
    { id: 'reembolso', label: 'REEMBOLSO', color: 'bg-rose-500', colorBg: 'bg-rose-500' },
  ]
  const modoActual = MODOS.find(m => m.id === modo)!

  const handleCopiar = () => {
    const texto = `Apuesta A FAVOR: ${s.toFixed(2)}€ @ ${cbm} | Apuesta lay Betfair: ${sc.toFixed(2)}€ @ ${ce} | Resultado estimado: ${beneficio >= 0 ? '+' : ''}${beneficio.toFixed(2)}€`
    navigator.clipboard.writeText(texto).then(() => {
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    })
  }

  return (
    <div className="space-y-4">
      {/* Modos */}
      <div className="bg-gray-100 rounded-2xl p-1 flex gap-1 overflow-x-auto">
        {MODOS.map(m => (
          <button key={m.id} onClick={() => setModo(m.id)}
            className={`flex-1 min-w-[90px] py-2 px-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap
              ${modo === m.id ? `${m.color} text-white shadow-md` : 'text-gray-500 hover:bg-white'}`}>
            {m.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Inputs + checklist */}
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-2xl border border-gray-100 p-5 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <InputField
                label="Importe apuesta"
                value={stake} onChange={setStake} prefix="€"
                microcopy="Stake que vas a apostar en la casa"
              />
              <InputField
                label="Cuota bookmaker"
                value={cuotaBM} onChange={setCuotaBM}
                microcopy="Cuota A FAVOR en la casa de apuestas"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <InputField
                label="Cuota lay (Exchange)"
                value={cuotaExch} onChange={setCuotaExch}
                microcopy="Cuota EN CONTRA en Betfair"
              />
              <InputField
                label="Comisión Betfair"
                value={comision} onChange={setComision} suffix="%"
                microcopy="Normalmente 5% en ES"
              />
            </div>
            {modo === 'reembolso' && (
              <InputField
                label="Importe reembolso"
                value={reembolso} onChange={setReembolso} prefix="€"
                hint="Freebet que recibirías si pierdes"
              />
            )}
            {modo === 'rollover' && (
              <InputField
                label="Rollover requerido"
                value={rolloverX} onChange={setRolloverX} suffix="x"
                microcopy="Multiplicador de volumen exigido por la casa"
              />
            )}

            {/* Hint contextual */}
            <div className="bg-gray-50 rounded-xl p-3 text-xs text-gray-500 border border-gray-100">
              {modo === 'dinero-real' && '💡 Apuesta calificante. El objetivo es minimizar la pérdida mientras desbloqueas el bono.'}
              {modo === 'apuesta-gratis' && '💡 Freebet SNR (stake no devuelto). Busca cuotas altas (3.00+) para maximizar retención.'}
              {modo === 'bonos' && '💡 Freebet SR (stake devuelto si ganas). Cuotas más bajas son aceptables.'}
              {modo === 'reembolso' && '💡 Si pierdes recibes la freebet. El cálculo ya incluye su valor estimado al 70%.'}
              {modo === 'rollover' && '💡 Calcula la pérdida esperada al completar el volumen de rollover requerido.'}
            </div>

            {/* Oddspedia como ayuda contextual */}
            <a
              href="https://oddspedia.com/es" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span>📊</span>
              <span className="underline underline-offset-2">Comparar cuotas en Oddspedia →</span>
            </a>
          </div>

          {/* Checklist de ejecución — rellena el espacio muerto */}
          <ChecklistEjecucion modo={modo} />
        </div>

        {/* Resultado */}
        <div className="space-y-3">
          {/* Resultado principal — copy condicional */}
          <div className={`${modoActual.colorBg} rounded-2xl p-5 text-white`}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide opacity-75 mb-1">{titulo}</p>
                <p className="text-4xl font-bold font-mono">
                  {beneficio >= 0 ? '+' : ''}{beneficio.toFixed(2)} €
                </p>
                <p className="text-xs opacity-60 mt-1">{subtitulo}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs opacity-70 uppercase tracking-wide">
                  {retencion !== null ? 'Retención' : 'Eficiencia'}
                </p>
                <p className="text-2xl font-bold">
                  {retencion !== null ? `${retencion.toFixed(1)}%` : `${rating.toFixed(1)}%`}
                </p>
                <p className="text-xs opacity-50 mt-0.5">
                  {retencion !== null ? 'del valor de la freebet' : 'de cobertura'}
                </p>
              </div>
            </div>
          </div>

          {/* Apuesta a favor */}
          <div className="bg-teal-50 border border-teal-100 rounded-2xl p-4">
            <p className="text-xs font-bold text-teal-600 mb-1">① APUESTA A FAVOR · BOOKMAKER</p>
            <p className="text-2xl font-bold text-teal-700">{s.toFixed(2)} €</p>
            <p className="text-xs text-teal-500 mt-0.5">A cuota {cbm}</p>
          </div>

          {/* Apuesta lay */}
          <div className="bg-rose-50 border border-rose-100 rounded-2xl p-4">
            <p className="text-xs font-bold text-rose-600 mb-1">② APUESTA EN CONTRA · BETFAIR EXCHANGE</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-rose-700">{sc.toFixed(2)} €</p>
                <p className="text-xs text-rose-500 mt-0.5">
                  A cuota {ce} · Riesgo (liability): <strong>{(sc * (ce - 1)).toFixed(2)} €</strong>
                </p>
              </div>
              <a
                href="https://www.betfair.es/exchange/plus/" target="_blank" rel="noopener noreferrer"
                className="bg-rose-500 text-white text-xs px-3 py-1.5 rounded-full hover:bg-rose-600 transition-colors font-semibold shrink-0"
              >
                Abrir Betfair →
              </a>
            </div>
          </div>

          {/* Tabla escenarios */}
          <TablaResultado
            label1="Apuesta a favor gana" label2="Apuesta en contra gana"
            bm1={s * (cbm - 1)} bm2={sc * (ce - 1)}
            total1={s} total2={sc * (1 - com)}
            benefSiGana={bGana} benefSiPierde={bPierde}
          />

          {/* Acciones post-cálculo */}
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={handleCopiar}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
            >
              {copiado ? '✅ Copiado' : '📋 Copiar cálculo'}
            </button>
            <a
              href="https://www.betfair.es/exchange/plus/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 transition-colors border border-rose-100"
            >
              ♻️ Abrir Exchange
            </a>
            <a
              href="https://oddspedia.com/es" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors border border-blue-100"
            >
              📊 Comparar cuotas
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── DUTCHER ─────────────────────────────────────────────────────────────────
function DutcherCalc() {
  const [modo, setModo] = useState<'dinero-real' | 'apuesta-gratis'>('dinero-real')
  const [stake, setStake] = useState('100')
  const [bm1, setBm1] = useState('Bookmaker 1')
  const [bm2, setBm2] = useState('Bookmaker 2')
  const [c1, setC1] = useState('2.50')
  const [c2, setC2] = useState('2.50')
  const [copiado, setCopiado] = useState(false)

  const s = n(stake), cc1 = n(c1), cc2 = n(c2)

  let sc2 = 0, bGana = 0, bPierde = 0
  if (s > 0 && cc1 > 0 && cc2 > 0) {
    if (modo === 'dinero-real') {
      sc2 = (s * cc1) / cc2
      bGana = s * (cc1 - 1) - sc2
      bPierde = sc2 * (cc2 - 1) - s
    } else {
      sc2 = (s * (cc1 - 1)) / (cc2 - 1)
      bGana = s * (cc1 - 1) - sc2
      bPierde = sc2 * (cc2 - 1) - s
    }
  }

  const beneficio = Math.min(bGana, bPierde)
  const rating = s > 0 ? ((beneficio + s) / s) * 100 : 0
  const resultadoLabel = beneficio >= 0 ? 'Beneficio estimado' : 'Pérdida calificante'

  const handleCopiar = () => {
    const texto = `${bm1}: ${s.toFixed(2)}€ @ ${cc1} | ${bm2}: ${sc2.toFixed(2)}€ @ ${cc2} | Resultado: ${beneficio >= 0 ? '+' : ''}${beneficio.toFixed(2)}€`
    navigator.clipboard.writeText(texto).then(() => {
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    })
  }

  return (
    <div className="space-y-4">
      {/* Descripción + ejemplo */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800">
        <strong>¿Cuándo usarlo?</strong> Cuando tienes freebets en dos casas distintas y quieres cubrirte en resultados opuestos (Over/Under, 1X/2…) sin necesitar el Exchange.
      </div>

      {/* Modo */}
      <div className="bg-gray-100 rounded-xl p-1 flex gap-1 w-fit">
        {(['dinero-real', 'apuesta-gratis'] as const).map(m => (
          <button key={m} onClick={() => setModo(m)}
            className={`py-2 px-4 rounded-lg text-xs font-bold transition-all
              ${modo === m ? 'bg-purple-500 text-white shadow' : 'text-gray-500 hover:bg-white'}`}>
            {m === 'dinero-real' ? 'DINERO REAL' : 'APUESTA GRATIS'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Inputs */}
        <div className="flex flex-col gap-3">
          <InputField
            label="Importe apuesta BM1"
            value={stake} onChange={setStake} prefix="€"
            microcopy="Stake que apuestas en el primer bookmaker"
          />

          <div className="bg-teal-50 rounded-xl p-4 space-y-3 border border-teal-100">
            <p className="text-xs font-bold text-teal-700">① BOOKMAKER 1 · APUESTA A FAVOR</p>
            <InputField label="Nombre del bookmaker" value={bm1} onChange={setBm1} type="text" />
            <InputField
              label="Cuota (resultado 1)"
              value={c1} onChange={setC1}
              microcopy="Ej: Over 2.5, resultado 1X, etc."
            />
          </div>

          <div className="bg-purple-50 rounded-xl p-4 space-y-3 border border-purple-100">
            <p className="text-xs font-bold text-purple-700">② BOOKMAKER 2 · RESULTADO CONTRARIO</p>
            <InputField label="Nombre del bookmaker" value={bm2} onChange={setBm2} type="text" />
            <InputField
              label="Cuota (resultado contrario)"
              value={c2} onChange={setC2}
              microcopy="Ej: Under 2.5, resultado 2, etc."
            />
          </div>

          <div className="bg-gray-50 rounded-xl p-3 text-xs text-gray-500 border border-gray-100">
            ⚠️ Sin comisión de Exchange. Asegúrate de que los resultados sean mutuamente excluyentes.
          </div>
        </div>

        {/* Resultado */}
        <div className="space-y-3">
          {/* Resultado principal */}
          <div className="bg-purple-500 rounded-2xl p-5 text-white">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide opacity-75 mb-1">{resultadoLabel}</p>
                <p className="text-4xl font-bold font-mono">
                  {beneficio >= 0 ? '+' : ''}{beneficio.toFixed(2)} €
                </p>
                <p className="text-xs opacity-60 mt-1">Resultado neto estimado</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs opacity-70 uppercase tracking-wide">Eficiencia</p>
                <p className="text-2xl font-bold">{rating.toFixed(1)}%</p>
                <p className="text-xs opacity-50 mt-0.5">de cobertura</p>
              </div>
            </div>
          </div>

          <div className="bg-teal-50 border border-teal-100 rounded-2xl p-4">
            <p className="text-xs font-bold text-teal-600 mb-1">① {bm1.toUpperCase()} · APUESTA A FAVOR</p>
            <p className="text-2xl font-bold text-teal-700">{s.toFixed(2)} €</p>
            <p className="text-xs text-teal-500">A cuota {cc1.toFixed(2)}</p>
          </div>

          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-4">
            <p className="text-xs font-bold text-purple-600 mb-1">② {bm2.toUpperCase()} · RESULTADO CONTRARIO</p>
            <p className="text-2xl font-bold text-purple-700">{sc2.toFixed(2)} €</p>
            <p className="text-xs text-purple-500">A cuota {cc2.toFixed(2)}</p>
          </div>

          <TablaResultado
            label1={`${bm1} gana`} label2={`${bm2} gana`}
            bm1={s * (cc1 - 1)} bm2={sc2}
            total1={s} total2={sc2 * (cc2 - 1)}
            benefSiGana={bGana} benefSiPierde={bPierde}
          />

          {/* Acciones post-cálculo */}
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={handleCopiar}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
            >
              {copiado ? '✅ Copiado' : '📋 Copiar cálculo'}
            </button>
            <a
              href="https://oddspedia.com/es" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors border border-blue-100"
            >
              📊 Comparar cuotas
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── PÁGINA PRINCIPAL ─────────────────────────────────────────────────────────
export default function CalculadoraPage() {
  const [tab, setTab] = useState<Tab>('oddsmatcher')

  const TABS: { id: Tab; label: string; sub: string; icon: string }[] = [
    { id: 'oddsmatcher', label: 'Oddsmatcher', sub: 'Bookmaker + Exchange', icon: '⚡' },
    { id: 'dutcher', label: 'Dutcher', sub: 'Dos bookmakers', icon: '🔀' },
  ]

  return (
    <div className="space-y-5">
      {/* Header compacto */}
      <div>
        <h1 className="text-xl font-bold text-stone-100">🧮 Calculadora</h1>
        <p className="text-stone-400 text-sm mt-0.5">Calcula tu cobertura óptima antes de ejecutar</p>
      </div>

      {/* Selector de herramienta */}
      <div className="flex gap-3 flex-wrap items-center">
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`flex items-center gap-3 px-5 py-3 rounded-2xl border-2 transition-all font-medium
              ${tab === t.id
                ? 'border-[#2A1F3D] bg-[#2A1F3D] text-white shadow-lg'
                : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'}`}>
            <span className="text-xl">{t.icon}</span>
            <div className="text-left">
              <p className="text-sm font-bold">{t.label}</p>
              <p className={`text-xs ${tab === t.id ? 'text-purple-300' : 'text-gray-400'}`}>{t.sub}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Contenido */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        {tab === 'oddsmatcher' && <OddsMatcherCalc />}
        {tab === 'dutcher' && <DutcherCalc />}
      </div>
    </div>
  )
}
