import type { Metadata } from 'next'
import Link from 'next/link'

import { casasLatam } from '@/lib/presets/data/latam'

export const metadata: Metadata = {
  title: 'Mejores bonos de bienvenida LATAM 2026 | IAPredictHub',
  description:
    'Ranking actualizado de casas LATAM reales del proyecto, ordenadas por beneficio potencial, con país o región, tipo de bono, requisitos y ganancia estimada en USD.',
}

const paises: Record<string, string> = {
  mx: 'México',
  ar: 'Argentina',
  cl: 'Chile',
  co: 'Colombia',
  pe: 'Perú',
  ec: 'Ecuador',
  pa: 'Panamá',
  uy: 'Uruguay',
  regionales: 'Regional LATAM',
}

const tipos: Record<string, string> = {
  'apuesta-recibe': 'Apuesta y recibe',
  reembolso: 'Reembolso',
  rollover: 'Rollover',
  exchange: 'Exchange',
}

function getCasaHref(id: string) {
  return `/casas/${id}`
}

function getPaisLabel(pais: string) {
  return paises[pais] ?? pais.toUpperCase()
}

function getTipoLabel(tipo?: string) {
  if (!tipo) return 'Sin clasificar'
  return tipos[tipo] ?? tipo
}

function getRequisitosBreves(requisitos: string[]) {
  if (requisitos.length <= 2) {
    return requisitos.join(' · ')
  }

  return `${requisitos.slice(0, 2).join(' · ')} · …`
}

function DificultadDots({ nivel }: { nivel?: number }) {
  const value = nivel ?? 0
  const etiquetas: Record<number, string> = {
    1: 'Muy fácil',
    2: 'Fácil',
    3: 'Media',
    4: 'Alta',
    5: 'Muy alta',
  }
  const filledColor = value <= 2 ? 'bg-emerald-400' : value === 3 ? 'bg-amber-400' : 'bg-rose-400'

  if (!etiquetas[value]) {
    return <span className="whitespace-nowrap text-[11px] text-gray-500">N/D</span>
  }

  return (
    <div className="inline-flex flex-col items-center gap-1">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((dot) => (
          <span
            key={dot}
            className={`h-1.5 w-1.5 rounded-full ${dot <= value ? filledColor : 'bg-white/15'}`}
          />
        ))}
      </div>
      <span className="whitespace-nowrap text-[11px] text-gray-500">{etiquetas[value]}</span>
    </div>
  )
}

const rankingLatam = [...casasLatam]
  .sort((a, b) => {
    const dificultadA = a.dificultad ?? Number.POSITIVE_INFINITY
    const dificultadB = b.dificultad ?? Number.POSITIVE_INFINITY

    if (dificultadA !== dificultadB) {
      return dificultadA - dificultadB
    }

    if (b.beneficioPotencial !== a.beneficioPotencial) {
      return b.beneficioPotencial - a.beneficioPotencial
    }

    return 0
  })

const duplicateCasaNames = rankingLatam.reduce((counts, casa) => {
  const key = casa.nombre.trim().toLowerCase()
  counts.set(key, (counts.get(key) ?? 0) + 1)
  return counts
}, new Map<string, number>())

function getCasaLabel(casa: (typeof rankingLatam)[number]) {
  const nombre = casa.nombre.trim()

  if (casa.pais === 'regionales') {
    return nombre
  }

  const isRepeated = (duplicateCasaNames.get(nombre.toLowerCase()) ?? 0) > 1
  if (!isRepeated) {
    return nombre
  }

  const paisLabel = getPaisLabel(casa.pais)
  if (nombre.toLowerCase().includes(paisLabel.toLowerCase())) {
    return nombre
  }

  return `${nombre} ${paisLabel}`
}

const casasPorId = new Map(rankingLatam.map((casa) => [casa.id, casa] as const))

const opcionesFaciles = [
  {
    id: 'betfair-sportsbook-latam',
    razon:
      'Flujo regional muy directo: apuesta y recibe simple, cuota mínima clara y una mecánica fácil de seguir para una primera prueba.',
  },
  {
    id: 'sportium-co',
    razon:
      'Dificultad baja y proceso corto: código DEPORTES, requisito previo a cuota 1.50 y freebet con caducidad conocida.',
  },
  {
    id: 'betway-uy',
    razon:
      'Rollover corto de x1 y entrada sencilla; conviene revisar la moneda exacta y el plazo dentro de la cuenta antes de activar.',
  },
  {
    id: 'betway-pa',
    razon:
      'Reembolso fácil de entender en app: una sola apuesta triple o superior y la freebet solo aparece si la primera pierde.',
  },
] as const

