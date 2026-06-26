import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Matched betting en Chile: bonos de apuestas y calculadora | IAPredictHub',
  description:
    'Guía para entender cómo revisar bonos de apuestas en Chile, qué condiciones comprobar y cómo usar una calculadora antes de activar una promoción.',
}

const casasChile = [
  {
    href: '/casas/novibet-cl',
    nombre: 'Novibet Chile',
    estimacion: '45 USD como estimación orientativa conservadora',
    descripcion:
      'Ficha revisable en IAPredictHub. La auditoría encontró un bono deportivo 100% hasta $100.000 CLP, depósito mínimo $5.000 CLP, cuota mínima 1.50, rollover x5 sobre depósito + bono y plazo de 60 días.',
    nota: 'Revisa la promoción vigente antes de activar.',
  },
  {
    href: '/casas/betano-cl',
    nombre: 'Betano Chile',
    descripcion:
      'Betano Chile aparece como ficha a revisar, pero las condiciones no pudieron comprobarse desde la auditoría por bloqueo de landing.',
    nota: 'No uses una promoción si no puedes validar país admitido, términos y retirada.',
  },
] as const

const condicionesChile = [
  'Condiciones completas de la promoción y posibles cambios por campaña.',
  'País admitido y acceso real desde tu ubicación y cuenta.',
  'Métodos de depósito y retirada disponibles para Chile.',
  'Rollover exigido y si aplica sobre depósito, bono o ambos.',
  'Cuota mínima que hace computar una apuesta para la promoción.',
  'Plazo para activar, apostar, liberar saldo promocional y retirar.',
  'Mercados válidos, mercados excluidos y restricciones por deporte.',
  'Verificación de identidad antes de mover importes relevantes.',
  'Situación regulatoria/local y cambios que puedan afectar a la disponibilidad.',
] as const

const erroresComunes = [
  'Confundir el bono máximo anunciado con beneficio real.',
  'No leer el rollover o calcularlo solo sobre una parte del requisito.',
  'Usar casas cuyo país admitido no está claro.',
  'Asumir que un enlace o una promoción sirve para Chile sin comprobarlo.',
  'No verificar métodos de retirada antes de depositar.',
] as const

const relatedLinks = [
  {
    href: '/blog/mejores-bonos-bienvenida-latam',
    title: 'Mejores bonos de bienvenida LATAM',
  },
  {
    href: '/blog/que-es-matched-betting-latam',
    title: 'Qué es el matched betting en LATAM',
  },
  {
    href: '/blog/que-es-una-freebet',
    title: 'Qué es una freebet',
  },
] as const

