'use client'
// app/herramientas/dutcher/page.tsx

import { useMemo, useState } from 'react'
import Link from 'next/link'

export default function DutcherPage() {
    const [stake, setStake] = useState('100')
    const [cuotaBM1, setCuotaBM1] = useState('1.90')
    const [cuotaBM2, setCuotaBM2] = useState('1.83')

    const s = parseFloat(stake) || 0
    const c1 = parseFloat(cuotaBM1) || 0
    const c2 = parseFloat(cuotaBM2) || 0

    const { stakeBM1, stakeBM2, benefSiBM1Gana, benefSiBM2Gana } = useMemo(() => {
        if (s <= 0 || c1 <= 0 || c2 <= 0) {
            return { stakeBM1: 0, stakeBM2: 0, benefSiBM1Gana: 0, benefSiBM2Gana: 0 }
        }

        const stakeA = (s * c2) / (c1 + c2)
        const stakeB = s - stakeA

        return {
            stakeBM1: stakeA,
            stakeBM2: stakeB,
            benefSiBM1Gana: stakeA * c1 - s,
            benefSiBM2Gana: stakeB * c2 - s,
        }
    }, [s, c1, c2])

    const beneficio = Math.min(benefSiBM1Gana, benefSiBM2Gana)
    const rating = s > 0 ? ((beneficio + s) / s) * 100 : 0

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-3">
                <Link href="/herramientas" className="text-gray-400 hover:text-gray-600 text-sm">← Herramientas</Link>
                <span className="text-gray-300">/</span>
                <h1 className="text-xl font-bold text-gray-900">🔀 Dutcher</h1>
                <span className="bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded-full font-semibold">Dos bookmakers · sin exchange</span>
            </div>

            <p className="text-sm text-gray-500">
                Para cuando no hay buena liquidez en Betfair. Apostamos a resultados opuestos (Over/Under, 1/X2...) en dos bookmakers distintos.
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
                            <input type="number" value={stake} onChange={e => setStake(e.target.value)} step="0.01" min="0"
                                className="flex-1 border border-gray-200 px-3 py-2 text-sm rounded-r-lg focus:outline-none focus:ring-2 focus:ring-purple-300" />
                        </div>
                    </div>

                    {/* BM1 */}
                    <div className="bg-teal-50 rounded-xl p-4 space-y-3">
                        <p className="text-xs font-bold text-teal-700">BOOKMAKER 1 (apuesta FAVOR)</p>
                        <div>
                            <label className="block text-xs text-teal-600 mb-1">Cuota BM1</label>
                            <input type="number" value={cuotaBM1} onChange={e => setCuotaBM1(e.target.value)} step="0.01" min="1"
                                className="w-full border border-teal-200 bg-white px-3 py-2 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300" />
                        </div>
                    </div>

                    {/* BM2 */}
                    <div className="bg-purple-50 rounded-xl p-4 space-y-3">
                        <p className="text-xs font-bold text-purple-700">BOOKMAKER 2 (apuesta FAVOR opuesto)</p>
                        <div>
                            <label className="block text-xs text-purple-600 mb-1">Cuota BM2</label>
                            <input type="number" value={cuotaBM2} onChange={e => setCuotaBM2(e.target.value)} step="0.01" min="1"
                                className="w-full border border-purple-200 bg-white px-3 py-2 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300" />
                        </div>
                    </div>
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

                    {/* BM1 instrucción */}
                    <div className="bg-teal-50 border border-teal-100 rounded-2xl p-4">
                        <p className="text-xs font-bold text-teal-600 mb-2">📗 BOOKMAKER 1 · APUESTA A FAVOR</p>
                        <p className="text-2xl font-bold text-teal-700">{stakeBM1.toFixed(2)} €</p>
                        <p className="text-xs text-teal-500 mt-1">A cuota {c1.toFixed(2)}</p>
                    </div>

                    {/* BM2 instrucción */}
                    <div className="bg-purple-50 border border-purple-100 rounded-2xl p-4">
                        <p className="text-xs font-bold text-purple-600 mb-2">📘 BOOKMAKER 2 · APUESTA OPUESTA</p>
                        <p className="text-2xl font-bold text-purple-700">{stakeBM2.toFixed(2)} €</p>
                        <p className="text-xs text-purple-500 mt-1">A cuota {c2.toFixed(2)}</p>
                    </div>

                    {/* Tabla */}
                    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="text-left px-4 py-2 text-xs text-gray-500 font-semibold">ESCENARIO</th>
                                    <th className="text-right px-4 py-2 text-xs text-gray-500 font-semibold">Bookmaker 1</th>
                                    <th className="text-right px-4 py-2 text-xs text-gray-500 font-semibold">Bookmaker 2</th>
                                    <th className="text-right px-4 py-2 text-xs text-gray-500 font-semibold">TOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-gray-100">
                                    <td className="px-4 py-2.5 text-xs font-medium text-teal-700 bg-teal-50">✅ Bookmaker 1 gana</td>
                                    <td className="px-4 py-2.5 text-xs text-right font-mono text-green-600">+{(stakeBM1 * c1).toFixed(2)}</td>
                                    <td className="px-4 py-2.5 text-xs text-right font-mono text-red-500">-{stakeBM2.toFixed(2)}</td>
                                    <td className={`px-4 py-2.5 text-xs text-right font-bold ${benefSiBM1Gana >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                                        {benefSiBM1Gana >= 0 ? '+' : ''}{benefSiBM1Gana.toFixed(2)}
                                    </td>
                                </tr>
                                <tr className="border-t border-gray-100">
                                    <td className="px-4 py-2.5 text-xs font-medium text-purple-700 bg-purple-50">✅ Bookmaker 2 gana</td>
                                    <td className="px-4 py-2.5 text-xs text-right font-mono text-red-500">-{stakeBM1.toFixed(2)}</td>
                                    <td className="px-4 py-2.5 text-xs text-right font-mono text-green-600">+{(stakeBM2 * c2).toFixed(2)}</td>
                                    <td className={`px-4 py-2.5 text-xs text-right font-bold ${benefSiBM2Gana >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                                        {benefSiBM2Gana >= 0 ? '+' : ''}{benefSiBM2Gana.toFixed(2)}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
