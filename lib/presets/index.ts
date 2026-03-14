// lib/presets/index.ts

import type { Casa } from '@/types/presets'
import { casasEspana } from './data/espana'

// Latam placeholder — empty for now, extendable
const casasLatam: Casa[] = []

export const todasLasCasas: Casa[] = [...casasEspana, ...casasLatam]

export function getCasaById(id: string): Casa | undefined {
  return todasLasCasas.find((c) => c.id === id)
}

export { casasEspana, casasLatam }
