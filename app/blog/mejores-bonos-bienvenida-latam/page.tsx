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
      </div>
    </article>
  )
}
