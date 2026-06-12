import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pronósticos Mundial 2026 | IAPredictHub',
  description:
    'Predicciones gratuitas y seguimiento editorial del Mundial 2026 en IAPredictHub.',
}

export default function PronosticosPage() {
  return (
    <div className="min-h-[70vh] bg-stone-50 px-4 py-14 text-stone-950 sm:px-6 lg:px-8">
      <section className="mx-auto flex w-full max-w-3xl flex-col items-start rounded-3xl border border-stone-200 bg-white px-6 py-8 shadow-sm sm:px-9 sm:py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Mundial 2026
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-stone-950 sm:text-5xl">
          Pronósticos Mundial 2026
        </h1>
        <p className="mt-4 text-lg font-semibold text-stone-700">
          Predicciones gratuitas y seguimiento editorial del torneo.
        </p>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base">
          La zona anterior de pronósticos queda cerrada. Puedes seguir el especial gratuito del
          Mundial 2026 y usar IAPredictHub para empezar con el primer bono guiado paso a paso.
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            href="/especial/mundial"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-center text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            Ver Especial Mundial 2026
          </Link>
          <Link
            href="/bienvenida"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-stone-300 bg-white px-5 py-3 text-center text-sm font-semibold text-stone-700 transition hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            Empezar primer bono guiado
          </Link>
        </div>

        <p className="mt-8 text-xs font-medium leading-5 text-stone-500">
          +18 · Juego responsable · No garantiza resultados.
        </p>
      </section>
    </div>
  )
}
