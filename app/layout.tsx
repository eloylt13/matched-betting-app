// app/layout.tsx
import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import Link from 'next/link'
import BottomNav from '@/components/BottomNav'
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
        <nav style={{ background: 'linear-gradient(135deg, #12112A 0%, #2A1F3D 100%)' }}
          className="sticky top-0 z-50 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14">
              <Link href="/" className="flex items-center gap-2">
                <img src="/logo.png" alt="IAPredictHub" className="w-8 h-8 rounded-full object-cover" />
                <span className="font-bold text-white text-sm sm:text-base tracking-tight">
                  IAPredictHub
                  <span className="text-purple-300 font-normal hidden sm:inline"> · Matched Betting</span>
                </span>
              </Link>
              <div className="hidden md:flex items-center gap-1 sm:gap-2">
                <NavLink href="/" emoji="📊" label="Dashboard" />
                <NavLink href="/guias" emoji="📚" label="Guías" />
                <NavLink href="/calculadora" emoji="🧮" label="Calculadora" />
                <NavLink href="/casas" emoji="🏠" label="Casas" />
                <NavLink href="/bonos" emoji="🎁" label="Bonos" />
                <NavLink href="/historial" emoji="📋" label="Historial" />
              </div>
            </div>
          </div>
        </nav>

        {/* Banner Betfair — solo desktop */}
        <div className="hidden md:block bg-gradient-to-r from-[#1a3a2a] to-[#1e4d35] border-b border-green-900/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-green-200">
              <span className="text-base">♻️</span>
              <span className="font-semibold text-white">Betfair Exchange</span>
              <span className="hidden sm:inline text-green-300">— Imprescindible para cubrir todas tus apuestas</span>
            </div>
            <a href="https://www.betfair.es/exchange/plus/" target="_blank" rel="noopener noreferrer"
              className="shrink-0 bg-green-500 hover:bg-green-400 text-white text-xs font-bold px-3 py-1.5 rounded-full transition-colors">
              Abrir Exchange →
            </a>
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-20 md:pb-6">
          {children}
        </main>

        <footer className="hidden md:block mt-12 border-t border-gray-200 py-6 text-center text-xs text-gray-400">
          <p>IAPredictHub · Matched Betting — Solo para uso educativo. Apuesta con responsabilidad.</p>
        </footer>

        {/* Bottom Navigation — solo móvil */}
        <BottomNav />
      </body>
    </html>
  )
}

function NavLink({ href, emoji, label }: { href: string; emoji: string; label: string }) {
  return (
    <Link href={href}
      className="flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all text-xs sm:text-sm font-medium">
      <span className="text-sm">{emoji}</span>
      <span className="hidden md:inline">{label}</span>
    </Link>
  )
}
