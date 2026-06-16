import type { Metadata } from 'next'

import { getQuantLiteCombinada } from '@/lib/pronosticos/engine'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Predicciones Mundial | IAPredictHub',
  description: 'Pronóstico diario del Mundial en IAPredictHub.',
}

export default async function PronosticosPage() {
  const dailyCombinada = await getQuantLiteCombinada()
  const hasActiveCombinada = Boolean(dailyCombinada?.picks.length)

  return (
    <main className="min-h-[70vh] bg-stone-50 px-4 py-10 text-stone-950 sm:px-6 lg:px-8">
      <section className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        {hasActiveCombinada && dailyCombinada ? (
          <div className="flex flex-col gap-5">
            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                {dailyCombinada.etiquetaDia}
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">
                Pronóstico de hoy
              </h1>
              <p className="mt-2 text-base font-semibold text-emerald-700">{dailyCombinada.confianza}</p>
              <p className="mt-3 text-sm leading-6 text-stone-700">{dailyCombinada.motivoGeneral}</p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                Cuota total
              </p>
              <p className="mt-2 text-4xl font-bold text-emerald-700">{dailyCombinada.cuotaTotal}</p>
            </div>

            <div className="grid gap-3">
              {dailyCombinada.picks.map((pick) => (
                <article
                  key={`${pick.partido ?? pick.text}-${pick.mercado ?? pick.cuota}`}
                  className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
                >
                  {pick.liga || pick.hora ? (
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
                      {[pick.liga, pick.hora].filter(Boolean).join(' · ')}
                    </p>
                  ) : null}
                  {pick.partido ? (
                    <h2 className="text-lg font-bold leading-snug text-stone-950">{pick.partido}</h2>
                  ) : null}
                  {pick.mercado ? (
                    <p className="mt-2 text-sm font-medium leading-6 text-stone-700">{pick.mercado}</p>
                  ) : null}
                  {pick.cuota ? (
                    <p className="mt-3 text-sm font-bold text-emerald-700">Cuota {pick.cuota}</p>
                  ) : null}
                </article>
              ))}
            </div>

            {dailyCombinada.casa ? (
              <div className="flex items-center justify-between gap-4 rounded-2xl border border-stone-200 bg-white px-5 py-4 shadow-sm">
                <p className="text-sm font-medium text-stone-600">{dailyCombinada.casa.texto}</p>
                <a
                  href={dailyCombinada.casa.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-emerald-600 hover:text-emerald-700"
                >
                  Abrir
                </a>
              </div>
            ) : null}
          </div>
        ) : (
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="text-lg font-bold text-stone-950">Sin pronóstico activo</p>
          </div>
        )}

        <p className="text-xs font-medium leading-5 text-stone-500">
          +18 · Apuesta solo de forma responsable. Las cuotas pueden cambiar y el pronóstico no garantiza beneficio.
        </p>
      </section>
    </main>
  )
}
