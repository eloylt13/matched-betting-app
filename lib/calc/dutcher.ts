// lib/calc/dutcher.ts

import type { InputsDutcher, ResultadoDutcher } from '@/types/calc'
import { emptyScenario, nonNegativeNumber, parseNumber, roundSafe } from './safe'

export function calcDutcher(inputs: InputsDutcher): ResultadoDutcher {
    const bankTotal = nonNegativeNumber(inputs.stakeTotal ?? inputs.stakeCasa1)
    const cuotaCasa1 = parseNumber(inputs.cuotaCasa1)
    const cuotaCasa2 = parseNumber(inputs.cuotaCasa2)
    const numeroResultados = inputs.numeroResultados === 3 ? 3 : 2
    const cuotas = numeroResultados === 3
        ? [cuotaCasa1, cuotaCasa2, parseNumber(inputs.cuotaCasa3)]
        : [cuotaCasa1, cuotaCasa2]
    const labels = numeroResultados === 3
        ? ['Resultado 1', 'Resultado X', 'Resultado 2']
        : ['Bookmaker 1', 'Bookmaker 2']
    const resultadosVacios = cuotas.map((cuota, index) => ({
        label: labels[index],
        cuota,
        stake: 0,
        retorno: 0,
    }))

    if (bankTotal <= 0 || cuotas.some((cuota) => cuota <= 1)) {
        return {
            stakeCasa2: 0,
            retornoIgualado: 0,
            resultados: resultadosVacios,
            beneficioNeto: 0,
            escenarios: labels.map((label) => emptyScenario(`Si gana ${label}`)),
            esValido: false,
        }
    }

    const sumaImplicita = cuotas.reduce((total, cuota) => total + 1 / cuota, 0)

    if (!Number.isFinite(sumaImplicita) || sumaImplicita <= 0) {
        return {
            stakeCasa2: 0,
            retornoIgualado: 0,
            resultados: resultadosVacios,
            beneficioNeto: 0,
            escenarios: labels.map((label) => emptyScenario(`Si gana ${label}`)),
            esValido: false,
        }
    }

    const retornoIgualado = bankTotal / sumaImplicita
    const beneficioNeto = retornoIgualado - bankTotal
    const resultados = cuotas.map((cuota, index) => ({
        label: labels[index],
        cuota: roundSafe(cuota),
        stake: roundSafe(retornoIgualado / cuota),
        retorno: roundSafe(retornoIgualado),
    }))

    const escenarios = resultados.map((resultado) => ({
        label: `Si gana ${resultado.label}`,
        beneficio: roundSafe(beneficioNeto),
        resultadoCasa: roundSafe(retornoIgualado),
        resultadoExchange: roundSafe(-(bankTotal - resultado.stake)),
    }))

    return {
        stakeCasa2: resultados[1]?.stake ?? 0,
        retornoIgualado: roundSafe(retornoIgualado),
        resultados,
        beneficioNeto: roundSafe(beneficioNeto),
        escenarios,
        esValido: true,
    }
}
