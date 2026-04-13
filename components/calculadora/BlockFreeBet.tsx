// components/calculadora/BlockFreeBet.tsx

'use client'

import { useState } from 'react'
import { calcFreeBet } from '@/lib/calc'
import type { InputsFreeBet, ResultadoFreeBet } from '@/types/calc'
import ResultsTable from './ResultsTable'

const defaultInputs: InputsFreeBet = {
  stake: 10,
  cuotaBack: 3.0,
  cuotaLay: 3.1,
  comision: 2,
  tipo: 'snr',
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

function ToggleTipo({ value, onChange }: { value: 'snr' | 'sr'; onChange: (tipo: 'snr' | 'sr') => void }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Tipo</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as 'snr' | 'sr')}
        className="w-full rounded-lg bg-zinc-800 border border-zinc-600 px-3 py-2 text-sm text-zinc-100
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
          transition-colors hover:border-zinc-500"
      >
        <option value="snr">SNR</option>
        <option value="sr">SR</option>
      </select>
    </div>
  )
}

export default function BlockFreeBet() {
  const [inputs, setInputs] = useState<InputsFreeBet>(defaultInputs)

  const set = (key: 'stake' | 'cuotaBack' | 'cuotaLay' | 'comision') => (v: number) =>
    setInputs((prev) => ({ ...prev, [key]: v }))

  const result: ResultadoFreeBet = calcFreeBet(inputs)

  const retencionColor =
    result.retencionReal >= 70
      ? 'text-emerald-400'
      : result.retencionReal >= 50
      ? 'text-yellow-400'
      : 'text-red-400'

  return (
    <div className="flex flex-col gap-6">
      {/* Inputs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <ToggleTipo
          value={inputs.tipo ?? 'snr'}
          onChange={(tipo: 'snr' | 'sr') => setInputs((prev) => ({ ...prev, tipo }))}
        />
        <Field label="Free Bet (€)" value={inputs.stake} onChange={set('stake')} step={1} min={1} />
        <Field label="Cuota Back" value={inputs.cuotaBack} onChange={set('cuotaBack')} />
        <Field label="Cuota Lay" value={inputs.cuotaLay} onChange={set('cuotaLay')} />
        <Field label="Comisión (%)" value={inputs.comision} onChange={set('comision')} step={0.5} />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <StatCard label="Lay Stake" value={`${result.layStake.toFixed(2)} €`} />
        <StatCard label="Responsabilidad" value={`${result.responsabilidad.toFixed(2)} €`} sub="bloqueado en exchange" />
        <StatCard
          label="Retención real"
          value={`${result.retencionReal.toFixed(1)} %`}
          sub="del valor de la free bet"
        />
      </div>

      {/* Table */}
      <ResultsTable escenarios={result.escenarios} />

      <p className="text-xs text-zinc-500">
        💡 En SNR no se devuelve el stake; en SR sí. Ajusta el tipo correcto antes de copiar el lay stake.
      </p>
    </div>
  )
}
