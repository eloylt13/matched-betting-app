// components/calculadora/BlockDutcher.tsx

'use client'

import { useState } from 'react'
import { calcDutcher } from '@/lib/calc'
import type { InputsDutcher, ResultadoDutcher } from '@/types/calc'
import ResultsTable from './ResultsTable'

const defaultInputs: InputsDutcher = {
  stakeCasa1: 20,
  cuotaCasa1: 1.9,
  cuotaCasa2: 1.83,
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

  const stakeTotal = inputs.stakeCasa1
  const stakeCasa1 = stakeTotal > 0 && inputs.cuotaCasa1 > 0 && inputs.cuotaCasa2 > 0
    ? (stakeTotal * inputs.cuotaCasa2) / (inputs.cuotaCasa1 + inputs.cuotaCasa2)
    : 0
  const stakeCasa2 = stakeTotal - stakeCasa1
  const beneficioSiGanaCasa1 = stakeCasa1 * inputs.cuotaCasa1 - stakeTotal
  const beneficioSiGanaCasa2 = stakeCasa2 * inputs.cuotaCasa2 - stakeTotal
  const beneficioNeto = Math.min(beneficioSiGanaCasa1, beneficioSiGanaCasa2)

  const bnColor =
    beneficioNeto > 0
      ? 'text-emerald-400'
      : beneficioNeto < 0
      ? 'text-red-400'
      : 'text-zinc-400'

  return (
    <div className="flex flex-col gap-6">
      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field
          label="Stake total (€)"
          value={inputs.stakeCasa1}
          onChange={set('stakeCasa1')}
          step={1}
          min={1}
        />
        <Field label="Cuota BM1" value={inputs.cuotaCasa1} onChange={set('cuotaCasa1')} />
        <Field label="Cuota BM2" value={inputs.cuotaCasa2} onChange={set('cuotaCasa2')} />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3">
        <StatCard
          label="Stake BM1"
          value={`${stakeCasa1.toFixed(2)} €`}
          sub="parte del stake total asignada al resultado 1"
        />
        <StatCard
          label="Stake BM2"
          value={`${stakeCasa2.toFixed(2)} €`}
          sub="parte del stake total asignada al resultado contrario"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <StatCard
          label="Resultado si gana BM1"
          value={`${beneficioSiGanaCasa1 >= 0 ? '+' : ''}${beneficioSiGanaCasa1.toFixed(2)} €`}
          sub={`Retorno BM1: ${(stakeCasa1 * inputs.cuotaCasa1).toFixed(2)} €`}
        />
        <StatCard
          label="Resultado si gana BM2"
          value={`${beneficioSiGanaCasa2 >= 0 ? '+' : ''}${beneficioSiGanaCasa2.toFixed(2)} €`}
          sub={`Retorno BM2: ${(stakeCasa2 * inputs.cuotaCasa2).toFixed(2)} €`}
        />
      </div>

      <div className="rounded-xl border border-zinc-700 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-zinc-800 text-zinc-400 text-xs uppercase tracking-wider">
              <th className="px-4 py-3 text-left">Escenario</th>
              <th className="px-4 py-3 text-right">BM1</th>
              <th className="px-4 py-3 text-right">BM2</th>
              <th className="px-4 py-3 text-right font-semibold text-zinc-200">Beneficio neto</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-zinc-700 hover:bg-zinc-800/50 transition-colors">
              <td className="px-4 py-3 text-zinc-300">Si gana BM1</td>
              <td className="px-4 py-3 text-right font-mono text-emerald-400">+{(stakeCasa1 * inputs.cuotaCasa1).toFixed(2)} €</td>
              <td className="px-4 py-3 text-right font-mono text-red-400">-{stakeCasa2.toFixed(2)} €</td>
              <td className={`px-4 py-3 text-right font-mono font-semibold ${bnColor}`}>{`${beneficioSiGanaCasa1 >= 0 ? '+' : ''}${beneficioSiGanaCasa1.toFixed(2)} €`}</td>
            </tr>
            <tr className="border-t border-zinc-700 hover:bg-zinc-800/50 transition-colors">
              <td className="px-4 py-3 text-zinc-300">Si gana BM2</td>
              <td className="px-4 py-3 text-right font-mono text-red-400">-{stakeCasa1.toFixed(2)} €</td>
              <td className="px-4 py-3 text-right font-mono text-emerald-400">+{(stakeCasa2 * inputs.cuotaCasa2).toFixed(2)} €</td>
              <td className={`px-4 py-3 text-right font-mono font-semibold ${bnColor}`}>{`${beneficioSiGanaCasa2 >= 0 ? '+' : ''}${beneficioSiGanaCasa2.toFixed(2)} €`}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-xs text-zinc-500">
        ⚖️ El dutcher reparte el stake entre dos casas cubiertas para garantizar un resultado similar
        en ambos escenarios. Úsalo cuando no tengas acceso a exchange.
      </p>
    </div>
  )
}