const opcionesPotencial = [
  {
    id: 'betano-ec',
    razon:
      'Es la casa con mayor beneficio potencial del proyecto en LATAM y mantiene un bono de primer depósito con importe alto.',
  },
  {
    id: 'novibet-mx',
    razon:
      'Muy alta ganancia estimada y buen techo de bono, aunque el mínimo oficial tiene conflicto y conviene verificarlo con cuidado.',
  },
  {
    id: 'betano-cl',
    razon:
      'Sigue en la parte alta del ranking y tiene un bono grande, con rollover a cuota 1.50 ya confirmado en la ficha.',
  },
  {
    id: 'novibet-cl',
    razon:
      'Mantiene una de las mayores ganancias estimadas, pero es más delicada porque rollover, cuota mínima y plazo siguen pendientes.',
  },
] as const

const faqLatam = [
  {
    question: '¿Qué países LATAM tienen más opciones aprovechables?',
    answer:
      'Hoy suelen destacar México, Colombia, Chile y Perú, porque concentran más casas activas, más bonos visibles y, en general, más oportunidades repetibles. En algunos casos también hay opciones regionales que cubren varios países, pero suele ser más prudente empezar por los mercados con fichas más completas y menos incertidumbre.',
  },
  {
    question: '¿Qué tipo de bono es más fácil para empezar en LATAM?',
    answer:
      'Para empezar, normalmente lo más cómodo es un bono de apuesta y recibe o una promo regional muy simple, con importe claro, cuota mínima razonable y plazo fácil de entender. Los bonos con rollover, campos pendientes o reglas muy variables suelen ser mejores para cuando ya controlas la mecánica.',
  },
  {
    question: '¿Puedo usar Betfair en todos los países LATAM?',
    answer:
      'No en todos. La disponibilidad depende del país, del producto concreto y de la regulación o del acceso comercial vigente. Antes de contar con Betfair para cubrir, comprueba que la cuenta y la sección que necesitas estén realmente disponibles en tu país y que puedas operar con normalidad.',
  },
  {
    question: '¿Por qué algunas promos LATAM tienen más incertidumbre que en España?',
    answer:
      'Porque en LATAM es más frecuente que cambien los importes, los requisitos o los T&C por país, por landing o incluso por campaña. Además, algunas fichas llegan con datos pendientes o menos estandarizados, así que es importante validar la promo real antes de depositar.',
  },
  {
    question: '¿Conviene empezar por regionales o por casas de país?',
    answer:
      'Si estás empezando, suele ser más prudente abrir primero las casas con ficha más limpia y condiciones más claras, aunque sean regionales. Las regionales pueden ser muy útiles si tienen un flujo sencillo y disponibilidad amplia; las casas de país suelen ser mejores cuando ya sabes leer T&C y quieres exprimir el ranking por beneficio potencial.',
  },
] as const

const relatedLinks = [
  {
    href: '/blog/que-es-matched-betting-latam',
    title: 'Qué es el Matched Betting en LATAM',
    description: 'La base para entender la mecánica antes de activar cualquier bono.',
  },
  {
    href: '/calculadora',
    title: 'Calculadora',
    description: 'Úsala para cerrar coberturas con más precisión y menos margen de error.',
  },
  {
    href: '/casas',
    title: 'Casas y bonos',
    description: 'Panel práctico para ver las fichas y avanzar por país o región.',
  },
  {
    href: '/bienvenida',
    title: 'Guía de bienvenida',
    description: 'Un punto de entrada útil si quieres organizar el proceso desde cero.',
  },
] as const

function CasaDestacadaCard({
  casa,
  razon,
}: {
  casa: (typeof rankingLatam)[number]
  razon: string
}) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <Link
          href={getCasaHref(casa.id)}
          className="font-semibold text-stone-800 decoration-stone-300 transition-colors hover:text-purple-700 hover:underline underline-offset-2"
        >
          {getCasaLabel(casa)}
        </Link>
        <span className="shrink-0 whitespace-nowrap rounded-full bg-purple-50 px-2 py-0.5 text-xs font-semibold text-purple-700">
          ~{casa.beneficioPotencial} USD
        </span>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-stone-500">{razon}</p>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h3 className="text-base font-semibold text-stone-800">{question}</h3>
      <p className="mt-2 text-sm leading-relaxed text-stone-600">{answer}</p>
    </div>
  )
}

function RelatedItem({
  href,
  title,
  description,
}: {
  href: string
  title: string
  description: string
}) {
  return (
    <li className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <Link href={href} className="text-sm font-semibold text-purple-700 hover:text-purple-800 hover:underline underline-offset-2">
        {title} →
      </Link>
      <p className="mt-1 text-sm leading-relaxed text-stone-600">{description}</p>
    </li>
  )
}

