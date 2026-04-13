'use client'
// app/herramientas/oddsmatcher/page.tsx

import { useState } from 'react'
import Link from 'next/link'

type Modo = 'dinero-real' | 'apuesta-gratis' | 'bonos' | 'rollover' | 'reembolso'

const MODOS: { id: Modo; label: string; color: string }[] = [
    { id: 'dinero-real', label: 'DINERO REAL', color: 'bg-teal-500' },
    { id: 'apuesta-gratis', label: 'APUESTA GRATIS', color: 'bg-blue-500' },
    { id: 'bonos', label: 'BONOS', color: 'bg-purple-500' },
    { id: 'rollover', label: 'ROLLOVER', color: 'bg-amber-500' },
    { id: 'reembolso', label: 'REEMBOLSO', color: 'bg-rose-500' },
]

export default function OddsMatcherPage() {
    const [modo, setModo] = useState<Modo>('dinero-real')
    const [stake, setStake] = useState('100')
    const [cuotaBM, setCuotaBM] = useState('2.00')
    const [cuotaExch, setCuotaExch] = useState('2.10')
    const [comision, setComision] = useState('5')
    const [reembolso, setReembolso] = useState('100')
    const [rolloverX, setRolloverX] = useState('10')

    const s = parseFloat(stake) || 0
    const cbm = parseFloat(cuotaBM) || 0
    const ce = parseFloat(cuotaExch) || 0
    const com = (parseFloat(comision) || 0) / 100
    const reb = parseFloat(reembolso) || 0

    let stakeContra = 0, benefSiGana = 0, benefSiPierde = 0, liability = 0

    if (s > 0 && cbm > 0 && ce > 0) {
        if (modo === 'dinero-real') {
            stakeContra = (s * cbm) / (ce - com)
            liability = stakeContra * (ce - 1)
            benefSiGana = s * (cbm - 1) - liability
            benefSiPierde = stakeContra * (1 - com) - s
        } else if (modo === 'apuesta-gratis') {
            stakeContra = (s * (cbm - 1)) / (ce - com)
            liability = stakeContra * (ce - 1)
            benefSiGana = s * (cbm - 1) - liability
            benefSiPierde = stakeContra * (1 - com)
        } else if (modo === 'bonos') {
            stakeContra = (s * cbm) / (ce - com)
            liability = stakeContra * (ce - 1)
            benefSiGana = s * cbm - s - liability
            benefSiPierde = stakeContra * (1 - com)
        } else if (modo === 'reembolso') {
            const valorReb = reb * 0.70
            stakeContra = Math.max(0, (s * cbm - valorReb) / (ce - com))
            liability = stakeContra * (ce - 1)
            benefSiGana = s * (cbm - 1) - liability
            benefSiPierde = stakeContra * (1 - com) - s + valorReb
        } else if (modo === 'rollover') {
            stakeContra = (s * cbm) / (ce - com)
            liability = stakeContra * (ce - 1)
            benefSiGana = s * (cbm - 1) - liability
            benefSiPierde = stakeContra * (1 - com) - s
        }
    }

    const beneficio = Math.min(benefSiGana, benefSiPierde)
    const rating = s > 0 ? ((beneficio + s) / s) * 100 : 0
    const riesgo = liability
    const retencion = modo === 'apuesta-gratis' && s > 0 ? (benefSiPierde / s) * 100 : null

    const modoActual = MODOS.find(m => m.id === modo)!

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-3">
                <Link href="/herramientas" className="text-gray-400 hover:text-gray-600 text-sm">← Herramientas</Link>
                <span className="text-gray-300">/</span>
                <h1 className="text-xl font-bold text-gray-900">⚡ Oddsmatcher</h1>
                <span className="bg-teal-100 text-teal-700 text-xs px-2 py-0.5 rounded-full font-semibold">Bookmaker + Exchange</span>
            </div>

            <p className="text-sm text-gray-500">
                Introduce las cuotas del bookmaker y de Betfair Exchange. La calculadora te dice exactamente cuánto apostar en cada lado.
                {' '}<a href="https://oddspedia.com/es" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Buscar cuotas en Oddspedia →</a>
            </p>

            {/* Modos */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-1 flex gap-1 overflow-x-auto">
                {MODOS.map(m => (
                    <button key={m.id} onClick={() => setModo(m.id)}
                        className={`flex-1 min-w-[110px] py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${modo === m.id ? `${m.color} text-white shadow-md` : 'text-gray-500 hover:bg-gray-50'
                            }`}>
                        {m.label}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Inputs */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                    <h2 className="font-bold text-gray-700 text-xs uppercase tracking-wide">Datos de la apuesta</h2>

                    <div className="grid grid-cols-2 gap-3">
                        <InputField label="Importe apuesta" value={stake} onChange={setStake} prefix="€" />
                        <InputField label="Cuota bookmaker" value={cuotaBM} onChange={setCuotaBM} />
                    </div>

                    {modo !== 'rollover' && (
                        <div className="grid grid-cols-2 gap-3">
                            <InputField label="Cuota Exchange" value={cuotaExch} onChange={setCuotaExch} />
                            <InputField label="Comisión" value={comision} onChange={setComision} suffix="%" />
                        </div>
                    )}

                    {modo === 'reembolso' && (
                        <InputField label="Importe reembolso" value={reembolso} onChange={setReembolso} prefix="€"
                            hint="Freebet que recibirías si pierdes" />
                    )}
                    {modo === 'rollover' && (
                        <div className="grid grid-cols-2 gap-3">
                            <InputField label="Cuota Exchange" value={cuotaExch} onChange={setCuotaExch} />
                            <InputField label="Rollover" value={rolloverX} onChange={setRolloverX} suffix="x" />
                        </div>
                    )}

                    {/* Hint según modo */}
                    <div className="bg-gray-50 rounded-xl p-3 text-xs text-gray-500">
                        {modo === 'dinero-real' && '💡 Apuesta calificante. Minimiza la pérdida cubriendo en Betfair.'}
                        {modo === 'apuesta-gratis' && '💡 Freebet SNR: stake no devuelto. Cuotas altas (3.00+) = más retención.'}
                        {modo === 'bonos' && '💡 Freebet SR: stake devuelto al ganar. Cuotas más bajas son aceptables.'}
                        {modo === 'reembolso' && '💡 Si pierdes recibes una freebet. El cálculo incluye su valor estimado (70%).'}
                        {modo === 'rollover' && '💡 Calcula la pérdida esperada para completar el volumen de rollover.'}
                    </div>
                </div>

                {/* Resultado */}
                <div className="space-y-3">
                    {/* Resultado principal */}
                    <div className={`${modoActual.color} rounded-2xl p-5 text-white`}>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm opacity-80">GANARÁS</p>
                                <p className="text-4xl font-bold mt-1">
                                    {beneficio >= 0 ? '+' : ''}{beneficio.toFixed(2)} €
                                </p>
                            </div>
                            <div className="text-right">
                                {retencion !== null ? (
                                    <>
                                        <p className="text-xs opacity-70">Retención</p>
                                        <p className="text-xl font-bold">{retencion.toFixed(1)}%</p>
                                    </>
                                ) : (
                                    <>
                                        <p className="text-xs opacity-70">RATING</p>
                                        <p className="text-xl font-bold">{rating.toFixed(2)}%</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Apuesta a favor */}
                    <div className="bg-teal-50 border border-teal-100 rounded-2xl p-4">
                        <p className="text-xs font-bold text-teal-600 mb-2">IR A BOOKMAKER · APUESTA A FAVOR</p>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-2xl font-bold text-teal-700">{s.toFixed(2)} €</p>
                                <p className="text-xs text-teal-500">A cuota {cbm.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>

                    {/* Apuesta en contra */}
                    {modo !== 'rollover' && (
                        <div className="bg-rose-50 border border-rose-100 rounded-2xl p-4">
                            <p className="text-xs font-bold text-rose-600 mb-2">IR A BETFAIR · APUESTA EN CONTRA</p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-2xl font-bold text-rose-700">{stakeContra.toFixed(2)} €</p>
                                    <p className="text-xs text-rose-500">A cuota {ce.toFixed(2)} · Riesgo: {riesgo.toFixed(2)} €</p>
                                </div>
                                <a href="https://www.betfair.es/exchange/plus/" target="_blank" rel="noopener noreferrer"
                                    className="bg-rose-500 text-white text-xs px-3 py-1.5 rounded-full hover:bg-rose-600 transition-colors font-semibold">
                                    Betfair →
                                </a>
                            </div>
                        </div>
                    )}

                    {/* Tabla escenarios */}
                    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="text-left px-4 py-2 text-xs text-gray-500 font-semibold">ESCENARIO</th>
                                    <th className="text-right px-4 py-2 text-xs text-gray-500 font-semibold">BOOKMAKER</th>
                                    <th className="text-right px-4 py-2 text-xs text-gray-500 font-semibold">BETFAIR</th>
                                    <th className="text-right px-4 py-2 text-xs text-gray-500 font-semibold">TOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-gray-100">
                                    <td className="px-4 py-2.5 text-xs font-medium text-green-700 bg-green-50">✅ A FAVOR GANA</td>
                                    <td className="px-4 py-2.5 text-xs text-right font-mono text-green-600">+{(s * (cbm - 1)).toFixed(2)}</td>
                                    <td className="px-4 py-2.5 text-xs text-right font-mono text-red-500">-{liability.toFixed(2)}</td>
                                    <td className={`px-4 py-2.5 text-xs text-right font-bold ${benefSiGana >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                                        {benefSiGana >= 0 ? '+' : ''}{benefSiGana.toFixed(2)}
                                    </td>
                                </tr>
                                <tr className="border-t border-gray-100">
                                    <td className="px-4 py-2.5 text-xs font-medium text-blue-700 bg-blue-50">🔄 EN CONTRA GANA</td>
                                    <td className="px-4 py-2.5 text-xs text-right font-mono text-red-500">-{s.toFixed(2)}</td>
                                    <td className="px-4 py-2.5 text-xs text-right font-mono text-green-600">+{(stakeContra * (1 - com)).toFixed(2)}</td>
                                    <td className={`px-4 py-2.5 text-xs text-right font-bold ${benefSiPierde >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                                        {benefSiPierde >= 0 ? '+' : ''}{benefSiPierde.toFixed(2)}
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

function InputField({ label, value, onChange, prefix, suffix, hint }: {
    label: string; value: string; onChange: (v: string) => void
    prefix?: string; suffix?: string; hint?: string
}) {
    return (
        <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">{label}</label>
            <div className="flex">
                {prefix && <span className="bg-gray-100 border border-r-0 border-gray-200 px-2.5 py-2 text-xs text-gray-500 rounded-l-lg">{prefix}</span>}
                <input type="number" value={value} onChange={e => onChange(e.target.value)} step="0.01" min="0"
                    className={`flex-1 border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all
            ${prefix ? 'rounded-r-lg' : suffix ? 'rounded-l-lg' : 'rounded-lg'}`} />
                {suffix && <span className="bg-gray-100 border border-l-0 border-gray-200 px-2.5 py-2 text-xs text-gray-500 rounded-r-lg">{suffix}</span>}
            </div>
            {hint && <p className="text-xs text-gray-400 mt-1">{hint}</p>}
        </div>
    )
}
