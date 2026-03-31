'use client'

import Link from 'next/link'
import { track } from '@vercel/analytics'

export function PronosticosCtas() {
  return (
    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
      <Link
        href="/guias"
        onClick={() => track('pronosticos_cta_click_guias')}
        className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
      >
        Ver guías
      </Link>
      <Link
        href="/casas"
        onClick={() => track('pronosticos_cta_click_casas')}
        className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-stone-200 bg-white px-5 py-3 text-sm font-semibold text-stone-800 transition hover:border-emerald-300 hover:text-emerald-700"
      >
        Explorar casas
      </Link>
    </div>
  )
}
