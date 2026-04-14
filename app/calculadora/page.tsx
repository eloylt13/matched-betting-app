import type { Metadata } from 'next'
import { Suspense } from 'react'
import CalculadoraClient, { type CalculadoraPrefill } from './CalculadoraClient'

type CalculadoraSearchParams = {
  [key: string]: string | string[] | undefined
}

function getSearchParam(
  searchParams: CalculadoraSearchParams | undefined,
  key: keyof CalculadoraPrefill,
) {
  if (!searchParams) {
    return undefined
  }

  const value = searchParams[key]

  if (Array.isArray(value)) {
    return value[0]
  }

  return value
}

function isModoClasica(value: string | undefined): value is NonNullable<CalculadoraPrefill['modo']> {
  return value === 'dinero-real' || value === 'apuesta-gratis' || value === 'bonos' || value === 'rollover' || value === 'reembolso'
}

function isRefundType(value: string | undefined): value is NonNullable<CalculadoraPrefill['refundType']> {
  return value === 'cash' || value === 'freebet'
}

function mapCurrency(value: string | undefined): CalculadoraPrefill['currency'] {
  if (value === 'EUR') return '€'
  if (value === 'USD') return 'USD'
  if (value === 'MXN') return 'MXN'
  if (value === 'COP') return 'COP'
  if (value === 'CLP') return 'CLP'
  if (value === 'PEN') return 'PEN'
  return undefined
}

export const metadata: Metadata = {
  title: 'Calculadora de Matched Betting España | Soporte también para LATAM | IAPredictHub',
  description:
    'Calculadora de matched betting para calcular stake, lay stake, liability, beneficio estimado, freebet, reembolso, rollover y dutcher. Pensada principalmente para España, con soporte también para usuarios de LATAM.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default async function CalculadoraPage({
  searchParams,
}: {
  searchParams?: Promise<CalculadoraSearchParams>
}) {
  const resolvedSearchParams = await searchParams
  const modo = getSearchParam(resolvedSearchParams, 'modo')
  const refundType = getSearchParam(resolvedSearchParams, 'refundType')
  const prefill: CalculadoraPrefill = {
    modo: isModoClasica(modo) ? modo : undefined,
    stake: getSearchParam(resolvedSearchParams, 'stake'),
    backOdds: getSearchParam(resolvedSearchParams, 'backOdds'),
    layOdds: getSearchParam(resolvedSearchParams, 'layOdds'),
    commission: getSearchParam(resolvedSearchParams, 'commission'),
    bookmaker: getSearchParam(resolvedSearchParams, 'bookmaker'),
    refundType: isRefundType(refundType) ? refundType : undefined,
    refundAmount: getSearchParam(resolvedSearchParams, 'refundAmount'),
    currency: mapCurrency(getSearchParam(resolvedSearchParams, 'currency')),
  }

  return (
    <>
      {/* Contenido estático para indexación */}
      <div className="sr-only">
        <h1>Calculadora de Matched Betting para España con soporte también para LATAM</h1>
        <p>
          Herramienta de matched betting pensada principalmente para España y utilizable también en LATAM para
          calcular coberturas, conversión de bonos y beneficio estimado en apuestas promocionales y estrategias
          con exchange.
        </p>
        <h2>Qué puedes calcular con esta calculadora</h2>
        <ul>
          <li>Stake recomendado, lay stake y liability para apuestas con dinero real</li>
          <li>Beneficio estimado y pérdida calificante antes de desbloquear una promoción</li>
          <li>Conversión de freebet en dinero real con cobertura optimizada</li>
          <li>Valor de bonos con reembolso o apuestas sin riesgo</li>
          <li>Progreso y coste estimado de promociones con rollover</li>
          <li>Dutcher para repartir stakes en varios resultados y asegurar retorno</li>
        </ul>
        <h2>Modos incluidos</h2>
        <p>
          La calculadora incluye modos para dinero real, free bet, bono sin riesgo, reembolso, rollover y
          dutcher, con campos adaptados para introducir cuotas, stake, comisión del exchange y condiciones de
          cada oferta.
        </p>
        <h2>Para quién está pensada</h2>
        <p>
          Está orientada sobre todo a usuarios que aplican matched betting en España, pero también resulta útil
          para perfiles de LATAM que quieren estimar stake, cobertura y rentabilidad de promociones similares
          con sus propias cuotas y mercados disponibles.
        </p>
      </div>
      <Suspense fallback={null}>
        <CalculadoraClient initialPrefill={prefill} />
      </Suspense>
    </>
  )
}
