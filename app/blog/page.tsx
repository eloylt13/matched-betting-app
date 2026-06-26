import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Guías de matched betting y bonos en España | IAPredictHub',
  description:
    'Aprende matched betting con guías sobre bonos de bienvenida, freebets, beneficios recurrentes, casas de apuestas, reembolsos, bonos sin rollover y calculadora de cobertura.',
}

type SeccionBlog = 'espana' | 'latam'

const seccionesBlog: Array<{ key: SeccionBlog; label: string; href: string }> = [
  { key: 'espana', label: 'España', href: '/blog?seccion=espana' },
  { key: 'latam', label: 'LATAM', href: '/blog?seccion=latam' },
]

function getSeccionActiva(seccion?: string | string[]): SeccionBlog {
  const value = Array.isArray(seccion) ? seccion[0] : seccion
  return value === 'latam' ? 'latam' : 'espana'
}

// Lista de artículos — añadir aquí cuando se publiquen
const articulos: Array<{
  slug: string
  titulo: string
  fecha: string
  descripcion: string
  secciones: SeccionBlog[]
  categoria?: string
  image?: string
  destacado?: boolean
}> = [
  {
    slug: 'mejores-bonos-bienvenida-apuestas-espana',
    titulo: 'Mejores bonos de bienvenida en casas de apuestas en España (2026)',
    fecha: '29 de marzo de 2026',
    descripcion:
      'Comparativa actualizada de más de 20 casas españolas con tipo de bono, requisitos, dificultad y ganancia potencial. Descubre por dónde empezar.',
    secciones: ['espana'],
  },
  {
    slug: 'que-es-matched-betting-espana',
    titulo: '¿Qué es el Matched Betting y cómo funciona en España?',
    fecha: '29 de marzo de 2026',
    descripcion:
      'Guía completa para principiantes: qué es el matched betting, cómo funciona paso a paso, si es legal en España y cuánto puedes ganar con ejemplos reales.',
    secciones: ['espana'],
  },
  {
    slug: 'que-son-los-bonos-recurrentes',
    titulo: '¿Qué son los bonos recurrentes?',
    fecha: '12 de junio de 2026',
    descripcion:
      'Qué son los bonos recurrentes, cómo funcionan y cómo aprovechar promociones después de los bonos de bienvenida sin depender de acertar partidos.',
    secciones: ['espana', 'latam'],
  },
  {
    slug: 'que-es-una-freebet',
    titulo: '¿Qué es una freebet y cómo convertirla en dinero real?',
    fecha: '15 de abril de 2026',
    descripcion:
      'Aprende qué es una freebet, los tipos más comunes (stake devuelto y stake no devuelto) y cómo convertirla en dinero real con la técnica del matched betting paso a paso.',
    secciones: ['espana', 'latam'],
  },
  {
    slug: 'mejores-bonos-apuesta-y-recibe-espana',
    titulo: 'Mejores bonos apuesta y recibe en España (2026): freebets garantizadas comparadas',
    fecha: '15 de abril de 2026',
    descripcion:
      'Comparativa de los mejores bonos apuesta y recibe (bet and get) en casas españolas. Freebets garantizadas, análisis por casa, qué revisar antes de activarlos y errores a evitar.',
    secciones: ['espana'],
  },
  {
    slug: 'bonos-sin-rollover-espana',
    titulo: 'Bonos sin rollover en España (2026): qué son, cuáles encontrar y cómo aprovecharlos',
    fecha: '15 de abril de 2026',
    descripcion:
      'Guía completa sobre bonos sin rollover en casas de apuestas españolas. Qué significa sin rollover, diferencias con otros tipos de bono, qué casas los ofrecen y qué revisar antes de activarlos.',
    secciones: ['espana'],
  },
  {
    slug: 'casas-apuestas-reembolso-espana',
    titulo: 'Casas de apuestas con reembolso en España (2026): comparativa y guía práctica',
    fecha: '15 de abril de 2026',
    descripcion:
      'Comparativa actualizada de las mejores casas de apuestas con bono de reembolso en España. Cómo funcionan los reembolsos, cuándo convienen más que una freebet y qué mirar antes de activarlas.',
    secciones: ['espana'],
  },
  {
    slug: 'es-legal-matched-betting-espana',
    titulo: '¿Es legal el matched betting en España?',
    fecha: '15 de abril de 2026',
    descripcion:
      'Analizamos si el matched betting es legal en España: qué dice la regulación vigente, qué papel juegan las casas reguladas y Betfair Exchange, y cuáles son los riesgos reales.',
    secciones: ['espana'],
  },
  {
    slug: 'mejores-bonos-bienvenida-latam',
    titulo: 'Mejores bonos de bienvenida en casas de apuestas LATAM (2026)',
    fecha: '8 de abril de 2026',
    descripcion:
      'Comparativa de casas disponibles en México, Colombia, Chile, Perú, Ecuador y más países con tipo de bono, requisitos y ganancia potencial en USD.',
    secciones: ['latam'],
  },
  {
    slug: 'que-es-matched-betting-latam',
    titulo: '¿Qué es el Matched Betting y cómo funciona en LATAM?',
    fecha: '8 de abril de 2026',
    descripcion:
      'Guía completa para principiantes en América Latina: qué es el matched betting, cómo funciona, en qué países es viable y cuánto puedes ganar con los bonos de bienvenida disponibles.',
    secciones: ['latam'],
  },
  {
    slug: 'matched-betting-mexico',
    titulo: 'Matched betting en México: cómo aprovechar bonos de apuestas con calculadora',
    fecha: '26 de junio de 2026',
    descripcion:
      'Guía para revisar bonos de apuestas en México, calcular coberturas y avanzar con control antes de activar una promoción.',
    secciones: ['latam'],
  },
  {
    slug: 'mundial-2026',
    titulo: 'Mundial 2026: grupos, favoritos y selecciones actualizadas',
    fecha: '27 de abril de 2026',
    descripcion:
      'Guía actualizada del Mundial 2026: formato, los 12 grupos completos, debutantes, favoritos según las cuotas y qué vigilar antes del 11 de junio.',
    secciones: ['espana', 'latam'],
    destacado: true,
  },
  {
    slug: 'prediccion-campeon-mundial-2026',
    titulo: 'Predicción campeón Mundial 2026: por qué creo que Portugal puede ganar',
    fecha: '1 de mayo de 2026',
    descripcion:
      'Mi predicción personal para el campeón del Mundial 2026 y los motivos por los que Portugal puede levantar el título.',
    secciones: ['espana', 'latam'],
    categoria: 'Mundial 2026',
    image: '/blog/prediccion-campeon-mundial-2026/portugal-mundial-2026.jpg',
    destacado: true,
  },
  {
    slug: 'prediccion-mejor-jugador-mundial-2026',
    titulo: 'Mejor jugador Mundial 2026: por qué creo que Vitinha puede ganar el premio',
    fecha: '1 de mayo de 2026',
    descripcion:
      'Análisis editorial sobre por qué Vitinha puede ser el Mejor Jugador del Mundial 2026 si Portugal gana el torneo.',
    secciones: ['espana', 'latam'],
    categoria: 'Mundial 2026',
    image: '/blog/prediccion-mejor-jugador-mundial-2026/vitinha-mundial-2026.webp',
    destacado: true,
  },
]

