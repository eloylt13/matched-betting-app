import { EventStats, OddsEvent, TeamGoalStats } from './types'

const FOOTBALL_DATA_BASE_URL = 'https://api.football-data.org/v4'
const CACHE_SECONDS = 60 * 60 * 8
const TEAM_MATCH_LIMIT = 8

type SupportedCompetition = {
  code: string
  label: string
}

const SUPPORTED_COMPETITIONS_BY_SPORT_KEY: Record<string, SupportedCompetition> = {
  soccer_england_premier_league: { code: 'PL', label: 'Premier League' },
  soccer_spain_la_liga: { code: 'PD', label: 'La Liga' },
  soccer_germany_bundesliga: { code: 'BL1', label: 'Bundesliga' },
  soccer_italy_serie_a: { code: 'SA', label: 'Serie A' },
  soccer_france_ligue_one: { code: 'FL1', label: 'Ligue 1' },
  soccer_netherlands_eredivisie: { code: 'DED', label: 'Eredivisie' },
  soccer_portugal_primeira_liga: { code: 'PPL', label: 'Primeira Liga' },
}

const GENERIC_TEAM_TOKENS = new Set(['fc', 'cf', 'ac', 'sc', 'sv', 'cd', 'rc', 'as', 'ss', 'bk', 'if'])

function logStatsDiagnostic(message: string, details?: Record<string, unknown>) {
  if (details) {
    console.log(`[pronosticos][fetchStats] ${message}`, details)
    return
  }

  console.log(`[pronosticos][fetchStats] ${message}`)
}

type FootballDataArea = {
  code?: string
  name?: string
}

type FootballDataCompetition = {
  code?: string
  name?: string
  type?: string
}

type FootballDataTeam = {
  id: number
  name: string
}

type FootballDataMatch = {
  status?: string
  utcDate?: string
  homeTeam?: FootballDataTeam
  awayTeam?: FootballDataTeam
  competition?: FootballDataCompetition
  area?: FootballDataArea
  score?: {
    fullTime?: {
      home?: number | null
      away?: number | null
    }
  }
}

type FootballDataTeamMatchesResponse = {
  matches?: FootballDataMatch[]
}

async function fetchJson<T>(url: string, apiKey: string) {
  const response = await fetch(url, {
    headers: {
      'X-Auth-Token': apiKey,
    },
    next: { revalidate: CACHE_SECONDS },
  })

  if (!response.ok) {
    throw new Error(`football-data.org respondió con ${response.status}`)
  }

  return (await response.json()) as T
}

