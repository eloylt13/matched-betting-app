import type { Metadata } from 'next'
import Link from 'next/link'
import TrackedLink from '@/components/analytics/TrackedLink'
import EmailCapture from '@/components/landing/EmailCapture'
import HeroAtmosphere from '@/components/landing/HeroAtmosphere'
import HeroMockup from '@/components/landing/HeroMockup'

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

const BENEFICIOS = [
  {
    icon: 'calculator',
    titulo: 'Calculadora de cobertura precisa',
    desc: 'Calcula stakes, lay bets y escenarios sin fórmulas manuales ni errores evitables.',
  },
  {
    icon: 'route',
    titulo: 'Ruta guiada para empezar',
    desc: 'Entras por una secuencia clara para no perderte entre guías, exchange, casas y calculadora.',
  },
  {
    icon: 'bonus',
    titulo: 'Seguimiento de bonos y freebets',
    desc: 'Todo queda ordenado para saber qué has activado, qué falta y qué toca hacer después.',
  },
  {
    icon: 'houses',
    titulo: 'Organizado por casa',
    desc: 'Cada casa tiene fases, checklist y contexto para que sepas siempre por dónde vas.',
  },
  {
    icon: 'history',
    titulo: 'Historial claro de operaciones',
    desc: 'Registra lo que haces y revisa tu progreso con más contexto y menos improvisación.',
  },
  {
    icon: 'compass',
    titulo: 'Pensado para principiantes',
    desc: 'No necesitas dominar todo al entrar. La app te orienta por el orden más lógico.',
  },
]

const BETA_FEATURES = [
  {
    icon: 'dashboard',
    titulo: 'Dashboard de progreso',
    desc: 'Primero te dice qué hacer y después te enseña métricas, progreso y bonos pendientes.',
  },
  {
    icon: 'calculator',
    titulo: 'Calculadora de cobertura',
    desc: 'Oddsmatcher y Dutcher con varios modos para elegir la herramienta adecuada en cada caso.',
  },
  {
    icon: 'houses',
    titulo: 'Casas y fases',
    desc: 'Listado de casas con fases, checklist y ayudas para ejecutar con más orden.',
  },
  {
    icon: 'bonus',
    titulo: 'Bonos y freebets',
    desc: 'Panel de seguimiento para no dejar pasos a medias ni perder contexto al avanzar.',
  },
  {
    icon: 'guide',
    titulo: 'Guías integradas',
    desc: 'Guías y módulos accesibles desde la propia app para acompañar el primer recorrido.',
  },
  {
    icon: 'history',
    titulo: 'Historial de operaciones',
    desc: 'Registro sencillo para revisar qué has hecho y mantener una ejecución más limpia.',
  },
]

const TESTIMONIOS_BETA = [
  {
    nombre: 'Carlos',
    ciudad: 'Valencia',
    contexto: 'Primer recorrido',
    texto: 'Me ha servido para ver el orden de los pasos. Antes tenía bonos, guías y calculadora abiertos por separado y acababa dudando de por dónde seguir.',
  },
  {
    nombre: 'Marta',
    ciudad: 'Madrid',
    contexto: 'Organización',
    texto: 'Se nota que aún está en beta, pero el flujo ya se entiende. No me vende humo; simplemente me ayuda a no ir tan perdida al empezar.',
  },
  {
    nombre: 'Sergio',
    ciudad: 'Sevilla',
    contexto: 'Calculadora y casas',
    texto: 'Lo que más agradezco es tener la casa, la fase y la calculadora cerca. No es que lo haga por mí, pero me evita perder contexto cada dos minutos.',
  },
  {
    nombre: 'Laura',
    ciudad: 'Barcelona',
    contexto: 'Feedback temprano',
    texto: 'Para alguien que está empezando, tenerlo todo junto baja bastante la fricción. Todavía faltan pulidos, pero ya transmite más orden que hacerlo a mano.',
  },
]

