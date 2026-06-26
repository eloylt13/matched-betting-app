import type { Metadata } from 'next'
import GuiaPage from '../../[categoria]/[slug]/page'

export const metadata: Metadata = {
  title: 'Cuánto se puede ganar en LATAM | IAPredictHub',
  description:
    'Una visión prudente del potencial de los bonos en LATAM, país por país y sin sumar cifras no verificadas.',
}

export default function CuantoSePuedeGanarLatamPage() {
  return (
    <GuiaPage
      params={Promise.resolve({
        categoria: 'primeros-pasos',
        slug: 'cuanto-se-puede-ganar-latam',
      })}
    />
  )
}
