'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { agregarBono, limpiarBono } from '@/lib/storage/userState'
import { todasLasCasas } from '@/lib/presets'
import type { Bono, UserState } from '@/types/user'

type Variant = 'simple' | 'premium'

interface BonosPendientesOperativoProps {
  state: UserState
  onUpdate: () => void
  variant?: Variant
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })
}

const TIPO_EMOJI: Record<Bono['tipo'], string> = { freebet: '🎁', reembolso: '💰', otro: '📋' }
const TIPO_LABEL: Record<Bono['tipo'], string> = { freebet: 'Free Bet', reembolso: 'Reembolso', otro: 'Otro' }

export default function BonosPendientesOperativo({
  state,
  onUpdate,
  variant = 'simple',
}: BonosPendientesOperativoProps) {
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({
    tipo: 'freebet' as Bono['tipo'],
    casaId: todasLasCasas[0]?.id ?? '',
    valor: 10,
    notas: '',
  })

  const pendientes = useMemo(() => state.bonos.filter(b => !b.limpiado), [state.bonos])
  const valorTotal = useMemo(() => pendientes.reduce((a, b) => a + b.valor, 0), [pendientes])
  const isPremium = variant === 'premium'

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
    onUpdate()
  }

  const wrapperClass = isPremium
    ? 'relative overflow-hidden rounded-[1.75rem] border border-violet-200/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(248,244,255,0.96)_100%)] p-5 shadow-[0_24px_70px_rgba(46,16,101,0.08)] ring-1 ring-white/85 backdrop-blur-md sm:p-6'
    : 'flex flex-col gap-4'

  const primaryButtonClass = isPremium
    ? 'inline-flex items-center justify-center rounded-2xl border border-violet-300/60 bg-[linear-gradient(135deg,#6d28d9_0%,#7c3aed_55%,#8b5cf6_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(124,58,237,0.28)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_52px_rgba(124,58,237,0.34)] active:scale-[0.99]'
    : 'px-4 py-2 rounded-xl bg-[#2A1F3D] text-white text-sm font-semibold hover:bg-[#3d2e57] active:scale-95 transition-all'

  const inputClass = isPremium
    ? 'rounded-2xl border border-slate-200/80 bg-white px-3.5 py-3 text-sm text-slate-900 shadow-inner shadow-slate-950/[0.02] outline-none transition focus:border-violet-300 focus:ring-4 focus:ring-violet-500/10'
    : 'rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2A1F3D]'

  return (
    <section className={wrapperClass}>
      {isPremium && (
        <>
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/75 to-transparent" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-violet-500/10 blur-3xl" />
        </>
      )}

      <div className={isPremium ? 'relative flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between' : 'flex items-center justify-between gap-4'}>
        <div>
          <p className={isPremium ? 'text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-700' : 'text-xs font-semibold text-stone-400 uppercase tracking-wider'}>
            Bonos pendientes de limpiar
          </p>
          <p className={isPremium ? 'mt-2 text-sm leading-6 text-slate-600' : 'mt-1 text-sm text-stone-400'}>
            {pendientes.length > 0
              ? `${pendientes.length} pendiente${pendientes.length !== 1 ? 's' : ''} · ${valorTotal.toFixed(2)} € por convertir en saldo real.`
              : 'Anota freebets, reembolsos y bonos recibidos para no perder el siguiente paso.'}
          </p>
        </div>

        <button onClick={() => setShowForm(v => !v)} className={primaryButtonClass}>
          + Añadir bono
        </button>
      </div>

      {showForm && (
        <div className={isPremium ? 'relative mt-5 rounded-2xl border border-violet-200/60 bg-white/82 p-5 shadow-[0_16px_38px_rgba(46,16,101,0.06)] ring-1 ring-white/80' : 'rounded-2xl bg-white border border-stone-200 p-5 flex flex-col gap-4'}>
          <div>
            <h2 className={isPremium ? 'text-sm font-semibold uppercase tracking-[0.18em] text-violet-700' : 'text-sm font-semibold text-stone-700'}>Nuevo bono</h2>
            <p className={isPremium ? 'mt-1 text-sm leading-6 text-slate-600' : 'text-xs text-stone-400 mt-0.5'}>Anota la freebet o reembolso recibido para no perderlo.</p>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label className={isPremium ? 'text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500' : 'text-xs text-stone-500 font-medium'}>Tipo de bono</label>
              <select
                value={form.tipo}
                onChange={e => setForm(f => ({ ...f, tipo: e.target.value as Bono['tipo'] }))}
                className={inputClass}
              >
                <option value="freebet">🎁 Free Bet (stake no devuelto)</option>
                <option value="reembolso">💰 Reembolso (si pierdes)</option>
                <option value="otro">📋 Otro</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className={isPremium ? 'text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500' : 'text-xs text-stone-500 font-medium'}>Casa de apuestas</label>
              <select
                value={form.casaId}
                onChange={e => setForm(f => ({ ...f, casaId: e.target.value }))}
                className={inputClass}
              >
                {todasLasCasas.map(c => (
                  <option key={c.id} value={c.id}>{c.nombre}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className={isPremium ? 'text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500' : 'text-xs text-stone-500 font-medium'}>Valor del bono (€)</label>
              <input
                type="number"
                value={form.valor}
                min={1}
                step={0.5}
                onChange={e => setForm(f => ({ ...f, valor: parseFloat(e.target.value) || 0 }))}
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className={isPremium ? 'text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500' : 'text-xs text-stone-500 font-medium'}>Notas (opcional)</label>
              <input
                type="text"
                value={form.notas}
                placeholder="ej. vence el 20/03, no fragmentable"
                onChange={e => setForm(f => ({ ...f, notas: e.target.value }))}
                className={inputClass}
              />
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <button onClick={handleAdd} className={primaryButtonClass}>
              Guardar
            </button>
            <button
              onClick={() => setShowForm(false)}
              className={isPremium ? 'inline-flex items-center justify-center rounded-2xl border border-slate-200/90 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700' : 'px-4 py-2 rounded-xl border border-stone-200 text-stone-600 text-sm hover:bg-stone-100 transition-all'}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      <div className={isPremium ? 'relative mt-5' : ''}>
        {pendientes.length === 0 ? (
          <div className={isPremium ? 'rounded-2xl border border-violet-200/60 bg-white/80 p-6 text-center shadow-[0_16px_38px_rgba(46,16,101,0.06)] ring-1 ring-white/80' : 'rounded-2xl bg-white border border-stone-200 p-8 flex flex-col items-center gap-5 text-center'}>
            <div className={isPremium ? 'mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-200/70 bg-violet-50 text-3xl shadow-[0_12px_30px_rgba(124,58,237,0.08)]' : 'w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-3xl'}>
              🎁
            </div>
            <div className={isPremium ? 'mx-auto mt-4 max-w-lg' : 'max-w-sm'}>
              <p className={isPremium ? 'text-lg font-semibold tracking-tight text-slate-900' : 'text-stone-700 font-semibold text-base mb-1'}>No hay bonos pendientes de limpiar</p>
              <p className={isPremium ? 'mt-2 text-sm leading-6 text-slate-600' : 'text-stone-400 text-sm leading-relaxed'}>
                Cuando recibas una freebet o reembolso de una casa de apuestas, registralo aqui para no perder el rastro y luego limpiarlo con la calculadora.
              </p>
            </div>

            <div className={isPremium ? 'mx-auto mt-4 max-w-lg rounded-2xl border border-amber-200/70 bg-amber-50/85 px-4 py-3 text-sm leading-6 text-amber-800' : 'bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 text-xs text-amber-700 max-w-sm'}>
              <span className="font-semibold">¿Qué significa limpiar un bono?</span> Convertir una freebet o reembolso en dinero real usando la calculadora en modo Apuesta Gratis o Reembolso.
            </div>

            <div className={isPremium ? 'mx-auto mt-5 flex max-w-lg flex-col gap-3 sm:flex-row sm:justify-center' : 'flex flex-col gap-2 w-full max-w-sm'}>
              <button onClick={() => setShowForm(true)} className={primaryButtonClass}>
                + Añadir bono manualmente
              </button>
              <Link href="/casas" className={isPremium ? 'inline-flex items-center justify-center rounded-2xl border border-violet-200/70 bg-white px-5 py-3 text-sm font-semibold text-violet-700 transition-colors hover:border-violet-300/80 hover:bg-violet-50' : 'text-xs text-emerald-500 hover:underline'}>
                Ir a casas →
              </Link>
              <Link href="/calculadora" className={isPremium ? 'inline-flex items-center justify-center rounded-2xl border border-violet-200/70 bg-white px-5 py-3 text-sm font-semibold text-violet-700 transition-colors hover:border-violet-300/80 hover:bg-violet-50' : 'text-xs text-blue-500 hover:underline'}>
                Abrir calculadora →
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {pendientes.map(bono => (
              <div
                key={bono.id}
                className={isPremium ? 'group rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-[0_16px_36px_rgba(46,16,101,0.06)] ring-1 ring-white/80 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-violet-200/80 hover:shadow-[0_22px_50px_rgba(46,16,101,0.1)]' : 'rounded-2xl bg-white border border-stone-200 p-4 flex items-center gap-4 hover:border-amber-200 transition-colors'}
              >
                <div className={isPremium ? 'flex items-start gap-4' : 'contents'}>
                  <div className={isPremium ? 'flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-amber-200/80 bg-amber-50 text-lg text-amber-700' : 'w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-xl shrink-0'}>
                    {TIPO_EMOJI[bono.tipo]}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={isPremium ? 'font-semibold text-slate-900 text-sm' : 'font-semibold text-stone-800 text-sm'}>{bono.casaNombre}</span>
                      <span className={isPremium ? 'rounded-full border border-amber-200/80 bg-amber-50/85 px-2.5 py-1 text-[11px] font-semibold text-amber-700' : 'text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full'}>
                        {TIPO_LABEL[bono.tipo]}
                      </span>
                    </div>
                    <p className={isPremium ? 'mt-2 text-xs text-slate-500' : 'text-xs text-stone-400 mt-0.5'}>Recibido {formatDate(bono.fechaRecibido)}</p>
                    {bono.notas && <p className={isPremium ? 'mt-1 truncate text-xs text-slate-500' : 'text-xs text-stone-400 truncate'}>{bono.notas}</p>}
                    <p className={isPremium ? 'mt-2 text-xs leading-5 text-slate-500' : 'text-xs text-stone-400 mt-1'}>
                      Usa la calculadora en modo{' '}
                      <Link href="/calculadora" className={isPremium ? 'font-semibold text-violet-700 hover:underline' : 'text-blue-500 hover:underline'}>
                        {bono.tipo === 'reembolso' ? 'Reembolso' : 'Apuesta Gratis'}
                      </Link>
                      {' '}para limpiar este bono.
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <span className={isPremium ? 'inline-flex rounded-2xl border border-amber-200/80 bg-amber-50/85 px-3 py-2 text-sm font-semibold font-mono text-amber-700' : 'font-bold text-amber-600 text-base'}>
                      {bono.valor.toFixed(2)} €
                    </span>
                    <button
                      onClick={() => {
                        limpiarBono(bono.id)
                        onUpdate()
                      }}
                      className={isPremium ? 'mt-2 inline-flex rounded-2xl border border-violet-300/60 bg-violet-700 px-3 py-2 text-xs font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-violet-800' : 'mt-2 text-xs px-3 py-1.5 rounded-lg bg-[#2A1F3D] text-white hover:bg-[#3d2e57] active:scale-95 transition-all'}
                    >
                      Marcar limpiado ✓
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className={isPremium ? 'flex flex-wrap gap-3 pt-1' : 'flex gap-3 justify-center pt-1'}>
              <Link href="/casas" className={isPremium ? 'rounded-full border border-violet-200/70 bg-white/75 px-4 py-2 text-xs font-semibold text-violet-700 transition-colors hover:border-violet-300/80 hover:bg-violet-50' : 'text-xs text-emerald-500 hover:underline'}>
                Ir a casas →
              </Link>
              <Link href="/calculadora" className={isPremium ? 'rounded-full border border-violet-200/70 bg-white/75 px-4 py-2 text-xs font-semibold text-violet-700 transition-colors hover:border-violet-300/80 hover:bg-violet-50' : 'text-xs text-blue-500 hover:underline'}>
                Abrir calculadora →
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
