// app/page.tsx — Landing pública IAPredictHub Matched Betting

import type { Metadata } from 'next'
import Link from 'next/link'
import EmailCapture from '@/components/landing/EmailCapture'
import TelegramButton from '@/components/landing/TelegramButton'

export const metadata: Metadata = {
  title: 'Bonos de bienvenida en España | Guía y calculadora | IAPredictHub',
  description:
    'App en español para entender los bonos de bienvenida, calcular cada paso y llevar todo organizado de forma sencilla.',
  alternates: {
    canonical: 'https://matched-betting-app.vercel.app',
  },
  openGraph: {
    title: 'Aprovecha hasta 2.000€ en bonos de bienvenida | IAPredictHub',
    description:
      'App en español para entender los bonos de bienvenida, calcular cada paso y llevar todo organizado de forma sencilla.',
    url: 'https://matched-betting-app.vercel.app',
    images: [
      {
        url: 'https://matched-betting-app.vercel.app/logo.png',
        width: 512,
        height: 512,
        alt: 'IAPredictHub — Bonos de bienvenida en España',
      },
    ],
  },
}

/* ── Datos de contenido ── */

const BENEFICIOS = [
  {
    icon: '🧮',
    titulo: 'Calculadora de cobertura precisa',
    desc: 'Calcula stakes, lay bets y escenarios al céntimo. Sin fórmulas manuales ni errores de cálculo.',
  },
  {
    icon: '📚',
    titulo: 'Guías para cada tipo de bono',
    desc: 'Guías para apuesta & recibe, reembolso, rollover y dutcher. Todo integrado en el flujo de la app.',
  },
  {
    icon: '🎁',
    titulo: 'Sigue tus bonos y freebets',
    desc: 'Registra bonos activos y freebets pendientes. No dejes caducar ninguna oferta por falta de seguimiento.',
  },
  {
    icon: '🏠',
    titulo: 'Organizado por casa',
    desc: 'Cada casa con sus fases, requisitos, checklist y alertas. Siempre sabes exactamente por dónde vas.',
  },
  {
    icon: '📋',
    titulo: 'Historial claro de operaciones',
    desc: 'Registra cada operación y comprueba cuánto llevas acumulado. Visibilidad total sobre tu progreso real.',
  },
  {
    icon: '📁',
    titulo: 'Sin caos de hojas y archivos',
    desc: 'Olvida Excel, PDFs sueltos y notas dispersas. Todo en una sola herramienta online.',
  },
]

const BETA_FEATURES = [
  {
    icon: '📊',
    titulo: 'Dashboard de progreso',
    desc: 'Vista general de casas completadas, bonos pendientes y beneficios acumulados.',
  },
  {
    icon: '🧮',
    titulo: 'Calculadora de cobertura',
    desc: '5 modos: cualificante, freebet, reembolso, rollover y dutcher. Con tabla de escenarios.',
  },
  {
    icon: '🏠',
    titulo: '30+ casas de apuestas',
    desc: 'Instrucciones detalladas, fases, checklist y guías para cada casa española.',
  },
  {
    icon: '🎁',
    titulo: 'Bonos y freebets',
    desc: 'Panel de seguimiento de todos tus bonos activos y freebets sin limpiar.',
  },
  {
    icon: '📋',
    titulo: 'Historial de operaciones',
    desc: 'Registro de operaciones con beneficio, fecha, tipo y notas personalizadas.',
  },
  {
    icon: '📚',
    titulo: 'Guías y formación integradas',
    desc: 'Módulos de formación y guías por casa accesibles desde la propia app.',
  },
]

const GUIAS_DESTACADAS = [
  {
    icono: '📖',
    titulo: 'Introducción al Matched Betting',
    desc: 'Qué es, cómo funciona y por qué es una técnica matemática, no una estrategia de azar.',
    archivo: 'inicio/1. INTRODUCCIÓN AL MATCHED BETTING.pdf',
  },
  {
    icono: '💰',
    titulo: 'Cuánto se puede ganar (España)',
    desc: 'Estimación realista y desglosada de beneficios en el mercado español.',
    archivo: 'inicio/2. CUÁNTO SE PUEDE GANAR (ESPAÑA).pdf',
  },
  {
    icono: '♻️',
    titulo: 'Módulo 1 — Betfair Exchange',
    desc: 'Registro y uso de Betfair Exchange para cubrir apuestas correctamente.',
    archivo: 'modulos/Modulo_1_Betfair_Actualizado_con_registro.pdf',
  },
  {
    icono: '🟢',
    titulo: 'Módulo 2 — Apuesta y Recibe',
    desc: 'Cómo aprovechar las ofertas más comunes de forma óptima y segura.',
    archivo: 'modulos/Modulo_2_Apuesta_y_Recibe_Actualizado_OK.pdf',
  },
]

