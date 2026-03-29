import type { Metadata } from 'next'
import CalculadoraClient from './CalculadoraClient'

export const metadata: Metadata = {
  title: 'Calculadora de Matched Betting Gratis | Oddsmatcher y Dutcher | IAPredictHub',
  description: 'Calcula stakes, lay bets y beneficios en modos Apuesta-Recibe, Free Bet, Reembolso y Dutcher. Calculadora gratuita para el mercado español.',
}

export default function CalculadoraPage() {
  return <CalculadoraClient />
}
