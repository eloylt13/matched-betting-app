'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import BottomNav from '@/components/BottomNav'

type NavLinkProps = {
  href: string
  label: string
  icon: string
  pathname: string
}

function NavLink({ href, label, icon, pathname }: NavLinkProps) {
  const isActive = pathname === href || pathname.startsWith(`${href}/`)

  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={`group inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium tracking-wide transition-all duration-200 sm:px-4 sm:text-sm ${
        isActive
          ? 'border-violet-200/30 bg-violet-500/15 text-white shadow-[0_10px_28px_rgba(124,58,237,0.2)]'
          : 'border-white/10 bg-white/[0.035] text-slate-300 hover:border-violet-200/20 hover:bg-white/[0.07] hover:text-white'
      }`}
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full border text-[12px] transition-all duration-200 ${
          isActive
            ? 'border-violet-200/30 bg-violet-400/15 text-violet-100 shadow-[0_0_0_1px_rgba(167,139,250,0.08)]'
            : 'border-white/10 bg-white/[0.04] text-slate-300 group-hover:border-violet-200/20 group-hover:bg-violet-500/10 group-hover:text-violet-100'
        }`}
        aria-hidden="true"
      >
        {icon}
      </span>
      <span className="hidden md:inline">{label}</span>
    </Link>
  )
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: 'D' },
    { href: '/guias', label: 'Guías', icon: 'G' },
    { href: '/blog', label: 'Blog', icon: 'B' },
    { href: '/pronosticos', label: 'Pronósticos', icon: 'P' },
    { href: '/calculadora', label: 'Calculadora', icon: 'C' },
    { href: '/casas', label: 'Casas', icon: 'H' },
    { href: '/bonos', label: 'Bonos', icon: 'O' },
    { href: '/historial', label: 'Historial', icon: 'I' },
  ]

  // La landing maneja su propio nav y layout
  if (pathname === '/') {
    return <>{children}</>
  }

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[linear-gradient(135deg,rgba(9,11,24,0.96)_0%,rgba(18,17,42,0.96)_45%,rgba(42,31,61,0.94)_100%)] shadow-[0_14px_40px_rgba(2,6,23,0.24)] backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            <Link href="/" className="group flex items-center gap-3">
              <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-violet-200/15 bg-white/[0.05] shadow-[0_12px_30px_rgba(88,28,135,0.18)] sm:h-14 sm:w-14">
                <Image
                  src="/logo.png"
                  alt="IAPredictHub"
                  width={52}
                  height={52}
                  className="h-full w-full scale-125 object-contain object-center"
                  priority
                />
              </span>
              <span className="text-[15px] font-semibold leading-none tracking-tight text-white sm:text-base">
                IAPredictHub
              </span>
            </Link>

            <div className="hidden items-center gap-2 md:flex">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} icon={item.icon} pathname={pathname} />
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="hidden md:block border-b border-white/10 bg-[linear-gradient(135deg,rgba(10,11,24,0.88)_0%,rgba(23,16,45,0.9)_45%,rgba(43,31,67,0.92)_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-violet-200/14 bg-white/[0.045] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_16px_42px_rgba(15,23,42,0.18)] backdrop-blur-md">
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-violet-200/35 to-transparent" />
            <div className="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full bg-violet-500/12 blur-3xl" />
            <div className="relative flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl border border-violet-200/20 bg-violet-300/10 text-violet-100 shadow-[0_10px_22px_rgba(124,58,237,0.16)]">
                  B
                </div>
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 rounded-full border border-violet-200/20 bg-violet-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-100">
                    Betfair Exchange
                  </div>
                  <p className="max-w-2xl text-sm leading-6 text-slate-200">
                    Punto clave del flujo interno para cubrir apuestas con una presentación más limpia,
                    más premium y totalmente integrada con el resto del producto.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="https://www.betfair.es/exchange/plus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-violet-200/25 bg-violet-500 px-4 py-2 text-xs font-semibold text-white shadow-[0_14px_30px_rgba(124,58,237,0.26)] transition-all hover:-translate-y-0.5 hover:bg-violet-400 hover:shadow-[0_18px_40px_rgba(139,92,246,0.34)]"
                >
                  España principal
                </a>
                <a
                  href="https://apuestas.betfair.es/latinoamerica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-violet-200/18 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-violet-100 transition-all hover:-translate-y-0.5 hover:border-violet-200/30 hover:bg-white/[0.08]"
                >
                  LATAM soporte
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-6 pb-20 sm:px-6 lg:px-8 md:pb-8">{children}</main>

      <footer className="hidden md:block border-t border-white/10 bg-[linear-gradient(180deg,rgba(8,10,20,0.92)_0%,rgba(10,11,24,0.98)_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] px-5 py-6 shadow-[0_18px_54px_rgba(2,6,23,0.24)] backdrop-blur-md sm:px-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-3">
                <Image src="/logo-iamagica.png" alt="IAMagica" width={120} height={32} className="h-8 w-auto rounded-md" />
                <div className="space-y-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-violet-200/70">
                    IAMagica
                  </p>
                  <p className="text-sm font-medium text-slate-200">
                    IAPredictHub · Matched Betting para uso educativo y responsable.
                  </p>
                </div>
              </div>

              <a
                href="mailto:info@iamagica.es"
                className="inline-flex items-center gap-3 rounded-full border border-violet-200/18 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-slate-200 transition-all hover:-translate-y-0.5 hover:border-violet-200/28 hover:bg-violet-500/10 hover:text-white"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-violet-200/18 bg-violet-300/10 text-violet-100">
                  @
                </span>
                <span>info@iamagica.es</span>
              </a>
            </div>

            <div className="mt-5 border-t border-white/10 pt-4 text-xs text-slate-400 sm:flex sm:items-center sm:justify-between">
              <span>© 2026 IAMagica</span>
              <span>IAPredictHub · Solo para uso educativo. Apuesta con responsabilidad.</span>
            </div>
          </div>
        </div>
      </footer>

      <BottomNav />
    </>
  )
}
