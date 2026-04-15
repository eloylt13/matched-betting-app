import type { Metadata } from 'next'
import Link from 'next/link'
import TrackedLink from '@/components/analytics/TrackedLink'
import EmailCapture from '@/components/landing/EmailCapture'
import HeroMockup from '@/components/landing/HeroMockup'
import TelegramButton from '@/components/landing/TelegramButton'

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
  title: 'Matched Betting España y LATAM 2026 | Guía, Calculadora y Bonos | IAPredictHub',
  description:
    'Herramienta gratuita de matched betting para España y LATAM. Calculadora de cobertura, guías paso a paso y seguimiento de bonos de bienvenida. Sin registro. +50 casas organizadas por fases.',
  alternates: {
    canonical: 'https://iapredicthub.es',
  },
  openGraph: {
    title: 'Matched Betting España y LATAM 2026 | Guía, Calculadora y Bonos | IAPredictHub',
    description:
      'Herramienta gratuita de matched betting para España y LATAM. Calculadora de cobertura, guías paso a paso y seguimiento de bonos de bienvenida. Sin registro. +50 casas organizadas por fases.',
    url: 'https://iapredicthub.es',
    images: [
      {
        url: 'https://iapredicthub.es/logo.png',
        width: 512,
        height: 512,
        alt: 'IAPredictHub — Matched Betting España y LATAM',
      },
    ],
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

const BENEFICIOS_RAPIDOS = [
  {
    titulo: 'Paso a paso claro',
    desc: 'Sigue un orden recomendado para no empezar perdido.',
  },
  {
    titulo: 'Calculadora preparada para ejecutar',
    desc: 'Menos campos manuales, menos errores evitables.',
  },
  {
    titulo: 'Todo organizado en un solo sitio',
    desc: 'Casas, bonos, progreso y siguientes acciones.',
  },
]

const TESTIMONIOS_BETA = [
  {
    nombre: 'Carlos',
    ciudad: 'Valencia',
    texto: 'Por fin entiendo por dónde empezar y qué hacer primero sin ir saltando entre mil páginas.',
  },
  {
    nombre: 'Marta',
    ciudad: 'Madrid',
    texto: 'La veo mucho más clara que otras opciones. Me ayuda a seguir una ruta y no improvisar tanto.',
  },
  {
    nombre: 'Sergio',
    ciudad: 'Sevilla',
    texto: 'Lo que más me sirve es tener guías, calculadora y casas en el mismo sitio desde el principio.',
  },
  {
    nombre: 'Laura',
    ciudad: 'Barcelona',
    texto: 'Da sensación de producto útil de verdad. Para empezar, tener todo más ordenado se nota mucho.',
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

const FAQS = [
  {
    pregunta: '¿Necesito experiencia previa para usar IAPredictHub?',
    respuesta:
      'No. Está pensada para ayudarte a empezar con más orden y menos lío, aunque todavía no domines el proceso. La idea es que tengas una ruta más clara desde el principio.',
  },
  {
    pregunta: '¿Voy a tener que rellenarlo todo a mano?',
    respuesta:
      'No del todo. La app te guía por el flujo y la calculadora ya ayuda a reducir pasos manuales. Aun así, seguirás revisando datos y tomando decisiones, pero con menos trabajo repetitivo y menos errores evitables.',
  },
  {
    pregunta: '¿Puedo perder dinero usando la app?',
    respuesta:
      'Sí, ese riesgo existe. La app no elimina el riesgo por completo: su función es ayudarte a ejecutar con más método, más orden y menos errores evitables. Conviene usarla con criterio y siempre dentro de un uso responsable.',
  },
  {
    pregunta: '¿Sirve solo para España o también para LATAM?',
    respuesta:
      'Está pensada principalmente para España, que sigue siendo el foco principal del proyecto. Aun así, varias partes también son utilizables en LATAM, sobre todo la parte de aprendizaje, calculadora y organización del flujo.',
  },
  {
    pregunta: '¿Qué incluye gratis ahora mismo?',
    respuesta:
      'Ahora mismo puedes usar gratis el onboarding, el dashboard, la calculadora, las casas, el checklist, el seguimiento y las guías. La idea es que puedas entrar y entender el flujo completo sin pagar en esta fase.',
  },
  {
    pregunta: '¿Necesito registrarme para probarla?',
    respuesta:
      'No. En esta fase puedes entrar y usar la app sin registro. Así puedes ver si el enfoque encaja contigo antes de complicarte con pasos extra.',
  },
]

export default function LandingPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Necesito experiencia previa para usar IAPredictHub?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Está pensada para ayudarte a empezar con más orden y menos lío, aunque todavía no domines el proceso. La idea es que tengas una ruta más clara desde el principio.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Puedo perder dinero usando la app?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, ese riesgo existe. La app no elimina el riesgo por completo: su función es ayudarte a ejecutar con más método, más orden y menos errores evitables. Conviene usarla con criterio y siempre dentro de un uso responsable.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Sirve solo para España o también para LATAM?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Está pensada principalmente para España, que sigue siendo el foco principal del proyecto. Aun así, varias partes también son utilizables en LATAM, sobre todo la parte de aprendizaje, calculadora y organización del flujo.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué incluye gratis ahora mismo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ahora mismo puedes usar gratis el onboarding, el dashboard, la calculadora, las casas, el checklist, el seguimiento y las guías. La idea es que puedas entrar y entender el flujo completo sin pagar en esta fase.',
        },
      },
    ],
  }

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
      'Herramienta gratuita de matched betting para España y LATAM con calculadora, guías y seguimiento de bonos.',
  }

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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
                <span className="text-purple-300 font-normal hidden sm:inline"> · Bonos de bienvenida</span>
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
                className="inline-flex items-center rounded-full border border-emerald-300/25 bg-emerald-400 px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-slate-950 shadow-[0_8px_24px_rgba(16,185,129,0.22)] transition-colors hover:bg-emerald-300"
              >
                Entrar en la app →
              </TrackedLink>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#080B16]">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 18% 18%, rgba(16, 185, 129, 0.16), transparent 30%), radial-gradient(circle at 82% 12%, rgba(99, 102, 241, 0.14), transparent 28%), linear-gradient(145deg, #080B16 0%, #10172A 48%, #151029 100%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.55) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.55) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 72%, transparent 100%)',
          }}
        />
        <div className="absolute left-1/2 top-16 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/25 to-transparent" />

        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="text-center">
            <div className="relative mx-auto overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] px-5 py-8 shadow-2xl shadow-black/40 backdrop-blur-md sm:px-8 sm:py-12 lg:px-12">
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
              <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-emerald-300/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-28 -left-16 h-60 w-60 rounded-full bg-indigo-400/10 blur-3xl" />

              <div className="relative">
                <div className="mb-8 flex flex-col items-center gap-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 text-xs font-semibold text-emerald-200 shadow-sm shadow-emerald-950/20 backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.75)]" />
                    Acceso Gratuito · Sin registro
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold text-slate-300 sm:text-xs">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 backdrop-blur-sm">IA aplicada</span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 backdrop-blur-sm">Modo guiado</span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 backdrop-blur-sm">Sin tarjeta ni registro</span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 backdrop-blur-sm">100% gratuito en beta</span>
                  </div>
                </div>

                <h1 className="mx-auto mb-4 max-w-4xl font-playfair text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                  Aprende a aprovechar los bonos de bienvenida con una ruta clara y guiada.
                </h1>

                <div className="mx-auto mb-5 flex max-w-3xl items-center gap-3">
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-200/35 to-transparent" aria-hidden="true" />
                  <p className="text-base font-semibold tracking-[0.16em] text-cyan-100/95 sm:text-lg lg:text-xl xl:text-2xl">
                    También disponible en versión LATAM
                  </p>
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-200/35 to-transparent" aria-hidden="true" />
                </div>

                <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl">
                  IAPredictHub te guía paso a paso para entender el proceso, usar la calculadora adecuada y seguir una ruta clara desde el primer día.
                </p>

                <div className="mb-7">
                  <HeroMockup />
                </div>

                <TrackedLink
                  href="/pronosticos"
                  eventName="home_freebet_banner_clicked"
                  eventProps={{ location: 'hero', target_path: '/pronosticos' }}
                  className="group mx-auto mb-8 flex w-full max-w-2xl flex-col items-center rounded-[1.5rem] border border-emerald-200/20 bg-slate-950/55 px-4 py-4 text-center shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-200/35 hover:bg-slate-950/70 hover:shadow-[0_30px_90px_rgba(0,0,0,0.38)] sm:px-5"
                >
                  <div className="flex flex-col items-center gap-3">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-200">
                      Freebet GRATIS
                    </span>
                    <p className="max-w-xl text-base leading-relaxed text-slate-100 sm:text-lg">
                      Accede a nuestra freebet con pronósticos filtrados y verificados por{' '}
                      <span className="whitespace-nowrap">IA</span>
                    </p>
                  </div>
                </TrackedLink>

                <div className="mb-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                  <TrackedLink
                    href="/bienvenida"
                    eventName="home_cta_primary_clicked"
                    eventProps={{ location: 'hero', target_path: '/bienvenida' }}
                    className="group w-full rounded-xl bg-emerald-400 px-8 py-3.5 text-base font-bold text-slate-950 shadow-lg shadow-emerald-950/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-300 hover:shadow-xl hover:shadow-emerald-950/35 sm:w-auto"
                  >
                    <span className="inline-flex items-center gap-2">
                      <span>Quiero aprovechar mejor los bonos</span>
                      <span className="text-lg leading-none transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
                    </span>
                  </TrackedLink>
                  <TrackedLink
                    href="/guias"
                    eventName="home_cta_secondary_clicked"
                    eventProps={{ location: 'hero', target_path: '/guias' }}
                    className="w-full rounded-xl border border-white/15 bg-white/[0.045] px-8 py-3.5 text-base font-semibold text-white shadow-sm shadow-black/10 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.085] sm:w-auto"
                  >
                    Ver guía y herramientas
                  </TrackedLink>
                </div>

                <p className="mx-auto mb-7 max-w-xl text-xs leading-relaxed text-slate-400 sm:text-sm">
                  Algunas promociones cambian con frecuencia: mejor revisarlas con una ruta clara.
                </p>

                <div className="mx-auto grid max-w-2xl grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-black/10 text-left shadow-inner shadow-white/[0.03] backdrop-blur-sm md:grid-cols-4 md:divide-x md:divide-white/10">
                  <div className="border-b border-r border-white/10 px-3 py-4 text-center md:border-b-0 md:border-r-0 sm:px-5">
                    <p className="text-lg font-bold text-white sm:text-2xl">50+</p>
                    <p className="mt-1 text-[11px] leading-tight text-slate-400 sm:text-xs">casas verificadas</p>
                  </div>
                  <div className="border-b border-white/10 px-3 py-4 text-center md:border-b-0 sm:px-5">
                    <p className="text-lg font-bold text-white sm:text-2xl">7</p>
                    <p className="mt-1 text-[11px] leading-tight text-slate-400 sm:text-xs">módulos guiados</p>
                  </div>
                  <div className="border-r border-white/10 px-3 py-4 text-center md:border-r-0 sm:px-5">
                    <p className="text-lg font-bold text-white sm:text-2xl">4</p>
                    <p className="mt-1 text-[11px] leading-tight text-slate-400 sm:text-xs">modos de cálculo</p>
                  </div>
                  <div className="px-3 py-4 text-center sm:px-5">
                    <p className="text-lg font-bold text-white sm:text-2xl">+2.000€</p>
                    <p className="mt-1 text-[11px] leading-tight text-slate-400 sm:text-xs">bonos documentados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-[#0b1020] via-[#10192a] to-[#f6f8fc] border-b border-white/10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="grid gap-4 md:grid-cols-3">
            {BENEFICIOS_RAPIDOS.map((beneficio) => (
              <div
                key={beneficio.titulo}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-left shadow-[0_18px_40px_rgba(2,6,23,0.18)] backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/[0.09]"
              >
                <h2 className="text-sm font-semibold text-white mb-2">{beneficio.titulo}</h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{beneficio.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f6f8fc] border-y border-slate-200/80">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/70 to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-[-6rem] h-40 w-40 -translate-x-1/2 rounded-full bg-emerald-400/5 blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="overflow-hidden rounded-[1.25rem] border border-white/70 bg-white/75 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-slate-200/80">
              <div className="py-4 sm:py-0 sm:px-6">
                <p className="text-3xl sm:text-4xl font-bold text-emerald-600">50+</p>
                <p className="text-[13px] text-slate-500 mt-1 leading-tight">casas organizadas</p>
              </div>
              <div className="py-4 sm:py-0 sm:px-6 border-l border-slate-200/80">
                <p className="text-2xl sm:text-3xl font-bold text-emerald-600">+2.500€ / +3.000$</p>
                <p className="text-[13px] text-slate-500 mt-1 leading-tight">en bonos documentados</p>
              </div>
              <div className="py-4 sm:py-0 sm:px-6 border-t sm:border-t-0 border-slate-200/80 sm:border-l">
                <p className="text-3xl sm:text-4xl font-bold text-emerald-600">7</p>
                <p className="text-[13px] text-slate-500 mt-1 leading-tight">módulos de formación</p>
              </div>
              <div className="py-4 sm:py-0 sm:px-6 border-t sm:border-t-0 border-l border-slate-200/80">
                <p className="text-3xl sm:text-4xl font-bold text-emerald-600">4</p>
                <p className="text-[13px] text-slate-500 mt-1 leading-tight">modos de calculadora</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F3EE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-3">Por qué usar esta herramienta</p>
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900">
              Claridad, orden y ejecución desde el primer uso
            </h2>
            <p className="text-stone-500 mt-4 max-w-xl mx-auto text-sm sm:text-base">
              Menos dispersión, menos dudas al empezar y una forma más práctica de seguir cada paso.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BENEFICIOS.map((b) => (
              <div key={b.titulo} className="relative overflow-hidden rounded-lg border border-stone-200/70 bg-gradient-to-br from-white via-white to-emerald-50/35 p-5 shadow-[0_14px_34px_rgba(18,17,42,0.08)] ring-1 ring-white/80 transition-all duration-200 before:absolute before:inset-x-4 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-emerald-300/55 before:to-transparent hover:-translate-y-0.5 hover:border-emerald-300/60 hover:shadow-[0_18px_42px_rgba(18,17,42,0.11)]">
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-200/70 bg-white/80 text-emerald-700 shadow-sm shadow-emerald-950/5">
                  <LandingIcon name={b.icon as LandingIconName} />
                </span>
                <h3 className="font-semibold text-stone-800 text-sm mb-2">{b.titulo}</h3>
                <p className="text-xs text-stone-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-50 border-y border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10">
            <p className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-700">
              Beta temprana
            </p>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-stone-900 mt-4">
              Lo que están viendo los primeros beta testers
            </h2>
            <p className="mt-4 text-sm sm:text-base text-stone-500 leading-relaxed">
              Usuarios iniciales ya la están usando para entender mejor el proceso, seguir una ruta más clara y evitar errores al empezar.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIOS_BETA.map((testimonio) => (
              <div
                key={testimonio.nombre}
                className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-stone-900">{testimonio.nombre}</p>
                    <p className="text-xs text-stone-500">{testimonio.ciudad}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-stone-100 px-2.5 py-1 text-[11px] font-medium text-stone-600">
                    Beta tester
                  </span>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">{testimonio.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-purple-600 uppercase tracking-widest mb-3">Acceso completo · Sin límites</p>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-stone-900 mb-4">Qué incluye la app gratuita</h2>
              <p className="text-stone-500 text-sm sm:text-base mb-8 leading-relaxed">
                La beta incluye las herramientas principales para aprender el flujo, calcular mejor y seguir cada casa con más orden.
              </p>
              <TrackedLink
                href="/bienvenida"
                eventName="home_cta_mid_clicked"
                eventProps={{ location: 'features', target_path: '/bienvenida' }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#12112A] to-[#2A1F3D] text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md"
              >
                Entrar ahora y empezar con más orden →
              </TrackedLink>
            </div>
            <div className="flex flex-col gap-3">
              {BETA_FEATURES.map((f) => (
                <div key={f.titulo} className="relative flex items-start gap-3 overflow-hidden rounded-lg border border-stone-200/70 bg-gradient-to-r from-white via-stone-50/80 to-emerald-50/30 p-4 shadow-[0_10px_28px_rgba(18,17,42,0.06)] ring-1 ring-white/80 transition-all duration-200 before:absolute before:inset-y-3 before:left-0 before:w-px before:bg-gradient-to-b before:from-transparent before:via-emerald-300/65 before:to-transparent hover:border-emerald-300/60 hover:shadow-[0_14px_34px_rgba(18,17,42,0.09)]">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-200/70 bg-white/85 text-emerald-700 shadow-sm shadow-emerald-950/5">
                    <LandingIcon name={f.icon as LandingIconName} className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="font-semibold text-stone-800 text-sm">{f.titulo}</p>
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium shrink-0">Disponible</span>
                    </div>
                    <p className="text-xs text-stone-500 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#f6f3ec] to-[#efebe2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-3">La app, en detalle</p>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-stone-900">Una herramienta real para empezar con más contexto</h2>
            <p className="text-stone-500 mt-3 max-w-xl mx-auto text-sm">
              Ya existe y ya funciona. Estas son algunas de las piezas que conectan la experiencia real de entrada.
            </p>
          </div>
          <div className="grid gap-4 rounded-[2rem] border border-stone-200/80 bg-white/70 p-4 shadow-[0_18px_48px_rgba(18,17,42,0.08)] backdrop-blur-sm sm:grid-cols-3 sm:p-5">
            {[
              ['Dashboard', 'Empieza aquí, progreso y siguientes acciones.'],
              ['Calculadora', 'Selector guiado para elegir el modo más lógico.'],
              ['Guías', 'Módulos y material para entender el orden recomendado.'],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#11162b] p-5 shadow-[0_16px_38px_rgba(8,15,31,0.28)] ring-1 ring-white/[0.04] transition-all duration-200 before:absolute before:inset-x-4 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-emerald-300/35 before:to-transparent hover:-translate-y-0.5 hover:border-emerald-300/25 hover:shadow-[0_20px_44px_rgba(8,15,31,0.34)]"
              >
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-200/75">{title}</p>
                <p className="mb-2 text-sm font-semibold text-white">{title}</p>
                <p className="text-xs leading-relaxed text-slate-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'linear-gradient(135deg, #12112A 0%, #1e1840 50%, #2A1F3D 100%)' }} className="relative overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-3">Formación incluida</p>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-3">Guías gratuitas para empezar</h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">Accede gratis a los módulos de formación y empieza con una base más clara.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {GUIAS_DESTACADAS.map((g) => (
              <a key={g.archivo} href={`/guias/${g.archivo}`} target="_blank" rel="noopener noreferrer" className="group relative flex items-start gap-4 overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-[0_18px_44px_rgba(0,0,0,0.18)] ring-1 ring-white/[0.035] backdrop-blur-sm transition-all duration-200 before:absolute before:inset-x-4 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-emerald-300/45 before:to-transparent hover:-translate-y-0.5 hover:border-emerald-300/35 hover:bg-white/[0.075] hover:shadow-[0_22px_54px_rgba(0,0,0,0.24)]">
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/12 bg-white/[0.07] text-emerald-300 shadow-sm shadow-black/10 transition-colors group-hover:border-emerald-300/35 group-hover:bg-emerald-300/10">
                  <LandingIcon name={g.icono as LandingIconName} />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-white text-sm group-hover:text-emerald-300 transition-colors mb-1">{g.titulo}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{g.desc}</p>
                </div>
                <span className="text-xs text-emerald-400 font-semibold shrink-0 mt-0.5">PDF →</span>
              </a>
            ))}
          </div>
          <div className="text-center">
            <Link href="/guias" className="inline-flex items-center gap-2 border border-white/20 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm">
              Ver todas las guías →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-stone-50 to-stone-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-3">Mantente al día</p>
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-stone-900 mb-3">Recibe novedades y nuevas guías</h2>
          <p className="text-stone-500 text-sm mb-8 max-w-md mx-auto leading-relaxed">
            Avisamos cuando añadamos nuevas casas, módulos o mejoras útiles en la herramienta.
          </p>
          <EmailCapture />
        </div>
      </section>

      <section className="bg-stone-50 border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-stone-900">Sobre este proyecto</h2>
            <p className="text-stone-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              IAPredictHub es un proyecto independiente desarrollado en España, pensado para ofrecer una forma más clara y ordenada de empezar con bonos de bienvenida, con foco principal en España y soporte adicional para LATAM. La herramienta nace de la necesidad de tener todo en un mismo sitio: calculadora, guías, seguimiento y una ruta lógica para no perderse al empezar.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-white rounded-2xl border border-stone-100 p-6 hover:shadow-md hover:border-emerald-200 transition-all">
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50/70 text-emerald-700">
                <LandingIcon name="build" />
              </span>
              <h3 className="font-semibold text-stone-800 text-sm mb-2">Desarrollo activo</h3>
              <p className="text-xs text-stone-500 leading-relaxed">La app se actualiza regularmente con nuevas casas, mejoras en la calculadora y contenido de formación.</p>
            </div>
            <div className="bg-white rounded-2xl border border-stone-100 p-6 hover:shadow-md hover:border-emerald-200 transition-all">
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50/70 text-emerald-700">
                <LandingIcon name="compass" />
              </span>
              <h3 className="font-semibold text-stone-800 text-sm mb-2">Enfoque principiante</h3>
              <p className="text-xs text-stone-500 leading-relaxed">Todo está pensado para quien empieza desde cero, sin jerga innecesaria ni pasos confusos.</p>
            </div>
            <div className="bg-white rounded-2xl border border-stone-100 p-6 hover:shadow-md hover:border-emerald-200 transition-all">
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50/70 text-emerald-700">
                <LandingIcon name="shield" />
              </span>
              <h3 className="font-semibold text-stone-800 text-sm mb-2">Sin datos personales</h3>
              <p className="text-xs text-stone-500 leading-relaxed">No pedimos registro ni almacenamos información. Todo se guarda en tu navegador.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-3">Antes de empezar</p>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
              Lo que más hace perder tiempo y bonos al principio
            </h2>
            <ul className="space-y-3 text-sm sm:text-base text-stone-600 leading-relaxed">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
                <span>Sin una ruta clara, es fácil activar bonos mal o dejarlos a medias.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
                <span>Muchas promociones cambian condiciones, pasos o plazos sin que lo notes.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
                <span>Usar calculadora, guías y seguimiento ayuda a reducir errores evitables desde el inicio.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#F7F4EE_0%,#F4F1EA_100%)] border-t border-stone-200/80">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-stone-900">Preguntas frecuentes</h2>
            <p className="text-stone-500 mt-3 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Resuelve las dudas más habituales antes de entrar, entiende qué puedes esperar de la app y comprueba si este enfoque encaja contigo.
            </p>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-stone-200/80 bg-white/90 shadow-[0_18px_60px_rgba(28,25,23,0.08)] ring-1 ring-white/60 backdrop-blur-sm">
            {FAQS.map((faq) => (
              <details key={faq.pregunta} className="group border-b border-stone-100 last:border-b-0">
                <summary className="flex items-start justify-between gap-4 px-6 py-5 cursor-pointer list-none transition-colors hover:bg-stone-50/90 group-open:bg-stone-50/80">
                  <span className="font-semibold text-stone-800 text-sm leading-relaxed">{faq.pregunta}</span>
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-400 shadow-sm transition-all duration-200 group-open:rotate-180 group-open:border-emerald-200 group-open:text-emerald-600">
                    <LandingIcon name="chevronDown" className="h-3.5 w-3.5" />
                  </span>
                </summary>
                <div className="border-t border-stone-100 bg-stone-50/60 px-6 pb-5 pt-4 text-sm text-stone-500 leading-relaxed">{faq.respuesta}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{ background: 'linear-gradient(135deg, #0b1020 0%, #10162a 48%, #1b2140 100%)' }}
        className="relative overflow-hidden border-t border-white/5"
      >
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] px-6 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-md sm:px-10 sm:py-14">
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-4">Empieza hoy</p>
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
              className="w-full sm:w-auto rounded-xl border border-emerald-300/20 bg-emerald-400 px-10 py-4 text-lg font-bold text-slate-950 shadow-[0_16px_36px_rgba(16,185,129,0.24)] transition-all hover:-translate-y-0.5 hover:bg-emerald-300 hover:shadow-[0_18px_42px_rgba(16,185,129,0.3)]"
            >
              Entrar ahora y empezar con más orden →
            </TrackedLink>
            <TrackedLink
              href="/guias"
              eventName="home_cta_final_secondary_clicked"
              eventProps={{ location: 'final_cta', target_path: '/guias' }}
              className="w-full sm:w-auto rounded-xl border border-white/14 bg-white/[0.04] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/[0.08] hover:border-white/20"
            >
              Ver guía y herramientas
            </TrackedLink>
          </div>
          </div>
        </div>
      </section>

      <footer
        style={{ background: 'linear-gradient(180deg, #0a0918 0%, #090816 100%)' }}
        className="relative overflow-hidden border-t border-white/10"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-11">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 mb-9 rounded-[1.5rem] border border-white/8 bg-white/[0.025] px-5 py-6 sm:px-7 sm:py-7 shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
                <img src="/logo.png" alt="IAPredictHub" className="w-7 h-7 rounded-full object-cover" />
                <span className="text-white font-bold text-sm">IAPredictHub</span>
              </div>
              <p className="text-gray-500 text-xs max-w-xs leading-relaxed">
                Herramienta en español para organizar bonos, guías y cálculo paso a paso.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6 text-xs">
              <div>
                <p className="font-semibold text-gray-400 uppercase tracking-wider mb-3 text-[11px]">Herramienta</p>
                <div className="flex flex-col gap-2">
                  <Link href="/guias" className="text-gray-500 hover:text-white transition-colors">Guías</Link>
                  <Link href="/calculadora" className="text-gray-500 hover:text-white transition-colors">Calculadora</Link>
                  <Link href="/casas" className="text-gray-500 hover:text-white transition-colors">Casas</Link>
                  <Link href="/dashboard" className="text-gray-500 hover:text-white transition-colors">Dashboard</Link>
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-400 uppercase tracking-wider mb-3 text-[11px]">Legal</p>
                <div className="flex flex-col gap-2">
                  <Link href="/legal/aviso" className="text-gray-500 hover:text-white transition-colors">Aviso legal</Link>
                  <Link href="/legal/privacidad" className="text-gray-500 hover:text-white transition-colors">Privacidad</Link>
                  <Link href="/legal/cookies" className="text-gray-500 hover:text-white transition-colors">Cookies</Link>
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-400 uppercase tracking-wider mb-3 text-[11px]">Contacto</p>
                <div className="flex flex-col gap-2">
                  <a href="https://t.me/Elte13" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">Telegram</a>
                  <a href="https://www.instagram.com/iapredicthub/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">Instagram</a>
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-400 uppercase tracking-wider mb-3 text-[11px]">Confianza</p>
                <div className="flex flex-col gap-2 text-gray-500">
                  <span>Mayores de 18</span>
                  <span>Juego responsable</span>
                  <span>Uso educativo</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/8 pt-6">
            <p className="text-center text-[11px] text-gray-600 leading-relaxed mb-2">
              Algunos enlaces pueden ser de afiliado. Esto no cambia el precio para el usuario.
            </p>
            <p className="text-center text-[11px] text-gray-600 leading-relaxed">
              © 2026 IAPredictHub. Todos los derechos reservados. · Solo para uso educativo. Apuesta con responsabilidad.
            </p>
          </div>
        </div>
      </footer>

      <TelegramButton />
    </div>
  )
}
