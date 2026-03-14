// components/dashboard/BonosPendientes.tsx

'use client'

import { useState } from 'react'
import { limpiarBono } from '@/lib/storage/userState'
import type { Bono } from '@/types/user'

const TIPO_EMOJI: Record<Bono['tipo'], string> = {
  freebet: '🎁',
  reembolso: '💰',
  otro: '📋',
}

interface BonosPendientesProps {
  bonos: Bono[]
  onUpdate: () => void
}

export default function BonosPendientes({ bonos, onUpdate }: BonosPendientesProps) {
  const [abierto, setAbierto] = useState(false)

  const pendientes = bonos.filter((b) => !b.limpiado)

  const handleLimpiar = (id: string) => {
    limpiarBono(id)
    onUpdate()
  }

  return (
    <div className="rounded-2xl bg-white border border-stone-200 overflow-hidden">
      {/* Cabecera clicable */}
      <button
        onClick={() => setAbierto((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-stone-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-stone-800">Bonos por limpiar</span>
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${pendientes.length > 0
              ? 'bg-amber-100 text-amber-600'
              : 'bg-stone-100 text-stone-500'
            }`}>
            {pendientes.length}
          </span>
        </div>
        <span
          className={`text-stone-400 text-lg transition-transform duration-200 ${abierto ? 'rotate-90' : ''}`}
        >
          ›
        </span>
      </button>

      {/* Contenido desplegable */}
      {abierto && (
        <div className="border-t border-stone-100">
          {pendientes.length === 0 ? (
            <div className="p-6 text-center">
              <p className="text-stone-500 text-sm">✅ No hay bonos pendientes de limpiar.</p>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-stone-100">
              {pendientes.map((bono) => {
                const fecha = new Date(bono.fechaRecibido).toLocaleDateString('es-ES', {
                  day: '2-digit',
                  month: 'short',
                })
                return (
                  <div
                    key={bono.id}
                    className="flex items-center gap-4 px-5 py-4"
                  >
                    {/* Emoji */}
                    <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-xl shrink-0">
                      {TIPO_EMOJI[bono.tipo]}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-stone-800 text-sm">{bono.casaNombre}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 font-medium capitalize">
                          {bono.tipo}
                        </span>
                      </div>
                      <p className="text-xs text-stone-500 mt-0.5">Recibido el {fecha}</p>
                      {bono.notas && (
                        <p className="text-xs text-stone-400 mt-0.5 truncate">{bono.notas}</p>
                      )}
                    </div>

                    {/* Valor + acción */}
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <span className="text-sm font-bold text-amber-600">
                        {bono.valor.toFixed(2)} €
                      </span>
                      <button
                        onClick={() => handleLimpiar(bono.id)}
                        className="text-xs px-3 py-1.5 rounded-lg bg-[#2A1F3D] text-white font-medium
                          hover:bg-[#3d2e57] active:scale-95 transition-all duration-150"
                      >
                        Marcar limpiado
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
