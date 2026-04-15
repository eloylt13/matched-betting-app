export default function HeroMockup() {
  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/65 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-md sm:p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-slate-100">
            <span className="text-sm font-semibold">≋</span>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-200/90">
                  Calculadora de cobertura activa
                </p>
                <h3 className="mt-1 text-sm font-semibold text-white sm:text-base">Cobertura limpia</h3>
              </div>
              <span className="mt-0.5 inline-flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-slate-300">
                Abrir <span aria-hidden="true">→</span>
              </span>
            </div>

            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-300">
              Ajusta stake y lay en un flujo sobrio, rápido y listo para ejecutar sin ruido visual.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
