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
    border: 'border-purple-200/70 before:bg-purple-400/50 before:shadow-[0_0_18px_rgba(168,85,247,0.28)] after:bg-purple-400/10',
    avatar: 'border-purple-200/70 bg-[radial-gradient(circle_at_30%_18%,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0.2)_23%,transparent_44%),linear-gradient(145deg,#c084fc_0%,#8b5cf6_48%,#6d28d9_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.45),inset_0_-10px_18px_rgba(88,28,135,0.22),0_10px_20px_rgba(126,34,206,0.2)]',
    badge: 'border-purple-200/70 bg-purple-50/80 text-purple-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_4px_12px_rgba(126,34,206,0.08)]',
    dot: 'bg-purple-500',
    label: 'Exchange',
    icon: '♻️',
  }
  if (tipo === 'rollover') return {
    border: 'border-amber-200/75 before:bg-amber-400/55 before:shadow-[0_0_18px_rgba(251,191,36,0.3)] after:bg-amber-300/10',
    avatar: 'border-amber-200/70 bg-[radial-gradient(circle_at_30%_18%,rgba(255,255,255,0.76)_0%,rgba(255,255,255,0.22)_23%,transparent_44%),linear-gradient(145deg,#fcd34d_0%,#f59e0b_50%,#d97706_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-10px_18px_rgba(146,64,14,0.2),0_10px_20px_rgba(217,119,6,0.18)]',
    badge: 'border-amber-200/75 bg-amber-50/85 text-amber-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_4px_12px_rgba(217,119,6,0.08)]',
    dot: 'bg-amber-400',
    label: 'Rollover',
    icon: '🔄',
  }
  if (tipo === 'reembolso') return {
    border: 'border-sky-200/75 before:bg-sky-400/50 before:shadow-[0_0_18px_rgba(56,189,248,0.28)] after:bg-sky-300/10',
    avatar: 'border-sky-200/70 bg-[radial-gradient(circle_at_30%_18%,rgba(255,255,255,0.74)_0%,rgba(255,255,255,0.22)_23%,transparent_44%),linear-gradient(145deg,#7dd3fc_0%,#0ea5e9_48%,#0369a1_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.48),inset_0_-10px_18px_rgba(12,74,110,0.2),0_10px_20px_rgba(14,165,233,0.18)]',
    badge: 'border-sky-200/75 bg-sky-50/85 text-sky-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_4px_12px_rgba(14,165,233,0.08)]',
    dot: 'bg-blue-400',
    label: 'Reembolso',
    icon: '🔵',
  }
  return {
    border: 'border-emerald-200/75 before:bg-emerald-400/55 before:shadow-[0_0_18px_rgba(52,211,153,0.3)] after:bg-emerald-300/10',
    avatar: 'border-emerald-200/70 bg-[radial-gradient(circle_at_30%_18%,rgba(255,255,255,0.74)_0%,rgba(255,255,255,0.22)_23%,transparent_44%),linear-gradient(145deg,#6ee7b7_0%,#10b981_48%,#047857_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.48),inset_0_-10px_18px_rgba(6,95,70,0.2),0_10px_20px_rgba(16,185,129,0.18)]',
    badge: 'border-emerald-200/75 bg-emerald-50/85 text-emerald-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_4px_12px_rgba(5,150,105,0.08)]',
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
      className={`relative isolate block rounded-2xl border border-violet-100/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(248,250,255,0.9)_46%,rgba(255,255,255,0.96)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_18px_44px_rgba(15,23,42,0.1),0_6px_18px_rgba(88,28,135,0.06)] ${style.border} overflow-hidden transition-all before:pointer-events-none before:absolute before:inset-y-4 before:left-0 before:z-0 before:w-px before:rounded-r-full before:content-[''] after:pointer-events-none after:absolute after:inset-y-0 after:left-0 after:z-0 after:w-16 after:content-[''] group hover:shadow-md ${completada ? 'opacity-60' : ''}`}
    >
      <div className="relative z-10 p-3 sm:p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-2.5 sm:gap-3">
          <div className="flex items-start gap-2.5 sm:gap-3 min-w-0 flex-1">
            {/* Avatar */}
            <div
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl border flex items-center justify-center font-bold text-white text-sm shrink-0 ring-1 ring-white/70 ${style.avatar}`}
            >
              {casa.nombre[0]}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-start gap-1.5 sm:gap-2 flex-wrap pr-1 sm:pr-0">
                <h3 className="font-bold text-gray-900 text-[15px] sm:text-base leading-tight">{casa.nombre}</h3>
                <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold leading-4 ${style.badge}`}>
                  {style.label}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                {completada ? (
                  <span className="inline-flex items-center rounded-full border border-emerald-200/70 bg-emerald-50/70 px-2 py-0.5 text-[11px] font-medium leading-4 text-emerald-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">✅ Completada</span>
                ) : enProgreso ? (
                  <span className="inline-flex items-center rounded-full border border-sky-200/70 bg-sky-50/75 px-2 py-0.5 text-[11px] font-medium leading-4 text-sky-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">🔄 En progreso</span>
                ) : (
                  <span className="inline-flex items-center rounded-full border border-slate-200/80 bg-white/70 px-2 py-0.5 text-[11px] font-medium leading-4 text-slate-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">Sin empezar</span>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-1.5 sm:mt-2 line-clamp-2 sm:line-clamp-2 leading-relaxed">
                {casa.descripcionBreve}
              </p>
              <div className="flex sm:hidden items-center gap-x-1.5 gap-y-1 mt-1.5 text-[11px] text-stone-400 flex-wrap">
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
          <div className="flex shrink-0 flex-col items-end gap-2 sm:gap-0">
            <div className="text-right rounded-lg sm:rounded-xl bg-emerald-50 px-2 py-1.5 sm:bg-transparent sm:px-0 sm:py-0">
              <p className="text-base sm:text-lg font-bold text-gray-900 leading-none">+{casa.beneficioPotencial} {casa.market === 'latam' ? 'USD' : '€'}</p>
              <p className="text-[11px] text-emerald-700 sm:text-xs sm:text-gray-400 mt-0.5 sm:mt-1">potencial</p>
            </div>

            <span
              className="inline-flex sm:hidden h-8 min-w-[88px] items-center justify-center rounded-full border border-violet-200/70 bg-slate-950/90 px-3 text-center text-[11px] font-semibold text-violet-50 shadow-[0_8px_18px_rgba(15,23,42,0.12)] transition-all group-hover:border-violet-300 group-hover:bg-violet-950 group-hover:shadow-[0_10px_24px_rgba(76,29,149,0.18)] group-hover:translate-x-0.5"
            >
              Ver más
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="hidden sm:flex items-center justify-between gap-3 mt-4">
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
            className="ml-auto inline-flex h-9 min-w-[104px] items-center justify-center rounded-full border border-violet-200/70 bg-slate-950/90 px-4 text-center text-xs font-semibold text-violet-50 shadow-[0_8px_18px_rgba(15,23,42,0.12)] transition-all group-hover:border-violet-300 group-hover:bg-violet-950 group-hover:shadow-[0_10px_24px_rgba(76,29,149,0.18)] group-hover:translate-x-0.5 sm:text-sm"
          >
            Ver más
          </span>
        </div>
      </div>
    </Link>
  )
}

export default CasaCard
