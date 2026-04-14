// app/bonos/page.tsx

import type { Metadata } from 'next'
import BonosClient from './BonosClient'

export const metadata: Metadata = {
  title: 'Bonos | Freebets, reembolsos y pendientes',
  description: 'Controla freebets, reembolsos y bonos pendientes desde una vista práctica para operar sobre todo en España, con soporte también para casas y fichas LATAM.',
}

export default function BonosPage() {
  return <BonosClient />
}

