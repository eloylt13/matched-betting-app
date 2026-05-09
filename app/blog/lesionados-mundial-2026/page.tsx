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
  lesion: string
  tiempo: string
  estado: Estado
  descartado: boolean
  demo?: boolean
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
    id: 'es',
    nombre: 'España',
    flag: 'https://hatscripts.github.io/circle-flags/flags/es.svg',
  },
  {
    id: 'ar',
    nombre: 'Argentina',
    flag: 'https://hatscripts.github.io/circle-flags/flags/ar.svg',
  },
  {
    id: 'br',
    nombre: 'Brasil',
    flag: 'https://hatscripts.github.io/circle-flags/flags/br.svg',
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
    id: 'hr',
    nombre: 'Croacia',
    flag: 'https://hatscripts.github.io/circle-flags/flags/hr.svg',
  },
  {
    id: 'gb-eng',
    nombre: 'Inglaterra',
    flag: 'https://hatscripts.github.io/circle-flags/flags/gb-eng.svg',
  },
  {
    id: 'nl',
    nombre: 'Países Bajos',
    flag: 'https://hatscripts.github.io/circle-flags/flags/nl.svg',
  },
  {
    id: 'tr',
    nombre: 'Turquía',
    flag: 'https://hatscripts.github.io/circle-flags/flags/tr.svg',
  },
  {
    id: 'uy',
    nombre: 'Uruguay',
    flag: 'https://hatscripts.github.io/circle-flags/flags/uy.svg',
  },
]

const JUGADORES: Jugador[] = [
  {
    nombre: 'Rodri Hernández',
    club: 'Manchester City',
    seleccion: 'es',
    lesion: 'Molestia ingle (21 abr) · post cruzado',
    tiempo: '+1-2 sem',
    estado: 'llegara',
    descartado: false,
  },
  {
    nombre: 'Nico Williams',
    club: 'Athletic Club',
    seleccion: 'es',
    lesion: 'Pubalgia crónica (tratamiento ext.)',
    tiempo: 'Recuperado',
    estado: 'sin-ritmo',
    descartado: false,
  },
  {
    nombre: 'Lamine Yamal',
    club: 'FC Barcelona',
    seleccion: 'es',
    lesion: 'Bíceps femoral izq. grado 2 (22 abr)',
    tiempo: '+4-6 sem',
    estado: 'sin-ritmo',
    descartado: false,
  },
  {
    nombre: 'Mikel Merino',
    club: 'Arsenal',
    seleccion: 'es',
    lesion: 'Fractura estrés pie der. (feb)',
    tiempo: '+2-4 sem',
    estado: 'duda',
    descartado: false,
  },
  {
    nombre: 'Samu Aghehowa',
    club: 'Porto',
    seleccion: 'es',
    lesion: 'LCA rodilla der. (feb)',
    tiempo: '+8-9 meses',
    estado: 'descartado',
    descartado: true,
  },
  ...makeDemoPlayers('ar', 'Argentina', 5),
  ...makeDemoPlayers('br', 'Brasil', 3),
  ...makeDemoPlayers('fr', 'Francia', 2),
  ...makeDemoPlayers('de', 'Alemania', 2),
  ...makeDemoPlayers('hr', 'Croacia', 2),
  ...makeDemoPlayers('gb-eng', 'Inglaterra', 1),
  ...makeDemoPlayers('nl', 'Países Bajos', 1),
  ...makeDemoPlayers('tr', 'Turquía', 1),
  ...makeDemoPlayers('uy', 'Uruguay', 1),
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

function makeDemoPlayers(
  seleccion: string,
  nombreSeleccion: string,
  total: number,
): Jugador[] {
  const cycle: Estado[] = ['duda', 'sin-ritmo', 'llegara', 'descartado']

  return Array.from({ length: total }, (_, index) => {
    const estado = cycle[index % cycle.length]

    return {
      nombre: `Jugador ${nombreSeleccion} ${index + 1}`,
      club: 'Club demo',
      seleccion,
      lesion: 'Dato demo pendiente de validar',
      tiempo: estado === 'descartado' ? '+6 meses' : '+2-4 sem',
      estado,
      descartado: estado === 'descartado',
      demo: true,
    }
  })
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
                        {jugador.demo ? (
                          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-violet-300/80">
                            Demo temporal
                          </span>
                        ) : null}
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
        <header className="mx-auto flex max-w-3xl flex-col items-center gap-2.5 pt-1 text-center">
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

        <footer className="mx-auto flex max-w-3xl flex-col items-center gap-2 border-t border-white/10 pt-5 text-center text-xs leading-5 text-slate-500">
          <p>
            Datos recopilados al 5 de mayo de 2026 basados en reportes médicos
            oficiales de clubes y medios especializados.
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