function normalizeName(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

function tokenizeName(value: string) {
  return normalizeName(value)
    .split(' ')
    .filter((token) => token.length > 1 && !GENERIC_TEAM_TOKENS.has(token))
}

function namesLookSimilar(left: string, right: string) {
  const a = normalizeName(left)
  const b = normalizeName(right)

  if (a === b || a.includes(b) || b.includes(a)) {
    return true
  }

  const leftTokens = tokenizeName(left)
  const rightTokens = tokenizeName(right)

  if (leftTokens.length === 0 || rightTokens.length === 0) {
    return false
  }

  const sharedTokens = leftTokens.filter((token) => rightTokens.includes(token))
  const minimumSharedTokens = Math.min(leftTokens.length, rightTokens.length, 2)

  return sharedTokens.length >= minimumSharedTokens
}

function findTeamId(matches: FootballDataMatch[], teamName: string) {
  for (const match of matches) {
    if (match.homeTeam && namesLookSimilar(match.homeTeam.name, teamName)) {
      return match.homeTeam.id
    }

    if (match.awayTeam && namesLookSimilar(match.awayTeam.name, teamName)) {
      return match.awayTeam.id
    }
  }

  return null
}

function isFinishedRegularMatch(match: FootballDataMatch) {
  const haystack = `${match.competition?.name ?? ''} ${match.competition?.code ?? ''} ${match.area?.name ?? ''}`.toLowerCase()

  if (match.status !== 'FINISHED') {
    return false
  }

  if (haystack.includes('cup') || haystack.includes('copa') || haystack.includes('friendly')) {
    return false
  }

  return true
}

function getSupportedCompetition(event: OddsEvent) {
  return SUPPORTED_COMPETITIONS_BY_SPORT_KEY[event.sport_key] ?? null
}

function buildTeamGoalStats(teamName: string, teamId: number, matches: FootballDataMatch[]): TeamGoalStats | null {
  let gf = 0
  let ga = 0
  let sample = 0

  for (const match of matches) {
    const homeGoals = match.score?.fullTime?.home
    const awayGoals = match.score?.fullTime?.away

    if (homeGoals == null || awayGoals == null) {
      continue
    }

    if (match.homeTeam?.id === teamId) {
      gf += homeGoals
      ga += awayGoals
      sample += 1
      continue
    }

    if (match.awayTeam?.id === teamId) {
      gf += awayGoals
      ga += homeGoals
      sample += 1
    }
  }

  if (sample < 4) {
    return null
  }

  return {
    teamName,
    matches: sample,
    gf,
    ga,
    avgGf: gf / sample,
    avgGa: ga / sample,
  }
}

async function fetchCompetitionFinishedMatches(competitionCode: string, apiKey: string) {
  const dateTo = new Date()
  const dateFrom = new Date(dateTo.getTime() - 45 * 24 * 60 * 60 * 1000)
  const from = dateFrom.toISOString().slice(0, 10)
  const to = dateTo.toISOString().slice(0, 10)

  const response = await fetchJson<FootballDataTeamMatchesResponse>(
    `${FOOTBALL_DATA_BASE_URL}/competitions/${competitionCode}/matches?status=FINISHED&dateFrom=${from}&dateTo=${to}&limit=200`,
    apiKey,
  )

  return (response.matches ?? []).filter(isFinishedRegularMatch)
}

async function fetchTeamMatches(teamId: number, competitionCode: string, apiKey: string) {
  const response = await fetchJson<FootballDataTeamMatchesResponse>(
    `${FOOTBALL_DATA_BASE_URL}/teams/${teamId}/matches?status=FINISHED&competitions=${competitionCode}&limit=${TEAM_MATCH_LIMIT}`,
    apiKey,
  )

  return (response.matches ?? []).filter(isFinishedRegularMatch)
}

export async function fetchEventStats(event: OddsEvent, apiKey?: string): Promise<EventStats | null> {
  if (!apiKey) {
    logStatsDiagnostic('Sin FOOTBALL_DATA_API_KEY; no se pueden obtener stats', {
      eventId: event.id,
      eventName: `${event.home_team} vs ${event.away_team}`,
    })
    return null
  }

  try {
    const competition = getSupportedCompetition(event)

    if (!competition) {
      logStatsDiagnostic('Evento descartado por competición no soportada por football-data', {
        eventId: event.id,
        eventName: `${event.home_team} vs ${event.away_team}`,
        league: event.sport_title,
        sportKey: event.sport_key,
      })
      return null
    }

    const recentMatches = await fetchCompetitionFinishedMatches(competition.code, apiKey)

    if (recentMatches.length === 0) {
      logStatsDiagnostic('Evento descartado por competición sin partidos recientes en football-data', {
        eventId: event.id,
        eventName: `${event.home_team} vs ${event.away_team}`,
        league: event.sport_title,
        competitionCode: competition.code,
        competitionLabel: competition.label,
      })
      return null
    }

    const homeId = findTeamId(recentMatches, event.home_team)
    const awayId = findTeamId(recentMatches, event.away_team)

    if (!homeId || !awayId) {
      logStatsDiagnostic('Evento descartado por matching de equipos sin resolver', {
        eventId: event.id,
        eventName: `${event.home_team} vs ${event.away_team}`,
        league: event.sport_title,
        competitionCode: competition.code,
        homeTeam: event.home_team,
        awayTeam: event.away_team,
        homeId,
        awayId,
        recentMatches: recentMatches.length,
      })
      return null
    }

    const [homeMatches, awayMatches] = await Promise.all([
      fetchTeamMatches(homeId, competition.code, apiKey),
      fetchTeamMatches(awayId, competition.code, apiKey),
    ])

    const home = buildTeamGoalStats(event.home_team, homeId, homeMatches)
    const away = buildTeamGoalStats(event.away_team, awayId, awayMatches)

    if (!home || !away) {
      logStatsDiagnostic('Evento descartado por stats insuficientes', {
        eventId: event.id,
        eventName: `${event.home_team} vs ${event.away_team}`,
        league: event.sport_title,
        competitionCode: competition.code,
        homeId,
        awayId,
        homeMatches: homeMatches.length,
        awayMatches: awayMatches.length,
        homeStatsReady: Boolean(home),
        awayStatsReady: Boolean(away),
      })
      return null
    }

    logStatsDiagnostic('Stats válidas para evento', {
      eventId: event.id,
      eventName: `${event.home_team} vs ${event.away_team}`,
      league: event.sport_title,
      competitionCode: competition.code,
      homeId,
      awayId,
      homeSample: home.matches,
      awaySample: away.matches,
    })

    return { home, away }
  } catch (error) {
    logStatsDiagnostic('Error obteniendo stats del evento', {
      eventId: event.id,
      eventName: `${event.home_team} vs ${event.away_team}`,
      league: event.sport_title,
      sportKey: event.sport_key,
      error: error instanceof Error ? error.message : 'unknown_error',
    })
    return null
  }
}
