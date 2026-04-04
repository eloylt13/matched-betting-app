import { combinadaDelDia, type CombinadaData } from '@/app/pronosticos/mockData'
import { unstable_cache } from 'next/cache'

import { fetchEligibleOddsEvents } from './fetchOdds'
import { fetchEventStats, hasFootballDataRateLimit } from './fetchStats'
import { buildCandidatesForEvent, selectBestPicks } from './select'

const REQUIRED_MIN_PICKS = 2
const DAILY_REVALIDATE_SECONDS = 300
const MAX_STATS_EVENTS = 12

function logEngineDiagnostic(message: string, details?: Record<string, unknown>) {
  if (details) {
    console.log(`[pronosticos][engine] ${message}`, details)
    return
  }

  console.log(`[pronosticos][engine] ${message}`)
}

function getPrimaryDiscardReason(discardReasons: Record<string, number>) {
  const [reason = 'none', count = 0] = Object.entries(discardReasons).sort((left, right) => right[1] - left[1])[0] ?? []

  return { reason, count }
}

function isValidDailyKickoff(commenceTime: string, referenceDate = new Date()) {
  const kickoff = new Date(commenceTime)

  if (Number.isNaN(kickoff.getTime())) {
    return false
  }

  const madridDay = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Madrid',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })

  return madridDay.format(kickoff) === madridDay.format(referenceDate)
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

function getTodaySpanishLabel(referenceDate = new Date()) {
  return capitalizeFirstLetter(
    new Intl.DateTimeFormat('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'Europe/Madrid',
    }).format(referenceDate),
  )
}

function getManualCombinadaFallback(referenceDate = new Date()): CombinadaData | null {
  if (combinadaDelDia.etiquetaDia === getTodaySpanishLabel(referenceDate)) {
    return combinadaDelDia
  }

  return null
}

function calculateTotalOdd(odds: number[]) {
  return odds.reduce((acc, odd) => acc * odd, 1)
}

function isSupportedCompetitionEvent(sportKey: string) {
  return new Set([
    'soccer_england_premier_league',
    'soccer_spain_la_liga',
    'soccer_germany_bundesliga',
    'soccer_italy_serie_a',
    'soccer_france_ligue_one',
    'soccer_netherlands_eredivisie',
    'soccer_portugal_primeira_liga',
  ]).has(sportKey)
}

function summarizeEvents(events: Array<{ id: string; home_team: string; away_team: string; sport_title: string; commence_time: string }>) {
  return events.map((event) => ({
    eventId: event.id,
    eventName: `${event.home_team} vs ${event.away_team}`,
    league: event.sport_title,
    commenceTime: event.commence_time,
  }))
}

function formatSpanishKickoff(date: Date) {
  return new Intl.DateTimeFormat('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Europe/Madrid',
  }).format(date)
}

function buildConfidenceLabel(probabilities: number[]) {
  const averageProbability = probabilities.reduce((acc, value) => acc + value, 0) / probabilities.length

  if (averageProbability >= 0.76) {
    return 'Alta · 9/10'
  }

  if (averageProbability >= 0.69) {
    return 'Alta · 8/10'
  }

  if (averageProbability >= 0.62) {
    return 'Media · 7/10'
  }

  return 'Media · 6/10'
}

