export default function HeroMockup() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -left-6 top-10 h-24 w-24 rounded-full bg-emerald-300/10 blur-2xl" />
      <div className="pointer-events-none absolute -right-4 bottom-8 h-28 w-28 rounded-full bg-cyan-300/10 blur-2xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_34%)]" />
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <div className="relative p-4 sm:p-5">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/75" />
            </div>
            <div className="h-2 w-24 rounded-full bg-white/10" />
          </div>

          <div className="mt-4 grid gap-4">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-200/90">Ruta guiada</p>
                  <h3 className="mt-1 text-sm font-semibold text-white">Apuesta, cobertura y validacion</h3>
                </div>
                <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[11px] font-semibold text-emerald-100">
                  Flujo activo
                </span>
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.035] px-3 py-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-[11px] font-semibold text-slate-200">
                    01
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-medium text-slate-100">Seleccionar mercado</p>
                      <p className="text-[11px] text-slate-400">Verificado</p>
                    </div>
                    <div className="mt-2 h-1.5 rounded-full bg-white/8">
                      <div className="h-1.5 w-[78%] rounded-full bg-gradient-to-r from-emerald-300 to-cyan-300" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.035] px-3 py-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-[11px] font-semibold text-slate-200">
                    02
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-medium text-slate-100">Calcular importes</p>
                      <p className="text-[11px] text-slate-400">Sin friccion</p>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="h-1.5 flex-1 rounded-full bg-white/8">
                        <div className="h-1.5 w-[64%] rounded-full bg-white/40" />
                      </div>
                      <span className="text-[11px] font-medium text-slate-300">+1 calculo</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.035] px-3 py-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-[11px] font-semibold text-slate-200">
                    03
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-medium text-slate-100">Confirmar casa</p>
                      <p className="text-[11px] text-emerald-200">Casa verificada</p>
                    </div>
                    <div className="mt-2 h-1.5 rounded-full bg-white/8">
                      <div className="h-1.5 w-[90%] rounded-full bg-gradient-to-r from-cyan-300 via-emerald-300 to-emerald-200" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Cuota</p>
                  <p className="mt-2 text-sm font-semibold text-white">2.10</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Stake</p>
                  <p className="mt-2 text-sm font-semibold text-white">100 EUR</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Estado</p>
                  <p className="mt-2 text-sm font-semibold text-emerald-200">Listo</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-2 top-6 h-5 w-5 rounded-full border border-white/10 bg-white/[0.06] shadow-lg shadow-black/20" />
              <div className="absolute right-3 top-2 h-4 w-4 rounded-full border border-white/10 bg-emerald-300/20 shadow-lg shadow-emerald-950/20" />

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="translate-y-1 rounded-2xl border border-white/10 bg-white/[0.045] p-3 shadow-[0_14px_30px_rgba(0,0,0,0.22)] backdrop-blur-md">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-200/90">Freebet</p>
                  <p className="mt-2 text-sm text-slate-100">Conversion guiada con importe claro.</p>
                </div>
                <div className="-translate-y-2 rounded-2xl border border-white/10 bg-white/[0.045] p-3 shadow-[0_14px_30px_rgba(0,0,0,0.22)] backdrop-blur-md">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-200/90">Modo guiado</p>
                  <p className="mt-2 text-sm text-slate-100">Secuencia simple para no perder contexto.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-3 shadow-[0_14px_30px_rgba(0,0,0,0.22)] backdrop-blur-md">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300/90">Casa verificada</p>
                  <p className="mt-2 text-sm text-slate-100">Validacion visual y checklist minimo.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-3 shadow-[0_14px_30px_rgba(0,0,0,0.22)] backdrop-blur-md">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">Calculadora</p>
                  <p className="mt-2 text-sm text-slate-100">Una capa de calculo limpia y precisa.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">Metricas suaves</p>
                  <p className="mt-1 text-sm font-medium text-white">Tres pasos, una ejecucion limpia</p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-slate-200">
                  92% completado
                </span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                  <div className="h-16 rounded-xl bg-gradient-to-t from-emerald-300/10 via-emerald-300/25 to-white/5" />
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                  <div className="h-16 rounded-xl bg-gradient-to-t from-cyan-300/10 via-cyan-300/25 to-white/5" />
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                  <div className="h-16 rounded-xl bg-gradient-to-t from-white/10 via-white/20 to-white/5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
