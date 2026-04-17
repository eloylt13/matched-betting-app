'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import BonosPendientesOperativo from '@/components/bonos/BonosPendientesOperativo'
import { loadState, agregarHistorial, resetState } from '@/lib/storage/userState'
import type { UserState, EntradaHistorial } from '@/types/user'
import { todasLasCasas } from '@/lib/presets'
import type { ModoCalculo } from '@/types/presets'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

function formatSignedAmount(value: number) {
  return `${value >= 0 ? '+' : ''}${value.toFixed(2)} €`
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

const MODO_TONE: Partial<Record<ModoCalculo, string>> = {
  cualificante: 'border-violet-200/80 bg-violet-50/85 text-violet-700 shadow-sm shadow-violet-950/5',
  freebet: 'border-fuchsia-200/80 bg-fuchsia-50/85 text-fuchsia-700 shadow-sm shadow-fuchsia-950/5',
  reembolso: 'border-amber-200/80 bg-amber-50/85 text-amber-700 shadow-sm shadow-amber-950/5',
  dutcher: 'border-sky-200/80 bg-sky-50/85 text-sky-700 shadow-sm shadow-sky-950/5',
}

const MODE_ICON_TONE: Partial<Record<ModoCalculo, string>> = {
  cualificante: 'bg-violet-500/10 text-violet-700 border-violet-200/80',
  freebet: 'bg-fuchsia-500/10 text-fuchsia-700 border-fuchsia-200/80',
  reembolso: 'bg-amber-500/10 text-amber-700 border-amber-200/80',
  dutcher: 'bg-sky-500/10 text-sky-700 border-sky-200/80',
}

function getResultTone(value: number) {
  return value >= 0
    ? 'border-emerald-200/80 bg-emerald-50/80 text-emerald-700 shadow-sm shadow-emerald-950/5'
    : 'border-rose-200/80 bg-rose-50/80 text-rose-700 shadow-sm shadow-rose-950/5'
}

function getPositiveRateLabel(total: number, positives: number) {
  if (total === 0) return 'Sin datos'
  return `${Math.round((positives / total) * 100)}%`
}

function MetricCard({
  value,
  label,
  helper,
  tone = 'neutral',
}: {
  value: string
  label: string
  helper?: string
  tone?: 'neutral' | 'positive' | 'negative'
}) {
  const toneStyles =
    tone === 'positive'
      ? 'border-emerald-200/70 bg-[linear-gradient(180deg,rgba(236,253,245,0.9)_0%,rgba(255,255,255,0.92)_100%)]'
      : tone === 'negative'
        ? 'border-rose-200/70 bg-[linear-gradient(180deg,rgba(255,241,242,0.94)_0%,rgba(255,255,255,0.92)_100%)]'
        : 'border-violet-200/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(248,244,255,0.92)_100%)]'

  return (
    <div className={`relative overflow-hidden rounded-2xl border px-4 py-4 shadow-[0_18px_44px_rgba(46,16,101,0.08)] ring-1 ring-white/80 backdrop-blur-sm ${toneStyles}`}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/70 to-transparent" />
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">{label}</p>
      <p className={`mt-2 text-2xl font-semibold tracking-tight font-mono ${tone === 'positive' ? 'text-emerald-700' : tone === 'negative' ? 'text-rose-700' : 'text-slate-900'}`}>{value}</p>
      {helper && (
        <p className="mt-2 text-[11px] leading-5 text-slate-500">
          {helper}
        </p>
      )}
    </div>
  )
}

function EmptyState({ onAdd }: { onAdd: () => void }) {
  return (
    <section className="relative overflow-hidden rounded-[1.75rem] border border-violet-200/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(248,244,255,0.96)_100%)] p-6 shadow-[0_24px_70px_rgba(46,16,101,0.08)] ring-1 ring-white/85 backdrop-blur-md sm:p-8">
      <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/70 to-transparent" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-[-6rem] h-56 w-56 rounded-full bg-fuchsia-400/8 blur-3xl" />

      <div className="relative flex flex-col items-center gap-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-200/70 bg-violet-50 text-3xl shadow-[0_12px_30px_rgba(124,58,237,0.08)]">
          📋
        </div>

        <div className="max-w-2xl">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-200/70 bg-white/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700 shadow-sm shadow-violet-950/5">
            <span className="h-2 w-2 rounded-full bg-violet-500" />
            Seguimiento premium
          </span>
          <p className="text-balance text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Aún no hay operaciones registradas
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            Registra cada apuesta cerrada para medir tu beneficio real, detectar patrones y saber qué estrategias te funcionan mejor.
          </p>
        </div>

        <div className="w-full max-w-2xl rounded-2xl border border-violet-200/60 bg-white/80 p-4 text-left shadow-[0_16px_38px_rgba(46,16,101,0.06)] ring-1 ring-white/80">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">
            ¿Qué es una operación?
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            El resultado final registrado de una apuesta cubierta o conversión de bono: cualificante, freebet o reembolso.
          </p>
        </div>

        <div className="grid w-full max-w-2xl gap-3 sm:grid-cols-3">
          {[
            { icon: '🏠', label: 'Completar una casa' },
            { icon: '🎁', label: 'Limpiar un bono' },
            { icon: '✏️', label: 'Registrar manualmente' },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-violet-100/80 bg-white/85 p-4 text-center shadow-[0_14px_32px_rgba(46,16,101,0.05)]"
            >
              <p className="text-2xl">{icon}</p>
              <p className="mt-2 text-[11px] font-medium leading-5 text-slate-500">{label}</p>
            </div>
          ))}
        </div>

        <div className="grid w-full max-w-2xl gap-3 sm:grid-cols-2">
          <Link
            href="/bienvenida"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-violet-200/70 bg-violet-500/10 px-4 py-4 text-left transition-all hover:-translate-y-0.5 hover:border-violet-300/80 hover:bg-violet-500/15"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700">
                Empieza aquí
              </p>
              <p className="mt-1 text-sm font-medium text-slate-900">
                ¿Aún no has conseguido ningún bono?
              </p>
            </div>
            <span className="text-sm font-semibold text-violet-700 transition-transform group-hover:translate-x-1">
              Ir →
            </span>
          </Link>

          <button
            onClick={onAdd}
            className="inline-flex items-center justify-center rounded-2xl border border-violet-300/60 bg-[linear-gradient(135deg,#6d28d9_0%,#7c3aed_55%,#8b5cf6_100%)] px-5 py-4 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(124,58,237,0.28)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_52px_rgba(124,58,237,0.34)]"
          >
            + Registrar primera operación
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/casas"
            className="rounded-full border border-violet-200/70 bg-white/75 px-4 py-2 text-xs font-semibold text-violet-700 transition-colors hover:border-violet-300/80 hover:bg-violet-50"
          >
            Ver casas disponibles →
          </Link>
          <Link
            href="/bonos"
            className="rounded-full border border-violet-200/70 bg-white/75 px-4 py-2 text-xs font-semibold text-violet-700 transition-colors hover:border-violet-300/80 hover:bg-violet-50"
          >
            Ver bonos pendientes →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function HistorialClient() {
  const [state, setState] = useState<UserState>(() => loadState())
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({
    casaId: todasLasCasas[0]?.id ?? '',
    modo: 'cualificante' as ModoCalculo,
    stake: 10,
    resultado: 0,
    notas: '',
  })

  const refresh = useCallback(() => setState(loadState()), [])

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
  const tasaPositiva = getPositiveRateLabel(entradas.length, positivas)

  return (
    <div className="relative flex flex-col gap-6">
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-28 bg-[radial-gradient(circle_at_top,rgba(167,139,250,0.18),transparent_65%)]" />

      <section className="relative overflow-hidden rounded-[1.75rem] border border-violet-200/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(248,244,255,0.96)_100%)] px-5 py-5 shadow-[0_24px_70px_rgba(46,16,101,0.08)] ring-1 ring-white/85 backdrop-blur-md sm:px-6 sm:py-6">
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/75 to-transparent" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-[-5rem] h-48 w-48 rounded-full bg-fuchsia-400/8 blur-3xl" />

        <div className="relative flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-200/70 bg-violet-50/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700 shadow-sm shadow-violet-950/5">
              <span className="h-2 w-2 rounded-full bg-violet-500 shadow-[0_0_16px_rgba(167,139,250,0.75)]" />
              Seguimiento premium
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Seguimiento de bonos y operaciones
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Controla tus bonos pendientes, registra cada operación y revisa tu actividad con claridad.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {['Seguimiento claro', 'Registro manual', 'Control LATAM'].map(label => (
                <span
                  key={label}
                  className="rounded-full border border-violet-200/60 bg-white/80 px-3 py-1 text-[11px] font-medium text-slate-600 shadow-sm"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowForm(v => !v)}
            className="inline-flex items-center justify-center rounded-2xl border border-violet-300/60 bg-[linear-gradient(135deg,#6d28d9_0%,#7c3aed_55%,#8b5cf6_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(124,58,237,0.28)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_52px_rgba(124,58,237,0.34)] active:scale-[0.99]"
          >
            + Registrar operación
          </button>
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-3">
        <MetricCard
          value={`${entradas.length}`}
          label="Operaciones"
          helper="Total de entradas guardadas en tu seguimiento."
        />
        <MetricCard
          value={formatSignedAmount(totalResultado)}
          label="Resultado total"
          helper="Balance acumulado de todas tus operaciones."
          tone={totalResultado >= 0 ? 'positive' : 'negative'}
        />
        <MetricCard
          value={tasaPositiva}
          label="Tasa positiva"
          helper={entradas.length > 0 ? `${positivas} de ${entradas.length} operaciones cerradas en positivo.` : 'Aún no hay datos suficientes.'}
        />
      </section>

      <BonosPendientesOperativo state={state} onUpdate={refresh} variant="premium" />

      {showForm && (
        <section className="relative overflow-hidden rounded-[1.75rem] border border-violet-200/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(248,244,255,0.96)_100%)] p-5 shadow-[0_24px_70px_rgba(46,16,101,0.08)] ring-1 ring-white/85 backdrop-blur-md sm:p-6">
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/75 to-transparent" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative flex flex-col gap-1">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">
              Registrar nueva operación
            </h2>
            <p className="text-sm leading-6 text-slate-600">
              Anota el resultado final tras cerrar la apuesta y la cobertura.
            </p>
          </div>

          <div className="relative mt-5 grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Casa</label>
              <select
                value={form.casaId}
                onChange={e => setForm(f => ({ ...f, casaId: e.target.value }))}
                className="rounded-2xl border border-slate-200/80 bg-white px-3.5 py-3 text-sm text-slate-900 shadow-inner shadow-slate-950/[0.02] outline-none transition focus:border-violet-300 focus:ring-4 focus:ring-violet-500/10"
              >
                {todasLasCasas.map(c => (
                  <option key={c.id} value={c.id}>{c.nombre}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Tipo de operación</label>
              <select
                value={form.modo}
                onChange={e => setForm(f => ({ ...f, modo: e.target.value as ModoCalculo }))}
                className="rounded-2xl border border-slate-200/80 bg-white px-3.5 py-3 text-sm text-slate-900 shadow-inner shadow-slate-950/[0.02] outline-none transition focus:border-violet-300 focus:ring-4 focus:ring-violet-500/10"
              >
                {MODOS_FORM.map(m => (
                  <option key={m} value={m}>{MODO_EMOJI[m]} {MODO_LABEL[m]}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Stake apostado (€)</label>
              <input
                type="number"
                value={form.stake}
                step={0.5}
                min={0}
                onChange={e => setForm(f => ({ ...f, stake: parseFloat(e.target.value) || 0 }))}
                className="rounded-2xl border border-slate-200/80 bg-white px-3.5 py-3 text-sm text-slate-900 shadow-inner shadow-slate-950/[0.02] outline-none transition placeholder:text-slate-400 focus:border-violet-300 focus:ring-4 focus:ring-violet-500/10"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Resultado neto (€)</label>
              <input
                type="number"
                value={form.resultado}
                step={0.01}
                onChange={e => setForm(f => ({ ...f, resultado: parseFloat(e.target.value) || 0 }))}
                className="rounded-2xl border border-slate-200/80 bg-white px-3.5 py-3 text-sm text-slate-900 shadow-inner shadow-slate-950/[0.02] outline-none transition placeholder:text-slate-400 focus:border-violet-300 focus:ring-4 focus:ring-violet-500/10"
              />
              <p className="text-[11px] leading-5 text-slate-500">
                Negativo si fue una apuesta calificante con pérdida esperada.
              </p>
            </div>

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Notas (opcional)</label>
              <input
                type="text"
                value={form.notas}
                placeholder="ej. freebet Bwin limpiada a cuota 3.2"
                onChange={e => setForm(f => ({ ...f, notas: e.target.value }))}
                className="rounded-2xl border border-slate-200/80 bg-white px-3.5 py-3 text-sm text-slate-900 shadow-inner shadow-slate-950/[0.02] outline-none transition placeholder:text-slate-400 focus:border-violet-300 focus:ring-4 focus:ring-violet-500/10"
              />
            </div>
          </div>

          <div className="relative mt-5 flex flex-wrap gap-3">
            <button
              onClick={handleAdd}
              className="inline-flex items-center justify-center rounded-2xl border border-violet-300/60 bg-[linear-gradient(135deg,#6d28d9_0%,#7c3aed_55%,#8b5cf6_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(124,58,237,0.28)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_52px_rgba(124,58,237,0.34)]"
            >
              Guardar
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200/90 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
            >
              Cancelar
            </button>
          </div>
        </section>
      )}

      {entradas.length === 0 ? (
        <EmptyState onAdd={() => setShowForm(true)} />
      ) : (
        <div className="flex flex-col gap-3">
          {entradas.map((e: EntradaHistorial) => {
            const resultTone = getResultTone(e.resultado)
            const modeTone = MODO_TONE[e.modo] ?? MODO_TONE.cualificante
            const iconTone = MODE_ICON_TONE[e.modo] ?? MODE_ICON_TONE.cualificante

            return (
              <article
                key={e.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-[0_16px_36px_rgba(46,16,101,0.06)] ring-1 ring-white/80 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-violet-200/80 hover:shadow-[0_22px_50px_rgba(46,16,101,0.1)]"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/70 to-transparent" />
                <div className="flex items-start gap-4">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border ${iconTone}`}>
                    <span className="text-lg">{MODO_EMOJI[e.modo] ?? '📋'}</span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      {e.casaNombre && (
                        <span className="font-semibold text-slate-900 text-sm">
                          {e.casaNombre}
                        </span>
                      )}
                      <span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${modeTone}`}>
                        {MODO_LABEL[e.modo] ?? e.modo}
                      </span>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-slate-200/80 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-500">
                        {formatDate(e.fecha)}
                      </span>
                      <span className="rounded-full border border-slate-200/80 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-500">
                        Stake: {e.stake.toFixed(2)} €
                      </span>
                    </div>

                    {e.notas && (
                      <p className="mt-3 inline-flex max-w-full rounded-full border border-violet-100/90 bg-violet-50/90 px-3 py-1.5 text-xs leading-5 text-slate-600">
                        <span className="truncate">{e.notas}</span>
                      </p>
                    )}
                  </div>

                  <div className="shrink-0 text-right">
                    <span className={`inline-flex rounded-2xl border px-3 py-2 text-sm font-semibold font-mono ${resultTone}`}>
                      {formatSignedAmount(e.resultado)}
                    </span>
                    <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
                      {e.resultado >= 0 ? 'Beneficio' : 'Pérdida calificante'}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      )}

      {entradas.length === 0 && (
        <section className="relative overflow-hidden rounded-[1.75rem] border border-violet-200/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(248,244,255,0.95)_100%)] p-5 shadow-[0_22px_64px_rgba(46,16,101,0.07)] ring-1 ring-white/80 backdrop-blur-md">
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/70 to-transparent" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-violet-700">
            ¿Cómo se alimenta el seguimiento?
          </p>
          <div className="mt-4 grid gap-3">
            {[
              { icon: '🏠', label: 'Completar una casa', sub: 'Marca una oferta como completada desde la ficha de casa', href: '/casas', cta: 'Ver casas' },
              { icon: '🎁', label: 'Limpiar un bono', sub: 'Marca un bono como limpiado desde la sección Bonos', href: '/bonos', cta: 'Ver bonos' },
              { icon: '✏️', label: 'Registro manual', sub: 'Usa el botón "+ Registrar operación" para añadir manualmente', href: null, cta: null },
            ].map(({ icon, label, sub, href, cta }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/85 px-4 py-3 shadow-[0_12px_28px_rgba(46,16,101,0.04)]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-200/70 bg-violet-50 text-lg">
                  {icon}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-900">{label}</p>
                  <p className="text-xs leading-5 text-slate-500">{sub}</p>
                </div>
                {href && cta && (
                  <Link
                    href={href}
                    className="shrink-0 rounded-full border border-violet-200/70 bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700 transition-colors hover:border-violet-300/80 hover:bg-violet-100"
                  >
                    {cta} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {entradas.length > 0 && (
        <section className="relative overflow-hidden rounded-[1.5rem] border border-rose-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(255,241,242,0.95)_100%)] p-4 shadow-[0_18px_44px_rgba(190,18,60,0.08)] ring-1 ring-white/80 backdrop-blur-sm">
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-rose-300/70 to-transparent" />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-700">
                Zona peligrosa
              </p>
              <p className="mt-1 text-sm leading-6 text-rose-600">
                Borrar todos los datos locales. Esta acción es irreversible.
              </p>
            </div>
            <button
              onClick={() => {
                if (confirm('¿Seguro? Se borrarán todos tus datos.')) {
                  resetState()
                  refresh()
                }
              }}
              className="inline-flex items-center justify-center rounded-2xl border border-rose-300/70 bg-rose-600 px-4 py-2.5 text-xs font-semibold text-white shadow-[0_14px_32px_rgba(225,29,72,0.2)] transition-all hover:-translate-y-0.5 hover:bg-rose-700"
            >
              Resetear datos
            </button>
          </div>
        </section>
      )}
    </div>
  )
}
