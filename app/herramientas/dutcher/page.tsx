'use client'
// app/herramientas/dutcher/page.tsx

import { useState } from 'react'
import Link from 'next/link'
import { calcDutcher } from '@/lib/calc'
import { nonNegativeNumber } from '@/lib/calc/safe'

type NumeroResultadosDutcher = 2 | 3

export default function DutcherPage() {
    const [stake, setStake] = useState('100')
    const [cuotaBM1, setCuotaBM1] = useState('1.90')
    const [cuotaBM2, setCuotaBM2] = useState('1.83')
    const [cuotaBM3, setCuotaBM3] = useState('3.20')
    const [numeroResultados, setNumeroResultados] = useState<NumeroResultadosDutcher>(2)

    const s = nonNegativeNumber(stake)
    const resultadoDutcher = calcDutcher({
        stakeCasa1: stake,
        stakeTotal: stake,
        cuotaCasa1: cuotaBM1,
        cuotaCasa2: cuotaBM2,
        cuotaCasa3: cuotaBM3,
        numeroResultados,
    })
    const resultados = resultadoDutcher.resultados
    const validationMessage = s > 0 && !resultadoDutcher.esValido
        ? 'Introduce cuotas válidas mayores que 1.'
        : ''

    const beneficio = resultadoDutcher.beneficioNeto
    const rating = s > 0 ? ((beneficio + s) / s) * 100 : 0

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-3">
                <Link href="/herramientas" className="text-gray-400 hover:text-gray-600 text-sm">← Herramientas</Link>
                <span className="text-gray-300">/</span>
                <h1 className="text-xl font-bold text-gray-900">🔀 Dutcher</h1>
                <span className="bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded-full font-semibold">2 o 3 resultados · sin exchange</span>
            </div>

            <p className="text-sm text-gray-500">
                Para cuando no hay buena liquidez en Betfair. Reparte el bank entre 2 o 3 resultados de un mercado.
                {' '}<a href="https://oddspedia.com/es" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Buscar cuotas en Oddspedia →</a>
            </p>

            {/* Ejemplo visual */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                <p className="font-bold mb-1">💡 Ejemplo</p>
                <p>Partido Hoffenheim vs Colonia. BM1 ofrece <strong>Over 2.5 a 1.90</strong> y BM2 ofrece <strong>Under 2.5 a 1.83</strong>.
                    Repartes 100€ entre ambas casas y la calculadora te dice cuánto apostar en cada una para cubrirte.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Inputs */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                    <h2 className="font-bold text-gray-700 text-xs uppercase tracking-wide">Datos de la apuesta</h2>

                    <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1">Stake total (€)</label>
                        <div className="flex">
                            <span className="bg-gray-100 border border-r-0 border-gray-200 px-2.5 py-2 text-xs text-gray-500 rounded-l-lg">€</span>
                            <input type="text" inputMode="decimal" value={stake} onChange={e => setStake(e.target.value)} step="0.01" min="0"
                                className="flex-1 border border-gray-200 px-3 py-2 text-sm rounded-r-lg focus:outline-none focus:ring-2 focus:ring-purple-300" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 rounded-xl border border-gray-200 bg-gray-50 p-1">
                        {([2, 3] as NumeroResultadosDutcher[]).map((value) => (
                            <button
                                key={value}
                                type="button"
                                onClick={() => setNumeroResultados(value)}
                                className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                                    numeroResultados === value
                                        ? 'bg-white text-purple-700 shadow-sm'
                                        : 'text-gray-500 hover:bg-white hover:text-purple-700'
                                }`}
                            >
                                {value} resultados
                            </button>
                        ))}
                    </div>

                    <div className="bg-teal-50 rounded-xl p-4 space-y-3">
                        <p className="text-xs font-bold text-teal-700">{numeroResultados === 3 ? 'RESULTADO 1' : 'BOOKMAKER 1'}</p>
                        <div>
                            <label className="block text-xs text-teal-600 mb-1">{numeroResultados === 3 ? 'Cuota 1' : 'Cuota BM1'}</label>
                            <input type="text" inputMode="decimal" value={cuotaBM1} onChange={e => setCuotaBM1(e.target.value)} step="0.01" min="1"
                                className="w-full border border-teal-200 bg-white px-3 py-2 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300" />
                        </div>
                    </div>

                    <div className="bg-purple-50 rounded-xl p-4 space-y-3">
                        <p className="text-xs font-bold text-purple-700">{numeroResultados === 3 ? 'RESULTADO X' : 'BOOKMAKER 2'}</p>
                        <div>
                            <label className="block text-xs text-purple-600 mb-1">{numeroResultados === 3 ? 'Cuota X' : 'Cuota BM2'}</label>
                            <input type="text" inputMode="decimal" value={cuotaBM2} onChange={e => setCuotaBM2(e.target.value)} step="0.01" min="1"
                                className="w-full border border-purple-200 bg-white px-3 py-2 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300" />
                        </div>
                    </div>

                    {numeroResultados === 3 && (
                        <div className="bg-indigo-50 rounded-xl p-4 space-y-3">
                            <p className="text-xs font-bold text-indigo-700">RESULTADO 2</p>
                            <div>
                                <label className="block text-xs text-indigo-600 mb-1">Cuota 2</label>
                                <input type="text" inputMode="decimal" value={cuotaBM3} onChange={e => setCuotaBM3(e.target.value)} step="0.01" min="1"
                                    className="w-full border border-indigo-200 bg-white px-3 py-2 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300" />
                            </div>
                        </div>
                    )}

                    {validationMessage && (
                        <p className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800">
                            {validationMessage}
                        </p>
                    )}
                </div>

                {/* Resultado */}
                <div className="space-y-3">
                    <div className="bg-purple-500 rounded-2xl p-5 text-white">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm opacity-80">RESULTADO</p>
                                <p className="text-4xl font-bold mt-1">
                                    {beneficio >= 0 ? '+' : ''}{beneficio.toFixed(2)} €
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-xs opacity-70">RATING</p>
                                <p className="text-xl font-bold">{rating.toFixed(2)}%</p>
                            </div>
                        </div>
                    </div>

                    {resultados.map((item) => (
                        <div key={item.label} className="bg-teal-50 border border-teal-100 rounded-2xl p-4">
                            <p className="text-xs font-bold text-teal-600 mb-2">{item.label}</p>
                            <p className="text-2xl font-bold text-teal-700">{item.stake.toFixed(2)} €</p>
                            <p className="text-xs text-teal-500 mt-1">A cuota {item.cuota.toFixed(2)}</p>
                        </div>
                    ))}

                    <div className="bg-white border border-gray-100 rounded-2xl p-4">
                        <p className="text-xs font-bold text-gray-600 mb-2">RETORNO</p>
                        <p className="text-2xl font-bold text-gray-800">{resultadoDutcher.retornoIgualado.toFixed(2)} €</p>
                        <p className="text-xs text-gray-500 mt-1">Retorno estimado por resultado</p>
                    </div>

                    {/* Tabla */}
                    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="text-left px-4 py-2 text-xs text-gray-500 font-semibold">ESCENARIO</th>
                                    <th className="text-right px-4 py-2 text-xs text-gray-500 font-semibold">STAKE</th>
                                    <th className="text-right px-4 py-2 text-xs text-gray-500 font-semibold">RETORNO</th>
                                    <th className="text-right px-4 py-2 text-xs text-gray-500 font-semibold">TOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {resultados.map((item) => (
                                    <tr key={item.label} className="border-t border-gray-100">
                                        <td className="px-4 py-2.5 text-xs font-medium text-teal-700 bg-teal-50">{item.label} gana</td>
                                        <td className="px-4 py-2.5 text-xs text-right font-mono text-gray-700">{item.stake.toFixed(2)}</td>
                                        <td className="px-4 py-2.5 text-xs text-right font-mono text-green-600">{item.retorno.toFixed(2)}</td>
                                        <td className={`px-4 py-2.5 text-xs text-right font-bold ${beneficio >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                                            {beneficio >= 0 ? '+' : ''}{beneficio.toFixed(2)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
