import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Matched betting en Colombia: bonos de apuestas y calculadora | IAPredictHub',
  description:
    'Guía para entender cómo revisar bonos de apuestas en Colombia, qué casas mirar primero y cómo usar una calculadora antes de activar una promoción.',
}

const casasColombia = [
  {
    href: '/casas/sportium-co',
    nombre: 'Sportium Colombia',
    estimacion: '8 USD como estimación orientativa conservadora',
    descripcion:
      'Opción principal revisable. La auditoría encontró una promoción "Dobla tu 1er Depósito hasta $50.000", tipo freebet/apuesta gratis tras requisito previo, cuota mínima 1.50, apuesta de al menos 2x el primer depósito hasta máximo $100.000, plazo de 30 días desde el registro y freebet con caducidad de 7 días.',
    nota: 'Revisa la promoción vigente antes de activar.',
  },
  {
    href: '/casas/wplay-co',
    nombre: 'Wplay Colombia',
    descripcion:
      'Wplay Colombia aparece como ficha disponible, pero las condiciones concretas no pudieron revalidarse en la auditoría por bloqueo de acceso.',
    nota: 'No actives una promoción si no puedes comprobar condiciones, retirada y términos actuales.',
  },
] as const

const condicionesColombia = [
  'Tipo de bono: rollover, freebet, apuesta protegida o requisito previo.',
  'Importe real necesario para activar la promoción y saldo que queda expuesto.',
  'Cuota mínima exigida para que una apuesta compute.',
  'Rollover o volumen de apuesta requerido antes de retirar.',
  'Plazos para registrarse, depositar, apostar, liberar saldo y usar una freebet.',
  'Mercados válidos, restricciones por deporte y posibles exclusiones.',
  'Métodos de depósito y retirada disponibles para tu cuenta en Colombia.',
  'Verificación de identidad y documentos necesarios antes de mover importes relevantes.',
] as const

const erroresComunes = [
  'Confundir el bono máximo anunciado con beneficio real.',
  'No leer si el rollover aplica sobre deposito, bono o ambos.',
  'Olvidar la caducidad de una freebet después de liberarla.',
  'No verificar métodos de retirada antes de depositar.',
  'Usar una casa sin revisar país, enlace disponible y promoción vigente.',
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

export default function MatchedBettingColombiaPage() {
  return (
    <article className="mx-auto flex max-w-2xl flex-col gap-6 pb-8">
      <time dateTime="2026-06-26" className="text-xs text-stone-400">
        26 de junio de 2026
      </time>

      <h1 className="text-2xl font-bold leading-snug tracking-tight text-stone-800">
        Matched betting en Colombia: bonos de apuestas, casas y calculadora
      </h1>

      <div className="flex flex-col gap-4 text-sm leading-relaxed text-stone-700">
        <p>
          Colombia merece una revisión específica porque las promociones, los importes, los plazos y los
          métodos de retirada pueden cambiar por país, campaña o usuario. Una ficha ayuda a ordenar la
          investigación, pero nunca sustituye la lectura de los términos vigentes dentro de la casa.
        </p>

        <p>
          Esta guía explica cómo revisar bonos de apuestas en Colombia desde un enfoque educativo y prudente:
          qué condiciones mirar primero, por qué el importe nominal del bono no equivale al beneficio real y
          cómo usar una calculadora antes de activar una promoción.
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
          El matched betting aplicado a bonos consiste en analizar una promoción, calcular una cobertura y
          estimar qué ocurre en distintos escenarios antes de apostar. La decisión no debe basarse en una
          corazonada deportiva, sino en datos verificados: cuota, importe, requisito del bono, plazo y saldo
          necesario.
        </p>

        <p>
          En Colombia pueden aparecer bonos con rollover, freebets, apuestas protegidas o requisitos previos
          antes de liberar una recompensa promocional. Cada formato cambia el cálculo, por eso conviene
          entender la mecánica exacta antes de usar saldo real.
        </p>

        <h2 className="mt-2 text-lg font-semibold text-stone-800">
          Por qué no basta con mirar el importe máximo del bono
        </h2>
        <p>
          El importe máximo anunciado suele ser la parte más visible, pero no indica por sí solo cuánto valor
          puede tener una promoción. Un bono puede exigir rollover, una cuota mínima concreta, mercados
          específicos, plazos cortos o una retirada condicionada a verificaciones adicionales.
        </p>

        <p>
          Por eso cualquier cifra debe tratarse como estimación orientativa. El resultado real depende de las
          cuotas que encuentres, de si el mercado computa, de las reglas vigentes y de que puedas completar
          todos los pasos sin incumplir condiciones.
        </p>

        <h2 className="mt-2 text-lg font-semibold text-stone-800">
          Condiciones clave que revisar en Colombia
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-1 text-stone-600">
          {condicionesColombia.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 className="mt-2 text-lg font-semibold text-stone-800">
          Casas que se pueden revisar en IAPredictHub
        </h2>
        <p>
          Estas fichas son el punto de partida disponible para Colombia dentro de IAPredictHub. Antes de
          registrar una cuenta o depositar, confirma que la promoción sigue activa para tu usuario, que el
          enlace corresponde al país correcto y que los términos actuales coinciden con lo revisado.
        </p>

        <div className="grid grid-cols-1 gap-3">
          {casasColombia.map((casa) => (
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
          Cómo usar la calculadora antes de activar una promoción
        </h2>
        <p>
          La{' '}
          <Link href="/calculadora" className="font-medium text-purple-600 hover:text-purple-700">
            calculadora
          </Link>{' '}
          sirve para introducir cuotas, importes y tipo de bono con datos reales. Primero confirma las
          condiciones, después calcula la exposición y solo entonces decide si la promoción tiene sentido para
          tu saldo y tu tolerancia al riesgo.
        </p>

        <p>
          Si la cuota cambia, si no sabes si el mercado computa o si falta información sobre retirada,
          recalcula o deja la operación pendiente. La calculadora ordena escenarios, pero no corrige términos
          incompletos ni cambios posteriores de la promoción.
        </p>

        <h2 className="mt-2 text-lg font-semibold text-stone-800">Errores comunes</h2>
        <ul className="list-inside list-disc space-y-2 pl-1 text-stone-600">
          {erroresComunes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="mt-2 rounded-2xl border border-purple-100 bg-purple-50 p-5">
          <p className="font-semibold text-stone-800">
            Revisa condiciones vigentes, calcula con datos actuales y avanza solo si entiendes el requisito
            completo.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/casas/sportium-co"
              className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-700"
            >
              Revisar Sportium Colombia
            </Link>
            <Link
              href="/casas/wplay-co"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-stone-700 ring-1 ring-inset ring-stone-200 transition-colors hover:bg-stone-50"
            >
              Revisar Wplay Colombia
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
