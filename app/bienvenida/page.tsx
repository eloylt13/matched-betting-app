import type { Metadata } from 'next'
import BienvenidaClient from './BienvenidaClient'

export const metadata: Metadata = {
  title: 'Bienvenido a IAPredictHub | Matched Betting en España',
  description: 'Empieza con una ruta clara: guía, Betfair Exchange, primera casa de apuestas y calculadora. Matched betting paso a paso para el mercado español.',
}

export default function BienvenidaPage() {
  return (
    <div className="min-h-[70vh] px-4 py-10 sm:py-14">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            Beta gratuita
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-stone-800 tracking-tight mb-4">
            Bienvenido a IAPredictHub
          </h1>

          <p className="text-sm sm:text-base text-stone-500 leading-relaxed max-w-2xl mx-auto">
            Entra con una ruta clara para empezar: guía, Betfair Exchange, primera casa y calculadora.
            Si prefieres ir directo, también puedes saltar al dashboard.
          </p>
        </div>

        <BienvenidaClient />
      </div>
    </div>
  )
}
