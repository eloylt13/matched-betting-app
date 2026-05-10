'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FEATURED_STARTER_HOUSE } from '@/lib/config/featuredHouse'

const STORAGE_KEY = 'iapredicthub-dashboard-first-step-dismissed-v1'

export default function FirstStepRecommendation() {
  const [checkedStorage, setCheckedStorage] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    try {
      setDismissed(window.localStorage.getItem(STORAGE_KEY) === 'true')
    } catch {
      setDismissed(false)
    } finally {
      setCheckedStorage(true)
    }
  }, [])

  const handleDismiss = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, 'true')
    } catch {
      // Storage can fail in private browsing or restricted environments.
    }

    setDismissed(true)
  }

  if (!checkedStorage || dismissed) {
    return null
  }

  return (
    <section className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4 pr-11 shadow-sm sm:p-5 sm:pr-12">
      <button
        type="button"
        onClick={handleDismiss}
        aria-label="Cerrar recomendacion"
        className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full text-stone-400 transition-colors hover:bg-white/80 hover:text-stone-600"
      >
        X
      </button>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-700">
            PRIMER PASO RECOMENDADO
          </p>
          <h2 className="text-base font-bold text-stone-800 sm:text-lg">
            Empieza por {FEATURED_STARTER_HOUSE.name} antes de abrir más casas.
          </h2>
          <p className="mt-1 text-xs text-stone-500">
            +18 · Juego responsable · Algunos enlaces pueden ser de afiliado.
          </p>
        </div>

        <Link
          href={FEATURED_STARTER_HOUSE.href}
          className="inline-flex w-fit items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-emerald-50"
        >
          {FEATURED_STARTER_HOUSE.ctaLabel} <span aria-hidden="true" className="ml-1">→</span>
        </Link>
      </div>
    </section>
  )
}
