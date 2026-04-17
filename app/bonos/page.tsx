// app/bonos/page.tsx

import type { Metadata } from 'next'
import BonosClient from './BonosClient'

export const metadata: Metadata = {
  title: 'Bonos de bienvenida y ofertas activas | IAPredictHub',
  description:
    'Descubre bonos de bienvenida y ofertas activas de casas de apuestas en Espana y LATAM.',
}

export default function BonosPage() {
  return <BonosClient />
}
