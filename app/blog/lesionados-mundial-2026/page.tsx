import type { Metadata } from 'next'
import Link from 'next/link'

type Estado = 'llegara' | 'sin-ritmo' | 'duda' | 'descartado'

type Seleccion = {
  id: string
  nombre: string
  flag: string
}

type Jugador = {
  nombre: string
  club: string
  seleccion: string
  seleccionNombre: string
  lesion: string
  tiempo: string
  estado: Estado
  descartado: boolean
}

type SearchParams = {
  seleccion?: string | string[]
}

export const metadata: Metadata = {
  title:
    'Lesionados Mundial 2026: bajas, dudas y posibles regresos | IAPredictHub',
  description:
    'Tracker actualizado de lesionados, jugadores en duda y posibles bajas para el Mundial 2026.',
  alternates: {
    canonical: 'https://iapredicthub.es/blog/lesionados-mundial-2026',
  },
}

const SELECCIONES: Seleccion[] = [
  {
    id: 'ar',
    nombre: 'Argentina',
    flag: 'https://hatscripts.github.io/circle-flags/flags/ar.svg',
  },
  {
    id: 'es',
    nombre: 'España',
    flag: 'https://hatscripts.github.io/circle-flags/flags/es.svg',
  },
  {
    id: 'br',
    nombre: 'Brasil',
    flag: 'https://hatscripts.github.io/circle-flags/flags/br.svg',
  },
  {
    id: 'mx',
    nombre: 'México',
    flag: 'https://hatscripts.github.io/circle-flags/flags/mx.svg',
  },
  {
    id: 'jp',
    nombre: 'Japón',
    flag: 'https://hatscripts.github.io/circle-flags/flags/jp.svg',
  },
  {
    id: 'fr',
    nombre: 'Francia',
    flag: 'https://hatscripts.github.io/circle-flags/flags/fr.svg',
  },
  {
    id: 'de',
    nombre: 'Alemania',
    flag: 'https://hatscripts.github.io/circle-flags/flags/de.svg',
  },
  {
    id: 'tr',
    nombre: 'Turquía',
    flag: 'https://hatscripts.github.io/circle-flags/flags/tr.svg',
  },
  {
    id: 'gh',
    nombre: 'Ghana',
    flag: 'https://hatscripts.github.io/circle-flags/flags/gh.svg',
  },
  {
    id: 'gb-eng',
    nombre: 'Inglaterra',
    flag: 'https://hatscripts.github.io/circle-flags/flags/gb-eng.svg',
  },
]

