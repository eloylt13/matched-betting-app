import type { Metadata } from 'next'
import Link from 'next/link'
import StickyMobileCTA from '@/components/StickyMobileCTA'

const introGuideHref = '/guias/primeros-pasos/introduccion-matched-betting'
const betfairGuideHref = '/guias/primeros-pasos/betfair-exchange'

const importantPoints = [
  'IAPredictHub no te cobra por usar esta ruta, las guías ni la calculadora.',
  'No necesitas crear una cuenta en IAPredictHub para empezar.',
  'Sí tendrás que registrarte en Versus para activar el bono de bienvenida.',
  'Para empezar puedes necesitar aproximadamente 100-120€ disponibles entre apuesta y cobertura.',
  'El objetivo es cubrir apuestas, no apostar por intuición ni acertar pronósticos.',
  'Si no sigues bien los pasos, si cambian las cuotas o si introduces mal los datos, puedes perder dinero.',
]

const routeSteps = [
  {
    step: '1',
    title: 'Aprende la base',
    text: 'Primero entiende qué es una apuesta cualificante, una freebet y una cobertura.',
    linkLabel: 'Leer guía inicial',
    href: introGuideHref,
  },
  {
    step: '2',
    title: 'Prepara Betfair Exchange',
    text: 'Lo usarás para cubrir la apuesta y reducir el riesgo de depender del resultado.',
    linkLabel: 'Ver guía de Betfair',
    href: betfairGuideHref,
  },
  {
    step: '3',
    title: 'Activa el bono de Versus',
    text: 'Versus es la primera casa recomendada para empezar por sencillez y claridad del proceso.',
    linkLabel: 'Ver bono guiado',
    href: '/casas/versus',
  },
  {
    step: '4',
    title: 'Calcula antes de apostar',
    text: 'Antes de ejecutar, usa la calculadora para estimar stake, cobertura y beneficio.',
    linkLabel: 'Abrir calculadora',
    href: '/calculadora',
  },
]

const versusFacts = [
  ['Casa', 'Versus'],
  ['Dificultad', 'Baja'],
  ['Capital orientativo', '100-120€'],
  ['Beneficio potencial estimado', 'Hasta ~125€'],
  ['Tiempo estimado', '30-45 min + espera de freebet'],
  ['Recomendación', 'Empezar aquí antes de mirar otras casas'],
]

const transparencyPoints = [
  'Algunos enlaces de esta página son de afiliado.',
  'Tú no pagas más por usar esos enlaces.',
  'IAPredictHub puede recibir una comisión si te registras desde la web.',
  'La web tiene finalidad educativa y está dirigida a mayores de 18 años.',
  'Juega de forma responsable. No se garantiza ningún beneficio.',
]

const faqs = [
  {
    question: '¿De verdad IAPredictHub es gratis?',
    answer:
      'Sí. Puedes leer la ruta, consultar guías y usar la calculadora sin pagar y sin crear una cuenta en IAPredictHub.',
  },
  {
    question: '¿Cuánto dinero necesito para empezar?',
    answer:
      'Como referencia, para esta primera ruta conviene tener aproximadamente 100-120€ disponibles para cubrir depósito, apuesta y cobertura.',
  },
  {
    question: '¿Puedo perder dinero?',
    answer:
      'Sí. El método reduce la dependencia del resultado, pero un error al seguir los pasos, una cuota que cambia o un dato mal introducido puede generar pérdidas.',
  },
  {
    question: '¿Por qué empezáis por Versus?',
    answer:
      'Porque es una primera casa sencilla de explicar y ejecutar: el proceso es claro, el capital orientativo es razonable y encaja bien con una ruta guiada.',
  },
  {
    question: '¿Tengo que saber de apuestas?',
    answer:
      'No necesitas experiencia previa, pero sí debes leer la base antes de ejecutar. La prioridad es entender apuesta cualificante, freebet y cobertura.',
  },
  {
    question: '¿Esto es lo mismo que pronosticar partidos?',
    answer:
      'No. No se trata de acertar quién gana. La idea es usar una apuesta y una cobertura para convertir parte del bono en beneficio estimado.',
  },
]

