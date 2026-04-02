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
                  {hasDailyCombinada ? `Cuota total ${dailyCombinada.cuotaTotal}` : 'Hoy no hay partidos suficientes para generar una Freebet diaria fiable.'}
                </h2>
                <p className="mt-2 text-sm text-gray-300">
                  {hasDailyCombinada
                    ? `Actualizada hoy a las ${dailyCombinada.horaActualizacion}`
                    : 'Vuelve más tarde o mañana.'}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 sm:min-w-48">
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  {hasDailyCombinada ? 'Confianza' : 'Disponibilidad'}
                </p>
                <p className="mt-1 text-lg font-bold text-emerald-400">
                  {hasDailyCombinada ? dailyCombinada.confianza : 'En validación'}
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  {hasDailyCombinada
                    ? dailyCombinada.notaConfianza
                    : 'Solo mostramos picks cuando pertenecen a la ventana diaria válida.'}
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 py-6 sm:px-8 sm:py-8">
            <div className="mb-6 rounded-2xl border border-stone-100 bg-stone-50 px-4 py-3">
              <p className="text-sm text-stone-600">
                {hasDailyCombinada
                  ? dailyCombinada.motivoGeneral
                  : 'La selección diaria se publica solo cuando el motor puede validar partidos y mercados reales del día actual.'}
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
                  Hoy no hay partidos suficientes para generar una Freebet diaria fiable.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  Vuelve más tarde o mañana.
                </p>
                <div className="mt-5">
                  <PronosticosCtas />
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-stone-50 px-6 py-6 shadow-sm sm:px-8 sm:py-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight text-stone-800">
                Aprovecha mejor cada pronóstico
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-stone-600 sm:text-base">
                Si además revisas las guías y comparas casas con bono de bienvenida, puedes seguir estos picks con más contexto y detectar opciones que encajen mejor con tu estrategia.
              </p>
            </div>

            <PronosticosCtas />
          </div>
        </section>
      </div>
    </div>
  )
}
