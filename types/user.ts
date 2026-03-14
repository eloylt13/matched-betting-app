// types/user.ts

import type { ModoCalculo, EstadoCasa } from './presets'

export interface Bono {
    id: string
    tipo: 'freebet' | 'reembolso' | 'otro'
    casaId: string
    casaNombre: string
    valor: number
    fechaRecibido: string
    limpiado: boolean
    fechaLimpiado?: string
    notas?: string
}

export interface EntradaHistorial {
    id: string
    fecha: string
    casaId?: string
    casaNombre?: string
    modo: ModoCalculo
    stake: number
    resultado: number
    notas?: string
}

export interface ProgresoCasa {
    casaId: string
    estado: EstadoCasa
    faseActual?: number
    fechaInicio?: string
    fechaCompletada?: string
    notas?: string
}

export interface UserState {
    version: number
    progresos: Record<string, ProgresoCasa>
    bonos: Bono[]
    historial: EntradaHistorial[]
    updatedAt: string
}

export const initialUserState: UserState = {
    version: 1,
    progresos: {},
    bonos: [],
    historial: [],
    updatedAt: new Date().toISOString(),
}