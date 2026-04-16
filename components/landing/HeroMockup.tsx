import Link from 'next/link'

export default function HeroMockup() {
  return (
    <div className="mx-auto w-full max-w-sm lg:max-w-md">
      <Link
        href="/casas"
        className="group relative block overflow-hidden rounded-2xl border border-violet-300/20 bg-white/[0.06] p-3 text-left shadow-[0_20px_64px_rgba(12,9,24,0.3)] backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-200/35 hover:bg-white/[0.08] hover:shadow-[0_24px_72px_rgba(109,40,217,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:p-4"
      >
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-violet-200/70 to-transparent" />
        <div className="pointer-events-none absolute -right-12 -top-14 h-32 w-32 rounded-full bg-violet-400/16 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-[-3.5rem] h-28 w-28 rounded-full bg-fuchsia-400/10 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-100/90">
                Casas organizadas
              </p>
              <h3 className="mt-1.5 text-base font-semibold text-white">Explora bonos por casa</h3>
            </div>
            <span className="rounded-full border border-violet-200/20 bg-violet-300/10 px-2.5 py-1 text-[11px] font-semibold text-violet-100">
              Premium
            </span>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <p className="text-sm font-semibold text-white">Organiza cada casa en un vistazo</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-300">
                Consulta fases, requisitos y el siguiente paso recomendado sin perderte.
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {['Fases', 'Checklist', 'Siguiente paso'].map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-violet-200/15 bg-violet-300/10 px-2.5 py-1 text-[11px] font-semibold text-violet-100"
                  >
                    {label}
                  </span>
                ))}
              </div>

              <div className="mt-4 space-y-2.5">
                {[
                  ['Sportium', 'Bonos listos para revisar'],
                  ['Bet365', 'Fase actual y condiciones claras'],
                  ['Bwin', 'Ordenado para seguir después'],
                ].map(([name, note]) => (
                  <div
                    key={name}
                    className="flex items-center justify-between gap-3 rounded-xl border border-white/8 bg-white/[0.04] px-3 py-2.5"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-white">{name}</p>
                      <p className="mt-0.5 truncate text-xs text-slate-400">{note}</p>
                    </div>
                    <span className="rounded-full border border-violet-200/15 bg-violet-300/10 px-2.5 py-1 text-[11px] font-semibold text-violet-100">
                      Ver
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.045] p-2.5">
                <p className="text-[11px] text-slate-400">Estado</p>
                <p className="mt-1 text-sm font-semibold text-white">Todo en un sitio</p>
              </div>
              <div className="rounded-xl border border-violet-200/20 bg-violet-300/10 p-2.5">
                <p className="text-[11px] text-violet-100/75">Siguiente paso</p>
                <p className="mt-1 text-sm font-semibold text-white">Entrar a casas</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-3">
            <p className="text-xs text-slate-400">Empieza por la casa que toque ahora.</p>
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
