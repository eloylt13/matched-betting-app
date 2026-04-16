'use client'

import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'

type Tab = 'oddsmatcher' | 'dutcher'
type ModoClasica = 'dinero-real' | 'apuesta-gratis' | 'bonos' | 'rollover' | 'reembolso'
type ReembolsoTipo = 'cash' | 'freebet'
type ModoDutcher = 'dinero-real' | 'apuesta-gratis'
type QuickChoice = 'betfair' | 'freebet' | 'dutcher'
type Moneda = '€' | 'USD' | 'MXN' | 'COP' | 'CLP' | 'PEN'

const MONEDAS: Moneda[] = ['€', 'USD', 'MXN', 'COP', 'CLP', 'PEN']

const PANEL =
  'relative overflow-hidden rounded-[1.75rem] border border-violet-200/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(248,244,255,0.98)_100%)] shadow-[0_24px_70px_rgba(46,16,101,0.08)] ring-1 ring-white/85 backdrop-blur-md'

const PANEL_INNER =
  'relative overflow-hidden rounded-[1.5rem] border border-violet-200/60 bg-white/80 shadow-[0_18px_48px_rgba(46,16,101,0.06)] ring-1 ring-white/75 backdrop-blur-sm'

const SUBTLE_BADGE =
  'inline-flex items-center rounded-full border border-violet-200/70 bg-violet-50/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700 shadow-sm shadow-violet-950/5'

export type CalculadoraPrefill = {
  modo?: ModoClasica
  stake?: string
  backOdds?: string
  layOdds?: string
  commission?: string
  bookmaker?: string
  refundType?: ReembolsoTipo
  refundAmount?: string
  currency?: Moneda
}

function n(v: string) {
  return parseFloat(v) || 0
}

function isModoClasica(value: string | null): value is ModoClasica {
  return value === 'dinero-real' || value === 'apuesta-gratis' || value === 'bonos' || value === 'rollover' || value === 'reembolso'
}

function isReembolsoTipo(value: string | null): value is ReembolsoTipo {
  return value === 'cash' || value === 'freebet'
}

function hasPrefillValues(prefill: CalculadoraPrefill | undefined) {
  if (!prefill) {
    return false
  }

  return Object.values(prefill).some((value) => value !== undefined)
}

function mapCurrency(value: string | null): Moneda | undefined {
  if (value === 'EUR') return '€'
  if (value === 'USD') return 'USD'
  return undefined
}

