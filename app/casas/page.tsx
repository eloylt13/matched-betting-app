import type { Metadata } from "next"
import CasasClient from "./CasasClient"

export const metadata: Metadata = {
    title: "Casas de Apuestas España y LATAM 2026 | Bonos y Ofertas | IAPredictHub",
    description: "Lista completa de casas de apuestas en España y LATAM con bonos de bienvenida, tipo de oferta, dificultad y potencial en €/USD. Organizadas por fases.",
}

export default function CasasPage() {
    return <CasasClient />
}
