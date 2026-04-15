import Link from 'next/link'

export default function HeroMockup() {
  return (
    <div className="mx-auto w-full max-w-xl">
      <Link
        href="/calculadora"
        className="group block rounded-[1.5rem] border border-white/10 bg-slate-950/65 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-200/25 hover:bg-slate-950/75 hover:shadow-[0_24px_70px_rgba(0,0,0,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:p-5"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-slate-100 transition-colors group-hover:border-emerald-200/25 group-hover:bg-emerald-300/10">
            <span className="text-sm font-semibold">CB</span>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-200/90">
                  Calculadora de cobertura activa
                </p>
                <h3 className="mt-1 text-sm font-semibold text-white sm:text-base">Cobertura limpia</h3>
              </div>
              <span
                className="mt-0.5 inline-flex shrink-0 items-center text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-slate-200"
                aria-hidden="true"
              >
                →
              </span>
            </div>

            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-300">
              Ajusta stake y lay en un flujo sobrio, rápido y listo para ejecutar sin ruido visual.
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}
