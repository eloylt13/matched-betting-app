import { buildModelFromStats } from './model'
import { EventStats, OddsEvent, OddsMarket, QuantMarketKey, QuantPickCandidate } from './types'

const MIN_PICK_ODD = 1.22
const MAX_PICK_ODD = 1.55
const MIN_GOOD_PICKS = 3
const TARGET_PICKS = 5
const MIN_TOTAL_ODDS = 4.5
const MAX_TOTAL_ODDS = 8.5

function logSelectDiagnostic(message: string, details?: Record<string, unknown>) {
  if (details) {
    console.log(`[pronosticos][select] ${message}`, details)
    return
  }

  console.log(`[pronosticos][select] ${message}`)
}

const MARKET_LABELS: Record<QuantMarketKey, string> = {
  over_1_5: 'Más de 1.5 goles',
  over_2_0: 'Más de 2.0 goles asiático',
  over_2_25: 'Más de 2.25 goles asiático',
  over_2_5: 'Más de 2.5 goles',
  home_win: 'Gana local',
  draw: 'Empate',
  away_win: 'Gana visitante',
}

function round(value: number) {
  return Math.round(value * 1000) / 1000
}

function getTotalsPrice(market: OddsMarket, line: number) {
  return market.outcomes.find((outcome) => outcome.name === 'Over' && outcome.point === line)?.price ?? null
}

function getH2HPrice(event: OddsEvent, market: OddsMarket, key: QuantMarketKey) {
  if (key === 'draw') {
    return market.outcomes.find((outcome) => outcome.name.toLowerCase() === 'draw')?.price ?? null
  }

  const teamName = key === 'home_win' ? event.home_team : event.away_team
  return market.outcomes.find((outcome) => outcome.name === teamName)?.price ?? null
}

function buildReason(candidate: QuantPickCandidate, stats: EventStats, lambdaHome: number, lambdaAway: number) {
  if (candidate.marketKey.startsWith('over_')) {
    return `GF/GA recientes sugieren ${lambdaHome.toFixed(2)}-${lambdaAway.toFixed(2)} xG proxy y valor positivo en goles.`
  }

  return `Modelo favorece ${candidate.marketLabel.toLowerCase()} con medias ${stats.home.avgGf.toFixed(2)}/${stats.away.avgGf.toFixed(2)} y EV positivo.`
}

export function buildCandidatesForEvent(event: OddsEvent, stats: EventStats): QuantPickCandidate[] {
  const bookmaker = event.bookmakers?.find((entry) => entry.markets.length > 0)

  if (!bookmaker) {
    logSelectDiagnostic('Evento descartado por no tener bookmaker utilizable', {
      eventId: event.id,
      eventName: `${event.home_team} vs ${event.away_team}`,
    })
    return []
  }

  const totalsMarket = bookmaker.markets.find((market) => market.key === 'totals')
  const h2hMarket = bookmaker.markets.find((market) => market.key === 'h2h')

  if (!totalsMarket && !h2hMarket) {
    logSelectDiagnostic('Evento descartado por no tener mercados h2h/totals', {
      eventId: event.id,
      eventName: `${event.home_team} vs ${event.away_team}`,
      bookmaker: bookmaker.key,
    })
    return []
  }

  const model = buildModelFromStats(stats)
  const candidates: QuantPickCandidate[] = []

  const totalsMap: Array<[QuantMarketKey, number]> = [
    ['over_1_5', 1.5],
    ['over_2_0', 2],
    ['over_2_25', 2.25],
    ['over_2_5', 2.5],
  ]

  if (totalsMarket) {
    for (const [marketKey, line] of totalsMap) {
      const odd = getTotalsPrice(totalsMarket, line)

      if (!odd || odd < MIN_PICK_ODD || odd > MAX_PICK_ODD) {
        logSelectDiagnostic('Mercado totals descartado por cuota fuera de rango o ausente', {
          eventId: event.id,
          eventName: `${event.home_team} vs ${event.away_team}`,
          marketKey,
          line,
          odd,
        })
        continue
      }

      const probModel = model.probabilities[marketKey]
      const fairOdds = 1 / probModel
      const ev = probModel * odd - 1
      const riskScore = 1 - probModel
      const qualityScore = ev - riskScore * 0.35 + 0.08
      const candidate: QuantPickCandidate = {
        eventId: event.id,
        eventName: `${event.home_team} vs ${event.away_team}`,
        league: event.sport_title,
        commenceTime: event.commence_time,
        marketKey,
        marketLabel: MARKET_LABELS[marketKey],
        odd,
        probModel: round(probModel),
        fairOdds: round(fairOdds),
        ev: round(ev),
        riskScore: round(riskScore),
        qualityScore: round(qualityScore),
        reason: '',
      }

      candidate.reason = buildReason(candidate, stats, model.lambdaHome, model.lambdaAway)
      candidates.push(candidate)
    }
  }

  if (h2hMarket) {
    for (const marketKey of ['home_win', 'away_win'] as const) {
      const odd = getH2HPrice(event, h2hMarket, marketKey)

      if (!odd || odd < MIN_PICK_ODD || odd > MAX_PICK_ODD) {
        logSelectDiagnostic('Mercado h2h descartado por cuota fuera de rango o ausente', {
          eventId: event.id,
          eventName: `${event.home_team} vs ${event.away_team}`,
          marketKey,
          odd,
        })
        continue
      }

      const probModel = model.probabilities[marketKey]
      const fairOdds = 1 / probModel
      const ev = probModel * odd - 1
      const riskScore = 1 - probModel + 0.04
      const qualityScore = ev - riskScore * 0.35
      const candidate: QuantPickCandidate = {
        eventId: event.id,
        eventName: `${event.home_team} vs ${event.away_team}`,
        league: event.sport_title,
        commenceTime: event.commence_time,
        marketKey,
        marketLabel: MARKET_LABELS[marketKey],
        odd,
        probModel: round(probModel),
        fairOdds: round(fairOdds),
        ev: round(ev),
        riskScore: round(riskScore),
        qualityScore: round(qualityScore),
        reason: '',
      }

      candidate.reason = buildReason(candidate, stats, model.lambdaHome, model.lambdaAway)
      candidates.push(candidate)
    }
  }

  const evCandidates = candidates.filter((candidate) => candidate.ev > 0)

  if (evCandidates.length === 0) {
    logSelectDiagnostic('Evento sin candidatos tras filtro EV>0', {
      eventId: event.id,
      eventName: `${event.home_team} vs ${event.away_team}`,
      preEvCandidates: candidates.length,
    })
  } else {
    logSelectDiagnostic('Candidatos generados para evento', {
      eventId: event.id,
      eventName: `${event.home_team} vs ${event.away_team}`,
      preEvCandidates: candidates.length,
      evCandidates: evCandidates.length,
    })
  }

  return evCandidates
}

