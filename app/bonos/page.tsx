// app/bonos/page.tsx

'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { loadState, agregarBono, limpiarBono } from '@/lib/storage/userState'
import type { UserState, Bono } from '@/types/user'
import { initialUserState } from '@/types/user'
import { todasLasCasas } from '@/lib/presets'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })
}

const TIPO_EMOJI: Record<Bono['tipo'], string> = { freebet: '🎁', reembolso: '💰', otro: '📋' }
const TIPO_LABEL: Record<Bono['tipo'], string> = { freebet: 'Free Bet', reembolso: 'Reembolso', otro: 'Otro' }

// ── Empty state rico ──────────────────────────────────────────────────────────
function EmptyStatePendientes({ onAdd }: { onAdd: () => void }) {
  return (
    <div className="rounded-2xl bg-white border border-stone-200 p-8 flex flex-col items-center gap-5 text-center">
      <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-3xl">
        🎁
      </div>
      <div className="max-w-sm">
        <p className="text-stone-700 font-semibold text-base mb-1">No hay bonos pendientes de limpiar</p>
        <p className="text-stone-400 text-sm leading-relaxed">
          Cuando recibas una freebet o reembolso de una casa de apuestas, regístralo aquí para no perder el rastro y limpiar el bono con la calculadora.
        </p>
      </div>

      {/* Qué es limpiar un bono */}
      <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 text-xs text-amber-700 max-w-sm">
        <span className="font-semibold">¿Qué significa limpiar un bono?</span> Convertir una freebet o reembolso en dinero real usando la calculadora en modo Apuesta Gratis o Reembolso.
      </div>

      <div className="flex flex-col gap-2 w-full max-w-sm">
        <button
          onClick={onAdd}
          className="w-full px-5 py-2.5 rounded-xl bg-[#2A1F3D] text-white text-sm font-semibold hover:bg-[#3d2e57] transition-colors"
        >
          + Añadir bono manualmente
        </button>
        <div className="flex gap-3 justify-center pt-1">
          <Link href="/casas" className="text-xs text-emerald-500 hover:underline">Ir a casas →</Link>
          <Link href="/calculadora" className="text-xs text-blue-500 hover:underline">Abrir calculadora →</Link>
        </div>
      </div>
    </div>
  )
}

