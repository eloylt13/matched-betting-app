import type { Metadata } from 'next'

import { PronosticosCtas } from '@/components/pronosticos/PronosticosCtas'

export const metadata: Metadata = {
  title: 'Combinada diaria gratis | IAPredictHub',
  description: 'Consulta una combinada diaria de ejemplo con picks, cuota total y nivel de confianza dentro de la beta de IAPredictHub.',
}

const picks = [
  'Real Madrid gana',
  'Más de 1.5 goles en el partido',
  'Manchester City marca en ambas partes',
  'Inter o empate',
  'Más de 8.5 córners totales',
]

export default function PronosticosPage() {
  return (
    <div className="min-h-[70vh] px-4 py-10 sm:py-14">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <div className="text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-600 mb-4">
            Beta
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-stone-800 tracking-tight">
            Combinada diaria gratis
          </h1>

          <p className="mt-3 max-w-2xl text-sm sm:text-base text-stone-500 leading-relaxed">
            Una vista previa simple de la combinada del día para seguirla de un vistazo.
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
                  Combinada del día
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
                  Cuota total 8.75
                </h2>
                <p className="mt-2 text-sm text-gray-300">
                  Actualizada hoy a las 09:30
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 sm:min-w-48">
                <p className="text-xs uppercase tracking-wider text-gray-400">Confianza</p>
                <p className="mt-1 text-lg font-bold text-emerald-400">Alta · 8/10</p>
                <p className="mt-1 text-xs text-gray-400">Selección de ejemplo para la beta</p>
              </div>
            </div>
          </div>

          <div className="px-6 py-6 sm:px-8 sm:py-8">
            <div className="grid gap-3">
              {picks.map((pick, index) => (
                <div
                  key={pick}
                  className="flex items-start gap-3 rounded-2xl border border-stone-100 bg-stone-50 px-4 py-3"
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-stone-800">{pick}</p>
                    <p className="mt-0.5 text-xs text-stone-500">Pick de ejemplo</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
              Pronto se actualizará automáticamente
            </div>
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
