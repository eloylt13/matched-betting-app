import type { Metadata } from 'next'
import CalculadoraClient from './CalculadoraClient'

export const metadata: Metadata = {
  title: 'Calculadora Matched Betting España — Oddsmatcher y Dutcher | IAPredictHub',
  description: 'Calculadora gratuita de matched betting para España. Oddsmatcher y Dutcher con 5 modos de cálculo.',
}

export default function CalculadoraPage() {
  return <CalculadoraClient />
}
