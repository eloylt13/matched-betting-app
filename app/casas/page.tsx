import type { Metadata } from "next"
import CasasClient from "./CasasClient"

export const metadata: Metadata = {
    title: "Casas de apuestas España — Bonos bienvenida 2026 | IAPredictHub",
    description: "Guía completa de bonos de bienvenida de 30+ casas de apuestas en España. Calcula tu cobertura con la calculadora integrada.",
}

export default function CasasPage() {
    return <CasasClient />
}
