'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { todasLasCasas } from '@/lib/presets'
import type { Casa, Tipologia } from '@/types/presets'

type FilterKey = 'todas' | Tipologia

const FILTERS: Array<{ key: FilterKey; label: string }> = [
  { key: 'todas', label: 'Todas' },
  { key: 'apuesta-recibe', label: 'Apuesta & Recibe' },
  { key: 'reembolso', label: 'Reembolso' },
  { key: 'rollover', label: 'Rollover' },
  { key: 'exchange', label: 'Exchange' },
]

const TIPO_LABEL: Record<Tipologia, string> = {
  'apuesta-recibe': 'Apuesta & Recibe',
  reembolso: 'Reembolso',
  rollover: 'Rollover',
  exchange: 'Exchange',
}

function getTipologiaLabel(tipologia?: Tipologia) {
  return tipologia ? TIPO_LABEL[tipologia] : 'Oferta'
}

function getCurrency(casa: Casa) {
  return casa.market === 'latam' ? 'USD' : 'EUR'
}

function getMarketLabel(casa: Casa) {
  if (casa.market === 'espana') return 'Espana'
  return casa.pais === 'regionales' ? 'LATAM regional' : casa.pais.toUpperCase()
}

function getResumen(casa: Casa) {
  return casa.resumen ?? casa.descripcionBreve
}

export default function BonosClient() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('todas')

  const ofertas = useMemo(() => {
    return [...todasLasCasas]
      .filter((casa) => activeFilter === 'todas' || casa.tipologia === activeFilter)
      .sort((a, b) => b.beneficioPotencial - a.beneficioPotencial)
  }, [activeFilter])

  const totalPotencial = ofertas.reduce((total, casa) => total + casa.beneficioPotencial, 0)

  return (
    <main className="relative isolate overflow-hidden bg-[linear-gradient(180deg,rgba(248,250,252,1)_0%,rgba(248,250,252,0.96)_40%,rgba(241,245,249,0.94)_100%)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-violet-200/20 via-transparent to-transparent blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-[18rem] h-px bg-gradient-to-r from-transparent via-violet-200/55 to-transparent" />

      <div className="mx-auto max-w-5xl px-4 py-6 sm:py-10">
        <section className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/78 px-4 py-5 shadow-[0_20px_60px_-38px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:px-6 sm:py-6">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/55 to-transparent" />

          <div className="relative space-y-5">
            <div className="space-y-2">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-violet-600">Bonos activos</p>
              <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Bonos de bienvenida y ofertas activas
              </h1>
              <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-[15px]">
                Oportunidades disponibles en las casas del proyecto, incluidas ofertas que todavia no tienen una guia
                completa. Revisa siempre las condiciones antes de registrarte.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 px-4 py-3">
                <p className="text-2xl font-semibold text-slate-950">{ofertas.length}</p>
                <p className="mt-1 text-xs font-medium text-slate-500">ofertas visibles</p>
              </div>
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 px-4 py-3">
                <p className="text-2xl font-semibold text-slate-950">+{totalPotencial}</p>
                <p className="mt-1 text-xs font-medium text-slate-500">potencial estimado total</p>
              </div>
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 px-4 py-3">
                <p className="text-2xl font-semibold text-slate-950">ES + LATAM</p>
                <p className="mt-1 text-xs font-medium text-slate-500">datos de casas existentes</p>
              </div>
            </div>

            <div className="space-y-2 rounded-2xl border border-slate-200/80 bg-white/65 p-3 shadow-[0_10px_28px_-24px_rgba(15,23,42,0.18)] sm:p-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">Filtrar por tipologia</p>
              <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none]">
                {FILTERS.map((filter) => (
                  <button
                    key={filter.key}
                    type="button"
                    onClick={() => setActiveFilter(filter.key)}
                    className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 sm:text-sm ${
                      activeFilter === filter.key
                        ? 'border-violet-400/55 bg-violet-500/12 text-violet-950 shadow-[0_0_0_1px_rgba(139,92,246,0.1),0_8px_18px_-14px_rgba(139,92,246,0.3)]'
                        : 'border-slate-200 bg-white/80 text-slate-600 hover:border-violet-300/35 hover:bg-white hover:text-slate-900'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-2">
          {ofertas.map((casa) => (
            <article
              key={casa.id}
              className="relative overflow-hidden rounded-2xl border border-violet-100/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(248,250,255,0.92)_48%,rgba(255,255,255,0.97)_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_18px_44px_rgba(15,23,42,0.1),0_6px_18px_rgba(88,28,135,0.06)] sm:p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-lg font-semibold leading-tight text-slate-950">{casa.nombre}</h2>
                    <span className="rounded-full border border-violet-200/70 bg-violet-50/80 px-2.5 py-1 text-[11px] font-semibold text-violet-700">
                      {getTipologiaLabel(casa.tipologia)}
                    </span>
                    <span className="rounded-full border border-slate-200/80 bg-white/70 px-2.5 py-1 text-[11px] font-semibold text-slate-500">
                      {getMarketLabel(casa)}
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-slate-600">{getResumen(casa)}</p>
                </div>

                <div className="shrink-0 rounded-xl border border-violet-100/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.96)_0%,rgba(245,243,255,0.9)_48%,rgba(236,253,245,0.86)_100%)] px-3 py-2 text-right shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_22px_rgba(76,29,149,0.09)]">
                  <p className="text-base font-extrabold leading-none text-slate-950">
                    +{casa.beneficioPotencial} {getCurrency(casa)}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold leading-none text-violet-500/80">potencial</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {casa.url ? (
                  <a
                    href={casa.url}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex h-10 items-center justify-center rounded-lg border border-violet-300/70 bg-slate-950 px-4 text-sm font-semibold text-violet-50 shadow-[0_8px_18px_rgba(15,23,42,0.12)] transition-colors hover:bg-violet-950"
                  >
                    Ir a la oferta
                  </a>
                ) : null}
                <Link
                  href={`/casas/${casa.id}`}
                  className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-200 bg-white/80 px-4 text-sm font-semibold text-slate-700 transition-colors hover:border-violet-300/50 hover:text-slate-950"
                >
                  Ver ficha
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  )
}
