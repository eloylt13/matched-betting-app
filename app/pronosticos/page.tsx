import type { Metadata } from 'next'

import { PronosticosCtas } from '@/components/pronosticos/PronosticosCtas'
import { combinadaDelDia, type CombinadaData } from './mockData'

export const metadata: Metadata = {
  title: 'Combinada diaria gratis | IAPredictHub',
  description: 'Consulta una combinada diaria de ejemplo con picks, cuota total y nivel de confianza dentro de la beta de IAPredictHub.',
}

export const revalidate = 28800

type OddsSport = {
  key: string
  title: string
  active: boolean
}

type OddsOutcome = {
  name: string
  price: number
  point?: number
}

type OddsMarket = {
  key: string
  outcomes: OddsOutcome[]
}

type OddsBookmaker = {
  key: string
  title: string
  markets: OddsMarket[]
}

type OddsEvent = {
  id: string
  home_team: string
  away_team: string
  commence_time: string
  bookmakers?: OddsBookmaker[]
}

type PickCandidate = {
  eventId: string
  text: string
  odd: number
  confidenceScore: number
  motivoBreve?: string
}

const CACHE_SECONDS = 60 * 60 * 8
const MAX_SPORTS = 4
const REQUIRED_PICKS = 5

function getFallbackData(): CombinadaData {
  const now = new Date()

  return {
    ...combinadaDelDia,
    etiquetaDia: capitalizeFirstLetter(formatSpanishDay(now)),
    horaActualizacion: formatSpanishTime(now),
  }
}

function formatSpanishDay(date: Date) {
  return new Intl.DateTimeFormat('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    timeZone: 'Europe/Madrid',
  }).format(date)
}

function formatSpanishTime(date: Date) {
  return new Intl.DateTimeFormat('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Europe/Madrid',
  }).format(date)
}

