// components/dashboard/CasasPendientes.tsx

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { todasLasCasas } from '@/lib/presets'
import type { ProgresoCasa, UserState } from '@/types/user'

const ESTADO_LABEL: Record<string, string> = {
  no_empezada: 'Sin empezar',
  en_curso: 'En curso',
  en_progreso: 'En progreso',
  pendiente_bono: 'Bono pendiente',
  pendiente_limpiar: 'Por limpiar',
  completada: 'Completada',
  descartada: 'Descartada',
  bloqueada: 'Bloqueada',
}

const ESTADO_COLOR: Record<string, string> = {
  no_empezada: 'bg-zinc-700 text-zinc-300',
  en_curso: 'bg-blue-900/60 text-blue-300',
  en_progreso: 'bg-blue-900/60 text-blue-300',
  pendiente_bono: 'bg-amber-900/60 text-amber-300',
  pendiente_limpiar: 'bg-purple-900/60 text-purple-300',
  completada: 'bg-emerald-900/60 text-emerald-300',
  descartada: 'bg-zinc-800 text-zinc-500',
  bloqueada: 'bg-red-900/40 text-red-400',
}

interface CasasPendientesProps {
  progresos: UserState['progresos']
}

export default function CasasPendientes({ progresos }: CasasPendientesProps) {
  const [abierto, setAbierto] = useState(false)

  const casas = todasLasCasas.filter((c) => {
    const p = progresos[c.id]
    return !p || (p.estado !== 'completada' && p.estado !== 'descartada')
  })

  return (
    <div className="rounded-2xl bg-white border border-stone-200 overflow-hidden">
      {/* Cabecera clicable */}
      <button
        onClick={() => setAbierto((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-stone-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-stone-800">Casas pendientes</span>
          <span className="text-xs bg-stone-100 text-stone-500 px-2 py-0.5 rounded-full font-medium">
            {casas.length}
          </span>
        </div>
        <span
          className={`text-stone-400 text-lg transition-transform duration-200 ${abierto ? 'rotate-90' : ''}`}
        >
          ›
        </span>
      </button>

      {/* Listado desplegable */}
      {abierto && (
        <div className="border-t border-stone-100">
          {casas.length === 0 ? (
            <div className="p-6 text-center">
              <p className="text-stone-500 text-sm">🎉 ¡Todas las casas completadas!</p>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-stone-100">
              {casas.map((casa) => {
                const progreso: ProgresoCasa | undefined = progresos[casa.id]
                const estado = progreso?.estado ?? 'no_empezada'
                const faseActual = progreso?.faseActual ?? 1
                const totalFases = casa.promos.reduce((acc, p) => acc + p.fases.length, 0)

                return (
                  <Link
                    key={casa.id}
                    href={`/casas/${casa.id}`}
                    className="group flex items-center gap-4 px-5 py-4
                      hover:bg-stone-50 transition-colors duration-150"
                  >
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#12112A] to-[#2A1F3D]
                      flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {casa.nombre[0]}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-stone-800 text-sm">{casa.nombre}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${ESTADO_COLOR[estado] ?? 'bg-gray-100 text-gray-500'}`}>
                          {ESTADO_LABEL[estado] ?? estado}
                        </span>
                      </div>
                      <p className="hidden sm:block text-xs text-stone-500 mt-0.5 truncate">{casa.descripcionBreve}</p>
                      {totalFases > 1 && (
                        <p className="text-xs text-stone-400 mt-0.5">
                          Fase {Math.min(faseActual, totalFases)} de {totalFases}
                        </p>
                      )}
                    </div>

                    <div className="text-right shrink-0">
                      <p className="text-sm font-bold text-emerald-600">+{casa.beneficioPotencial.toFixed(0)} €</p>
                      <p className="text-xs text-stone-400">potencial</p>
                    </div>

                    <span className="text-stone-300 group-hover:text-stone-500 text-lg transition-colors">›</span>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
