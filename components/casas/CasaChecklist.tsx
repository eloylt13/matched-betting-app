"use client"

import { useEffect, useMemo, useState } from "react"

interface CasaChecklistProps {
    casaId: string
}

interface ChecklistState {
    registroDeposito: boolean
    apuestaCualificante: boolean
    freebetRecibida: boolean
    freebetUsada: boolean
}

const initialState: ChecklistState = {
    registroDeposito: false,
    apuestaCualificante: false,
    freebetRecibida: false,
    freebetUsada: false,
}

export default function CasaChecklist({ casaId }: CasaChecklistProps) {
    const storageKey = useMemo(() => `checklist_${casaId}`, [casaId])
    const [state, setState] = useState<ChecklistState>(initialState)
    const [hydrated, setHydrated] = useState(false)

    useEffect(() => {
        try {
            const raw = window.localStorage.getItem(storageKey)
            if (raw) {
                const parsed = JSON.parse(raw) as Partial<ChecklistState>
                setState({ ...initialState, ...parsed })
            }
        } catch {
            setState(initialState)
        } finally {
            setHydrated(true)
        }
    }, [storageKey])

    useEffect(() => {
        if (!hydrated) return
        window.localStorage.setItem(storageKey, JSON.stringify(state))
    }, [hydrated, state, storageKey])

    const allChecked = Object.values(state).every(Boolean)

    return (
        <div className="rounded-2xl border border-stone-700 bg-stone-900 p-5 md:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-stone-100">Checklist de progreso</h3>
                    <p className="mt-1 text-sm text-stone-400">Marca cada paso a medida que completes la oferta.</p>
                </div>
                {allChecked && (
                    <span className="inline-flex w-fit items-center rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                        ✅ Casa completada
                    </span>
                )}
            </div>

            <div className="mt-5 flex flex-col gap-3">
                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-stone-800 bg-stone-800/70 px-4 py-3 text-sm text-stone-300 transition-colors hover:border-stone-600">
                    <input
                        type="checkbox"
                        checked={state.registroDeposito}
                        onChange={(e) => setState((prev) => ({ ...prev, registroDeposito: e.target.checked }))}
                        className="mt-0.5 h-4 w-4 accent-emerald-500"
                    />
                    <span>Registro y depósito completado</span>
                </label>

                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-stone-800 bg-stone-800/70 px-4 py-3 text-sm text-stone-300 transition-colors hover:border-stone-600">
                    <input
                        type="checkbox"
                        checked={state.apuestaCualificante}
                        onChange={(e) => setState((prev) => ({ ...prev, apuestaCualificante: e.target.checked }))}
                        className="mt-0.5 h-4 w-4 accent-emerald-500"
                    />
                    <span>Apuesta cualificante realizada</span>
                </label>

                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-stone-800 bg-stone-800/70 px-4 py-3 text-sm text-stone-300 transition-colors hover:border-stone-600">
                    <input
                        type="checkbox"
                        checked={state.freebetRecibida}
                        onChange={(e) => setState((prev) => ({ ...prev, freebetRecibida: e.target.checked }))}
                        className="mt-0.5 h-4 w-4 accent-emerald-500"
                    />
                    <span>Freebet recibida</span>
                </label>

                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-stone-800 bg-stone-800/70 px-4 py-3 text-sm text-stone-300 transition-colors hover:border-stone-600">
                    <input
                        type="checkbox"
                        checked={state.freebetUsada}
                        onChange={(e) => setState((prev) => ({ ...prev, freebetUsada: e.target.checked }))}
                        className="mt-0.5 h-4 w-4 accent-emerald-500"
                    />
                    <span>Freebet usada — casa completada</span>
                </label>
            </div>
        </div>
    )
}