function capitalizeFirstLetter(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

function calculateTotalOdd(picks: PickCandidate[]) {
  return picks.reduce((acc, pick) => acc * pick.odd, 1)
}

function buildConfidenceLabel(picks: PickCandidate[]) {
  const averageScore = picks.reduce((acc, pick) => acc + pick.confidenceScore, 0) / picks.length

  if (averageScore >= 8.5) {
    return 'Alta · 9/10'
  }

  if (averageScore >= 7.5) {
    return 'Alta · 8/10'
  }

  if (averageScore >= 6.5) {
    return 'Media · 7/10'
  }

  return 'Media · 6/10'
}

function buildH2hCandidate(event: OddsEvent, market: OddsMarket): PickCandidate | null {
  const outcomes = market.outcomes.filter(
    (outcome) => outcome.name === event.home_team || outcome.name === event.away_team,
  )

  if (outcomes.length < 2) {
    return null
  }

  const favorite = outcomes.reduce((best, current) => (current.price < best.price ? current : best))

  if (favorite.price < 1.2 || favorite.price > 1.75) {
    return null
  }

  return {
    eventId: event.id,
    text: `${favorite.name} gana`,
    odd: favorite.price,
    confidenceScore: Math.max(6, 10 - (favorite.price - 1) * 5),
    motivoBreve: 'Favorito con cuota contenida en el mercado principal.',
  }
}

function buildTotalsCandidate(event: OddsEvent, market: OddsMarket): PickCandidate | null {
  const outcomes = market.outcomes.filter((outcome) => outcome.name === 'Over' && typeof outcome.point === 'number')

  const preferredOutcome = outcomes
    .filter((outcome) => outcome.point !== undefined && outcome.point <= 2.5 && outcome.price >= 1.35 && outcome.price <= 1.95)
    .sort((a, b) => {
      const pointDiff = (a.point ?? 99) - (b.point ?? 99)

      if (pointDiff !== 0) {
        return pointDiff
      }

      return a.price - b.price
    })[0]

  if (!preferredOutcome || preferredOutcome.point === undefined) {
    return null
  }

  return {
    eventId: event.id,
    text: `Más de ${preferredOutcome.point} goles en ${event.home_team} - ${event.away_team}`,
    odd: preferredOutcome.price,
    confidenceScore: Math.max(6, 9.5 - (preferredOutcome.price - 1) * 4),
    motivoBreve: 'Línea de goles conservadora dentro de una cuota equilibrada.',
  }
}

function extractCandidates(events: OddsEvent[]) {
  const candidates: PickCandidate[] = []

  for (const event of events) {
    const bookmaker = event.bookmakers?.find((entry) => entry.markets.length > 0)

    if (!bookmaker) {
      continue
    }

    const h2hMarket = bookmaker.markets.find((market) => market.key === 'h2h')
    const totalsMarket = bookmaker.markets.find((market) => market.key === 'totals')

    const h2hCandidate = h2hMarket ? buildH2hCandidate(event, h2hMarket) : null
    const totalsCandidate = totalsMarket ? buildTotalsCandidate(event, totalsMarket) : null

    if (h2hCandidate) {
      candidates.push(h2hCandidate)
    }

    if (totalsCandidate) {
      candidates.push(totalsCandidate)
    }
  }

  return candidates
}

async function fetchJson<T>(url: string) {
  const response = await fetch(url, {
    next: { revalidate: CACHE_SECONDS },
  })

  if (!response.ok) {
    throw new Error(`The Odds API respondió con ${response.status}`)
  }

  return (await response.json()) as T
}

async function getAutomaticCombinada(): Promise<CombinadaData> {
  const apiKey = process.env.THE_ODDS_API_KEY

  if (!apiKey) {
    return getFallbackData()
  }

  try {
    const sports = await fetchJson<OddsSport[]>(`https://api.the-odds-api.com/v4/sports/?apiKey=${apiKey}`)

    const soccerSports = sports.filter((sport) => sport.active && sport.key.startsWith('soccer_')).slice(0, MAX_SPORTS)

    if (soccerSports.length === 0) {
      return getFallbackData()
    }

    const eventsPerSport = await Promise.all(
      soccerSports.map((sport) =>
        fetchJson<OddsEvent[]>(
          `https://api.the-odds-api.com/v4/sports/${sport.key}/odds/?apiKey=${apiKey}&regions=eu&markets=h2h,totals&oddsFormat=decimal&dateFormat=iso`,
        ).catch(() => []),
      ),
    )

    const candidates = eventsPerSport
      .flat()
      .filter((event) => Array.isArray(event.bookmakers) && event.bookmakers.length > 0)

    const uniqueCandidates = extractCandidates(candidates)
      .sort((a, b) => {
        if (b.confidenceScore !== a.confidenceScore) {
          return b.confidenceScore - a.confidenceScore
        }

        return a.odd - b.odd
      })
      .filter((candidate, index, allCandidates) => {
        return allCandidates.findIndex((entry) => entry.eventId === candidate.eventId) === index
      })
      .slice(0, REQUIRED_PICKS)

    if (uniqueCandidates.length < REQUIRED_PICKS) {
      return getFallbackData()
    }

    const now = new Date()
    const cuotaTotal = calculateTotalOdd(uniqueCandidates)

    return {
      etiquetaDia: capitalizeFirstLetter(formatSpanishDay(now)),
      cuotaTotal: cuotaTotal.toFixed(2),
      confianza: buildConfidenceLabel(uniqueCandidates),
      horaActualizacion: formatSpanishTime(now),
      notaConfianza: 'Selección automática diaria basada en cuotas de fútbol',
      motivoGeneral:
        'Combinada automática generada con mercados de resultado final y totales, priorizando favoritos sólidos y líneas de goles conservadoras.',
      picks: uniqueCandidates.map((pick) => ({
        text: pick.text,
        motivoBreve: pick.motivoBreve,
      })),
    }
  } catch {
    return getFallbackData()
  }
}

export default async function PronosticosPage() {
  const dailyCombinada = await getAutomaticCombinada()

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
                  {dailyCombinada.etiquetaDia}
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
                  Cuota total {dailyCombinada.cuotaTotal}
                </h2>
                <p className="mt-2 text-sm text-gray-300">
                  Actualizada hoy a las {dailyCombinada.horaActualizacion}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 sm:min-w-48">
                <p className="text-xs uppercase tracking-wider text-gray-400">Confianza</p>
                <p className="mt-1 text-lg font-bold text-emerald-400">{dailyCombinada.confianza}</p>
                <p className="mt-1 text-xs text-gray-400">{dailyCombinada.notaConfianza}</p>
              </div>
            </div>
          </div>

          <div className="px-6 py-6 sm:px-8 sm:py-8">
            <div className="mb-6 rounded-2xl border border-stone-100 bg-stone-50 px-4 py-3">
              <p className="text-sm text-stone-600">{dailyCombinada.motivoGeneral}</p>
            </div>

            <div className="grid gap-3">
              {dailyCombinada.picks.map((pick, index) => (
                <div
                  key={pick.text}
                  className="flex items-start gap-3 rounded-2xl border border-stone-100 bg-stone-50 px-4 py-3"
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-stone-800">{pick.text}</p>
                    {pick.motivoBreve ? <p className="mt-0.5 text-xs text-stone-500">{pick.motivoBreve}</p> : null}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
              Se actualiza automáticamente cada 8 horas y usa datos de respaldo si la API no está disponible
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
