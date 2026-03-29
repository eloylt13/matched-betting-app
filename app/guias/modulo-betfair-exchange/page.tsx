import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Módulo 1: Cómo usar Betfair Exchange | IAPredictHub',
  description:
    'Guía paso a paso para usar Betfair Exchange en matched betting. Aprende a colocar apuestas lay (en contra), entender el riesgo (liability) y la liquidez del mercado.',
}

export default function ModuloBetfairExchangePage() {
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
                  🔄
                </span>
                <div>
                  <h1
                    className="font-bold text-white leading-tight mb-3"
                    style={{ fontSize: '1.75rem' }}
                  >
                    Módulo 1: Cómo usar Betfair Exchange
                  </h1>
                  <p className="text-stone-300 leading-relaxed" style={{ fontSize: '1rem' }}>
                    Domina la herramienta más importante del matched betting: el mercado de
                    intercambio P2P que te permite apostar en contra y eliminar el riesgo.
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
                  .guia-html em { font-style: italic; }
                  .guia-html blockquote { border-left: 3px solid #10b981; padding: 0.75rem 1rem; margin: 1.5rem 0; color: #57534e; background: #f0fdf4; border-radius: 0 0.5rem 0.5rem 0; }
                  .guia-html .warning { border-left: 3px solid #f59e0b; padding: 0.75rem 1rem; margin: 1.5rem 0; color: #57534e; background: #fffbeb; border-radius: 0 0.5rem 0.5rem 0; }
                  .guia-html .step-num { display: inline-flex; align-items: center; justify-content: center; width: 1.75rem; height: 1.75rem; border-radius: 50%; background: linear-gradient(135deg, #12112A 0%, #2A1F3D 100%); color: white; font-weight: 700; font-size: 0.85rem; margin-right: 0.5rem; flex-shrink: 0; }
                `}</style>

                <div className="guia-html">

                  <h2>1. Introducción: ¿Qué es el Exchange?</h2>
                  <p>
                    Bienvenido a la herramienta más importante del Matched Betting. Betfair Exchange
                    no es una casa de apuestas normal; es un <strong>mercado de intercambio (P2P)</strong>.
                  </p>
                  <ul>
                    <li>En una casa normal (Bookmaker), juegas contra la casa.</li>
                    <li>En el Exchange, juegas contra otros usuarios.</li>
                  </ul>
                  <p>
                    Esto nos permite hacer algo único: <strong>Apostar EN CONTRA (Lay)</strong>. Es
                    decir, apostar a que algo <em>no</em> sucede (ej: apostar a que el Real Madrid NO
                    gana). Esta es la clave para cubrir nuestras apuestas y eliminar el riesgo.
                  </p>

                  <h2>2. Paso a Paso: Tu Primera Operación</h2>

                  <h3>Paso 1: Acceso Correcto</h3>
                  <p>
                    Al entrar en Betfair, verás varias pestañas. Es vital que siempre hagas clic en{' '}
                    <strong>EXCHANGE</strong> (o &quot;Intercambio&quot;).
                  </p>
                  <div className="warning">
                    <strong>⚠ IMPORTANTE:</strong> Nunca uses el apartado &quot;Sportsbook&quot;,
                    ya que ahí no se puede apostar en contra.
                  </div>

                  <h3>Paso 2: Entendiendo los Colores</h3>
                  <p>Al entrar en un partido, verás dos columnas principales:</p>
                  <ul>
                    <li>
                      <strong>Columna Azul (A FAVOR):</strong> No la usaremos aquí (eso lo hacemos
                      en las casas de apuestas).
                    </li>
                    <li>
                      <strong>Columna Rosa (EN CONTRA):</strong> Esta es nuestra zona de trabajo.
                    </li>
                  </ul>

                  <h3>Paso 3: Colocar la Apuesta En Contra</h3>
                  <ol>
                    <li>Busca el evento (Ej. Leganés vs Las Palmas).</li>
                    <li>Haz clic en la <strong>casilla ROSA</strong> del equipo al que quieres apostar en contra.</li>
                    <li>
                      Abre la <a href="/calculadora" style={{ color: '#059669' }}>Calculadora IAPredictHub</a>{' '}
                      e introduce las cuotas para saber cuánto apostar.
                    </li>
                    <li>
                      Introduce el importe que te indique la calculadora en el recuadro
                      &quot;Importe&quot; (Stake) de Betfair.
                    </li>
                  </ol>

                  <h2>3. Conceptos Críticos: Riesgo y Liquidez</h2>

                  <h3>El Riesgo (Liability)</h3>
                  <p>
                    Cuando apuestas En Contra, no arriesgas la cantidad que apuestas, sino el{' '}
                    <strong>Riesgo</strong>.
                  </p>
                  <ul>
                    <li>
                      <em>Ejemplo:</em> Si apuestas 10€ En Contra a cuota 2.0, tu riesgo es 10€.
                      Pero si la cuota es 5.0, ¡tu riesgo será de 40€!
                    </li>
                    <li>Betfair retendrá este dinero de tu saldo temporalmente.</li>
                  </ul>

                  <h3>La Liquidez</h3>
                  <p>
                    Debajo de cada cuota verás un número pequeño en euros (ej: 135€).
                  </p>
                  <ul>
                    <li>
                      Esto es la <strong>Liquidez</strong>: el dinero máximo que puedes apostar
                      instantáneamente.
                    </li>
                    <li>
                      Si tu calculadora te dice que apuestes 50€, asegúrate de que haya más de 50€
                      debajo de la cuota rosa.
                    </li>
                  </ul>

                  <h2>4. Conclusión</h2>
                  <p>
                    Ahora dominas el motor del sistema. Ya sabes cómo anular el riesgo usando
                    Betfair y tu calculadora.
                  </p>
                  <blockquote>
                    <strong>Regla de Oro:</strong> Revisa siempre dos veces que estás apostando en
                    la columna <strong>ROSA</strong>.
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
                href="/guias/modulos/modulo-1-betfair.pdf"
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
