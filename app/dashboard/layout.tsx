import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tu Panel de Matched Betting | Progreso y Seguimiento | IAPredictHub',
  description:
    'Controla tu progreso, bonos completados y beneficio acumulado. Panel personalizado para organizar tu matched betting paso a paso.',
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return children
}