export default function BlogPage({
  searchParams,
}: {
  searchParams?: { seccion?: string | string[] }
}) {
  const seccionActiva = getSeccionActiva(searchParams?.seccion)
  const articulosFiltrados = articulos.filter((art) => art.secciones.includes(seccionActiva))
  const contadorPorSeccion = seccionesBlog.reduce<Record<SeccionBlog, number>>(
    (acc, seccion) => ({
      ...acc,
      [seccion.key]: articulos.filter((art) => art.secciones.includes(seccion.key)).length,
    }),
    { espana: 0, latam: 0 }
  )

  return (
    <div className="flex flex-col gap-8 max-w-3xl mx-auto">
      <header>
        <h1 className="text-2xl font-bold text-stone-800 tracking-tight">
          ✍️ Blog de Matched Betting
        </h1>
        <p className="text-sm text-stone-500 mt-1">
          Artículos y guías para entender cómo convertir bonos de bienvenida en dinero retirable en España y LATAM.
        </p>
      </header>

      <div className="rounded-2xl border border-stone-100 bg-white/80 p-3 shadow-[0_12px_32px_-28px_rgba(15,23,42,0.16)]">
        <div className="flex flex-wrap gap-2">
          {seccionesBlog.map((seccion) => {
            const isActive = seccionActiva === seccion.key
            const count = contadorPorSeccion[seccion.key]

            return (
              <Link
                key={seccion.key}
                href={seccion.href}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'border-violet-400/55 bg-violet-500/12 text-violet-950 shadow-[0_0_0_1px_rgba(139,92,246,0.12),0_10px_24px_-18px_rgba(139,92,246,0.3)]'
                    : 'border-stone-200 bg-white text-stone-600 hover:border-violet-300/40 hover:text-stone-900'
                }`}
              >
                <span>{seccion.label}</span>
                <span className="ml-2 text-xs font-medium text-stone-500">
                  {count} artículo{count !== 1 ? 's' : ''}
                </span>
              </Link>
            )
          })}
        </div>
      </div>

      {articulosFiltrados.length === 0 ? (
        <div className="bg-white rounded-2xl border border-stone-100 p-10 text-center">
          <span className="text-4xl">📝</span>
          <p className="mt-4 text-stone-700 font-semibold">Próximamente más artículos</p>
          <p className="text-sm text-stone-400 mt-2 max-w-sm mx-auto">
            Estamos preparando contenido sobre estrategias, legalidad y casas de apuestas, empezando por España y ampliando donde aporte valor para LATAM.
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
          {articulosFiltrados.map((art) => (
            <li
              key={art.slug}
              className="bg-white rounded-2xl border border-stone-100 hover:border-purple-200 hover:shadow-lg transition-all p-5"
            >
              {art.destacado ? (
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B8941F] mb-2">
                  {art.categoria?.toUpperCase() ?? 'ESPECIAL MUNDIAL 2026'}
                </p>
              ) : null}
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
