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
  tipo: 'cash',
  tasaExtraccion: 75,
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

function Toggle({
  value,
  onChange,
}: {
  value: 'cash' | 'freebet'
  onChange: (value: 'cash' | 'freebet') => void
}) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <button
        type="button"
        onClick={() => onChange('cash')}
        className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${value === 'cash' ? 'border-emerald-500 bg-emerald-500/10 text-emerald-300' : 'border-zinc-600 bg-zinc-800 text-zinc-300 hover:border-zinc-500'}`}
      >
        Reembolso en cash
      </button>
      <button
        type="button"
        onClick={() => onChange('freebet')}
        className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${value === 'freebet' ? 'border-indigo-500 bg-indigo-500/10 text-indigo-300' : 'border-zinc-600 bg-zinc-800 text-zinc-300 hover:border-zinc-500'}`}
      >
        Reembolso en free bet
      </button>
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
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="col-span-2 sm:col-span-3">
          <Toggle
            value={inputs.tipo ?? 'cash'}
            onChange={(tipo) => setInputs((prev) => ({ ...prev, tipo }))}
          />
        </div>
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
        {(inputs.tipo ?? 'cash') === 'freebet' && (
          <Field
            label="Tasa extracción (%)"
            value={inputs.tasaExtraccion ?? 75}
            onChange={set('tasaExtraccion')}
            step={1}
            min={0}
          />
        )}
      </div>

      <div className="grid grid-cols-3 gap-3">
        <StatCard label="Lay Stake" value={`${result.layStake.toFixed(2)} €`} />
        <StatCard label="Responsabilidad" value={`${result.responsabilidad.toFixed(2)} €`} sub="bloqueado en exchange" />
        <StatCard
          label="Beneficio esperado"
          value={`${result.beneficioEsperado >= 0 ? '+' : ''}${result.beneficioEsperado.toFixed(2)} €`}
          sub="mínimo entre ambos escenarios"
        />
      </div>

      <ResultsTable escenarios={result.escenarios} />

      <p className="text-xs text-zinc-500">
        {(inputs.tipo ?? 'cash') === 'cash'
          ? '💡 En cash, el reembolso se valora al 100% y el lay stake se equilibra usando la fórmula específica de reembolso.'
          : '💡 En free bet, el valor real del reembolso se estima con la tasa de extracción y se descuenta en la fórmula del lay stake.'}
      </p>
    </div>
  )
}
