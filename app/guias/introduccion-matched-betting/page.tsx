import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Introducción al Matched Betting en España | IAPredictHub',
  description:
    'Aprende qué es el matched betting, cómo funciona la cobertura de apuestas con Betfair Exchange y cuánto dinero necesitas para empezar a ganar con bonos en España.',
}

export default function IntroduccionMatchedBettingPage() {
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
            <span className="text-sm text-stone-500">Primeros pasos</span>
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
                  📘
                </span>
                <div>
                  <h1
                    className="font-bold text-white leading-tight mb-3"
                    style={{ fontSize: '1.75rem' }}
                  >
                    Introducción al Matched Betting
                  </h1>
                  <p className="text-stone-300 leading-relaxed" style={{ fontSize: '1rem' }}>
                    Entiende cómo funciona el sistema de cobertura para convertir bonos de bienvenida
                    en dinero real, sin depender del resultado de ningún partido.
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
                  .guia-html blockquote { border-left: 3px solid #10b981; padding: 0.75rem 1rem; margin: 1.5rem 0; color: #57534e; background: #f0fdf4; border-radius: 0 0.5rem 0.5rem 0; }
                `}</style>

                <div className="guia-html">

                  <h2>1. ¿Qué es el Matched Betting?</h2>
                  <p>
                    Bienvenido a IAPredictHub. Estás a punto de aprender una técnica matemática que
                    permite generar ingresos extra aprovechando los bonos que regalan las casas de
                    apuestas (Bookmakers) para captar clientes.
                  </p>
                  <p>
                    Aunque al principio pueda parecer complejo, en realidad es un proceso mecánico.{' '}
                    <strong>No es juego de azar</strong>. No dependemos de la suerte ni de
                    &quot;acertar&quot; quién gana un partido.
                  </p>

                  <h3>La Lógica del Sistema</h3>
                  <p>
                    El objetivo es liberar los bonos y convertirlos en dinero real. Para hacerlo sin
                    riesgo, realizamos siempre dos apuestas opuestas en cada evento:
                  </p>
                  <ol>
                    <li>
                      <strong>A Favor (Bookmaker):</strong> Apostamos a que un resultado ocurre
                      (ej. Gana España).
                    </li>
                    <li>
                      <strong>En Contra (Exchange):</strong> Apostamos a que ese mismo resultado{' '}
                      <strong>NO</strong> ocurre (ej. España NO gana).
                    </li>
                  </ol>
                  <p>
                    Al cubrir todas las posibilidades, el resultado del partido se vuelve irrelevante.
                    Pase lo que pase, recuperamos nuestro dinero y desbloqueamos el bono, obteniendo
                    un beneficio matemático.
                  </p>

                  <h2>2. ¿Cuánto dinero necesito para empezar?</h2>
                  <p>
                    No necesitas una gran inversión, pero sí un &quot;capital de trabajo&quot;
                    (Bankroll) para cubrir las apuestas en el Exchange. Este dinero no se gasta,
                    simplemente se mueve de un sitio a otro.
                  </p>
                  <ul>
                    <li>
                      <strong>Mínimo (~50€):</strong> Podrás completar las ofertas, pero irás más
                      lento porque tendrás que esperar a que terminen los partidos para reutilizar
                      el dinero.
                    </li>
                    <li>
                      <strong>Recomendado (~150€ - 200€):</strong> Te permitirá hacer varias ofertas
                      simultáneamente y crecer mucho más rápido.
                    </li>
                  </ul>

                  <h2>3. Herramientas Necesarias</h2>
                  <p>
                    En IAPredictHub utilizamos herramientas profesionales para automatizar el proceso:
                  </p>
                  <ul>
                    <li>
                      <strong>Oddsmatcher:</strong> Rastrea miles de partidos para decirte dónde es
                      más rentable apostar.
                    </li>
                    <li>
                      <strong>Calculadora:</strong> Te dice el importe exacto a apostar para
                      equilibrar la operación.
                    </li>
                    <li>
                      <strong>Profit Tracker:</strong> Tu hoja de contabilidad para registrar las
                      ganancias.
                    </li>
                  </ul>

                  <h2>4. Requisitos Básicos</h2>
                  <ul>
                    <li>Ser mayor de 18 años.</li>
                    <li>Residir en España (para esta guía).</li>
                    <li>DNI/NIE en vigor (para verificar las cuentas).</li>
                    <li>Cuenta bancaria o método de pago a tu nombre.</li>
                  </ul>

                  <h2>5. Conclusión</h2>
                  <p>
                    El Matched Betting no es dinero mágico, es constancia y método. Si sigues las
                    guías paso a paso, el resultado es garantizado.
                  </p>
                  <blockquote>
                    <strong>⚠ IMPORTANTE:</strong> Nunca te saltes un paso ni intentes
                    &quot;adivinar&quot;. Si tienes dudas, consulta antes de operar.
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
                href="/guias/inicio/introduccion-matched-betting.pdf"
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
