// app/dashboard/page.tsx — Dashboard principal

'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { loadState } from '@/lib/storage/userState'
import { todasLasCasas } from '@/lib/presets'
import type { UserState } from '@/types/user'
import { initialUserState } from '@/types/user'
import ProgressSummary from '@/components/dashboard/ProgressSummary'
import CasasPendientes from '@/components/dashboard/CasasPendientes'
import BonosPendientes from '@/components/dashboard/BonosPendientes'

const TIPOLOGIA_BADGE: Record<string, { badge: string; icon: string; label: string }> = {
  'apuesta-recibe': { badge: 'bg-emerald-100 text-emerald-700', icon: '🟢', label: 'Apuesta & Recibe' },
  reembolso: { badge: 'bg-blue-100 text-blue-700', icon: '🔵', label: 'Reembolso' },
  rollover: { badge: 'bg-amber-100 text-amber-700', icon: '🔄', label: 'Rollover' },
  exchange: { badge: 'bg-purple-100 text-purple-700', icon: '♻️', label: 'Exchange' },
}

function getDificultadLabel(d: number) {
  return ['', 'Muy fácil', 'Fácil', 'Media', 'Avanzada', 'Experto'][d] ?? 'Media'
}

function getDificultadColor(d: number) {
  if (d <= 1) return 'text-emerald-600'
  if (d <= 2) return 'text-green-600'
  if (d === 3) return 'text-amber-600'
  if (d === 4) return 'text-orange-600'
  return 'text-red-600'
}

