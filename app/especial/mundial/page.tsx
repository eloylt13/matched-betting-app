import type { Metadata } from 'next'
import Link from 'next/link'

const FECHA_ACTUALIZACION = 'Abril 2026'

type ProbabilityOption = {
  nombre: string
  porcentaje: string
  nota: string
}

type ProbabilityMarket = {
  titulo: string
  descripcion: string
  opciones: ProbabilityOption[]
}

const COMO_LEER = [
  'Simulación como punto de partida',
  'Ajuste editorial propio según forma, contexto y plantilla',
  'No es asesoramiento de apuesta',
] as const

const MERCADOS: ProbabilityMarket[] = [
  {
    titulo: 'Ganador del Mundial',
    descripcion: 'Escenario editorial provisional para favoritos y perseguidores antes del tramo final de preparación.',
    opciones: [
      {
        nombre: 'Francia',
        porcentaje: '18% \u00B7 ejemplo editorial',
        nota: 'Profundidad de plantilla y varias soluciones ofensivas si llega con su bloque principal sano.',
      },
      {
        nombre: 'Brasil',
        porcentaje: '16% \u00B7 ejemplo editorial',
        nota: 'Techo competitivo muy alto cuando junta ritmo, talento individual y una defensa estable.',
      },
      {
        nombre: 'Inglaterra',
        porcentaje: '13% \u00B7 ejemplo editorial',
        nota: 'Tiene volumen de talento y margen para dominar fases largas si afina su equilibrio sin balón.',
      },
      {
        nombre: 'Argentina',
        porcentaje: '11% \u00B7 ejemplo editorial',
        nota: 'Bloque reconocible y muy competitivo, aunque depende de llegar con buena energia en las piezas clave.',
      },
      {
        nombre: 'España',
        porcentaje: '10% \u00B7 ejemplo editorial',
        nota: 'Controla partidos con facilidad, pero su techo final depende de convertir dominio en pegada.',
      },
    ],
  },
  {
    titulo: 'Máximo goleador',
    descripcion: 'Lectura preliminar basada en volumen esperado de tiros, rol ofensivo y recorrido potencial en el torneo.',
    opciones: [
      {
        nombre: 'Kylian Mbappe',
        porcentaje: '19% \u00B7 ejemplo editorial',
        nota: 'Parte con volumen de remate alto y capacidad para generar goles incluso en partidos cerrados.',
      },
      {
        nombre: 'Harry Kane',
        porcentaje: '16% \u00B7 ejemplo editorial',
        nota: 'Suma penaltis, continuidad de minutos y una seleccion capaz de llevarle balones al area.',
      },
      {
        nombre: 'Vinicius Junior',
        porcentaje: '12% \u00B7 ejemplo editorial',
        nota: 'Su amenaza al espacio puede disparar cifras si Brasil encuentra continuidad ofensiva.',
      },
      {
        nombre: 'Julian Alvarez',
        porcentaje: '10% \u00B7 ejemplo editorial',
        nota: 'Encaja bien en un ataque coral y puede beneficiarse de varios perfiles creativos a su alrededor.',
      },
    ],
  },
  {
    titulo: 'Máximo asistente',
    descripcion: 'Estimación editorial apoyada en peso creativo, balón parado y volumen de pases de último tercio.',
    opciones: [
      {
        nombre: 'Kevin De Bruyne',
        porcentaje: '17% \u00B7 ejemplo editorial',
        nota: 'Cuando está sano sigue siendo uno de los generadores más constantes de ocasiones claras.',
      },
      {
        nombre: 'Jamal Musiala',
        porcentaje: '13% \u00B7 ejemplo editorial',
        nota: 'Puede acumular ventajas por conducción y último pase si Alemania acelera su ritmo en campo rival.',
      },
      {
        nombre: 'Pedri',
        porcentaje: '11% \u00B7 ejemplo editorial',
        nota: 'Su lectura entre líneas gana valor en un equipo que monopoliza posesión y campo.',
      },
      {
        nombre: 'Bruno Fernandes',
        porcentaje: '10% \u00B7 ejemplo editorial',
        nota: 'Aporta pase final, balón parado y mucha presencia en la producción ofensiva de Portugal.',
      },
    ],
  },
  {
    titulo: 'Mejor jugador',
    descripcion: 'Proyección preliminar sobre impacto global, minutos esperados y narrativa competitiva del torneo.',
    opciones: [
      {
        nombre: 'Kylian Mbappe',
        porcentaje: '15% \u00B7 ejemplo editorial',
        nota: 'Su mezcla de producción ofensiva y protagonismo mediático le deja siempre muy arriba en este mercado.',
      },
      {
        nombre: 'Jude Bellingham',
        porcentaje: '12% \u00B7 ejemplo editorial',
        nota: 'Puede dominar varias alturas del juego si Inglaterra firma un torneo largo y consistente.',
      },
      {
        nombre: 'Vinicius Junior',
        porcentaje: '11% \u00B7 ejemplo editorial',
        nota: 'Su desequilibrio cambia partidos grandes y gana peso si Brasil avanza con autoridad.',
      },
      {
        nombre: 'Florian Wirtz',
        porcentaje: '9% \u00B7 ejemplo editorial',
        nota: 'Tiene talento para marcar diferencias entre líneas si Alemania sostiene el plan competitivo.',
      },
    ],
  },
  {
    titulo: 'Llegar a semifinales',
    descripcion: 'Lectura de probabilidad editorial condicionada por nivel medio, posibles cruces y profundidad de banquillo.',
    opciones: [
      {
        nombre: 'Francia',
        porcentaje: '42% \u00B7 ejemplo editorial',
        nota: 'Tiene una base competitiva muy sólida para superar eliminatorias incluso sin dominar del todo.',
      },
      {
        nombre: 'Brasil',
        porcentaje: '39% \u00B7 ejemplo editorial',
        nota: 'Si el bloque defensivo acompaña, su talento arriba eleva mucho la probabilidad de recorrido.',
      },
      {
        nombre: 'Inglaterra',
        porcentaje: '34% \u00B7 ejemplo editorial',
        nota: 'Plantilla profunda y experiencia reciente en torneos, aunque necesita más continuidad en partidos top.',
      },
      {
        nombre: 'España',
        porcentaje: '30% \u00B7 ejemplo editorial',
        nota: 'La capacidad para controlar ritmos le sostiene, pero el cuadro final pesará mucho en la revisión.',
      },
      {
        nombre: 'Portugal',
        porcentaje: '27% \u00B7 ejemplo editorial',
        nota: 'Tiene suficiente calidad para un torneo largo si encuentra una versión coral y estable sin balón.',
      },
    ],
  },
]

