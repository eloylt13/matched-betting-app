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
    stakeCasa1: number
    cuotaCasa1: number
    cuotaCasa2: number
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
    escenarios: ResultadoEscenario[]
    beneficioNeto: number
}