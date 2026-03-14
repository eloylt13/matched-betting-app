import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Cookies · IAPredictHub Matched Betting',
  description: 'Política de cookies de IAPredictHub Matched Betting. Información sobre las cookies técnicas y de analítica utilizadas.',
  robots: { index: false, follow: false },
}

export default function CookiesPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-stone-400 hover:text-stone-600 transition-colors mb-10"
      >
        ← Volver a la landing
      </Link>

      <h1 className="font-playfair text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
        Política de Cookies
      </h1>
      <p className="text-sm text-stone-400 mb-10">Última actualización: marzo de 2026</p>

      <div className="space-y-8 text-sm text-stone-600 leading-relaxed">

        <section>
          <h2 className="text-base font-semibold text-stone-800 mb-2">1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo
            del usuario para recordar preferencias, sesiones o datos de navegación. Este sitio hace
            un uso muy limitado de cookies, orientado únicamente al funcionamiento técnico y la
            analítica de rendimiento.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-stone-800 mb-2">2. Cookies propias</h2>
          <p>
            Este sitio web <strong>no establece cookies propias</strong> para identificación,
            seguimiento o publicidad.
          </p>
          <p className="mt-2">
            El progreso del usuario dentro de la aplicación se almacena en{' '}
            <code className="bg-stone-100 px-1 rounded text-xs">localStorage</code> del navegador,
            que no es una cookie y no se transmite a ningún servidor.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-stone-800 mb-2">3. Cookies de terceros</h2>

          <div className="overflow-x-auto mt-3">
            <table className="w-full text-xs border border-stone-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-stone-50 text-stone-500 text-left">
                  <th className="px-3 py-2 font-semibold border-b border-stone-200">Cookie / Tecnología</th>
                  <th className="px-3 py-2 font-semibold border-b border-stone-200">Proveedor</th>
                  <th className="px-3 py-2 font-semibold border-b border-stone-200">Tipo</th>
                  <th className="px-3 py-2 font-semibold border-b border-stone-200">Finalidad</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr>
                  <td className="px-3 py-2.5 font-mono text-stone-700">_vercel_analytics</td>
                  <td className="px-3 py-2.5">Vercel, Inc.</td>
                  <td className="px-3 py-2.5">
                    <span className="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full font-medium">Analítica</span>
                  </td>
                  <td className="px-3 py-2.5 text-stone-500">Medición anónima de visitas y rendimiento del sitio.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-stone-500">
            Vercel Analytics está configurado para no recopilar datos personales identificables.
            Los datos de analítica son agregados y anónimos. Consulta la{' '}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer"
              className="text-emerald-600 underline">política de privacidad de Vercel</a>{' '}
            para más información.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-stone-800 mb-2">4. Cookies publicitarias</h2>
          <p>
            Este sitio <strong>no utiliza cookies publicitarias</strong> ni instala tecnologías de
            seguimiento para fines de publicidad comportamental o retargeting.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-stone-800 mb-2">5. Cómo gestionar las cookies</h2>
          <p>
            Puedes configurar tu navegador para rechazar o eliminar cookies en cualquier momento.
            Ten en cuenta que deshabilitar las cookies técnicas puede afectar al funcionamiento
            de algunos elementos del sitio.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-stone-500">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">Chrome</a></li>
            <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">Firefox</a></li>
            <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">Safari</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-stone-800 mb-2">6. Actualizaciones</h2>
          <p>
            Esta política puede actualizarse en caso de que se incorporen nuevos servicios o
            tecnologías. La fecha de última actualización figura al inicio del documento.
          </p>
        </section>

      </div>

      <div className="mt-12 pt-6 border-t border-stone-100 flex flex-wrap gap-4 text-xs text-stone-400">
        <Link href="/legal/aviso" className="hover:text-stone-600 transition-colors">Aviso legal</Link>
        <Link href="/legal/privacidad" className="hover:text-stone-600 transition-colors">Política de privacidad</Link>
        <Link href="/" className="hover:text-stone-600 transition-colors">Inicio</Link>
      </div>
    </div>
  )
}