function formatBookmaker(value: string) {
  return value
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

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

function InputField({
  label,
  value,
  onChange,
  prefix,
  suffix,
  hint,
  type = 'number',
  microcopy,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  prefix?: string
  suffix?: string
  hint?: string
  type?: string
  microcopy?: string
}) {
  const hasPrefix = Boolean(prefix)
  const hasSuffix = Boolean(suffix)

  return (
    <div>
      <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
        {label}
      </label>
      {microcopy && <p className="mb-2 text-xs leading-5 text-slate-500">{microcopy}</p>}
      <div className="flex w-full">
        {prefix && (
          <span className="inline-flex items-center rounded-l-xl border border-r-0 border-violet-200/70 bg-violet-50/90 px-3 py-2 text-xs font-semibold text-violet-700">
            {prefix}
          </span>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          step="0.01"
          min="0"
          className={`w-full flex-1 border border-violet-200/70 bg-white/90 px-3 py-2.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-violet-300 focus:ring-2 focus:ring-violet-300/30 ${
            hasPrefix ? 'rounded-r-xl' : hasSuffix ? 'rounded-l-xl' : 'rounded-xl'
          }`}
        />
        {suffix && (
          <span className="inline-flex items-center rounded-r-xl border border-l-0 border-violet-200/70 bg-violet-50/90 px-3 py-2 text-xs font-semibold text-violet-700">
            {suffix}
          </span>
        )}
      </div>
      {hint && <p className="mt-1.5 text-[11px] leading-5 text-slate-500">{hint}</p>}
    </div>
  )
}

export default function CalculadoraPage({
  initialPrefill,
}: {
  initialPrefill?: CalculadoraPrefill
}) {
  const [tab, setTab] = useState<Tab>('oddsmatcher')
  const [oddsmatcherMode, setOddsmatcherMode] = useState<ModoClasica>(initialPrefill?.modo ?? 'dinero-real')
  const [dutcherMode, setDutcherMode] = useState<ModoDutcher>('dinero-real')
  const [moneda, setMoneda] = useState<Moneda>(initialPrefill?.currency ?? '€')
  const searchParams = useSearchParams()

  const prefill = useMemo<CalculadoraPrefill | undefined>(() => {
    const hasParams = [
      'modo',
      'stake',
      'backOdds',
      'layOdds',
      'commission',
      'bookmaker',
      'refundType',
      'refundAmount',
      'currency',
    ].some((key) => searchParams.get(key) !== null)

    if (!hasParams) {
      return hasPrefillValues(initialPrefill) ? initialPrefill : undefined
    }

    const modo = searchParams.get('modo')
    const refundType = searchParams.get('refundType')

    return {
      modo: isModoClasica(modo) ? modo : undefined,
      stake: searchParams.get('stake') ?? undefined,
      backOdds: searchParams.get('backOdds') ?? undefined,
      layOdds: searchParams.get('layOdds') ?? undefined,
      commission: searchParams.get('commission') ?? undefined,
      bookmaker: searchParams.get('bookmaker') ?? undefined,
      refundType: isReembolsoTipo(refundType) ? refundType : undefined,
      refundAmount: searchParams.get('refundAmount') ?? undefined,
      currency: mapCurrency(searchParams.get('currency')),
    }
  }, [initialPrefill, searchParams])

  useEffect(() => {
    if (!prefill) {
      return
    }

    if (prefill.modo) {
      setTab('oddsmatcher')
      setOddsmatcherMode(prefill.modo)
    }

    if (prefill.currency) {
      setMoneda(prefill.currency)
    }
  }, [prefill])

  const TABS: { id: Tab; label: string; sub: string; icon: string }[] = [
    { id: 'oddsmatcher', label: 'Oddsmatcher', sub: 'Bookmaker + Exchange', icon: 'O' },
    { id: 'dutcher', label: 'Dutcher', sub: 'Dos bookmakers', icon: 'D' },
  ]

  const quickChoice: QuickChoice = tab === 'dutcher'
    ? 'dutcher'
    : oddsmatcherMode === 'apuesta-gratis'
      ? 'freebet'
      : 'betfair'

  const quickOptions: {
    id: QuickChoice
    label: string
    description: string
    apply: () => void
  }[] = [
    {
      id: 'betfair',
      label: 'Una apuesta con Betfair',
      description: 'La app te lleva a Oddsmatcher en el modo más habitual para empezar con exchange.',
      apply: () => {
        setTab('oddsmatcher')
        setOddsmatcherMode('dinero-real')
      },
    },
    {
      id: 'freebet',
      label: 'Una apuesta gratis / freebet',
      description: 'La app te lleva directamente al modo de freebet para que no tengas que elegirlo a mano.',
      apply: () => {
        setTab('oddsmatcher')
        setOddsmatcherMode('apuesta-gratis')
      },
    },
    {
      id: 'dutcher',
      label: 'Dos casas sin exchange',
      description: 'La app te lleva a Dutcher cuando quieres cubrir dos resultados opuestos sin exchange.',
      apply: () => {
        setTab('dutcher')
        setDutcherMode('dinero-real')
      },
    },
  ]

  function handleTabChange(nextTab: Tab) {
    setTab(nextTab)
  }

  return (
    <div className="relative space-y-6">
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-36 bg-[radial-gradient(circle_at_top,rgba(167,139,250,0.16),transparent_64%)]" />

      <section className={PANEL}>
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/75 to-transparent" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-28 bottom-[-6rem] h-56 w-56 rounded-full bg-fuchsia-400/8 blur-3xl" />

        <div className="relative px-5 py-6 sm:px-6 sm:py-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className={SUBTLE_BADGE}>Herramienta premium</div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Calculadora</h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                Empieza por la guía rápida, ajusta la moneda y entra en el modo que necesites sin perder claridad ni velocidad.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Oddsmatcher', 'Dutcher', 'Prefills', 'Betfair'].map((label) => (
                  <span key={label} className="rounded-full border border-violet-200/60 bg-white/80 px-3 py-1 text-[11px] font-medium text-slate-600 shadow-sm">
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 lg:min-w-[280px]">
              <div className="rounded-2xl border border-violet-200/60 bg-white/80 px-4 py-3 shadow-[0_14px_34px_rgba(46,16,101,0.06)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700">Modo activo</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">{tab === 'oddsmatcher' ? 'Oddsmatcher' : 'Dutcher'}</p>
              </div>
              <div className="rounded-2xl border border-violet-200/60 bg-white/80 px-4 py-3 shadow-[0_14px_34px_rgba(46,16,101,0.06)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700">Moneda</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">{moneda}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={PANEL}>
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/75 to-transparent" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="relative p-5 sm:p-6">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700">Guía rápida</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">¿Qué quieres calcular?</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Elige una intención y la calculadora te llevará al modo correcto con la configuración más habitual.
              </p>
            </div>
          </div>

          <div className="grid gap-3 lg:grid-cols-3">
            {quickOptions.map((option) => {
              const active = quickChoice === option.id
              return (
                <button
                  key={option.id}
                  onClick={option.apply}
                  className={`group relative overflow-hidden rounded-[1.5rem] border p-4 text-left transition-all duration-200 hover:-translate-y-0.5 ${
                    active
                      ? 'border-violet-200/70 bg-[linear-gradient(180deg,rgba(124,58,237,0.1)_0%,rgba(255,255,255,0.98)_100%)] shadow-[0_18px_42px_rgba(124,58,237,0.12)]'
                      : 'border-violet-100/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(248,244,255,0.9)_100%)] shadow-[0_14px_32px_rgba(46,16,101,0.04)] hover:border-violet-200/70 hover:bg-white'
                  }`}
                >
                  <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/70 to-transparent" />
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-bold text-slate-900">{option.label}</p>
                      <p className="mt-2 text-xs leading-6 text-slate-500">{option.description}</p>
                    </div>
                    <span className={`mt-0.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${active ? 'border-violet-200/80 bg-violet-500/10 text-violet-700' : 'border-violet-100/80 bg-white/90 text-slate-500'}`}>
                      {active ? 'Activo' : 'Ir'}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className={PANEL}>
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/75 to-transparent" />
        <div className="relative p-5 sm:p-6">
          <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700">Moneda</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">Mantén el cálculo consistente con el mercado y la casa que estás usando.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {MONEDAS.map((m) => {
                const active = moneda === m
                return (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMoneda(m)}
                    className={`rounded-full border px-3.5 py-2 text-xs font-semibold transition-all ${
                      active
                        ? 'border-violet-300/70 bg-violet-500 px-4 text-white shadow-[0_14px_34px_rgba(124,58,237,0.26)]'
                        : 'border-violet-200/70 bg-white/85 text-slate-600 hover:border-violet-300/80 hover:bg-violet-50'
                    }`}
                  >
                    {m}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {TABS.map((t) => {
              const active = tab === t.id
              return (
                <button
                  key={t.id}
                  onClick={() => handleTabChange(t.id)}
                  className={`group flex min-w-[220px] items-center gap-3 rounded-[1.25rem] border px-4 py-3.5 text-left transition-all duration-200 hover:-translate-y-0.5 ${
                    active
                      ? 'border-violet-200/70 bg-[linear-gradient(135deg,#141022_0%,#2e1a54_45%,#5b21b6_100%)] text-white shadow-[0_20px_50px_rgba(46,16,101,0.28)]'
                      : 'border-violet-100/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(248,244,255,0.92)_100%)] text-slate-700 shadow-[0_12px_30px_rgba(46,16,101,0.04)] hover:border-violet-200/70 hover:bg-white'
                  }`}
                >
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border text-sm font-bold ${active ? 'border-white/15 bg-white/10 text-white' : 'border-violet-200/70 bg-violet-50 text-violet-700'}`}>
                    {t.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold">{t.label}</p>
                    <p className={`mt-1 text-xs ${active ? 'text-violet-100/75' : 'text-slate-500'}`}>{t.sub}</p>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="mt-6 rounded-[1.75rem] border border-violet-200/60 bg-white/85 p-4 shadow-[0_18px_48px_rgba(46,16,101,0.06)] ring-1 ring-white/80 sm:p-6">
            {tab === 'oddsmatcher' && <OddsMatcherCalc modo={oddsmatcherMode} onModoChange={setOddsmatcherMode} moneda={moneda} prefill={prefill} />}
            {tab === 'dutcher' && <DutcherCalc modo={dutcherMode} moneda={moneda} />}
          </div>
        </div>
      </section>
    </div>
  )
}

function TablaResultado({
  label1,
  label2,
  bm1,
  bm2,
  total1,
  total2,
  benefSiGana,
  benefSiPierde,
}: {
  label1: string
  label2: string
  bm1: number
  bm2: number
  total1: number
  total2: number
  benefSiGana: number
  benefSiPierde: number
}) {
  const isEven = Math.abs(benefSiGana - benefSiPierde) < 0.01

  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-violet-200/60 bg-white/90 shadow-[0_18px_48px_rgba(46,16,101,0.06)] ring-1 ring-white/80">
      <div className="flex items-center justify-between gap-3 border-b border-violet-100/80 bg-[linear-gradient(180deg,rgba(248,244,255,0.95)_0%,rgba(255,255,255,0.96)_100%)] px-4 py-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700">Resultado por escenario</p>
          <p className="mt-1 text-xs text-slate-500">Compara los dos posibles desenlaces de la cobertura.</p>
        </div>
        {isEven && (
          <span className="rounded-full border border-emerald-200/80 bg-emerald-50/90 px-3 py-1 text-[11px] font-semibold text-emerald-700">
            Ambos escenarios dan el mismo resultado
          </span>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-[linear-gradient(180deg,rgba(248,244,255,0.85)_0%,rgba(255,255,255,0.96)_100%)]">
            <tr>
              <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Escenario</th>
              <th className="px-4 py-3 text-right text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Bookmaker</th>
              <th className="px-4 py-3 text-right text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Exchange</th>
              <th className="px-4 py-3 text-right text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-violet-100/80 bg-white/80">
              <td className="px-4 py-3 text-xs font-semibold text-violet-700">
                <span className="inline-flex rounded-full border border-violet-200/70 bg-violet-50/90 px-2.5 py-1">{label1}</span>
              </td>
              <td className="px-4 py-3 text-right font-mono text-xs font-medium text-slate-700">+{bm1.toFixed(2)}</td>
              <td className="px-4 py-3 text-right font-mono text-xs font-medium text-rose-600">-{bm2.toFixed(2)}</td>
              <td className={`px-4 py-3 text-right font-mono text-xs font-bold ${benefSiGana >= 0 ? 'text-emerald-700' : 'text-rose-600'}`}>
                {benefSiGana >= 0 ? '+' : ''}{benefSiGana.toFixed(2)}
              </td>
            </tr>
            <tr className="border-t border-violet-100/80 bg-[linear-gradient(180deg,rgba(248,244,255,0.48)_0%,rgba(255,255,255,0.84)_100%)]">
              <td className="px-4 py-3 text-xs font-semibold text-violet-700">
                <span className="inline-flex rounded-full border border-violet-200/70 bg-violet-50/90 px-2.5 py-1">{label2}</span>
              </td>
              <td className="px-4 py-3 text-right font-mono text-xs font-medium text-rose-600">-{total1.toFixed(2)}</td>
              <td className="px-4 py-3 text-right font-mono text-xs font-medium text-emerald-700">+{total2.toFixed(2)}</td>
              <td className={`px-4 py-3 text-right font-mono text-xs font-bold ${benefSiPierde >= 0 ? 'text-emerald-700' : 'text-rose-600'}`}>
                {benefSiPierde >= 0 ? '+' : ''}{benefSiPierde.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

function ChecklistEjecucion({ modo }: { modo: ModoClasica }) {
  const pasos: Record<ModoClasica, string[]> = {
    'dinero-real': [
      'Copia el importe de apuesta (stake)',
      'Abre la casa de apuestas y selecciona el evento',
      'Introduce la cuota y confirma la apuesta a favor',
      'Abre Betfair Exchange en el mismo evento',
      'Introduce el stake lay calculado en contra',
      'Confirma que las cuotas no han cambiado',
      'Confirma la apuesta lay en Betfair',
    ],
    'apuesta-gratis': [
      'Verifica que tienes la freebet disponible en tu cuenta',
      'Busca un evento con cuota alta (3.00+) en Oddspedia',
      'En la casa selecciona la cuota y marca usar apuesta gratis',
      'Copia el stake lay calculado',
      'Abre Betfair Exchange y coloca la apuesta en contra',
      'Confirma que usas la freebet, no dinero real',
    ],
    'bonos': [
      'Verifica que tienes el bono SR disponible',
      'Selecciona un evento con cuota moderada (2.00-3.00)',
      'En la casa marca el bono antes de confirmar',
      'Introduce el stake lay en Betfair Exchange',
      'Confirma ambas apuestas',
    ],
    'rollover': [
      'Verifica el volumen pendiente en la sección de bonos',
      'Busca cuotas altas con rating >90% en Oddspedia',
      'Apuesta el stake calculado a favor en la casa',
      'Cubre en contra en Betfair Exchange',
      'Anota el volumen apostado y repite hasta completar',
    ],
    'reembolso': [
      'Verifica que el reembolso está activo',
      'Selecciona un evento con buena liquidez',
      'Apuesta a favor en la casa con el stake indicado',
      'Cubre en contra en Betfair con el stake lay calculado',
      'Si pierdes, reclama el reembolso según T&C de la casa',
      'Si recibes freebet, usa calculadora apuesta gratis para limpiarla',
    ],
  }

  return (
    <div className={PANEL_INNER}>
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/70 to-transparent" />
      <div className="px-4 py-4 sm:px-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700">Checklist de ejecución</p>
            <p className="mt-1 text-xs text-slate-500">Un orden claro para ejecutar sin perder el contexto.</p>
          </div>
          <span className="rounded-full border border-violet-200/70 bg-violet-50/90 px-3 py-1 text-[11px] font-semibold text-violet-700">
            {pasos[modo].length} pasos
          </span>
        </div>

        <ol className="grid gap-2">
          {pasos[modo].map((paso, i) => (
            <li key={i} className="flex gap-3 rounded-2xl border border-violet-100/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(248,244,255,0.92)_100%)] px-3 py-3 shadow-[0_12px_28px_rgba(46,16,101,0.04)]">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-violet-200/80 bg-violet-50 text-[10px] font-bold text-violet-700">
                {i + 1}
              </span>
              <span className="text-xs leading-5 text-slate-600">{paso}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

function OddsMatcherCalc({
  modo,
  onModoChange,
  moneda,
  prefill,
}: {
  modo: ModoClasica
  onModoChange: (modo: ModoClasica) => void
  moneda: Moneda
  prefill?: CalculadoraPrefill
}) {
  const [tipoReembolso, setTipoReembolso] = useState<ReembolsoTipo>(prefill?.refundType ?? 'cash')
  const [stake, setStake] = useState(prefill?.stake ?? '100')
  const [cuotaBM, setCuotaBM] = useState(prefill?.backOdds ?? '2.00')
  const [cuotaExch, setCuotaExch] = useState(prefill?.layOdds ?? '2.10')
  const [comision, setComision] = useState(prefill?.commission ?? '2')
  const [reembolso, setReembolso] = useState(prefill?.refundAmount ?? '100')
  const [tasaExtraccion, setTasaExtraccion] = useState('75')
  const [rolloverX, setRolloverX] = useState('10')
  const [copiado, setCopiado] = useState(false)

  useEffect(() => {
    if (!prefill) {
      return
    }

    if (prefill.stake) setStake(prefill.stake)
    if (prefill.backOdds) setCuotaBM(prefill.backOdds)
    if (prefill.layOdds) setCuotaExch(prefill.layOdds)
    if (prefill.commission) setComision(prefill.commission)
    if (prefill.refundType) setTipoReembolso(prefill.refundType)
    if (prefill.refundAmount) setReembolso(prefill.refundAmount)
  }, [prefill])

  const s = n(stake)
  const cbm = n(cuotaBM)
  const ce = n(cuotaExch)
  const com = n(comision) / 100
  const reb = n(reembolso)
  const extraccion = n(tasaExtraccion) / 100
  const rollover = n(rolloverX)

  let sc = 0
  let bGana = 0
  let bPierde = 0
  let liability = 0
  let valorRealReembolso = 0
  let costePorVuelta = 0
  let costeTotalRollover = 0

  if (s > 0 && cbm > 0 && ce > 0) {
    if (modo === 'dinero-real') {
      sc = (s * cbm) / (ce - com)
      liability = sc * (ce - 1)
      bGana = s * (cbm - 1) - liability
      bPierde = sc * (1 - com) - s
    } else if (modo === 'apuesta-gratis') {
      sc = (s * (cbm - 1)) / (ce - com)
      liability = sc * (ce - 1)
      bGana = s * (cbm - 1) - liability
      bPierde = sc * (1 - com)
    } else if (modo === 'bonos') {
      sc = (s * cbm) / (ce - com)
      liability = sc * (ce - 1)
      bGana = s * cbm - liability
      bPierde = sc * (1 - com)
    } else if (modo === 'reembolso') {
      valorRealReembolso = tipoReembolso === 'cash' ? reb : reb * extraccion
      sc = (s * cbm - valorRealReembolso) / (ce - com)
      liability = sc * (ce - 1)
      bGana = s * (cbm - 1) - liability
      bPierde = sc * (1 - com) - s + valorRealReembolso
    } else if (modo === 'rollover') {
      sc = (s * cbm) / (ce - com)
      liability = sc * (ce - 1)
      bGana = s * (cbm - 1) - liability
      bPierde = sc * (1 - com) - s
      costePorVuelta = Math.min(bGana, bPierde)
      costeTotalRollover = costePorVuelta * rollover
    }
  }

  const beneficio = modo === 'rollover' ? costeTotalRollover : Math.min(bGana, bPierde)
  const rating = s > 0 ? ((beneficio + s) / s) * 100 : 0
  const retencion = modo === 'apuesta-gratis' && s > 0 ? (bPierde / s) * 100 : null
  const { titulo, subtitulo } = getResultadoLabel(beneficio, modo)

  const MODOS: { id: ModoClasica; label: string; sub: string; accent: string }[] = [
    { id: 'dinero-real', label: 'Dinero real', sub: 'Apuesta calificante', accent: 'from-violet-600 to-indigo-600' },
    { id: 'apuesta-gratis', label: 'Apuesta gratis', sub: 'Freebet / SNR', accent: 'from-fuchsia-600 to-violet-600' },
    { id: 'bonos', label: 'Bonos', sub: 'Freebet / SR', accent: 'from-slate-700 to-violet-700' },
    { id: 'rollover', label: 'Rollover', sub: 'Volumen requerido', accent: 'from-violet-700 to-fuchsia-700' },
    { id: 'reembolso', label: 'Reembolso', sub: 'Cash o freebet', accent: 'from-indigo-700 to-violet-700' },
  ]

  const handleCopiar = () => {
    if (typeof navigator === 'undefined' || !navigator.clipboard) {
      return
    }

    const texto = `Apuesta a favor: ${s.toFixed(2)} ${moneda} @ ${cbm} | Apuesta lay Betfair: ${sc.toFixed(2)} ${moneda} @ ${ce} | Resultado estimado: ${beneficio >= 0 ? '+' : ''}${beneficio.toFixed(2)} ${moneda}`
    navigator.clipboard.writeText(texto).then(() => {
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    })
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-2 rounded-[1.5rem] border border-violet-200/60 bg-white/80 p-2 shadow-[0_16px_42px_rgba(46,16,101,0.06)] ring-1 ring-white/80 sm:grid-cols-5">
        {MODOS.map((m) => {
          const active = modo === m.id
          return (
            <button
              key={m.id}
              onClick={() => onModoChange(m.id)}
              className={`relative overflow-hidden rounded-2xl border px-4 py-3 text-left transition-all duration-200 hover:-translate-y-0.5 ${
                active
                  ? `border-violet-200/70 bg-gradient-to-br ${m.accent} text-white shadow-[0_18px_42px_rgba(124,58,237,0.22)]`
                  : 'border-violet-100/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(248,244,255,0.92)_100%)] text-slate-600 hover:border-violet-200/70 hover:bg-white'
              }`}
            >
              <p className="text-sm font-bold">{m.label}</p>
              <p className={`mt-1 text-[11px] font-medium ${active ? 'text-white/75' : 'text-slate-500'}`}>{m.sub}</p>
            </button>
          )
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <div className={`${PANEL} p-5 sm:p-6`}>
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/70 to-transparent" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="space-y-5">
              {prefill?.bookmaker && (
                <div className={SUBTLE_BADGE}>
                  Calculando para: {formatBookmaker(prefill.bookmaker)}
                </div>
              )}

              <div className="grid gap-4 md:grid-cols-2">
                <InputField label="Importe apuesta" value={stake} onChange={setStake} prefix={moneda} microcopy="Stake que vas a apostar en la casa." />
                <InputField label="Cuota bookmaker" value={cuotaBM} onChange={setCuotaBM} microcopy="Cuota a favor en la casa de apuestas." />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <InputField label="Cuota lay (Exchange)" value={cuotaExch} onChange={setCuotaExch} microcopy="Cuota en contra en Betfair." />
                <InputField label="Comisión Betfair" value={comision} onChange={setComision} suffix="%" microcopy="Ajusta la comisión según tu cuenta o exchange." />
              </div>

              {modo === 'reembolso' && (
                <div className="space-y-4 rounded-[1.25rem] border border-violet-200/60 bg-[linear-gradient(180deg,rgba(248,244,255,0.9)_0%,rgba(255,255,255,0.95)_100%)] p-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700">Tipo de reembolso</p>
                    <p className="mt-1 text-xs text-slate-500">Elige cómo se materializa el reembolso para valorar bien el resultado.</p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => setTipoReembolso('cash')}
                      className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-all ${
                        tipoReembolso === 'cash'
                          ? 'border-violet-200/70 bg-violet-500/10 text-violet-700 shadow-[0_14px_34px_rgba(124,58,237,0.14)]'
                          : 'border-violet-100/80 bg-white/85 text-slate-600 hover:border-violet-200/70 hover:bg-white'
                      }`}
                    >
                      Reembolso en cash
                    </button>
                    <button
                      type="button"
                      onClick={() => setTipoReembolso('freebet')}
                      className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-all ${
                        tipoReembolso === 'freebet'
                          ? 'border-violet-200/70 bg-violet-500/10 text-violet-700 shadow-[0_14px_34px_rgba(124,58,237,0.14)]'
                          : 'border-violet-100/80 bg-white/85 text-slate-600 hover:border-violet-200/70 hover:bg-white'
                      }`}
                    >
                      Reembolso en free bet
                    </button>
                  </div>
                </div>
              )}

              {modo === 'reembolso' && (
                <div className="grid gap-4 md:grid-cols-2">
                  <InputField
                    label="Importe reembolso"
                    value={reembolso}
                    onChange={setReembolso}
                    prefix={moneda}
                    hint={tipoReembolso === 'cash' ? 'Importe que recibes de vuelta directamente en saldo.' : 'Importe bruto de la free bet que recibirías si pierdes.'}
                  />
                  {tipoReembolso === 'freebet' && (
                    <InputField
                      label="Tasa extracción"
                      value={tasaExtraccion}
                      onChange={setTasaExtraccion}
                      suffix="%"
                      hint="Por defecto 75%. Se usa para estimar el valor real de la free bet."
                    />
                  )}
                </div>
              )}

              {modo === 'rollover' && (
                <InputField label="Rollover requerido" value={rolloverX} onChange={setRolloverX} suffix="x" microcopy="Multiplicador de volumen exigido por la casa." />
              )}

              <div className="rounded-[1.25rem] border border-violet-200/60 bg-[linear-gradient(180deg,rgba(248,244,255,0.9)_0%,rgba(255,255,255,0.98)_100%)] px-4 py-4 text-sm leading-6 text-slate-600">
                {modo === 'dinero-real' && 'Apuesta calificante. El objetivo es minimizar la pérdida mientras desbloqueas el bono.'}
                {modo === 'apuesta-gratis' && 'Freebet SNR (stake no devuelto). Busca cuotas altas para maximizar retención.'}
                {modo === 'bonos' && 'Freebet SR (stake devuelto si ganas). Cuotas más bajas también pueden encajar.'}
                {modo === 'reembolso' && (tipoReembolso === 'cash'
                  ? 'Si pierdes, el reembolso entra en saldo y se valora al 100% del importe prometido.'
                  : 'Si pierdes, el reembolso llega como free bet y se convierte usando la tasa de extracción que indiques.'
                )}
                {modo === 'rollover' && 'Calcula la pérdida esperada al completar el volumen de rollover requerido.'}
              </div>

              <div className="flex flex-wrap gap-2">
                <a
                  href="https://oddspedia.com/es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-violet-200/70 bg-white/80 px-4 py-2 text-xs font-semibold text-violet-700 transition-all hover:border-violet-300/80 hover:bg-violet-50"
                >
                  Comparar cuotas en Oddspedia
                </a>
                <a
                  href="https://www.betfair.es/exchange/plus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-violet-200/70 bg-white/80 px-4 py-2 text-xs font-semibold text-violet-700 transition-all hover:border-violet-300/80 hover:bg-violet-50"
                >
                  Abrir Betfair Exchange
                </a>
              </div>
            </div>
          </div>

          <ChecklistEjecucion modo={modo} />
        </div>

        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-violet-200/60 bg-[linear-gradient(135deg,#141022_0%,#23153d_42%,#5b21b6_100%)] p-6 text-white shadow-[0_28px_84px_rgba(46,16,101,0.32)] ring-1 ring-white/10">
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-violet-200/45 to-transparent" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-violet-500/18 blur-3xl" />
            <div className="pointer-events-none absolute -left-28 bottom-[-6rem] h-56 w-56 rounded-full bg-fuchsia-400/10 blur-3xl" />

            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-200/80">{titulo}</p>
                <p className="text-4xl font-semibold tracking-tight sm:text-5xl">
                  {beneficio >= 0 ? '+' : ''}{beneficio.toFixed(2)} {moneda}
                </p>
                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">{subtitulo}</p>
                {modo === 'reembolso' && (
                  <p className="mt-3 text-xs leading-5 text-violet-100/85">
                    Beneficio equilibrado: {beneficio >= 0 ? '+' : ''}{beneficio.toFixed(2)} {moneda} · Reembolso real: {valorRealReembolso.toFixed(2)} {moneda}
                  </p>
                )}
                {modo === 'rollover' && (
                  <div className="mt-3 space-y-1 text-xs leading-5 text-violet-100/85">
                    <p>
                      Coste por vuelta: {costePorVuelta >= 0 ? '+' : ''}{costePorVuelta.toFixed(2)} {moneda}
                    </p>
                    <p>
                      Coste estimado total ({rollover.toFixed(2)}x): {costeTotalRollover >= 0 ? '+' : ''}{costeTotalRollover.toFixed(2)} {moneda}
                    </p>
                  </div>
                )}
              </div>

              <div className="shrink-0 text-right">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-200/80">
                  {retencion !== null ? 'Retención' : 'Eficiencia'}
                </p>
                <p className="mt-1 text-3xl font-bold tracking-tight">
                  {retencion !== null ? `${retencion.toFixed(1)}%` : `${rating.toFixed(1)}%`}
                </p>
                <p className="mt-1 text-xs text-violet-100/60">
                  {retencion !== null ? 'del valor de la freebet' : 'de cobertura'}
                </p>
              </div>
            </div>
          </div>

          {modo === 'reembolso' && (
            <div className={PANEL_INNER}>
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/70 to-transparent" />
              <div className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700">Valor real del reembolso</p>
                    <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                      {valorRealReembolso.toFixed(2)} {moneda}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {tipoReembolso === 'cash'
                        ? 'Reembolso en cash: se valora al 100% del importe prometido.'
                        : `Reembolso en free bet: ${reb.toFixed(2)} ${moneda} × ${(extraccion * 100).toFixed(0)}% = ${valorRealReembolso.toFixed(2)} ${moneda}`}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-violet-200/70 bg-violet-50/90 px-3 py-2 text-right">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700">Tipo elegido</p>
                    <p className="mt-1 text-sm font-semibold text-slate-800">
                      {tipoReembolso === 'cash' ? 'Cash' : 'Free bet'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {modo === 'rollover' && (
            <div className={PANEL_INNER}>
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/70 to-transparent" />
              <div className="grid gap-4 p-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-violet-100/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(248,244,255,0.9)_100%)] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700">Coste por vuelta</p>
                  <p className={`mt-2 text-3xl font-semibold tracking-tight ${costePorVuelta >= 0 ? 'text-emerald-700' : 'text-rose-600'}`}>
                    {costePorVuelta >= 0 ? '+' : ''}{costePorVuelta.toFixed(2)} {moneda}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">Usa la misma lógica de dinero real para una sola vuelta.</p>
                </div>
                <div className="rounded-2xl border border-violet-100/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(248,244,255,0.9)_100%)] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700">Coste estimado total</p>
                  <p className={`mt-2 text-3xl font-semibold tracking-tight ${costeTotalRollover >= 0 ? 'text-emerald-700' : 'text-rose-600'}`}>
                    {costeTotalRollover >= 0 ? '+' : ''}{costeTotalRollover.toFixed(2)} {moneda}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{rollover.toFixed(2)} vueltas estimadas</p>
                </div>
              </div>
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-violet-200/60 bg-[linear-gradient(180deg,rgba(248,244,255,0.98)_0%,rgba(255,255,255,0.98)_100%)] p-4 shadow-[0_16px_38px_rgba(46,16,101,0.06)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700">Paso 1 · Apuesta a favor</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                {s.toFixed(2)} {moneda}
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-500">A cuota {cbm}</p>
            </div>

            <div className="rounded-[1.5rem] border border-violet-200/60 bg-[linear-gradient(180deg,rgba(242,240,255,0.98)_0%,rgba(255,255,255,0.98)_100%)] p-4 shadow-[0_16px_38px_rgba(46,16,101,0.06)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700">Paso 2 · Apuesta en contra</p>
              <div className="mt-2 flex items-start justify-between gap-3">
                <div>
                  <p className="text-3xl font-semibold tracking-tight text-slate-900">
                    {sc.toFixed(2)} {moneda}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    A cuota {ce} · Riesgo (liability): <strong className="text-slate-700">{liability.toFixed(2)} {moneda}</strong>
                  </p>
                </div>
                <a
                  href="https://www.betfair.es/exchange/plus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center rounded-full border border-violet-200/70 bg-white/90 px-3 py-2 text-xs font-semibold text-violet-700 transition-all hover:border-violet-300/80 hover:bg-violet-50"
                >
                  Abrir Betfair
                </a>
              </div>
            </div>
          </div>

          {modo !== 'rollover' && (
            <div className="rounded-[1.25rem] border border-violet-200/60 bg-white/85 px-4 py-3 text-xs font-medium text-slate-600 shadow-[0_12px_30px_rgba(46,16,101,0.05)]">
              <span className="font-semibold text-slate-700">CONTRA:</span> {sc.toFixed(2)} {moneda}
              <span className="mx-2 text-slate-300">|</span>
              <span className="font-semibold text-slate-700">RIESGO:</span> {liability.toFixed(2)} {moneda}
              <span className="mx-2 text-slate-300">|</span>
              <span className="font-semibold text-slate-700">RESULTADO:</span> {beneficio >= 0 ? '+' : ''}{beneficio.toFixed(2)} {moneda}
            </div>
          )}

          <TablaResultado
            label1="Apuesta a favor gana"
            label2="Apuesta en contra gana"
            bm1={s * (cbm - 1)}
            bm2={liability}
            total1={s}
            total2={sc * (1 - com)}
            benefSiGana={bGana}
            benefSiPierde={bPierde}
          />

          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleCopiar}
              className="inline-flex items-center gap-1.5 rounded-full border border-violet-200/70 bg-violet-500 px-4 py-2 text-xs font-semibold text-white shadow-[0_14px_34px_rgba(124,58,237,0.28)] transition-all hover:-translate-y-0.5 hover:bg-violet-400"
            >
              {copiado ? 'Copiado' : 'Copiar cálculo'}
            </button>
            <a
              href="https://www.betfair.es/exchange/plus/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-violet-200/70 bg-white/85 px-4 py-2 text-xs font-semibold text-violet-700 transition-all hover:border-violet-300/80 hover:bg-violet-50"
            >
              Abrir Exchange
            </a>
            <a
              href="https://oddspedia.com/es"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-violet-200/70 bg-white/85 px-4 py-2 text-xs font-semibold text-violet-700 transition-all hover:border-violet-300/80 hover:bg-violet-50"
            >
              Comparar cuotas
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function DutcherCalc({
  modo,
  moneda,
}: {
  modo: ModoDutcher
  moneda: Moneda
}) {
  const [stake, setStake] = useState('100')
  const [c1, setC1] = useState('1.90')
  const [c2, setC2] = useState('1.83')
  const [copiado, setCopiado] = useState(false)

  const s = n(stake)
  const cc1 = n(c1)
  const cc2 = n(c2)

  let stakeA = 0
  let stakeB = 0
  let bGana = 0
  let bPierde = 0

  if (s > 0 && cc1 > 0 && cc2 > 0) {
    stakeA = (s * cc2) / (cc1 + cc2)
    stakeB = s - stakeA
    bGana = stakeA * cc1 - s
    bPierde = stakeB * cc2 - s
  }

  const beneficio = Math.min(bGana, bPierde)
  const rating = s > 0 ? ((beneficio + s) / s) * 100 : 0
  const resultadoLabel = beneficio >= 0 ? 'Beneficio estimado' : 'Pérdida calificante'

  const handleCopiar = () => {
    if (typeof navigator === 'undefined' || !navigator.clipboard) {
      return
    }

    const texto = `Stake total: ${s.toFixed(2)} ${moneda} | BM1: ${stakeA.toFixed(2)} ${moneda} @ ${cc1} | BM2: ${stakeB.toFixed(2)} ${moneda} @ ${cc2} | Resultado: ${beneficio >= 0 ? '+' : ''}${beneficio.toFixed(2)} ${moneda}`
    navigator.clipboard.writeText(texto).then(() => {
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    })
  }

  return (
    <div className="space-y-6">
      <div className="rounded-[1.5rem] border border-violet-200/60 bg-[linear-gradient(135deg,rgba(109,40,217,0.08)_0%,rgba(255,255,255,0.9)_100%)] p-4 shadow-[0_16px_38px_rgba(46,16,101,0.05)] ring-1 ring-white/80">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700">Cuándo usarlo</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Cuando tienes freebets o apuestas en dos casas distintas y quieres cubrirte en resultados opuestos sin necesitar el exchange.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
        <div className="space-y-4">
          <div className={PANEL}>
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/70 to-transparent" />
            <div className="space-y-4 p-5 sm:p-6">
              <InputField label="Stake total" value={stake} onChange={setStake} prefix={moneda} microcopy="Importe total que quieres repartir entre las dos apuestas." />

              <div className="rounded-[1.25rem] border border-violet-200/60 bg-[linear-gradient(180deg,rgba(248,244,255,0.92)_0%,rgba(255,255,255,0.98)_100%)] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700">Paso 1 · Bookmaker 1</p>
                <p className="mt-1 text-xs text-slate-500">Apuesta a favor en el primer resultado.</p>
                <div className="mt-4">
                  <InputField label="Cuota BM1" value={c1} onChange={setC1} microcopy="Cuota del resultado 1 en el primer bookmaker." />
                </div>
              </div>

              <div className="rounded-[1.25rem] border border-violet-200/60 bg-[linear-gradient(180deg,rgba(242,240,255,0.92)_0%,rgba(255,255,255,0.98)_100%)] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700">Paso 2 · Bookmaker 2</p>
                <p className="mt-1 text-xs text-slate-500">Resultado contrario para cerrar la cobertura.</p>
                <div className="mt-4">
                  <InputField label="Cuota BM2" value={c2} onChange={setC2} microcopy="Cuota del resultado contrario en el segundo bookmaker." />
                </div>
              </div>
            </div>
          </div>

          <div className={PANEL_INNER}>
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/70 to-transparent" />
            <div className="p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700">Referencia rápida</p>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                {modo === 'dinero-real'
                  ? 'Esta configuración reparte el stake para equilibrar el retorno entre ambos resultados.'
                  : 'Si quieres cambiar el enfoque, usa el selector superior para alternar entre modos de dutcher.'}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-violet-200/60 bg-[linear-gradient(135deg,#141022_0%,#3c1d76_55%,#7c3aed_100%)] p-6 text-white shadow-[0_28px_84px_rgba(46,16,101,0.3)] ring-1 ring-white/10">
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-violet-200/45 to-transparent" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-violet-500/18 blur-3xl" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-200/80">{resultadoLabel}</p>
                <p className="text-4xl font-semibold tracking-tight sm:text-5xl">
                  {beneficio >= 0 ? '+' : ''}{beneficio.toFixed(2)} {moneda}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">Resultado neto estimado</p>
              </div>
              <div className="text-right">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-200/80">Eficiencia</p>
                <p className="mt-1 text-3xl font-bold tracking-tight">{rating.toFixed(1)}%</p>
                <p className="mt-1 text-xs text-violet-100/60">de cobertura</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-violet-200/60 bg-[linear-gradient(180deg,rgba(248,244,255,0.98)_0%,rgba(255,255,255,0.98)_100%)] p-4 shadow-[0_16px_38px_rgba(46,16,101,0.06)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700">Paso 1 · Bookmaker 1</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                {stakeA.toFixed(2)} {moneda}
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-500">A cuota {cc1.toFixed(2)}</p>
            </div>

            <div className="rounded-[1.5rem] border border-violet-200/60 bg-[linear-gradient(180deg,rgba(242,240,255,0.98)_0%,rgba(255,255,255,0.98)_100%)] p-4 shadow-[0_16px_38px_rgba(46,16,101,0.06)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700">Paso 2 · Bookmaker 2</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                {stakeB.toFixed(2)} {moneda}
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-500">A cuota {cc2.toFixed(2)}</p>
            </div>
          </div>

          <TablaResultado
            label1="Bookmaker 1 gana"
            label2="Bookmaker 2 gana"
            bm1={stakeA * cc1}
            bm2={stakeB}
            total1={s}
            total2={stakeB * cc2}
            benefSiGana={bGana}
            benefSiPierde={bPierde}
          />

          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleCopiar}
              className="inline-flex items-center gap-1.5 rounded-full border border-violet-200/70 bg-violet-500 px-4 py-2 text-xs font-semibold text-white shadow-[0_14px_34px_rgba(124,58,237,0.28)] transition-all hover:-translate-y-0.5 hover:bg-violet-400"
            >
              {copiado ? 'Copiado' : 'Copiar cálculo'}
            </button>
            <a
              href="https://oddspedia.com/es"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-violet-200/70 bg-white/85 px-4 py-2 text-xs font-semibold text-violet-700 transition-all hover:border-violet-300/80 hover:bg-violet-50"
            >
              Comparar cuotas
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
