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
  const fases = casa.promos.reduce((total, promo) => total + promo.fases.length, 0)

  return (
    <Link
      href={`/casas/${casa.id}`}
      className={`block bg-white rounded-2xl shadow-sm border border-gray-100 ${style.border} overflow-hidden hover:shadow-md transition-all group ${completada ? 'opacity-60' : ''}`}
    >
      <div className="p-4 sm:p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 min-w-0">
            {/* Avatar */}
            <div
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-bold text-white text-sm shrink-0
                ${style.dot === 'bg-emerald-500' ? 'bg-emerald-500'
                  : style.dot === 'bg-blue-400' ? 'bg-blue-500'
                    : style.dot === 'bg-amber-400' ? 'bg-amber-500'
                      : 'bg-purple-500'}`}
            >
              {casa.nombre[0]}
            </div>
            <div className="min-w-0">
              <div className="flex items-start gap-2 flex-wrap">
                <h3 className="font-bold text-gray-900 text-[15px] sm:text-base leading-tight">{casa.nombre}</h3>
                <span className={`text-[11px] px-2 py-0.5 rounded-full font-semibold ${style.badge}`}>
                  {style.label}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                {completada ? (
                  <span className="text-[11px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">✅ Completada</span>
                ) : enProgreso ? (
                  <span className="text-[11px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">🔄 En progreso</span>
                ) : (
                  <span className="text-[11px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">Sin empezar</span>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-2 line-clamp-2 sm:line-clamp-2 leading-relaxed">
                {casa.descripcionBreve}
              </p>
              <div className="flex sm:hidden items-center gap-x-2 gap-y-1 mt-2 text-[11px] text-stone-400 flex-wrap">
                <span className="rounded-full bg-stone-100 px-2 py-0.5 text-stone-600">
                  {casa.promos.length} oferta{casa.promos.length !== 1 ? 's' : ''}
                </span>
                <span className="rounded-full bg-stone-100 px-2 py-0.5 text-stone-600">
                  {fases} fase{fases !== 1 ? 's' : ''}
                </span>
                <span className={`font-medium ${getDificultadColor(casa.dificultad ?? 3)}`}>
                  {'⭐'.repeat(casa.dificultad ?? 3)} {getDificultadLabel(casa.dificultad ?? 3)}
                </span>
              </div>
            </div>
          </div>

          {/* Beneficio */}
          <div className="text-right shrink-0 rounded-xl bg-emerald-50 px-2.5 py-2 sm:bg-transparent sm:px-0 sm:py-0">
            <p className="text-lg sm:text-lg font-bold text-gray-900 leading-none">+{casa.beneficioPotencial} €</p>
            <p className="text-[11px] text-emerald-700 sm:text-xs sm:text-gray-400 mt-1">potencial</p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-3 mt-3 sm:mt-4">
          <div className="hidden sm:flex items-center gap-2.5 text-xs text-gray-400 flex-wrap">
            <span>{casa.promos.length} oferta{casa.promos.length !== 1 ? 's' : ''}</span>
            <span>·</span>
            <span>
              {fases} fase
              {fases !== 1 ? 's' : ''}
            </span>
            <span>·</span>
            <span className={`font-medium ${getDificultadColor(casa.dificultad ?? 3)}`}>
              {'⭐'.repeat(casa.dificultad ?? 3)} {getDificultadLabel(casa.dificultad ?? 3)}
            </span>
          </div>

          <span
            className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs sm:text-sm font-semibold text-emerald-700 transition-all group-hover:border-emerald-300 group-hover:bg-emerald-100 group-hover:translate-x-0.5 ml-auto"
          >
            Ver detalle →
          </span>
        </div>
      </div>
    </Link>
  )
}

export default CasaCard
