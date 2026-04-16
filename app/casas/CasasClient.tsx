"use client"

import { useMemo, useState } from "react"
import CasaCard from "@/components/casas/CasaCard"
import { todasLasCasas } from "@/lib/presets"
import type { Casa } from "@/types/presets"

type MarketKey = "espana" | "latam"
type PaisKey = "todas" | "regionales" | "co" | "mx" | "cl" | "pe" | "ec" | "ar" | "pa" | "uy"
type FilterKey = "todas" | "apuesta-recibe" | "reembolso" | "rollover" | "faciles"

const PAISES: Array<{ key: PaisKey; label: string }> = [
  { key: "todas", label: "Todas" },
  { key: "regionales", label: "REG" },
  { key: "co", label: "CO" },
  { key: "mx", label: "MX" },
  { key: "cl", label: "CL" },
  { key: "pe", label: "PE" },
  { key: "ec", label: "EC" },
  { key: "ar", label: "AR" },
  { key: "pa", label: "PA" },
  { key: "uy", label: "UY" },
]

const FILTERS: Array<{ key: FilterKey; label: string }> = [
  { key: "todas", label: "Todas" },
  { key: "apuesta-recibe", label: "Apuesta & Recibe" },
  { key: "reembolso", label: "Reembolso" },
  { key: "rollover", label: "Rollover" },
  { key: "faciles", label: "MÃ¡s fÃ¡ciles" },
]

function matchesFilter(casa: Casa, filter: FilterKey) {
  if (filter === "todas") return true
  if (filter === "faciles") return (casa.dificultad ?? 3) <= 2
  return casa.tipologia === filter
}

