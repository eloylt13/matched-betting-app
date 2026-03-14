import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aviso Legal · IAPredictHub Matched Betting',
  description: 'Aviso legal de IAPredictHub Matched Betting. Información sobre el titular, finalidad del sitio y condiciones de uso.',
  robots: { index: false, follow: false },
}

export default function AvisoLegalPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-stone-400 hover:text-stone-600 transition-colors mb-10"
      >
        ← Volver a la landing
      </Link>

      <h1 className="font-playfair text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
        Aviso Legal
      </h1>
      <p className="text-sm text-stone-400 mb-10">Última actualización: marzo de 2026</p>

      <div className="prose prose-stone prose-sm max-w-none space-y-8 text-stone-600 leading-relaxed">

        <section>
          <h2 className="text-base font-semibold text-stone-800 mb-2">1. Titular del sitio web</h2>
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
            Sociedad de la Información y de Comercio Electrónico (LSSICE), se informa que este sitio
            web está operado por un particular bajo el proyecto <strong>IAPredictHub Matched Betting</strong>,
            con domicilio en España, accesible a través del subdominio facilitado por Vercel, Inc.
          </p>
          <p className="mt-2">
            Para cualquier consulta puede contactar a través de Telegram:{' '}
            <a href="https://t.me/Elte13" target="_blank" rel="noopener noreferrer"
              className="text-emerald-600 hover:text-emerald-700 underline">
              t.me/Elte13
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-stone-800 mb-2">2. Finalidad del sitio</h2>
          <p>
            IAPredictHub Matched Betting es una herramienta web de carácter <strong>educativo e informativo</strong>,
            orientada a facilitar el seguimiento y la comprensión del matched betting mediante calculadoras,
            guías en PDF y paneles de progreso personal.
          </p>
          <p className="mt-2">
            El contenido de este sitio no constituye asesoramiento financiero, de inversión ni de
            apuestas. El uso de la herramienta y la aplicación de las técnicas descritas es
            responsabilidad exclusiva del usuario.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-stone-800 mb-2">3. Condiciones de uso</h2>
          <p>
            El acceso y uso de este sitio implica la aceptación de las presentes condiciones.
            El usuario se compromete a hacer un uso lícito y responsable de los contenidos y herramientas,
            sin fines comerciales no autorizados ni en perjuicio de terceros.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-stone-800 mb-2">4. Propiedad intelectual</h2>
          <p>
            Los textos, guías, código y demás contenidos originales publicados en este sitio son
            propiedad de IAPredictHub Matched Betting. Queda prohibida su reproducción total o parcial
            sin autorización expresa.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-stone-800 mb-2">5. Exclusión de responsabilidad</h2>
          <p>
            IAPredictHub Matched Betting no garantiza la exactitud, integridad ni actualidad de la
            información publicada. El titular no se hace responsable de las decisiones tomadas por
            los usuarios a partir del contenido del sitio, ni de las posibles pérdidas derivadas de
            la práctica de las técnicas descritas.
          </p>
          <p className="mt-2 font-medium text-stone-700">
            Las apuestas deportivas conllevan riesgo económico. Apuesta con responsabilidad.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-stone-800 mb-2">6. Legislación aplicable</h2>
          <p>
            Este aviso legal se rige por la legislación española. Para cualquier controversia derivada
            del acceso o uso de este sitio, las partes se someten a los juzgados y tribunales españoles
            competentes.
          </p>
        </section>

      </div>

      <div className="mt-12 pt-6 border-t border-stone-100 flex flex-wrap gap-4 text-xs text-stone-400">
        <Link href="/legal/privacidad" className="hover:text-stone-600 transition-colors">Política de privacidad</Link>
        <Link href="/legal/cookies" className="hover:text-stone-600 transition-colors">Política de cookies</Link>
        <Link href="/" className="hover:text-stone-600 transition-colors">Inicio</Link>
      </div>
    </div>
  )
}
