// components/calculadora/ResultsTable.tsx

import type { ResultadoEscenario } from '@/types/calc'

interface ResultsTableProps {
  escenarios: ResultadoEscenario[]
}

function fmt(n: number) {
  const sign = n >= 0 ? '+' : ''
  return `${sign}${n.toFixed(2)} €`
}

function colorClass(n: number) {
  if (n > 0) return 'text-emerald-400'
  if (n < 0) return 'text-red-400'
  return 'text-zinc-400'
}

export default function ResultsTable({ escenarios }: ResultsTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-zinc-700">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-zinc-800 text-zinc-400 text-xs uppercase tracking-wider">
            <th className="px-4 py-3 text-left">Escenario</th>
            <th className="px-4 py-3 text-right">Casa</th>
            <th className="px-4 py-3 text-right">Exchange</th>
            <th className="px-4 py-3 text-right font-semibold text-zinc-200">Beneficio neto</th>
          </tr>
        </thead>
        <tbody>
          {escenarios.map((esc, i) => (
            <tr
              key={i}
              className="border-t border-zinc-700 hover:bg-zinc-800/50 transition-colors"
            >
              <td className="px-4 py-3 text-zinc-300">{esc.label}</td>
              <td className={`px-4 py-3 text-right font-mono ${colorClass(esc.resultadoCasa)}`}>
                {fmt(esc.resultadoCasa)}
              </td>
              <td className={`px-4 py-3 text-right font-mono ${colorClass(esc.resultadoExchange)}`}>
                {fmt(esc.resultadoExchange)}
              </td>
              <td className={`px-4 py-3 text-right font-mono font-semibold ${colorClass(esc.beneficio)}`}>
                {fmt(esc.beneficio)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
