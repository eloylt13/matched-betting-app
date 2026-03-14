// lib/calc/dutcher.ts

import type { InputsDutcher, ResultadoDutcher } from '@/types/calc'

export function calcDutcher(inputs: InputsDutcher): ResultadoDutcher {
    const { stakeCasa1, cuotaCasa1, cuotaCasa2 } = inputs

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
        stakeCasa2: Math.round(stakeCasa2 * 100) / 100,
        beneficioNeto: Math.round(beneficioNeto * 100) / 100,
        escenarios: [
            {
                label: 'Si gana Casa 1',
                beneficio: Math.round(beneficioSiGanaCasa1 * 100) / 100,
                resultadoCasa: Math.round(resultadoCasa1Gana * 100) / 100,
                resultadoExchange: Math.round(resultadoCasa2Pierde * 100) / 100,
            },
            {
                label: 'Si gana Casa 2',
                beneficio: Math.round(beneficioSiGanaCasa2 * 100) / 100,
                resultadoCasa: Math.round(resultadoCasa1Pierde * 100) / 100,
                resultadoExchange: Math.round(resultadoCasa2Gana * 100) / 100,
            },
        ],
    }
}