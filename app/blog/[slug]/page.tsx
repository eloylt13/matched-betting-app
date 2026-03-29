import type { Metadata } from 'next'
import Link from 'next/link'

// ──────────────────────────────────────────────────────────────────────────────
// PLANTILLA DE ARTÍCULO DE BLOG
//
// Uso para cada nuevo artículo:
//   1. Crea una carpeta con el slug en app/blog/[slug]/
//   2. Copia este archivo como page.tsx en esa carpeta
//   3. Rellena: metadata, fecha, título H1, contenido y relacionados
// ──────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Título del artículo | Blog IAPredictHub',
  description: 'Descripción del artículo optimizada para SEO (150-160 caracteres).',
}

// Artículos relacionados — actualizar para cada post
const relacionados: Array<{ slug: string; titulo: string }> = [
  // { slug: 'otro-articulo', titulo: 'Título del artículo relacionado' },
]

export default function ArticuloBlogPage() {
  return (
    <article className="max-w-2xl mx-auto flex flex-col gap-6 pb-8">
      {/* Fecha de publicación */}
      <time dateTime="2026-01-01" className="text-xs text-stone-400">
        1 de enero de 2026
      </time>

      {/* H1 del artículo */}
      <h1 className="text-2xl font-bold text-stone-800 tracking-tight leading-snug">
        Título del artículo
      </h1>

      {/* Contenido del artículo */}
      <div className="flex flex-col gap-4 text-sm text-stone-700 leading-relaxed">

        <h2 className="text-lg font-semibold text-stone-800 mt-2">Sección principal</h2>
        <p>
          Párrafo introductorio de la sección. Explica el concepto principal con claridad.
        </p>

        <h3 className="text-base font-semibold text-stone-800">Subsección</h3>
        <p>
          Contenido de la subsección con más detalle.
        </p>

        <ul className="list-disc list-inside space-y-1 text-stone-600 pl-1">
          <li>Punto clave uno</li>
          <li>Punto clave dos</li>
          <li>Punto clave tres</li>
        </ul>

        <h2 className="text-lg font-semibold text-stone-800 mt-2">Segunda sección</h2>
        <p>
          Más contenido del artículo.
        </p>

      </div>

      {/* Artículos relacionados */}
      {relacionados.length > 0 && (
        <aside className="bg-white rounded-2xl border border-stone-100 p-5 mt-2">
          <h2 className="text-sm font-bold text-stone-800 mb-3">Artículos relacionados</h2>
          <ul className="flex flex-col gap-2">
            {relacionados.map((art) => (
              <li key={art.slug}>
                <Link
                  href={`/blog/${art.slug}`}
                  className="text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors"
                >
                  {art.titulo} →
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}

      {/* Volver al blog */}
      <div className="pt-4 border-t border-stone-100">
        <Link
          href="/blog"
          className="text-sm text-stone-500 hover:text-stone-700 transition-colors"
        >
          ← Volver al blog
        </Link>
      </div>
    </article>
  )
}
