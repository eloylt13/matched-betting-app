import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Beneficios recurrentes | IAPredictHub',
  description:
    'Aprende a evaluar promociones recurrentes de casas de apuestas con enfoque matched betting: freebets, reembolsos, cuotas mejoradas y cálculo de cobertura.',
  alternates: {
    canonical: 'https://iapredicthub.es/beneficios-recurrentes',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'IAPredictHub',
    title: 'Beneficios recurrentes | IAPredictHub',
    description:
      'Aprende a evaluar promociones recurrentes de casas de apuestas con enfoque matched betting: freebets, reembolsos, cuotas mejoradas y cálculo de cobertura.',
    url: 'https://iapredicthub.es/beneficios-recurrentes',
    images: [
      {
        url: 'https://iapredicthub.es/logo.png',
        width: 512,
        height: 512,
        alt: 'IAPredictHub - Beneficios recurrentes',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Beneficios recurrentes | IAPredictHub',
    description:
      'Aprende a evaluar promociones recurrentes de casas de apuestas con enfoque matched betting: freebets, reembolsos, cuotas mejoradas y cálculo de cobertura.',
    images: ['https://iapredicthub.es/logo.png'],
  },
}

const tipos = [
  'freebets',
  'reembolsos',
  'bonos de depósito',
  'cuotas mejoradas',
  'promociones de eventos concretos',
]

const criterios = [
  'condiciones oficiales',
  'cuota mínima',
  'rollover',
  'plazo',
  'mercado válido',
  'posibilidad de cobertura',
  'cálculo antes de ejecutar',
]

export default function BeneficiosRecurrentesPage() {
  return (
    <main className="bg-[#F5F3EE] text-stone-800">
      <section className="relative overflow-hidden bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent" />
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
              Beneficios recurrentes
            </p>
            <h1 className="mt-5 font-playfair text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Beneficios recurrentes con enfoque matched betting
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Después del primer bono, algunas casas lanzan promociones recurrentes: freebets, reembolsos,
              cuotas mejoradas o bonos puntuales. La clave no es acertar partidos, sino revisar condiciones,
              cubrir escenarios y calcular si la promoción compensa.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://t.me/beneficiosrecurrentes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-emerald-300/45 bg-emerald-300/12 px-5 py-3 text-sm font-bold text-emerald-50 shadow-[0_0_28px_rgba(52,211,153,0.16)] transition-all hover:border-emerald-200/70 hover:bg-emerald-300/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
              >
                Ver canal de alertas
              </a>
              <Link
                href="/blog/que-son-los-bonos-recurrentes"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-100 transition-all hover:border-white/25 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                Leer guía completa
              </Link>
              <Link
                href="/calculadora"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-100 transition-all hover:border-white/25 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                Abrir calculadora
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="font-playfair text-2xl font-bold text-stone-900">Qué son</h2>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              Son promociones para usuarios que ya tienen cuenta en una casa. Pueden aparecer tras completar
              el primer bono, durante campañas concretas o como ofertas puntuales asociadas a actividad previa.
            </p>
          </article>

          <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="font-playfair text-2xl font-bold text-stone-900">Qué tipos aparecen</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-stone-600">
              {tipos.map((tipo) => (
                <li key={tipo} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  <span>{tipo}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="font-playfair text-2xl font-bold text-stone-900">Canal de alertas</h2>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              El canal agrupa avisos educativos para revisar oportunidades con calma, leer los términos de cada
              casa y decidir solo cuando los números encajan.
            </p>
            <a
              href="https://t.me/beneficiosrecurrentes"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-2xl border border-emerald-600 bg-emerald-600 px-4 py-2 text-sm font-bold text-white transition-all hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60"
            >
              Ver canal de alertas
            </a>
          </article>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Análisis previo
              </p>
              <h2 className="mt-3 font-playfair text-3xl font-bold text-stone-950">Cómo las analizamos</h2>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                El enfoque es operativo: antes de ejecutar nada, revisamos requisitos, límites y escenarios. Si
                una promoción no permite una cobertura razonable o el cálculo no compensa, se descarta.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {criterios.map((criterio) => (
                <div key={criterio} className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3">
                  <p className="text-sm font-semibold text-stone-800">{criterio}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-stone-200 pt-6 sm:flex-row">
            <Link
              href="/blog/que-son-los-bonos-recurrentes"
              className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-700 transition-colors hover:bg-stone-50"
            >
              Leer guía completa
            </Link>
            <Link
              href="/calculadora"
              className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-slate-900 bg-slate-900 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-800"
            >
              Abrir calculadora
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