export const metadata: Metadata = {
  title: 'Probabilidades IAPredictHub · Especial Mundial 2026',
  description:
    'Especial editorial con estimaciones propias de IAPredictHub sobre mercados especiales del Mundial 2026, en una primera versión estática pendiente de revisión editorial.',
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
          <div className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-emerald-200 uppercase backdrop-blur-sm">
            Actualizado: {FECHA_ACTUALIZACION}
          </div>

          <div className="max-w-4xl">
            <h1 className="font-playfair text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Probabilidades IAPredictHub &middot; Especial Mundial 2026
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-stone-300 sm:text-base">
              Estimaciones propias sobre mercados especiales del Mundial, construidas a partir de simulación
              y análisis contextual, con revisiones previstas cuando cambie información relevante antes o
              durante el torneo.
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
                <li
                  key={item}
                  className="rounded-2xl border border-stone-100 bg-stone-50 px-4 py-4"
                >
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
          <div className="rounded-3xl border-2 border-amber-300 bg-amber-50 px-5 py-5 shadow-sm sm:px-6">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-800">
              Datos de ejemplo &mdash; pendiente de revisión editorial
            </p>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-amber-900">
              Esta V1 usa porcentajes mock y textos provisionales. No debe considerarse una versión final ni
              publicarse sin sustituir cada cifra por datos revisados editorialmente.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {MERCADOS.map((mercado) => (
              <article
                key={mercado.titulo}
                className="rounded-3xl border border-stone-100 bg-white p-6 shadow-sm"
              >
                <div className="border-b border-stone-100 pb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
                    Probabilidad editorial provisional
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-stone-800">
                    {mercado.titulo}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{mercado.descripcion}</p>
                </div>

                <div className="mt-5 space-y-3">
                  {mercado.opciones.map((opcion) => (
                    <div
                      key={`${mercado.titulo}-${opcion.nombre}`}
                      className="rounded-2xl border border-stone-100 bg-[#F5F3EE] px-4 py-4"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-base font-semibold text-stone-800">{opcion.nombre}</h3>
                        </div>
                        <span className="shrink-0 rounded-full border border-amber-200 bg-white px-3 py-1 text-xs font-bold text-amber-800">
                          {opcion.porcentaje}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-stone-600">{opcion.nota}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F3EE] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-3xl border border-stone-100 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Metodología resumida
            </p>
            <h2 className="mt-3 font-playfair text-2xl font-bold text-stone-800 sm:text-3xl">
              Cómo se construye esta estimación
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-stone-700 sm:text-base">
              <p>
                La base de este especial combina simuladores internos con lectura contextual del momento
                deportivo de cada selección y de los perfiles individuales que pueden dominar cada mercado.
              </p>
              <p>
                Sobre esa base aplicamos ajustes manuales por lesiones, convocatorias, estado de forma y
                dificultad esperada del grupo o del cuadro. Las probabilidades pueden cambiar cuando aparece
                información nueva que altere de forma material el escenario competitivo.
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
              &#191;Prefieres empezar por los bonos?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-600">
              Si quieres entrar por la parte más práctica de IAPredictHub, puedes seguir la ruta habitual del
              producto y volver más tarde a este especial cuando tenga revisión editorial completa.
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
            Estas probabilidades son estimaciones editoriales propias de IAPredictHub y no constituyen
            asesoramiento de apuesta.
          </p>
        </div>
      </section>
    </main>
  )
}
