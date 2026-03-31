import { EventStats, QuantMarketKey } from './types'

const MAX_GOALS = 6

export type ModelProbabilities = Record<QuantMarketKey, number>

function poisson(lambda: number, goals: number) {
  const safeLambda = Math.max(lambda, 0.05)
  let factorial = 1

  for (let index = 2; index <= goals; index += 1) {
    factorial *= index
  }

  return Math.exp(-safeLambda) * safeLambda ** goals / factorial
}

function buildPoissonMatrix(lambdaHome: number, lambdaAway: number) {
  const matrix: number[][] = []

  for (let homeGoals = 0; homeGoals <= MAX_GOALS; homeGoals += 1) {
    const row: number[] = []

    for (let awayGoals = 0; awayGoals <= MAX_GOALS; awayGoals += 1) {
      row.push(poisson(lambdaHome, homeGoals) * poisson(lambdaAway, awayGoals))
    }

    matrix.push(row)
  }

  return matrix
}

function sumMatrix(matrix: number[][], predicate: (homeGoals: number, awayGoals: number) => boolean) {
  let total = 0

  for (let homeGoals = 0; homeGoals < matrix.length; homeGoals += 1) {
    for (let awayGoals = 0; awayGoals < matrix[homeGoals].length; awayGoals += 1) {
      if (predicate(homeGoals, awayGoals)) {
        total += matrix[homeGoals][awayGoals]
      }
    }
  }

  return total
}

function probabilityOverAsian(matrix: number[][], line: 2 | 2.25) {
  const winProb = sumMatrix(matrix, (homeGoals, awayGoals) => homeGoals + awayGoals > line)
  const pushProb = line === 2 ? sumMatrix(matrix, (homeGoals, awayGoals) => homeGoals + awayGoals === 2) : 0

  return winProb + pushProb * 0.5
}

export function buildModelFromStats(stats: EventStats) {
  const lambdaHome = ((stats.home.avgGf + stats.away.avgGa) / 2) + 0.25
  const lambdaAway = (stats.away.avgGf + stats.home.avgGa) / 2
  const matrix = buildPoissonMatrix(lambdaHome, lambdaAway)

  const probabilities: ModelProbabilities = {
    over_1_5: sumMatrix(matrix, (homeGoals, awayGoals) => homeGoals + awayGoals >= 2),
    over_2_0: probabilityOverAsian(matrix, 2),
    over_2_25: probabilityOverAsian(matrix, 2.25),
    over_2_5: sumMatrix(matrix, (homeGoals, awayGoals) => homeGoals + awayGoals >= 3),
    home_win: sumMatrix(matrix, (homeGoals, awayGoals) => homeGoals > awayGoals),
    draw: sumMatrix(matrix, (homeGoals, awayGoals) => homeGoals === awayGoals),
    away_win: sumMatrix(matrix, (homeGoals, awayGoals) => awayGoals > homeGoals),
  }

  return {
    lambdaHome,
    lambdaAway,
    matrix,
    probabilities,
  }
}
