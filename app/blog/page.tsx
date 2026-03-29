import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog de Matched Betting España 2026 | IAPredictHub',
  description:
    'Artículos, guías y consejos sobre matched betting en España. Aprende estrategias, legalidad, casas de apuestas y cómo maximizar bonos de bienvenida.',
}

// Lista de artículos — añadir aquí cuando se publiquen
const articulos: Array<{
  slug: string
  titulo: string
  fecha: string
  descripcion: string
}> = [
  {
    slug: 'que-es-matched-betting-espana',
    titulo: '¿Qué es el Matched Betting y cómo funciona en España?',
    fecha: '29 de marzo de 2026',
    descripcion:
      'Guía completa para principiantes: qué es el matched betting, cómo funciona paso a paso, si es legal en España y cuánto puedes ganar con ejemplos reales.',
  },
]

export default function BlogPage() {
  return (
    <div className="flex flex-col gap-8 max-w-3xl mx-auto">
      <header>
        <h1 className="text-2xl font-bold text-stone-800 tracking-tight">
          ✍️ Blog de Matched Betting
        </h1>
        <p className="text-sm text-stone-500 mt-1">
          Artículos y guías para entender, empezar y mejorar tu matched betting en España
        </p>
      </header>

      {articulos.length === 0 ? (
        <div className="bg-white rounded-2xl border border-stone-100 p-10 text-center">
          <span className="text-4xl">📝</span>
          <p className="mt-4 text-stone-700 font-semibold">Próximamente más artículos</p>
          <p className="text-sm text-stone-400 mt-2 max-w-sm mx-auto">
            Estamos preparando contenido sobre estrategias, legalidad y casas de apuestas en España.
          </p>
          <Link
            href="/guias"
            className="inline-block mt-6 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors"
          >
            Mientras tanto, visita nuestras guías →
          </Link>
        </div>
      ) : (
        <ul className="flex flex-col gap-4">
          {articulos.map((art) => (
            <li
              key={art.slug}
              className="bg-white rounded-2xl border border-stone-100 hover:border-purple-200 hover:shadow-lg transition-all p-5"
            >
              <time className="text-xs text-stone-400">{art.fecha}</time>
              <h2 className="text-base font-semibold text-stone-800 mt-1 mb-1">{art.titulo}</h2>
              <p className="text-sm text-stone-500 mb-3">{art.descripcion}</p>
              <Link
                href={`/blog/${art.slug}`}
                className="text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors"
              >
                Leer más →
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