const GUIAS_DESTACADAS = [
  {
    icono: 'guide',
    titulo: 'Introducción al Matched Betting',
    desc: 'Qué es, cómo funciona y por qué conviene entender el método antes de ejecutar.',
    archivo: 'inicio/introduccion-matched-betting.pdf',
  },
  {
    icono: 'trend',
    titulo: 'Cuánto se puede ganar',
    desc: 'Contexto realista del mercado español y LATAM, con foco en método, orden y ejecución.',
    archivo: 'inicio/cuanto-se-puede-ganar-espana.pdf',
  },
  {
    icono: 'exchange',
    titulo: 'Módulo 1 — Betfair Exchange',
    desc: 'Base práctica para cubrir apuestas correctamente y entender el exchange.',
    archivo: 'modulos/modulo-1-betfair.pdf',
  },
  {
    icono: 'check',
    titulo: 'Módulo 2 — Apuesta y Recibe',
    desc: 'Cómo empezar por ofertas sencillas con una ejecución paso a paso.',
    archivo: 'modulos/modulo-2-apuesta-y-recibe.pdf',
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
    <div className="min-h-screen">
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
                Probar gratis →
              </TrackedLink>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#080B16]">
        <HeroAtmosphere />

        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-4xl text-center">
            <TrackedLink
              href="/pronosticos"
              eventName="home_freebet_card_clicked"
              eventProps={{ location: 'hero', target_path: '/pronosticos' }}
              className="group mx-auto mb-8 flex max-w-sm items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm transition-all duration-200 hover:border-emerald-400/40 hover:bg-white/10"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-emerald-400"
                >
                  <polyline points="20 12 20 22 4 22 4 12" />
                  <rect x="2" y="7" width="20" height="5" />
                  <line x1="12" y1="22" x2="12" y2="7" />
                  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1 text-left">
                <p className="text-sm font-semibold text-white">Freebet diaria de hoy</p>
                <p className="text-xs text-gray-400">Reclámala en 2 minutos</p>
              </div>
              <span className="shrink-0 text-lg text-emerald-400 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </TrackedLink>

            <h1 className="mx-auto max-w-4xl font-playfair text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.55rem]">
              <span className="text-emerald-400">+2.000€</span> en bonos de bienvenida disponibles. Te enseñamos a aprovecharlos.
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg">
              Matched betting para España y LATAM: un método para aprovechar bonos de bienvenida cubriendo la apuesta contraria con la calculadora.
            </p>

            <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-[0_24px_80px_rgba(3,7,18,0.35)] backdrop-blur-md sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">Ejemplo</p>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-300">
                <p>· Una casa te da 50€ de freebet al depositar 50€</p>
                <p>· Apuestas los 50€ a un resultado y cubres la apuesta contraria utilizando la calculadora</p>
                <p>· Recuperas gran parte del depósito y luego conviertes la freebet siguiendo la ruta guiada</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <TrackedLink
                href="/bienvenida"
                eventName="home_cta_primary_clicked"
                eventProps={{ location: 'hero', target_path: '/bienvenida' }}
                className="group w-full rounded-lg bg-emerald-500 px-7 py-3.5 text-center text-base font-bold text-white shadow-[0_20px_56px_rgba(16,185,129,0.32)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-[0_24px_66px_rgba(52,211,153,0.42)] sm:w-auto"
              >
                <span className="inline-flex items-center gap-2">
                  <span>Empezar con bonos</span>
                  <span className="text-lg leading-none transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
                </span>
              </TrackedLink>
              <TrackedLink
                href="/guias"
                eventName="home_cta_secondary_clicked"
                eventProps={{ location: 'hero', target_path: '/guias' }}
                className="w-full rounded-lg border border-white/20 bg-transparent px-7 py-3.5 text-center text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
              >
                Ver guías gratis
              </TrackedLink>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
              <div className="inline-flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Sin tarjeta</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Sin registro</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span>+2.000€ en bonos disponibles</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span>30+ casas en España y LATAM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0918] py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-emerald-400">Cómo funciona</p>
            <h2 className="font-playfair text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Tres pasos para empezar con matched betting
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-200 hover:border-emerald-400/30 hover:bg-white/8">
              <span className="mb-4 block font-playfair text-4xl font-bold text-emerald-400">01</span>
              <h3 className="mb-2 text-base font-semibold text-white">Eliges una casa y activas el bono</h3>
              <p className="text-sm leading-relaxed text-gray-400">
                Te registras en una casa de apuestas de España o LATAM y activas su bono de bienvenida. La app te recomienda por cuál empezar.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-200 hover:border-emerald-400/30 hover:bg-white/8">
              <span className="mb-4 block font-playfair text-4xl font-bold text-emerald-400">02</span>
              <h3 className="mb-2 text-base font-semibold text-white">Cubres la apuesta con la calculadora</h3>
              <p className="text-sm leading-relaxed text-gray-400">
                Apuestas en la casa y cubres la apuesta contraria con la calculadora. Te dice cuánto poner en cada lado.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-200 hover:border-emerald-400/30 hover:bg-white/8">
              <span className="mb-4 block font-playfair text-4xl font-bold text-emerald-400">03</span>
              <h3 className="mb-2 text-base font-semibold text-white">Recuperas y aprovechas el bono</h3>
              <p className="text-sm leading-relaxed text-gray-400">
                Recuperas gran parte del depósito y aprovechas el bono siguiendo la ruta guiada.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <TrackedLink
              href="/casas"
              eventName="home_como_funciona_cta_clicked"
              eventProps={{ location: 'como_funciona', target_path: '/casas' }}
              className="group inline-flex items-center gap-2 rounded-lg border border-white/20 bg-transparent px-7 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
            >
              <span>Ver casas para empezar</span>
              <span className="text-lg leading-none transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className="landing-reveal bg-[linear-gradient(180deg,#F1ECFF_0%,#F8FAFC_48%,#F4F0FF_100%)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-violet-600 uppercase tracking-widest mb-3">Por qué usar esta herramienta</p>
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950">
              Claridad, orden y ejecución desde el primer uso
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm sm:text-base">
              Menos dispersión, menos dudas al empezar y una forma más práctica de seguir cada paso.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BENEFICIOS.map((b) => (
              <div key={b.titulo} className="relative overflow-hidden rounded-lg border border-violet-200/65 bg-white/80 p-5 shadow-[0_18px_48px_rgba(46,16,101,0.09)] ring-1 ring-white/90 backdrop-blur-sm transition-all duration-200 before:absolute before:inset-x-4 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-violet-300/70 before:to-transparent hover:-translate-y-0.5 hover:border-violet-300/70 hover:bg-white/90 hover:shadow-[0_22px_58px_rgba(46,16,101,0.14)]">
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-violet-200/80 bg-gradient-to-br from-violet-50 to-white text-violet-700 shadow-[0_10px_24px_rgba(109,40,217,0.08)]">
                  <LandingIcon name={b.icon as LandingIconName} />
                </span>
                <h3 className="font-semibold text-slate-800 text-sm mb-2">{b.titulo}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#F8FAFC_0%,#F1EDFF_100%)] border-y border-violet-100/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10">
            <p className="inline-flex items-center rounded-full border border-violet-200/80 bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-violet-700 shadow-sm shadow-violet-950/5 backdrop-blur-sm">
              Beta temprana
            </p>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-slate-950 mt-4">
              Lo que están viendo los primeros beta testers
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed">
              Primeras impresiones de usuarios que están probando la beta para ordenar el inicio, entender el flujo y detectar qué partes todavía necesitan más pulido.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIOS_BETA.map((testimonio) => (
              <div
                key={testimonio.nombre}
                className="relative overflow-hidden rounded-lg border border-violet-200/60 bg-white/75 p-5 shadow-[0_16px_42px_rgba(46,16,101,0.08)] ring-1 ring-white/80 backdrop-blur-sm transition-all duration-200 before:absolute before:inset-x-4 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-violet-300/55 before:to-transparent hover:-translate-y-0.5 hover:border-violet-300/60 hover:bg-white/90 hover:shadow-[0_20px_52px_rgba(46,16,101,0.13)]"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-950">{testimonio.nombre}</p>
                    <p className="text-xs text-slate-500">{testimonio.ciudad}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-violet-200/70 bg-violet-50/80 px-2.5 py-1 text-[11px] font-medium text-violet-700 shadow-sm shadow-violet-950/5">
                    Beta
                  </span>
                </div>
                <p className="mb-3 inline-flex rounded-md border border-slate-200/80 bg-slate-50 px-2 py-1 text-[11px] font-medium text-slate-500">
                  {testimonio.contexto}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">{testimonio.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="landing-reveal bg-[linear-gradient(180deg,#F1EDFF_0%,#FFFFFF_42%,#F8FAFC_100%)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-purple-600 uppercase tracking-widest mb-3">Acceso completo · Sin límites</p>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-slate-950 mb-4">Qué incluye la app gratuita</h2>
              <p className="text-slate-500 text-sm sm:text-base mb-8 leading-relaxed">
                La beta incluye las herramientas principales para aprender el flujo, calcular mejor y seguir cada casa con más orden.
              </p>
              <TrackedLink
                href="/bienvenida"
                eventName="home_cta_mid_clicked"
                eventProps={{ location: 'features', target_path: '/bienvenida' }}
                className="inline-flex items-center gap-2 rounded-lg border border-violet-300/35 bg-gradient-to-r from-[#171330] via-[#31205F] to-[#6D28D9] px-6 py-3 font-semibold text-white shadow-[0_18px_46px_rgba(76,29,149,0.28)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_58px_rgba(76,29,149,0.34)]"
              >
                Entrar ahora y empezar con más orden →
              </TrackedLink>
            </div>
            <div className="flex flex-col gap-3">
              {BETA_FEATURES.map((f) => (
                <div key={f.titulo} className="relative flex items-start gap-3 overflow-hidden rounded-lg border border-violet-200/65 bg-white/80 p-4 shadow-[0_14px_36px_rgba(46,16,101,0.08)] ring-1 ring-white/90 backdrop-blur-sm transition-all duration-200 before:absolute before:inset-y-3 before:left-0 before:w-px before:bg-gradient-to-b before:from-transparent before:via-violet-300/70 before:to-transparent hover:border-violet-300/70 hover:bg-white/95 hover:shadow-[0_18px_46px_rgba(46,16,101,0.12)]">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-violet-200/75 bg-violet-50/85 text-violet-700 shadow-sm shadow-violet-950/5">
                    <LandingIcon name={f.icon as LandingIconName} className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="font-semibold text-slate-800 text-sm">{f.titulo}</p>
                      <span className="shrink-0 rounded-full border border-violet-200/70 bg-violet-50/90 px-2 py-0.5 text-xs font-medium text-violet-700">Disponible</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="landing-reveal bg-[linear-gradient(180deg,#F8FAFC_0%,#F0EBFF_52%,#EEF2FF_100%)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-violet-500 uppercase tracking-widest mb-3">La app, en detalle</p>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-slate-950">Una herramienta real para empezar con más contexto</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">
              Ya existe y ya funciona. Estas son algunas de las piezas que conectan la experiencia real de entrada.
            </p>
          </div>
          <div className="grid gap-4 rounded-[1.5rem] border border-violet-200/55 bg-white/60 p-4 shadow-[0_24px_72px_rgba(46,16,101,0.12)] ring-1 ring-white/85 backdrop-blur-md sm:grid-cols-3 sm:p-5">
            {[
              ['Dashboard', 'Empieza aquí, progreso y siguientes acciones.'],
              ['Calculadora', 'Selector guiado para elegir el modo más lógico.'],
              ['Guías', 'Módulos y material para entender el orden recomendado.'],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-lg border border-white/10 bg-[#0f1022] p-5 shadow-[0_20px_50px_rgba(8,15,31,0.34)] ring-1 ring-white/[0.04] transition-all duration-200 before:absolute before:inset-x-4 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-violet-300/50 before:to-transparent hover:-translate-y-0.5 hover:border-violet-300/35 hover:shadow-[0_24px_60px_rgba(8,15,31,0.42)]"
              >
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-violet-200/80">{title}</p>
                <p className="mb-2 text-sm font-semibold text-white">{title}</p>
                <p className="text-xs leading-relaxed text-slate-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{ background: 'linear-gradient(135deg, #0b1020 0%, #171330 45%, #2A1F4A 100%)' }}
        className="landing-reveal relative overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-200/35 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-violet-300 uppercase tracking-widest mb-3">Formación incluida</p>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-3">Guías gratuitas para empezar</h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">Accede gratis a los módulos de formación y empieza con una base más clara.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {GUIAS_DESTACADAS.map((g) => (
              <a key={g.archivo} href={`/guias/${g.archivo}`} target="_blank" rel="noopener noreferrer" className="group relative flex items-start gap-4 overflow-hidden rounded-lg border border-violet-200/12 bg-white/[0.055] p-5 shadow-[0_20px_52px_rgba(0,0,0,0.22)] ring-1 ring-white/[0.035] backdrop-blur-sm transition-all duration-200 before:absolute before:inset-x-4 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-violet-300/50 before:to-transparent hover:-translate-y-0.5 hover:border-violet-300/35 hover:bg-white/[0.08] hover:shadow-[0_24px_62px_rgba(0,0,0,0.28)]">
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/12 bg-violet-300/10 text-violet-200 shadow-sm shadow-black/10 transition-colors group-hover:border-violet-300/35 group-hover:bg-violet-300/15">
                  <LandingIcon name={g.icono as LandingIconName} />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-white text-sm group-hover:text-violet-200 transition-colors mb-1">{g.titulo}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{g.desc}</p>
                </div>
                <span className="text-xs text-violet-300 font-semibold shrink-0 mt-0.5">PDF →</span>
              </a>
            ))}
          </div>
          <div className="text-center">
            <Link href="/guias" className="inline-flex items-center gap-2 rounded-lg border border-violet-200/25 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-violet-200/40 hover:bg-white/10">
              Ver todas las guías →
            </Link>
          </div>
        </div>
      </section>

      <section className="landing-reveal bg-[linear-gradient(180deg,#FFFFFF_0%,#F5F1FF_56%,#F8FAFC_100%)]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <p className="text-xs font-semibold text-violet-500 uppercase tracking-widest mb-3">Mantente al día</p>
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-slate-950 mb-3">Recibe novedades y nuevas guías</h2>
          <p className="text-slate-500 text-sm mb-8 max-w-md mx-auto leading-relaxed">
            Avisamos cuando añadamos nuevas casas, módulos o mejoras útiles en la herramienta.
          </p>
          <EmailCapture />
        </div>
      </section>

      <section
        style={{ background: 'linear-gradient(135deg, #0b1020 0%, #10162a 48%, #1b2140 100%)' }}
        className="relative overflow-hidden border-t border-white/5"
      >
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-violet-200/15 bg-white/[0.045] px-6 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.28)] ring-1 ring-white/[0.04] backdrop-blur-md sm:px-10 sm:py-14">
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-violet-200/45 to-transparent" />
          <p className="text-xs font-semibold text-violet-300 uppercase tracking-widest mb-4">Empieza hoy</p>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-6">Todo listo para empezar.<br />Sin registro. Sin coste.</h2>
          <p className="text-gray-400 text-base sm:text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Entra gratis y sigue el paso a paso para empezar con más orden, entender qué toca hacer
            y ejecutar con más claridad desde el principio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <TrackedLink
              href="/bienvenida"
              eventName="home_cta_final_clicked"
              eventProps={{ location: 'final_cta', target_path: '/bienvenida' }}
              className="w-full sm:w-auto rounded-lg border border-violet-200/35 bg-violet-500 px-10 py-4 text-lg font-bold text-white shadow-[0_18px_46px_rgba(124,58,237,0.34)] transition-all hover:-translate-y-0.5 hover:bg-violet-400 hover:shadow-[0_22px_56px_rgba(139,92,246,0.42)]"
            >
              Entrar ahora y empezar con más orden →
            </TrackedLink>
            <TrackedLink
              href="/guias"
              eventName="home_cta_final_secondary_clicked"
              eventProps={{ location: 'final_cta', target_path: '/guias' }}
              className="w-full sm:w-auto rounded-lg border border-white/14 bg-white/[0.04] px-8 py-4 text-base font-semibold text-white transition-all hover:border-violet-200/30 hover:bg-white/[0.08]"
            >
              Ver guía y herramientas
            </TrackedLink>
          </div>
          </div>
        </div>
      </section>

    </div>
  )
}