export const metadata: Metadata = {
  title: 'Primer bono guiado | IAPredictHub',
  description:
    'Ruta gratuita para empezar con tu primer bono guiado en IAPredictHub: Versus, Betfair Exchange, calculadora y advertencias claras antes de apostar.',
  alternates: {
    canonical: 'https://iapredicthub.es/bienvenida',
  },
  openGraph: {
    title: 'Primer bono guiado | IAPredictHub',
    description:
      'Empieza paso a paso con Versus, guías gratuitas, calculadora y una explicación honesta de capital, registro y riesgos.',
    url: 'https://iapredicthub.es/bienvenida',
    images: [
      {
        url: 'https://iapredicthub.es/logo.png',
        width: 512,
        height: 512,
        alt: 'IAPredictHub - Primer bono guiado',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Primer bono guiado | IAPredictHub',
    description:
      'Ruta gratuita para convertir un bono de bienvenida con guía, calculadora y cobertura. Sin registro en IAPredictHub.',
    images: ['https://iapredicthub.es/logo.png'],
  },
}

export default function BienvenidaPage() {
  return (
    <main
      className="min-h-screen overflow-hidden bg-[#0e0d1f] px-4 pb-40 pt-10 text-white sm:px-6 sm:py-14 lg:px-8"
      style={{
        background:
          'linear-gradient(160deg, #0e0d1f 0%, #12112A 42%, #18213a 72%, #101726 100%)',
      }}
    >
      <div className="pointer-events-none fixed inset-0 opacity-35">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 sm:gap-16">
        <section className="grid gap-8 pt-2 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-cyan-200/25 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold text-cyan-100 shadow-[0_14px_40px_rgba(34,211,238,0.12)] backdrop-blur-md">
              Ruta gratuita · Sin registro en IAPredictHub
            </div>

            <h1 className="font-playfair text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
              Tu primer bono guiado, paso a paso
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              IAPredictHub te ayuda a convertir un bono de bienvenida en beneficio real usando
              guía, calculadora y cobertura. La herramienta es gratuita y no requiere registro,
              pero sí necesitarás crear cuenta en la casa de apuestas y usar capital inicial.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/casas/versus"
                className="inline-flex items-center justify-center rounded-lg border border-cyan-100/40 bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_18px_46px_rgba(34,211,238,0.24)] transition hover:-translate-y-0.5 hover:bg-cyan-200"
              >
                Empezar con Versus
              </Link>
              <Link
                href={introGuideHref}
                className="inline-flex items-center justify-center rounded-lg border border-white/14 bg-white/[0.055] px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-white/28 hover:bg-white/[0.09]"
              >
                Entender primero el método
              </Link>
            </div>
          </div>

          <div className="border-l border-white/10 pl-0 lg:pl-8">
            <div className="rounded-lg border border-white/12 bg-white/[0.055] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                Primera ruta
              </p>
              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-sm text-slate-400">Casa recomendada</p>
                  <p className="text-3xl font-bold text-white">Versus</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg border border-white/10 bg-slate-950/30 p-4">
                    <p className="text-xs text-slate-400">Capital</p>
                    <p className="mt-1 text-lg font-bold text-white">100-120€</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-slate-950/30 p-4">
                    <p className="text-xs text-slate-400">Tiempo</p>
                    <p className="mt-1 text-lg font-bold text-white">30-45 min</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">
                  Una ruta corta para entender qué haces antes de registrarte, depositar o cubrir
                  una apuesta.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 py-8 sm:py-10">
          <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
                Antes de empezar
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Esto es importante
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                La confianza empieza con condiciones claras. Lee esto antes de abrir cualquier
                cuenta o introducir dinero.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {importantPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-lg border border-white/10 bg-white/[0.045] p-4 text-sm leading-relaxed text-slate-200"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Ruta guiada
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                La ruta en 4 pasos
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300">
              Sigue el orden para entender la lógica, preparar la cobertura y calcular antes de
              confirmar una apuesta.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {routeSteps.map((item) => (
              <article
                key={item.title}
                className="flex min-h-[238px] flex-col justify-between rounded-lg border border-white/10 bg-white/[0.05] p-5 shadow-[0_20px_54px_rgba(0,0,0,0.16)] backdrop-blur-md"
              >
                <div>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cyan-200/25 bg-cyan-200/10 text-sm font-bold text-cyan-100">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.text}</p>
                </div>
                <Link
                  href={item.href}
                  className="mt-5 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
                >
                  {item.linkLabel}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 border-y border-white/10 py-8 sm:py-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
              Primera casa recomendada
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Versus, antes de mirar otras casas
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              La recomendación inicial es empezar aquí por sencillez y claridad del proceso. Revisa
              la guía completa, calcula la cobertura y ejecuta solo cuando tengas todos los datos
              delante.
            </p>
            <Link
              href="/casas/versus"
              className="mt-6 inline-flex items-center justify-center rounded-lg border border-emerald-100/35 bg-emerald-300 px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_18px_46px_rgba(16,185,129,0.2)] transition hover:-translate-y-0.5 hover:bg-emerald-200"
            >
              Ver guía completa de Versus
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {versusFacts.map(([label, value]) => (
              <div key={label} className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  {label}
                </p>
                <p className="mt-2 text-base font-bold leading-snug text-white">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Transparencia
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Cómo se sostiene la web
            </h2>
          </div>

          <div className="rounded-lg border border-amber-200/18 bg-amber-200/[0.07] p-5 sm:p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-slate-200">
              {transparencyPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-200" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pb-4">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              FAQ
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Preguntas rápidas antes de empezar
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
                <h3 className="text-base font-bold text-white">{faq.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <StickyMobileCTA href="/casas/versus" label="Empezar con Versus" offset="aboveNav" />
    </main>
  )
}
