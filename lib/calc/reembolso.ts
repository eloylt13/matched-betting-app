// lib/calc/reembolso.ts

import type { InputsReembolso, ResultadoReembolso } from '@/types/calc'
import { emptyScenario, nonNegativeNumber, parseNumber, roundSafe } from './safe'

export function calcReembolso(inputs: InputsReembolso): ResultadoReembolso {
    const stake = nonNegativeNumber(inputs.stake)
    const cuotaBack = parseNumber(inputs.cuotaBack)
    const cuotaLay = parseNumber(inputs.cuotaLay)
    const comision = parseNumber(inputs.comision)
    const reembolso = nonNegativeNumber(inputs.reembolso)
    const tasaExtraccion = nonNegativeNumber(inputs.tasaExtraccion ?? 75)
    const { tipo = 'cash' } = inputs
    const comisionDecimal = comision / 100
    const denominator = cuotaLay - comisionDecimal

    if (stake <= 0 || cuotaBack <= 1 || cuotaLay <= 1 || comision < 0 || comision >= 100 || denominator <= 0) {
        return {
            layStake: 0,
            responsabilidad: 0,
            beneficioEsperado: 0,
            escenarios: [
                emptyScenario('Si gana A Favor (casa)'),
                emptyScenario('Si gana En Contra (exchange) + reembolso'),
            ],
        }
    }

    const valorRealReembolso = tipo === 'cash' ? reembolso : reembolso * (tasaExtraccion / 100)

    const layStake = (stake * cuotaBack - valorRealReembolso) / denominator

    const responsabilidad = layStake * (cuotaLay - 1)

    const resultadoCasaGana = stake * (cuotaBack - 1)
    const resultadoExchangePierde = -responsabilidad
    const beneficioSiGana = resultadoCasaGana + resultadoExchangePierde

    const resultadoCasaPierde = valorRealReembolso - stake
    const resultadoExchangeGana = layStake * (1 - comisionDecimal)
    const beneficioSiPierde = resultadoCasaPierde + resultadoExchangeGana
    const beneficioEsperado = Math.min(beneficioSiGana, beneficioSiPierde)

    return {
        layStake: roundSafe(layStake),
        responsabilidad: roundSafe(responsabilidad),
        beneficioEsperado: roundSafe(beneficioEsperado),

        escenarios: [
            {
                label: 'Si gana A Favor (casa)',
                beneficio: roundSafe(beneficioSiGana),
                resultadoCasa: roundSafe(resultadoCasaGana),
                resultadoExchange: roundSafe(resultadoExchangePierde),
            },
            {
                label: 'Si gana En Contra (exchange) + reembolso',
                beneficio: roundSafe(beneficioSiPierde),
                resultadoCasa: roundSafe(resultadoCasaPierde),
                resultadoExchange: roundSafe(resultadoExchangeGana),
            },
        ],
    }
}