const JUGADORES: Jugador[] = [
  {
    nombre: 'Juan Foyth',
    club: 'Villarreal',
    seleccion: 'ar',
    seleccionNombre: 'Argentina',
    lesion: 'Rotura del tendón de Aquiles (ene)',
    tiempo: 'Baja confirmada',
    estado: 'descartado',
    descartado: true,
  },
  {
    nombre: 'Samu Aghehowa',
    club: 'Porto',
    seleccion: 'es',
    seleccionNombre: 'España',
    lesion: 'Rotura de ligamentos cruzados (feb)',
    tiempo: 'Baja confirmada',
    estado: 'descartado',
    descartado: true,
  },
  {
    nombre: 'Luis Malagón',
    club: 'América',
    seleccion: 'mx',
    seleccionNombre: 'México',
    lesion: 'Rotura del tendón de Aquiles (mar)',
    tiempo: 'Baja confirmada',
    estado: 'descartado',
    descartado: true,
  },
  {
    nombre: 'Takumi Minamino',
    club: 'Mónaco',
    seleccion: 'jp',
    seleccionNombre: 'Japón',
    lesion: 'Rotura de ligamentos cruzados (finales de 2025)',
    tiempo: 'Baja confirmada',
    estado: 'descartado',
    descartado: true,
  },
  {
    nombre: 'Rodrygo Goes',
    club: 'Real Madrid',
    seleccion: 'br',
    seleccionNombre: 'Brasil',
    lesion: 'Rotura de ligamentos cruzados (mar)',
    tiempo: 'Baja confirmada',
    estado: 'descartado',
    descartado: true,
  },
  {
    nombre: 'Joaquín Panichelli',
    club: 'Racing de Estrasburgo',
    seleccion: 'ar',
    seleccionNombre: 'Argentina',
    lesion: 'Rotura de ligamentos cruzados en entrenamiento con selección',
    tiempo: 'Baja confirmada',
    estado: 'descartado',
    descartado: true,
  },
  {
    nombre: 'Hugo Ekitike',
    club: 'Liverpool',
    seleccion: 'fr',
    seleccionNombre: 'Francia',
    lesion: 'Rotura del tendón de Aquiles en cuartos frente al PSG',
    tiempo: 'Baja confirmada',
    estado: 'descartado',
    descartado: true,
  },
  {
    nombre: 'Serge Gnabry',
    club: 'Bayern Munich',
    seleccion: 'de',
    seleccionNombre: 'Alemania',
    lesion: 'Desgarro fibrilar grave en muslo derecho',
    tiempo: 'Baja confirmada',
    estado: 'descartado',
    descartado: true,
  },
  {
    nombre: 'Estevão',
    club: 'Chelsea',
    seleccion: 'br',
    seleccionNombre: 'Brasil',
    lesion: 'Lesión grado 4 en isquiotibiales',
    tiempo: 'Muy difícil',
    estado: 'duda',
    descartado: false,
  },
  {
    nombre: 'Éder Militão',
    club: 'Real Madrid',
    seleccion: 'br',
    seleccionNombre: 'Brasil',
    lesion: 'Lesión en bíceps femoral',
    tiempo: 'Sin ritmo',
    estado: 'sin-ritmo',
    descartado: false,
  },
  {
    nombre: 'Arda Güler',
    club: 'Real Madrid',
    seleccion: 'tr',
    seleccionNombre: 'Turquía',
    lesion: 'Lesión en bíceps femoral derecho',
    tiempo: 'En riesgo',
    estado: 'duda',
    descartado: false,
  },
  {
    nombre: 'Lamine Yamal',
    club: 'FC Barcelona',
    seleccion: 'es',
    seleccionNombre: 'España',
    lesion: 'Desgarro importante en bíceps femoral',
    tiempo: 'Sin ritmo',
    estado: 'sin-ritmo',
    descartado: false,
  },
  {
    nombre: 'Mikel Merino',
    club: 'Arsenal',
    seleccion: 'es',
    seleccionNombre: 'España',
    lesion: 'Fractura de pie operada en febrero',
    tiempo: 'Incógnita física',
    estado: 'duda',
    descartado: false,
  },
  {
    nombre: 'Mohamed Kudus',
    club: 'Tottenham',
    seleccion: 'gh',
    seleccionNombre: 'Ghana',
    lesion: 'Lesión de cuádriceps con mala evolución',
    tiempo: 'Cirugía posible',
    estado: 'duda',
    descartado: false,
  },
  {
    nombre: 'Wataru Endo',
    club: 'Liverpool',
    seleccion: 'jp',
    seleccionNombre: 'Japón',
    lesion: 'Lesiones de tobillo y rodilla desde febrero',
    tiempo: 'Muy complicado',
    estado: 'duda',
    descartado: false,
  },
  {
    nombre: 'Reece James',
    club: 'Chelsea',
    seleccion: 'gb-eng',
    seleccionNombre: 'Inglaterra',
    lesion: 'Lesiones musculares recurrentes',
    tiempo: 'Duda física',
    estado: 'duda',
    descartado: false,
  },
  {
    nombre: 'Marcel Ruiz',
    club: 'Club pendiente',
    seleccion: 'mx',
    seleccionNombre: 'México',
    lesion: 'Rotura parcial de ligamento cruzado y meniscos',
    tiempo: 'Volvió, riesgo',
    estado: 'sin-ritmo',
    descartado: false,
  },
  {
    nombre: 'Cristian Cuti Romero',
    club: 'Tottenham',
    seleccion: 'ar',
    seleccionNombre: 'Argentina',
    lesion: 'Lesión complicada; duda para el debut frente a Argelia',
    tiempo: 'Duda debut',
    estado: 'duda',
    descartado: false,
  },
]

const ESTADOS: Record<
  Estado,
  {
    label: string
    dot: string
    badge: string
  }
