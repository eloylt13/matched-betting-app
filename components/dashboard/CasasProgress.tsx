"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import { todasLasCasas } from "@/lib/presets"

 interface CasasProgressProps {
    market: 'espana' | 'latam'
 }

interface ChecklistState {
    registroDeposito?: boolean
    apuestaCualificante?: boolean
    freebetRecibida?: boolean
    freebetUsada?: boolean
}

interface CasaProgressItem {
    casaId: string
    casaNombre: string
    completedChecks: number
    totalChecks: number
    isCompleted: boolean
}

const TOTAL_CHECKS = 4

function countCompletedChecks(value: ChecklistState) {
    return [
        Boolean(value.registroDeposito),
        Boolean(value.apuestaCualificante),
        Boolean(value.freebetRecibida),
        Boolean(value.freebetUsada),
    ].filter(Boolean).length
}

export default function CasasProgress({ market }: CasasProgressProps) {
    const [items, setItems] = useState<CasaProgressItem[]>([])
    const [hydrated, setHydrated] = useState(false)

    const refresh = useCallback(() => {
        if (typeof window === "undefined") return

        const nextItems: CasaProgressItem[] = []

        for (let index = 0; index < window.localStorage.length; index += 1) {
            const key = window.localStorage.key(index)
            if (!key || !key.startsWith("checklist_")) continue

            const casaId = key.replace(/^checklist_/, "")
            const casa = todasLasCasas.find((item) => item.id === casaId)
            if (!casa || casa.market !== market) continue

            const raw = window.localStorage.getItem(key)
            if (!raw) continue

            try {
                const parsed = JSON.parse(raw) as ChecklistState
                const completedChecks = countCompletedChecks(parsed)

                nextItems.push({
                    casaId,
                    casaNombre: casa.nombre,
                    completedChecks,
                    totalChecks: TOTAL_CHECKS,
                    isCompleted: completedChecks === TOTAL_CHECKS,
                })
            } catch {
                continue
            }
        }

        nextItems.sort((a, b) => {
            if (a.isCompleted !== b.isCompleted) return a.isCompleted ? 1 : -1
            if (b.completedChecks !== a.completedChecks) return b.completedChecks - a.completedChecks
            return a.casaNombre.localeCompare(b.casaNombre)
        })

        setItems(nextItems)
        setHydrated(true)
    }, [market])

    useEffect(() => {
        refresh()

        const handleStorage = () => refresh()
        const handleFocus = () => refresh()
        const handleVisibility = () => {
            if (document.visibilityState === "visible") refresh()
        }

        window.addEventListener("storage", handleStorage)
        window.addEventListener("focus", handleFocus)
        document.addEventListener("visibilitychange", handleVisibility)

        return () => {
            window.removeEventListener("storage", handleStorage)
            window.removeEventListener("focus", handleFocus)
            document.removeEventListener("visibilitychange", handleVisibility)
        }
    }, [refresh])

    if (!hydrated) {
        return null
    }

    const totalStarted = items.length
    const totalCompleted = items.filter((item) => item.isCompleted).length

    return (
        <section className="rounded-2xl border border-stone-700 bg-stone-800 p-5 md:p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <h2 className="text-lg font-semibold text-stone-100">Tu progreso</h2>
                    <p className="mt-1 text-sm text-stone-300">
                        {totalStarted > 0
                            ? `${totalCompleted} completada${totalCompleted === 1 ? "" : "s"} de ${totalStarted} casa${totalStarted === 1 ? "" : "s"} empezada${totalStarted === 1 ? "" : "s"}`
                            : "Aún no has empezado ninguna casa. Ve a Casas para comenzar."}
                    </p>
                </div>
                {totalStarted > 0 && (
                    <span className="inline-flex w-fit items-center rounded-full border border-stone-600 bg-stone-900 px-3 py-1 text-xs font-semibold text-stone-300">
                        {totalCompleted}/{totalStarted} completadas
                    </span>
                )}
            </div>

            {totalStarted === 0 ? (
                <div className="mt-5 rounded-xl border border-stone-700 bg-stone-900/70 p-4">
                    <p className="text-sm text-stone-300">Aún no has empezado ninguna casa. Ve a Casas para comenzar.</p>
                    <Link
                        href="/casas"
                        className="mt-3 inline-flex items-center rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-400"
                    >
                        Ir a Casas
                    </Link>
                </div>
            ) : (
                <div className="mt-5 flex flex-col gap-3">
                    {items.map((item) => {
                        const percentage = (item.completedChecks / item.totalChecks) * 100

                        return (
                            <Link
                                key={item.casaId}
                                href={`/casas/${item.casaId}`}
                                className="rounded-xl border border-stone-700 bg-stone-900/70 p-4 transition-colors hover:border-stone-500"
                            >
                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <h3 className="text-sm font-semibold text-stone-100">{item.casaNombre}</h3>
                                            {item.isCompleted && (
                                                <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                                                    ✅ Completada
                                                </span>
                                            )}
                                        </div>
                                        <p className="mt-1 text-xs text-stone-300">
                                            {item.completedChecks}/{item.totalChecks} checks completados
                                        </p>
                                    </div>
                                    <span className="text-xs font-medium text-stone-300">
                                        {item.isCompleted ? "Ver detalle →" : "Continuar →"}
                                    </span>
                                </div>

                                <div className="mt-3 h-2 overflow-hidden rounded-full bg-stone-700">
                                    <div
                                        className="h-full rounded-full bg-emerald-500 transition-all"
                                        style={{ width: `${percentage}%` }}
                                    />
                                </div>
                            </Link>
                        )
                    })}
                </div>
            )}
        </section>
    )
}
