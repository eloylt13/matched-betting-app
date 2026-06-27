import type { ResultadoEscenario } from '@/types/calc'

export function parseNumber(value: string | number | undefined): number {
    if (typeof value === 'number') return Number.isFinite(value) ? value : 0
    if (typeof value !== 'string') return 0

    const normalized = value.replace(',', '.').trim()
    const parsed = Number.parseFloat(normalized)
    return Number.isFinite(parsed) ? parsed : 0
}

export function nonNegativeNumber(value: string | number | undefined): number {
    return Math.max(parseNumber(value), 0)
}

export function roundSafe(value: number): number {
    return Number.isFinite(value) ? Math.round(value * 100) / 100 : 0
}

export function emptyScenario(label: string): ResultadoEscenario {
    return {
        label,
        beneficio: 0,
        resultadoCasa: 0,
        resultadoExchange: 0,
    }
}
