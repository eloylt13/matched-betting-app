'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
    loadOnboardingPreferences,
    saveOnboardingPreferences,
} from '@/lib/storage/userState'
import type { OnboardingPreferences } from '@/types/user'

type OnboardingMode = 'guiado' | 'directo' | null

interface WizardStep {
    title: string
    description: string[]
    primaryLabel: string
    primaryHref?: string
    externalHref?: string
    externalLabel?: string
}

const WIZARD_STEPS: WizardStep[] = [
    {
        title: 'Antes de empezar',
        description: [
            'Para hacer matched betting solo necesitas una base clara: una casa de apuestas, Betfair Exchange y la calculadora.',
            'No hace falta entenderlo todo de golpe. Si sigues este orden, empezar te resultar? mucho m?s f?cil.',
        ],
        primaryLabel: 'Entendido',
    },
    {
        title: 'Necesitas Betfair Exchange',
        description: [
            'Betfair Exchange te sirve para cubrir apuestas y ejecutar con m?s control desde el principio.',
            'Tenlo listo antes de empezar con tu primera casa para ir con mÃ¡s seguridad.',
        ],
        primaryLabel: 'Ya lo tengo / seguir',
        externalHref: 'https://www.betfair.es/exchange/plus/',
        externalLabel: 'Abrir Betfair Exchange',
    },
    {
        title: 'Empieza por una casa fÃ¡cil',
        description: [
            'Sportium es una buena primera opciÃ³n porque el flujo es claro, fÃ¡cil de seguir y cÃ³moda para empezar.',
        ],
        primaryLabel: 'Ir a Sportium',
        primaryHref: '/casas/sportium',
    },
    {
        title: 'Usa la calculadora cuando hagas una apuesta',
        description: [
            'La calculadora te ayuda a cubrir cada apuesta en el momento adecuado y a reducir errores antes de confirmar.',
        ],
        primaryLabel: 'Ver calculadora',
        primaryHref: '/calculadora',
    },
    {
        title: 'Ruta recomendada',
        description: [],
        primaryLabel: 'Empezar ahora',
        primaryHref: '/casas/sportium',
    },
]

