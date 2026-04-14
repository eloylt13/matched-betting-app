
import type { Metadata } from 'next'
import DashboardClient from './DashboardClient'

export const metadata: Metadata = {
  title: 'Dashboard | Progreso, casas y bonos pendientes',
  description: 'Sigue tu progreso, revisa casas activas, bonos pendientes y próximas acciones desde un panel operativo pensado sobre todo para España, con soporte también para fichas LATAM.',
}

export default function DashboardPage() {
  return <DashboardClient />
}

