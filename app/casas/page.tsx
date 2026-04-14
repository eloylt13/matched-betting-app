import type { Metadata } from "next"
import CasasClient from "./CasasClient"

export const metadata: Metadata = {
    title: "Casas de apuestas y bonos de bienvenida en España | IAPredictHub",
    description: "Listado de casas de apuestas y bonos de bienvenida pensado sobre todo para España, con fichas claras por fases y referencias útiles también para casas disponibles en LATAM.",
}

export default function CasasPage() {
    return <CasasClient />
}
