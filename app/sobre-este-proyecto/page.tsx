import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre este proyecto | IAPredictHub',
  description:
    'Conoce el enfoque de IAPredictHub: una herramienta independiente para empezar con bonos de bienvenida con más orden, foco en España y soporte adicional para LATAM.',
}

const VALORES = [
  {
    titulo: 'Orden antes que ruido',
    texto:
      'La prioridad es ayudarte a entender qué toca hacer, en qué orden y con qué herramienta, sin mezclar guías, cálculo y seguimiento en sitios distintos.',
  },
  {
    titulo: 'Prudencia en la ejecución',
    texto:
      'El proyecto no elimina el riesgo ni promete resultados automáticos. Su papel es reducir errores evitables y aportar una ruta más clara para empezar.',
  },
  {
    titulo: 'Independencia y claridad',
    texto:
      'El contenido se presenta con un tono directo, educativo y transparente, sin exagerar beneficios ni ocultar que el usuario debe revisar cada paso con criterio.',
  },
]

export default function SobreEsteProyectoPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#080B16_0%,#12112A_46%,#F6F3FF_46%,#FFFFFF_100%)] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-200/40 to-transparent" />
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <nav className="mb-12 flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="IAPredictHub" className="h-8 w-8 rounded-full object-cover" />
              <span className="text-sm font-bold tracking-tight text-white">IAPredictHub</span>
            </Link>
            <Link
              href="/bienvenida"
              className="rounded-lg border border-violet-200/35 bg-violet-500 px-4 py-2 text-xs font-bold text-white shadow-[0_14px_34px_rgba(124,58,237,0.28)] transition-colors hover:bg-violet-400 sm:text-sm"
            >
              Entrar en la app
            </Link>
          </nav>

          <header className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-violet-300">Sobre este proyecto</p>
            <h1 className="font-playfair text-3xl font-bold leading-tight text-white sm:text-5xl">
              Una forma más clara de empezar con bonos de bienvenida.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              IAPredictHub es un proyecto independiente desarrollado en España para ordenar calculadora, guías,
              seguimiento y ruta de entrada en un mismo lugar.
            </p>
          </header>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#12112A_0%,#1C1738_100%)]">
        <div className="mx-auto grid max-w-5xl gap-4 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-3 lg:px-8">
          <article className="rounded-lg border border-violet-200/14 bg-white/[0.055] p-6 shadow-[0_22px_58px_rgba(0,0,0,0.24)] ring-1 ring-white/[0.035] backdrop-blur-sm">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-violet-300">Qué es</p>
            <h2 className="mb-3 font-playfair text-2xl font-bold text-white">Una herramienta de apoyo</h2>
            <p className="text-sm leading-relaxed text-slate-300">
              La app reúne una ruta guiada, calculadora, casas, checklist, seguimiento y guías para que el primer
              recorrido sea más fácil de entender y mantener.
            </p>
          </article>

          <article className="rounded-lg border border-violet-200/14 bg-white/[0.055] p-6 shadow-[0_22px_58px_rgba(0,0,0,0.24)] ring-1 ring-white/[0.035] backdrop-blur-sm">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-violet-300">Por qué existe</p>
            <h2 className="mb-3 font-playfair text-2xl font-bold text-white">Menos improvisación</h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Nace de una necesidad sencilla: evitar tener bonos, PDFs, calculadoras y notas abiertas por separado,
              especialmente cuando todavía se está aprendiendo el método.
            </p>
          </article>

          <article className="rounded-lg border border-violet-200/14 bg-white/[0.055] p-6 shadow-[0_22px_58px_rgba(0,0,0,0.24)] ring-1 ring-white/[0.035] backdrop-blur-sm">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-violet-300">Mercado</p>
            <h2 className="mb-3 font-playfair text-2xl font-bold text-white">España primero</h2>
            <p className="text-sm leading-relaxed text-slate-300">
              El foco principal está en España. Parte del aprendizaje, la calculadora y la organización del flujo
              también pueden resultar útiles para usuarios de LATAM.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#F6F3FF_0%,#FFFFFF_100%)] text-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-9 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-violet-600">Valores</p>
            <h2 className="font-playfair text-2xl font-bold sm:text-3xl">El criterio que guía el proyecto</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              IAPredictHub está pensado como una capa de orden, no como una promesa. La utilidad está en entender
              mejor el proceso y ejecutarlo con más calma.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {VALORES.map((valor) => (
              <article
                key={valor.titulo}
                className="relative overflow-hidden rounded-lg border border-violet-200/70 bg-white/85 p-6 shadow-[0_18px_48px_rgba(46,16,101,0.09)] ring-1 ring-white/80"
              >
                <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/60 to-transparent" />
                <h3 className="mb-3 text-sm font-semibold text-slate-900">{valor.titulo}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{valor.texto}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-lg border border-violet-200/70 bg-slate-950 p-7 text-center shadow-[0_22px_64px_rgba(15,23,42,0.24)] sm:p-9">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-violet-300">Siguiente paso</p>
            <h2 className="font-playfair text-2xl font-bold text-white sm:text-3xl">Empieza por una ruta sencilla</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
              Si estás valorando el método, lo más razonable es empezar por la bienvenida o leer primero las guías
              base antes de tocar promociones.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/bienvenida"
                className="rounded-lg border border-violet-200/35 bg-violet-500 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-violet-400"
              >
                Ir a bienvenida
              </Link>
              <Link
                href="/guias"
                className="rounded-lg border border-white/14 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]"
              >
                Ver guías
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
