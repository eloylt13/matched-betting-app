import { OddsEvent, OddsSport } from './types'

const ODDS_BASE_URL = 'https://api.the-odds-api.com/v4'
const CACHE_SECONDS = 60 * 60 * 8
const MAX_SPORTS = 8

function logOddsDiagnostic(message: string, details?: Record<string, unknown>) {
  if (details) {
    console.log(`[pronosticos][fetchOdds] ${message}`, details)
    return
  }

  console.log(`[pronosticos][fetchOdds] ${message}`)
}

const EXCLUDED_SPORT_PATTERNS = [
  'cup',
  'cups',
  'copa',
  'friendly',
  'friendlies',
  'youth',
  'u17',
  'u18',
  'u19',
  'u20',
  'u21',
  'u23',
  'women',
]

async function fetchJson<T>(url: string) {
  const response = await fetch(url, {
    next: { revalidate: CACHE_SECONDS },
  })

  if (!response.ok) {
    throw new Error(`The Odds API respondió con ${response.status}`)
  }

  return (await response.json()) as T
}

function isRegularSoccerSport(sport: OddsSport) {
  const haystack = `${sport.key} ${sport.title} ${sport.description ?? ''}`.toLowerCase()

  if (!sport.active || !sport.key.startsWith('soccer_')) {
    return false
  }

  return !EXCLUDED_SPORT_PATTERNS.some((pattern) => haystack.includes(pattern))
}

function isEligibleEvent(event: OddsEvent) {
  const now = Date.now()
  const commence = new Date(event.commence_time).getTime()
  const haystack = `${event.sport_key} ${event.sport_title} ${event.home_team} ${event.away_team}`.toLowerCase()

  if (!Number.isFinite(commence) || commence <= now) {
    logOddsDiagnostic('Evento descartado por fecha inválida o pasada', {
      eventId: event.id,
      eventName: `${event.home_team} vs ${event.away_team}`,
      commenceTime: event.commence_time,
    })
    return false
  }

  if (EXCLUDED_SPORT_PATTERNS.some((pattern) => haystack.includes(pattern))) {
    logOddsDiagnostic('Evento descartado por competición/patrón excluido', {
      eventId: event.id,
      sportKey: event.sport_key,
      sportTitle: event.sport_title,
      eventName: `${event.home_team} vs ${event.away_team}`,
    })
    return false
  }

  if (!Array.isArray(event.bookmakers) || event.bookmakers.length === 0) {
    logOddsDiagnostic('Evento descartado por falta de bookmakers', {
      eventId: event.id,
      eventName: `${event.home_team} vs ${event.away_team}`,
    })
    return false
  }

  return true
}

export async function fetchEligibleOddsEvents(apiKey: string) {
  const sports = await fetchJson<OddsSport[]>(`${ODDS_BASE_URL}/sports/?apiKey=${apiKey}`)
  const soccerSports = sports.filter(isRegularSoccerSport).slice(0, MAX_SPORTS)

  logOddsDiagnostic('Deportes recuperados y filtrados', {
    totalSports: sports.length,
    eligibleSoccerSports: soccerSports.length,
    selectedSportKeys: soccerSports.map((sport) => sport.key),
  })

  if (soccerSports.length === 0) {
    return []
  }

  const eventsPerSport = await Promise.all(
    soccerSports.map((sport) =>
      fetchJson<OddsEvent[]>(
        `${ODDS_BASE_URL}/sports/${sport.key}/odds/?apiKey=${apiKey}&regions=eu&markets=h2h,totals&oddsFormat=decimal&dateFormat=iso`,
      ).catch(() => []),
    ),
  )

  const rawEvents = eventsPerSport.flat()
  const eligibleEvents = rawEvents.filter(isEligibleEvent)

  logOddsDiagnostic('Conteo de eventos de The Odds API', {
    rawEvents: rawEvents.length,
    eligibleEvents: eligibleEvents.length,
  })

  return eligibleEvents
}
