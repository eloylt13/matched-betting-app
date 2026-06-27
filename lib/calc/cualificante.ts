// lib/calc/cualificante.ts

import type { InputsCualificante, ResultadoCualificante } from '@/types/calc'
import { emptyScenario, nonNegativeNumber, parseNumber, roundSafe } from './safe'

export function calcCualificante(inputs: InputsCualificante): ResultadoCualificante {
    const stake = nonNegativeNumber(inputs.stake)
    const cuotaBack = parseNumber(inputs.cuotaBack)
    const cuotaLay = parseNumber(inputs.cuotaLay)
    const comision = parseNumber(inputs.comision)
    const comisionDecimal = comision / 100
    const denominator = cuotaLay - comisionDecimal

    if (stake <= 0 || cuotaBack <= 1 || cuotaLay <= 1 || comision < 0 || comision >= 100 || denominator <= 0) {
        return {
            layStake: 0,
            responsabilidad: 0,
            perdidaMedia: 0,
            escenarios: [
                emptyScenario('Si gana A Favor (casa)'),
                emptyScenario('Si gana En Contra (exchange)'),
            ],
        }
    }

    // Lay stake óptimo para cubrir la operación
    const layStake = (stake * cuotaBack) / denominator

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
        layStake: roundSafe(layStake),
        responsabilidad: roundSafe(responsabilidad),
        perdidaMedia: roundSafe(perdidaMedia),
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
