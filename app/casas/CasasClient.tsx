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
  { key: "faciles", label: "Más fáciles" },
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
    <main className="max-w-5xl mx-auto px-4 py-5 sm:py-8">
      <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-900/95 px-4 py-5 shadow-[0_24px_70px_-38px_rgba(15,23,42,0.9)] sm:px-6 sm:py-6">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/45 to-transparent" />
        <div className="pointer-events-none absolute -top-24 right-[-6rem] h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 top-10 h-40 w-40 rounded-full bg-emerald-400/6 blur-3xl" />

        <div className="relative space-y-4 sm:space-y-5">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Casas de apuestas</h1>
            <p className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-[15px]">
              Explora primero las casas de España y, si lo necesitas, consulta también opciones disponibles en LATAM.
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
                    ? "border-violet-400/70 bg-violet-500/18 text-violet-50 shadow-[0_0_0_1px_rgba(139,92,246,0.16),0_10px_24px_-16px_rgba(139,92,246,0.45)]"
                    : "border-white/10 bg-slate-900/75 text-slate-300 hover:border-violet-300/30 hover:bg-slate-800/80 hover:text-white"
                }`}
              >
                {market === "espana" ? "🇪🇸 España" : "🌎 LATAM"}
              </button>
            ))}
          </div>

          {activeMarket === "latam" && (
            <div className="space-y-2 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3 sm:p-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">País</p>
              <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 [scrollbar-width:none]">
                {PAISES.map((pais) => (
                  <button
                    key={pais.key}
                    type="button"
                    onClick={() => setActivePais(pais.key)}
                    title={pais.label}
                    className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${
                      activePais === pais.key
                        ? "border-violet-400/65 bg-violet-500/16 text-violet-50 shadow-[0_0_0_1px_rgba(139,92,246,0.12),0_8px_18px_-14px_rgba(139,92,246,0.4)]"
                        : "border-white/10 bg-slate-900/70 text-slate-300 hover:border-violet-300/25 hover:bg-slate-800/85 hover:text-white"
                    }`}
                  >
                    {pais.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-2 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3 sm:p-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">Tipología</p>
            <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 [scrollbar-width:none]">
              {FILTERS.map((filter) => (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => setActiveFilter(filter.key)}
                  className={`shrink-0 rounded-full border px-3 py-1.5 text-xs sm:text-sm font-medium transition-all duration-200 ${
                    activeFilter === filter.key
                      ? "border-violet-400/65 bg-violet-500/16 text-violet-50 shadow-[0_0_0_1px_rgba(139,92,246,0.12),0_8px_18px_-14px_rgba(139,92,246,0.4)]"
                      : "border-white/10 bg-slate-900/70 text-slate-300 hover:border-violet-300/25 hover:bg-slate-800/85 hover:text-white"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 border-t border-white/10 pt-3 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-300">
              <span className="font-semibold text-white">
                {filteredCasas.length} casa{filteredCasas.length !== 1 ? "s" : ""}
              </span>{" "}
              visible{filteredCasas.length !== 1 ? "s" : ""}
            </p>
            <p className="text-[11px] leading-5 text-slate-400 sm:text-xs sm:text-right">
              Aviso: algunos enlaces de esta sección pueden ser de afiliación.
            </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
        {filteredCasas.map((casa) => (
          <CasaCard key={casa.id} casa={casa} />
        ))}
      </div>
    </main>
  )
}
