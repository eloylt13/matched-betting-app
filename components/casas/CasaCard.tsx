// components/casas/CasaCard.tsx
import Link from 'next/link'
import { Casa, EstadoCasa } from '@/types/presets'

interface Props {
  casa: Casa
  estado?: EstadoCasa
}

function getTipologiaStyle(casa: Casa) {
  const tipo = casa.tipologia

  if (tipo === 'exchange') return {
    border: 'border-l-4 border-l-purple-500',
    badge: 'bg-purple-100 text-purple-700',
    dot: 'bg-purple-500',
    label: 'Exchange',
    icon: '♻️',
  }
  if (tipo === 'rollover') return {
    border: 'border-l-4 border-l-amber-400',
    badge: 'bg-amber-100 text-amber-700',
    dot: 'bg-amber-400',
    label: 'Rollover',
    icon: '🔄',
  }
  if (tipo === 'reembolso') return {
    border: 'border-l-4 border-l-blue-400',
    badge: 'bg-blue-100 text-blue-700',
    dot: 'bg-blue-400',
    label: 'Reembolso',
    icon: '🔵',
  }
  return {
    border: 'border-l-4 border-l-emerald-500',
    badge: 'bg-emerald-100 text-emerald-700',
    dot: 'bg-emerald-500',
    label: 'Apuesta & Recibe',
    icon: '🟢',
  }
}

function getDificultadLabel(d: number) {
  const labels = ['', 'Muy fácil', 'Fácil', 'Media', 'Avanzada', 'Experto']
  return labels[d] ?? 'Media'
}

function getDificultadColor(d: number) {
  if (d <= 1) return 'text-emerald-600'
  if (d <= 2) return 'text-green-600'
  if (d === 3) return 'text-amber-600'
  if (d === 4) return 'text-orange-600'
  return 'text-red-600'
}

export function CasaCard({ casa, estado }: Props) {
  const style = getTipologiaStyle(casa)
  const completada = estado === 'completada'
  const enProgreso = estado === 'en_progreso' || estado === 'en_curso'

  return (
    <Link
      href={`/casas/${casa.id}`}
      className={`block bg-white rounded-2xl shadow-sm border border-gray-100 ${style.border} overflow-hidden hover:shadow-md transition-all group ${completada ? 'opacity-60' : ''}`}
    >
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-sm shrink-0
                ${style.dot === 'bg-emerald-500' ? 'bg-emerald-500'
                  : style.dot === 'bg-blue-400' ? 'bg-blue-500'
                    : style.dot === 'bg-amber-400' ? 'bg-amber-500'
                      : 'bg-purple-500'}`}
            >
              {casa.nombre[0]}
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base">{casa.nombre}</h3>
              <div className="flex items-center gap-2 mt-0.5">
                {completada ? (
                  <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">✅ Completada</span>
                ) : enProgreso ? (
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">🔄 En progreso</span>
                ) : (
                  <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">Sin empezar</span>
                )}
                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${style.badge}`}>
                  {style.icon} {style.label}
                </span>
              </div>
              <div className="flex sm:hidden items-center gap-2 mt-1.5 text-xs text-stone-400">
                <span className={`font-medium ${getDificultadColor(casa.dificultad ?? 3)}`}>
                  {'⭐'.repeat(casa.dificultad ?? 3)} {getDificultadLabel(casa.dificultad ?? 3)}
                </span>
                {casa.promos[0]?.fases[0]?.stakeRecomendado ? (
                  <>
                    <span>·</span>
                    <span>Stake {casa.promos[0].fases[0].stakeRecomendado} €</span>
                  </>
                ) : null}
              </div>
            </div>
          </div>

          {/* Beneficio */}
          <div className="text-right shrink-0">
            <p className="text-xl sm:text-lg font-bold text-gray-900">+{casa.beneficioPotencial} €</p>
            <p className="text-xs text-gray-400">potencial</p>
          </div>
        </div>

        {/* Descripción */}
        <p className="hidden sm:block text-sm text-gray-500 mt-3 line-clamp-2">{casa.descripcionBreve}</p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4">
          <div className="hidden sm:flex items-center gap-3 text-xs text-gray-400">
            <span>{casa.promos.length} oferta{casa.promos.length !== 1 ? 's' : ''}</span>
            <span>·</span>
            <span>
              {casa.promos[0]?.fases.length ?? 0} fase
              {(casa.promos[0]?.fases.length ?? 0) !== 1 ? 's' : ''}
            </span>
            <span>·</span>
            <span className={`font-medium ${getDificultadColor(casa.dificultad ?? 3)}`}>
              {'⭐'.repeat(casa.dificultad ?? 3)} {getDificultadLabel(casa.dificultad ?? 3)}
            </span>
          </div>

          <span
            className="text-sm sm:text-xs font-semibold text-emerald-600 hover:text-emerald-500 transition-all group-hover:translate-x-0.5 ml-auto"
          >
            Ver detalle →
          </span>
        </div>
      </div>
    </Link>
  )
}

export default CasaCard
