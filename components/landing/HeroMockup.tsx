import Link from 'next/link'

export default function HeroMockup() {
  return (
    <div className="mx-auto w-full max-w-sm lg:max-w-md">
      <Link
        href="/calculadora"
        className="group relative block overflow-hidden rounded-lg border border-violet-300/20 bg-white/[0.06] p-3 text-left shadow-[0_20px_64px_rgba(12,9,24,0.3)] backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-200/35 hover:bg-white/[0.08] hover:shadow-[0_24px_72px_rgba(109,40,217,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:p-4"
      >
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-violet-200/70 to-transparent" />
        <div className="pointer-events-none absolute -right-12 -top-14 h-32 w-32 rounded-full bg-violet-400/16 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-100/90">
                Calculadora de cobertura activa
              </p>
              <h3 className="mt-1.5 text-base font-semibold text-white">Resultado limpio</h3>
            </div>
            <span className="rounded-full border border-violet-200/20 bg-violet-300/10 px-2.5 py-1 text-[11px] font-semibold text-violet-100">
              Live
            </span>
          </div>

          <div className="space-y-3">
            <div className="rounded-lg border border-white/10 bg-slate-950/45 p-3">
              <div className="mb-2 flex items-center justify-between gap-3 text-xs text-slate-400">
                <span>Betfair</span>
                <span>Stake recomendado</span>
              </div>
              <div className="flex items-end justify-between gap-3">
                <div>
                  <p className="text-xl font-bold text-white">42,80€</p>
                  <p className="mt-1 text-xs text-slate-400">Cobertura sugerida</p>
                </div>
                <div className="h-9 w-20 overflow-hidden rounded-md border border-violet-200/15 bg-violet-300/10 p-1.5">
                  <div className="h-full rounded-sm bg-gradient-to-r from-violet-300/40 via-fuchsia-200/70 to-cyan-200/60" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-white/10 bg-white/[0.045] p-2.5">
                <p className="text-[11px] text-slate-400">Coste estimado</p>
                <p className="mt-1 text-sm font-semibold text-white">1,92€</p>
              </div>
              <div className="rounded-lg border border-violet-200/20 bg-violet-300/10 p-2.5">
                <p className="text-[11px] text-violet-100/75">Beneficio neto</p>
                <p className="mt-1 text-sm font-semibold text-white">+28,40€</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-3">
            <p className="text-xs text-slate-400">Listo para seguir el siguiente paso.</p>
            <span
              className="text-sm font-semibold text-violet-100 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              →
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}
