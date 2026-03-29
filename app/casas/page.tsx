import type { Metadata } from "next"
import CasasClient from "./CasasClient"

export const metadata: Metadata = {
    title: "Casas de Apuestas España 2026 | Bonos y Ofertas Organizados | IAPredictHub",
    description: "Lista completa de casas de apuestas en España con bonos de bienvenida, tipo de oferta, dificultad y potencial. Organizadas por fases.",
}

export default function CasasPage() {
    return <CasasClient />
}
