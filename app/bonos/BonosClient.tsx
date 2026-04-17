'use client'

import { useState } from 'react'
import {
  bonosEspanaCurados,
  bonosLatamUsCurados,
  ordenBonosEspana,
  ordenBonosLatamUs,
  type BonoLatamUsCurado,
  type BonoListadoEspana,
} from './bonosData'

type MarketKey = 'espana' | 'latam'
type BonoListadoItem = BonoListadoEspana | BonoLatamUsCurado

const ordenEspanaPorId = new Map(ordenBonosEspana.map((id, index) => [id, index]))
const ordenLatamUsPorClave = new Map(ordenBonosLatamUs.map((clave, index) => [clave, index]))

function ordenarPorOrdenManual<T>(items: T[], getClave: (item: T) => string, orden: Map<string, number>) {
  return [...items].sort((a, b) => {
    const claveA = getClave(a)
    const claveB = getClave(b)
    const ordenA = orden.get(claveA) ?? Number.MAX_SAFE_INTEGER
    const ordenB = orden.get(claveB) ?? Number.MAX_SAFE_INTEGER

    return ordenA - ordenB || claveA.localeCompare(claveB, 'es')
  })
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

function BonusList({ casas, showLatamMarket = false }: { casas: BonoListadoItem[]; showLatamMarket?: boolean }) {
  const gridClass = showLatamMarket
    ? 'sm:grid-cols-[minmax(8rem,1fr)_minmax(18rem,2.4fr)_5.5rem_10rem]'
    : 'sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_15rem]'
  const ofertaClass = showLatamMarket
    ? 'min-w-0 text-sm font-semibold leading-6 text-slate-800 sm:pr-4'
    : 'text-sm font-semibold text-slate-800'

  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_18px_45px_-38px_rgba(15,23,42,0.28)]">
      <div className={`hidden ${gridClass} border-b border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:grid`}>
        <span>Casa</span>
        <span>Oferta</span>
        {showLatamMarket ? <span>Mercado</span> : null}
        <span className="text-right">Acciones</span>
      </div>

      <div className="divide-y divide-slate-200">
        {casas.map((casa) => (
          <div
            key={'id' in casa ? casa.id : `${casa.mercado}-${casa.nombre}`}
            className={`grid gap-3 px-4 py-4 transition-colors hover:bg-slate-50/70 ${gridClass} sm:items-center`}
          >
            <h3 className="min-w-0 text-base font-semibold text-slate-950">{casa.nombre}</h3>
            <p className={ofertaClass}>{casa.ofertaTexto}</p>
            {showLatamMarket ? (
              <span className="inline-flex w-fit items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600">
                {'mercado' in casa ? casa.mercado : null}
              </span>
            ) : null}
            <div className="flex flex-wrap gap-2 sm:justify-end">
              {casa.url ? (
                <a
                  href={casa.url}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
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
  const casasEspana = ordenarPorOrdenManual(bonosEspanaCurados, (casa) => casa.id, ordenEspanaPorId)
  const casasLatam = ordenarPorOrdenManual(
    bonosLatamUsCurados.filter((casa) => casa.decision === 'ok' || casa.decision === 'prudente'),
    (casa) => `${casa.mercado}:${casa.nombre}`,
    ordenLatamUsPorClave,
  )
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