function calculateTotalOdds(picks: QuantPickCandidate[]) {
  return picks.reduce((acc, pick) => acc * pick.odd, 1)
}

export function selectBestPicks(candidates: QuantPickCandidate[]) {
  const uniqueByEvent = candidates
    .sort((left, right) => {
      if (right.qualityScore !== left.qualityScore) {
        return right.qualityScore - left.qualityScore
      }

      if (right.ev !== left.ev) {
        return right.ev - left.ev
      }

      return right.probModel - left.probModel
    })
    .filter((candidate, index, all) => all.findIndex((entry) => entry.eventId === candidate.eventId) === index)

  logSelectDiagnostic('Conteo de candidatos y eventos únicos antes de selección final', {
    candidates: candidates.length,
    uniqueEvents: uniqueByEvent.length,
  })

  if (uniqueByEvent.length < MIN_GOOD_PICKS) {
    logSelectDiagnostic('Menos de 3 picks únicos; se devuelve selección corta', {
      uniqueEvents: uniqueByEvent.length,
      requiredMin: MIN_GOOD_PICKS,
    })
    return uniqueByEvent
  }

  const bestSelection = uniqueByEvent.slice(0, Math.min(TARGET_PICKS, uniqueByEvent.length))

  for (let size = Math.min(TARGET_PICKS, uniqueByEvent.length); size >= MIN_GOOD_PICKS; size -= 1) {
    const selection = uniqueByEvent.slice(0, size)
    const totalOdds = calculateTotalOdds(selection)

    logSelectDiagnostic('Probando selección final por tamaño y cuota total', {
      size,
      totalOdds: Math.round(totalOdds * 1000) / 1000,
      minTotalOdds: MIN_TOTAL_ODDS,
      maxTotalOdds: MAX_TOTAL_ODDS,
    })

    if (totalOdds >= MIN_TOTAL_ODDS && totalOdds <= MAX_TOTAL_ODDS) {
      logSelectDiagnostic('Selección final aceptada por rango de cuota total', {
        size,
        totalOdds: Math.round(totalOdds * 1000) / 1000,
      })
      return selection
    }
  }

  logSelectDiagnostic('Ninguna selección cae en el rango de cuota total; se usa bestSelection', {
    bestSelectionSize: bestSelection.length,
    bestSelectionTotalOdds: Math.round(calculateTotalOdds(bestSelection) * 1000) / 1000,
  })

  return bestSelection
}