export default function BonosPage() {
  const [state, setState] = useState<UserState>(initialUserState)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({
    tipo: 'freebet' as Bono['tipo'],
    casaId: todasLasCasas[0]?.id ?? '',
    valor: 10,
    notas: '',
  })

  const refresh = useCallback(() => setState(loadState()), [])
  useEffect(() => { refresh() }, [refresh])

  const handleAdd = () => {
    const casa = todasLasCasas.find(c => c.id === form.casaId)
    if (!casa) return
    agregarBono({
      tipo: form.tipo,
      casaId: form.casaId,
      casaNombre: casa.nombre,
      valor: form.valor,
      limpiado: false,
      notas: form.notas || undefined,
    })
    setShowForm(false)
    setForm({ tipo: 'freebet', casaId: todasLasCasas[0]?.id ?? '', valor: 10, notas: '' })
    refresh()
  }

  const pendientes = state.bonos.filter(b => !b.limpiado)
  const limpiados = state.bonos.filter(b => b.limpiado)
  const valorTotal = pendientes.reduce((a, b) => a + b.valor, 0)

  return (
    <div className="flex flex-col gap-6">

      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-stone-100">🎁 Bonos y Free Bets</h1>
          <p className="text-stone-400 text-sm mt-1">
            {pendientes.length > 0
              ? `${pendientes.length} pendiente${pendientes.length !== 1 ? 's' : ''} · ${valorTotal.toFixed(2)} € por limpiar`
              : 'Registra tus freebets y reembolsos para no perderlos'}
          </p>
        </div>
        <button
          onClick={() => setShowForm(v => !v)}
          className="px-4 py-2 rounded-xl bg-[#2A1F3D] text-white text-sm font-semibold hover:bg-[#3d2e57] active:scale-95 transition-all"
        >
          + Añadir bono
        </button>
      </div>

      {/* KPIs — solo si hay datos */}
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

      {/* Formulario */}
      {showForm && (
        <div className="rounded-2xl bg-white border border-stone-200 p-5 flex flex-col gap-4">
          <div>
            <h2 className="text-sm font-semibold text-stone-700">Nuevo bono</h2>
            <p className="text-xs text-stone-400 mt-0.5">Anota la freebet o reembolso recibido para no perderlo</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-stone-500 font-medium">Tipo de bono</label>
              <select
                value={form.tipo}
                onChange={e => setForm(f => ({ ...f, tipo: e.target.value as Bono['tipo'] }))}
                className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2A1F3D]"
              >
                <option value="freebet">🎁 Free Bet (stake no devuelto)</option>
                <option value="reembolso">💰 Reembolso (si pierdes)</option>
                <option value="otro">📋 Otro</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-stone-500 font-medium">Casa de apuestas</label>
              <select
                value={form.casaId}
                onChange={e => setForm(f => ({ ...f, casaId: e.target.value }))}
                className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2A1F3D]"
              >
                {todasLasCasas.map(c => (
                  <option key={c.id} value={c.id}>{c.nombre}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-stone-500 font-medium">Valor del bono (€)</label>
              <input
                type="number" value={form.valor} min={1} step={0.5}
                onChange={e => setForm(f => ({ ...f, valor: parseFloat(e.target.value) || 0 }))}
                className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2A1F3D]"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-stone-500 font-medium">Notas (opcional)</label>
              <input
                type="text" value={form.notas} placeholder="ej. vence el 20/03, no fragmentable"
                onChange={e => setForm(f => ({ ...f, notas: e.target.value }))}
                className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2A1F3D]"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={handleAdd} className="px-4 py-2 rounded-xl bg-[#2A1F3D] text-white text-sm font-semibold hover:bg-[#3d2e57] transition-all">
              Guardar
            </button>
            <button onClick={() => setShowForm(false)} className="px-4 py-2 rounded-xl border border-stone-200 text-stone-600 text-sm hover:bg-stone-100 transition-all">
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Pendientes */}
      <section>
        <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
          Pendientes de limpiar
        </h2>
        {pendientes.length === 0 ? (
          <EmptyStatePendientes onAdd={() => setShowForm(true)} />
        ) : (
          <div className="flex flex-col gap-3">
            {pendientes.map(bono => (
              <div key={bono.id} className="rounded-2xl bg-white border border-stone-200 p-4 flex items-center gap-4 hover:border-amber-200 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-xl shrink-0">
                  {TIPO_EMOJI[bono.tipo]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-stone-800 text-sm">{bono.casaNombre}</span>
                    <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                      {TIPO_LABEL[bono.tipo]}
                    </span>
                  </div>
                  <p className="text-xs text-stone-400 mt-0.5">Recibido {formatDate(bono.fechaRecibido)}</p>
                  {bono.notas && <p className="text-xs text-stone-400 truncate">{bono.notas}</p>}
                  <p className="text-xs text-stone-400 mt-1">
                    💡 Usa la calculadora en modo{' '}
                    <Link href="/calculadora" className="text-blue-500 hover:underline">
                      {bono.tipo === 'reembolso' ? 'Reembolso' : 'Apuesta Gratis'}
                    </Link>
                    {' '}para limpiar este bono
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <span className="font-bold text-amber-600 text-base">{bono.valor.toFixed(2)} €</span>
                  <button
                    onClick={() => { limpiarBono(bono.id); refresh() }}
                    className="text-xs px-3 py-1.5 rounded-lg bg-[#2A1F3D] text-white hover:bg-[#3d2e57] active:scale-95 transition-all"
                  >
                    Marcar limpiado ✓
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Ya limpiados */}
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
