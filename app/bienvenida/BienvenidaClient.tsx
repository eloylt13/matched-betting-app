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
    advanceOnPrimaryNavigation?: boolean
    secondaryLabel?: string
    secondaryHref?: string
    externalHref?: string
    externalLabel?: string
}

const MARKET_SELECTION_STEP: WizardStep = {
    title: '¿Desde dónde apuestas?',
    description: [
        'Elige tu mercado para adaptar la ruta, las casas recomendadas y los enlaces importantes desde el primer paso.',
    ],
    primaryLabel: 'Elegir mercado',
}

interface GuidedWizardProgress {
    market: Market
    step: number
}

const GUIDED_WIZARD_PROGRESS_KEY = 'mb_bienvenida_guided_progress'

function isMarket(value: unknown): value is Market {
    return value === 'espana' || value === 'latam'
}

function getWizardStepsLength(nextMarket: Market): number {
    return nextMarket === 'espana' ? WIZARD_STEPS_ESPANA.length : WIZARD_STEPS_LATAM.length
}

function normalizeGuidedWizardProgress(progress: GuidedWizardProgress): GuidedWizardProgress {
    const maxStep = getWizardStepsLength(progress.market) - 1

    return {
        market: progress.market,
        step: Math.min(Math.max(progress.step, 0), maxStep),
    }
}

function loadGuidedWizardProgress(): GuidedWizardProgress | null {
    if (typeof window === 'undefined') return null

    try {
        const raw = localStorage.getItem(GUIDED_WIZARD_PROGRESS_KEY)
        if (!raw) return null

        const parsed: unknown = JSON.parse(raw)
        if (
            typeof parsed !== 'object' ||
            parsed === null ||
            !('market' in parsed) ||
            !('step' in parsed)
        ) {
            return null
        }

        const progress = parsed as Record<'market' | 'step', unknown>
        if (!isMarket(progress.market) || typeof progress.step !== 'number') {
            return null
        }

        return normalizeGuidedWizardProgress({
            market: progress.market,
            step: progress.step,
        })
    } catch {
        return null
    }
}

function saveGuidedWizardProgress(progress: GuidedWizardProgress): void {
    if (typeof window === 'undefined') return
    localStorage.setItem(
        GUIDED_WIZARD_PROGRESS_KEY,
        JSON.stringify(normalizeGuidedWizardProgress(progress))
    )
}

const WIZARD_STEPS_ESPANA: WizardStep[] = [
    MARKET_SELECTION_STEP,
    {
        title: 'Antes de empezar',
        description: [
            'Para hacer matched betting solo necesitas una base clara: una casa de apuestas, Betfair Exchange y la calculadora.',
            'No hace falta entenderlo todo de golpe. Si sigues este orden, empezar te resultará mucho más fácil.',
        ],
        primaryLabel: 'Entendido',
    },
    {
        title: 'Betfair Exchange es la vía recomendada',
        description: [
            'Betfair Exchange te ayuda a empezar con más control y suele ser la ruta más clara para cubrir apuestas.',
            'Si prefieres empezar sin Exchange, también puedes continuar y avanzar al siguiente paso.',
        ],
        primaryLabel: 'Ya lo tengo / seguir',
        secondaryLabel: 'Prefiero empezar sin Exchange',
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
        advanceOnPrimaryNavigation: true,
        secondaryLabel: 'Ya tengo Versus / ver otras casas',
        secondaryHref: '/casas',
    },
    {
        title: 'Usa la calculadora cuando hagas una apuesta',
        description: [
            'La calculadora te ayuda a cubrir cada apuesta en el momento adecuado y a reducir errores antes de confirmar.',
        ],
        primaryLabel: 'Ver calculadora',
        primaryHref: '/calculadora',
        advanceOnPrimaryNavigation: true,
    },
    {
        title: 'Ruta recomendada',
        description: [],
        primaryLabel: 'Empezar ahora',
        primaryHref: '/casas/versus',
    },
]

