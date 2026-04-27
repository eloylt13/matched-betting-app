import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const FECHA_ACTUALIZACION = 'Abril 2026'

type ScenarioCard = {
  etiqueta: string
  nombre: string
  pais: string
  imagen?: string
  className: string
  headerClassName: string
  eyebrowClassName: string
  nameClassName: string
  dividerClassName: string
  imageWrapperClassName: string
  imageClassName: string
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
    etiqueta: 'Campeón',
    nombre: 'Portugal',
    pais: 'PT',
    imagen: '/especial/mundial/jugadores/pt.png',
    className:
      'border border-[#D4AF37]/40 bg-[linear-gradient(135deg,#0a2e1f_0%,#0f3a27_100%)] text-white shadow-[0_0_0_1px_rgba(212,175,55,0.15),0_24px_80px_rgba(212,175,55,0.08)]',
    headerClassName: 'text-white',
    eyebrowClassName: 'text-[#E8C767]',
    nameClassName: 'text-white',
    dividerClassName: 'border-[#D4AF37]/50',
    imageWrapperClassName: 'pt-5',
    imageClassName: 'h-[280px] lg:h-[320px]',
  },
  {
    etiqueta: 'Subcampeón',
    nombre: 'España',
    pais: 'ES',
    imagen: '/especial/mundial/jugadores/es.png',
    className: 'border border-[#D4AF37]/40 bg-[#FAF1F0] text-stone-900',
    headerClassName: 'text-[#B8941F]',
    eyebrowClassName: 'text-[#B8941F]',
    nameClassName: 'text-stone-900',
    dividerClassName: 'border-[#D4AF37]/30',
    imageWrapperClassName: 'pt-2 lg:pt-3',
    imageClassName: 'h-[260px] lg:h-[300px]',
  },
  {
    etiqueta: '3º puesto',
    nombre: 'Francia',
    pais: 'FR',
    imagen: '/especial/mundial/jugadores/fr.png',
    className: 'border border-stone-200 bg-[#F4F6FB] text-stone-900',
    headerClassName: 'text-stone-500',
    eyebrowClassName: 'text-emerald-700',
    nameClassName: 'text-stone-900',
    dividerClassName: 'border-stone-200',
    imageWrapperClassName: 'pt-2 lg:pt-3',
    imageClassName: 'h-[260px] lg:h-[300px]',
  },
  {
    etiqueta: '4º puesto',
    nombre: 'Brasil',
    pais: 'BR',
    imagen: '/especial/mundial/jugadores/br.png',
    className: 'border border-stone-200 bg-[#FBF7EC] text-stone-900',
    headerClassName: 'text-stone-500',
    eyebrowClassName: 'text-emerald-700',
    nameClassName: 'text-stone-900',
    dividerClassName: 'border-stone-200',
    imageWrapperClassName: 'pt-2 lg:pt-3',
    imageClassName: 'h-[260px] lg:h-[300px]',
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
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/css/flag-icons.min.css"
        precedence="default"
      />
      <main className="min-h-[70vh] bg-[#F5F3EE] text-stone-800">
      <section
        className="relative overflow-hidden px-4 py-10 text-white sm:px-6 sm:py-14 lg:px-8 lg:py-12"
        style={{
          background:
            'linear-gradient(135deg, #0a2e1f 0%, #1a4d32 50%, #0a1410 100%)',
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: [
              'radial-gradient(circle at 72% 44%, rgba(212, 175, 55, 0.14) 0%, rgba(212, 175, 55, 0.08) 18%, rgba(212, 175, 55, 0.03) 34%, rgba(212, 175, 55, 0) 56%)',
              `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cg fill='%23ffffff' fill-opacity='0.045'%3E%3Ccircle cx='18' cy='24' r='1'/%3E%3Ccircle cx='76' cy='38' r='1'/%3E%3Ccircle cx='132' cy='26' r='1'/%3E%3Ccircle cx='40' cy='92' r='1'/%3E%3Ccircle cx='108' cy='82' r='1'/%3E%3Ccircle cx='146' cy='118' r='1'/%3E%3Ccircle cx='22' cy='138' r='1'/%3E%3Ccircle cx='86' cy='146' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
            ].join(', '),
            backgroundPosition: 'center, center',
            backgroundRepeat: 'no-repeat, repeat',
            backgroundSize: '100% 100%, 160px 160px',
          }}
        />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6">
          <div className="flex flex-col items-start gap-5 sm:gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <Image
              src="/especial/mundial/copa.png"
              alt="Trofeo Mundial 2026"
              priority
              width={1254}
              height={1254}
              className="order-1 hidden h-[100px] w-auto shrink-0 self-center drop-shadow-[0_12px_32px_rgba(0,0,0,0.5)] lg:order-2 lg:block lg:h-[260px] lg:self-auto"
            />

            <div className="order-2 max-w-4xl lg:order-1">
              <div className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#E8C767] backdrop-blur-sm">
                Actualizado: {FECHA_ACTUALIZACION}
              </div>

              <h1 className="mt-4 font-playfair text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                Escenario IAPredictHub ·{' '}
                <span className="whitespace-nowrap">Especial Mundial 2026</span>
              </h1>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              PREDICCIONES IAPREDICTHUB
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:auto-rows-fr lg:grid-cols-2">
            {ESCENARIO.map((item) => (
              <article
                key={`${item.etiqueta}-${item.nombre}`}
                className={`relative flex min-h-[400px] flex-col overflow-hidden rounded-3xl p-6 sm:min-h-[420px] sm:p-7 lg:h-full lg:min-h-[440px] ${item.className}`}
              >
                <div className={`relative z-10 flex items-center justify-between gap-4 ${item.headerClassName}`}>
                  <div className="min-w-0">
                    <p className="truncate">
                      <span className={`text-[11px] font-semibold uppercase tracking-[0.18em] lg:text-sm ${item.eyebrowClassName}`}>
                        {item.etiqueta}
                      </span>
                      <span className="mx-2 align-middle text-sm opacity-50">·</span>
                      <span className={`align-middle font-playfair text-xl font-bold tracking-normal lg:text-3xl ${item.nameClassName}`}>
                        {item.nombre}
                      </span>
                    </p>
                  </div>
                  <span className="inline-flex h-8 w-10 shrink-0 items-center justify-center rounded-full border border-current/40 bg-transparent text-lg">
                    <span className={`fi fi-${item.pais.toLowerCase()}`} aria-hidden="true" />
                    <span className="sr-only">{item.nombre}</span>
                  </span>
                </div>

                <div className={`relative z-10 mt-4 border-b ${item.dividerClassName}`} />

                <div className={`relative z-0 flex flex-1 items-end justify-center ${item.imageWrapperClassName}`}>
                  {item.imagen ? (
                    <Image
                      src={item.imagen}
                      alt={`Jugador ${item.nombre}`}
                      width={420}
                      height={420}
                      sizes="(min-width: 1024px) 320px, 280px"
                      priority={false}
                      className={`w-auto object-contain object-bottom drop-shadow-[0_14px_22px_rgba(0,0,0,0.18)] ${item.imageClassName}`}
                    />
                  ) : null}
                </div>
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
    </>
  )
}
