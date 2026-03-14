// lib/calc/cualificante.ts

import type { InputsCualificante, ResultadoCualificante } from '@/types/calc'

export function calcCualificante(inputs: InputsCualificante): ResultadoCualificante {
    const { stake, cuotaBack, cuotaLay, comision } = inputs
    const comisionDecimal = comision / 100

    // Lay stake óptimo para cubrir la operación
    const layStake = (stake * cuotaBack) / (cuotaLay - comisionDecimal)

    // Dinero bloqueado en el exchange
    const responsabilidad = layStake * (cuotaLay - 1)

    // Escenario 1: gana la apuesta back (casa)
    const resultadoCasaGana = stake * (cuotaBack - 1)
    const resultadoExchangePierde = -responsabilidad
    const beneficioSiGana = resultadoCasaGana + resultadoExchangePierde

    // Escenario 2: pierde la apuesta back (exchange gana)
    const resultadoCasaPierde = -stake
    const resultadoExchangeGana = layStake * (1 - comisionDecimal)
    const beneficioSiPierde = resultadoCasaPierde + resultadoExchangeGana

    const perdidaMedia = (beneficioSiGana + beneficioSiPierde) / 2

    return {
        layStake: Math.round(layStake * 100) / 100,
        responsabilidad: Math.round(responsabilidad * 100) / 100,
        perdidaMedia: Math.round(perdidaMedia * 100) / 100,
        escenarios: [
            {
                label: 'Si gana A Favor (casa)',
                beneficio: Math.round(beneficioSiGana * 100) / 100,
                resultadoCasa: Math.round(resultadoCasaGana * 100) / 100,
                resultadoExchange: Math.round(resultadoExchangePierde * 100) / 100,
            },
            {
                label: 'Si gana En Contra (exchange)',
                beneficio: Math.round(beneficioSiPierde * 100) / 100,
                resultadoCasa: Math.round(resultadoCasaPierde * 100) / 100,
                resultadoExchange: Math.round(resultadoExchangeGana * 100) / 100,
            },
        ],
    }
}