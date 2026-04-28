import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '¿Cuánto se puede ganar con Matched Betting en España? | IAPredictHub',
  description:
    'Tabla completa de bonos de bienvenida disponibles en casas de apuestas legales en España. Hasta 2.270€ estimados aplicando el método de cobertura sin riesgo.',
}

const BONOS: Array<{ casa: string; tipo: string; ganancia: number }> = [
  { casa: 'Sportium', tipo: 'Apuesta – Recibe', ganancia: 140 },
  { casa: 'DaznBet', tipo: 'Apuesta – Recibe', ganancia: 130 },
  { casa: 'Versus', tipo: 'Apuesta – Recibe', ganancia: 125 },
  { casa: 'Juegging', tipo: 'Apuesta – Recibe', ganancia: 100 },
  { casa: 'Retabet', tipo: 'Apuesta – Recibe', ganancia: 100 },
  { casa: 'Bet365', tipo: 'Apuesta – Recibe', ganancia: 65 },
  { casa: 'Zebet', tipo: 'Apuesta – Recibe', ganancia: 65 },
  { casa: 'Codere', tipo: 'Apuesta – Recibe', ganancia: 65 },
  { casa: 'Botemania', tipo: 'Apuesta – Recibe', ganancia: 35 },
  { casa: 'Paf', tipo: 'Apuesta – Recibe', ganancia: 14 },
  { casa: 'Betway', tipo: 'Reembolso', ganancia: 110 },
  { casa: 'William Hill', tipo: 'Reembolso', ganancia: 110 },
  { casa: 'Marathonbet', tipo: 'Reembolso', ganancia: 95 },
  { casa: 'MarcaApuestas', tipo: 'Reembolso', ganancia: 90 },
  { casa: 'Bwin', tipo: 'Reembolso', ganancia: 90 },
  { casa: 'Winamax', tipo: 'Reembolso', ganancia: 70 },
  { casa: 'Luckia', tipo: 'Reembolso', ganancia: 70 },
  { casa: 'Kirolbet', tipo: 'Reembolso', ganancia: 60 },
  { casa: '888sport', tipo: 'Reembolso', ganancia: 60 },
  { casa: 'PokerStars', tipo: 'Reembolso', ganancia: 60 },
  { casa: 'Aupabet', tipo: 'Reembolso', ganancia: 60 },
  { casa: 'Interwetten', tipo: 'Reembolso', ganancia: 35 },
  { casa: 'Casumo', tipo: 'Reembolso', ganancia: 30 },
  { casa: 'Olybet', tipo: 'Reembolso', ganancia: 20 },
  { casa: 'eBingo', tipo: 'Reembolso', ganancia: 12 },
  { casa: 'Pastón', tipo: 'Rollover', ganancia: 180 },
  { casa: 'Solcasino', tipo: 'Rollover', ganancia: 120 },
  { casa: 'Efbet', tipo: 'Rollover', ganancia: 65 },
  { casa: 'Goldenpark', tipo: 'Rollover', ganancia: 60 },
  { casa: 'Betsson', tipo: 'Rollover', ganancia: 60 },
  { casa: 'LeoVegas', tipo: 'Cuota Mejorada', ganancia: 34 },
]

const TIPO_COLOR: Record<string, string> = {
  'Apuesta – Recibe': 'bg-emerald-100 text-emerald-700',
  'Reembolso': 'bg-blue-100 text-blue-700',
  'Rollover': 'bg-amber-100 text-amber-700',
  'Cuota Mejorada': 'bg-purple-100 text-purple-700',
}

