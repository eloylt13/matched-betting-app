// types/presets.ts

export type ModoCalculo =
    | 'cualificante'
    | 'freebet'
    | 'reembolso'
    | 'rollover'
    | 'bonos'
    | 'dutcher'
    | 'dinero-real'
    | 'apuesta-gratis'

// Valores originales del proyecto — NO cambiar
export type EstadoCasa = 'no_empezada' | 'en_progreso' | 'en_curso' | 'completada' | 'descartada'

export type Pais = 'espana'

export type Tipologia = 'apuesta-recibe' | 'reembolso' | 'rollover' | 'exchange'

export interface SiguientePaso {
    accion: string
    modo?: ModoCalculo
    urgente?: boolean
}

export interface Fase {
    id: string
    numero: number
    titulo: string
    descripcion: string
    modo: ModoCalculo
    stakeRecomendado: number
    freebetEstimada?: number
    reembolsoEstimado?: number
    alertas?: string[]
    checklist: string[]
    siGana: SiguientePaso
    siPierde: SiguientePaso
}

export interface Promo {
    id: string
    titulo: string
    descripcion: string
    vencimiento?: string
    fases: Fase[]
}

export interface Casa {
    id: string
    nombre: string
    pais: Pais
    url?: string
    descripcionBreve: string
    resumen?: string
    tipologia?: Tipologia
    beneficioPotencial: number
    dificultad?: number
    requisitos: string[]
    notas?: string[]
    promos: Promo[]
}
