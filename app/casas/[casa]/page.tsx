import type { Metadata } from "next"
import fs from "node:fs"
import path from "node:path"
import { notFound } from "next/navigation"
import CasaDetalleClient from "./CasaDetalleClient"
import { getCasaById } from "@/lib/presets"

interface PageProps {
    params: Promise<{
        casa: string
    }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { casa: casaId } = await params
    const casa = getCasaById(casaId)

    if (!casa) return {}

    return {
        title: `${casa.nombre} matched betting: cómo aprovechar el bono | IAPredictHub`,
        description: `Guía paso a paso para aprovechar el bono de bienvenida de ${casa.nombre}. Beneficio potencial: ${casa.beneficioPotencial}€. Calculadora incluida.`,
    }
}

export default async function CasaDetallePage({ params }: PageProps) {
    const { casa: casaId } = await params
    const casa = getCasaById(casaId)

    if (!casa) {
        notFound()
    }

    const guidePath = path.join(process.cwd(), "content", "guias", "casas", `${casaId}.mdx`)
    const hasGuide = fs.existsSync(guidePath)

    return <CasaDetalleClient casa={casa} hasGuide={hasGuide} />
}
