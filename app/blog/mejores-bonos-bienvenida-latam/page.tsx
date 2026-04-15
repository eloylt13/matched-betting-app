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

function DificultadBadge({ nivel }: { nivel?: number }) {
  const value = nivel ?? 0
  const colores: Record<number, string> = {
    1: 'bg-emerald-100 text-emerald-700',
    2: 'bg-green-100 text-green-700',
    3: 'bg-amber-100 text-amber-700',
    4: 'bg-orange-100 text-orange-700',
    5: 'bg-red-100 text-red-700',
  }
  const etiquetas: Record<number, string> = {
    1: '1/5 · Muy fácil',
    2: '2/5 · Fácil',
    3: '3/5 · Media',
    4: '4/5 · Alta',
    5: '5/5 · Muy alta',
  }

  if (!colores[value] || !etiquetas[value]) {
    return <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap bg-stone-100 text-stone-500">N/D</span>
  }

  return (
    <span
      className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${colores[value]}`}
    >
      {etiquetas[value]}
    </span>
  )
}

const rankingLatam = [...casasLatam]
  .sort((a, b) => {
    if (b.beneficioPotencial !== a.beneficioPotencial) {
      return b.beneficioPotencial - a.beneficioPotencial
    }

    return a.nombre.localeCompare(b.nombre, 'es')
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
    razon: 'Flujo regional muy directo: apuesta-recibe simple, cuota mínima clara y una mecánica fácil de seguir para una primera prueba.',
  },
  {
    id: 'sportium-co',
    razon: 'Dificultad baja y proceso corto: código DEPORTES, requisito previo a cuota 1.50 y freebet con caducidad conocida.',
  },
  {
    id: 'betway-uy',
    razon: 'Rollover corto de x1 y entrada sencilla; conviene revisar la moneda exacta y el plazo dentro de la cuenta antes de activar.',
  },
  {
    id: 'betway-pa',
    razon: 'Reembolso fácil de entender en app: una sola apuesta triple o superior y la freebet solo aparece si la primera pierde.',
  },
] as const

const opcionesPotencial = [
  {
    id: 'betano-ec',
    razon: 'Es la casa con mayor beneficioPotencial del proyecto en LATAM y mantiene un bono de primer depósito con importe alto.',
  },
  {
    id: 'novibet-mx',
    razon: 'Muy alta ganancia estimada y buen techo de bono, aunque el mínimo oficial tiene conflicto y conviene verificarlo con cuidado.',
  },
  {
    id: 'betano-cl',
    razon: 'Sigue en la parte alta del ranking y tiene un bono grande, con rollover a cuota 1.50 ya confirmado en la ficha.',
  },
  {
    id: 'novibet-cl',
    razon: 'Mantiene una de las mayores ganancias estimadas, pero es más delicada porque rollover, cuota mínima y plazo siguen pendientes.',
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
          className="font-semibold text-stone-800 hover:text-purple-700 hover:underline underline-offset-2 decoration-stone-300 transition-colors"
        >
          {getCasaLabel(casa)}
        </Link>
        <span className="shrink-0 rounded-full bg-purple-50 px-2 py-0.5 text-xs font-semibold text-purple-700 whitespace-nowrap">
          ~{casa.beneficioPotencial} USD
        </span>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-stone-500">{razon}</p>
    </div>
  )
}

export default function MejoresBonosLatamPage() {
  return (
    <article className="max-w-3xl mx-auto flex flex-col gap-6 pb-8">
      <time dateTime="2026-04-15" className="text-xs text-stone-400">
        15 de abril de 2026
      </time>

      <h1 className="text-2xl font-bold text-stone-800 tracking-tight leading-snug">
        Mejores bonos de bienvenida en casas de apuestas LATAM (2026)
      </h1>

      <div className="flex flex-col gap-4 text-sm text-stone-700 leading-relaxed">
        <p>
          Esta guía reúne las casas LATAM reales que ya existen en los presets del proyecto y las ordena
          por beneficio potencial estimado. La idea es tener una comparativa útil, limpia y coherente con
          el artículo de España, pero centrada solo en el mercado LATAM.
        </p>
        <p>
          El ranking incluye casas por país y también opciones regionales. Si estás empezando, la tabla te
          sirve para ver de un vistazo qué casas tienen mejor retorno estimado, qué tipo de bono ofrecen y
          qué nivel de dificultad suele tener cada una.
        </p>

        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Ranking principal de bonos LATAM
        </h2>
        <p>
          Todas las casas de la tabla salen directamente de{' '}
          <code className="rounded bg-stone-100 px-1.5 py-0.5 text-xs text-stone-600">casasLatam</code> y
          están ordenadas de mayor a menor beneficio potencial. Las cantidades se muestran en{' '}
          <strong>USD aproximados</strong> para mantener una comparación homogénea entre países.
        </p>

        <div className="overflow-x-auto rounded-xl border border-stone-200">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200">
                <th className="text-left px-3 py-3 font-semibold text-stone-700">Casa</th>
                <th className="text-left px-3 py-3 font-semibold text-stone-700">País / región</th>
                <th className="text-left px-3 py-3 font-semibold text-stone-700">Tipo de bono</th>
                <th className="text-left px-3 py-3 font-semibold text-stone-700 hidden md:table-cell">Requisitos breves</th>
                <th className="text-center px-3 py-3 font-semibold text-stone-700">Dificultad</th>
                <th className="text-right px-3 py-3 font-semibold text-stone-700">Ganancia estimada</th>
              </tr>
            </thead>
            <tbody>
              {rankingLatam.map((casa, index) => (
                <tr
                  key={casa.id}
                  className={`border-b border-stone-100 last:border-0 ${index % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'}`}
                >
                  <td className="px-3 py-2.5 font-medium text-stone-800 whitespace-nowrap">
                    <Link
                      href={getCasaHref(casa.id)}
                      className="inline-block text-stone-800 hover:text-purple-700 hover:underline underline-offset-2 decoration-stone-300 transition-colors"
                    >
                      {getCasaLabel(casa)}
                    </Link>
                  </td>
                  <td className="px-3 py-2.5 text-stone-600 whitespace-nowrap">
                    {getPaisLabel(casa.pais)}
                  </td>
                  <td className="px-3 py-2.5 text-stone-600 whitespace-nowrap">
                    {getTipoLabel(casa.tipologia)}
                  </td>
                  <td className="px-3 py-2.5 text-stone-500 hidden md:table-cell">
                    {getRequisitosBreves(casa.requisitos)}
                  </td>
                  <td className="px-3 py-2.5 text-center">
                    <DificultadBadge nivel={casa.dificultad} />
                  </td>
                  <td className="px-3 py-2.5 text-right font-semibold text-purple-700 whitespace-nowrap">
                    ~{casa.beneficioPotencial} USD aprox.
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-stone-400 -mt-2">
          * La ganancia estimada es orientativa y depende de los T&amp;C vigentes, la conversión real de
          cada bono y el país. Conviene revisar siempre la ficha de cada casa antes de operar.
        </p>

        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Opciones más fáciles para empezar
        </h2>
        <p>
          Si todavía estás dando los primeros pasos, estas cuatro casas concentran los flujos más limpios
          del proyecto o una dificultad más baja. No son necesariamente las de mayor importe, pero sí las
          más cómodas para aprender sin cargar demasiado la ejecución.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
          {opcionesFaciles.map((opcion) => {
            const casa = casasPorId.get(opcion.id)
            if (!casa) return null

            return <CasaDestacadaCard key={casa.id} casa={casa} razon={opcion.razon} />
          })}
        </div>

        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Bonos con mayor potencial
        </h2>
        <p>
          Aquí van las casas LATAM con mayor beneficioPotencial estimado dentro de los presets actuales.
          Suelen exigir más atención, porque el volumen, los rollovers o las condiciones pendientes pesan
          más que en las opciones de entrada.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
          {opcionesPotencial.map((opcion) => {
            const casa = casasPorId.get(opcion.id)
            if (!casa) return null

            return <CasaDestacadaCard key={casa.id} casa={casa} razon={opcion.razon} />
          })}
        </div>

        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Qué revisar antes de activar un bono LATAM
        </h2>
        <p>
          Antes de depositar o aceptar una promo, conviene hacer una revisión rápida para evitar
          sorpresas. En LATAM las diferencias entre países, landings y T&amp;C son más frecuentes de lo que
          parece.
        </p>
        <ul className="list-disc list-inside space-y-2 text-stone-600 pl-1">
          <li>
            <strong>Condiciones variables por país.</strong> La misma casa puede mostrar importes,
            requisitos o plazos distintos según el país, así que no basta con mirar una única ficha.
          </li>
          <li>
            <strong>Promos con incertidumbre o campos pendientes.</strong> Si ves datos marcados como
            pendientes, dudosos o sin confirmar, mejor frenar antes de activar.
          </li>
          <li>
            <strong>Revisar siempre los T&amp;C.</strong> La landing comercial puede resumir el bono, pero
            las reglas que mandan de verdad suelen estar en los términos y condiciones.
          </li>
          <li>
            <strong>Comprobar exchange o cobertura según país.</strong> No todas las rutas LATAM se
            cubren igual, así que la viabilidad real depende también de cómo se pueda cerrar la apuesta.
          </li>
          <li>
            <strong>Buscar inconsistencias entre landing y T&amp;C.</strong> Si el texto promocional y las
            condiciones no dicen lo mismo, toma como referencia la versión más restrictiva hasta verificar.
          </li>
        </ul>
      </div>
    </article>
  )
}
