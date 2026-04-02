import type { CombinadaData } from '@/app/pronosticos/mockData'
import { unstable_cache } from 'next/cache'

import { fetchEligibleOddsEvents } from './fetchOdds'
import { fetchEventStats } from './fetchStats'
import { buildCandidatesForEvent, selectBestPicks } from './select'

const REQUIRED_MIN_PICKS = 3
const DAILY_REVALIDATE_SECONDS = 300

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

function calculateTotalOdd(odds: number[]) {
  return odds.reduce((acc, odd) => acc * odd, 1)
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
    return null
  }

  try {
    const events = await fetchEligibleOddsEvents(oddsApiKey)

    logEngineDiagnostic('Eventos elegibles recibidos desde fetchOdds', {
      events: events.length,
    })

    if (events.length === 0) {
      logEngineDiagnostic('No hay eventos elegibles; se devuelve null')
      return null
    }

    let validStatsEvents = 0
    const candidateGroups = await Promise.all(
      events.map(async (event) => {
        const stats = await fetchEventStats(event, footballDataApiKey)

        if (!stats) {
          discardReasons.no_stats += 1
          logEngineDiagnostic('Evento sin stats válidas; no genera candidatos', {
            eventId: event.id,
            eventName: `${event.home_team} vs ${event.away_team}`,
          })
          return []
        }

        validStatsEvents += 1

        const candidates = buildCandidatesForEvent(event, stats)

        if (candidates.length === 0) {
          discardReasons.no_candidates += 1
        }

        return candidates
      }),
    )

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
      eligibleEvents: events.length,
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
