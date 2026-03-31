import { EventStats, OddsEvent, TeamGoalStats } from './types'

const FOOTBALL_DATA_BASE_URL = 'https://api.football-data.org/v4'
const CACHE_SECONDS = 60 * 60 * 8
const TEAM_MATCH_LIMIT = 8

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

function namesLookSimilar(left: string, right: string) {
  const a = normalizeName(left)
  const b = normalizeName(right)

  return a === b || a.includes(b) || b.includes(a)
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

async function fetchRecentFinishedMatches(apiKey: string) {
  const dateTo = new Date()
  const dateFrom = new Date(dateTo.getTime() - 45 * 24 * 60 * 60 * 1000)
  const from = dateFrom.toISOString().slice(0, 10)
  const to = dateTo.toISOString().slice(0, 10)

  const response = await fetchJson<FootballDataTeamMatchesResponse>(
    `${FOOTBALL_DATA_BASE_URL}/matches?status=FINISHED&dateFrom=${from}&dateTo=${to}&limit=200`,
    apiKey,
  )

  return (response.matches ?? []).filter(isFinishedRegularMatch)
}

async function fetchTeamMatches(teamId: number, apiKey: string) {
  const response = await fetchJson<FootballDataTeamMatchesResponse>(
    `${FOOTBALL_DATA_BASE_URL}/teams/${teamId}/matches?status=FINISHED&limit=${TEAM_MATCH_LIMIT}`,
    apiKey,
  )

  return (response.matches ?? []).filter(isFinishedRegularMatch)
}

export async function fetchEventStats(event: OddsEvent, apiKey?: string): Promise<EventStats | null> {
  if (!apiKey) {
    return null
  }

  try {
    const recentMatches = await fetchRecentFinishedMatches(apiKey)
    const homeId = findTeamId(recentMatches, event.home_team)
    const awayId = findTeamId(recentMatches, event.away_team)

    if (!homeId || !awayId) {
      return null
    }

    const [homeMatches, awayMatches] = await Promise.all([
      fetchTeamMatches(homeId, apiKey),
      fetchTeamMatches(awayId, apiKey),
    ])

    const home = buildTeamGoalStats(event.home_team, homeId, homeMatches)
    const away = buildTeamGoalStats(event.away_team, awayId, awayMatches)

    if (!home || !away) {
      return null
    }

    return { home, away }
  } catch {
    return null
  }
}
