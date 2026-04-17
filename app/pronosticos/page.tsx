import type { Metadata } from 'next'

const todayUpdateLabel = new Date().toLocaleDateString('es-ES', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  timeZone: 'Europe/Madrid',
})

import { FreebetDailyReveal } from '@/components/pronosticos/FreebetDailyReveal'
import { PronosticosCtas } from '@/components/pronosticos/PronosticosCtas'
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

          <p className="mt-3 max-w-2xl text-sm sm:text-base text-stone-500 leading-relaxed">
            Una vista previa simple de la selección diaria para seguirla de un vistazo.
          </p>
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

                <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                  Selección diaria validada con partidos reales dentro de la ventana del día
                </div>

                <div className="mt-6 rounded-2xl border border-stone-200 bg-stone-50 px-4 py-4 sm:px-5">
                  <p className="text-sm leading-relaxed text-stone-600">
                    La Freebet diaria no se publica por relleno. Solo mostramos una combinada gratis diaria cuando el motor encuentra partidos y mercados suficientes para validarla con criterios mínimos de calidad.
                  </p>

                  <details className="mt-4 group rounded-2xl border border-stone-200 bg-white">
                    <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-stone-800 sm:px-5 [&::-webkit-details-marker]:hidden">
                      <span className="flex items-center justify-between gap-4">
                        <span>Cómo funciona la Freebet diaria</span>
                        <span className="text-stone-400 transition group-open:rotate-180">⌄</span>
                      </span>
                    </summary>

                    <div className="border-t border-stone-100 px-4 py-4 sm:px-5">
                      <div className="space-y-4 text-sm leading-relaxed text-stone-600">
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
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 sm:p-6">
                <h3 className="text-lg font-bold text-stone-800">Freebet diaria no disponible por ahora</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  Solo la mostramos cuando hay partidos y mercados suficientes para validarla.
                </p>
                <div className="mt-5">
                  <PronosticosCtas />
                </div>
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
