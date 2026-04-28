import type { Metadata } from 'next'
import Link from 'next/link'

const todayUpdateLabel = new Date().toLocaleDateString('es-ES', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  timeZone: 'Europe/Madrid',
})

import { FreebetDailyReveal } from '@/components/pronosticos/FreebetDailyReveal'
import ClubMundialVipForm from '@/components/ClubMundialVip/ClubMundialVipForm'
import { getQuantLiteCombinada } from '@/lib/pronosticos/engine'

export const metadata: Metadata = {
  title: 'Freebet diaria | IAPredictHub',
  description: 'Descubre la selección diaria de freebet con picks, cuota total y nivel de confianza dentro de la beta de IAPredictHub.',
}

export const revalidate = 300

export default async function PronosticosPage() {
  const dailyCombinada = await getQuantLiteCombinada()
  const hasDailyCombinada = dailyCombinada !== null

  return (
    <div className="min-h-[70vh] px-4 py-10 sm:py-14">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <div className="text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-800 tracking-tight">
            Freebet diaria
          </h1>

        </div>

        <section className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
          <div
            style={{ background: 'linear-gradient(135deg, #12112A 0%, #2A1F3D 100%)' }}
            className="px-6 py-6 sm:px-8 sm:py-8"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  {hasDailyCombinada ? dailyCombinada.etiquetaDia : 'Estado de la selección diaria'}
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
                  {hasDailyCombinada ? 'Selección lista para hoy' : 'Hoy no hay Freebet diaria disponible.'}
                </h2>
                <p className="mt-2 text-sm text-gray-300">
                  {hasDailyCombinada
                    ? `Actualizada hoy ${todayUpdateLabel}`
                    : 'Vuelve más tarde o mañana para revisar nuevas selecciones.'}
                </p>
              </div>

            </div>
          </div>

          <div className="px-6 py-6 sm:px-8 sm:py-8">
            {hasDailyCombinada ? (
              <>
                <FreebetDailyReveal dailyCombinada={dailyCombinada} />

                <Link
                  href="/especial/mundial"
                  className="mt-6 block rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-amber-50 px-5 py-5 shadow-sm transition-all hover:border-emerald-300 hover:shadow-md sm:px-6"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="max-w-2xl">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[11px] font-semibold tracking-wide mb-3">
                        Mundial 2026
                      </span>
                      <h3 className="text-lg font-bold leading-tight text-stone-900 sm:text-xl">
                        IAPredictHub · Especial Mundial 2026
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-stone-600">
                        Mis predicciones para el torneo: ganador, máximo goleador y otros mercados.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 hover:bg-emerald-200 hover:border-emerald-300 font-semibold text-sm transition-colors">
                      Ver predicciones <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>

                <ClubMundialVipForm />

                <div className="mt-6 rounded-2xl border border-stone-200 bg-stone-50 px-4 py-4 sm:px-5">
                  <details className="group rounded-2xl border border-stone-200 bg-white">
                    <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-stone-800 sm:px-5 [&::-webkit-details-marker]:hidden">
                      <span className="flex items-center justify-between gap-4">
                        <span>Cómo funciona la Freebet diaria</span>
                        <span className="text-stone-400 transition group-open:rotate-180">⌄</span>
                      </span>
                    </summary>

                    <div className="border-t border-stone-100 px-4 py-4 sm:px-5">
                      <div className="space-y-4 text-sm leading-relaxed text-stone-600">
                        <p>
                          La Freebet diaria no se publica por relleno. Solo mostramos una combinada gratis diaria cuando el motor encuentra partidos y mercados suficientes para validarla con criterios mínimos de calidad.
                        </p>

                        <div>
                          <h3 className="font-semibold text-stone-800">1. Filtrado de partidos</h3>
                          <p className="mt-1">Analizamos solo partidos prepartido y competiciones compatibles con el motor. Si un evento no tiene datos suficientes o no encaja en la ventana diaria, se descarta.</p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-stone-800">2. Mercados priorizados</h3>
                          <p className="mt-1">Priorizamos mercados de goles y, cuando encaja mejor, ganador. En esta versión evitamos mercados más ruidosos para mantener una selección más estable y entendible.</p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-stone-800">3. Selección de picks</h3>
                          <p className="mt-1">El motor estima probabilidades, compara cuotas y calcula una referencia interna de valor para elegir una sola selección por partido. Después ordena los picks por consistencia, riesgo y calidad del mercado.</p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-stone-800">4. Publicación o descarte</h3>
                          <p className="mt-1">Si no hay suficientes picks válidos, no publicamos la Freebet diaria. Preferimos no mostrar una selección antes que enseñar una combinada floja o poco fiable.</p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-stone-800">Nota final</h3>
                          <p className="mt-1">La Freebet diaria se genera una vez al día y puede no estar disponible todos los días.</p>
                        </div>
                      </div>
                    </div>
                  </details>
                </div>
              </>
            ) : (
              <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-stone-50 p-5 shadow-sm sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  Alternativa disponible hoy
                </p>
                <h3 className="mt-3 text-xl font-bold leading-tight text-stone-900 sm:text-2xl">
                  Hoy no hay selección del día, pero puedes activar 100€ en freebet ahora
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600 sm:text-base">
                  Versus te da 100€ en freebet al hacer tu primer depósito. Siguiendo la ruta guiada, puedes convertirla en un beneficio estimado de ~65€.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="/casas/versus"
                    className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  >
                    Ver bono de Versus →
                  </Link>
                  <Link
                    href="/casas"
                    className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-100"
                  >
                    Ver otras casas con bono →
                  </Link>
                </div>

                <Link
                  href="/especial/mundial"
                  className="mt-6 block rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-amber-50 px-5 py-5 shadow-sm transition-all hover:border-emerald-300 hover:shadow-md sm:px-6"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="max-w-2xl">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[11px] font-semibold tracking-wide mb-3">
                        Mundial 2026
                      </span>
                      <h3 className="text-lg font-bold leading-tight text-stone-900 sm:text-xl">
                        IAPredictHub · Especial Mundial 2026
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-stone-600">
                        Mis predicciones para el torneo: ganador, máximo goleador y otros mercados.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 hover:bg-emerald-200 hover:border-emerald-300 font-semibold text-sm transition-colors">
                      Ver predicciones <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>

                <ClubMundialVipForm />
              </div>
            )}
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
    </div>
  )
}
