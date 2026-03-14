import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidad · IAPredictHub Matched Betting',
  description: 'Política de privacidad de IAPredictHub Matched Betting. Información sobre el tratamiento de datos personales.',
  robots: { index: false, follow: false },
}

export default function PrivacidadPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-stone-400 hover:text-stone-600 transition-colors mb-10"
      >
        ← Volver a la landing
      </Link>

      <h1 className="font-playfair text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
        Política de Privacidad
      </h1>
      <p className="text-sm text-stone-400 mb-10">Última actualización: marzo de 2026</p>

      <div className="space-y-8 text-sm text-stone-600 leading-relaxed">

        <section>
          <h2 className="text-base font-semibold text-stone-800 mb-2">1. Responsable del tratamiento</h2>
          <p>
            El responsable del tratamiento de los datos es el titular del proyecto{' '}
            <strong>IAPredictHub Matched Betting</strong>, con domicilio en España.
            Puede contactar a través de Telegram:{' '}
            <a href="https://t.me/Elte13" target="_blank" rel="noopener noreferrer"
              className="text-emerald-600 hover:text-emerald-700 underline">
              t.me/Elte13
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-stone-800 mb-2">2. Datos que se recogen</h2>
          <p>
            Esta aplicación web <strong>no requiere registro</strong> para su uso. La herramienta
            funciona completamente en el navegador del usuario, almacenando el progreso personal
            de forma local mediante <code className="bg-stone-100 px-1 rounded text-xs">localStorage</code>,
            sin que ningún dato de uso se transmita a servidores propios.
          </p>
          <p className="mt-3">
            El único dato personal que puede recopilarse es la <strong>dirección de correo electrónico</strong>,
            y únicamente si el usuario decide suscribirse voluntariamente al boletín de novedades a
            través del formulario habilitado en la landing. Este formulario está gestionado por el
            servicio externo <strong>Formspree</strong> (formspree.io), sujeto a su propia política
            de privacidad.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-stone-800 mb-2">3. Finalidad del tratamiento</h2>
          <p>
            El correo electrónico recogido mediante el formulario de suscripción se utilizará
            exclusivamente para:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-stone-500">
            <li>Enviar comunicaciones sobre novedades de la herramienta</li>
            <li>Informar sobre nuevas guías o funcionalidades añadidas</li>
          </ul>
          <p className="mt-3">
            No se realizará ningún tratamiento de perfilado, publicidad ni cesión a terceros
            con fines comerciales.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-stone-800 mb-2">4. Base legal</h2>
          <p>
            La base legal para el tratamiento del email es el <strong>consentimiento expreso</strong>
            del usuario al cumplimentar y enviar el formulario de suscripción voluntaria
            (art. 6.1.a del RGPD).
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-stone-800 mb-2">5. Conservación de datos</h2>
          <p>
            Los datos se conservarán mientras el usuario no solicite su supresión. Para solicitar
            la baja de la lista de novedades o la eliminación de sus datos, puede contactar
            directamente a través de Telegram.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-stone-800 mb-2">6. Derechos del usuario</h2>
          <p>
            De acuerdo con el RGPD (UE 2016/679) y la LOPDGDD, el usuario tiene derecho a:
            acceso, rectificación, supresión, portabilidad, limitación del tratamiento y oposición.
            Puede ejercer estos derechos contactando por Telegram o presentando reclamación ante
            la Agencia Española de Protección de Datos (aepd.es).
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-stone-800 mb-2">7. Servicios de terceros</h2>
          <p>
            Este sitio utiliza los siguientes servicios de terceros que pueden tratar datos de navegación:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-stone-500">
            <li>
              <strong>Vercel Analytics</strong> — Analítica de rendimiento web anónima.
              Consulta la política de privacidad de{' '}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer"
                className="text-emerald-600 underline">Vercel, Inc.</a>
            </li>
            <li>
              <strong>Formspree</strong> — Gestión del formulario de email.
              Consulta la política de{' '}
              <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer"
                className="text-emerald-600 underline">Formspree</a>
            </li>
          </ul>
        </section>

      </div>

      <div className="mt-12 pt-6 border-t border-stone-100 flex flex-wrap gap-4 text-xs text-stone-400">
        <Link href="/legal/aviso" className="hover:text-stone-600 transition-colors">Aviso legal</Link>
        <Link href="/legal/cookies" className="hover:text-stone-600 transition-colors">Política de cookies</Link>
        <Link href="/" className="hover:text-stone-600 transition-colors">Inicio</Link>
      </div>
    </div>
  )
}
