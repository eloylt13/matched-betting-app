"use client"

import { casasEspana } from "@/lib/presets/data/espana"
import CasaCard from "@/components/casas/CasaCard"

export default function CasasPage() {
    return (
        <main className="max-w-5xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold text-stone-100 mb-2">
                Casas de apuestas
            </h1>
            <p className="text-stone-400 mb-8">
                Selecciona una casa para ver su bono de bienvenida y cómo completarlo.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {casasEspana.map((casa) => (
                    <CasaCard key={casa.id} casa={casa} />
                ))}
            </div>
        </main>
    )
}
