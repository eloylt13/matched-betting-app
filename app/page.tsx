import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import TrackedLink from '@/components/analytics/TrackedLink'
import HomeFaq from '@/components/home/HomeFaq'
import HeroAtmosphere from '@/components/landing/HeroAtmosphere'
import HeroMockup from '@/components/landing/HeroMockup'
import StickyMobileCTA from '@/components/StickyMobileCTA'

type LandingIconName =
  | 'calculator'
  | 'route'
  | 'bonus'
  | 'houses'
  | 'history'
  | 'compass'
  | 'dashboard'
  | 'guide'
  | 'trend'
  | 'exchange'
  | 'check'
  | 'build'
  | 'shield'
  | 'chevronDown'

function LandingIcon({ name, className = 'h-5 w-5' }: { name: LandingIconName; className?: string }) {
  const commonProps = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  switch (name) {
    case 'calculator':
      return (
        <svg {...commonProps}>
          <rect x="5" y="3" width="14" height="18" rx="3" />
          <path d="M8.5 7h7" />
          <path d="M8.5 11h.01M12 11h.01M15.5 11h.01M8.5 15h.01M12 15h.01M15.5 15h.01" />
        </svg>
      )
    case 'route':
      return (
        <svg {...commonProps}>
          <path d="M6 18c4.5 0 3-12 8-12h4" />
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="6" r="2" />
        </svg>
      )
    case 'bonus':
      return (
        <svg {...commonProps}>
          <path d="M4.5 10h15v9.5h-15z" />
          <path d="M12 10v9.5M4.5 14.5h15M7.5 7.5c0-1.1.9-2 2-2 1.8 0 2.5 2.2 2.5 4.5-2.3 0-4.5-.7-4.5-2.5ZM16.5 7.5c0-1.1-.9-2-2-2-1.8 0-2.5 2.2-2.5 4.5 2.3 0 4.5-.7 4.5-2.5Z" />
        </svg>
      )
    case 'houses':
      return (
        <svg {...commonProps}>
          <path d="M4 20V9.5l8-5.5 8 5.5V20" />
          <path d="M8 20v-7h8v7M9.5 10.5h.01M14.5 10.5h.01" />
        </svg>
      )
    case 'history':
      return (
        <svg {...commonProps}>
          <path d="M6 4.5h12v15H6z" />
          <path d="M9 8h6M9 12h6M9 16h3" />
        </svg>
      )
    case 'compass':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="m15 9-1.7 4.3L9 15l1.7-4.3L15 9Z" />
        </svg>
      )
    case 'dashboard':
      return (
        <svg {...commonProps}>
          <rect x="4" y="5" width="16" height="14" rx="3" />
          <path d="M8 15v-3M12 15V9M16 15v-5" />
        </svg>
      )
    case 'guide':
      return (
        <svg {...commonProps}>
          <path d="M6 4.5h8.5A3.5 3.5 0 0 1 18 8v11.5H8.5A2.5 2.5 0 0 0 6 22V4.5Z" />
          <path d="M9 8h5M9 12h6" />
        </svg>
      )
    case 'trend':
      return (
        <svg {...commonProps}>
          <path d="M4 18h16" />
          <path d="m6 15 4-4 3 3 5-7" />
          <path d="M15 7h3v3" />
        </svg>
      )
    case 'exchange':
      return (
        <svg {...commonProps}>
          <path d="M7 7h10l-3-3M17 17H7l3 3" />
          <path d="M17 7 7 17" />
        </svg>
      )
    case 'check':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="m8.5 12.5 2.2 2.2 4.8-5.4" />
        </svg>
      )
    case 'build':
      return (
        <svg {...commonProps}>
          <rect x="5" y="5" width="14" height="14" rx="3" />
          <path d="M9 9h6M9 12h6M9 15h3" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...commonProps}>
          <path d="M12 3.5 19 6v5.5c0 4.1-2.8 7.2-7 8.8-4.2-1.6-7-4.7-7-8.8V6l7-2.5Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    case 'chevronDown':
      return (
        <svg {...commonProps}>
          <path d="m7 10 5 5 5-5" />
        </svg>
      )
  }
}