> = {
  llegara: {
    label: 'LLEGARÁ',
    dot: 'bg-emerald-400',
    badge:
      'border-emerald-300/35 bg-emerald-400/10 text-emerald-200 shadow-sm shadow-emerald-500/20',
  },
  'sin-ritmo': {
    label: 'SIN RITMO PLENO',
    dot: 'bg-amber-300',
    badge:
      'border-amber-300/35 bg-amber-300/10 text-amber-100 shadow-sm shadow-amber-500/20',
  },
  duda: {
    label: 'DUDA',
    dot: 'bg-orange-400',
    badge:
      'border-orange-300/35 bg-orange-400/10 text-orange-100 shadow-sm shadow-orange-500/20',
  },
  descartado: {
    label: 'DESCARTADO',
    dot: 'bg-rose-400',
    badge:
      'border-rose-300/35 bg-rose-400/10 text-rose-100 shadow-sm shadow-rose-500/20',
  },
}

const CTA_LINKS = [
  {
    icon: '🏆',
    title: 'Especial Mundial 2026',
    href: '/especial/mundial',
  },
  {
    icon: '🎁',
    title: 'Empezar con mi primer bono',
    href: '/casas/versus',
  },
]

function PremiumCtas({
  className = '',
  variant = 'large',
}: {
  className?: string
  variant?: 'compact' | 'large'
}) {
  const isCompact = variant === 'compact'

  return (
    <div className={className}>
      {CTA_LINKS.map((cta) => (
        <Link
          key={cta.href}
          href={cta.href}
          className={`group flex items-center justify-between border border-white/10 bg-white/[0.03] transition hover:border-white/20 hover:bg-white/[0.06] hover:shadow-violet-500/10 ${
            isCompact
              ? 'max-w-xs gap-2 rounded-full px-4 py-2 hover:shadow-md'
              : 'gap-4 rounded-2xl px-5 py-4 hover:shadow-lg'
          }`}
        >
          <span className={`flex min-w-0 items-center ${isCompact ? 'gap-2' : 'gap-3'}`}>
            <span
              className={`flex shrink-0 items-center justify-center rounded-full border border-violet-400/30 bg-violet-500/10 ${
                isCompact ? 'h-7 w-7 text-sm' : 'h-11 w-11 text-xl'
              }`}
            >
              {cta.icon}
            </span>
            <span
              className={`truncate font-semibold text-white ${
                isCompact ? 'text-sm' : 'text-base'
              }`}
            >
              {cta.title}
            </span>
          </span>
          <span
            className={`shrink-0 text-violet-300 transition group-hover:translate-x-1 ${
              isCompact ? 'text-xs' : ''
            }`}
          >
            →
          </span>
        </Link>
      ))}
    </div>
  )
}

function getSearchParam(searchParams: SearchParams | undefined, key: keyof SearchParams) {
  const value = searchParams?.[key]

  if (Array.isArray(value)) {
    return value[0]
  }

  return value
}

function getSeleccion(id: string) {
  return SELECCIONES.find((seleccion) => seleccion.id === id)
}

function getCount(id: string) {
  return JUGADORES.filter((jugador) => jugador.seleccion === id).length
}

function getTiempoClass(jugador: Jugador) {
  if (jugador.tiempo.includes('Recuperado')) {
    return 'text-emerald-300'
  }

  if (jugador.estado === 'llegara') {
    return 'text-emerald-300'
  }

  if (jugador.estado === 'sin-ritmo') {
    return 'text-amber-300'
  }

  if (jugador.estado === 'duda') {
    return 'text-orange-300'
  }

  if (jugador.estado === 'descartado') {
    return 'text-rose-300'
  }

  return 'text-slate-300'
}

