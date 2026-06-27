// types/calc.ts

export type Bloque = 'cualificante' | 'freebet' | 'reembolso' | 'dutcher'

export interface InputsCualificante {
    stake: number
    cuotaBack: number
    cuotaLay: number
    comision: number
}

export interface InputsFreeBet {
    stake: number
    cuotaBack: number
    cuotaLay: number
    comision: number
    tipo?: 'snr' | 'sr'
}

export interface InputsReembolso {
    stake: number
    cuotaBack: number
    cuotaLay: number
    comision: number
    reembolso: number
    tipo?: 'cash' | 'freebet'
    tasaExtraccion?: number
}

export interface InputsDutcher {
    stakeCasa1: number | string
    stakeTotal?: number | string
    cuotaCasa1: number | string
    cuotaCasa2: number | string
    cuotaCasa3?: number | string
    numeroResultados?: 2 | 3
}

export interface ResultadoDutcherItem {
    label: string
    cuota: number
    stake: number
    retorno: number
}

export interface ResultadoEscenario {
    label: string
    beneficio: number
    resultadoCasa: number
    resultadoExchange: number
}

export interface ResultadoCualificante {
    layStake: number
    responsabilidad: number
    escenarios: ResultadoEscenario[]
    perdidaMedia: number
}

export interface ResultadoFreeBet {
    layStake: number
    responsabilidad: number
    escenarios: ResultadoEscenario[]
    retencionReal: number
}

export interface ResultadoReembolso {
    layStake: number
    responsabilidad: number
    escenarios: ResultadoEscenario[]
    beneficioEsperado: number
}

export interface ResultadoDutcher {
    stakeCasa2: number
    retornoIgualado: number
    resultados: ResultadoDutcherItem[]
    escenarios: ResultadoEscenario[]
    beneficioNeto: number
    esValido: boolean
}
