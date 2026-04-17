// app/historial/page.tsx

import type { Metadata } from 'next'
import HistorialClient from './HistorialClient'

export const metadata: Metadata = {
  title: 'Seguimiento de bonos y operaciones | IAPredictHub',
  description:
    'Controla tus bonos pendientes, registra operaciones y revisa tu actividad de matched betting con foco en España y soporte adicional para LATAM.',
  alternates: {
    canonical: 'https://iapredicthub.es/historial',
  },
  openGraph: {
    title: 'Seguimiento de bonos y operaciones | IAPredictHub',
    description:
      'Controla tus bonos pendientes, registra operaciones y revisa tu actividad de matched betting con foco en España y soporte adicional para LATAM.',
    url: 'https://iapredicthub.es/historial',
    images: [
      {
        url: 'https://iapredicthub.es/logo.png',
        width: 512,
        height: 512,
        alt: 'IAPredictHub — Seguimiento de bonos y operaciones',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Seguimiento de bonos y operaciones | IAPredictHub',
    description:
      'Controla tus bonos pendientes, registra operaciones y revisa tu actividad de matched betting con foco en España y soporte adicional para LATAM.',
    images: ['https://iapredicthub.es/logo.png'],
  },
}

export default function HistorialPage() {
  return <HistorialClient />
}
