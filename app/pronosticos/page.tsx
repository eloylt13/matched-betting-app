import type { Metadata } from 'next'

import { FreebetDailyReveal } from '@/components/pronosticos/FreebetDailyReveal'
import { PronosticosCtas } from '@/components/pronosticos/PronosticosCtas'
import { getQuantLiteCombinada } from '@/lib/pronosticos/engine'

export const metadata: Metadata = {
  title: 'Freebet diaria | IAPredictHub',
  description: 'Consulta la selección diaria de freebet con picks, cuota total y nivel de confianza dentro de la beta de IAPredictHub.',
}

export const revalidate = 300

export default async function PronosticosPage() {
  const dailyCombinada = await getQuantLiteCombinada()
  const hasDailyCombinada = dailyCombinada !== null

  return (
    <div className="min-h-[70vh] px-4 py-10 sm:py-14">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <div className="text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-600 mb-4">
            Beta
          </div>

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
                  {hasDailyCombinada ? `Cuota total ${dailyCombinada.cuotaTotal}` : 'Hoy no hay Freebet diaria disponible.'}
                </h2>
                <p className="mt-2 text-sm text-gray-300">
                  {hasDailyCombinada
                    ? `Actualizada hoy a las ${dailyCombinada.horaActualizacion}`
                    : 'Vuelve más tarde o mañana para revisar nuevas selecciones.'}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 sm:min-w-48">
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  {hasDailyCombinada ? 'Confianza' : 'Disponibilidad'}
                </p>
                <p className="mt-1 text-lg font-bold text-emerald-400">
                  {hasDailyCombinada ? dailyCombinada.confianza : 'No disponible hoy'}
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  {hasDailyCombinada
                    ? dailyCombinada.notaConfianza
                    : 'Solo mostramos picks cuando hay partidos y mercados suficientes para validarlos.'}
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 py-6 sm:px-8 sm:py-8">
            <div className="mb-6 rounded-2xl border border-stone-100 bg-stone-50 px-4 py-3">
              <p className="text-sm text-stone-600">
                {hasDailyCombinada
                  ? dailyCombinada.motivoGeneral
                  : 'Solo publicamos la Freebet diaria cuando hay partidos y mercados suficientes para validarla.'}
              </p>
            </div>

            {hasDailyCombinada ? (
              <>
                <FreebetDailyReveal dailyCombinada={dailyCombinada} />

                <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                  Selección diaria validada con partidos reales dentro de la ventana del día
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
        </section>

      </div>
    </div>
  )
}