function EstadoBadge({ estado }: { estado: Estado }) {
  const config = ESTADOS[estado]

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] ${config.badge}`}
    >
      {config.label}
    </span>
  )
}

function TablaJugadores({
  titulo,
  accent,
  jugadores,
}: {
  titulo: string
  accent: 'emerald' | 'rose'
  jugadores: Jugador[]
}) {
  const accentClass =
    accent === 'emerald'
      ? 'bg-emerald-400 shadow-emerald-400/30'
      : 'bg-rose-400 shadow-rose-400/30'

  return (
    <section className="overflow-hidden border-y border-white/[0.06] bg-white/[0.012]">
      <div className="px-4 py-3 sm:px-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span
              className={`h-9 w-1 rounded-full shadow-[0_0_18px] ${accentClass}`}
            />
            <h2 className="text-xs font-black uppercase tracking-[0.24em] text-slate-100">
              {titulo}
            </h2>
          </div>
          <span className="w-fit rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold text-slate-400 shadow-sm shadow-black/10">
            {jugadores.length} registros visibles
          </span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[860px] border-collapse text-left">
          <thead>
            <tr className="border-t border-white/[0.05] text-[10px] uppercase tracking-[0.22em] text-slate-500">
              <th className="px-4 py-2.5 font-bold sm:px-5">Jugador</th>
              <th className="px-4 py-2.5 font-bold">Club</th>
              <th className="px-4 py-2.5 font-bold">Selección</th>
              <th className="px-4 py-2.5 font-bold">Lesión</th>
              <th className="px-4 py-2.5 font-bold">Tiempo</th>
              <th className="px-4 py-2.5 font-bold">Estado</th>
            </tr>
          </thead>
          <tbody>
            {jugadores.length > 0 ? (
              jugadores.map((jugador) => {
                const seleccion = getSeleccion(jugador.seleccion)

                return (
                  <tr
                    key={`${jugador.seleccion}-${jugador.nombre}`}
                    className="border-t border-white/[0.05] text-sm text-slate-200 hover:bg-white/[0.02]"
                  >
                    <td className="px-4 py-2.5 sm:px-5">
                      <div className="flex flex-col gap-0.5">
                        <span className="font-semibold text-white">
                          {jugador.nombre}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-2.5 text-xs font-medium text-slate-400">
                      {jugador.club}
                    </td>
                    <td className="px-4 py-2.5">
                      <div className="flex items-center gap-2 whitespace-nowrap">
                        {seleccion ? (
                          <img
                            src={seleccion.flag}
                            alt=""
                            className="h-6 w-6 rounded-full shadow-sm shadow-black/30 ring-1 ring-white/15"
                          />
                        ) : null}
                        <span className="text-xs font-semibold text-slate-300">
                          {seleccion?.nombre ?? 'Selección'}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-2.5 text-xs text-slate-300">
                      {jugador.lesion}
                    </td>
                    <td className={`px-4 py-2.5 text-xs font-semibold ${getTiempoClass(jugador)}`}>
                      {jugador.tiempo}
                    </td>
                    <td className="px-4 py-2.5">
                      <EstadoBadge estado={jugador.estado} />
                    </td>
                  </tr>
                )
              })
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-8 text-center text-sm font-medium text-slate-400"
                >
                  No hay jugadores en esta categoría para el filtro seleccionado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default async function LesionadosMundial2026Page({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>
}) {
  const resolvedSearchParams = await searchParams
  const seleccionParam = getSearchParam(resolvedSearchParams, 'seleccion')
  const seleccionActiva = SELECCIONES.some((seleccion) => seleccion.id === seleccionParam)
    ? seleccionParam
    : 'todas'
  const jugadoresFiltrados =
    seleccionActiva === 'todas'
      ? JUGADORES
      : JUGADORES.filter((jugador) => jugador.seleccion === seleccionActiva)
  const jugadoresEnDuda = jugadoresFiltrados.filter((jugador) => !jugador.descartado)
  const descartados = jugadoresFiltrados.filter((jugador) => jugador.descartado)

  return (
    <article className="relative -mx-4 overflow-x-hidden bg-[#050914] text-slate-100 shadow-[0_0_0_100vmax_#050914] [clip-path:inset(0_-100vmax)] sm:-mx-6 lg:-mx-8">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.026)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.026)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 top-2 h-96 w-96 rounded-full bg-indigo-500/12 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.13),transparent_35%),linear-gradient(180deg,rgba(5,9,20,0.18)_0%,#050914_100%)]" />
      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col gap-5 px-4 py-6 sm:px-6 lg:px-8">
        <header className="mx-auto grid w-full max-w-6xl gap-5 pt-1 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-2.5 text-center lg:mx-0 lg:items-start lg:text-left">
            <p className="rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-violet-100">
              Especial Mundial 2026
            </p>
            <h1 className="font-playfair text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Lesionados Mundial 2026
            </h1>
            <p className="max-w-2xl text-sm leading-6 text-slate-300">
              Jugadores en duda, posibles bajas y descartados antes del torneo.
            </p>
            <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] font-semibold text-slate-300">
              Actualizado: 5 de mayo de 2026
            </span>
          </div>
          <PremiumCtas
            variant="compact"
            className="hidden w-[300px] max-w-xs flex-col gap-2 justify-self-end lg:flex"
          />
        </header>

        <section className="mx-auto w-full max-w-6xl px-3 py-3 sm:px-4">
          <div className="flex flex-col items-center gap-3">
            <p className="text-center text-[11px] font-black uppercase tracking-[0.28em] text-slate-500">
              Filtrar por selección
            </p>

            <div className="flex flex-wrap justify-center gap-1.5">
              <Link
                href="/blog/lesionados-mundial-2026"
                className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1.5 text-xs font-bold transition ${
                  seleccionActiva === 'todas'
                    ? 'border-violet-300/40 bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-lg shadow-violet-500/30'
                    : 'border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white'
                }`}
              >
                Todas
                <span className="rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-[10px] text-white/90">
                  {JUGADORES.length}
                </span>
              </Link>

              {SELECCIONES.map((seleccion) => {
                const isActive = seleccionActiva === seleccion.id

                return (
                  <Link
                    key={seleccion.id}
                    href={`/blog/lesionados-mundial-2026?seleccion=${seleccion.id}`}
                    className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1.5 text-xs font-bold transition ${
                      isActive
                        ? 'border-violet-300/40 bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-lg shadow-violet-500/30'
                        : 'border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white'
                    }`}
                  >
                    <img
                      src={seleccion.flag}
                      alt=""
                      className="h-5 w-5 rounded-full shadow-sm shadow-black/30 ring-1 ring-white/20"
                    />
                    {seleccion.nombre}
                    <span className="rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-[10px] text-white/90">
                      {getCount(seleccion.id)}
                    </span>
                  </Link>
                )
              })}
            </div>

            <div className="flex flex-wrap justify-center gap-3 border-t border-white/[0.07] pt-3">
              {(Object.keys(ESTADOS) as Estado[]).map((estado) => (
                <div
                  key={estado}
                  className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400"
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${ESTADOS[estado].dot}`}
                  />
                  {ESTADOS[estado].label}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="grid gap-5">
          <TablaJugadores
            titulo="Jugadores en duda — podrían llegar al Mundial"
            accent="emerald"
            jugadores={jugadoresEnDuda}
          />

          <TablaJugadores
            titulo="Descartados — no llegarán al Mundial"
            accent="rose"
            jugadores={descartados}
          />
        </div>

        <PremiumCtas className="flex flex-col gap-3 py-2 lg:hidden" />

        <section className="mx-auto w-full max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-lg shadow-black/10">
          <h2 className="text-base font-bold tracking-tight text-white">
            Más sobre el Mundial 2026
          </h2>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-slate-300">
            <li>
              <Link
                href="/especial/mundial"
                className="text-violet-200 underline underline-offset-4 hover:text-white"
              >
                Especial Mundial 2026 de IAPredictHub
              </Link>
            </li>
            <li>
              <Link
                href="/blog/mundial-2026"
                className="text-violet-200 underline underline-offset-4 hover:text-white"
              >
                Guía completa del Mundial 2026
              </Link>
            </li>
            <li>
              <Link
                href="/blog/prediccion-campeon-mundial-2026"
                className="text-violet-200 underline underline-offset-4 hover:text-white"
              >
                Predicción del campeón del Mundial 2026
              </Link>
            </li>
            <li>
              <Link
                href="/blog/prediccion-mejor-jugador-mundial-2026"
                className="text-violet-200 underline underline-offset-4 hover:text-white"
              >
                Predicción del mejor jugador del Mundial 2026
              </Link>
            </li>
          </ul>
        </section>

        <footer className="mx-auto flex max-w-3xl flex-col items-center gap-2 border-t border-white/10 pt-5 text-center text-xs leading-5 text-slate-500">
          <p>
            Datos recopilados al 5 de mayo de 2026 a partir de partes médicos
            oficiales y prensa especializada.
          </p>
          <p>
            Los tiempos de recuperación son estimaciones — la evolución real
            puede variar. El Mundial arranca el 11 de junio de 2026.
          </p>
        </footer>
      </div>
    </article>
  )
}
