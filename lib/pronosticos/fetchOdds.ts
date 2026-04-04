import { OddsEvent, OddsSport } from './types'

const ODDS_BASE_URL = 'https://api.the-odds-api.com/v4'
const CACHE_SECONDS = 60 * 60 * 8
const MAX_SPORTS = 8
const MIN_SHORTLIST_ODD = 1.22
const MAX_SHORTLIST_ODD = 1.55

type OddsMarketKey = 'h2h' | 'totals'

function logOddsDiagnostic(message: string, details?: Record<string, unknown>) {
  if (details) {
    console.log(`[pronosticos][fetchOdds] ${message}`, details)
    return
  }

  console.log(`[pronosticos][fetchOdds] ${message}`)
}

const SUPPORTED_SPORT_KEYS = new Set([
  'soccer_england_premier_league',
  'soccer_spain_la_liga',
  'soccer_germany_bundesliga',
  'soccer_italy_serie_a',
  'soccer_france_ligue_one',
  'soccer_netherlands_eredivisie',
  'soccer_portugal_primeira_liga',
])

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

function buildOddsEndpoint(apiKey: string, sportKey: string, markets: OddsMarketKey[]) {
  const params = new URLSearchParams({
    apiKey,
    regions: 'eu',
    markets: markets.join(','),
    oddsFormat: 'decimal',
    dateFormat: 'iso',
  })

  return `${ODDS_BASE_URL}/sports/${sportKey}/odds/?${params.toString()}`
}

function buildEventPreview(event: OddsEvent) {
  return {
    eventId: event.id,
    eventName: `${event.home_team} vs ${event.away_team}`,
    commenceTime: event.commence_time,
    bookmakers: (event.bookmakers ?? []).map((bookmaker) => ({
      key: bookmaker.key,
      markets: bookmaker.markets.map((market) => market.key),
    })),
  }
}

async function fetchOddsEventsRequest(url: string, sportKey: string) {
  const response = await fetch(url, {
    next: { revalidate: CACHE_SECONDS },
  })

  const rawBody = await response.text()
  let data: OddsEvent[] = []

  if (response.ok) {
    try {
      const parsed = JSON.parse(rawBody) as unknown
      data = Array.isArray(parsed) ? (parsed as OddsEvent[]) : []
    } catch (error) {
      logOddsDiagnostic('Respuesta no parseable al consultar odds por sport key', {
        sportKey,
        endpoint: url,
        status: response.status,
        error: error instanceof Error ? error.message : String(error),
      })
      throw error
    }
  }

  logOddsDiagnostic('Respuesta recibida al consultar odds por sport key', {
    sportKey,
    endpoint: url,
    status: response.status,
    returnedEvents: data.length,
    examples: data.slice(0, 2).map(buildEventPreview),
    errorBody: response.ok ? undefined : rawBody.slice(0, 500),
  })

  if (!response.ok) {
    throw new Error(`The Odds API respondió con ${response.status} para ${sportKey}`)
  }

  return data
}

function mergeEventMarkets(baseEvent: OddsEvent | undefined, incomingEvent: OddsEvent) {
  if (!baseEvent) {
    return {
      ...incomingEvent,
      bookmakers: (incomingEvent.bookmakers ?? []).map((bookmaker) => ({
        ...bookmaker,
        markets: bookmaker.markets.map((market) => ({
          ...market,
          outcomes: [...market.outcomes],
        })),
      })),
    }
  }

  const bookmakersByKey = new Map((baseEvent.bookmakers ?? []).map((bookmaker) => [bookmaker.key, bookmaker]))

  for (const incomingBookmaker of incomingEvent.bookmakers ?? []) {
    const existingBookmaker = bookmakersByKey.get(incomingBookmaker.key)

    if (!existingBookmaker) {
      const clonedBookmaker = {
        ...incomingBookmaker,
        markets: incomingBookmaker.markets.map((market) => ({
          ...market,
          outcomes: [...market.outcomes],
        })),
      }
      ;(baseEvent.bookmakers ??= []).push(clonedBookmaker)
      bookmakersByKey.set(clonedBookmaker.key, clonedBookmaker)
      continue
    }

    const marketsByKey = new Map(existingBookmaker.markets.map((market) => [market.key, market]))

    for (const incomingMarket of incomingBookmaker.markets) {
      if (!marketsByKey.has(incomingMarket.key)) {
        existingBookmaker.markets.push({
          ...incomingMarket,
          outcomes: [...incomingMarket.outcomes],
        })
      }
    }
  }

  return baseEvent
}

