export type OddsSport = {
  key: string
  title: string
  description?: string
  active: boolean
}

export type OddsOutcome = {
  name: string
  price: number
  point?: number
}

export type OddsMarket = {
  key: string
  outcomes: OddsOutcome[]
}

export type OddsBookmaker = {
  key: string
  title: string
  markets: OddsMarket[]
}

export type OddsEvent = {
  id: string
  sport_key: string
  sport_title: string
  home_team: string
  away_team: string
  commence_time: string
  bookmakers?: OddsBookmaker[]
}

export type TeamGoalStats = {
  teamName: string
  matches: number
  gf: number
  ga: number
  avgGf: number
  avgGa: number
}

export type EventStats = {
  home: TeamGoalStats
  away: TeamGoalStats
}

export type QuantMarketKey = 'over_1_5' | 'over_2_0' | 'over_2_25' | 'over_2_5' | 'home_win' | 'draw' | 'away_win'

export type QuantPickCandidate = {
  eventId: string
  eventName: string
  league: string
  commenceTime: string
  marketKey: QuantMarketKey
  marketLabel: string
  odd: number
  probModel: number
  fairOdds: number
  ev: number
  riskScore: number
  qualityScore: number
  reason: string
}
