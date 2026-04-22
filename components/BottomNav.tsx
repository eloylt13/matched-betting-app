'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type BottomNavItem = {
  name: string
  path: string
  icon: string
}

export default function BottomNav() {
  const pathname = usePathname()

  const navItems: BottomNavItem[] = [
    { name: 'Inicio', path: '/dashboard', icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z' },
    { name: 'Guías', path: '/guias', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
    { name: 'Pronósticos', path: '/pronosticos', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { name: 'Calculadora', path: '/calculadora', icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
    { name: 'Casas', path: '/casas', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
    { name: 'Bonos', path: '/bonos', icon: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7' },
    { name: 'Seguimiento', path: '/historial', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  ]

  return (
    <div className="fixed inset-x-3 bottom-[calc(0.5rem+env(safe-area-inset-bottom))] z-50 md:hidden">
      <div className="grid h-[4.75rem] grid-cols-7 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(9,11,24,0.94)_0%,rgba(18,17,42,0.96)_46%,rgba(42,31,61,0.94)_100%)] px-1 py-1 shadow-[0_18px_54px_rgba(2,6,23,0.3)] backdrop-blur-xl">
        {navItems.map((item) => {
          const isActive = pathname === item.path || pathname.startsWith(`${item.path}/`)

          return (
            <Link
              key={item.path}
              href={item.path}
              aria-current={isActive ? 'page' : undefined}
              className={`flex flex-col items-center justify-center gap-1 rounded-2xl transition-all duration-200 ${
                isActive
                  ? 'bg-violet-500/15 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_24px_rgba(124,58,237,0.14)]'
                  : 'text-slate-400 hover:bg-white/[0.045] hover:text-violet-100'
              }`}
            >
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full border text-[11px] transition-all duration-200 ${
                  isActive
                    ? 'border-violet-200/25 bg-violet-300/10 text-violet-100'
                    : 'border-white/10 bg-white/[0.035] text-slate-400'
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
              </span>
              <span className="sr-only">{item.name}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