async function fetchOddsEventsForSport(apiKey: string, sportKey: string) {
  const combinedEndpoint = buildOddsEndpoint(apiKey, sportKey, ['h2h', 'totals'])

  try {
    return await fetchOddsEventsRequest(combinedEndpoint, sportKey)
  } catch (error) {
    logOddsDiagnostic('Fallback a consultas separadas por mercado tras fallo del endpoint combinado', {
      sportKey,
      endpoint: combinedEndpoint,
      error: error instanceof Error ? error.message : String(error),
    })
  }

  const fallbackMarkets: OddsMarketKey[] = ['h2h', 'totals']
  const mergedEvents = new Map<string, OddsEvent>()

  for (const market of fallbackMarkets) {
    try {
      const endpoint = buildOddsEndpoint(apiKey, sportKey, [market])
      const marketEvents = await fetchOddsEventsRequest(endpoint, sportKey)

      for (const event of marketEvents) {
        const currentEvent = mergedEvents.get(event.id)
        mergedEvents.set(event.id, mergeEventMarkets(currentEvent, event))
      }
    } catch (error) {
      logOddsDiagnostic('Consulta separada por mercado fallida', {
        sportKey,
        market,
        endpoint: buildOddsEndpoint(apiKey, sportKey, [market]),
        error: error instanceof Error ? error.message : String(error),
      })
    }
  }

  const events = Array.from(mergedEvents.values())

  logOddsDiagnostic('Resultado agregado final por sport key tras fallback', {
    sportKey,
    returnedEvents: events.length,
    examples: events.slice(0, 2).map(buildEventPreview),
  })

  return events
}

function isRegularSoccerSport(sport: OddsSport) {
  const haystack = `${sport.key} ${sport.title} ${sport.description ?? ''}`.toLowerCase()

  if (!sport.active || !sport.key.startsWith('soccer_')) {
    return false
  }

  if (!SUPPORTED_SPORT_KEYS.has(sport.key)) {
    logOddsDiagnostic('Deporte descartado por no estar soportado por football-data', {
      sportKey: sport.key,
      sportTitle: sport.title,
    })
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

function countEligibleMarkets(event: OddsEvent) {
  let eligibleMarkets = 0
  let bestOdd = 0

  for (const bookmaker of event.bookmakers ?? []) {
    for (const market of bookmaker.markets) {
      if (market.key === 'totals') {
        for (const outcome of market.outcomes) {
          const isEligibleTotal = outcome.name === 'Over' && outcome.price >= MIN_SHORTLIST_ODD && outcome.price <= MAX_SHORTLIST_ODD

          if (isEligibleTotal) {
            eligibleMarkets += 1
            bestOdd = Math.max(bestOdd, outcome.price)
          }
        }
      }

      if (market.key === 'h2h') {
        for (const outcome of market.outcomes) {
          const isDraw = outcome.name.toLowerCase() === 'draw'
          const isEligibleH2H = !isDraw && outcome.price >= MIN_SHORTLIST_ODD && outcome.price <= MAX_SHORTLIST_ODD

          if (isEligibleH2H) {
            eligibleMarkets += 1
            bestOdd = Math.max(bestOdd, outcome.price)
          }
        }
      }
    }
  }

  return { eligibleMarkets, bestOdd }
}

function compareEligibleEvents(left: OddsEvent, right: OddsEvent) {
  const leftMetrics = countEligibleMarkets(left)
  const rightMetrics = countEligibleMarkets(right)

  if (rightMetrics.eligibleMarkets !== leftMetrics.eligibleMarkets) {
    return rightMetrics.eligibleMarkets - leftMetrics.eligibleMarkets
  }

  if (rightMetrics.bestOdd !== leftMetrics.bestOdd) {
    return rightMetrics.bestOdd - leftMetrics.bestOdd
  }

  return new Date(left.commence_time).getTime() - new Date(right.commence_time).getTime()
}

export async function fetchEligibleOddsEvents(apiKey: string) {
  const sports = await fetchJson<OddsSport[]>(`${ODDS_BASE_URL}/sports/?apiKey=${apiKey}`)
  const soccerSports = sports.filter(isRegularSoccerSport).slice(0, MAX_SPORTS)

  logOddsDiagnostic('Deportes recuperados y filtrados', {
    totalSports: sports.length,
    eligibleSoccerSports: soccerSports.length,
    selectedSportKeys: soccerSports.map((sport) => sport.key),
    supportedSportKeys: Array.from(SUPPORTED_SPORT_KEYS),
  })

  if (soccerSports.length === 0) {
    return []
  }

  const eventsPerSport = await Promise.all(
    soccerSports.map((sport) => fetchOddsEventsForSport(apiKey, sport.key)),
  )

  const rawEvents = eventsPerSport.flat()
  const eligibleEvents = rawEvents.filter(isEligibleEvent).sort(compareEligibleEvents)
  const topPreview = eligibleEvents.slice(0, 8).map((event) => {
    const metrics = countEligibleMarkets(event)

    return {
      eventId: event.id,
      eventName: `${event.home_team} vs ${event.away_team}`,
      league: event.sport_title,
      commenceTime: event.commence_time,
      eligibleMarkets: metrics.eligibleMarkets,
      bestOdd: metrics.bestOdd,
    }
  })

  logOddsDiagnostic('Conteo de eventos de The Odds API', {
    rawEvents: rawEvents.length,
    eligibleEvents: eligibleEvents.length,
    topPreview,
  })

  return eligibleEvents
}