const FAQS = [
  {
    pregunta: '¿Qué es la beta?',
    respuesta:
      'Es la versión inicial gratuita de IAPredictHub. Puedes usar todas las herramientas y guías sin coste ni registro. La app está en evolución activa y seguiremos añadiendo mejoras.',
  },
  {
    pregunta: '¿Es completamente gratis?',
    respuesta:
      'Sí, durante la fase beta todo el contenido y las herramientas son gratuitas. No hace falta crear una cuenta. Solo abre la app y empieza a usarla.',
  },
  {
    pregunta: '¿Necesito experiencia previa en apuestas?',
    respuesta:
      'No. Hay guías desde cero para entender los bonos de bienvenida, registrarte en cada casa y ejecutar cada tipo de oferta paso a paso. Puedes empezar sin conocimientos previos.',
  },
  {
    pregunta: '¿Qué incluye la beta ahora mismo?',
    respuesta:
      'Dashboard de progreso, calculadora de cobertura con 5 modos, listado de 30+ casas españolas con guías detalladas, seguimiento de bonos y freebets, historial de operaciones y módulos de formación.',
  },
  {
    pregunta: '¿Habrá un plan de pago o plan Pro en el futuro?',
    respuesta:
      'Es posible que en el futuro haya funcionalidades avanzadas de pago. Pero siempre habrá una versión gratuita disponible. Durante la beta, todo es libre.',
  },
  {
    pregunta: '¿Qué son los bonos de bienvenida?',
    respuesta:
      'Son promociones que ofrecen las casas de apuestas a nuevos usuarios al registrarse. Con la técnica adecuada y cubriendo cada apuesta, se puede convertir ese bono en beneficio real de forma calculada y sin depender de la suerte.',
  },
]

