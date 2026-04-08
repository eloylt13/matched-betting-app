import type { Metadata } from 'next'
import CalculadoraClient from './CalculadoraClient'

export const metadata: Metadata = {
  title: 'Calculadora de Matched Betting Gratis | Oddsmatcher y Dutcher | IAPredictHub',
  description: 'Calcula stakes, lay bets y beneficios en modos Apuesta-Recibe, Free Bet, Reembolso y Dutcher. Calculadora gratuita para España y LATAM en € y USD.',
}

export default function CalculadoraPage() {
  return (
    <>
      {/* Contenido estático para indexación */}
      <div className="sr-only">
        <h1>Calculadora de Matched Betting gratuita</h1>
        <p>
          Herramienta gratuita para calcular stakes, lay bets y beneficios en cada tipo de bono de bienvenida
          de casas de apuestas españolas. Compatible con Betfair Exchange.
        </p>
        <h2>Modos disponibles</h2>
        <ul>
          <li>Dinero real — calcula la pérdida calificante para desbloquear un bono</li>
          <li>Apuesta gratis (free bet) — convierte una free bet en beneficio real</li>
          <li>Bonos SR (sin riesgo) — calcula el beneficio neto de un bono sin riesgo</li>
          <li>Reembolso — calcula el valor esperado incluyendo el reembolso como free bet</li>
          <li>Rollover — calcula cuántas apuestas necesitas para liberar un bono con rollover</li>
          <li>Dutcher — calcula coberturas múltiples en el mismo evento para asegurar beneficio</li>
        </ul>
        <p>
          Introduce las cuotas del bookmaker y del exchange, el stake y la comisión de Betfair
          para obtener el stake lay óptimo y el beneficio estimado en cada escenario.
        </p>
      </div>
      <CalculadoraClient />
    </>
  )
}