export const metadata: Metadata = {
  title: 'IAPredictHub | Bonos de bienvenida en España con ruta guiada',
  description:
    'Empieza con una ruta clara para bonos de bienvenida: calculadora, guías y seguimiento en español. Foco principal en España, con apoyo adicional para LATAM.',
  alternates: {
    canonical: 'https://iapredicthub.es',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'IAPredictHub',
    title: 'Bonos de bienvenida en España | Ruta guiada | IAPredictHub',
    description:
      'Empieza con una ruta clara para bonos de bienvenida: calculadora, guías y seguimiento en español. Foco principal en España, con apoyo adicional para LATAM.',
    url: 'https://iapredicthub.es',
    images: [
      {
        url: 'https://iapredicthub.es/logo.png',
        width: 512,
        height: 512,
        alt: 'IAPredictHub — bonos de bienvenida en España y LATAM',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Bonos de bienvenida en España | Ruta guiada | IAPredictHub',
    description:
      'Empieza con una ruta guiada para bonos de bienvenida, con calculadora, guías y seguimiento en español. Foco principal en España, con apoyo adicional para LATAM.',
    images: ['https://iapredicthub.es/logo.png'],
  },
  robots: {
    follow: true,
    index: true,
    googleBot: {
      follow: true,
      index: true,
    },
  },
}

const GUIAS_DESTACADAS = [
  {
    icono: 'guide',
    titulo: 'Introducción al Matched Betting',
    desc: 'Qué es, cómo funciona y por qué conviene entender el método antes de ejecutar.',
    href: '/guias/primeros-pasos/introduccion-matched-betting',
  },
  {
    icono: 'trend',
    titulo: 'Cuánto se puede ganar',
    desc: 'Contexto realista del mercado español y LATAM, con foco en método, orden y ejecución.',
    href: '/guias/primeros-pasos/cuanto-se-puede-ganar',
  },
  {
    icono: 'exchange',
    titulo: 'Módulo 1 — Betfair Exchange',
    desc: 'Base práctica para cubrir apuestas correctamente y entender el exchange.',
    href: '/guias/modulos/modulo-1-betfair',
  },
  {
    icono: 'check',
    titulo: 'Módulo 2 — Apuesta y Recibe',
    desc: 'Cómo empezar por ofertas sencillas con una ejecución paso a paso.',
    href: '/guias/modulos/modulo-2-apuesta-y-recibe',
  },
]

export default function LandingPage() {
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'IAPredictHub',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
    },
    description:
      'IAPredictHub ayuda a ordenar bonos de bienvenida con una ruta guiada, calculadora, guías y seguimiento.',
  }

  return (
    <div className="min-h-screen pb-28 md:pb-0">
      <style>{`
        .landing-reveal {
          opacity: 1;
          transform: translateY(0);
        }

        @supports (animation-timeline: view()) {
          .landing-reveal {
            opacity: 0;
            transform: translateY(14px);
            animation: landing-reveal-in 1s both;
            animation-timeline: view();
            animation-range: entry 0% cover 18%;
            animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
          }
        }

        @keyframes landing-reveal-in {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .landing-reveal {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <header
        className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1020]/85 shadow-[0_12px_32px_rgba(2,6,23,0.26)] backdrop-blur-xl"
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
            <nav className="flex items-center gap-2 sm:gap-3">
              <TrackedLink
                href="/guias"
                eventName="header_guides_clicked"
                eventProps={{ location: 'header', target_path: '/guias' }}
                className="hidden sm:inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-200 transition-colors hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >
                Guías gratis
              </TrackedLink>
              <TrackedLink
                href="/blog"
                eventName="header_blog_clicked"
                eventProps={{ location: 'header', target_path: '/blog' }}
                className="hidden sm:inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-200 transition-colors hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >
                Blog
              </TrackedLink>
              <TrackedLink
                href="/bienvenida"
                eventName="header_enter_app_clicked"
                eventProps={{ location: 'header', target_path: '/bienvenida' }}
                className="inline-flex items-center rounded-full border border-violet-200/35 bg-violet-500 px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-white shadow-[0_10px_28px_rgba(124,58,237,0.28)] transition-colors hover:bg-violet-400"
              >
                Primer bono recomendado →
              </TrackedLink>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#080B16]">
        <HeroAtmosphere />

        <div className="relative mx-auto max-w-5xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 lg:px-8 lg:pt-20 lg:pb-24">
          <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-8 text-center md:grid-cols-2 md:gap-8 md:text-left lg:gap-12">
            <div className="min-w-0">
            <h1 className="mx-auto max-w-4xl font-playfair text-4xl font-bold leading-tight text-white sm:text-5xl lg:mx-0 lg:text-[3.55rem]">
              Convierte bonos de bienvenida en <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-green-400 bg-clip-text text-transparent">dinero real con matched betting</span>
            </h1>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center md:justify-start">
              <TrackedLink
                id="home-primary-cta"
                href="/bienvenida"
                eventName="home_cta_primary_clicked"
                eventProps={{ location: 'hero', target_path: '/bienvenida' }}
                className="group w-full rounded-lg bg-emerald-500 px-7 py-3.5 text-center text-base font-bold text-white shadow-[0_20px_56px_rgba(16,185,129,0.32)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-[0_24px_66px_rgba(52,211,153,0.42)] sm:w-auto"
              >
                <span className="inline-flex items-center gap-2">
                  <span>Soy nuevo: empezar paso a paso</span>
                  <span className="text-lg leading-none transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
                </span>
              </TrackedLink>
              <TrackedLink
                href="/guias/primeros-pasos/introduccion-matched-betting"
                eventName="home_cta_secondary_clicked"
                eventProps={{ location: 'hero', target_path: '/guias/primeros-pasos/introduccion-matched-betting' }}
                className="w-full rounded-lg border border-white/20 bg-transparent px-7 py-3.5 text-center text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
              >
                Ver guía completa
              </TrackedLink>
            </div>

            <div className="relative mx-auto mt-5 max-w-xl overflow-hidden rounded-xl border border-emerald-300/25 bg-[radial-gradient(circle_at_12%_0%,rgba(52,211,153,0.14),transparent_34%),radial-gradient(circle_at_92%_8%,rgba(167,139,250,0.12),transparent_32%),linear-gradient(135deg,rgba(15,23,42,0.92),rgba(6,10,24,0.78))] p-4 text-left shadow-[0_18px_46px_rgba(0,0,0,0.24),0_0_30px_rgba(16,185,129,0.08)] ring-1 ring-white/[0.06] backdrop-blur-sm lg:mx-0">
              <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-emerald-200/55 to-transparent" />
              <p className="relative mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                💡 Ejemplo práctico
              </p>
              <div className="relative divide-y divide-white/10">
                <div className="flex gap-3 py-3 first:pt-0">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-emerald-300/40 bg-emerald-400/15 text-sm font-bold text-emerald-200 shadow-[0_0_18px_rgba(52,211,153,0.18)]">
                    1
                  </span>
                  <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                    Te registras, ingresas 100€ → recibes 100€ bono
                  </p>
                </div>
                <div className="flex gap-3 py-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-emerald-300/40 bg-emerald-400/15 text-sm font-bold text-emerald-200 shadow-[0_0_18px_rgba(52,211,153,0.18)]">
                    2
                  </span>
                  <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                    Apuestas y cubres con Betfair usando nuestra calculadora. Resultado: pierdes unos céntimos
                  </p>
                </div>
                <div className="flex gap-3 py-3 last:pb-0">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-emerald-300/45 bg-emerald-400/20 text-sm font-bold text-emerald-100 shadow-[0_0_20px_rgba(52,211,153,0.22)]">
                    3
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm leading-relaxed text-slate-200 sm:text-base">Liberas el bono</p>
                    <p className="mt-0.5 text-base font-bold leading-snug text-emerald-300 sm:text-lg">
                      Beneficio estimado ≈100€ ✓
                    </p>
                  </div>
                </div>
              </div>
            </div>

            </div>

            <div className="min-w-0 flex flex-col gap-5">
            <div className="space-y-3">
              <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                <div className="inline-flex items-center rounded-full border border-emerald-300/30 bg-gradient-to-r from-emerald-400/15 via-teal-300/10 to-green-400/15 px-5 py-2.5 text-sm font-bold text-emerald-50 shadow-[0_0_24px_rgba(16,185,129,0.12)] ring-1 ring-white/[0.05]">
                  <span>Gratis</span>
                </div>
                <div className="inline-flex items-center rounded-full border border-emerald-300/30 bg-gradient-to-r from-emerald-400/15 via-teal-300/10 to-green-400/15 px-5 py-2.5 text-sm font-bold text-emerald-50 shadow-[0_0_24px_rgba(16,185,129,0.12)] ring-1 ring-white/[0.05]">
                  <span>Sin registro</span>
                </div>
              </div>
            </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-8 text-left shadow-2xl backdrop-blur-xl">
                <div className="flex flex-col items-start gap-5 sm:flex-row sm:justify-between">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">Paso 1 de 4</p>
                    <h2 className="mt-3 text-xl font-semibold tracking-tight text-white">
                      Primer bono recomendado
                    </h2>
                    <Link
                      href="/bienvenida"
                      className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-emerald-200/70 bg-emerald-300 px-5 py-3 text-center text-sm font-bold text-slate-950 shadow-[0_0_30px_rgba(52,211,153,0.30)] ring-1 ring-inset ring-white/35 transition-all duration-200 ease-out hover:border-emerald-100 hover:bg-emerald-200 hover:shadow-[0_0_38px_rgba(52,211,153,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-100/80 sm:w-auto"
                    >
                      Ir a guía
                    </Link>
                  </div>
                  <img
                    src="/logos/casas%20versus.svg"
                    alt="Versus"
                    className="h-auto w-20 shrink-0 self-start sm:w-28"
                  />
                </div>

                <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm font-semibold text-white">Resumen</p>
                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-gray-500">Dificultad</p>
                      <p className="mt-1 text-sm font-semibold text-gray-100">Baja</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-gray-500">Tiempo</p>
                      <p className="mt-1 text-sm font-semibold text-gray-100">~30 min</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-gray-500">
                        Beneficio estimado
                      </p>
                      <p className="mt-1 text-sm font-semibold text-gray-100">Hasta ~125€</p>
                    </div>
                  </div>
                </div>

                <div className="mt-7 space-y-4">
                  {[
                    { marker: '✓', label: 'Seguir la guía de Versus', completed: true },
                    { marker: '2', label: 'Registrarte y activar el bono', completed: false },
                    { marker: '3', label: 'Calcular cobertura', completed: false },
                    { marker: '4', label: 'Ejecutar y verificar', completed: false },
                  ].map((step) => (
                    <div key={step.label} className="flex items-center gap-3">
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-semibold ${
                          step.completed
                            ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-400'
                            : 'border-white/15 bg-white/[0.03] text-gray-500'
                        }`}
                      >
                        {step.marker}
                      </span>
                      <span className="text-sm font-medium text-gray-200">{step.label}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>

            <div id="home-hero-sentinel" aria-hidden="true" className="h-px w-full" />
        </div>
      </section>

      <section className="landing-reveal relative overflow-hidden bg-[#080B16]">
        <HeroAtmosphere />

        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-8 text-left md:grid-cols-2 md:gap-10 lg:gap-12">
            <div className="min-w-0 flex flex-col gap-5">
              <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm md:justify-start">
                <TrackedLink
                  href="/guias/primeros-pasos/cuanto-se-puede-ganar"
                  eventName="home_hero_ganancia_espana_clicked"
                  eventProps={{
                    location: 'hero_trust_signal',
                    target_path: '/guias/primeros-pasos/cuanto-se-puede-ganar',
                  }}
                  className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 font-semibold text-emerald-100/85 shadow-[0_8px_20px_rgba(2,6,23,0.14)] transition-colors duration-200 hover:border-emerald-300/35 hover:bg-white/[0.07] hover:text-white"
                >
                  <span className="min-w-0">Cuánto se puede ganar en España →</span>
                </TrackedLink>
                <TrackedLink
                  href="/guias/primeros-pasos/cuanto-se-puede-ganar-latam"
                  eventName="home_hero_ganancia_latam_clicked"
                  eventProps={{
                    location: 'hero_trust_signal',
                    target_path: '/guias/primeros-pasos/cuanto-se-puede-ganar-latam',
                  }}
                  className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 font-semibold text-emerald-100/85 shadow-[0_8px_20px_rgba(2,6,23,0.14)] transition-colors duration-200 hover:border-emerald-300/35 hover:bg-white/[0.07] hover:text-white"
                >
                  <span className="min-w-0">Cuánto se puede ganar en LATAM →</span>
                </TrackedLink>
              </div>

            <div className="relative w-full space-y-5 overflow-hidden rounded-xl border border-emerald-300/22 bg-[radial-gradient(circle_at_12%_0%,rgba(52,211,153,0.16),transparent_34%),radial-gradient(circle_at_92%_10%,rgba(167,139,250,0.12),transparent_32%),linear-gradient(135deg,rgba(15,23,42,0.88),rgba(2,6,23,0.64))] px-5 py-7 text-left shadow-[0_18px_46px_rgba(0,0,0,0.26),0_0_34px_rgba(16,185,129,0.08)] ring-1 ring-white/[0.06] backdrop-blur-sm sm:px-6 md:px-7 md:py-8">
              <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-emerald-200/55 to-transparent" />
              <div className="relative flex min-w-0 gap-3">
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-300/35 bg-emerald-300/10 text-emerald-200 shadow-[0_0_24px_rgba(52,211,153,0.22)] ring-1 ring-inset ring-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 0 0-4-5.7V4a2 2 0 1 0-4 0v1.3A6 6 0 0 0 6 11v3.2a2 2 0 0 1-.6 1.4L4 17h5" />
                    <path d="M10 20a2 2 0 0 0 4 0" />
                  </svg>
                </span>
                <div className="min-w-0 space-y-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-200/90">
                      BENEFICIOS RECURRENTES
                    </p>
                    <p className="mt-1 text-lg font-bold leading-snug text-white md:text-xl">
                      Alertas gratis de ofertas recurrentes
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-300">
                    Recibe avisos cuando aparezcan nuevas promociones aprovechables, con enlace a la casa y guía explicativa.
                  </p>
                </div>
              </div>
              <div className="relative flex w-full min-w-0 flex-col gap-3 xl:flex-row">
                <a
                  href="https://t.me/beneficiosrecurrentes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 w-full min-w-0 items-center justify-center rounded-full border border-emerald-200/70 bg-emerald-300 px-4 py-2.5 text-center text-xs font-bold text-slate-950 shadow-[0_0_28px_rgba(52,211,153,0.28)] ring-1 ring-inset ring-white/35 transition-all duration-200 ease-out hover:border-emerald-100 hover:bg-emerald-200 hover:text-slate-950 hover:shadow-[0_0_34px_rgba(52,211,153,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-100/80"
                >
                  Ver canal de alertas
                </a>
                <Link
                  href="/beneficios-recurrentes"
                  className="inline-flex min-h-10 w-full min-w-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-center text-xs font-semibold text-slate-200/90 ring-1 ring-inset ring-white/[0.04] transition-all duration-200 ease-out hover:border-emerald-200/35 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/45"
                >
                  Ver beneficios recurrentes
                </Link>
              </div>
            </div>

            <div className="relative w-full overflow-hidden rounded-xl border border-sky-300/18 bg-[linear-gradient(135deg,rgba(15,23,42,0.76),rgba(2,6,23,0.56))] px-5 py-6 text-left shadow-[0_14px_34px_rgba(0,0,0,0.18)] ring-1 ring-white/[0.05] backdrop-blur-sm sm:px-6 md:px-7">
              <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-sky-200/35 to-transparent" />
              <div className="relative flex min-w-0 gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-sky-300/25 bg-sky-300/10 text-sky-100 ring-1 ring-inset ring-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                    <path d="M8 9h8M8 13h5" />
                  </svg>
                </span>
                <div className="min-w-0 space-y-3">
                  <p className="text-sm font-bold leading-snug text-white">
                    Comunidad y alertas en Telegram
                  </p>
                  <p className="text-xs leading-relaxed text-slate-300">
                    Más de 650 usuarios siguen el método IAPredictHub. Más de 540 reciben gratis alertas de ofertas recurrentes.
                  </p>
                </div>
              </div>
            </div>
            </div>

              <div className="relative w-full min-w-0 overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] shadow-[0_18px_46px_rgba(0,0,0,0.28),0_0_34px_rgba(56,189,248,0.08)] ring-1 ring-white/[0.05]">
                <Image
                  src="/icons/telegram-alertas-recurrentes.png"
                  alt="Captura del canal de alertas recurrentes de IAPredictHub en Telegram"
                  width={580}
                  height={740}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="h-auto max-h-[520px] w-full rounded-xl object-contain object-top opacity-90 md:max-h-[560px]"
                />
              </div>
              <TrackedLink
                href="https://t.me/matchedbetiapredict"
                eventName="home_telegram_mobile_cta_clicked"
                eventProps={{ location: 'telegram_capture', target_path: 'telegram_channel' }}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-sky-500 px-5 py-3 text-sm font-bold text-white shadow-[0_0_24px_rgba(14,165,233,0.20)] transition-colors duration-200 hover:bg-sky-400 md:hidden"
              >
                Ir a Telegram →
              </TrackedLink>
            </div>
          </div>
      </section>

      <section
        style={{ background: 'linear-gradient(135deg, #0b1020 0%, #171330 45%, #2A1F4A 100%)' }}
        className="landing-reveal relative overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-200/35 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-violet-300 uppercase tracking-widest mb-3">Formación incluida</p>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-3">Guías gratuitas para empezar</h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">Accede gratis a los módulos de formación y empieza con una base más clara.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {GUIAS_DESTACADAS.map((g) => (
              <Link key={g.href} href={g.href} className="group relative flex items-start gap-4 overflow-hidden rounded-lg border border-violet-200/12 bg-white/[0.055] p-5 shadow-[0_20px_52px_rgba(0,0,0,0.22)] ring-1 ring-white/[0.035] backdrop-blur-sm transition-all duration-200 before:absolute before:inset-x-4 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-violet-300/50 before:to-transparent hover:-translate-y-0.5 hover:border-violet-300/35 hover:bg-white/[0.08] hover:shadow-[0_24px_62px_rgba(0,0,0,0.28)]">
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/12 bg-violet-300/10 text-violet-200 shadow-sm shadow-black/10 transition-colors group-hover:border-violet-300/35 group-hover:bg-violet-300/15">
                  <LandingIcon name={g.icono as LandingIconName} />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-white text-sm group-hover:text-violet-200 transition-colors mb-1">{g.titulo}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{g.desc}</p>
                </div>
                <span className="text-xs text-violet-300 font-semibold shrink-0 mt-0.5">Ver guía →</span>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/guias" className="inline-flex items-center gap-2 rounded-lg border border-violet-200/25 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-violet-200/40 hover:bg-white/10">
              Ver todas las guías →
            </Link>
          </div>
        </div>
      </section>

      <HomeFaq />

      <StickyMobileCTA
        href="/bienvenida"
        label="Empezar mi primer bono guiado"
        hideWhileElementVisibleId="home-primary-cta"
      />
    </div>
  )
}
