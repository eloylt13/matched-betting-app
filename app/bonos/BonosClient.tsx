'use client'

import { useCallback, useState } from 'react'
import BonosPendientesOperativo from '@/components/bonos/BonosPendientesOperativo'
import { loadState } from '@/lib/storage/userState'
import type { Bono, UserState } from '@/types/user'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })
}

const TIPO_EMOJI: Record<Bono['tipo'], string> = { freebet: '🎁', reembolso: '💰', otro: '📋' }
const TIPO_LABEL: Record<Bono['tipo'], string> = { freebet: 'Free Bet', reembolso: 'Reembolso', otro: 'Otro' }

export default function BonosClient() {
  const [state, setState] = useState<UserState>(() => loadState())

  const refresh = useCallback(() => setState(loadState()), [])

  const pendientes = state.bonos.filter(b => !b.limpiado)
  const limpiados = state.bonos.filter(b => b.limpiado)
  const valorTotal = pendientes.reduce((a, b) => a + b.valor, 0)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-stone-100">🎁 Seguimiento de bonos y free bets</h1>
          <p className="text-stone-400 text-sm mt-1">
            {pendientes.length > 0
              ? `${pendientes.length} pendiente${pendientes.length !== 1 ? 's' : ''} · ${valorTotal.toFixed(2)} € por limpiar`
              : 'Controla freebets, reembolsos y bonos pendientes en una vista práctica, también si operas con casas LATAM'}
          </p>
        </div>
      </div>

      {state.bonos.length > 0 && (
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-xl bg-white border border-stone-100 px-4 py-3">
            <p className="text-lg font-bold font-mono text-amber-600">{pendientes.length}</p>
            <p className="text-xs text-stone-400 mt-0.5">Pendientes</p>
          </div>
          <div className="rounded-xl bg-white border border-stone-100 px-4 py-3">
            <p className="text-lg font-bold font-mono text-amber-600">{valorTotal.toFixed(2)} €</p>
            <p className="text-xs text-stone-400 mt-0.5">Valor pendiente</p>
          </div>
          <div className="rounded-xl bg-white border border-stone-100 px-4 py-3">
            <p className="text-lg font-bold font-mono text-stone-500">{limpiados.length}</p>
            <p className="text-xs text-stone-400 mt-0.5">Ya limpiados</p>
          </div>
        </div>
      )}

      <BonosPendientesOperativo state={state} onUpdate={refresh} />

      {limpiados.length > 0 && (
        <section>
          <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
            Ya limpiados ({limpiados.length})
          </h2>
          <div className="flex flex-col gap-2">
            {limpiados.map(bono => (
              <div key={bono.id} className="rounded-xl bg-white/50 border border-stone-100 p-4 flex items-center gap-4 opacity-60">
                <div className="w-9 h-9 rounded-xl bg-stone-100 flex items-center justify-center text-lg shrink-0">
                  {TIPO_EMOJI[bono.tipo]}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-medium text-stone-600 text-sm">{bono.casaNombre}</span>
                  <div className="flex gap-2 mt-0.5">
                    <p className="text-xs text-stone-400">{TIPO_LABEL[bono.tipo]}</p>
                    {bono.fechaLimpiado && (
                      <p className="text-xs text-stone-400">· Limpiado {formatDate(bono.fechaLimpiado)}</p>
                    )}
                  </div>
                </div>
                <span className="font-bold text-stone-400 text-sm">{bono.valor.toFixed(2)} €</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
