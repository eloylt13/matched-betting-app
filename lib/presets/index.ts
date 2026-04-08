// lib/presets/index.ts

import { casasEspana } from './data/espana'
import { casasLatam } from './data/latam'

export const allCasas = [...casasEspana, ...casasLatam]
export const todasLasCasas = allCasas

export function getCasaById(id: string) {
  return allCasas.find((c) => c.id === id) ?? null
}

export function getCasasByMarket(market: import('../../types/presets').Market) {
  return allCasas.filter((c) => c.market === market)
}
