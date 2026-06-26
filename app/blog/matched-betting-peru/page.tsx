import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Matched betting en Perú: bonos de apuestas y calculadora | IAPredictHub',
  description:
    'Guía para entender cómo revisar bonos de apuestas en Perú, qué condiciones comprobar y cómo usar una calculadora antes de empezar.',
}

const casasPeru = [
  {
    href: '/casas/betano-pe',
    nombre: 'Betano Perú',
    descripcion:
      'Ficha disponible en IAPredictHub como casa a revisar. Comprueba siempre la promoción vigente y sus condiciones antes de activar cualquier bono.',
  },
  {
    href: '/casas/betsson-pe',
    nombre: 'Betsson Perú',
    descripcion:
      'Ficha disponible en IAPredictHub como casa a revisar. Las condiciones deben comprobarse en la ficha y en la web de la casa antes de depositar.',
  },
] as const

const condiciones = [
  'Tipo de bono y si aplica realmente a deportes.',
  'Depósito mínimo necesario para activar la promoción.',
  'Cuota mínima exigida para que una apuesta compute.',
  'Rollover o volumen de apuesta requerido.',
  'Mercados válidos y mercados excluidos.',
  'Plazo para activar, apostar y liberar el bono.',
  'Métodos de retirada disponibles y posibles restricciones.',
  'Requisitos de verificación de identidad y cuenta.',
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

export default function MatchedBettingPeruPage() {
  return (
    <article className="mx-auto flex max-w-2xl flex-col gap-6 pb-8">
      <time dateTime="2026-06-26" className="text-xs text-stone-400">
        26 de junio de 2026
      </time>

      <h1 className="text-2xl font-bold leading-snug tracking-tight text-stone-800">
        Matched betting en Perú: cómo funcionan los bonos de apuestas y por dónde empezar
      </h1>

      <div className="flex flex-col gap-4 text-sm leading-relaxed text-stone-700">
        <p>
          Si estás en Perú y quieres entender el matched betting, el primer paso no es buscar una cifra
          llamativa, sino aprender a leer las condiciones de cada bono. En este mercado pueden existir
          promociones interesantes, pero su valor real depende de reglas que deben comprobarse antes de
          registrar una operación.
        </p>

        <p>
          Esta guía está pensada como punto de partida educativo: explica qué revisar, cómo usar una
          calculadora y por qué conviene tratar cualquier resultado como estimación orientativa. No es una
          comparativa de importes ni una promesa de resultado.
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
          El matched betting usa cálculos para cubrir una apuesta promocional y estimar qué ocurre en cada
          escenario posible. La idea es reducir la dependencia del acierto deportivo: antes de apostar,
          introduces cuotas, tipo de bono e importes en una calculadora para ver la exposición y el posible
          resultado neto.
        </p>

        <p>
          En LATAM puede no funcionar igual que en España o Reino Unido. La disponibilidad de casas,
          métodos de retirada, productos de cobertura, monedas y términos promocionales varía por país y
          puede cambiar entre campañas. Por eso una ficha interna ayuda a ordenar la revisión, pero no
          sustituye la lectura de la promoción vigente en la web de la casa.
        </p>

        <h2 className="mt-2 text-lg font-semibold text-stone-800">
          Por qué en Perú hay que revisar condiciones antes de calcular
        </h2>
        <p>
          En Perú hay fichas disponibles en IAPredictHub, pero las condiciones finales de cada promoción
          deben verificarse antes de activar nada. Si no puedes confirmar depósito mínimo, cuota mínima,
          rollover, plazo o mercados válidos, el cálculo queda incompleto y lo prudente es esperar.
        </p>

        <p>
          Las condiciones pueden cambiar por usuario, campaña o fecha. También puede haber diferencias entre
          una landing comercial, el área privada y los términos completos. Cuando haya duda, toma como
          referencia la regla más restrictiva y confirma el dato dentro de la casa.
        </p>

        <h2 className="mt-2 text-lg font-semibold text-stone-800">
          Flujo recomendado para empezar
        </h2>
        <ol className="list-inside list-decimal space-y-2 pl-1 text-stone-600">
          <li>
            <strong>Elegir una casa disponible en Perú.</strong> Empieza por fichas con ruta interna y
            revisa que puedas acceder desde tu cuenta y tu ubicación.
          </li>
          <li>
            <strong>Leer las condiciones.</strong> Comprueba tipo de bono, depósito mínimo, cuota mínima,
            rollover, mercados válidos, plazo y retirada antes de mover saldo.
          </li>
          <li>
            <strong>Calcular la cobertura.</strong> Usa la{' '}
            <Link href="/calculadora" className="font-medium text-purple-600 hover:text-purple-700">
              calculadora
            </Link>{' '}
            para obtener una estimación orientativa de la exposición y del resultado posible.
          </li>
          <li>
            <strong>Ejecutar con control.</strong> No avances si una cuota cambia, si no entiendes el saldo
            necesario o si alguna regla promocional no está clara.
          </li>
          <li>
            <strong>Registrar el resultado.</strong> Guarda fecha, casa, tipo de bono, cuotas, importes,
            estado de verificación y saldo final para revisar el proceso.
          </li>
        </ol>

        <h2 className="mt-2 text-lg font-semibold text-stone-800">
          Casas disponibles en IAPredictHub para Perú
        </h2>
        <p>
          Estas son casas a revisar, con fichas disponibles en IAPredictHub. No publiques una decisión solo
          con el nombre de la casa: revisa siempre la promoción vigente y las condiciones completas antes de
          activar un bono.
        </p>

        <div className="grid grid-cols-1 gap-3">
          {casasPeru.map((casa) => (
            <Link
              key={casa.href}
              href={casa.href}
              className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm transition-colors hover:border-purple-200 hover:bg-purple-50/40"
            >
              <h3 className="font-semibold text-stone-800">{casa.nombre}</h3>
              <p className="mt-2 text-xs leading-relaxed text-stone-500">{casa.descripcion}</p>
              <p className="mt-3 text-xs font-semibold text-purple-700">Condiciones pendientes de comprobar antes de activar</p>
            </Link>
          ))}
        </div>

        <h2 className="mt-2 text-lg font-semibold text-stone-800">
          Qué condiciones mirar antes de activar un bono
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-1 text-stone-600">
          {condiciones.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 className="mt-2 text-lg font-semibold text-stone-800">
          Cómo usar la calculadora sin sobreinterpretar el resultado
        </h2>
        <p>
          La calculadora sirve para ordenar cuotas, importes y escenarios antes de ejecutar. Introduce los
          datos reales de la promoción que tienes delante, revisa la exposición y trata el resultado como
          estimación orientativa. Si el bono tiene rollover, mercados excluidos o reglas incompletas, anota
          esas limitaciones antes de decidir.
        </p>

        <p>
          También conviene repetir el cálculo justo antes de apostar. Las cuotas pueden moverse, una casa
          puede limitar mercados y una promoción puede dejar de aplicar si no cumples una condición pequeña.
          Si el cálculo y las condiciones no encajan, lo responsable es no seguir.
        </p>

        <h2 className="mt-2 text-lg font-semibold text-stone-800">Errores comunes</h2>
        <ul className="list-inside list-disc space-y-2 pl-1 text-stone-600">
          <li>Activar un bono sin leer los términos completos.</li>
          <li>Usar una estimación antigua como si siguiera vigente.</li>
          <li>Olvidar la verificación de identidad antes de retirar.</li>
          <li>Dar por válido un mercado que la promoción excluye.</li>
          <li>No registrar cambios de cuota, comisiones o saldo disponible.</li>
        </ul>

        <div className="mt-2 rounded-2xl border border-purple-100 bg-purple-50 p-5">
          <p className="font-semibold text-stone-800">
            Empieza por revisar las fichas, confirma las condiciones vigentes y calcula cada cobertura antes
            de ejecutar.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/casas"
              className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-700"
            >
              Ver casas
            </Link>
            <Link
              href="/calculadora"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-stone-700 ring-1 ring-inset ring-stone-200 transition-colors hover:bg-stone-50"
            >
              Abrir calculadora
            </Link>
            <Link
              href="/casas/betano-pe"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-stone-700 ring-1 ring-inset ring-stone-200 transition-colors hover:bg-stone-50"
            >
              Revisar Betano Perú
            </Link>
            <Link
              href="/casas/betsson-pe"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-stone-700 ring-1 ring-inset ring-stone-200 transition-colors hover:bg-stone-50"
            >
              Revisar Betsson Perú
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
