// app/layout.tsx
import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import AppShell from '@/components/AppShell'
import PostHogProvider from '@/components/PostHogProvider'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Bonos de bienvenida en España | Ruta guiada, calculadora y seguimiento | IAPredictHub',
  description:
    'IAPredictHub es una herramienta en español para bonos de bienvenida, con ruta guiada, calculadora, guías y seguimiento. Foco principal en España y apoyo adicional para LATAM.',
  keywords: [
    'bonos de bienvenida apuestas',
    'bonos casas de apuestas españa',
    'calculadora matched betting',
    'matched betting españa',
    'freebets españa',
    'bonos apuestas',
    'calculadora betfair',
    'calculadora exchange',
    'seguimiento bonos apuestas',
    'promociones casas de apuestas',
    'matched betting app españa',
    'historial matched betting',
  ],
  authors: [{ name: 'IAPredictHub' }],
  creator: 'IAPredictHub',
  publisher: 'IAPredictHub',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://iapredicthub.es',
    siteName: 'IAPredictHub',
    title: 'Bonos de bienvenida en España | Ruta guiada, calculadora y seguimiento | IAPredictHub',
    description:
      'IAPredictHub es una herramienta en español para bonos de bienvenida, con ruta guiada, calculadora, guías y seguimiento. Foco principal en España y apoyo adicional para LATAM.',
    images: [
      {
        url: 'https://iapredicthub.es/logo.png',
        width: 512,
        height: 512,
        alt: 'IAPredictHub — Bonos de bienvenida España y LATAM',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Bonos de bienvenida en España | IAPredictHub',
    description:
      'Herramienta en español para bonos de bienvenida, con ruta guiada, calculadora, guías y seguimiento. Foco principal en España y apoyo adicional para LATAM.',
    images: ['https://iapredicthub.es/logo.png'],
  },
  verification: {
    google: 'rp27ekZ5t3IZYOL6V_qoYFttQt1p8-frEek3WgQmKv8',
  },
  alternates: {
    canonical: 'https://iapredicthub.es',
  },
  other: {
    'ga-site-verification': 'VvajnJh0EuvxHrCmjGrkR_l2',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="bg-[#F5F3EE] min-h-screen font-sans">
        <PostHogProvider>
          <AppShell>{children}</AppShell>
        </PostHogProvider>
        <Analytics />
      </body>
    </html>
  )
}