async function generateQuantLiteCombinada(): Promise<CombinadaData | null> {
  const oddsApiKey = process.env.THE_ODDS_API_KEY
  const footballDataApiKey = process.env.FOOTBALL_DATA_API_KEY
  const discardReasons: Record<string, number> = {
    no_stats: 0,
    no_candidates: 0,
    outside_daily_window: 0,
  }

  logEngineDiagnostic('Diagnóstico de keys de producción', {
    hasOddsApiKey: Boolean(oddsApiKey),
    hasFootballDataApiKey: Boolean(footballDataApiKey),
    nowIso: new Date().toISOString(),
  })

  logEngineDiagnostic('Inicio de generación de combinada diaria')

  if (!oddsApiKey) {
    logEngineDiagnostic('No hay THE_ODDS_API_KEY; se devuelve null')
    return getManualCombinadaFallback()
  }

  try {
    const initialEvents = await fetchEligibleOddsEvents(oddsApiKey)

    logEngineDiagnostic('Eventos iniciales recibidos desde fetchOdds', {
      events: initialEvents.length,
      preview: summarizeEvents(initialEvents.slice(0, 12)),
    })

    if (initialEvents.length === 0) {
      logEngineDiagnostic('No hay eventos elegibles; se devuelve null')
      return getManualCombinadaFallback()
    }

    const shortlistEvents = initialEvents
      .filter((event) => isSupportedCompetitionEvent(event.sport_key))
      .slice(0, MAX_STATS_EVENTS)

    logEngineDiagnostic('Shortlist final antes de pedir stats a football-data', {
      initialEvents: initialEvents.length,
      shortlistEvents: shortlistEvents.length,
      maxStatsEvents: MAX_STATS_EVENTS,
      preview: summarizeEvents(shortlistEvents),
    })

    if (shortlistEvents.length === 0) {
      logEngineDiagnostic('No hay shortlist utilizable para stats; se devuelve null')
      return getManualCombinadaFallback()
    }

    let validStatsEvents = 0
    const candidateGroups: Awaited<ReturnType<typeof buildCandidatesForEvent>>[] = []

    for (const event of shortlistEvents) {
      const stats = await fetchEventStats(event, footballDataApiKey)

      if (!stats && hasFootballDataRateLimit()) {
        discardReasons.no_stats += 1
        logEngineDiagnostic('Se corta la iteración de stats tras detectar 429 en football-data', {
          eventId: event.id,
          eventName: `${event.home_team} vs ${event.away_team}`,
        })
        break
      }

      if (!stats) {
        discardReasons.no_stats += 1
        logEngineDiagnostic('Evento sin stats válidas; no genera candidatos', {
          eventId: event.id,
          eventName: `${event.home_team} vs ${event.away_team}`,
        })
        continue
      }

      validStatsEvents += 1

      const candidates = buildCandidatesForEvent(event, stats)

      if (candidates.length === 0) {
        discardReasons.no_candidates += 1
      }

      candidateGroups.push(candidates)
    }

    const now = new Date()
    const allCandidates = candidateGroups.flat()
    const selectedBeforeDailyFilter = selectBestPicks(allCandidates)
    const selectedPicks = selectedBeforeDailyFilter.filter((pick) => {
      const valid = isValidDailyKickoff(pick.commenceTime, now)

      if (!valid) {
        discardReasons.outside_daily_window += 1
        logEngineDiagnostic('Pick descartado por ventana diaria Europe/Madrid', {
          eventId: pick.eventId,
          eventName: pick.eventName,
          commenceTime: pick.commenceTime,
          madridReferenceDay: new Intl.DateTimeFormat('en-CA', {
            timeZone: 'Europe/Madrid',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }).format(now),
          madridKickoffDay: new Intl.DateTimeFormat('en-CA', {
            timeZone: 'Europe/Madrid',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }).format(new Date(pick.commenceTime)),
        })
      }

      return valid
    })

    const primaryDiscardReason = getPrimaryDiscardReason(discardReasons)

    logEngineDiagnostic('Conteos agregados del motor', {
      eligibleEvents: initialEvents.length,
      shortlistedForStats: shortlistEvents.length,
      validStatsEvents,
      generatedCandidates: allCandidates.length,
      selectedBeforeDailyFilter: selectedBeforeDailyFilter.length,
      finalPicks: selectedPicks.length,
      requiredMinPicks: REQUIRED_MIN_PICKS,
      discardReasons,
      primaryDiscardReason,
    })

    if (selectedPicks.length < REQUIRED_MIN_PICKS) {
      logEngineDiagnostic('Menos de 3 picks finales; se devuelve null', {
        finalPicks: selectedPicks.length,
        requiredMinPicks: REQUIRED_MIN_PICKS,
        discardReasons,
        primaryDiscardReason,
      })
      const manualFallback = getManualCombinadaFallback(now)

      if (manualFallback) {
        logEngineDiagnostic('Usando fallback manual de mockData para hoy', {
          etiquetaDia: manualFallback.etiquetaDia,
        })
        return manualFallback
      }

      return null
    }

    return {
      etiquetaDia: capitalizeFirstLetter(formatSpanishDay(now)),
      cuotaTotal: calculateTotalOdd(selectedPicks.map((pick) => pick.odd)).toFixed(2),
      confianza: buildConfidenceLabel(selectedPicks.map((pick) => pick.probModel)),
      horaActualizacion: formatSpanishTime(now),
      notaConfianza: 'Motor Quant Lite con Poisson, EV y filtro de riesgo',
      motivoGeneral:
        'Selección diaria basada en mercados de goles y ganador, comparando valor esperado frente al riesgo y descartando partidos con datos insuficientes.',
      picks: selectedPicks.map((pick) => {
        const kickoffTime = formatSpanishKickoff(new Date(pick.commenceTime))

        return {
          text: `${pick.eventName} · ${pick.marketLabel} @ ${pick.odd.toFixed(2)}`,
          motivoBreve: `${pick.league} · ${kickoffTime} · p=${pick.probModel.toFixed(3)} · justa ${pick.fairOdds.toFixed(2)} · EV ${pick.ev.toFixed(3)} · ${pick.reason}`,
          partido: pick.eventName,
          liga: pick.league,
          hora: kickoffTime,
          mercado: pick.marketLabel,
          cuota: pick.odd.toFixed(2),
          probabilidadModelo: pick.probModel.toFixed(3),
          fairOdds: pick.fairOdds.toFixed(2),
          ev: pick.ev.toFixed(3),
          motivoCorto: pick.reason,
        }
      }),
    }
  } catch (error) {
    logEngineDiagnostic('Error en generateQuantLiteCombinada; se devuelve null', {
      error: error instanceof Error ? error.message : 'unknown_error',
    })
    const manualFallback = getManualCombinadaFallback()

    if (manualFallback) {
      return manualFallback
    }

    return null
  }
}

const getCachedQuantLiteCombinada = unstable_cache(generateQuantLiteCombinada, ['pronosticos-freebet-diaria'], {
  revalidate: DAILY_REVALIDATE_SECONDS,
})

export async function getQuantLiteCombinada(): Promise<CombinadaData | null> {
  logEngineDiagnostic('Acceso a getQuantLiteCombinada (capa cacheada)', {
    cacheKey: 'pronosticos-freebet-diaria',
    revalidateSeconds: DAILY_REVALIDATE_SECONDS,
  })

  return getCachedQuantLiteCombinada()
}
