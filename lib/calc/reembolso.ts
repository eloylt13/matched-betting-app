// lib/calc/reembolso.ts

import type { InputsReembolso, ResultadoReembolso } from '@/types/calc'

export function calcReembolso(inputs: InputsReembolso): ResultadoReembolso {
    const { stake, cuotaBack, cuotaLay, comision, reembolso, tipo = 'cash', tasaExtraccion = 75 } = inputs
    const comisionDecimal = comision / 100
    const valorRealReembolso = tipo === 'cash' ? reembolso : reembolso * (tasaExtraccion / 100)

    const layStake = tipo === 'cash'
        ? (stake * (cuotaBack - 1)) / (cuotaLay - comisionDecimal)
        : (stake * cuotaBack - valorRealReembolso) / (cuotaLay - comisionDecimal)

    const responsabilidad = layStake * (cuotaLay - 1)

    const resultadoCasaGana = stake * (cuotaBack - 1)
    const resultadoExchangePierde = -responsabilidad
    const beneficioSiGana = resultadoCasaGana + resultadoExchangePierde

    const resultadoCasaPierde = tipo === 'cash' ? 0 : valorRealReembolso - stake
    const resultadoExchangeGana = layStake * (1 - comisionDecimal)
    const beneficioSiPierde = resultadoCasaPierde + resultadoExchangeGana
    const beneficioEsperado = Math.min(beneficioSiGana, beneficioSiPierde)

    return {
        layStake: Math.round(layStake * 100) / 100,
        responsabilidad: Math.round(responsabilidad * 100) / 100,
        beneficioEsperado: Math.round(beneficioEsperado * 100) / 100,

        escenarios: [
            {
                label: 'Si gana A Favor (casa)',
                beneficio: Math.round(beneficioSiGana * 100) / 100,
                resultadoCasa: Math.round(resultadoCasaGana * 100) / 100,
                resultadoExchange: Math.round(resultadoExchangePierde * 100) / 100,
            },
            {
                label: 'Si gana En Contra (exchange) + reembolso',
                beneficio: Math.round(beneficioSiPierde * 100) / 100,
                resultadoCasa: Math.round(resultadoCasaPierde * 100) / 100,
                resultadoExchange: Math.round(resultadoExchangeGana * 100) / 100,
            },
        ],
    }
}