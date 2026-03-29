import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Módulo 2: Estrategia Apuesta y Recibe (Bet & Get) | IAPredictHub',
  description:
    'Aprende la estrategia Apuesta y Recibe paso a paso: cómo desbloquear el bono de bienvenida con la apuesta calificante y convertir la freebet en dinero real con la calculadora.',
}

export default function ModuloApuestaYRecibePage() {
  return (
    <div className="min-h-screen bg-[#F5F3EE]">
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-w-3xl mx-auto px-4 py-10">

          {/* Breadcrumb */}
          <div className="mb-6">
            <a href="/guias" className="text-sm text-stone-400 hover:text-stone-600 transition-colors">
              Guías
            </a>
            <span className="text-sm text-stone-300 mx-2">/</span>
            <span className="text-sm text-stone-500">Módulos</span>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">

            {/* Header */}
            <div
              className="px-8 py-10"
              style={{ background: 'linear-gradient(135deg, #12112A 0%, #2A1F3D 100%)' }}
            >
              <div className="flex items-start gap-5">
                <span style={{ fontSize: '3rem', lineHeight: 1, flexShrink: 0, marginTop: '4px' }}>
                  🎯
                </span>
                <div>
                  <h1
                    className="font-bold text-white leading-tight mb-3"
                    style={{ fontSize: '1.75rem' }}
                  >
                    Módulo 2: Estrategia Apuesta y Recibe (Bet &amp; Get)
                  </h1>
                  <p className="text-stone-300 leading-relaxed" style={{ fontSize: '1rem' }}>
                    La estrategia más utilizada para empezar: apuesta con dinero real, recibe una
                    freebet y conviértela en dinero efectivo con cobertura en Betfair Exchange.
                  </p>
                </div>
              </div>
            </div>

            {/* Contenido */}
            <div className="px-8 py-10" style={{ position: 'relative' }}>

              {/* Marca de agua */}
              <div
                style={{
                  position: 'absolute', inset: 0, display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  pointerEvents: 'none', userSelect: 'none', zIndex: 0,
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0.06, transform: 'rotate(-25deg)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo.png" alt="" style={{ width: '220px', height: '220px', objectFit: 'contain' }} />
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: '#1a1a2e', marginTop: '0.5rem', fontFamily: 'Georgia, serif', letterSpacing: '-0.01em' }}>
                    IAPredictHub
                  </div>
                </div>
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <style>{`
                  .guia-html h2 { font-size: 1.2rem; font-weight: 700; color: #1c1917; margin-top: 2.5rem; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 2px solid #f0ede8; }
                  .guia-html h3 { font-size: 1rem; font-weight: 600; color: #292524; margin-top: 1.75rem; margin-bottom: 0.5rem; }
                  .guia-html p { font-size: 0.95rem; line-height: 1.8; color: #57534e; margin-bottom: 1rem; }
                  .guia-html ul, .guia-html ol { padding-left: 1.5rem; margin-bottom: 1.25rem; }
                  .guia-html li { font-size: 0.95rem; line-height: 1.8; color: #57534e; margin-bottom: 0.4rem; }
                  .guia-html strong { color: #1c1917; font-weight: 600; }
                  .guia-html a { color: #059669; text-decoration: none; }
                  .guia-html a:hover { text-decoration: underline; }
                  .guia-html blockquote { border-left: 3px solid #10b981; padding: 0.75rem 1rem; margin: 1.5rem 0; color: #57534e; background: #f0fdf4; border-radius: 0 0.5rem 0.5rem 0; }
                  .guia-html .warning { border-left: 3px solid #f59e0b; padding: 0.75rem 1rem; margin: 1.5rem 0; color: #57534e; background: #fffbeb; border-radius: 0 0.5rem 0.5rem 0; }
                  .guia-html .bloque { background: #fafaf9; border: 1px solid #e7e5e4; border-radius: 0.75rem; padding: 1rem 1.25rem; margin: 1.25rem 0; }
                  .guia-html .bloque-title { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #78716c; margin-bottom: 0.5rem; }
                `}</style>

                <div className="guia-html">

                  <h2>1. Introducción</h2>
                  <p>
                    Esta es la estrategia reina para empezar a construir tu capital. La mecánica es
                    sencilla: la casa de apuestas te ofrece un bono a condición de que realices
                    primero una apuesta con tu dinero.
                  </p>
                  <ul>
                    <li>
                      <strong>Ejemplo:</strong> &quot;Apuesta 10€ y recibe 10€ en apuestas gratis&quot;.
                    </li>
                  </ul>
                  <p>
                    A partir de ahora, usarás la{' '}
                    <a href="/calculadora">Calculadora Web IAPredictHub</a> para que las matemáticas
                    trabajen por ti.
                  </p>

                  <h2>2. Paso 1: La Apuesta Calificante (Desbloquear el Bono)</h2>
                  <p>
                    El primer paso es realizar la apuesta con dinero real para que te entreguen el
                    bono.
                  </p>

                  <ol>
                    <li>
                      <strong>Buscar el Evento:</strong> Necesitamos un partido con cuotas similares.
                      <ul>
                        <li>
                          Usa el <a href="/herramientas/oddsmatcher">Oddsmatcher de IAPredictHub</a>{' '}
                          para encontrar los mejores emparejamientos.
                        </li>
                        <li>
                          <em>Objetivo:</em> Busca un evento donde la Cuota Back (Bookmaker) y la
                          Cuota Lay (Betfair) sean muy parecidas.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Calcular con la Calculadora:</strong>
                      <div className="bloque">
                        <div className="bloque-title">BLOQUE 1: CUALIFICANTE (Dinero Real)</div>
                        <ul>
                          <li><strong>Back Stake:</strong> El dinero que pide la oferta (ej. 10€).</li>
                          <li><strong>Cuota Back:</strong> La cuota de la casa de apuestas.</li>
                          <li><strong>Cuota Lay:</strong> La cuota rosa de Betfair Exchange.</li>
                          <li><strong>Comisión:</strong> Tu comisión de Betfair (ej. 2% o 5%).</li>
                        </ul>
                        <p style={{ marginBottom: 0 }}>
                          La calculadora mostrará automáticamente el resultado en &quot;Lay Stake&quot;.
                        </p>
                      </div>
                    </li>
                    <li>
                      <strong>Apostar:</strong>
                      <ul>
                        <li>Realiza la apuesta <strong>A Favor</strong> en el Bookmaker.</li>
                        <li>
                          Realiza la apuesta <strong>En Contra</strong> en Betfair por la cantidad
                          exacta que te indica la calculadora.
                        </li>
                      </ul>
                    </li>
                  </ol>

                  <div className="warning">
                    <strong>⚠ IMPORTANTE:</strong> Revisa el valor de &quot;Riesgo&quot; en la
                    calculadora. Ese es el dinero que debes tener disponible en Betfair para que te
                    acepten la apuesta.
                  </div>

                  <h2>3. Paso 2: Convertir el Bono en Dinero (Monetizar)</h2>
                  <p>
                    Una vez tengas el bono (Freebet) en tu cuenta, toca convertirlo en efectivo.
                  </p>

                  <ol>
                    <li>
                      <strong>Buscar el Evento:</strong> Vuelve al Oddsmatcher. Ahora busca cuotas
                      más altas (generalmente superiores a 2.0 o 2.5). Cuanto más alta la cuota,
                      más dinero limpio sacarás del bono.
                    </li>
                    <li>
                      <strong>Calcular la Ganancia:</strong>
                      <div className="bloque">
                        <div className="bloque-title">BLOQUE 2: FREE BET (SNR)</div>
                        <ul>
                          <li>Introduce el valor del bono (ej. 10€) en &quot;Back Stake&quot;.</li>
                          <li>Introduce las nuevas cuotas.</li>
                          <li>La calculadora te mostrará la <strong>Ganancia Neta</strong> asegurada.</li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <strong>Apostar:</strong> Repite el proceso — apuesta el bono A Favor en la
                      casa y cubre En Contra en Betfair con el nuevo importe que indica la
                      calculadora.
                    </li>
                  </ol>

                  <h2>4. Conclusión</h2>
                  <p>
                    Gracias a la calculadora, has convertido un bono virtual en dinero real en tu
                    cuenta bancaria. Has eliminado el azar de la ecuación.
                  </p>
                  <blockquote>
                    <strong>Recuerda:</strong> La clave está en usar cuotas altas al monetizar la
                    freebet — cuanto más alta la cuota lay, mayor porcentaje del bono recuperas
                    en efectivo.
                  </blockquote>

                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-5 border-t border-stone-100 bg-stone-50 flex items-center justify-between flex-wrap gap-3">
              <a
                href="/guias"
                className="text-sm font-medium text-stone-500 hover:text-stone-800 transition-colors"
              >
                ← Volver a guías
              </a>
              <a
                href="/guias/modulos/modulo-2-apuesta-y-recibe.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #12112A 0%, #2A1F3D 100%)', color: 'white' }}
              >
                ⬇ Descargar PDF
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
