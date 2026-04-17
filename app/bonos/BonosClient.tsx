'use client'

import Link from 'next/link'
import { todasLasCasas } from '@/lib/presets'
import type { Casa } from '@/types/presets'

function formatBono(casa: Casa) {
  const currency = casa.market === 'latam' ? 'USD' : '€'
  const amount = new Intl.NumberFormat('es-ES', {
    maximumFractionDigits: 0,
  }).format(casa.beneficioPotencial)

  return casa.market === 'latam' ? `${amount} ${currency}` : `${amount}${currency}`
}

function sortByName(casas: Casa[]) {
  return [...casas].sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'))
}

function BonusList({ casas }: { casas: Casa[] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_18px_45px_-38px_rgba(15,23,42,0.28)]">
      <div className="hidden grid-cols-[minmax(0,1fr)_9rem_15rem] border-b border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:grid">
        <span>Casa</span>
        <span>Bono</span>
        <span className="text-right">Acciones</span>
      </div>

      <div className="divide-y divide-slate-200">
        {casas.map((casa) => (
          <div
            key={casa.id}
            className="grid gap-3 px-4 py-4 transition-colors hover:bg-slate-50/70 sm:grid-cols-[minmax(0,1fr)_9rem_15rem] sm:items-center"
          >
            <h3 className="min-w-0 text-base font-semibold text-slate-950">{casa.nombre}</h3>
            <p className="text-sm font-semibold text-slate-800">{formatBono(casa)}</p>
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
              <Link
                href={`/casas/${casa.id}`}
                className="inline-flex h-9 items-center justify-center rounded-md border border-slate-300 bg-white px-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-500 hover:text-slate-950"
              >
                Ver ficha
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function BonosClient() {
  const casasEspana = sortByName(todasLasCasas.filter((casa) => casa.market === 'espana'))
  const casasLatam = sortByName(todasLasCasas.filter((casa) => casa.market === 'latam'))

  return (
    <main className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
        <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Mejores bonos de apuestas online España y LATAM
        </h1>

        <section className="mt-8 sm:mt-10">
          <h2 className="mb-3 text-lg font-semibold text-slate-950">España</h2>
          <BonusList casas={casasEspana} />
        </section>

        <section className="mt-8 sm:mt-10">
          <h2 className="mb-3 text-lg font-semibold text-slate-950">LATAM</h2>
          <BonusList casas={casasLatam} />
        </section>
      </div>
    </main>
  )
}
