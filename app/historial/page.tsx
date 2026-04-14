// app/historial/page.tsx

import type { Metadata } from 'next'
import HistorialClient from './HistorialClient'

export const metadata: Metadata = {
  title: 'Historial | Operaciones y resultados',
  description: 'Consulta tu historial de operaciones y resultados para mantener control y seguimiento del matched betting, con foco principal en España y soporte también para actividad LATAM.',
}

export default function HistorialPage() {
  return <HistorialClient />
}

