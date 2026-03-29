import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Empieza con Matched Betting | Ruta Guiada para Principiantes | IAPredictHub',
  description:
    'Sigue la ruta recomendada para empezar con matched betting en España. Aprende el proceso paso a paso desde cero, sin experiencia previa.',
}

export default function BienvenidaLayout({ children }: { children: React.ReactNode }) {
  return children
}
