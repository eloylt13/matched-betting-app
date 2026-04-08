import type { Metadata } from 'next'
import Link from 'next/link'
import EmailCapture from '@/components/landing/EmailCapture'
import TelegramButton from '@/components/landing/TelegramButton'

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
    icon: '🧮',
    titulo: 'Calculadora de cobertura precisa',
    desc: 'Calcula stakes, lay bets y escenarios sin fórmulas manuales ni errores evitables.',
  },
  {
    icon: '📚',
    titulo: 'Ruta guiada para empezar',
    desc: 'Entras por una secuencia clara para no perderte entre guías, exchange, casas y calculadora.',
  },
  {
    icon: '🎁',
    titulo: 'Seguimiento de bonos y freebets',
    desc: 'Todo queda ordenado para saber qué has activado, qué falta y qué toca hacer después.',
  },
  {
    icon: '🏠',
    titulo: 'Organizado por casa',
    desc: 'Cada casa tiene fases, checklist y contexto para que sepas siempre por dónde vas.',
  },
  {
    icon: '📋',
    titulo: 'Historial claro de operaciones',
    desc: 'Registra lo que haces y revisa tu progreso con más contexto y menos improvisación.',
  },
  {
    icon: '🧭',
    titulo: 'Pensado para principiantes',
    desc: 'No necesitas dominar todo al entrar. La app te orienta por el orden más lógico.',
  },
]

const BETA_FEATURES = [
  {
    icon: '📊',
    titulo: 'Dashboard de progreso',
    desc: 'Primero te dice qué hacer y después te enseña métricas, progreso y bonos pendientes.',
  },
  {
    icon: '🧮',
    titulo: 'Calculadora de cobertura',
    desc: 'Oddsmatcher y Dutcher con varios modos para elegir la herramienta adecuada en cada caso.',
  },
  {
    icon: '🏠',
    titulo: 'Casas y fases',
    desc: 'Listado de casas con fases, checklist y ayudas para ejecutar con más orden.',
  },
  {
    icon: '🎁',
    titulo: 'Bonos y freebets',
    desc: 'Panel de seguimiento para no dejar pasos a medias ni perder contexto al avanzar.',
  },
  {
    icon: '📚',
    titulo: 'Guías integradas',
    desc: 'Guías y módulos accesibles desde la propia app para acompañar el primer recorrido.',
  },
  {
    icon: '📝',
    titulo: 'Historial de operaciones',
    desc: 'Registro sencillo para revisar qué has hecho y mantener una ejecución más limpia.',
  },
]

const GUIAS_DESTACADAS = [
  {
    icono: '📖',
    titulo: 'Introducción al Matched Betting',
    desc: 'Qué es, cómo funciona y por qué conviene entender el método antes de ejecutar.',
    archivo: 'inicio/introduccion-matched-betting.pdf',
  },
  {
    icono: '💰',
    titulo: 'Cuánto se puede ganar',
    desc: 'Contexto realista del mercado español y LATAM, con foco en método, orden y ejecución.',
    archivo: 'inicio/cuanto-se-puede-ganar-espana.pdf',
  },
  {
    icono: '♻️',
    titulo: 'Módulo 1 — Betfair Exchange',
    desc: 'Base práctica para cubrir apuestas correctamente y entender el exchange.',
    archivo: 'modulos/modulo-1-betfair.pdf',
  },
  {
    icono: '🟢',
    titulo: 'Módulo 2 — Apuesta y Recibe',
    desc: 'Cómo empezar por ofertas sencillas con una ejecución paso a paso.',
    archivo: 'modulos/modulo-2-apuesta-y-recibe.pdf',
  },
]

const FAQS = [
  {
    pregunta: '¿Qué es la beta?',
    respuesta:
      'Es la versión inicial gratuita de IAPredictHub. Puedes usar las herramientas y guías sin coste ni registro mientras seguimos mejorando el producto.',
  },
  {
    pregunta: '¿Necesito experiencia previa?',
    respuesta:
      'No. La app está pensada para quien empieza y necesita una ruta más clara para entender el proceso sin ir a ciegas.',
  },
  {
    pregunta: '¿La app promete beneficios garantizados?',
    respuesta:
      'No. La propuesta de valor está en ayudarte a ejecutar con más método, más orden y menos errores en España y LATAM.',
  },
  {
    pregunta: '¿Qué incluye ahora mismo?',
    respuesta:
      'Incluye onboarding, dashboard, calculadora, casas con fases, seguimiento de bonos, historial y guías integradas.',
  },
]

