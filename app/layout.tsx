// app/layout.tsx
import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import AppShell from '@/components/AppShell'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Calculadora Matched Betting España | Bonos, Freebets y Exchange | IAPredictHub',
  description:
    'App de matched betting en España para calcular coberturas, organizar bonos y freebets, seguir promociones por casa y llevar historial con exchange.',
  keywords: [
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
    url: 'https://matched-betting-app.vercel.app',
    siteName: 'IAPredictHub',
    title: 'Calculadora Matched Betting España | Bonos, Freebets y Exchange',
    description:
      'Calcula coberturas, organiza bonos y freebets, sigue promociones por casa y lleva historial en una sola app.',
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
    title: 'Calculadora Matched Betting España | IAPredictHub',
    description:
      'App para calcular coberturas, seguir bonos y organizar promociones de matched betting en España.',
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