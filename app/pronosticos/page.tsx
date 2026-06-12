import type { Metadata } from 'next'

import { getQuantLiteCombinada } from '@/lib/pronosticos/engine'

export const dynamic = 'force-dynamic'

const VERSUS_URL =
  'https://www.versus.es/landings/mundial-futbol-2026?utm_source=netrfer&utm_medium=affiliation&utm_campaign=lpLOLO&creferer=btag:656191_a9dc5ab372a24c3091be9dcaffff7a77;affiliate:656191'

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
        <h1 className="text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">
          Predicciones Mundial 🏆
        </h1>

        {hasActiveCombinada && dailyCombinada ? (
          <div className="flex flex-col gap-5">
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

            <a
              href={VERSUS_URL}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="flex w-full flex-col gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-5 text-left shadow-sm transition hover:border-emerald-300 hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Realizado en Versus
              </span>
              <span className="text-xl font-bold leading-snug text-stone-950 sm:text-2xl">
                Regístrate y consigue hasta 200€ en bonos
              </span>
            </a>
          </div>
        ) : (
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="text-lg font-bold text-stone-950">Sin pronóstico activo</p>
          </div>
        )}

        <p className="text-xs font-medium leading-5 text-stone-500">
          +18 · Juego responsable · No garantiza resultados.
        </p>
      </section>
    </main>
  )
}
