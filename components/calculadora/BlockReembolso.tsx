// components/calculadora/BlockReembolso.tsx

'use client'

import { useState } from 'react'
import { calcReembolso } from '@/lib/calc'
import type { InputsReembolso, ResultadoReembolso } from '@/types/calc'
import ResultsTable from './ResultsTable'

const defaultInputs: InputsReembolso = {
  stake: 10,
  cuotaBack: 2.0,
  cuotaLay: 2.05,
  comision: 2,
  reembolso: 8,
}

function StatCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-xl bg-zinc-800/60 border border-zinc-700 px-4 py-3 flex flex-col gap-1">
      <span className="text-xs text-zinc-500 uppercase tracking-wider">{label}</span>
      <span className="text-xl font-bold font-mono text-zinc-100">{value}</span>
      {sub && <span className="text-xs text-zinc-500">{sub}</span>}
    </div>
  )
}

function Field({
  label,
  value,
  onChange,
  step = 0.01,
  min = 0,
}: {
  label: string
  value: number
  onChange: (v: number) => void
  step?: number
  min?: number
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">{label}</label>
      <input
        type="number"
        value={value}
        step={step}
        min={min}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        className="w-full rounded-lg bg-zinc-800 border border-zinc-600 px-3 py-2 text-sm text-zinc-100
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
          transition-colors hover:border-zinc-500"
      />
    </div>
  )
}

export default function BlockReembolso() {
  const [inputs, setInputs] = useState<InputsReembolso>(defaultInputs)

  const set = (key: keyof InputsReembolso) => (v: number) =>
    setInputs((prev) => ({ ...prev, [key]: v }))

  const result: ResultadoReembolso = calcReembolso(inputs)

  const beColor =
    result.beneficioEsperado > 0
      ? 'text-emerald-400'
      : result.beneficioEsperado < 0
      ? 'text-red-400'
      : 'text-zinc-400'

  return (
    <div className="flex flex-col gap-6">
      {/* Inputs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <Field label="Stake (€)" value={inputs.stake} onChange={set('stake')} step={1} min={1} />
        <Field label="Cuota Back" value={inputs.cuotaBack} onChange={set('cuotaBack')} />
        <Field label="Cuota Lay" value={inputs.cuotaLay} onChange={set('cuotaLay')} />
        <Field label="Comisión (%)" value={inputs.comision} onChange={set('comision')} step={0.5} />
        <Field
          label="Reembolso (€)"
          value={inputs.reembolso}
          onChange={set('reembolso')}
          step={0.5}
          min={0}
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <StatCard label="Lay Stake" value={`${result.layStake.toFixed(2)} €`} />
        <StatCard label="Responsabilidad" value={`${result.responsabilidad.toFixed(2)} €`} sub="bloqueado en exchange" />
        <StatCard
          label="Beneficio esperado"
          value={`${result.beneficioEsperado >= 0 ? '+' : ''}${result.beneficioEsperado.toFixed(2)} €`}
          sub="media de ambos escenarios"
        />
      </div>

      {/* Table */}
      <ResultsTable escenarios={result.escenarios} />

      <p className="text-xs text-zinc-500">
        💡 El reembolso ya debe introducirse como valor estimado neto (p.ej. 80% si el reembolso es
        en free bet). Si el beneficio esperado es positivo, la operación es rentable en valor.
      </p>
    </div>
  )
}
