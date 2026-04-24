import type { Metadata } from 'next'
import Link from 'next/link'

const FECHA_ACTUALIZACION = 'Abril 2026'

type ScenarioCard = {
  etiqueta: string
  nombre: string
  analisis: string
  className: string
}

type MarketOption = {
  nombre: string
  nota: string
}

type Market = {
  titulo: string
  descripcion: string
  opciones: MarketOption[]
}

const COMO_LEER = [
  'Simulación como punto de partida',
  'Ajuste editorial propio según forma, contexto y plantilla',
  'Lectura revisable, no cerrada, según evolucione el torneo',
] as const

const ESCENARIO: ScenarioCard[] = [
  {
    etiqueta: 'Campeón previsto',
    nombre: 'Portugal',
    analisis:
      'Parte como la selección que mejor combina talento diferencial, soluciones para partidos largos y margen para adaptarse a distintos guiones de eliminatoria.',
    className:
      'lg:col-span-2 lg:row-span-2 border-stone-900 bg-[#17151F] text-white shadow-[0_24px_80px_rgba(23,21,31,0.18)]',
  },
  {
    etiqueta: 'Finalista previsto',
    nombre: 'España',
    analisis:
      'Su capacidad para mandar con la pelota y sostener ritmo competitivo la coloca en una trayectoria muy creíble hacia la final si mantiene continuidad en las áreas.',
    className: 'border-emerald-200 bg-emerald-50 text-stone-900',
  },
  {
    etiqueta: 'Semifinalista',
    nombre: 'Francia',
    analisis:
      'Sigue teniendo una plantilla preparada para sobrevivir a cruces exigentes incluso en días menos fluidos, con pegada suficiente para sostener un torneo largo.',
    className: 'border-stone-200 bg-white text-stone-900',
  },
  {
    etiqueta: 'Semifinalista',
    nombre: 'Brasil',
    analisis:
      'Su techo competitivo aparece cuando encuentra equilibrio defensivo alrededor de su talento ofensivo, un perfil muy apto para llegar lejos en eliminatorias.',
    className: 'border-stone-200 bg-white text-stone-900',
  },
] as const

const MERCADOS: Market[] = [
  {
    titulo: 'Máximo goleador',
    descripcion:
      'Lectura editorial sobre quién puede capitalizar mejor volumen de remate, rol ofensivo y recorrido dentro del torneo.',
    opciones: [
      {
        nombre: 'Kylian Mbappé',
        nota: 'Su capacidad para generarse ocasiones por sí mismo le mantiene en primera línea incluso en partidos cerrados.',
      },
      {
        nombre: 'Harry Kane',
        nota: 'Acumula minutos, peso en el área y un contexto ofensivo que suele sostenerle cerca del gol durante torneos largos.',
      },
      {
        nombre: 'Vinícius Júnior',
        nota: 'Puede dispararse si Brasil encuentra continuidad en campo rival y le deja correr con frecuencia sobre defensa replegada.',
      },
      {
        nombre: 'Julián Álvarez',
        nota: 'Encaja muy bien en ataques corales y puede crecer si su selección le coloca repetidamente en zonas de remate.',
      },
    ],
  },
  {
    titulo: 'Máximo asistente',
    descripcion:
      'Aquí pesa la capacidad para activar el último pase, asumir balón parado y aparecer de forma constante en campo rival.',
    opciones: [
      {
        nombre: 'Kevin De Bruyne',
        nota: 'Si llega con buen tono físico, sigue siendo uno de los generadores más fiables del torneo en pases que rompen partidos.',
      },
      {
        nombre: 'Jamal Musiala',
        nota: 'Su mezcla de conducción y claridad en el último tercio le da un perfil muy fuerte para producir ventajas continuas.',
      },
      {
        nombre: 'Pedri',
        nota: 'En un equipo que quiere gobernar desde la posesión, su lectura interior puede traducirse en muchas acciones de último pase.',
      },
      {
        nombre: 'Bruno Fernandes',
        nota: 'Suma creatividad, llegada y balón parado en un Portugal que aspira a pasar muchas fases del torneo.',
      },
    ],
  },
  {
    titulo: 'Mejor jugador',
    descripcion:
      'Este mercado se acerca mejor desde el impacto total: jerarquía competitiva, peso narrativo y capacidad para decidir noches grandes.',
    opciones: [
      {
        nombre: 'Kylian Mbappé',
        nota: 'Su protagonismo competitivo y mediático le coloca siempre cerca de este desenlace si Francia pisa semifinales.',
      },
      {
        nombre: 'Jude Bellingham',
        nota: 'Tiene un rango de influencia enorme y puede dominar distintos registros si Inglaterra firma un torneo maduro.',
      },
      {
        nombre: 'Vinícius Júnior',
        nota: 'Cuando Brasil encuentra vuelo ofensivo, su desequilibrio es de esos que cambian eliminatorias enteras.',
      },
      {
        nombre: 'Florian Wirtz',
        nota: 'Su talento entre líneas y su capacidad para acelerar ataques le convierten en un candidato muy serio si Alemania despega.',
      },
    ],
  },
] as const

export const metadata: Metadata = {
  title: 'Escenario IAPredictHub · Especial Mundial 2026',
  description:
    'Lectura editorial propia de IAPredictHub sobre el escenario del Mundial 2026, con favoritos de torneo, mercados especiales de jugadores y revisiones segun cambie el contexto.',
  alternates: {
    canonical: 'https://iapredicthub.es/especial/mundial',
  },
}

