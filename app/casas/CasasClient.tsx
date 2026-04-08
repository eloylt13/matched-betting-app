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
      <h1 className="text-2xl font-bold text-stone-100 mb-2">Casas de apuestas</h1>
      <p className="text-stone-400 mb-4 sm:mb-6">
        Selecciona una casa para ver su bono de bienvenida y cómo completarlo.
      </p>

      <div className="flex gap-2 mb-4">
        {(["espana", "latam"] as MarketKey[]).map((market) => (
          <button
            key={market}
            type="button"
            onClick={() => handleMarketChange(market)}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-colors border ${
              activeMarket === market
                ? "bg-emerald-500 border-emerald-500 text-white"
                : "bg-stone-900 border-stone-700 text-stone-300 hover:border-stone-500"
            }`}
          >
            {market === "espana" ? "🇪🇸 España" : "🌎 LATAM"}
          </button>
        ))}
      </div>

      {activeMarket === "latam" && (
        <div className="mb-3">
          <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 [scrollbar-width:none]">
            {PAISES.map((pais) => (
              <button
                key={pais.key}
                type="button"
                onClick={() => setActivePais(pais.key)}
                title={pais.label}
                className={`shrink-0 rounded-full border px-3 py-1 text-xs font-bold transition-colors ${
                  activePais === pais.key
                    ? "border-blue-500 bg-blue-500 text-white"
                    : "border-stone-700 bg-stone-900 text-stone-400 hover:border-stone-500 hover:text-stone-100"
                }`}
              >
                {pais.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mb-3 sm:mb-5">
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 [scrollbar-width:none]">
          {FILTERS.map((filter) => (
            <button
              key={filter.key}
              type="button"
              onClick={() => setActiveFilter(filter.key)}
              className={`shrink-0 rounded-full border px-3 py-1 text-xs sm:text-sm font-medium transition-colors ${
                activeFilter === filter.key
                  ? "border-emerald-500 bg-emerald-500 text-white"
                  : "border-stone-700 bg-stone-900 text-stone-300 hover:border-stone-500 hover:text-stone-100"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 mb-3 sm:mb-5">
        <p className="text-xs sm:text-sm text-stone-400">
          {filteredCasas.length} casa{filteredCasas.length !== 1 ? "s" : ""} visible{filteredCasas.length !== 1 ? "s" : ""}
        </p>
        <p className="text-[11px] sm:text-xs text-stone-500 text-right">
          Aviso: algunos enlaces de esta sección pueden ser de afiliación.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
        {filteredCasas.map((casa) => (
          <CasaCard key={casa.id} casa={casa} />
        ))}
      </div>
    </main>
  )
}
