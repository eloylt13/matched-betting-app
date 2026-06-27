// lib/calc/dutcher.ts

import type { InputsDutcher, ResultadoDutcher } from '@/types/calc'
import { emptyScenario, nonNegativeNumber, parseNumber, roundSafe } from './safe'

export function calcDutcher(inputs: InputsDutcher): ResultadoDutcher {
    const stakeCasa1 = nonNegativeNumber(inputs.stakeCasa1)
    const cuotaCasa1 = parseNumber(inputs.cuotaCasa1)
    const cuotaCasa2 = parseNumber(inputs.cuotaCasa2)

    if (stakeCasa1 <= 0 || cuotaCasa1 <= 1 || cuotaCasa2 <= 1) {
        return {
            stakeCasa2: 0,
            beneficioNeto: 0,
            escenarios: [
                emptyScenario('Si gana Casa 1'),
                emptyScenario('Si gana Casa 2'),
            ],
        }
    }

    // Stake en casa 2 para equilibrar ambos resultados
    const stakeCasa2 = (stakeCasa1 * cuotaCasa1) / cuotaCasa2

    // Escenario 1: gana la apuesta en casa 1
    const resultadoCasa1Gana = stakeCasa1 * (cuotaCasa1 - 1)
    const resultadoCasa2Pierde = -stakeCasa2
    const beneficioSiGanaCasa1 = resultadoCasa1Gana + resultadoCasa2Pierde

    // Escenario 2: gana la apuesta en casa 2
    const resultadoCasa1Pierde = -stakeCasa1
    const resultadoCasa2Gana = stakeCasa2 * (cuotaCasa2 - 1)
    const beneficioSiGanaCasa2 = resultadoCasa1Pierde + resultadoCasa2Gana

    // Beneficio neto (ambos escenarios deben ser iguales o muy similares)
    const beneficioNeto = (beneficioSiGanaCasa1 + beneficioSiGanaCasa2) / 2

    return {
        stakeCasa2: roundSafe(stakeCasa2),
        beneficioNeto: roundSafe(beneficioNeto),
        escenarios: [
            {
                label: 'Si gana Casa 1',
                beneficio: roundSafe(beneficioSiGanaCasa1),
                resultadoCasa: roundSafe(resultadoCasa1Gana),
                resultadoExchange: roundSafe(resultadoCasa2Pierde),
            },
            {
                label: 'Si gana Casa 2',
                beneficio: roundSafe(beneficioSiGanaCasa2),
                resultadoCasa: roundSafe(resultadoCasa1Pierde),
                resultadoExchange: roundSafe(resultadoCasa2Gana),
            },
        ],
    }
}