export default function LandingPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Qué es la beta?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Es la versión inicial gratuita de IAPredictHub. Puedes usar las herramientas y guías sin coste ni registro mientras seguimos mejorando el producto.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Necesito experiencia previa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. La app está pensada para quien empieza y necesita una ruta más clara para entender el proceso sin ir a ciegas.',
        },
      },
      {
        '@type': 'Question',
        name: '¿La app promete beneficios garantizados?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. La propuesta de valor está en ayudarte a ejecutar con más método, más orden y menos errores en España y LATAM.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué incluye ahora mismo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Incluye onboarding, dashboard, calculadora, casas con fases, seguimiento de bonos, historial y guías integradas.',
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
        style={{ background: 'linear-gradient(135deg, #12112A 0%, #2A1F3D 100%)' }}
        className="sticky top-0 z-50 shadow-lg"
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
            <nav className="flex items-center gap-2 sm:gap-4">
              <Link href="/guias" className="hidden sm:inline text-gray-300 hover:text-white text-sm transition-colors">
                Guías gratis
              </Link>
              <Link href="/blog" className="hidden sm:inline text-gray-300 hover:text-white text-sm transition-colors">
                Blog
              </Link>
              <Link
                href="/bienvenida"
                className="bg-emerald-500 hover:bg-emerald-400 text-white text-xs sm:text-sm font-bold px-3 sm:px-5 py-1.5 sm:py-2 rounded-full transition-colors"
              >
                Entrar en la app →
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <section
        style={{ background: 'linear-gradient(160deg, #0e0d1f 0%, #12112A 40%, #1e1840 70%, #2A1F3D 100%)' }}
        className="relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 text-center">
          <div className="flex flex-col items-center mb-8">
            <Link
              href="/pronosticos"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/20 to-emerald-400/10 border border-emerald-400/30 text-emerald-100 hover:text-white hover:border-emerald-300/60 hover:from-emerald-500/30 hover:to-emerald-300/20 text-sm font-bold px-4 py-2 rounded-full mb-4 shadow-lg shadow-emerald-950/25 transition-all hover:shadow-emerald-900/40"
            >
              <span>Nuevo: Freebet diaria GRATIS</span>
              <span
                className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-300 text-[#12112A] shadow-sm transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
            <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Acceso libre · Sin registro
            </div>
          </div>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
            Empieza con bonos de bienvenida en España y LATAM
            <span className="text-emerald-400"> de forma más guiada y clara</span>.
          </h1>

          <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            Herramienta práctica para España y LATAM pensada para ayudarte a empezar paso a paso.
            Te guía por una ruta recomendada para entender el proceso, usar la calculadora adecuada
            y no perderte al entrar por primera vez.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
            <Link
              href="/bienvenida"
              className="group w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-base px-8 py-3.5 rounded-xl transition-colors shadow-lg shadow-emerald-900/30"
            >
              <span className="inline-flex items-center gap-2">
                <span>Entrar y seguir la ruta recomendada</span>
                <span className="text-lg leading-none transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">➜</span>
              </span>
            </Link>
            <Link
              href="/guias"
              className="w-full sm:w-auto border border-white/20 hover:bg-white/10 text-white font-semibold text-base px-8 py-3.5 rounded-xl transition-colors"
            >
              Ver guías gratis
            </Link>
          </div>

          <p className="text-sm text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            No necesitas entenderlo todo antes de empezar: la app te orienta por el orden más claro desde dentro.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
            <span className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> Sin tarjeta ni registro</span>
            <span className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> 100% gratuito en beta</span>
            <span className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> España y LATAM</span>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 text-center divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-stone-200">
            <div className="py-4 sm:py-0 sm:px-6">
              <p className="text-3xl sm:text-4xl font-bold text-emerald-600">50+</p>
              <p className="text-[13px] text-stone-400 mt-1 leading-tight">casas organizadas</p>
            </div>
            <div className="py-4 sm:py-0 sm:px-6 border-l border-stone-200">
              <p className="text-3xl sm:text-4xl font-bold text-emerald-600">+2.500€</p>
              <p className="text-[13px] text-stone-400 mt-1 leading-tight">en bonos documentados</p>
            </div>
            <div className="py-4 sm:py-0 sm:px-6 border-t sm:border-t-0 border-stone-200 sm:border-l">
              <p className="text-3xl sm:text-4xl font-bold text-emerald-600">7</p>
              <p className="text-[13px] text-stone-400 mt-1 leading-tight">módulos de formación</p>
            </div>
            <div className="py-4 sm:py-0 sm:px-6 border-t sm:border-t-0 border-l border-stone-200">
              <p className="text-3xl sm:text-4xl font-bold text-emerald-600">4</p>
              <p className="text-[13px] text-stone-400 mt-1 leading-tight">modos de calculadora</p>
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
              <div key={b.titulo} className="bg-white rounded-2xl border border-stone-100 p-5 hover:shadow-md hover:border-emerald-200 transition-all">
                <span className="text-2xl mb-3 block">{b.icon}</span>
                <h3 className="font-semibold text-stone-800 text-sm mb-2">{b.titulo}</h3>
                <p className="text-xs text-stone-500 leading-relaxed">{b.desc}</p>
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
              <Link href="/bienvenida" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#12112A] to-[#2A1F3D] text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md">
                Entrar y seguir la ruta inicial →
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              {BETA_FEATURES.map((f) => (
                <div key={f.titulo} className="flex items-start gap-3 bg-stone-50 rounded-xl border border-stone-100 p-4 hover:border-emerald-200 transition-colors">
                  <span className="text-xl shrink-0 mt-0.5">{f.icon}</span>
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

      <section className="bg-gradient-to-b from-stone-100 to-stone-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-3">La app, en detalle</p>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-stone-900">Una herramienta real para empezar con más contexto</h2>
            <p className="text-stone-500 mt-3 max-w-xl mx-auto text-sm">
              Ya existe y ya funciona. Estas son algunas de las piezas que conectan la experiencia real de entrada.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              ['Dashboard', 'Empieza aquí, progreso y siguientes acciones.'],
              ['Calculadora', 'Selector guiado para elegir el modo más lógico.'],
              ['Guías', 'Módulos y material para entender el orden recomendado.'],
            ].map(([title, desc]) => (
              <div key={title} className="bg-white rounded-2xl border border-stone-200 p-5 shadow-sm">
                <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">{title}</p>
                <p className="text-sm font-semibold text-stone-800 mb-2">{title}</p>
                <p className="text-xs text-stone-500 leading-relaxed">{desc}</p>
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
              <a key={g.archivo} href={`/guias/${g.archivo}`} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/40 rounded-2xl p-5 transition-all">
                <span className="text-2xl shrink-0 mt-0.5">{g.icono}</span>
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

      <section className="bg-white">
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
              IAPredictHub es un proyecto independiente desarrollado en España, pensado para ofrecer una forma más clara y ordenada de empezar con bonos de bienvenida en España y LATAM. La herramienta nace de la necesidad de tener todo en un mismo sitio: calculadora, guías, seguimiento y una ruta lógica para no perderse al empezar.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-white rounded-2xl border border-stone-100 p-6 hover:shadow-md hover:border-emerald-200 transition-all">
              <span className="text-2xl mb-3 block">🛠</span>
              <h3 className="font-semibold text-stone-800 text-sm mb-2">Desarrollo activo</h3>
              <p className="text-xs text-stone-500 leading-relaxed">La app se actualiza regularmente con nuevas casas, mejoras en la calculadora y contenido de formación.</p>
            </div>
            <div className="bg-white rounded-2xl border border-stone-100 p-6 hover:shadow-md hover:border-emerald-200 transition-all">
              <span className="text-2xl mb-3 block">🎯</span>
              <h3 className="font-semibold text-stone-800 text-sm mb-2">Enfoque principiante</h3>
              <p className="text-xs text-stone-500 leading-relaxed">Todo está pensado para quien empieza desde cero, sin jerga innecesaria ni pasos confusos.</p>
            </div>
            <div className="bg-white rounded-2xl border border-stone-100 p-6 hover:shadow-md hover:border-emerald-200 transition-all">
              <span className="text-2xl mb-3 block">🔒</span>
              <h3 className="font-semibold text-stone-800 text-sm mb-2">Sin datos personales</h3>
              <p className="text-xs text-stone-500 leading-relaxed">No pedimos registro ni almacenamos información. Todo se guarda en tu navegador.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F3EE]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-stone-900">Preguntas frecuentes</h2>
          </div>
          <div className="bg-white rounded-2xl border border-stone-100 overflow-hidden divide-y divide-stone-100 shadow-sm">
            {FAQS.map((faq) => (
              <details key={faq.pregunta} className="group">
                <summary className="flex items-start justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-stone-50 transition-colors">
                  <span className="font-semibold text-stone-800 text-sm leading-relaxed">{faq.pregunta}</span>
                  <span className="text-stone-400 text-xl font-light shrink-0 mt-0.5 group-open:hidden">+</span>
                  <span className="text-stone-400 text-xl font-light shrink-0 mt-0.5 hidden group-open:block">−</span>
                </summary>
                <div className="px-6 pb-5 text-sm text-stone-500 leading-relaxed border-t border-stone-50">{faq.respuesta}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'linear-gradient(135deg, #0e0d1f 0%, #12112A 50%, #2A1F3D 100%)' }} className="relative overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-4">Empieza hoy</p>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-6">Todo listo para empezar.<br />Sin registro. Sin coste.</h2>
          <p className="text-gray-400 text-base sm:text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Entra a la beta y empieza con una ruta recomendada para entender el proceso,
            ejecutar con más orden y reducir errores desde el principio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/bienvenida" className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg px-10 py-4 rounded-xl transition-colors shadow-lg shadow-emerald-900/40">
              Entrar ahora y empezar paso a paso →
            </Link>
            <Link href="/guias" className="w-full sm:w-auto border border-white/20 hover:bg-white/10 text-white font-semibold text-base px-8 py-4 rounded-xl transition-colors">
              Ver guías
            </Link>
          </div>
          <p className="text-gray-500 text-xs mt-10 max-w-lg mx-auto leading-relaxed">Solo para uso educativo. Apuesta con responsabilidad.</p>
        </div>
      </section>

      <footer style={{ background: '#0a0918' }} className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 mb-10">
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
          <div className="border-t border-white/5 pt-6">
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
