import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mejores bonos de bienvenida LATAM 2026 | IAPredictHub',
  description: 'Comparativa de casas disponibles en México, Colombia, Chile, Perú, Ecuador y más con tipo de bono, requisitos y ganancia potencial en USD.',
}

export default function MejoresBonosLatamPage() {
  return (
    <article className="max-w-2xl mx-auto flex flex-col gap-6 pb-8">
      <time dateTime="2026-04-08" className="text-xs text-stone-400">
        8 de abril de 2026
      </time>
      <h1 className="text-2xl font-bold text-stone-800 tracking-tight leading-snug">
        Mejores bonos de bienvenida en casas de apuestas LATAM (2026)
      </h1>
      <p className="text-stone-600 leading-relaxed">
        El mercado LATAM tiene cada vez más casas con bonos de bienvenida aprovechables. Esta comparativa recoge las opciones más claras disponibles hoy en México, Colombia, Chile, Perú y Ecuador.
      </p>
      <h2 className="text-lg font-bold text-stone-800">Casas regionales (varios países)</h2>
      <div className="flex flex-col gap-3">
        {[
          { nombre: 'Betfair Sportsbook', bono: '10 USD → 10 USD freebet', tipo: 'Apuesta & Recibe', paises: '15 países LATAM', dificultad: 'Fácil' },
          { nombre: 'LSBet', bono: '100% hasta ~120 USD', tipo: 'Rollover', paises: 'Regional', dificultad: 'Alta' },
          { nombre: 'ReloadBet', bono: '100% hasta ~120 USD', tipo: 'Rollover', paises: 'Regional', dificultad: 'Alta' },
        ].map((casa) => (
          <div key={casa.nombre} className="bg-white rounded-xl border border-stone-100 p-4">
            <div className="flex items-center justify-between mb-1">
              <p className="font-semibold text-stone-800 text-sm">{casa.nombre}</p>
              <span className="text-xs text-stone-400">{casa.paises}</span>
            </div>
            <p className="text-sm text-emerald-600 font-medium">{casa.bono}</p>
            <p className="text-xs text-stone-400 mt-1">{casa.tipo} · Dificultad: {casa.dificultad}</p>
          </div>
        ))}
      </div>
      <h2 className="text-lg font-bold text-stone-800">Por país</h2>
      <div className="flex flex-col gap-3">
        {[
          { pais: '🇲🇽 México', casas: 'Betano, Novibet, Sportium, Codere' },
          { pais: '🇨🇴 Colombia', casas: 'Wplay, RushBet, Sportium' },
          { pais: '🇨🇱 Chile', casas: 'Betano, Betsson, Novibet, Betway' },
          { pais: '🇵🇪 Perú', casas: 'Betano, Betsson' },
          { pais: '🇪🇨 Ecuador', casas: 'Betano, Novibet, Betway' },
        ].map((item) => (
          <div key={item.pais} className="bg-stone-50 rounded-xl border border-stone-100 p-4">
            <p className="font-semibold text-stone-800 text-sm mb-1">{item.pais}</p>
            <p className="text-xs text-stone-500">{item.casas}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 mt-2">
        <Link href="/casas" className="bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors">
          Ver todas las casas →
        </Link>
        <Link href="/calculadora" className="bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm font-semibold px-4 py-2 rounded-xl transition-colors">
          Abrir calculadora
        </Link>
      </div>
    </article>
  )
}