export default function CasasPage() {
  const [activeMarket, setActiveMarket] = useState<MarketKey>("espana")
  const [activePais, setActivePais] = useState<PaisKey>("todas")
  const [activeFilter, setActiveFilter] = useState<FilterKey>("todas")

  const filteredCasas = useMemo(() => {
    return todasLasCasas
      .filter((casa) => casa.market === activeMarket)
      .filter((casa) => activePais === "todas" || casa.pais === activePais)
      .filter((casa) => matchesFilter(casa, activeFilter))
  }, [activeMarket, activePais, activeFilter])

  function handleMarketChange(market: MarketKey) {
    setActiveMarket(market)
    setActivePais("todas")
    setActiveFilter("todas")
  }

  return (
    <main className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.08),transparent_34%),radial-gradient(circle_at_top_right,rgba(148,163,184,0.14),transparent_28%),linear-gradient(180deg,rgba(248,250,252,1)_0%,rgba(248,250,252,0.96)_32%,rgba(241,245,249,0.92)_100%)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-violet-200/20 via-transparent to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-violet-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-slate-400/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-[18rem] h-px bg-gradient-to-r from-transparent via-violet-200/55 to-transparent" />

      <div className="mx-auto max-w-5xl px-4 py-6 sm:py-10">
        <section className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/78 px-4 py-5 shadow-[0_20px_60px_-38px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:px-6 sm:py-6">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/55 to-transparent" />
          <div className="pointer-events-none absolute -top-28 right-[-5rem] h-56 w-56 rounded-full bg-violet-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-8 h-44 w-44 rounded-full bg-sky-400/6 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />

          <div className="relative space-y-4 sm:space-y-5">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Casas de apuestas</h1>
              <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-[15px]">
                Explora primero las casas de EspaÃ±a y, si lo necesitas, consulta tambiÃ©n opciones disponibles en LATAM.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {(["espana", "latam"] as MarketKey[]).map((market) => (
                <button
                  key={market}
                  type="button"
                  onClick={() => handleMarketChange(market)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                    activeMarket === market
                      ? "border-violet-400/55 bg-violet-500/12 text-violet-950 shadow-[0_0_0_1px_rgba(139,92,246,0.12),0_10px_24px_-18px_rgba(139,92,246,0.3)]"
                      : "border-slate-200 bg-white/80 text-slate-600 hover:border-violet-300/40 hover:bg-white hover:text-slate-900"
                  }`}
                >
                  {market === "espana" ? "ðŸ‡ªðŸ‡¸ EspaÃ±a" : "ðŸŒŽ LATAM"}
                </button>
              ))}
            </div>

            {activeMarket === "latam" && (
              <div className="space-y-2 rounded-2xl border border-slate-200/80 bg-white/65 p-3 shadow-[0_12px_32px_-24px_rgba(15,23,42,0.2)] sm:p-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">PaÃ­s</p>
                <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 [scrollbar-width:none]">
                  {PAISES.map((pais) => (
                    <button
                      key={pais.key}
                      type="button"
                      onClick={() => setActivePais(pais.key)}
                      title={pais.label}
                      className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${
                        activePais === pais.key
                          ? "border-violet-400/55 bg-violet-500/12 text-violet-950 shadow-[0_0_0_1px_rgba(139,92,246,0.1),0_8px_18px_-14px_rgba(139,92,246,0.3)]"
                          : "border-slate-200 bg-white/80 text-slate-600 hover:border-violet-300/35 hover:bg-white hover:text-slate-900"
                      }`}
                    >
                      {pais.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-2 rounded-2xl border border-slate-200/80 bg-white/65 p-3 shadow-[0_12px_32px_-24px_rgba(15,23,42,0.2)] sm:p-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">TipologÃ­a</p>
              <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 [scrollbar-width:none]">
                {FILTERS.map((filter) => (
                  <button
                    key={filter.key}
                    type="button"
                    onClick={() => setActiveFilter(filter.key)}
                    className={`shrink-0 rounded-full border px-3 py-1.5 text-xs sm:text-sm font-medium transition-all duration-200 ${
                      activeFilter === filter.key
                        ? "border-violet-400/55 bg-violet-500/12 text-violet-950 shadow-[0_0_0_1px_rgba(139,92,246,0.1),0_8px_18px_-14px_rgba(139,92,246,0.3)]"
                        : "border-slate-200 bg-white/80 text-slate-600 hover:border-violet-300/35 hover:bg-white hover:text-slate-900"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 rounded-2xl border border-slate-200/80 bg-white/65 px-3 py-3 text-sm shadow-[0_12px_32px_-24px_rgba(15,23,42,0.2)] backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:px-4">
              <p className="inline-flex self-start items-center gap-2 rounded-full border border-violet-300/25 bg-violet-500/10 px-3 py-1.5 text-sm text-slate-700 shadow-[0_0_0_1px_rgba(139,92,246,0.06)]">
                <span className="font-semibold text-slate-900">
                  {filteredCasas.length} casa{filteredCasas.length !== 1 ? "s" : ""}
                </span>{" "}
                <span className="text-slate-500">visible{filteredCasas.length !== 1 ? "s" : ""}</span>
              </p>
              <p className="max-w-full rounded-full border border-slate-200/80 bg-white/70 px-3 py-1.5 text-[11px] leading-5 text-slate-500 sm:max-w-[60%] sm:text-xs sm:text-right">
                Aviso: algunos enlaces de esta secciÃ³n pueden ser de afiliaciÃ³n.
              </p>
            </div>
          </div>
        </section>

        <div className="relative mt-8 sm:mt-10">
          <div className="pointer-events-none absolute -inset-x-6 -top-6 h-24 bg-gradient-to-b from-violet-200/20 to-transparent blur-2xl" />
          <div className="rounded-[1.5rem] border border-slate-200/70 bg-white/55 px-1.5 py-1.5 shadow-[0_18px_46px_-32px_rgba(15,23,42,0.2)] backdrop-blur-sm sm:px-2 sm:py-2">
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {filteredCasas.map((casa) => (
                <CasaCard key={casa.id} casa={casa} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
