'use client'
// app/herramientas/page.tsx

import { useState } from 'react'
import Link from 'next/link'

export default function HerramientasPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Herramientas</h1>
                <p className="text-gray-500 text-sm mt-1">Calculadoras para Oddsmatcher y Dutcher</p>
            </div>

            {/* Oddspedia Banner */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <p className="text-white font-bold text-lg">📊 Comparar cuotas en tiempo real</p>
                    <p className="text-blue-200 text-sm mt-1">
                        Usa <strong className="text-white">Oddspedia</strong> para encontrar los mejores ratings antes de calcular.
                        Busca el evento, copia las cuotas y pégalas en la calculadora.
                    </p>
                </div>
                <a
                    href="https://oddspedia.com/es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 bg-white text-blue-800 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-blue-50 transition-colors"
                >
                    Abrir Oddspedia →
                </a>
            </div>

            {/* Cards herramientas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/herramientas/oddsmatcher" className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-teal-200 transition-all">
                    <div className="flex items-start gap-4">
                        <div className="bg-teal-100 text-teal-600 rounded-xl p-3 text-2xl">⚡</div>
                        <div>
                            <h2 className="font-bold text-gray-900 text-lg group-hover:text-teal-600 transition-colors">Oddsmatcher</h2>
                            <p className="text-xs text-teal-600 font-semibold mt-0.5">Bookmaker + Exchange (Betfair)</p>
                            <p className="text-sm text-gray-500 mt-2">
                                Calculadora para apuestas FAVOR + CONTRA. La estrategia estándar del matched betting.
                                Introduce las cuotas del bookmaker y de Betfair Exchange.
                            </p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                <Tag>Dinero Real</Tag>
                                <Tag>Apuesta Gratis</Tag>
                                <Tag>Reembolso</Tag>
                                <Tag>Rollover</Tag>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/herramientas/dutcher" className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-purple-200 transition-all">
                    <div className="flex items-start gap-4">
                        <div className="bg-purple-100 text-purple-600 rounded-xl p-3 text-2xl">🔀</div>
                        <div>
                            <h2 className="font-bold text-gray-900 text-lg group-hover:text-purple-600 transition-colors">Dutcher</h2>
                            <p className="text-xs text-purple-600 font-semibold mt-0.5">Dos bookmakers · sin exchange</p>
                            <p className="text-sm text-gray-500 mt-2">
                                Calculadora para apuestas FAVOR + FAVOR en dos bookmakers distintos.
                                Útil cuando no hay buena liquidez en el exchange.
                            </p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                <Tag color="purple">Dinero Real</Tag>
                                <Tag color="purple">Apuesta Gratis</Tag>
                                <Tag color="purple">Over/Under</Tag>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Explicación */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                <h2 className="font-bold text-gray-800">¿Cómo usar estas herramientas?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <Step n={1} title="Busca el evento" desc="Abre Oddspedia, encuentra un partido con rating alto y copia las cuotas." />
                    <Step n={2} title="Abre la calculadora" desc="Usa Oddsmatcher (con Betfair) o Dutcher (dos bookmakers). Pega las cuotas." />
                    <Step n={3} title="Ejecuta la apuesta" desc="La calculadora te dice exactamente cuánto apostar en cada lado para garantizar el beneficio." />
                </div>
            </div>
        </div>
    )
}

function Tag({ children, color = 'teal' }: { children: React.ReactNode; color?: string }) {
    const colors: Record<string, string> = {
        teal: 'bg-teal-50 text-teal-700',
        purple: 'bg-purple-50 text-purple-700',
    }
    return (
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${colors[color] ?? colors.teal}`}>
            {children}
        </span>
    )
}

function Step({ n, title, desc }: { n: number; title: string; desc: string }) {
    return (
        <div className="flex gap-3">
            <div className="w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{n}</div>
            <div>
                <p className="font-semibold text-gray-800">{title}</p>
                <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
            </div>
        </div>
    )
}