export default function MejoresBonosLatamPage() {
  return (
    <article className="mx-auto flex max-w-3xl flex-col gap-6 pb-8">
      <h1 className="text-2xl font-bold leading-snug tracking-tight text-stone-800">
        Mejores bonos de bienvenida en casas de apuestas LATAM (2026)
      </h1>

      <time dateTime="2026-04-28" className="text-xs text-stone-400">
        28 de abril de 2026
      </time>

      <Link
        href="/blog/mejores-bonos-bienvenida-apuestas-espana"
        className="my-1 inline-flex self-start rounded-xl bg-emerald-500 px-4 py-2 font-semibold text-white shadow-sm transition-colors hover:bg-emerald-400"
      >
        Por España, clic aquí →
      </Link>

      <div className="flex flex-col gap-4 text-sm leading-relaxed text-stone-700">
        <p>
          Casas disponibles en LATAM, ordenadas por dificultad y beneficio potencial estimado usando matched betting.
        </p>

        <div className="my-8 overflow-hidden rounded-2xl border border-white/10 bg-[#12112A] shadow-xl shadow-stone-900/10">
          <div className="flex items-start justify-between gap-4 border-b border-white/10 px-6 py-5">
            <div>
              <h2 className="font-playfair text-base font-semibold text-white">
                Ranking de bonos de bienvenida LATAM 2026
              </h2>
              <p className="mt-1 text-xs text-gray-400">Ordenado por dificultad y beneficio estimado</p>
            </div>
            <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-widest text-gray-500">
              Estimaciones orientativas
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-3 py-3 text-left text-[11px] font-medium uppercase tracking-widest text-gray-500">Casa</th>
                <th className="px-3 py-3 text-left text-[11px] font-medium uppercase tracking-widest text-gray-500">País / región</th>
                <th className="px-3 py-3 text-left text-[11px] font-medium uppercase tracking-widest text-gray-500">Tipo de bono</th>
                <th className="hidden px-3 py-3 text-left text-[11px] font-medium uppercase tracking-widest text-gray-500 md:table-cell">Requisitos breves</th>
                <th className="px-3 py-3 text-center text-[11px] font-medium uppercase tracking-widest text-gray-500">Dificultad</th>
                <th className="px-3 py-3 text-right text-[11px] font-medium uppercase tracking-widest text-gray-500">Ganancia estimada</th>
              </tr>
            </thead>
            <tbody>
              {rankingLatam.map((casa) => (
                <tr
                  key={casa.id}
                  className="border-b border-white/5 text-sm transition-colors last:border-0 hover:bg-white/[0.03]"
                >
                  <td className="whitespace-nowrap px-3 py-3">
                    <Link
                      href={getCasaHref(casa.id)}
                      className="font-playfair inline-block font-semibold text-white decoration-white/20 underline-offset-2 transition-colors hover:text-emerald-200 hover:underline"
                    >
                      {getCasaLabel(casa)}
                    </Link>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 text-gray-400">{getPaisLabel(casa.pais)}</td>
                  <td className="whitespace-nowrap px-3 py-3 text-gray-400">{getTipoLabel(casa.tipologia)}</td>
                  <td className="hidden px-3 py-3 md:table-cell">
                    <div className="max-w-xs text-xs text-gray-400 line-clamp-2">{getRequisitosBreves(casa.requisitos)}</div>
                  </td>
                  <td className="px-3 py-3 text-center">
                    <DificultadDots nivel={casa.dificultad} />
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 text-right text-base tabular-nums">
                    <span className="font-normal text-gray-500">~</span>
                    <span className="font-semibold text-emerald-300">{casa.beneficioPotencial}</span>
                    <span className="font-normal text-gray-500"> USD aprox.</span>
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
          </div>
        </div>

        <p className="mt-3 text-xs text-stone-500">
          * La ganancia estimada es orientativa y depende de los T&amp;C vigentes, la conversión real de cada
          bono y el país. Conviene revisar siempre la ficha de cada casa antes de operar.
        </p>

        <h2 className="mt-2 text-lg font-semibold text-stone-800">Opciones más fáciles para empezar</h2>
        <p>
          Si todavía estás dando los primeros pasos, estas cuatro casas concentran los flujos más limpios
          del proyecto o una dificultad más baja. No son necesariamente las de mayor importe, pero sí las
          más cómodas para aprender sin cargar demasiado la ejecución.
        </p>

        <div className="mt-1 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {opcionesFaciles.map((opcion) => {
            const casa = casasPorId.get(opcion.id)
            if (!casa) return null

            return <CasaDestacadaCard key={casa.id} casa={casa} razon={opcion.razon} />
          })}
        </div>

        <h2 className="mt-2 text-lg font-semibold text-stone-800">Bonos con mayor potencial</h2>
        <p>
          Aquí van las casas LATAM con mayor beneficio potencial estimado dentro de los presets actuales.
          Suelen exigir más atención, porque el volumen, los rollovers o las condiciones pendientes pesan
          más que en las opciones de entrada.
        </p>

        <div className="mt-1 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {opcionesPotencial.map((opcion) => {
            const casa = casasPorId.get(opcion.id)
            if (!casa) return null

            return <CasaDestacadaCard key={casa.id} casa={casa} razon={opcion.razon} />
          })}
        </div>

        <h2 className="mt-2 text-lg font-semibold text-stone-800">Qué revisar antes de activar un bono LATAM</h2>
        <p>
          Antes de depositar o aceptar una promo, conviene hacer una revisión rápida para evitar sorpresas.
          En LATAM las diferencias entre países, landings y T&amp;C son más frecuentes de lo que parece.
        </p>
        <ul className="list-inside list-disc space-y-2 pl-1 text-stone-600">
          <li>
            <strong>Condiciones variables por país.</strong> La misma casa puede mostrar importes, requisitos o
            plazos distintos según el país, así que no basta con mirar una única ficha.
          </li>
          <li>
            <strong>Promos con incertidumbre o campos pendientes.</strong> Si ves datos marcados como pendientes,
            dudosos o sin confirmar, mejor frenar antes de activar.
          </li>
          <li>
            <strong>Revisar siempre los T&amp;C.</strong> La landing comercial puede resumir el bono, pero las reglas
            que mandan de verdad suelen estar en los términos y condiciones.
          </li>
          <li>
            <strong>Comprobar exchange o cobertura según país.</strong> No todas las rutas LATAM se cubren igual,
            así que la viabilidad real depende también de cómo se pueda cerrar la apuesta.
          </li>
          <li>
            <strong>Buscar inconsistencias entre landing y T&amp;C.</strong> Si el texto promocional y las condiciones
            no dicen lo mismo, toma como referencia la versión más restrictiva hasta verificar.
          </li>
        </ul>

        <h2 className="mt-2 text-lg font-semibold text-stone-800">Cómo decidir por dónde empezar</h2>
        <p>
          La forma más prudente de arrancar en LATAM es elegir primero una casa con reglas claras, un bono
          fácil de leer y una cobertura que puedas ejecutar sin prisa. Si dudas entre varias opciones,
          prioriza esta secuencia:
        </p>
        <ol className="list-inside list-decimal space-y-2 pl-1 text-stone-600">
          <li>Empieza por la casa con menos incertidumbre en la ficha.</li>
          <li>Busca primero una promo simple de apuesta y recibe o una regional bien explicada.</li>
          <li>Usa la calculadora antes de cerrar la cobertura.</li>
          <li>Deja los bonos con rollover o datos pendientes para cuando ya tengas más rodaje.</li>
        </ol>

        <h2 className="mt-2 text-lg font-semibold text-stone-800">FAQ LATAM</h2>
        <div className="grid grid-cols-1 gap-3">
          {faqLatam.map((item) => (
            <FaqItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>

        <div className="mt-2 rounded-2xl border border-purple-100 bg-purple-50 p-6">
          <p className="text-sm font-semibold text-stone-800">
            Si quieres avanzar de forma ordenada, empieza por las casas con ficha más clara, usa la calculadora
            para cada cobertura y reserva las promos más inciertas para cuando ya hayas completado las primeras.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/casas"
              className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-700"
            >
              Ver casas LATAM →
            </Link>
            <Link
              href="/bienvenida"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-stone-700 ring-1 ring-inset ring-stone-200 transition-colors hover:bg-stone-50"
            >
              Ir a bienvenida
            </Link>
            <Link
              href="/calculadora"
              className="rounded-xl bg-stone-100 px-5 py-3 text-sm font-semibold text-stone-700 transition-colors hover:bg-stone-200"
            >
              Abrir calculadora
            </Link>
          </div>
        </div>

        <aside className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-sm font-bold text-stone-800">Artículos y guías relacionados</h2>
          <ul className="grid grid-cols-1 gap-3">
            {relatedLinks.map((item) => (
              <RelatedItem key={item.href} href={item.href} title={item.title} description={item.description} />
            ))}
          </ul>
        </aside>
      </div>

      <div className="border-t border-stone-100 pt-4">
        <Link href="/blog" className="text-sm text-stone-500 transition-colors hover:text-stone-700">
          ← Volver al blog
        </Link>
      </div>
    </article>
  )
}
