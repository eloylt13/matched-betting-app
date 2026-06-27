// lib/calc/freebet.ts

import type { InputsFreeBet, ResultadoFreeBet } from '@/types/calc'
import { emptyScenario, nonNegativeNumber, parseNumber, roundSafe } from './safe'

export function calcFreeBet(inputs: InputsFreeBet): ResultadoFreeBet {
    const stake = nonNegativeNumber(inputs.stake)
    const cuotaBack = parseNumber(inputs.cuotaBack)
    const cuotaLay = parseNumber(inputs.cuotaLay)
    const comision = parseNumber(inputs.comision)
    const { tipo = 'snr' } = inputs
    const comisionDecimal = comision / 100
    const denominator = cuotaLay - comisionDecimal

    if (stake <= 0 || cuotaBack <= 1 || cuotaLay <= 1 || comision < 0 || comision >= 100 || denominator <= 0) {
        return {
            layStake: 0,
            responsabilidad: 0,
            retencionReal: 0,
            escenarios: [
                emptyScenario('Si gana A Favor (casa)'),
                emptyScenario('Si gana En Contra (exchange)'),
            ],
        }
    }

    // En freebet SNR no se recupera el stake si gana; en SR sí se recupera
    const layStake = tipo === 'sr'
        ? (stake * cuotaBack) / denominator
        : (stake * (cuotaBack - 1)) / denominator

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
        layStake: roundSafe(layStake),
        responsabilidad: roundSafe(responsabilidad),
        retencionReal: roundSafe(retencionReal),
        escenarios: [
            {
                label: 'Si gana A Favor (casa)',
                beneficio: roundSafe(beneficioSiGana),
                resultadoCasa: roundSafe(resultadoCasaGana),
                resultadoExchange: roundSafe(resultadoExchangePierde),
            },
            {
                label: 'Si gana En Contra (exchange)',
                beneficio: roundSafe(beneficioSiPierde),
                resultadoCasa: roundSafe(resultadoCasaPierde),
                resultadoExchange: roundSafe(resultadoExchangeGana),
            },
        ],
    }
}
