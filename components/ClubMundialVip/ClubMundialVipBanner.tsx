import Link from 'next/link'

export default function ClubMundialVipBanner() {
  return (
    <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-emerald-50 px-6 py-6 shadow-sm sm:px-8 sm:py-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-700">
            PRÓXIMAMENTE
          </p>
          <h3 className="mt-2 text-lg font-bold leading-tight text-stone-900 sm:text-xl">
            Club Mundial VIP
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
            Lista de espera para recibir el acceso al canal privado del Mundial 2026.
          </p>
          <p className="mt-2 text-xs font-medium text-amber-800">
            100 plazas previstas · Precio especial para los primeros inscritos
          </p>
        </div>
        <Link
          href="https://tally.so/r/EkBgjN"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-800 hover:shadow-md"
        >
          Apuntarme a la lista
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  )
}
