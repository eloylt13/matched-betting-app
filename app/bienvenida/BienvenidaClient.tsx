'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
    loadOnboardingPreferences,
    saveOnboardingPreferences,
} from '@/lib/storage/userState'
import type { OnboardingPreferences } from '@/types/user'

type OnboardingMode = 'guiado' | 'directo' | null
type Market = 'espana' | 'latam'

interface WizardStep {
    title: string
    description: string[]
    primaryLabel: string
    primaryHref?: string
    externalHref?: string
    externalLabel?: string
}

const WIZARD_STEPS_ESPANA: WizardStep[] = [
    {
        title: 'Antes de empezar',
        description: [
            'Para hacer matched betting solo necesitas una base clara: una casa de apuestas, Betfair Exchange y la calculadora.',
            'No hace falta entenderlo todo de golpe. Si sigues este orden, empezar te resultará mucho más fácil.',
        ],
        primaryLabel: 'Entendido',
    },
    {
        title: 'Necesitas Betfair Exchange',
        description: [
            'Betfair Exchange te sirve para cubrir apuestas y ejecutar con más control desde el principio.',
            'Tenlo listo antes de empezar con tu primera casa para ir con más seguridad.',
        ],
        primaryLabel: 'Ya lo tengo / seguir',
        externalHref: 'https://www.betfair.es/exchange/plus/',
        externalLabel: 'Abrir Betfair Exchange',
    },
    {
        title: 'Empieza por una casa fácil',
        description: [
            'Versus es una buena primera opción porque el flujo es claro, fácil de seguir y cómoda para empezar.',
        ],
        primaryLabel: 'Ir a Versus',
        primaryHref: '/casas/versus',
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
        primaryHref: '/casas/versus',
    },
]

const WIZARD_STEPS_LATAM: WizardStep[] = [
    {
        title: 'Antes de empezar',
        description: [
            'Para hacer matched betting solo necesitas una base clara: una casa de apuestas, Betfair Exchange y la calculadora.',
            'No hace falta entenderlo todo de golpe. Si sigues este orden, empezar te resultará mucho más fácil.',
        ],
        primaryLabel: 'Entendido',
    },
    {
        title: 'Necesitas Betfair Exchange',
        description: [
            'Betfair Exchange está disponible en la mayoría de países LATAM y te sirve para cubrir apuestas.',
            'Tenlo listo antes de empezar con tu primera casa.',
        ],
        primaryLabel: 'Ya lo tengo / seguir',
        externalHref: 'https://apuestas.betfair.es/latinoamerica/',
        externalLabel: 'Abrir Betfair Exchange LATAM',
    },
    {
        title: 'Empieza por Betfair Sportsbook',
        description: [
            'Betfair Sportsbook es la mejor primera opción en LATAM: disponible en 15 países, apuesta 10 USD y recibe 10 USD. Código ZRW10M.',
        ],
        primaryLabel: 'Ver bono',
        primaryHref: '/casas/betfair-sportsbook-latam',
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
        primaryHref: '/casas/betfair-sportsbook-latam',
    },
]

