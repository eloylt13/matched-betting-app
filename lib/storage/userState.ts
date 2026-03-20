// lib/storage/userState.ts

import type { UserState, ProgresoCasa, Bono, EntradaHistorial } from './schema'
import type { OnboardingPreferences } from '@/types/user'
import { initialUserState } from './schema'

const STORAGE_KEY = 'mb_user_state'
const ONBOARDING_KEY = 'mb_onboarding_preferences'

export function loadState(): UserState {
    if (typeof window === 'undefined') return initialUserState
    try {
        const raw = localStorage.getItem(STORAGE_KEY)
        if (!raw) return initialUserState
        return JSON.parse(raw) as UserState
    } catch {
        return initialUserState
    }
}

export function saveState(state: UserState): void {
    if (typeof window === 'undefined') return
    const updated = { ...state, updatedAt: new Date().toISOString() }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
}

export function actualizarProgresoCasa(casaId: string, datos: Partial<ProgresoCasa>): void {
    const state = loadState()
    state.progresos[casaId] = { ...state.progresos[casaId], casaId, ...datos }
    saveState(state)
}

export function agregarBono(bono: Omit<Bono, 'id' | 'fechaRecibido'>): void {
    const state = loadState()
    const nuevo: Bono = {
        ...bono,
        id: crypto.randomUUID(),
        fechaRecibido: new Date().toISOString(),
    }
    state.bonos.push(nuevo)
    saveState(state)
}

export function limpiarBono(bonoId: string): void {
    const state = loadState()
    const bono = state.bonos.find(b => b.id === bonoId)
    if (bono) {
        bono.limpiado = true
        bono.fechaLimpiado = new Date().toISOString()
    }
    saveState(state)
}

export function agregarHistorial(entrada: Omit<EntradaHistorial, 'id' | 'fecha'>): void {
    const state = loadState()
    const nueva: EntradaHistorial = {
        ...entrada,
        id: crypto.randomUUID(),
        fecha: new Date().toISOString(),
    }
    state.historial.unshift(nueva)
    saveState(state)
}

export function resetState(): void {
    if (typeof window === 'undefined') return
    localStorage.removeItem(STORAGE_KEY)
}

export function loadOnboardingPreferences(): OnboardingPreferences {
    if (typeof window === 'undefined') return { onboardingSeen: false }

    try {
        const raw = localStorage.getItem(ONBOARDING_KEY)
        if (!raw) return { onboardingSeen: false }

        const parsed = JSON.parse(raw) as OnboardingPreferences
        return {
            onboardingSeen: Boolean(parsed.onboardingSeen),
            onboardingMode: parsed.onboardingMode,
        }
    } catch {
        return { onboardingSeen: false }
    }
}

export function saveOnboardingPreferences(preferences: OnboardingPreferences): void {
    if (typeof window === 'undefined') return
    localStorage.setItem(ONBOARDING_KEY, JSON.stringify(preferences))
}