export default function BienvenidaPage() {
    const router = useRouter()
    const [checking, setChecking] = useState(true)
    const [selectedMode, setSelectedMode] = useState<OnboardingMode>(null)
    const [step, setStep] = useState(0)

    useEffect(() => {
        const preferences = loadOnboardingPreferences()
        if (preferences.onboardingMode === 'guiado') {
            setSelectedMode('guiado')
        }
        if (preferences.onboardingMode === 'directo') {
            setSelectedMode('directo')
        }
        setChecking(false)
    }, [])

    const currentStep = WIZARD_STEPS[step]
    const progress = useMemo(
        () => ((step + 1) / WIZARD_STEPS.length) * 100,
        [step]
    )

    function persistPreferences(mode: NonNullable<OnboardingPreferences['onboardingMode']>) {
        saveOnboardingPreferences({
            onboardingSeen: true,
            onboardingMode: mode,
        })
    }

    function handleDirectChoice() {
        persistPreferences('directo')
        router.push('/dashboard')
    }

    function handleGuidedChoice() {
        persistPreferences('guiado')
        setSelectedMode('guiado')
        setStep(0)
    }

    function handlePrimaryAction() {
        if (!currentStep.primaryHref) {
            setStep((prev) => Math.min(prev + 1, WIZARD_STEPS.length - 1))
            return
        }

        router.push(currentStep.primaryHref)
    }

    if (checking) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
            </div>
        )
    }

    return (
        <div className="min-h-[70vh] px-4 py-10 sm:py-14">
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Beta gratuita
                    </div>

                    <h1 className="text-2xl sm:text-3xl font-bold text-stone-800 tracking-tight mb-4">
                        Bienvenido a IAPredictHub
                    </h1>

                    <p className="text-sm sm:text-base text-stone-500 leading-relaxed max-w-2xl mx-auto">
                        Entra con una ruta clara para empezar: guÃ­a, Betfair Exchange, primera casa y calculadora.
                        Si prefieres ir directo, tambiÃ©n puedes saltar al dashboard.
                    </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] items-start">
                    <div className="flex flex-col gap-4">
                        <button
                            onClick={handleGuidedChoice}
                            className={`group w-full rounded-2xl border-2 p-6 text-left transition-all hover:shadow-lg ${
                                selectedMode === 'guiado'
                                    ? 'border-emerald-400 bg-emerald-50/70'
                                    : 'border-emerald-200 bg-white hover:border-emerald-400'
                            }`}
                        >
                            <div className="flex items-start gap-4">
                                <span className="text-3xl shrink-0">ðŸš€</span>
                                <div className="flex-1 min-w-0">
                                    <h2 className="font-bold text-stone-800 text-base sm:text-lg mb-1 group-hover:text-emerald-700 transition-colors">
                                        Soy nuevo, quiero aprender
                                    </h2>
                                    <p className="text-sm text-stone-500 leading-relaxed">
                                        Te enseÃ±amos el orden recomendado para empezar sin liarte y con los pasos justos.
                                    </p>
                                </div>
                                <span className="text-emerald-500 font-semibold text-lg shrink-0 mt-1 group-hover:translate-x-1 transition-transform">
                                    â†’
                                </span>
                            </div>
                        </button>

                        <button
                            onClick={handleDirectChoice}
                            className={`group w-full rounded-2xl border p-6 text-left transition-all hover:shadow-md ${
                                selectedMode === 'directo'
                                    ? 'border-stone-300 bg-stone-50'
                                    : 'border-stone-200 bg-white hover:border-stone-300'
                            }`}
                        >
                            <div className="flex items-start gap-4">
                                <span className="text-3xl shrink-0">ðŸ“Š</span>
                                <div className="flex-1 min-w-0">
                                    <h2 className="font-bold text-stone-800 text-base sm:text-lg mb-1 group-hover:text-stone-600 transition-colors">
                                        Ya sÃ© cÃ³mo funciona
                                    </h2>
                                    <p className="text-sm text-stone-500 leading-relaxed">
                                        Entra directamente al panel para seguir casas, bonos y prÃ³ximas acciones.
                                    </p>
                                </div>
                                <span className="text-stone-400 font-semibold text-lg shrink-0 mt-1 group-hover:translate-x-1 transition-transform">
                                    â†’
                                </span>
                            </div>
                        </button>

                        <p className="text-center text-xs text-stone-400">
                            Recordaremos tu Ãºltima elecciÃ³n para no resetearte la experiencia en cada entrada.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-stone-200 bg-white p-5 sm:p-6 shadow-sm">
                        {selectedMode === 'guiado' ? (
                            <div className="flex flex-col gap-5">
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <p className="text-xs font-semibold text-emerald-600 uppercase tracking-[0.2em] mb-1">
                                            Modo guiado
                                        </p>
                                        <p className="text-sm font-semibold text-stone-700">
                                            Paso {step + 1} de {WIZARD_STEPS.length}
                                        </p>
                                    </div>
                                    <Link
                                        href="/guias"
                                        className="text-xs font-semibold text-stone-500 hover:text-stone-700 transition-colors"
                                    >
                                        Ver guÃ­as
                                    </Link>
                                </div>

                                <div className="h-2 rounded-full bg-stone-100 overflow-hidden">
                                    <div
                                        className="h-full rounded-full bg-emerald-500 transition-all duration-300"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>

                                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                                    {WIZARD_STEPS.map((wizardStep, index) => (
                                        <button
                                            key={wizardStep.title}
                                            onClick={() => setStep(index)}
                                            className={`rounded-xl px-2 py-2 text-[11px] font-semibold transition-colors ${
                                                index === step
                                                    ? 'bg-emerald-500 text-white'
                                                    : index < step
                                                        ? 'bg-emerald-50 text-emerald-700'
                                                        : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                                            }`}
                                        >
                                            Paso {index + 1}
                                        </button>
                                    ))}
                                </div>

                                <div className="rounded-2xl border border-stone-100 bg-stone-50/70 p-5">
                                    <h2 className="text-xl font-bold text-stone-800 mb-3">
                                        {currentStep.title}
                                    </h2>

                                    <div className="flex flex-col gap-2 text-sm text-stone-600 leading-relaxed">
                                        {currentStep.description.map((paragraph) => (
                                            <p key={paragraph}>{paragraph}</p>
                                        ))}

                                        {step === 4 && (
                                            <ol className="flex flex-col gap-2 text-sm text-stone-700">
                                                <li className="rounded-xl bg-white border border-stone-200 px-3 py-2">1. GuÃ­a 1</li>
                                                <li className="rounded-xl bg-white border border-stone-200 px-3 py-2">2. Betfair Exchange</li>
                                                <li className="rounded-xl bg-white border border-stone-200 px-3 py-2">3. Sportium</li>
                                                <li className="rounded-xl bg-white border border-stone-200 px-3 py-2">4. Calculadora</li>
                                            </ol>
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3">
                                    {currentStep.externalHref && currentStep.externalLabel && (
                                        <a
                                            href={currentStep.externalHref}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm font-semibold text-stone-700 hover:bg-stone-50 transition-colors"
                                        >
                                            {currentStep.externalLabel}
                                        </a>
                                    )}

                                    <button
                                        onClick={handlePrimaryAction}
                                        className="flex-1 rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-400 transition-colors"
                                    >
                                        {currentStep.primaryLabel}
                                    </button>
                                </div>

                                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-stone-400">
                                    <button
                                        onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
                                        disabled={step === 0}
                                        className="disabled:opacity-40 hover:text-stone-600 transition-colors"
                                    >
                                        â† Paso anterior
                                    </button>
                                    <span className="sm:text-right">Ruta recomendada para empezar con menos fricciÃ³n</span>
                                </div>
                            </div>
                        ) : (
                            <div className="flex min-h-[360px] flex-col items-center justify-center rounded-2xl border border-dashed border-stone-200 bg-stone-50 px-6 text-center">
                                <p className="text-xs font-semibold text-stone-400 uppercase tracking-[0.2em] mb-3">
                                    Entrada guiada
                                </p>
                                <h2 className="text-xl font-bold text-stone-800 mb-3">
                                    Elige cÃ³mo quieres entrar
                                </h2>
                                <p className="text-sm text-stone-500 max-w-md leading-relaxed">
                                    Si estÃ¡s empezando, te mostramos una ruta corta y visual para ir de la guÃ­a a tu primera casa
                                    sin perderte entre pantallas.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

