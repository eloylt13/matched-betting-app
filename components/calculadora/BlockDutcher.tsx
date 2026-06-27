// components/calculadora/BlockDutcher.tsx

'use client'

import { useState } from 'react'
import { calcDutcher } from '@/lib/calc'
import type { InputsDutcher } from '@/types/calc'

const defaultInputs: InputsDutcher = {
  stakeCasa1: '100',
  cuotaCasa1: '2.10',
  cuotaCasa2: '2.10',
  cuotaCasa3: '3.20',
  numeroResultados: 2,
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
}: {
  label: string
  value?: string | number
  onChange: (v: string) => void
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">{label}</label>
      <input
        type="text"
        inputMode="decimal"
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg bg-zinc-800 border border-zinc-600 px-3 py-2 text-sm text-zinc-100
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
          transition-colors hover:border-zinc-500"
      />
    </div>
  )
}

export default function BlockDutcher() {
  const [inputs, setInputs] = useState<InputsDutcher>(defaultInputs)

  const numeroResultados = inputs.numeroResultados === 3 ? 3 : 2
  const resultado = calcDutcher(inputs)
  const validationMessage = !resultado.esValido
    ? 'Introduce cuotas validas mayores que 1.'
    : ''

  const set = (key: keyof InputsDutcher) => (v: string) =>
    setInputs((prev) => ({ ...prev, [key]: v }))

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-2 rounded-xl border border-zinc-700 bg-zinc-900 p-1">
        {([2, 3] as const).map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setInputs((prev) => ({ ...prev, numeroResultados: value }))}
            className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
              numeroResultados === value
                ? 'bg-indigo-500 text-white'
                : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100'
            }`}
          >
            {value} resultados
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field
          label="Bank total"
          value={inputs.stakeCasa1}
          onChange={set('stakeCasa1')}
        />
        <Field
          label={numeroResultados === 3 ? 'Cuota 1' : 'Cuota BM1'}
          value={inputs.cuotaCasa1}
          onChange={set('cuotaCasa1')}
        />
        <Field
          label={numeroResultados === 3 ? 'Cuota X' : 'Cuota BM2'}
          value={inputs.cuotaCasa2}
          onChange={set('cuotaCasa2')}
        />
        {numeroResultados === 3 && (
          <Field label="Cuota 2" value={inputs.cuotaCasa3} onChange={set('cuotaCasa3')} />
        )}
      </div>

      {validationMessage && (
        <p className="rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
          {validationMessage}
        </p>
      )}

      <div className="grid grid-cols-2 gap-3">
        {resultado.resultados.map((item) => (
          <StatCard
            key={item.label}
            label={`Stake ${item.label}`}
            value={`${item.stake.toFixed(2)} EUR`}
            sub={`A cuota ${item.cuota.toFixed(2)}`}
          />
        ))}
        <StatCard
          label="Retorno"
          value={`${resultado.retornoIgualado.toFixed(2)} EUR`}
          sub="retorno estimado por resultado"
        />
        <StatCard
          label="Beneficio estimado"
          value={`${resultado.beneficioNeto >= 0 ? '+' : ''}${resultado.beneficioNeto.toFixed(2)} EUR`}
          sub="retorno menos bank total"
        />
      </div>

      <div className="rounded-xl border border-zinc-700 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-zinc-800 text-zinc-400 text-xs uppercase tracking-wider">
              <th className="px-4 py-3 text-left">Escenario</th>
              <th className="px-4 py-3 text-right">Stake</th>
              <th className="px-4 py-3 text-right">Retorno</th>
              <th className="px-4 py-3 text-right font-semibold text-zinc-200">Beneficio estimado</th>
            </tr>
          </thead>
          <tbody>
            {resultado.resultados.map((item) => (
              <tr key={item.label} className="border-t border-zinc-700 hover:bg-zinc-800/50 transition-colors">
                <td className="px-4 py-3 text-zinc-300">Si gana {item.label}</td>
                <td className="px-4 py-3 text-right font-mono text-zinc-100">{item.stake.toFixed(2)} EUR</td>
                <td className="px-4 py-3 text-right font-mono text-emerald-400">{item.retorno.toFixed(2)} EUR</td>
                <td className={`px-4 py-3 text-right font-mono font-semibold ${resultado.beneficioNeto >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {resultado.beneficioNeto >= 0 ? '+' : ''}{resultado.beneficioNeto.toFixed(2)} EUR
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-zinc-500">
        El dutcher reparte el bank entre resultados para estimar un retorno similar en cada escenario.
      </p>
    </div>
  )
}
