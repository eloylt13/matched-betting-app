// lib/calc/freebet.ts

import type { InputsFreeBet, ResultadoFreeBet } from '@/types/calc'

export function calcFreeBet(inputs: InputsFreeBet): ResultadoFreeBet {
    const { stake, cuotaBack, cuotaLay, comision, tipo = 'snr' } = inputs
    const comisionDecimal = comision / 100

    // En freebet SNR no se recupera el stake si gana; en SR sí se recupera
    const layStake = tipo === 'sr'
        ? (stake * cuotaBack) / (cuotaLay - comisionDecimal)
        : (stake * (cuotaBack - 1)) / (cuotaLay - comisionDecimal)

    // Dinero bloqueado en el exchange
    const responsabilidad = layStake * (cuotaLay - 1)

    // Escenario 1: gana la apuesta back (casa)
    const resultadoCasaGana = tipo === 'sr'
        ? stake * cuotaBack
        : stake * (cuotaBack - 1)
    const resultadoExchangePierde = -responsabilidad
    const beneficioSiGana = resultadoCasaGana + resultadoExchangePierde

    // Escenario 2: pierde la apuesta back (exchange gana)
    // La freebet se pierde pero no cuesta dinero real
    const resultadoCasaPierde = 0
    const resultadoExchangeGana = layStake * (1 - comisionDecimal)
    const beneficioSiPierde = resultadoCasaPierde + resultadoExchangeGana

    // % del valor de la freebet que recuperas realmente
    const retencionReal = (beneficioSiGana / stake) * 100

    return {
        layStake: Math.round(layStake * 100) / 100,
        responsabilidad: Math.round(responsabilidad * 100) / 100,
        retencionReal: Math.round(retencionReal * 100) / 100,
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