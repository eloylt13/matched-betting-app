import Link from 'next/link'

export default function ClubMundialVipBanner() {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white px-5 py-5 shadow-sm sm:px-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-amber-200 bg-amber-50 text-amber-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M7.5 5.5h9l3 4.2L12 19 4.5 9.7l3-4.2Z" />
              <path d="M4.5 9.7h15" />
              <path d="m8.5 9.7 3.5 9.3 3.5-9.3" />
              <path d="m7.5 5.5 1 4.2 3.5-4.2 3.5 4.2 1-4.2" />
            </svg>
          </div>
          <div className="max-w-2xl flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Telegram privado
            </p>
            <h3 className="mt-1.5 text-lg font-bold leading-tight text-stone-950 sm:text-xl">
              Club Mundial VIP
            </h3>
            <p className="mt-1 text-sm font-semibold leading-relaxed text-stone-800">
              Pronósticos privados del Mundial 2026 en Telegram.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              Accede al canal privado con pronósticos a largo plazo, análisis de los partidos
              más interesantes y picks seleccionados durante el Mundial.
            </p>
          </div>
        </div>

        <div className="flex shrink-0 flex-col gap-3 lg:w-[240px]">
          <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-center text-sm font-semibold leading-6 text-amber-900">
            <p>Precio anticipado: 5 €</p>
            <p className="text-xs font-medium text-amber-800">Antes 9,99 €</p>
          </div>
          <Link
            href="/pronosticos"
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-emerald-700 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
          >
            Ver Club Mundial VIP
          </Link>
          <p className="text-center text-[11px] font-medium leading-5 text-stone-500">
            +18 · Juego responsable · No garantiza resultados.
          </p>
        </div>
      </div>
    </div>
  )
}
