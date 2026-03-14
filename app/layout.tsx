// app/layout.tsx
import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import AppShell from '@/components/AppShell'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'IAPredictHub · Matched Betting España 2026',
  description: 'La herramienta más completa de matched betting en España. Calculadora de cobertura, guías paso a paso para 30+ casas, seguimiento de bonos y historial de ganancias. Gratis.',
  keywords: [
    'matched betting',
    'matched betting españa',
    'calculadora matched betting',
    'bonos apuestas',
    'freebets',
    'betfair exchange',
    'apuestas sin riesgo',
    'ganar dinero apuestas',
    'matched betting 2026',
    'guia matched betting',
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
    url: 'https://matched-betting-app.vercel.app',
    siteName: 'IAPredictHub · Matched Betting',
    title: 'IAPredictHub · Matched Betting España 2026',
    description: 'Calculadora de cobertura, guías para 30+ casas y seguimiento de bonos. La herramienta más completa de matched betting en España.',
    images: [
      {
        url: 'https://matched-betting-app.vercel.app/logo.png',
        width: 512,
        height: 512,
        alt: 'IAPredictHub Matched Betting',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'IAPredictHub · Matched Betting España',
    description: 'Calculadora, guías y seguimiento de bonos para matched betting en España.',
    images: ['https://matched-betting-app.vercel.app/logo.png'],
  },
  verification: {
    google: '6Cr92jGfY8D6cZX4sdEC1v1vECb_mgjBy8Jd9qoUfI4',
  },
  alternates: {
    canonical: 'https://matched-betting-app.vercel.app',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="bg-[#F5F3EE] min-h-screen font-sans">
        <AppShell>{children}</AppShell>
        <Analytics />
      </body>
    </html>
  )
}
