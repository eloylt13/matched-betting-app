// app/bienvenida/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function BienvenidaPage() {
    const router = useRouter()
    const [checking, setChecking] = useState(true)

    useEffect(() => {
        const choice = localStorage.getItem('onboarding_choice')
        if (choice === 'guias' || choice === 'dashboard') {
            router.replace(`/${choice}`)
        } else {
            setChecking(false)
        }
    }, [router])

    function handleChoice(path: 'guias' | 'dashboard') {
        localStorage.setItem('onboarding_choice', path)
        router.push(`/${path}`)
    }

    // Mientras comprueba localStorage no mostramos nada (evita flash)
    if (checking) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
            </div>
        )
    }

    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <div className="w-full max-w-lg">
                {/* Encabezado */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Beta gratuita
                    </div>

                    <h1 className="text-2xl sm:text-3xl font-bold text-stone-800 tracking-tight mb-4">
                        ¡Bienvenido a IAPredictHub!
                    </h1>

                    <p className="text-sm sm:text-base text-stone-500 leading-relaxed max-w-md mx-auto">
                        Las casas de apuestas ofrecen hasta <strong className="text-stone-700">2.000€ en bonos de bienvenida</strong> a
                        nuevos usuarios. Esta app te ayuda a entender cómo funcionan,
                        calcular cada paso y llevar todo organizado.
                    </p>
                </div>

                {/* Dos caminos */}
                <div className="flex flex-col gap-4">
                    {/* Opción 1 — Soy nuevo */}
                    <button
                        onClick={() => handleChoice('guias')}
                        className="group w-full bg-white rounded-2xl border-2 border-emerald-200 hover:border-emerald-400 p-6 text-left transition-all hover:shadow-lg"
                    >
                        <div className="flex items-start gap-4">
                            <span className="text-3xl shrink-0">🚀</span>
                            <div className="flex-1 min-w-0">
                                <h2 className="font-bold text-stone-800 text-base sm:text-lg mb-1 group-hover:text-emerald-700 transition-colors">
                                    Soy nuevo, quiero aprender
                                </h2>
                                <p className="text-sm text-stone-500 leading-relaxed">
                                    Te llevamos a las guías paso a paso para que entiendas todo desde el principio.
                                </p>
                            </div>
                            <span className="text-emerald-500 font-semibold text-lg shrink-0 mt-1 group-hover:translate-x-1 transition-transform">
                                →
                            </span>
                        </div>
                    </button>

                    {/* Opción 2 — Ya sé cómo funciona */}
                    <button
                        onClick={() => handleChoice('dashboard')}
                        className="group w-full bg-white rounded-2xl border border-stone-200 hover:border-stone-300 p-6 text-left transition-all hover:shadow-md"
                    >
                        <div className="flex items-start gap-4">
                            <span className="text-3xl shrink-0">📊</span>
                            <div className="flex-1 min-w-0">
                                <h2 className="font-bold text-stone-800 text-base sm:text-lg mb-1 group-hover:text-stone-600 transition-colors">
                                    Ya sé cómo funciona
                                </h2>
                                <p className="text-sm text-stone-500 leading-relaxed">
                                    Ir directamente al panel para empezar a operar y hacer seguimiento.
                                </p>
                            </div>
                            <span className="text-stone-400 font-semibold text-lg shrink-0 mt-1 group-hover:translate-x-1 transition-transform">
                                →
                            </span>
                        </div>
                    </button>
                </div>

                {/* Nota inferior */}
                <p className="text-center text-xs text-stone-400 mt-8">
                    Podrás cambiar esto después desde cualquier sección de la app.
                </p>
            </div>
        </div>
    )
}