export default function DashboardPage() {
  const [state, setState] = useState<UserState>(initialUserState)
  const [heroAbierto, setHero] = useState(false)

  const refresh = useCallback(() => {
    setState(loadState())
  }, [])

  useEffect(() => {
    refresh()
  }, [refresh])

  // Recomendadas: no completadas ni descartadas, en curso primero, luego por beneficio desc
  const recomendadas = todasLasCasas
    .filter((c) => {
      const p = state.progresos[c.id]
      return !p || (p.estado !== 'completada' && p.estado !== 'descartada')
    })
    .sort((a, b) => {
      const aEnCurso = ['en_progreso', 'en_curso'].includes(state.progresos[a.id]?.estado ?? '')
      const bEnCurso = ['en_progreso', 'en_curso'].includes(state.progresos[b.id]?.estado ?? '')
      if (aEnCurso && !bEnCurso) return -1
      if (!aEnCurso && bEnCurso) return 1
      // Primero más fácil, luego mayor beneficio
      const difA = a.dificultad ?? 3
      const difB = b.dificultad ?? 3
      if (difA !== difB) return difA - difB
      return b.beneficioPotencial - a.beneficioPotencial
    })
    .slice(0, 3)

  const bonosPendientes = state.bonos.filter((b) => !b.limpiado)

  return (
    <div className="flex flex-col gap-6">

      {/* KPIs compactos */}
      <ProgressSummary state={state} />

      {/* Siguiente mejor acción (Solo Móvil) */}
      {recomendadas.length > 0 && (
        <div className="block sm:hidden bg-gradient-to-r from-emerald-900/40 to-emerald-800/20 rounded-2xl p-4">
          <p className="font-semibold text-emerald-800 text-sm mb-1">👉 Empieza por aquí</p>
          <div className="flex items-center justify-between mt-2">
            <div>
              <p className="font-bold text-stone-800">{recomendadas[0].nombre}</p>
              <div className="flex items-center gap-1.5 text-xs mt-0.5">
                <span className="text-emerald-600 font-semibold">+{recomendadas[0].beneficioPotencial} €</span>
                <span className="text-stone-400">·</span>
                <span className={getDificultadColor(recomendadas[0].dificultad ?? 3)}>
                  {getDificultadLabel(recomendadas[0].dificultad ?? 3)}
                </span>
              </div>
            </div>
            <Link
              href={`/casas/${recomendadas[0].id}`}
              className="shrink-0 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
            >
              Empezar →
            </Link>
          </div>
        </div>
      )}

      {/* Recomendadas para ti */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
            ⭐ Recomendadas para ti
          </h2>
          <Link href="/casas" className="text-xs text-emerald-500 hover:text-emerald-400 transition-colors">
            Ver todas →
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-3">
          {recomendadas.map((casa) => {
            const progreso = state.progresos[casa.id]
            const estado = progreso?.estado ?? 'no_empezada'
            const enCurso = estado === 'en_progreso' || estado === 'en_curso'
            const faseActual = progreso?.faseActual ?? 1
            const totalFases = casa.promos.reduce((acc, p) => acc + p.fases.length, 0)
            const stakeMax = casa.promos[0]?.fases[0]?.stakeRecomendado ?? 0
            const tip = TIPOLOGIA_BADGE[casa.tipologia ?? 'apuesta-recibe'] ?? TIPOLOGIA_BADGE['apuesta-recibe']

            return (
              <Link
                key={casa.id}
                href={`/casas/${casa.id}`}
                className="group bg-white rounded-2xl border border-stone-100 hover:border-emerald-200 hover:shadow-md transition-all p-4 flex flex-col gap-3"
              >
                {/* Header */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#12112A] to-[#2A1F3D] flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {casa.nombre[0]}
                    </div>
                    <span className="font-semibold text-stone-800 text-sm truncate">{casa.nombre}</span>
                  </div>
                  <span className="text-base font-bold text-emerald-600 shrink-0">
                    +{casa.beneficioPotencial} €
                  </span>
                </div>

                {/* Metadatos */}
                <div className="flex flex-wrap gap-1.5">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tip.badge}`}>
                    {tip.icon} {tip.label}
                  </span>
                  <span className={`text-xs font-medium ${getDificultadColor(casa.dificultad ?? 3)}`}>
                    {'⭐'.repeat(casa.dificultad ?? 3)} {getDificultadLabel(casa.dificultad ?? 3)}
                  </span>
                  {stakeMax > 0 && (
                    <span className="text-xs text-stone-400">Stake {stakeMax} €</span>
                  )}
                  {totalFases > 1 && (
                    <span className="text-xs text-stone-400">{totalFases} fases</span>
                  )}
                </div>

                {/* Estado + CTA */}
                <div className="flex items-center justify-between mt-auto pt-1 border-t border-stone-50">
                  {enCurso ? (
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-medium">
                      🔄 Fase {faseActual}/{totalFases}
                    </span>
                  ) : (
                    <span className="text-xs bg-stone-100 text-stone-500 px-2 py-0.5 rounded-full">
                      Sin empezar
                    </span>
                  )}
                  <span className="text-xs font-semibold text-emerald-600 group-hover:text-emerald-500 transition-colors">
                    {enCurso ? 'Continuar →' : 'Empezar →'}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Casas pendientes + Bonos (bonos solo si hay) */}
      <div className="grid md:grid-cols-2 gap-4">
        <CasasPendientes progresos={state.progresos} />
        {bonosPendientes.length > 0 && (
          <BonosPendientes bonos={state.bonos} onUpdate={refresh} />
        )}
      </div>

      {/* Hero colapsable */}
      <div className="rounded-2xl border border-stone-200 bg-white overflow-hidden">
        <button
          onClick={() => setHero(v => !v)}
          className="w-full flex items-center justify-between px-5 py-4 hover:bg-stone-50 transition-colors"
        >
          <span className="text-sm font-semibold text-stone-700">
            💡 ¿Cómo funciona el matched betting?
          </span>
          <span className={`text-stone-400 text-lg transition-transform duration-200 ${heroAbierto ? 'rotate-90' : ''}`}>
            ›
          </span>
        </button>

        {heroAbierto && (
          <div className="border-t border-stone-100 px-5 py-5">
            <p className="text-sm text-stone-600 leading-relaxed mb-4 max-w-2xl">
              El <span className="font-semibold text-stone-800">matched betting</span> es una técnica
              matemática que aprovecha los bonos de bienvenida de las casas de apuestas. Cubriendo
              cada apuesta en Betfair Exchange eliminas el factor suerte — el beneficio queda
              garantizado independientemente del resultado.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mb-4">
              <div className="bg-stone-50 rounded-xl p-3 border border-stone-100">
                <p className="text-emerald-600 font-bold text-sm mb-1">① Elige una casa</p>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Empieza por las de tipo Apuesta & Recibe — las más fáciles y con mayor beneficio.
                </p>
              </div>
              <div className="bg-stone-50 rounded-xl p-3 border border-stone-100">
                <p className="text-blue-600 font-bold text-sm mb-1">② Usa la calculadora</p>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Introduce cuotas y stake. La calculadora te dice cuánto apostar en Betfair para cubrir.
                </p>
              </div>
              <div className="bg-stone-50 rounded-xl p-3 border border-stone-100">
                <p className="text-purple-600 font-bold text-sm mb-1">③ Registra y repite</p>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Marca cada fase como completada y pasa a la siguiente casa. Acumula más de 2.000 €.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/casas"
                className="bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Ver casas disponibles →
              </Link>
              <Link
                href="/calculadora"
                className="bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Abrir calculadora
              </Link>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}
