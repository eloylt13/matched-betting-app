// components/dashboard/ProgressSummary.tsx

'use client'

import { todasLasCasas } from '@/lib/presets'
import type { UserState } from '@/types/user'

interface ProgressSummaryProps {
  state: UserState
  market: 'espana' | 'latam'
}

function KPI({ value, label, accent }: { value: string; label: string; accent?: string }) {
  return (
    <div className="flex flex-col gap-0.5 px-4 py-3 rounded-xl bg-white border border-stone-100 min-w-0">
      <span className={`text-lg font-bold font-mono truncate ${accent ?? 'text-stone-800'}`}>
        {value}
      </span>
      <span className="text-xs text-stone-400 truncate">{label}</span>
    </div>
  )
}

export default function ProgressSummary({ state, market }: ProgressSummaryProps) {
  const casasDelMercado = todasLasCasas.filter((c) => c.market === market)
  const casaIdsDelMercado = new Set(casasDelMercado.map((c) => c.id))
  const moneda = market === 'espana' ? '€' : 'USD'

  const completadas = casasDelMercado.filter(
    (c) => state.progresos[c.id]?.estado === 'completada'
  ).length

  const totalCasas = casasDelMercado.length

  const potencialPendiente = casasDelMercado
    .filter((c) => {
      const p = state.progresos[c.id]
      return !p || p.estado !== 'completada'
    })
    .reduce((acc, c) => acc + c.beneficioPotencial, 0)

  const beneficioAcumulado = state.historial.reduce(
    (acc, e) => acc + (e.casaId && casaIdsDelMercado.has(e.casaId) ? e.resultado : 0),
    0
  )

  const bonosPendientes = state.bonos.filter(
    (b) => !b.limpiado && casaIdsDelMercado.has(b.casaId)
  ).length

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
      <KPI
        value={`${potencialPendiente.toFixed(0)} ${moneda}`}
        label="Potencial pendiente"
        accent="text-emerald-600"
      />
      <KPI
        value={`${beneficioAcumulado >= 0 ? '+' : ''}${beneficioAcumulado.toFixed(2)} ${moneda}`}
        label="Beneficio acumulado"
        accent={beneficioAcumulado >= 0 ? 'text-emerald-600' : 'text-red-500'}
      />
      <KPI
        value={`${completadas} / ${totalCasas}`}
        label="Casas completadas"
      />
      <KPI
        value={String(bonosPendientes)}
        label="Bonos por limpiar"
        accent={bonosPendientes > 0 ? 'text-amber-600' : 'text-stone-800'}
      />
    </div>
  )
}
