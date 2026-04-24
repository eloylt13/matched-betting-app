import type { Metadata } from 'next'
import Link from 'next/link'

const FECHA_ACTUALIZACION = 'Abril 2026'

type ScenarioCard = {
  etiqueta: string
  nombre: string
  pais: string
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

const ESCENARIO: ScenarioCard[] = [
  {
    etiqueta: 'Campeón previsto',
    nombre: 'Portugal',
    pais: 'PT',
    analisis:
      'Parte como la selección que mejor combina talento diferencial, soluciones para partidos largos y margen para adaptarse a distintos guiones de eliminatoria.',
    className:
      'lg:col-span-2 lg:row-span-2 border-stone-900 bg-[#17151F] text-white shadow-[0_24px_80px_rgba(23,21,31,0.18)]',
  },
  {
    etiqueta: 'Finalista previsto',
    nombre: 'España',
    pais: 'ES',
    analisis:
      'Su capacidad para mandar con la pelota y sostener ritmo competitivo la coloca en una trayectoria muy creíble hacia la final si mantiene continuidad en las áreas.',
    className: 'border-emerald-200 bg-emerald-50 text-stone-900',
  },
  {
    etiqueta: 'Semifinalista',
    nombre: 'Francia',
    pais: 'FR',
    analisis:
      'Sigue teniendo una plantilla preparada para sobrevivir a cruces exigentes incluso en días menos fluidos, con pegada suficiente para sostener un torneo largo.',
    className: 'border-stone-200 bg-white text-stone-900',
  },
  {
    etiqueta: 'Semifinalista',
    nombre: 'Brasil',
    pais: 'BR',
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
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Mi escenario del torneo
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-4 lg:grid-rows-2">
            {ESCENARIO.map((item) => (
              <article
                key={`${item.etiqueta}-${item.nombre}`}
                className={`relative overflow-hidden rounded-3xl border p-6 sm:p-7 ${item.className}`}
              >
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-x-6 top-0 h-px ${
                    item.className.includes('text-white') ? 'bg-white/20' : 'bg-emerald-200/80'
                  }`}
                />
                <div
                  className={`flex items-start justify-between gap-4 border-b pb-4 ${
                    item.className.includes('text-white') ? 'border-white/10' : 'border-stone-200/80'
                  }`}
                >
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                      item.className.includes('text-white') ? 'text-emerald-200' : 'text-emerald-700'
                    }`}
                  >
                    {item.etiqueta}
                  </p>
                  <span
                    className={`inline-flex shrink-0 items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${
                      item.className.includes('text-white')
                        ? 'border-white/15 bg-white/10 text-white'
                        : item.className.includes('bg-emerald-50')
                          ? 'border-emerald-300 bg-white/80 text-emerald-800'
                          : 'border-stone-200 bg-stone-50 text-stone-700'
                    }`}
                  >
                    {item.pais}
                  </span>
                </div>
                <p
                  className={`mt-5 inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${
                    item.className.includes('text-white')
                      ? 'bg-white/8 text-stone-200 ring-1 ring-inset ring-white/10'
                      : item.className.includes('bg-emerald-50')
                        ? 'bg-emerald-100 text-emerald-800 ring-1 ring-inset ring-emerald-200'
                        : 'bg-stone-100 text-stone-700 ring-1 ring-inset ring-stone-200'
                  }`}
                >
                  Escalón decisivo
                </p>
                <h3
                  className={`mt-4 font-playfair font-bold tracking-tight ${
                    item.className.includes('lg:row-span-2') ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'
                  }`}
                >
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
