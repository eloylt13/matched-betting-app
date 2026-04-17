'use client'

import { useState } from 'react'
import { todasLasCasas } from '@/lib/presets'
import type { Casa } from '@/types/presets'
import { bonosEspanaCurados, type BonoListadoCasa } from './bonosData'

type MarketKey = 'espana' | 'latam'

const LATAM_MARKET_LABELS: Partial<Record<Casa['pais'], string>> = {
  regionales: 'REG',
  co: 'CO',
  mx: 'MX',
  cl: 'CL',
  pe: 'PE',
  ec: 'EC',
  ar: 'AR',
  pa: 'PA',
  uy: 'UY',
}

function formatBono(casa: Casa) {
  const currency = casa.market === 'latam' ? 'USD' : '€'
  const amount = new Intl.NumberFormat('es-ES', {
    maximumFractionDigits: 0,
  }).format(casa.beneficioPotencial)

  return casa.market === 'latam' ? `${amount} ${currency}` : `${amount}${currency}`
}

function getOfertaListado(casa: BonoListadoCasa) {
  return 'ofertaTexto' in casa ? casa.ofertaTexto : formatBono(casa)
}

function sortByName<T extends BonoListadoCasa>(casas: T[]) {
  return [...casas].sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'))
}

function getLatamMarketLabel(casa: BonoListadoCasa) {
  return LATAM_MARKET_LABELS[casa.pais] ?? casa.pais.toUpperCase()
}

function getCasaNombreListado(casa: BonoListadoCasa) {
  return casa.market === 'espana' && casa.id === 'pokerstars' ? 'PokerStars' : casa.nombre
}

function MarketSelector({
  activeMarket,
  onMarketChange,
}: {
  activeMarket: MarketKey
  onMarketChange: (market: MarketKey) => void
}) {
  return (
    <nav
      aria-label="Mercados de bonos"
      className="mt-6 rounded-2xl border border-slate-200/80 bg-white/75 p-3 shadow-[0_18px_45px_-38px_rgba(15,23,42,0.24)] backdrop-blur-sm sm:mt-8 sm:inline-flex"
    >
      <div className="flex flex-wrap gap-2">
        {(['espana', 'latam'] as MarketKey[]).map((market) => (
          <button
            key={market}
            type="button"
            onClick={() => onMarketChange(market)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              activeMarket === market
                ? 'border-violet-400/55 bg-violet-500/12 text-violet-950 shadow-[0_0_0_1px_rgba(139,92,246,0.12),0_10px_24px_-18px_rgba(139,92,246,0.3)] hover:bg-violet-500/16'
                : 'border-slate-200 bg-white/85 text-slate-700 hover:border-violet-300/40 hover:text-slate-950'
            }`}
          >
            {market === 'espana' ? 'España' : 'LATAM'}
          </button>
        ))}
      </div>
    </nav>
  )
}

function BonusList({ casas, showLatamMarket = false }: { casas: BonoListadoCasa[]; showLatamMarket?: boolean }) {
  const gridClass = showLatamMarket
    ? 'sm:grid-cols-[minmax(0,1fr)_6rem_9rem_15rem]'
    : 'sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_15rem]'

  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_18px_45px_-38px_rgba(15,23,42,0.28)]">
      <div className={`hidden ${gridClass} border-b border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:grid`}>
        <span>Casa</span>
        {showLatamMarket ? <span>Mercado</span> : null}
        <span>{showLatamMarket ? 'Bono' : 'Oferta'}</span>
        <span className="text-right">Acciones</span>
      </div>

      <div className="divide-y divide-slate-200">
        {casas.map((casa) => (
          <div
            key={casa.id}
            className={`grid gap-3 px-4 py-4 transition-colors hover:bg-slate-50/70 ${gridClass} sm:items-center`}
          >
            <h3 className="min-w-0 text-base font-semibold text-slate-950">{getCasaNombreListado(casa)}</h3>
            {showLatamMarket ? (
              <span className="inline-flex w-fit items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600">
                {getLatamMarketLabel(casa)}
              </span>
            ) : null}
            <p className="text-sm font-semibold text-slate-800">{getOfertaListado(casa)}</p>
            <div className="flex flex-wrap gap-2 sm:justify-end">
              {casa.url ? (
                <a
                  href={casa.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-slate-950 bg-slate-950 px-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  Ir a la oferta
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function BonosClient() {
  const [activeMarket, setActiveMarket] = useState<MarketKey>('espana')
  const casasEspana = sortByName(bonosEspanaCurados)
  const casasLatam = sortByName(todasLasCasas.filter((casa) => casa.market === 'latam'))
  const activeCasas = activeMarket === 'latam' ? casasLatam : casasEspana

  return (
    <main className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
        <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Mejores bonos de apuestas online España y LATAM
        </h1>

        <MarketSelector activeMarket={activeMarket} onMarketChange={setActiveMarket} />

        <section className="mt-8 sm:mt-10">
          <h2 className="mb-3 text-lg font-semibold text-slate-950">
            {activeMarket === 'latam' ? 'LATAM' : 'España'}
          </h2>
          <BonusList casas={activeCasas} showLatamMarket={activeMarket === 'latam'} />
        </section>
      </div>
    </main>
  )
}
