// components/casas/FaseCard.tsx

'use client'

import { useState } from 'react'
import type { Fase } from '@/types/presets'

const MODO_LABEL: Record<string, string> = {
  cualificante: '🎯 Cualificante',
  freebet: '🎁 Free Bet',
  reembolso: '💰 Reembolso',
  rollover: '🔄 Rollover',
  bonos: '🎁 Bonos',
  'dinero-real': '💵 Dinero Real',
  dutcher: '⚖️ Dutcher',
}

const MODO_COLOR: Record<string, string> = {
  cualificante: 'bg-blue-100 text-blue-700',
  freebet: 'bg-purple-100 text-purple-700',
  reembolso: 'bg-amber-100 text-amber-700',
  rollover: 'bg-orange-100 text-orange-700',
  bonos: 'bg-indigo-100 text-indigo-700',
  'dinero-real': 'bg-teal-100 text-teal-700',
  dutcher: 'bg-emerald-100 text-emerald-700',
}

interface FaseCardProps {
  fase: Fase
  defaultOpen?: boolean
}

export default function FaseCard({ fase, defaultOpen = false }: FaseCardProps) {
  const [open, setOpen] = useState(defaultOpen)
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set())

  const toggleCheck = (i: number) =>
    setCheckedItems((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })

  const progress = fase.checklist.length
    ? Math.round((checkedItems.size / fase.checklist.length) * 100)
    : 0

  const modoLabel = MODO_LABEL[fase.modo] ?? fase.modo
  const modoColor = MODO_COLOR[fase.modo] ?? 'bg-gray-100 text-gray-700'

  return (
    <div className="rounded-2xl bg-white border border-stone-200 overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center gap-4 px-5 py-4 hover:bg-stone-50 transition-colors text-left"
      >
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#12112A] to-[#2A1F3D]
          flex items-center justify-center text-white font-bold text-sm shrink-0">
          {fase.numero}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-stone-800 text-sm">{fase.titulo}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${modoColor}`}>
              {modoLabel}
            </span>
          </div>
          <p className="text-xs text-stone-500 mt-0.5 truncate">{fase.descripcion}</p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-stone-700">{fase.stakeRecomendado} €</p>
            <p className="text-xs text-stone-400">stake</p>
          </div>
          <span className={`text-stone-400 transition-transform duration-200 text-xl ${open ? 'rotate-90' : ''}`}>
            ›
          </span>
        </div>
      </button>

      {/* Progress bar */}
      {fase.checklist.length > 0 && (
        <div className="h-1 bg-stone-100">
          <div
            className="h-1 bg-gradient-to-r from-[#12112A] to-[#2A1F3D] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Expanded content */}
      {open && (
        <div className="px-5 pb-5 flex flex-col gap-5">
          {/* Stake info */}
          <div className="flex gap-4 flex-wrap text-sm mt-3">
            <div className="flex flex-col">
              <span className="text-xs text-stone-400 uppercase tracking-wide">Stake recomendado</span>
              <span className="font-bold text-stone-800">{fase.stakeRecomendado} €</span>
            </div>
            {fase.reembolsoEstimado !== undefined && (
              <div className="flex flex-col">
                <span className="text-xs text-stone-400 uppercase tracking-wide">Reembolso estimado</span>
                <span className="font-bold text-amber-600">{fase.reembolsoEstimado} €</span>
              </div>
            )}
            {fase.freebetEstimada !== undefined && (
              <div className="flex flex-col">
                <span className="text-xs text-stone-400 uppercase tracking-wide">Free bet estimada</span>
                <span className="font-bold text-purple-600">{fase.freebetEstimada} €</span>
              </div>
            )}
          </div>

          {/* Alertas */}
          {(fase.alertas?.length ?? 0) > 0 && (
            <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 flex flex-col gap-2">
              <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide">⚠️ Alertas</p>
              <ul className="flex flex-col gap-1.5">
                {fase.alertas?.map((a, i) => (
                  <li key={i} className="text-xs text-amber-700 leading-relaxed">{a}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Checklist */}
          {fase.checklist.length > 0 && (
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Checklist</p>
                <span className="text-xs text-stone-400">{checkedItems.size}/{fase.checklist.length}</span>
              </div>
              {fase.checklist.map((item, i) => (
                <label key={i} className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={checkedItems.has(i)}
                    onChange={() => toggleCheck(i)}
                    className="mt-0.5 w-4 h-4 rounded border-stone-300 focus:ring-[#2A1F3D] focus:ring-offset-0 cursor-pointer accent-[#2A1F3D]"
                  />
                  <span className={`text-sm leading-relaxed transition-colors ${checkedItems.has(i) ? 'text-stone-400 line-through' : 'text-stone-700'
                    }`}>
                    {item}
                  </span>
                </label>
              ))}
            </div>
          )}

          {/* Siguientes pasos */}
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3">
              <p className="text-xs font-semibold text-emerald-700 mb-1">✅ Si gana la back</p>
              <p className="text-xs text-emerald-800 leading-relaxed">{fase.siGana.accion}</p>
            </div>
            <div className="rounded-xl bg-rose-50 border border-rose-200 p-3">
              <p className="text-xs font-semibold text-rose-700 mb-1">❌ Si pierde la back</p>
              <p className="text-xs text-rose-800 leading-relaxed">{fase.siPierde.accion}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