export default function EspecialMundialPage() {
  return (
    <main className="min-h-[70vh] bg-[#F5F3EE] text-stone-800">
      <section
        className="px-4 py-10 text-white sm:px-6 sm:py-14 lg:px-8"
        style={{
          background: 'linear-gradient(135deg, #12112A 0%, #2A1F3D 100%)',
        }}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
          <div className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200 backdrop-blur-sm">
            Actualizado: {FECHA_ACTUALIZACION}
          </div>

          <div className="max-w-4xl">
            <h1 className="font-playfair text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Escenario IAPredictHub · Especial Mundial 2026
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-stone-300 sm:text-base">
              Una lectura editorial propia del torneo construida a partir de simulación y contexto deportivo.
              Este escenario se revisa cuando cambia información relevante antes del arranque o durante el
              desarrollo del Mundial.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Cómo leer esta página
            </p>
            <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-stone-700 sm:grid-cols-3">
              {COMO_LEER.map((item) => (
                <li key={item} className="rounded-2xl border border-stone-100 bg-stone-50 px-4 py-4">
                  <span className="font-semibold text-emerald-600">&bull; </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-6">
          <div className="rounded-3xl border border-amber-200 bg-gradient-to-r from-amber-50 to-white px-5 py-5 shadow-sm sm:px-6">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-800">
              Versión inicial editorial
            </p>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-amber-950">
              Esta página presenta una lectura revisable del torneo, pendiente de ajustes a medida que cambie
              el contexto competitivo, las convocatorias o el estado de forma de las selecciones.
            </p>
          </div>

          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Mi escenario del torneo
            </p>
            <h2 className="mt-3 font-playfair text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Una lectura jerarquizada del desenlace más probable hoy
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-stone-600 sm:text-base">
              No es un cuadro completo ni una simulación exhaustiva fase a fase. Es la síntesis editorial de
              cómo veo ahora mismo la zona alta del torneo y quiénes tienen mejor perfil para ocupar cada
              escalón decisivo.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-4 lg:grid-rows-2">
            {ESCENARIO.map((item) => (
              <article
                key={`${item.etiqueta}-${item.nombre}`}
                className={`rounded-3xl border p-6 sm:p-7 ${item.className}`}
              >
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                    item.className.includes('text-white') ? 'text-emerald-200' : 'text-emerald-700'
                  }`}
                >
                  {item.etiqueta}
                </p>
                <h3 className="mt-3 font-playfair text-3xl font-bold tracking-tight sm:text-4xl">
                  {item.nombre}
                </h3>
                <p
                  className={`mt-4 text-sm leading-relaxed sm:text-base ${
                    item.className.includes('text-white') ? 'text-stone-300' : 'text-stone-600'
                  }`}
                >
                  {item.analisis}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F3EE] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Mercados especiales de jugadores
            </p>
            <h2 className="mt-3 font-playfair text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Nombres que encajan con el escenario general
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-stone-600 sm:text-base">
              Este bloque no repite el campeón previsto. Se centra en perfiles individuales que pueden salir
              reforzados si el torneo evoluciona cerca de este escenario.
            </p>
          </div>

          <div className="grid gap-5 xl:grid-cols-3">
            {MERCADOS.map((mercado) => (
              <article
                key={mercado.titulo}
                className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-7"
              >
                <div className="border-b border-stone-100 pb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
                    Mercado especial
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-stone-900">
                    {mercado.titulo}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{mercado.descripcion}</p>
                </div>

                <div className="mt-5 space-y-3">
                  {mercado.opciones.map((opcion) => (
                    <div
                      key={`${mercado.titulo}-${opcion.nombre}`}
                      className="rounded-2xl border border-stone-100 bg-stone-50 px-4 py-4"
                    >
                      <h3 className="text-base font-semibold text-stone-900">{opcion.nombre}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-stone-600">{opcion.nota}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-3xl border border-stone-100 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Metodología resumida
            </p>
            <h2 className="mt-3 font-playfair text-2xl font-bold text-stone-800 sm:text-3xl">
              Cómo se construye esta lectura
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-stone-700 sm:text-base">
              <p>
                El punto de partida combina simulación interna y contexto deportivo para ordenar las
                selecciones y detectar los perfiles individuales con más opciones de marcar el torneo.
              </p>
              <p>
                A partir de ahí ajustamos manualmente según forma reciente, lesiones, convocatorias y camino
                de torneo. El resultado no pretende ser una verdad cerrada, sino una lectura editorial
                revisable a medida que aparecen señales nuevas.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-stone-100 bg-stone-50 p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Frecuencia de revisión
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-stone-800">Cada cuánto se revisa</h2>
            <div className="mt-5 space-y-3 text-sm leading-relaxed text-stone-700">
              <p>Antes del torneo: revisión semanal o por noticia relevante.</p>
              <p>Durante el torneo: revisión cada 3 días o antes si hay un cambio importante.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-stone-200 bg-stone-50 p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Acceso guiado
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-stone-800">
              Más allá del análisis: la herramienta
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-600">
              Si además del análisis deportivo te interesa aprovechar el torneo para ejecutar bonos de
              bienvenida con método, esta es la puerta de entrada.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/casas/versus"
                className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Ver Versus
              </Link>
              <Link
                href="/bienvenida"
                className="inline-flex items-center justify-center rounded-2xl border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-700 transition hover:bg-stone-100"
              >
                Ruta guiada
              </Link>
            </div>
          </div>

          <p className="mt-6 text-center text-xs leading-relaxed text-stone-500">
            Esta lectura editorial de IAPredictHub se ajustará cuando el torneo y su contexto ofrezcan nueva
            información relevante.
          </p>
        </div>
      </section>
    </main>
  )
}
