// app/historial/page.tsx

import type { Metadata } from 'next'
import HistorialClient from './HistorialClient'

export const metadata: Metadata = {
  title: 'Historial de bonos y seguimiento | IAPredictHub',
  description:
    'Consulta tu historial para revisar operaciones, control y progreso en bonos de bienvenida con foco en España y soporte adicional para LATAM.',
  alternates: {
    canonical: 'https://iapredicthub.es/historial',
  },
  openGraph: {
    title: 'Historial de bonos y seguimiento | IAPredictHub',
    description:
      'Consulta tu historial para revisar operaciones, control y progreso en bonos de bienvenida con foco en España y soporte adicional para LATAM.',
    url: 'https://iapredicthub.es/historial',
    images: [
      {
        url: 'https://iapredicthub.es/logo.png',
        width: 512,
        height: 512,
        alt: 'IAPredictHub — Historial de bonos y seguimiento',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Historial de bonos y seguimiento | IAPredictHub',
    description:
      'Consulta tu historial para revisar operaciones, control y progreso en bonos de bienvenida con foco en España y soporte adicional para LATAM.',
    images: ['https://iapredicthub.es/logo.png'],
  },
}

export default function HistorialPage() {
  return <HistorialClient />
}
