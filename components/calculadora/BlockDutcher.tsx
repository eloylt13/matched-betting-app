// components/calculadora/BlockDutcher.tsx

'use client'

import { useState } from 'react'
import { calcDutcher } from '@/lib/calc'
import type { InputsDutcher, ResultadoDutcher } from '@/types/calc'
import ResultsTable from './ResultsTable'

const defaultInputs: InputsDutcher = {
  stakeCasa1: 20,
  cuotaCasa1: 2.5,
  cuotaCasa2: 2.0,
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

export default function BlockDutcher() {
  const [inputs, setInputs] = useState<InputsDutcher>(defaultInputs)

  const set = (key: keyof InputsDutcher) => (v: number) =>
    setInputs((prev) => ({ ...prev, [key]: v }))

  const result: ResultadoDutcher = calcDutcher(inputs)

  const bnColor =
    result.beneficioNeto > 0
      ? 'text-emerald-400'
      : result.beneficioNeto < 0
      ? 'text-red-400'
      : 'text-zinc-400'

  return (
    <div className="flex flex-col gap-6">
      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field
          label="Stake Casa 1 (€)"
          value={inputs.stakeCasa1}
          onChange={set('stakeCasa1')}
          step={1}
          min={1}
        />
        <Field label="Cuota Casa 1" value={inputs.cuotaCasa1} onChange={set('cuotaCasa1')} />
        <Field label="Cuota Casa 2" value={inputs.cuotaCasa2} onChange={set('cuotaCasa2')} />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3">
        <StatCard
          label="Stake Casa 2"
          value={`${result.stakeCasa2.toFixed(2)} €`}
          sub="para equilibrar ambos lados"
        />
        <StatCard
          label="Beneficio neto"
          value={`${result.beneficioNeto >= 0 ? '+' : ''}${result.beneficioNeto.toFixed(2)} €`}
          sub="media de ambos escenarios"
        />
      </div>

      {/* Table */}
      <ResultsTable escenarios={result.escenarios} />

      <p className="text-xs text-zinc-500">
        ⚖️ El dutcher reparte el stake entre dos casas cubiertas para garantizar un resultado similar
        en ambos escenarios. Úsalo cuando no tengas acceso a exchange.
      </p>
    </div>
  )
}
