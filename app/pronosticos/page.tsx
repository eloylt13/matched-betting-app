import type { Metadata } from 'next'
import Link from 'next/link'
import StickyMobileCTA from '@/components/StickyMobileCTA'

export const metadata: Metadata = {
  title: 'Freebet diaria en pausa | IAPredictHub',
  description: 'La freebet diaria de IAPredictHub está en pausa hasta el Mundial 2026.',
}

export default function PronosticosPage() {
  return (
    <div className="min-h-[70vh] px-4 pb-40 pt-10 sm:py-14">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <section className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
          <div
            style={{ background: 'linear-gradient(135deg, #12112A 0%, #2A1F3D 100%)' }}
            className="px-6 py-7 sm:px-8 sm:py-9"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Estado actual
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Freebet diaria en pausa
            </h1>
            <p className="mt-3 text-base font-medium text-gray-200 sm:text-lg">
              Nos vemos en el Mundial 2026.
            </p>
          </div>

          <div className="px-6 py-6 sm:px-8 sm:py-8">
            <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-stone-50 p-5 shadow-sm sm:p-6">
              <p className="text-sm leading-relaxed text-stone-600 sm:text-base">
                Mientras tanto, si quieres empezar hoy, sigue el primer bono guiado paso a paso.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/bienvenida"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  Empezar mi primer bono guiado
                </Link>
                <Link
                  href="/especial/mundial"
                  className="inline-flex items-center justify-center rounded-xl border border-emerald-200 bg-white px-5 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  Ver especial Mundial 2026
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-100 px-6 pb-6 pt-4 sm:px-8 sm:pb-8">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-xs text-stone-500">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="font-semibold text-stone-700">+18</span>
                <span className="font-semibold text-stone-700">Juego responsable</span>
                <span>No garantiza resultados</span>
                <span>No es recomendación de inversión</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <StickyMobileCTA href="/bienvenida" label="Empezar mi primer bono guiado" offset="aboveNav" />
    </div>
  )
}
