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
            'Sportium es una buena primera opción porque el flujo es claro, fácil de seguir y cómoda para empezar.',
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
                <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
                        Beta gratuita
                    </div>

                    <h1 className="text-2xl sm:text-3xl font-bold text-stone-800 tracking-tight mb-4">
                        Bienvenido a IAPredictHub
                    </h1>

                    <p className="text-sm sm:text-base text-stone-500 leading-relaxed max-w-2xl mx-auto">
                        Entra con una ruta clara para empezar: guía, Betfair Exchange, primera casa y calculadora.
                        Si prefieres ir directo, también puedes saltar al dashboard.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
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
                    </div>

                </div>
            </div>
        </div>
    )
}
