import { combinadaDelDia, type CombinadaData } from '@/app/pronosticos/mockData'
import { unstable_cache } from 'next/cache'

import { fetchEligibleOddsEvents } from './fetchOdds'
import { fetchEventStats } from './fetchStats'
import { buildCandidatesForEvent, selectBestPicks } from './select'

const REQUIRED_MIN_PICKS = 3
const DAILY_REVALIDATE_SECONDS = 86400

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

export function getPronosticosFallbackData(): CombinadaData {
  const now = new Date()

  return {
    ...combinadaDelDia,
    etiquetaDia: capitalizeFirstLetter(formatSpanishDay(now)),
    horaActualizacion: formatSpanishTime(now),
  }
}

async function generateQuantLiteCombinada(): Promise<CombinadaData> {
  const oddsApiKey = process.env.THE_ODDS_API_KEY
  const footballDataApiKey = process.env.FOOTBALL_DATA_API_KEY

  if (!oddsApiKey) {
    return getPronosticosFallbackData()
  }

  try {
    const events = await fetchEligibleOddsEvents(oddsApiKey)

    if (events.length === 0) {
      return getPronosticosFallbackData()
    }

    const candidateGroups = await Promise.all(
      events.map(async (event) => {
        const stats = await fetchEventStats(event, footballDataApiKey)

        if (!stats) {
          return []
        }

        return buildCandidatesForEvent(event, stats)
      }),
    )

    const selectedPicks = selectBestPicks(candidateGroups.flat())

    if (selectedPicks.length < REQUIRED_MIN_PICKS) {
      return getPronosticosFallbackData()
    }

    const now = new Date()

    return {
      etiquetaDia: capitalizeFirstLetter(formatSpanishDay(now)),
      cuotaTotal: calculateTotalOdd(selectedPicks.map((pick) => pick.odd)).toFixed(2),
      confianza: buildConfidenceLabel(selectedPicks.map((pick) => pick.probModel)),
      horaActualizacion: formatSpanishTime(now),
      notaConfianza: 'Motor Quant Lite con Poisson, EV y filtro de riesgo',
      motivoGeneral:
        'Selección diaria basada en mercados de goles y ganador, comparando valor esperado frente al riesgo y descartando partidos con datos insuficientes.',
      picks: selectedPicks.map((pick) => ({
        text: `${pick.eventName} · ${pick.marketLabel} @ ${pick.odd.toFixed(2)}`,
        motivoBreve: `${pick.league} · ${new Intl.DateTimeFormat('es-ES', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Europe/Madrid' }).format(new Date(pick.commenceTime))} · p=${pick.probModel.toFixed(3)} · justa ${pick.fairOdds.toFixed(2)} · EV ${pick.ev.toFixed(3)} · ${pick.reason}`,
      })),
    }
  } catch {
    return getPronosticosFallbackData()
  }
}

const getCachedQuantLiteCombinada = unstable_cache(generateQuantLiteCombinada, ['pronosticos-freebet-diaria'], {
  revalidate: DAILY_REVALIDATE_SECONDS,
})

export async function getQuantLiteCombinada(): Promise<CombinadaData> {
  return getCachedQuantLiteCombinada()
}
