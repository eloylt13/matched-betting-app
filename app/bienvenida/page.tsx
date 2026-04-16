import type { Metadata } from 'next'
import BienvenidaClient from './BienvenidaClient'

export const metadata: Metadata = {
  title: 'Bienvenido a IAPredictHub | Matched Betting España y LATAM',
  description:
    'Empieza con una ruta clara: guía, Betfair Exchange, primera casa y calculadora. Matched betting paso a paso para España y LATAM.',
}

export default function BienvenidaPage() {
  return (
    <main
      className="relative isolate min-h-screen overflow-hidden px-4 py-10 text-white sm:px-6 sm:py-14 lg:px-8"
      style={{
        background: 'linear-gradient(160deg, #0e0d1f 0%, #12112A 40%, #1e1840 70%, #2A1F3D 100%)',
      }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-200/35 to-transparent" />
        <div className="absolute -top-28 left-1/2 h-72 w-[38rem] -translate-x-1/2 rounded-full bg-violet-500/14 blur-3xl" />
        <div className="absolute left-[8%] top-28 h-44 w-44 rounded-full bg-fuchsia-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-[6%] h-56 w-56 rounded-full bg-indigo-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_34%)]" />
      </div>

      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 sm:gap-10">
        <header className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200/25 bg-white/[0.055] px-4 py-1.5 text-xs font-semibold text-violet-100 shadow-[0_0_32px_rgba(139,92,246,0.18)] backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_18px_rgba(196,181,253,0.85)]" />
            Beta gratuita · Sin registro
          </div>

          <h1 className="font-playfair text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Tu ruta de entrada a IAPredictHub
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Empieza con una ruta clara para ordenar guía, Betfair Exchange, primera casa y calculadora.
            Si ya sabes lo que haces, puedes entrar directo al dashboard.
          </p>
        </header>

        <BienvenidaClient />
      </div>
    </main>
  )
}