export default function MatchedBettingChilePage() {
  return (
    <article className="mx-auto flex max-w-2xl flex-col gap-6 pb-8">
      <time dateTime="2026-06-26" className="text-xs text-stone-400">
        26 de junio de 2026
      </time>

      <h1 className="text-2xl font-bold leading-snug tracking-tight text-stone-800">
        Matched betting en Chile: qué saber antes de usar bonos de apuestas
      </h1>

      <div className="flex flex-col gap-4 text-sm leading-relaxed text-stone-700">
        <p>
          Chile requiere una lectura especialmente prudente antes de usar bonos de apuestas. El marco
          regulatorio de apuestas online está en tramitación y debate, y la disponibilidad de promociones
          puede depender de la landing, la cuenta, el método de pago y los términos vigentes en cada momento.
        </p>

        <p>
          Esta guía explica cómo revisar una promoción desde un enfoque educativo. No es una comparativa
          agresiva de bonos ni una promesa de beneficio: la idea es aprender qué comprobar, cómo estimar una
          cobertura y cuándo conviene detenerse porque falta información.
        </p>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs leading-relaxed text-amber-900">
          <p className="font-semibold">Aviso importante</p>
          <p className="mt-1">
            Contenido dirigido a mayores de 18 años. Revisa siempre los términos de cada casa, apuesta solo
            dinero que puedas permitirte perder y detente si el juego deja de ser una actividad controlada.
          </p>
        </div>

        <h2 className="mt-2 text-lg font-semibold text-stone-800">
          Qué es el matched betting aplicado a bonos
        </h2>
        <p>
          El matched betting consiste en analizar una promoción, calcular una cobertura y estimar qué puede
          ocurrir en cada escenario antes de apostar. En lugar de depender solo del resultado deportivo, se
          introducen cuotas, importes y reglas del bono en una calculadora para entender exposición, saldo
          necesario y resultado posible.
        </p>

        <p>
          En LATAM puede no funcionar igual que en España o Reino Unido. Cambian las casas disponibles, las
          monedas, los métodos de retirada, los productos de cobertura y las condiciones promocionales. Por
          eso cualquier cálculo debe tratarse como estimación orientativa y revisarse con datos vigentes.
        </p>

        <h2 className="mt-2 text-lg font-semibold text-stone-800">
          Por qué no basta con mirar el importe del bono
        </h2>
        <p>
          El importe máximo de una promoción solo cuenta una parte de la historia. Un bono grande puede tener
          rollover alto, cuota mínima exigente, mercados limitados, plazos cortos o una retirada condicionada
          a verificaciones adicionales. Si una de esas piezas falta, el cálculo pierde valor práctico.
        </p>

        <p>
          Antes de activar, conviene leer la landing, los términos completos y el área de usuario. Si hay
          diferencias entre textos, usa la regla más restrictiva como referencia y evita avanzar hasta poder
          comprobar la promoción vigente.
        </p>

        <h2 className="mt-2 text-lg font-semibold text-stone-800">
          Condiciones clave que revisar en Chile
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-1 text-stone-600">
          {condicionesChile.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 className="mt-2 text-lg font-semibold text-stone-800">
          Casas que se pueden revisar en IAPredictHub
        </h2>
        <p>
          Estas fichas sirven como punto de partida para ordenar la revisión. No sustituyen la lectura de la
          promoción vigente dentro de la casa ni la comprobación de país admitido, pagos, retirada y términos.
        </p>

        <div className="grid grid-cols-1 gap-3">
          {casasChile.map((casa) => (
            <Link
              key={casa.href}
              href={casa.href}
              className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm transition-colors hover:border-purple-200 hover:bg-purple-50/40"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="font-semibold text-stone-800">{casa.nombre}</h3>
                {'estimacion' in casa ? (
                  <span className="self-start rounded-full bg-stone-100 px-2.5 py-1 text-xs font-semibold text-stone-700">
                    {casa.estimacion}
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-stone-500">{casa.descripcion}</p>
              <p className="mt-3 text-xs font-semibold text-purple-700">{casa.nota}</p>
            </Link>
          ))}
        </div>

        <h2 className="mt-2 text-lg font-semibold text-stone-800">
          Ejemplo conceptual con calculadora
        </h2>
        <p>
          Imagina que ya tienes delante una promoción válida para tu cuenta y has confirmado depósito
          mínimo, rollover, cuota mínima, plazo y mercados. El siguiente paso no es inventar cuotas: es abrir
          la{' '}
          <Link href="/calculadora" className="font-medium text-purple-600 hover:text-purple-700">
            calculadora
          </Link>{' '}
          y cargar los datos reales que encuentres en ese momento.
        </p>

        <p>
          La calculadora te ayuda a obtener una estimación orientativa de exposición y resultado posible. Si
          una cuota se mueve, si el mercado no computa o si el requisito de rollover no está claro, repite el
          cálculo o deja la promoción pendiente. El objetivo es decidir con información suficiente, no forzar
          una operación incompleta.
        </p>

        <h2 className="mt-2 text-lg font-semibold text-stone-800">Errores comunes</h2>
        <ul className="list-inside list-disc space-y-2 pl-1 text-stone-600">
          {erroresComunes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="mt-2 rounded-2xl border border-purple-100 bg-purple-50 p-5">
          <p className="font-semibold text-stone-800">
            Revisa primero las condiciones vigentes, calcula con datos reales y avanza solo si entiendes el
            requisito completo.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/casas/novibet-cl"
              className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-700"
            >
              Revisar Novibet Chile
            </Link>
            <Link
              href="/casas/betano-cl"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-stone-700 ring-1 ring-inset ring-stone-200 transition-colors hover:bg-stone-50"
            >
              Revisar Betano Chile
            </Link>
            <Link
              href="/calculadora"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-stone-700 ring-1 ring-inset ring-stone-200 transition-colors hover:bg-stone-50"
            >
              Abrir calculadora
            </Link>
          </div>
        </div>

        <aside className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-sm font-bold text-stone-800">Artículos relacionados</h2>
          <ul className="flex flex-col gap-2">
            {relatedLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-purple-600 transition-colors hover:text-purple-700"
                >
                  {item.title} -&gt;
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="border-t border-stone-100 pt-4">
        <Link href="/blog" className="text-sm text-stone-500 transition-colors hover:text-stone-700">
          &lt;- Volver al blog
        </Link>
      </div>
    </article>
  )
}
