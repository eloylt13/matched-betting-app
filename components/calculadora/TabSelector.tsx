// components/calculadora/TabSelector.tsx

import type { Bloque } from '@/types/calc'

interface Tab {
  id: Bloque
  label: string
  emoji: string
}

const TABS: Tab[] = [
  { id: 'cualificante', label: 'Cualificante', emoji: '🎯' },
  { id: 'freebet',     label: 'Free Bet',     emoji: '🎁' },
  { id: 'reembolso',  label: 'Reembolso',    emoji: '💰' },
  { id: 'dutcher',    label: 'Dutcher',       emoji: '⚖️' },
]

interface TabSelectorProps {
  active: Bloque
  onChange: (bloque: Bloque) => void
}

export default function TabSelector({ active, onChange }: TabSelectorProps) {
  return (
    <div className="flex gap-1 rounded-xl bg-zinc-800/60 border border-zinc-700 p-1">
      {TABS.map((tab) => {
        const isActive = tab.id === active
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`
              flex-1 flex items-center justify-center gap-2 rounded-lg px-3 py-2.5
              text-sm font-medium transition-all duration-200
              ${isActive
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700/50'
              }
            `}
          >
            <span>{tab.emoji}</span>
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        )
      })}
    </div>
  )
}