export default function CuantoSeGanaEspanaPage() {
  const total = BONOS.reduce((sum, b) => sum + b.ganancia, 0)

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
                  💰
                </span>
                <div>
                  <h1
                    className="font-bold text-white leading-tight mb-3"
                    style={{ fontSize: '1.75rem' }}
                  >
                    Potencial de Ganancias en España
                  </h1>
                  <p className="text-stone-300 leading-relaxed" style={{ fontSize: '1rem' }}>
                    Lista completa de bonos de bienvenida disponibles en casas legales en España
                    y su ganancia máxima estimada aplicando el método de cobertura.
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
                  .guia-html p { font-size: 0.95rem; line-height: 1.8; color: #57534e; margin-bottom: 1rem; }
                  .guia-html ul { padding-left: 1.5rem; margin-bottom: 1.25rem; }
                  .guia-html li { font-size: 0.95rem; line-height: 1.8; color: #57534e; margin-bottom: 0.4rem; }
                  .guia-html strong { color: #1c1917; font-weight: 600; }
                  .guia-html blockquote { border-left: 3px solid #10b981; padding: 0.75rem 1rem; margin: 1.5rem 0; color: #57534e; background: #f0fdf4; border-radius: 0 0.5rem 0.5rem 0; font-size: 0.9rem; }
                `}</style>

                <div className="guia-html">

                  <h2>1. El Objetivo: Las Ofertas de Bienvenida</h2>
                  <p>
                    En IAPredictHub somos directos. El objetivo de esta formación es enseñarte a
                    extraer el capital promocional que las casas de apuestas ofrecen para captar
                    nuevos clientes.
                  </p>
                  <p>
                    Estas promociones, conocidas como <strong>Bonos de Bienvenida</strong>, se
                    entregan una sola vez por persona. Al sumar los bonos de todas las casas legales
                    en España y aplicar nuestras matemáticas, generamos un capital acumulado muy
                    significativo.
                  </p>
                  <ul>
                    <li><strong>Ganancia Total Estimada:</strong> Hasta 2.270€.</li>
                    <li><strong>Tiempo Estimado:</strong> 1 - 2 meses (a tu ritmo).</li>
                    <li><strong>Riesgo:</strong> Nulo (aplicando estrictamente el método de cobertura).</li>
                  </ul>

                  <h2>2. Ofertas de Bonos Disponibles</h2>
                  <p>
                    A continuación tienes la lista completa de todas las oportunidades disponibles
                    actualmente. La columna <strong>Ganancia Máx.</strong> indica el beneficio limpio
                    estimado tras aplicar la estrategia perfecta.
                  </p>

                </div>

                {/* Tabla de bonos */}
                <div className="overflow-x-auto rounded-xl border border-stone-200 mt-2 mb-6">
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                    <thead>
                      <tr style={{ background: 'linear-gradient(135deg, #12112A 0%, #2A1F3D 100%)' }}>
                        <th style={{ padding: '0.75rem 1rem', textAlign: 'left', color: 'white', fontWeight: 600 }}>Casa de apuestas</th>
                        <th style={{ padding: '0.75rem 1rem', textAlign: 'left', color: 'white', fontWeight: 600 }}>Tipología</th>
                        <th style={{ padding: '0.75rem 1rem', textAlign: 'right', color: 'white', fontWeight: 600 }}>Ganancia Máx.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {BONOS.map((bono, i) => (
                        <tr
                          key={bono.casa}
                          style={{ borderTop: '1px solid #f0ede8', background: i % 2 === 0 ? '#ffffff' : '#fafaf9' }}
                        >
                          <td style={{ padding: '0.65rem 1rem', color: '#1c1917', fontWeight: 500 }}>{bono.casa}</td>
                          <td style={{ padding: '0.65rem 1rem' }}>
                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${TIPO_COLOR[bono.tipo] ?? 'bg-stone-100 text-stone-600'}`}>
                              {bono.tipo}
                            </span>
                          </td>
                          <td style={{ padding: '0.65rem 1rem', textAlign: 'right', color: '#059669', fontWeight: 700 }}>
                            {bono.ganancia}€
                          </td>
                        </tr>
                      ))}
                      <tr style={{ borderTop: '2px solid #e7e5e4', background: '#f5f3ff' }}>
                        <td colSpan={2} style={{ padding: '0.75rem 1rem', fontWeight: 700, color: '#1c1917', fontSize: '0.95rem' }}>
                          TOTAL ESTIMADO
                        </td>
                        <td style={{ padding: '0.75rem 1rem', textAlign: 'right', fontWeight: 800, color: '#7c3aed', fontSize: '1.1rem' }}>
                          {total.toLocaleString('es-ES')}€
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="guia-html">
                  <blockquote>
                    <strong>Nota:</strong> Las ganancias pueden variar ligeramente según la liquidez
                    del mercado y las cuotas disponibles en el momento exacto de apostar.
                  </blockquote>

                  <h2>3. Conclusión</h2>
                  <p>
                    Tienes delante una lista de tareas valorada en más de 2.000€. La clave no es la
                    rapidez, sino la precisión. Empecemos a trabajar una por una siguiendo el orden
                    de los módulos.
                  </p>
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
                href="/guias/inicio/cuanto-se-puede-ganar-espana.pdf"
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