export default function BienvenidaClient() {
    const router = useRouter()
    const [checking, setChecking] = useState(true)
    const [selectedMode, setSelectedMode] = useState<OnboardingMode>(null)
    const [step, setStep] = useState(0)
    const [market, setMarket] = useState<Market>('espana')
    const WIZARD_STEPS = market === 'espana' ? WIZARD_STEPS_ESPANA : WIZARD_STEPS_LATAM
    const wizardRef = useRef<HTMLDivElement | null>(null)

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

    useEffect(() => {
        if (selectedMode === 'guiado') {
            wizardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }, [selectedMode])

    const currentStep = WIZARD_STEPS[step]
    const progress = useMemo(
        () => ((step + 1) / WIZARD_STEPS.length) * 100,
        [step, WIZARD_STEPS]
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
            <div className="flex justify-center py-10">
                <div className="w-6 h-6 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-2 mb-2">
                <button
                    type="button"
                    onClick={() => {
                        setMarket('espana')
                        setStep(0)
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-colors border ${
                        market === 'espana'
                            ? 'bg-emerald-500 border-emerald-500 text-white'
                            : 'bg-white border-stone-200 text-stone-500 hover:border-stone-400'
                    }`}
                >
                    🇪🇸 España
                </button>
                <button
                    type="button"
                    onClick={() => {
                        setMarket('latam')
                        setStep(0)
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-colors border ${
                        market === 'latam'
                            ? 'bg-emerald-500 border-emerald-500 text-white'
                            : 'bg-white border-stone-200 text-stone-500 hover:border-stone-400'
                    }`}
                >
                    🌎 LATAM
                </button>
            </div>

            <button
                onClick={handleGuidedChoice}
                className={`group w-full rounded-2xl border-2 p-6 text-left transition-all hover:shadow-lg ${
                    selectedMode === 'guiado'
                        ? 'border-emerald-400 bg-emerald-50/70'
                        : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
            >
                <div className="flex items-start gap-4">
                    <div className="flex-1 min-w-0">
                        <h2 className="font-bold text-stone-800 text-base sm:text-lg mb-1 group-hover:text-emerald-700 transition-colors">
                            Soy nuevo, quiero aprender
                        </h2>
                        <p className="text-sm text-stone-500 leading-relaxed">
                            Te enseñamos el orden recomendado para empezar sin liarte y con los pasos justos.
                        </p>
                    </div>
                    <span className="text-emerald-500 font-semibold text-sm shrink-0 mt-1">Ver guía</span>
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
                    <div className="flex-1 min-w-0">
                        <h2 className="font-bold text-stone-800 text-base sm:text-lg mb-1 group-hover:text-stone-600 transition-colors">
                            Ya sé cómo funciona
                        </h2>
                        <p className="text-sm text-stone-500 leading-relaxed">
                            Entra directamente al panel para seguir casas, bonos y próximas acciones.
                        </p>
                    </div>
                    <span className="text-stone-400 font-semibold text-sm shrink-0 mt-1">Ir al panel</span>
                </div>
            </button>

            <p className="text-center text-xs text-stone-400">
                Recordaremos tu última elección para no resetearte la experiencia en cada entrada.
            </p>

            {selectedMode === 'guiado' && currentStep && (
                <section
                    ref={wizardRef}
                    className="rounded-3xl border border-stone-200 bg-white p-5 sm:p-6 shadow-sm"
                >
                    <div className="flex items-center justify-between gap-3 mb-4">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 mb-1">
                                Paso {step + 1} de {WIZARD_STEPS.length}
                            </p>
                            <h2 className="text-xl sm:text-2xl font-bold text-stone-800">
                                {currentStep.title}
                            </h2>
                        </div>
                        <span className="text-xs font-medium text-stone-500">
                            {Math.round(progress)}%
                        </span>
                    </div>

                    <div className="mb-5 h-2 rounded-full bg-stone-100 overflow-hidden">
                        <div
                            className="h-full rounded-full bg-emerald-500 transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <div className="space-y-3 text-sm leading-relaxed text-stone-600">
                        {currentStep.description.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>

                    {currentStep.title === 'Ruta recomendada' && (
                        <div className="mt-5 rounded-2xl border border-stone-100 bg-stone-50 p-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500 mb-3">
                                Orden recomendado
                            </p>
                            <ol className="space-y-2 text-sm text-stone-700">
                                <li>1. Guía inicial</li>
                                <li>2. Betfair Exchange</li>
                                <li>3. {market === 'espana' ? 'Versus' : 'Betfair Sportsbook LATAM'}</li>
                                <li>4. Calculadora</li>
                            </ol>
                        </div>
                    )}

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                        {currentStep.externalHref && (
                            <a
                                href={currentStep.externalHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-2xl border border-stone-200 px-4 py-3 text-sm font-semibold text-stone-700 hover:bg-stone-50 transition-colors"
                            >
                                {currentStep.externalLabel}
                            </a>
                        )}

                        <button
                            onClick={handlePrimaryAction}
                            className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-400 transition-colors"
                        >
                            {currentStep.primaryLabel}
                        </button>
                    </div>
                </section>
            )}
        </div>
    )
}
