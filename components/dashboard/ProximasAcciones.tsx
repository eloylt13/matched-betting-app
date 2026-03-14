// components/dashboard/ProximasAcciones.tsx

'use client'

import Link from 'next/link'
import { todasLasCasas } from '@/lib/presets'
import type { UserState } from '@/types/user'

interface Accion {
  id: string
  texto: string
  href: string
  urgente?: boolean
  emoji: string
}

interface ProximasAccionesProps {
  state: UserState
}

export default function ProximasAcciones({ state }: ProximasAccionesProps) {
  const acciones: Accion[] = []

  // Bonos sin limpiar
  const bonosPendientes = state.bonos.filter((b) => !b.limpiado)
  for (const bono of bonosPendientes.slice(0, 2)) {
    acciones.push({
      id: `bono-${bono.id}`,
      texto: `Limpiar ${bono.tipo === 'freebet' ? 'free bet' : 'reembolso'} de ${bono.casaNombre} (${bono.valor.toFixed(2)} €)`,
      href: '/bonos',
      urgente: true,
      emoji: '🎁',
    })
  }

  // Casas en curso — continuar siguiente fase
  for (const casa of todasLasCasas) {
    const progreso = state.progresos[casa.id]
    if (progreso?.estado === 'en_curso' || progreso?.estado === 'en_progreso') {
      acciones.push({
        id: `casa-en-curso-${casa.id}`,
        texto: `Continuar oferta en ${casa.nombre}`,
        href: `/casas/${casa.id}`,
        urgente: progreso.estado === 'en_progreso',
        emoji: '⏳',
      })
    }
  }

  // Casas sin empezar — recomendar empezar
  for (const casa of todasLasCasas) {
    const progreso = state.progresos[casa.id]
    if (!progreso || progreso.estado === 'no_empezada') {
      acciones.push({
        id: `casa-nueva-${casa.id}`,
        texto: `Empezar oferta en ${casa.nombre} (+${casa.beneficioPotencial.toFixed(0)} €)`,
        href: `/casas/${casa.id}`,
        urgente: false,
        emoji: '🎯',
      })
    }
  }

  const visible = acciones.slice(0, 5)

  if (visible.length === 0) {
    return (
      <div className="rounded-2xl bg-white border border-stone-200 p-5 text-center">
        <p className="text-stone-500 text-sm">🏁 No hay acciones pendientes. ¡Buen trabajo!</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      {visible.map((a) => (
        <Link
          key={a.id}
          href={a.href}
          className={`rounded-xl border p-3.5 flex items-center gap-3 transition-all duration-150
            hover:shadow-sm group
            ${a.urgente
              ? 'bg-amber-50 border-amber-200 hover:border-amber-400'
              : 'bg-white border-stone-200 hover:border-stone-300'
            }`}
        >
          <span className="text-xl w-8 text-center shrink-0">{a.emoji}</span>
          <span className={`text-sm flex-1 ${a.urgente ? 'font-medium text-amber-800' : 'text-stone-700'}`}>
            {a.texto}
          </span>
          {a.urgente && (
            <span className="text-xs px-2 py-0.5 bg-amber-200 text-amber-800 rounded-full font-medium shrink-0">
              Urgente
            </span>
          )}
          <span className="text-stone-300 group-hover:text-stone-500 transition-colors text-lg">›</span>
        </Link>
      ))}
    </div>
  )
}