const WIZARD_STEPS_LATAM: WizardStep[] = [
    MARKET_SELECTION_STEP,
    {
        title: 'Antes de empezar',
        description: [
            'Para hacer matched betting solo necesitas una base clara: una casa de apuestas, Betfair Exchange y la calculadora.',
            'No hace falta entenderlo todo de golpe. Si sigues este orden, empezar te resultará mucho más fácil.',
        ],
        primaryLabel: 'Entendido',
    },
    {
        title: 'Betfair Exchange es la vía recomendada',
        description: [
            'Betfair Exchange te ayuda a empezar con más control y suele ser la ruta más clara para cubrir apuestas.',
            'Si prefieres empezar sin Exchange, también puedes continuar y avanzar al siguiente paso.',
        ],
        primaryLabel: 'Ya lo tengo / seguir',
        secondaryLabel: 'Prefiero empezar sin Exchange',
        externalHref: 'https://apuestas.betfair.es/latinoamerica/',
        externalLabel: 'Abrir Betfair Exchange LATAM',
    },
    {
        title: 'Empieza por una casa fácil',
        description: [
            'Betfair Sportsbook es la mejor primera opción en LATAM: disponible en 15 países, apuesta 10 USD y recibe 10 USD. Código ZRW10M.',
        ],
        primaryLabel: 'Ver bono',
        primaryHref: '/casas/betfair-sportsbook-latam',
        advanceOnPrimaryNavigation: true,
    },
    {
        title: 'Usa la calculadora cuando hagas una apuesta',
        description: [
            'La calculadora te ayuda a cubrir cada apuesta en el momento adecuado y a reducir errores antes de confirmar.',
        ],
        primaryLabel: 'Ver calculadora',
        primaryHref: '/calculadora',
        advanceOnPrimaryNavigation: true,
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
        const guidedProgress = loadGuidedWizardProgress()

        if (guidedProgress) {
            setMarket(guidedProgress.market)
            setStep(guidedProgress.step)
        }

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

    useEffect(() => {
        if (checking || selectedMode !== 'guiado') return
        saveGuidedWizardProgress({ market, step })
    }, [checking, market, selectedMode, step])

    const currentStep = WIZARD_STEPS[step]
    const isMarketSelectionStep = currentStep?.title === '¿Desde dónde apuestas?'
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
        const guidedProgress = loadGuidedWizardProgress()
        if (guidedProgress) {
            setMarket(guidedProgress.market)
            setStep(guidedProgress.step)
        }
        setSelectedMode('guiado')
    }

    function handleMarketChoice(nextMarket: Market) {
        setMarket(nextMarket)
        setStep(1)
    }

    function handlePrimaryAction() {
        if (!currentStep.primaryHref) {
            setStep((prev) => Math.min(prev + 1, WIZARD_STEPS.length - 1))
            return
        }

        if (currentStep.advanceOnPrimaryNavigation) {
            const nextStep = Math.min(step + 1, WIZARD_STEPS.length - 1)
            setStep(nextStep)
            saveGuidedWizardProgress({ market, step: nextStep })
        }

        router.push(currentStep.primaryHref)
    }

    if (checking) {
        return (
            <div className="flex justify-center py-10">
                <div className="h-7 w-7 animate-spin rounded-full border-2 border-violet-300 border-t-transparent shadow-[0_0_24px_rgba(167,139,250,0.35)]" />
            </div>
        )
    }

    return (
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 sm:gap-5">
            <div className="rounded-lg border border-white/10 bg-white/[0.045] p-1.5 shadow-[0_18px_48px_rgba(0,0,0,0.16)] backdrop-blur-md">
                <div className="grid grid-cols-2 gap-1.5">
                    <button
                        type="button"
                        onClick={() => {
                            setMarket('espana')
                            setStep(0)
                        }}
                        className={`rounded-lg px-4 py-2.5 text-sm font-bold transition-all duration-200 ${
                            market === 'espana'
                                ? 'border border-violet-200/45 bg-violet-500 text-white shadow-[0_14px_34px_rgba(124,58,237,0.28)]'
                                : 'border border-transparent text-slate-300 hover:border-white/12 hover:bg-white/[0.055] hover:text-white'
                        }`}
                    >
                        España
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setMarket('latam')
                            setStep(0)
                        }}
                        className={`rounded-lg px-4 py-2.5 text-sm font-bold transition-all duration-200 ${
                            market === 'latam'
                                ? 'border border-violet-200/45 bg-violet-500 text-white shadow-[0_14px_34px_rgba(124,58,237,0.28)]'
                                : 'border border-transparent text-slate-300 hover:border-white/12 hover:bg-white/[0.055] hover:text-white'
                        }`}
                    >
                        LATAM
                    </button>
                </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                <button
                    type="button"
                    onClick={handleGuidedChoice}
                    className={`group relative min-h-full overflow-hidden rounded-lg border p-5 text-left transition-all duration-200 before:pointer-events-none before:absolute before:inset-x-5 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-violet-200/45 before:to-transparent hover:-translate-y-0.5 sm:p-6 ${
                        selectedMode === 'guiado'
                            ? 'border-violet-200/45 bg-violet-500/14 shadow-[0_24px_64px_rgba(76,29,149,0.28),inset_0_1px_0_rgba(255,255,255,0.08)]'
                            : 'border-white/10 bg-white/[0.055] shadow-[0_18px_48px_rgba(0,0,0,0.14),inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-violet-200/30 hover:bg-white/[0.075] hover:shadow-[0_24px_58px_rgba(76,29,149,0.2)]'
                    }`}
                >
                    <div className="relative flex h-full flex-col justify-between gap-5">
                        <div>
                            <span className="mb-4 inline-flex rounded-full border border-violet-200/20 bg-violet-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-100">
                                Guiado
                            </span>
                            <h2 className="text-lg font-bold text-white transition-colors group-hover:text-violet-100">
                                Soy nuevo, quiero aprender
                            </h2>
                            <p className="mt-2 text-sm leading-relaxed text-slate-300">
                                Te enseñamos el orden recomendado para empezar sin liarte y con los pasos justos.
                            </p>
                        </div>
                        <span className="text-sm font-semibold text-violet-200 transition-transform duration-200 group-hover:translate-x-1">
                            Ver guía
                        </span>
                    </div>
                </button>

                <button
                    type="button"
                    onClick={handleDirectChoice}
                    className={`group relative min-h-full overflow-hidden rounded-lg border p-5 text-left transition-all duration-200 before:pointer-events-none before:absolute before:inset-x-5 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent hover:-translate-y-0.5 sm:p-6 ${
                        selectedMode === 'directo'
                            ? 'border-white/25 bg-white/[0.09] shadow-[0_20px_54px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.08)]'
                            : 'border-white/10 bg-white/[0.045] shadow-[0_18px_48px_rgba(0,0,0,0.13),inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-white/20 hover:bg-white/[0.07] hover:shadow-[0_24px_58px_rgba(15,23,42,0.24)]'
                    }`}
                >
                    <div className="relative flex h-full flex-col justify-between gap-5">
                        <div>
                            <span className="mb-4 inline-flex rounded-full border border-white/15 bg-white/[0.055] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200">
                                Directo
                            </span>
                            <h2 className="text-lg font-bold text-white transition-colors group-hover:text-slate-100">
                                Ya sé cómo funciona
                            </h2>
                            <p className="mt-2 text-sm leading-relaxed text-slate-300">
                                Entra directamente al panel para seguir casas, bonos y próximas acciones.
                            </p>
                        </div>
                        <span className="text-sm font-semibold text-slate-200 transition-transform duration-200 group-hover:translate-x-1">
                            Ir al panel
                        </span>
                    </div>
                </button>
            </div>

            <p className="text-center text-xs leading-relaxed text-slate-400">
                Recordaremos tu última elección para no resetearte la experiencia en cada entrada.
            </p>

            {selectedMode === 'guiado' && currentStep && (
                <section
                    ref={wizardRef}
                    className="relative mt-2 overflow-hidden rounded-lg border border-white/10 bg-[#101126]/78 p-5 shadow-[0_26px_80px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl sm:p-6"
                >
                    <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-violet-200/45 to-transparent" />
                    <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-violet-500/12 blur-3xl" />

                    <div className="relative flex items-start justify-between gap-4">
                        <div className="min-w-0">
                            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-violet-200/80">
                                Paso {step + 1} de {WIZARD_STEPS.length}
                            </p>
                            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                {currentStep.title}
                            </h2>
                        </div>
                        <span className="shrink-0 rounded-full border border-violet-200/20 bg-violet-300/10 px-3 py-1 text-xs font-semibold text-violet-100">
                            {Math.round(progress)}%
                        </span>
                    </div>

                    <div className="relative my-5 h-2 overflow-hidden rounded-full border border-white/8 bg-white/[0.06]">
                        <div
                            className="h-full rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-300 to-violet-300 shadow-[0_0_22px_rgba(167,139,250,0.48)] transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <div className="relative space-y-3 text-sm leading-relaxed text-slate-300">
                        {currentStep.description.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>

                    {isMarketSelectionStep && (
                        <div className="relative mt-6 grid gap-3 sm:grid-cols-2">
                            <button
                                type="button"
                                onClick={() => handleMarketChoice('espana')}
                                className={`rounded-lg border p-4 text-left transition-all duration-200 hover:-translate-y-0.5 ${
                                    market === 'espana'
                                        ? 'border-violet-200/45 bg-violet-500/14 text-white shadow-[0_18px_42px_rgba(124,58,237,0.18)]'
                                        : 'border-white/10 bg-white/[0.045] text-slate-200 hover:border-violet-200/28 hover:bg-white/[0.07]'
                                }`}
                            >
                                <span className="block text-sm font-bold">España</span>
                                <span className="mt-1.5 block text-xs leading-relaxed text-slate-400">
                                    Ruta con Versus como primera casa recomendada.
                                </span>
                            </button>

                            <button
                                type="button"
                                onClick={() => handleMarketChoice('latam')}
                                className={`rounded-lg border p-4 text-left transition-all duration-200 hover:-translate-y-0.5 ${
                                    market === 'latam'
                                        ? 'border-violet-200/45 bg-violet-500/14 text-white shadow-[0_18px_42px_rgba(124,58,237,0.18)]'
                                        : 'border-white/10 bg-white/[0.045] text-slate-200 hover:border-violet-200/28 hover:bg-white/[0.07]'
                                }`}
                            >
                                <span className="block text-sm font-bold">LATAM</span>
                                <span className="mt-1.5 block text-xs leading-relaxed text-slate-400">
                                    Ruta con Betfair Sportsbook LATAM como primera casa recomendada.
                                </span>
                            </button>
                        </div>
                    )}

                    {currentStep.title === 'Ruta recomendada' && (
                        <div className="relative mt-6 rounded-lg border border-white/10 bg-white/[0.045] p-4 shadow-inner shadow-white/[0.03]">
                            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-200/75">
                                Orden recomendado
                            </p>
                            <ol className="space-y-2 text-sm text-slate-300">
                                <li>1. Guía inicial</li>
                                <li>2. Betfair Exchange</li>
                                <li>3. {market === 'espana' ? 'Versus' : 'Betfair Sportsbook LATAM'}</li>
                                <li>4. Calculadora</li>
                            </ol>
                        </div>
                    )}

                    {!isMarketSelectionStep && (
                        <div className="relative mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                            {currentStep.externalHref && (
                                <a
                                    href={currentStep.externalHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-lg border border-white/14 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(0,0,0,0.14)] backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-200/30 hover:bg-white/[0.085]"
                                >
                                    {currentStep.externalLabel}
                                </a>
                            )}

                            <button
                                type="button"
                                onClick={handlePrimaryAction}
                                className="inline-flex items-center justify-center rounded-lg border border-violet-200/45 bg-violet-500 px-5 py-3 text-sm font-bold text-white shadow-[0_18px_42px_rgba(124,58,237,0.34)] transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-100/70 hover:bg-violet-400 hover:shadow-[0_22px_52px_rgba(139,92,246,0.42)]"
                            >
                                {currentStep.primaryLabel}
                            </button>

                            {currentStep.secondaryLabel && (
                                <button
                                    type="button"
                                    onClick={() => {
                                        if (currentStep.secondaryHref) {
                                            router.push(currentStep.secondaryHref)
                                            return
                                        }
                                        setStep((prev) => Math.min(prev + 1, WIZARD_STEPS.length - 1))
                                    }}
                                    className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.035] px-5 py-3 text-sm font-semibold text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.065] hover:text-white sm:px-4"
                                >
                                    {currentStep.secondaryLabel}
                                </button>
                            )}
                        </div>
                    )}
                </section>
            )}
        </div>
    )
}