/* ── Componente principal ── */

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* ── 1. NAV ── */}
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
              <Link
                href="/guias"
                className="hidden sm:inline text-gray-300 hover:text-white text-sm transition-colors"
              >
                Guías gratis
              </Link>
              <Link
                href="/guias"
                className="bg-emerald-500 hover:bg-emerald-400 text-white text-xs sm:text-sm font-bold px-3 sm:px-5 py-1.5 sm:py-2 rounded-full transition-colors"
              >
                Abrir la app →
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* ── 2. HERO ── */}
      <section
        style={{
          background: 'linear-gradient(160deg, #0e0d1f 0%, #12112A 40%, #1e1840 70%, #2A1F3D 100%)',
        }}
        className="relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(ellipse, #4ade80 0%, transparent 70%)' }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Beta gratuita · Acceso libre · Sin registro
          </div>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
            Aprovecha hasta 2.000€ en{' '}
            <span className="text-emerald-400">bonos de bienvenida</span>{' '}
            en España.
          </h1>

          <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            Las casas de apuestas ofrecen bonos de bienvenida para nuevos usuarios.
            Esta app te guía paso a paso para entenderlos, calcular cada apuesta y
            aprovecharlos con más orden y menos errores.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10">
            <Link
              href="/guias"
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-base px-8 py-3.5 rounded-xl transition-colors shadow-lg shadow-emerald-900/30"
            >
              Entrar a la beta gratis →
            </Link>
            <Link
              href="/guias"
              className="w-full sm:w-auto border border-white/20 hover:bg-white/10 text-white font-semibold text-base px-8 py-3.5 rounded-xl transition-colors"
            >
              Ver guías gratis
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span> Sin tarjeta ni registro
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span> 100% gratuito en beta
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span> Mercado español
            </span>
          </div>
        </div>
      </section>

      {/* ── 3. STATS STRIP ── */}
      <section className="bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
            <div>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900">30+</p>
              <p className="text-xs sm:text-sm text-stone-400 mt-1">casas de apuestas</p>
            </div>
            <div className="border-x border-stone-100">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-600">+2.000€</p>
              <p className="text-xs sm:text-sm text-stone-400 mt-1">beneficio potencial</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900">7</p>
              <p className="text-xs sm:text-sm text-stone-400 mt-1">módulos de formación</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. BENEFICIOS ── */}
      <section className="bg-[#F5F3EE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-3">
              Por qué usar esta herramienta
            </p>
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900">
              Todo lo que necesitas para organizar tus bonos
            </h2>
            <p className="text-stone-500 mt-4 max-w-xl mx-auto text-sm sm:text-base">
              Sin dispersión entre herramientas sueltas, sin hojas caóticas y sin perder tiempo buscando información.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BENEFICIOS.map((b) => (
              <div
                key={b.titulo}
                className="bg-white rounded-2xl border border-stone-100 p-5 hover:shadow-md hover:border-emerald-200 transition-all"
              >
                <span className="text-2xl mb-3 block">{b.icon}</span>
                <h3 className="font-semibold text-stone-800 text-sm mb-2">{b.titulo}</h3>
                <p className="text-xs text-stone-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. QUÉ INCLUYE LA BETA ── */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-purple-600 uppercase tracking-widest mb-3">
                Acceso completo · Sin límites
              </p>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
                Qué incluye la app gratuita
              </h2>
              <p className="text-stone-500 text-sm sm:text-base mb-8 leading-relaxed">
                La beta incluye todas las herramientas sin limitaciones.
                El producto está en evolución — algunas funciones podrían ampliarse o reorganizarse en el futuro,
                pero el acceso libre seguirá disponible.
              </p>
              <Link
                href="/guias"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#12112A] to-[#2A1F3D] hover:from-[#1c1a3a] hover:to-[#36285a] text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md"
              >
                Entrar a la app gratis →
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              {BETA_FEATURES.map((f) => (
                <div
                  key={f.titulo}
                  className="flex items-start gap-3 bg-stone-50 rounded-xl border border-stone-100 p-4 hover:border-emerald-200 transition-colors"
                >
                  <span className="text-xl shrink-0 mt-0.5">{f.icon}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="font-semibold text-stone-800 text-sm">{f.titulo}</p>
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium shrink-0">
                        Disponible
                      </span>
                    </div>
                    <p className="text-xs text-stone-500 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. PREVIEW DE LA APP ── */}
      <section className="bg-gradient-to-b from-stone-100 to-stone-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-3">
              La app, en detalle
            </p>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-stone-900">
              Una herramienta real para bonos, freebets y seguimiento
            </h2>
            <p className="text-stone-500 mt-3 max-w-xl mx-auto text-sm">
              Ya existe y ya funciona. Estas son algunas de las pantallas principales de la app.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {/* Mockup 1 — Dashboard */}
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
              <div className="h-1.5" style={{ background: 'linear-gradient(90deg, #12112A, #2A1F3D)' }} />
              <div className="p-4">
                <p className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider mb-3">📊 Dashboard</p>
                <div className="grid grid-cols-3 gap-1.5 mb-3">
                  {[['€ 240', 'Ganado'], ['5/30', 'Casas'], ['3', 'Bonos']].map(([v, l]) => (
                    <div key={l} className="bg-stone-50 rounded-lg p-2 text-center border border-stone-100">
                      <p className="font-bold text-stone-800 text-sm leading-none">{v}</p>
                      <p className="text-[9px] text-stone-400 mt-1">{l}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] font-semibold text-stone-400 mb-2">⭐ Recomendadas</p>
                <div className="space-y-1.5">
                  {[['B', 'Bet365', '+€60'], ['S', 'Sportium', '+€50'], ['W', 'William Hill', '+€45']].map(([ini, casa, ben]) => (
                    <div key={casa} className="flex items-center gap-2 bg-stone-50 rounded-lg px-2.5 py-1.5 border border-stone-100">
                      <div className="w-5 h-5 rounded-md flex items-center justify-center text-white text-[9px] font-bold shrink-0"
                        style={{ background: 'linear-gradient(135deg, #12112A, #2A1F3D)' }}>
                        {ini}
                      </div>
                      <span className="text-[11px] font-medium text-stone-700 flex-1 truncate">{casa}</span>
                      <span className="text-[11px] font-bold text-emerald-600 shrink-0">{ben}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mockup 2 — Calculadora */}
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
              <div className="h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600" />
              <div className="p-4">
                <p className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider mb-3">🧮 Calculadora</p>
                <div className="flex gap-1 mb-3">
                  {['Cualificante', 'Freebet', 'Reembolso'].map((tab, i) => (
                    <span key={tab}
                      className={`text-[9px] px-2 py-1 rounded-lg font-semibold ${i === 0 ? 'bg-gradient-to-r from-[#12112A] to-[#2A1F3D] text-white' : 'bg-stone-100 text-stone-500'}`}>
                      {tab}
                    </span>
                  ))}
                </div>
                <div className="space-y-1.5 mb-3">
                  {[['Stake', '€ 20,00'], ['Cuota BM', '3.50'], ['Cuota Exchange', '3.55'], ['Comisión', '5%']].map(([l, v]) => (
                    <div key={l} className="flex items-center justify-between bg-stone-50 rounded-lg px-2.5 py-1.5 border border-stone-100">
                      <span className="text-[10px] text-stone-500">{l}</span>
                      <span className="text-[10px] font-semibold text-stone-800">{v}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-2.5">
                  <p className="text-[9px] text-emerald-600 font-semibold uppercase mb-1.5">Resultado</p>
                  <div className="flex justify-between text-[10px]">
                    <span className="text-stone-500">Lay stake</span>
                    <span className="font-bold text-stone-800">€ 19.72</span>
                  </div>
                  <div className="flex justify-between text-[10px] mt-1">
                    <span className="text-stone-500">Pérdida cualificante</span>
                    <span className="font-bold text-amber-600">-€ 0.41</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mockup 3 — Guías */}
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
              <div className="h-1.5 bg-gradient-to-r from-purple-600 to-indigo-500" />
              <div className="p-4">
                <p className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider mb-3">📚 Guías</p>
                <div className="flex gap-1 mb-3 flex-wrap">
                  {['Inicio', 'Módulos', 'Casas'].map((tab, i) => (
                    <span key={tab}
                      className={`text-[9px] px-2 py-1 rounded-lg font-semibold ${i === 0 ? 'bg-gradient-to-r from-[#12112A] to-[#2A1F3D] text-white' : 'bg-stone-100 text-stone-500'}`}>
                      {tab}
                    </span>
                  ))}
                </div>
                <div className="space-y-1.5">
                  {[
                    ['📖', 'Introducción', 'Inicio'],
                    ['♻️', 'Módulo Betfair', 'Módulo 1'],
                    ['🟢', 'Apuesta & Recibe', 'Módulo 2'],
                    ['🏢', 'Bet365', 'Casa'],
                    ['🏢', 'Sportium', 'Casa'],
                  ].map(([icon, name, tag]) => (
                    <div key={name} className="flex items-center gap-2 bg-stone-50 rounded-lg px-2.5 py-1.5 border border-stone-100">
                      <span className="text-xs shrink-0">{icon}</span>
                      <span className="text-[11px] font-medium text-stone-700 flex-1 truncate">{name}</span>
                      <span className="text-[9px] bg-purple-100 text-purple-600 px-1.5 py-0.5 rounded-full shrink-0">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. GUÍAS GRATUITAS ── */}
      <section
        style={{ background: 'linear-gradient(135deg, #12112A 0%, #1e1840 50%, #2A1F3D 100%)' }}
        className="relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-3">Formación incluida</p>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-3">
              Guías gratuitas para empezar
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              Accede gratis a los módulos de formación. No hace falta experiencia previa.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {GUIAS_DESTACADAS.map((g) => (
              <a
                key={g.archivo}
                href={`/guias/${g.archivo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/40 rounded-2xl p-5 transition-all"
              >
                <span className="text-2xl shrink-0 mt-0.5">{g.icono}</span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-white text-sm group-hover:text-emerald-300 transition-colors mb-1">
                    {g.titulo}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{g.desc}</p>
                </div>
                <span className="text-xs text-emerald-400 font-semibold shrink-0 mt-0.5 group-hover:text-emerald-300">
                  PDF →
                </span>
              </a>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/guias"
              className="inline-flex items-center gap-2 border border-white/20 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm"
            >
              Ver todas las guías →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. CAPTURA DE EMAIL ── */}
      <section className="bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-3">Mantente al día</p>
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-stone-900 mb-3">
            Recibe novedades y nuevas guías
          </h2>
          <p className="text-stone-500 text-sm mb-8 max-w-md mx-auto leading-relaxed">
            Avisamos cuando añadamos nuevas casas, módulos de formación o mejoras a la herramienta.
            Sin spam, solo lo que importa.
          </p>
          <EmailCapture />
        </div>
      </section>

      {/* ── 9. FAQ ── */}
      <section className="bg-[#F5F3EE]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-stone-900">
              Preguntas frecuentes
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-stone-100 overflow-hidden divide-y divide-stone-100 shadow-sm">
            {FAQS.map((faq) => (
              <details key={faq.pregunta} className="group">
                <summary className="flex items-start justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-stone-50 transition-colors">
                  <span className="font-semibold text-stone-800 text-sm leading-relaxed">{faq.pregunta}</span>
                  <span className="text-stone-400 text-xl font-light shrink-0 mt-0.5 group-open:hidden">+</span>
                  <span className="text-stone-400 text-xl font-light shrink-0 mt-0.5 hidden group-open:block">−</span>
                </summary>
                <div className="px-6 pb-5 text-sm text-stone-500 leading-relaxed border-t border-stone-50">
                  {faq.respuesta}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. CTA FINAL ── */}
      <section
        style={{ background: 'linear-gradient(135deg, #0e0d1f 0%, #12112A 50%, #2A1F3D 100%)' }}
        className="relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-4">Empieza hoy</p>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-6">
            Todo listo para empezar.<br />Sin registro. Sin coste.
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Abre la beta, explora las guías y empieza con los bonos de bienvenida.
            A tu ritmo, con toda la información delante.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/guias"
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg px-10 py-4 rounded-xl transition-colors shadow-lg shadow-emerald-900/40"
            >
              Abrir la app gratis →
            </Link>
            <Link
              href="/guias"
              className="w-full sm:w-auto border border-white/20 hover:bg-white/10 text-white font-semibold text-base px-8 py-4 rounded-xl transition-colors"
            >
              Ver guías
            </Link>
          </div>
          <p className="text-gray-500 text-xs mt-10 max-w-lg mx-auto leading-relaxed">
            Solo para uso educativo. Apuesta con responsabilidad.
          </p>
        </div>
      </section>

      {/* ── 11. FOOTER ── */}
      <footer
        style={{ background: '#0a0918' }}
        className="border-t border-white/5"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Logo + descripción */}
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

            {/* Columnas del footer */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6 text-xs">
              {/* Herramienta */}
              <div>
                <p className="font-semibold text-gray-400 uppercase tracking-wider mb-3 text-[11px]">Herramienta</p>
                <div className="flex flex-col gap-2">
                  <Link href="/guias" className="text-gray-500 hover:text-white transition-colors">Guías</Link>
                  <Link href="/calculadora" className="text-gray-500 hover:text-white transition-colors">Calculadora</Link>
                  <Link href="/casas" className="text-gray-500 hover:text-white transition-colors">Casas</Link>
                  <Link href="/dashboard" className="text-gray-500 hover:text-white transition-colors">Dashboard</Link>
                </div>
              </div>

              {/* Legal */}
              <div>
                <p className="font-semibold text-gray-400 uppercase tracking-wider mb-3 text-[11px]">Legal</p>
                <div className="flex flex-col gap-2">
                  <Link href="/legal/aviso" className="text-gray-500 hover:text-white transition-colors">Aviso legal</Link>
                  <Link href="/legal/privacidad" className="text-gray-500 hover:text-white transition-colors">Privacidad</Link>
                  <Link href="/legal/cookies" className="text-gray-500 hover:text-white transition-colors">Cookies</Link>
                </div>
              </div>

              {/* Contacto */}
              <div>
                <p className="font-semibold text-gray-400 uppercase tracking-wider mb-3 text-[11px]">Contacto</p>
                <div className="flex flex-col gap-2">
                  <a href="https://t.me/Elte13" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                    Telegram
                  </a>
                  <a href="https://www.instagram.com/iapredicthub/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                    Instagram
                  </a>
                </div>
              </div>

              {/* Confianza */}
              <div>
                <p className="font-semibold text-gray-400 uppercase tracking-wider mb-3 text-[11px]">Confianza</p>
                <div className="flex flex-col gap-2 text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <span className="text-sm">🔞</span> Mayores de 18
                  </span>
                  <span>Juego responsable</span>
                  <span>Uso educativo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Separador + bottom */}
          <div className="border-t border-white/5 pt-6">
            <p className="text-center text-[11px] text-gray-600 leading-relaxed mb-2">
              Algunos enlaces pueden ser de afiliado. Esto no cambia el precio para el usuario.
            </p>
            <p className="text-center text-[11px] text-gray-600 leading-relaxed">
              © 2026 IAPredictHub. Todos los derechos reservados.
              <span className="mx-2 text-gray-700">·</span>
              Solo para uso educativo. Apuesta con responsabilidad.
            </p>
          </div>
        </div>
      </footer>

      <TelegramButton />
    </div>
  )
}
