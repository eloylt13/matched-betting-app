import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Preguntas frecuentes sobre matched betting | IAPredictHub',
  description:
    'Las dudas más habituales antes de empezar con matched betting: legalidad, riesgo, tiempo, cierres de cuenta y aspectos fiscales.',
  alternates: {
    canonical: 'https://iapredicthub.es/preguntas-frecuentes',
  },
  openGraph: {
    title: 'Preguntas frecuentes sobre matched betting | IAPredictHub',
    description:
      'Las dudas más habituales antes de empezar con matched betting: legalidad, riesgo, tiempo, cierres de cuenta y aspectos fiscales.',
    url: 'https://iapredicthub.es/preguntas-frecuentes',
    images: [
      {
        url: 'https://iapredicthub.es/logo.png',
        width: 512,
        height: 512,
        alt: 'IAPredictHub — Preguntas frecuentes sobre matched betting',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Preguntas frecuentes sobre matched betting | IAPredictHub',
    description:
      'Las dudas más habituales antes de empezar con matched betting: legalidad, riesgo, tiempo, cierres de cuenta y aspectos fiscales.',
    images: ['https://iapredicthub.es/logo.png'],
  },
}

const FAQS = [
  {
    pregunta: '¿El matched betting es legal en España?',
    respuesta:
      'El matched betting consiste en aprovechar promociones y cubrir apuestas para reducir el riesgo. La actividad se apoya en bonos y mercados ofrecidos por operadores autorizados. Aun así, cada usuario debe revisar las condiciones de cada casa y actuar conforme a la normativa aplicable.',
  },
  {
    pregunta: '¿Puedo perder dinero real haciendo esto?',
    respuesta:
      'El matched betting está diseñado para minimizar el riesgo, no eliminarlo. Si sigues los pasos correctamente y usas la calculadora, el riesgo es mínimo: recuperas la mayor parte del depósito incluso perdiendo la apuesta, y desbloqueas el bono para convertirlo en dinero. El mayor riesgo real es el error humano: equivocarse al introducir datos en la calculadora o al hacer la apuesta. Por eso la app te guía paso a paso.',
  },
  {
    pregunta: '¿Las casas pueden limitar o cerrar mi cuenta?',
    respuesta:
      'Sí, puede ocurrir. Algunas casas detectan ciertos patrones de uso de promociones y pueden limitar mercados, reducir importes máximos de apuesta o, en algunos casos, cerrar la cuenta. Esto suele afectar más a usuarios muy activos a largo plazo que a quien solo aprovecha un bono de bienvenida. Antes de registrarte, conviene revisar las condiciones de cada casa para entender mejor cómo funciona cada promoción.',
  },
  {
    pregunta: '¿Cuánto tiempo necesito para empezar?',
    respuesta:
      'Para activar tu primer bono de bienvenida necesitas entre 20 y 40 minutos: registro en la casa, verificación, depósito y la ejecución de los pasos. A medida que ganas práctica, cada bono adicional te lleva menos tiempo. No necesitas hacer matched betting todos los días, puedes ejecutarlos al ritmo que quieras.',
  },
  {
    pregunta: '¿Necesito saber de fútbol, deportes o apuestas?',
    respuesta:
      'No. El matched betting no es apostar a lo que creas que va a pasar. Es cubrir todas las posibilidades para aprovechar el bono. Da igual qué equipo juega o quién gana: la calculadora te dice exactamente qué hacer. Muchos usuarios que hacen matched betting nunca han apostado antes.',
  },
  {
    pregunta: '¿Tengo que declarar las ganancias en Hacienda?',
    respuesta:
      'Las ganancias de juego pueden tener implicaciones fiscales. La situación concreta depende del importe, de tus circunstancias y de la normativa aplicable. Para tu caso, conviene consultarlo con un asesor fiscal. Esta app no ofrece asesoramiento legal ni fiscal.',
  },
]

export default function PreguntasFrecuentesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.pregunta,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.respuesta,
      },
    })),
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#080B16_0%,#131229_42%,#F7F4FF_42%,#FFFFFF_100%)] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-200/40 to-transparent" />
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <nav className="mb-12 flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="IAPredictHub" className="h-8 w-8 rounded-full object-cover" />
              <span className="text-sm font-bold tracking-tight text-white">IAPredictHub</span>
            </Link>
            <Link
              href="/guias"
              className="rounded-lg border border-white/14 bg-white/[0.055] px-4 py-2 text-xs font-semibold text-white shadow-[0_14px_34px_rgba(15,23,42,0.18)] transition-colors hover:bg-white/[0.09] sm:text-sm"
            >
              Ver guías
            </Link>
          </nav>

          <header className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-violet-300">Preguntas frecuentes</p>
            <h1 className="font-playfair text-3xl font-bold leading-tight text-white sm:text-5xl">
              Dudas habituales antes de empezar.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Las dudas más habituales antes de empezar con matched betting.
            </p>
          </header>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#131229_0%,#21183E_100%)]">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="overflow-hidden rounded-lg border border-violet-200/14 bg-white/[0.055] shadow-[0_24px_70px_rgba(0,0,0,0.26)] ring-1 ring-white/[0.035] backdrop-blur-sm">
            {FAQS.map((faq) => (
              <details key={faq.pregunta} className="group border-b border-white/10 last:border-b-0">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-5 transition-colors hover:bg-white/[0.045] group-open:bg-violet-300/[0.08] sm:px-6">
                  <span className="text-sm font-semibold leading-relaxed text-white">{faq.pregunta}</span>
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-violet-200/20 bg-white/[0.05] text-violet-200 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="border-t border-white/10 bg-slate-950/18 px-5 pb-5 pt-4 text-sm leading-relaxed text-slate-300 sm:px-6">
                  {faq.respuesta}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#F7F4FF_0%,#FFFFFF_100%)] text-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <article className="rounded-lg border border-violet-200/70 bg-white/85 p-6 shadow-[0_18px_48px_rgba(46,16,101,0.09)] ring-1 ring-white/80">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-violet-600">Riesgo</p>
              <p className="text-sm leading-relaxed text-slate-500">
                La app ayuda a ordenar el proceso, pero no sustituye revisar condiciones, importes y decisiones.
              </p>
            </article>
            <article className="rounded-lg border border-violet-200/70 bg-white/85 p-6 shadow-[0_18px_48px_rgba(46,16,101,0.09)] ring-1 ring-white/80">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-violet-600">Enfoque</p>
              <p className="text-sm leading-relaxed text-slate-500">
                Está pensada para principiantes que prefieren una ruta clara antes que saltar entre recursos sueltos.
              </p>
            </article>
            <article className="rounded-lg border border-violet-200/70 bg-white/85 p-6 shadow-[0_18px_48px_rgba(46,16,101,0.09)] ring-1 ring-white/80">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-violet-600">Uso</p>
              <p className="text-sm leading-relaxed text-slate-500">
                En esta fase puedes entrar sin registro y comprobar si el flujo encaja contigo.
              </p>
            </article>
          </div>

          <div className="mt-12 rounded-lg border border-violet-200/70 bg-slate-950 p-7 text-center shadow-[0_22px_64px_rgba(15,23,42,0.24)] sm:p-9">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-violet-300">Siguiente paso</p>
            <h2 className="font-playfair text-2xl font-bold text-white sm:text-3xl">Empieza con contexto</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
              Si ya tienes claras las bases, entra en la ruta de bienvenida. Si prefieres ir con más calma, empieza
              por las guías gratuitas.
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
