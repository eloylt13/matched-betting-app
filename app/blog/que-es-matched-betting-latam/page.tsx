import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '¿Qué es el Matched Betting en LATAM? Guía 2026 | IAPredictHub',
  description: 'Aprende qué es el matched betting, cómo funciona en América Latina, en qué países es viable y cuánto puedes ganar. Guía completa para principiantes.',
}

export default function QueEsMatchedBettingLatamPage() {
  return (
    <article className="max-w-2xl mx-auto flex flex-col gap-6 pb-8">
      <time dateTime="2026-04-08" className="text-xs text-stone-400">
        8 de abril de 2026
      </time>
      <h1 className="text-2xl font-bold text-stone-800 tracking-tight leading-snug">
        ¿Qué es el Matched Betting y cómo funciona en LATAM?
      </h1>
      <p className="text-stone-600 leading-relaxed">
        El matched betting es una técnica matemática que aprovecha los bonos de bienvenida de las casas de apuestas para obtener un beneficio con un riesgo controlado. No es apuesta: es aritmética.
      </p>
      <h2 className="text-lg font-bold text-stone-800">¿Funciona en América Latina?</h2>
      <p className="text-stone-600 leading-relaxed">
        Sí. Cada vez más casas internacionales operan en LATAM con bonos de bienvenida comparables a los europeos. México, Colombia, Chile, Perú y Ecuador concentran la mayor oferta disponible hoy.
      </p>
      <h2 className="text-lg font-bold text-stone-800">¿Cómo funciona el método?</h2>
      <ol className="flex flex-col gap-3 text-stone-600 text-sm leading-relaxed list-decimal list-inside">
        <li>Elige una casa de apuestas con bono de bienvenida.</li>
        <li>Haz la apuesta cualificante con dinero real.</li>
        <li>Cubre esa apuesta en Betfair Exchange para neutralizar el riesgo.</li>
        <li>Recibe el bono (freebet o rollover) y repite el proceso.</li>
      </ol>
      <h2 className="text-lg font-bold text-stone-800">¿Cuánto se puede ganar?</h2>
      <p className="text-stone-600 leading-relaxed">
        Depende del país y las casas disponibles. En LATAM, los bonos suelen estar entre 10 y 300 USD por casa. Con una ejecución ordenada y sin errores, el potencial agregado puede superar los 500 USD.
      </p>
      <h2 className="text-lg font-bold text-stone-800">¿Por dónde empezar?</h2>
      <p className="text-stone-600 leading-relaxed">
        La forma más sencilla de empezar es por Betfair Sportsbook, disponible en 15 países LATAM. Apuesta 10 USD y recibe 10 USD en freebet con el código ZRW10M.
      </p>
      <div className="flex flex-wrap gap-3 mt-2">
        <Link href="/casas" className="bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors">
          Ver casas LATAM →
        </Link>
        <Link href="/calculadora" className="bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm font-semibold px-4 py-2 rounded-xl transition-colors">
          Abrir calculadora
        </Link>
      </div>
    </article>
  )
}
