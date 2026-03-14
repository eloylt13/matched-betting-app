'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import BottomNav from '@/components/BottomNav'

function NavLink({ href, emoji, label }: { href: string; emoji: string; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all text-xs sm:text-sm font-medium"
    >
      <span className="text-sm">{emoji}</span>
      <span className="hidden md:inline">{label}</span>
    </Link>
  )
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // La landing maneja su propio nav y layout
  if (pathname === '/') {
    return <>{children}</>
  }

  return (
    <>
      <nav
        style={{ background: 'linear-gradient(135deg, #12112A 0%, #2A1F3D 100%)' }}
        className="sticky top-0 z-50 shadow-lg"
      >
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
              <NavLink href="/dashboard" emoji="📊" label="Dashboard" />
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
          <a
            href="https://www.betfair.es/exchange/plus/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-green-500 hover:bg-green-400 text-white text-xs font-bold px-3 py-1.5 rounded-full transition-colors"
          >
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

      <BottomNav />
    </>
  )
}
