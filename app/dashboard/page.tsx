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
import ProximasAcciones from '@/components/dashboard/ProximasAcciones'
import CasasProgress from '@/components/dashboard/CasasProgress'

 type Market = 'espana' | 'latam'

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

 const START_ACTIONS = {
   espana: [
     {
       id: 'guia-inicial',
       title: 'Leer la guía inicial',
       description: 'Empieza por la guía para entender la secuencia recomendada.',
       href: '/guias',
       label: 'Abrir guías',
       external: false,
     },
     {
       id: 'betfair',
       title: 'Preparar Betfair Exchange',
       description: 'Ten listo el exchange antes de empezar para cubrir mejor tu primera apuesta y ganar seguridad.',
       href: 'https://www.betfair.es/exchange/plus/',
       label: 'Preparar Betfair',
       external: true,
     },
     {
       id: 'sportium',
       title: 'Empezar por Sportium',
       description: 'Una casa sencilla y clara para arrancar con menos fricción.',
       href: '/casas/sportium',
       label: 'Empezar con Sportium',
       external: false,
     },
   ],
   latam: [
     {
       id: 'guia-inicial-latam',
       title: 'Leer la guía inicial',
       description: 'Empieza por la guía para entender la secuencia recomendada en LATAM.',
       href: '/guias',
       label: 'Abrir guías',
       external: false,
     },
     {
       id: 'betfair-latam',
       title: 'Preparar Betfair Exchange',
       description: 'Ten listo el exchange antes de empezar. Betfair está disponible en la mayoría de países LATAM.',
       href: 'https://apuestas.betfair.es/latinoamerica/',
       label: 'Preparar Betfair',
       external: true,
     },
     {
       id: 'betfair-sportsbook',
       title: 'Empezar por Betfair Sportsbook',
       description: 'Disponible en 15 países LATAM. Apuesta 10 USD y recibe 10 USD. Código ZRW10M.',
       href: '/casas/betfair-sportsbook-latam',
       label: 'Ver bono',
       external: false,
     },
   ],
 } as const

