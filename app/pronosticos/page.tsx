import type { Metadata } from 'next'
import Link from 'next/link'

const PAYGO_URL = 'https://app.afiliago.com/pago/iapredicthub/JAYO1LND'

const includes = [
  'Pronósticos a largo plazo: campeón, clasificados de grupo, semifinalistas, máximo goleador y mercados especiales.',
  'Análisis de los partidos más interesantes del día.',
  'Picks seleccionados con explicación breve.',
  'Seguimiento privado durante el torneo.',
  'Freebets o combinadas recreativas para jugar con importes pequeños.',
  'Acceso automático al canal privado de Telegram después del pago.',
]

const steps = [
  'Entras al Club por 4,99 €.',
  'Afiliago PayGo te muestra automáticamente el enlace privado de Telegram tras el pago.',
  'Recibes los análisis y pronósticos durante el Mundial 2026.',
]

export const metadata: Metadata = {
  title: 'Club Mundial VIP | IAPredictHub',
  description:
    'Pronósticos privados del Mundial 2026 en Telegram con acceso automático tras el pago mediante Afiliago PayGo.',
}

export default function PronosticosPage() {
  return (
    <div className="min-h-[70vh] bg-stone-50 px-4 pb-40 pt-10 text-stone-950 sm:py-14">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <section className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
          <div
            style={{ background: 'linear-gradient(135deg, #12112A 0%, #243B35 55%, #3A2A4C 100%)' }}
            className="px-6 py-8 sm:px-9 sm:py-11"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Mundial 2026
            </p>
            <div className="mt-4 grid gap-7 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Club Mundial VIP
                </h1>
                <p className="mt-4 text-lg font-semibold text-gray-100 sm:text-xl">
                  Pronósticos privados del Mundial 2026 en Telegram.
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-200 sm:text-base">
                  Acceso al canal privado donde publicaremos pronósticos a largo plazo,
                  análisis de partidos, picks seleccionados y algunas freebets o combinadas
                  recreativas durante el Mundial 2026.
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl shadow-black/10 backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
                  Precio fundador
                </p>
                <p className="mt-2 text-3xl font-bold text-white">Precio fundador: 4,99 €</p>
                <p className="mt-1 text-sm font-medium text-gray-300 line-through">Antes 9,99 €</p>
                <a
                  href={PAYGO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-center text-sm font-bold text-slate-950 shadow-sm transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  Entrar al Club Mundial VIP
                </a>
                <p className="mt-3 text-center text-xs font-medium text-gray-200">
                  Acceso automático al canal privado de Telegram tras el pago.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-stone-200 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Qué incluye
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-950">
                Una cobertura privada, editorial y sin promesas vacías.
              </h2>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {includes.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-stone-200 bg-stone-50 p-4 shadow-sm"
              >
                <div className="mb-3 h-1.5 w-10 rounded-full bg-emerald-500" />
                <p className="text-sm leading-6 text-stone-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-stone-200 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Cómo funciona
            </p>
            <div className="mt-6 space-y-4">
              {steps.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="pt-1.5 text-sm leading-6 text-stone-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-amber-200 bg-amber-50 px-6 py-7 shadow-sm sm:px-8 sm:py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-800">
              Importante sobre picks
            </p>
            <p className="mt-4 text-sm leading-7 text-amber-950 sm:text-base">
              Los picks principales y las combinadas/freebets recreativas estarán separados. Las
              combinadas recreativas son contenido de entretenimiento y no contarán como
              estadísticas principales.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-stone-200 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-8">
          <div className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 text-sm font-medium leading-7 text-stone-700">
            +18 · Juego responsable · No garantiza resultados · Contenido educativo y recreativo ·
            Apuesta solo cantidades que puedas permitirte perder.
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={PAYGO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-center text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Entrar al Club por 4,99 €
            </a>
            <Link
              href="/especial/mundial"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-emerald-200 bg-white px-5 py-3 text-center text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Ver Especial Mundial gratis
            </Link>
          </div>
        </section>
      </div>

      <div className="fixed inset-x-4 bottom-[calc(6rem+env(safe-area-inset-bottom))] z-[60] md:hidden">
        <a
          href={PAYGO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-emerald-950/20 transition hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950"
        >
          Entrar al Club por 4,99 €
        </a>
      </div>
    </div>
  )
}