export default function DashboardPage() {
  const [state, setState] = useState<UserState>(initialUserState)
  const [heroAbierto, setHero] = useState(false)
  const [market, setMarket] = useState<Market>('espana')

  const refresh = useCallback(() => {
    setState(loadState())
  }, [])

  useEffect(() => {
    refresh()
  }, [refresh])

  const recomendadas = todasLasCasas
    .filter((c) => c.market === market)
    .filter((c) => {
      const p = state.progresos[c.id]
      return !p || (p.estado !== 'completada' && p.estado !== 'descartada')
    })
    .sort((a, b) => {
      const aEnCurso = ['en_progreso', 'en_curso'].includes(state.progresos[a.id]?.estado ?? '')
      const bEnCurso = ['en_progreso', 'en_curso'].includes(state.progresos[b.id]?.estado ?? '')
      if (aEnCurso && !bEnCurso) return -1
      if (!aEnCurso && bEnCurso) return 1

      const difA = a.dificultad ?? 3
      const difB = b.dificultad ?? 3
      if (difA !== difB) return difA - difB
      return b.beneficioPotencial - a.beneficioPotencial
    })
    .slice(0, 3)

  const bonosPendientes = state.bonos.filter((b) => !b.limpiado)
  const moneda = market === 'espana' ? '€' : 'USD'
  const startActions = START_ACTIONS[market]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setMarket('espana')}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-colors border ${
            market === 'espana'
              ? 'bg-emerald-500 border-emerald-500 text-white'
              : 'bg-white border-stone-200 text-stone-500 hover:border-stone-400'
          }`}
        >
          🇪🇸 España
        </button>
        <button
          type="button"
          onClick={() => setMarket('latam')}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-colors border ${
            market === 'latam'
              ? 'bg-emerald-500 border-emerald-500 text-white'
              : 'bg-white border-stone-200 text-stone-500 hover:border-stone-400'
          }`}
        >
          🌎 LATAM
        </button>
      </div>

      <section className="rounded-3xl border border-emerald-200 bg-white p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col gap-2 mb-5">
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-[0.2em]">
            EMPIEZA AQUÍ
          </p>
          <h1 className="text-xl sm:text-2xl font-bold text-stone-800">
            Si estás empezando, sigue este orden para no liarte
          </h1>
          <p className="text-sm text-stone-500">
            {market === 'espana'
              ? 'Primero ve a la guía, prepara Betfair Exchange y empieza por Sportium. Después usa la calculadora cuando hagas la apuesta.'
              : 'Primero ve a la guía, prepara Betfair Exchange LATAM y empieza por Betfair Sportsbook. Disponible en 15 países.'}
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {startActions.map((action, index) => {
            const card = (
              <div className="group h-full rounded-2xl border border-stone-200 bg-stone-50/70 p-4 hover:border-emerald-300 hover:bg-white transition-all">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-xs font-semibold text-stone-400 uppercase tracking-wide">
                    Ruta inicial
                  </span>
                </div>
                <h2 className="text-base font-bold text-stone-800 mb-2">{action.title}</h2>
                <p className="text-sm text-stone-500 leading-relaxed mb-4">{action.description}</p>
                <span className="inline-flex items-center rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-white group-hover:bg-emerald-400 transition-colors">
                  {action.label}
                </span>
              </div>
            )

            return action.external ? (
              <a key={action.id} href={action.href} target="_blank" rel="noopener noreferrer">
                {card}
              </a>
            ) : (
              <Link key={action.id} href={action.href}>
                {card}
              </Link>
            )
          })}
        </div>
      </section>

      <ProgressSummary state={state} market={market} />

      <CasasProgress />

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
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#12112A] to-[#2A1F3D] flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {casa.nombre[0]}
                    </div>
                    <span className="font-semibold text-stone-800 text-sm truncate">{casa.nombre}</span>
                  </div>
                  <span className="text-base font-bold text-emerald-600 shrink-0">
                    +{casa.beneficioPotencial} {moneda}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tip.badge}`}>
                    {tip.icon} {tip.label}
                  </span>
                  <span className={`text-xs font-medium ${getDificultadColor(casa.dificultad ?? 3)}`}>
                    {'⭐'.repeat(casa.dificultad ?? 3)} {getDificultadLabel(casa.dificultad ?? 3)}
                  </span>
                  {stakeMax > 0 && (
                    <span className="text-xs text-stone-400">Stake {stakeMax} {moneda}</span>
                  )}
                  {totalFases > 1 && (
                    <span className="text-xs text-stone-400">{totalFases} fases</span>
                  )}
                </div>

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

      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
            Próximas acciones
          </h2>
        </div>
        <ProximasAcciones state={state} />
      </section>

      <div className="grid md:grid-cols-2 gap-4">
        <CasasPendientes progresos={state.progresos} />
        {bonosPendientes.length > 0 && (
          <BonosPendientes bonos={state.bonos} onUpdate={refresh} />
        )}
      </div>

      <div className="rounded-2xl border border-stone-200 bg-white overflow-hidden">
        <button
          onClick={() => setHero((v) => !v)}
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
              El <span className="font-semibold text-stone-800">matched betting</span> aprovecha bonos de bienvenida
              cubriendo cada apuesta en Betfair Exchange para reducir el impacto del azar y ejecutar con más control.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mb-4">
              <div className="bg-stone-50 rounded-xl p-3 border border-stone-100">
                <p className="text-emerald-600 font-bold text-sm mb-1">① Elige una casa</p>
                <p className="text-xs text-stone-500 leading-relaxed">
                  {market === 'espana'
                    ? 'Empieza por una oferta fácil como Sportium para coger ritmo.'
                    : 'Empieza por Betfair Sportsbook, disponible en 15 países LATAM.'}
                </p>
              </div>
              <div className="bg-stone-50 rounded-xl p-3 border border-stone-100">
                <p className="text-blue-600 font-bold text-sm mb-1">② Usa la calculadora</p>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Introduce cuotas y stake para saber cuánto cubrir en el exchange.
                </p>
              </div>
              <div className="bg-stone-50 rounded-xl p-3 border border-stone-100">
                <p className="text-purple-600 font-bold text-sm mb-1">③ Registra y repite</p>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Marca fases completadas y pasa a la siguiente casa con el proceso ya claro.
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
