import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Casas de Apuestas con Reembolso en España 2026 — Comparativa | IAPredictHub',
  description:
    'Comparativa actualizada de las mejores casas de apuestas con bono de reembolso en España 2026. Qué son las apuestas sin riesgo, cuándo convienen más que una freebet y qué mirar antes de activarlas.',
}

const casasReembolso = [
  {
    casa: 'Bwin',
    reembolso: 'hasta 100 €',
    deposito: '100 €',
    fases: 3,
    dificultad: 3,
    nota: 'Pack 3 fases con reembolsos progresivos (códigos DEP2 y DEP3). Mayor potencial global.',
    ganancia: 140,
  },
  {
    casa: 'Marca Apuestas',
    reembolso: 'hasta 200 €',
    deposito: '200 €',
    fases: 2,
    dificultad: 3,
    nota: 'Uno de los reembolsos más altos del mercado. Requiere saldo elevado en Betfair.',
    ganancia: 90,
  },
  {
    casa: 'Winamax',
    reembolso: 'hasta 150 € (150%)',
    deposito: '100 €',
    fases: 2,
    dificultad: 3,
    nota: 'Ratio excepcional: si pierdes 100 €, recibes freebet de 150 €.',
    ganancia: 70,
  },
  {
    casa: 'Yaass Casino',
    reembolso: 'hasta 100 €',
    deposito: '100 €',
    fases: 2,
    dificultad: 3,
    nota: 'Apuesta sin riesgo al 100 %. Casa de casino con sección deportiva.',
    ganancia: 70,
  },
  {
    casa: '888Sport',
    reembolso: 'hasta 100 €',
    deposito: '100 €',
    fases: 2,
    dificultad: 2,
    nota: 'Reembolso + 2 freebets de 5 € por registro. Freebets caducan en 4 días.',
    ganancia: 75,
  },
  {
    casa: 'Kirolbet',
    reembolso: 'hasta 100 €',
    deposito: 'Según T&C',
    fases: 2,
    dificultad: 2,
    nota: 'Reembolso 100 € + 50 tiradas gratis. Doble incentivo con dificultad baja.',
    ganancia: 60,
  },
  {
    casa: 'PokerStars Sports',
    reembolso: 'hasta 100 € (2 tramos)',
    deposito: 'Según T&C',
    fases: 2,
    dificultad: 3,
    nota: 'Seguro en dos tramos de 50 €. Ejecutar con paciencia entre fases.',
    ganancia: 60,
  },
  {
    casa: 'OlyBet',
    reembolso: 'hasta 25 € x2 (50%)',
    deposito: 'Según T&C',
    fases: 2,
    dificultad: 2,
    nota: 'Dos apuestas aseguradas al 50 %. Bono de entrada sin grandes requisitos.',
    ganancia: 35,
  },
  {
    casa: 'Interwetten',
    reembolso: 'hasta 50 €',
    deposito: '50 €',
    fases: 2,
    dificultad: 3,
    nota: 'Reembolso íntegro con rollover x3. Activar el bono ANTES de apostar, obligatorio.',
    ganancia: 35,
  },
]

function DificultadBadge({ nivel }: { nivel: number }) {
  const colores: Record<number, string> = {
    1: 'bg-emerald-100 text-emerald-700',
    2: 'bg-green-100 text-green-700',
    3: 'bg-amber-100 text-amber-700',
    4: 'bg-orange-100 text-orange-700',
    5: 'bg-red-100 text-red-700',
  }
  const etiquetas: Record<number, string> = {
    1: '1/5 — Muy fácil',
    2: '2/5 — Fácil',
    3: '3/5 — Media',
    4: '4/5 — Alta',
    5: '5/5 — Muy alta',
  }
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${colores[nivel]}`}>
      {etiquetas[nivel]}
    </span>
  )
}

export default function CasasReembolsoEspanaPage() {
  return (
    <article className="max-w-3xl mx-auto flex flex-col gap-6 pb-8">
      <time dateTime="2026-04-15" className="text-xs text-stone-400">
        15 de abril de 2026
      </time>

      <h1 className="text-2xl font-bold text-stone-800 tracking-tight leading-snug">
        Casas de apuestas con reembolso en España (2026): comparativa y guía práctica
      </h1>

      <div className="flex flex-col gap-4 text-sm text-stone-700 leading-relaxed">

        {/* ── Introducción ── */}
        <p>
          Los bonos de reembolso —también llamados <strong>apuesta sin riesgo</strong> o <em>seguro de primera
          apuesta</em>— son uno de los tipos de bono de bienvenida más habituales en las casas de apuestas
          reguladas en España. En esta guía encontrarás una comparativa actualizada de las casas que
          actualmente ofrecen este tipo de promoción, una explicación clara de cómo funcionan y los
          puntos que conviene revisar antes de activarlos.
        </p>
        <p>
          Como siempre, las condiciones de cada oferta pueden cambiar en cualquier momento.{' '}
          <strong>Consulta siempre los T&amp;C vigentes de cada casa antes de depositar.</strong>
        </p>

        {/* ── Sección 1 ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          ¿Qué es un bono de reembolso?
        </h2>
        <p>
          Un bono de reembolso funciona de la siguiente manera: realizas tu primera apuesta con dinero
          real y, <strong>si esa apuesta pierde</strong>, la casa te devuelve el importe apostado
          (total o parcialmente) en forma de freebet o crédito de bono. Si gana, cobras normalmente y
          el bono no entra en juego.
        </p>
        <p>
          Ejemplo práctico: depositas 100 € en una casa con reembolso del 100 % hasta 100 €. Apuestas
          esos 100 € a cuota 2.00. Si ganas, cobras 200 € brutos y listo. Si pierdes, la casa
          te devuelve 100 € en forma de apuesta gratis, que luego puedes convertir en dinero real.
        </p>
        <p>
          El término <em>apuesta sin riesgo</em> que usan las casas es algo engañoso: no es que no
          haya riesgo, sino que el riesgo está parcialmente cubierto por el bono. La pérdida
          máxima en el peor escenario sin cobertura sería el importe apostado menos el valor
          de conversión de la freebet. Con la técnica del{' '}
          <Link
            href="/blog/mejores-bonos-bienvenida-apuestas-espana"
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            matched betting
          </Link>
          , ese riesgo se reduce significativamente cubriendo el resultado contrario en Betfair Exchange.
        </p>

        {/* ── Sección 2 ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          ¿Cuándo encaja un reembolso mejor que una freebet directa?
        </h2>
        <p>
          Depende del perfil de cada usuario. En general, un reembolso puede ser más conveniente que
          un bono de tipo <em>apuesta y recibe</em> (bet &amp; get) en estas situaciones:
        </p>
        <ul className="list-disc list-inside space-y-2 text-stone-600 pl-1">
          <li>
            <strong>Cuando el ratio reembolso/depósito es muy alto.</strong> Un reembolso del 150 %
            (como el de Winamax) significa que si pierdes, recibes más en freebet de lo que apostaste.
            Eso no existe en un bet &amp; get estándar.
          </li>
          <li>
            <strong>Cuando el depósito mínimo es menor.</strong> Algunos reembolsos permiten empezar
            con cantidades más pequeñas que los grandes bet &amp; get, reduciendo el capital
            inicial necesario.
          </li>
          <li>
            <strong>Cuando quieres más control sobre el momento de activar el bono.</strong> En un
            reembolso, el bono solo se activa si pierdes. Si ganas, no usas el bono en absoluto
            y el proceso termina antes, con ganancias en dinero real.
          </li>
        </ul>
        <p>
          Por otro lado, los bonos de tipo <em>apuesta y recibe</em> son generalmente más sencillos de
          ejecutar porque la freebet llega independientemente del resultado, lo que simplifica la
          planificación. Si estás empezando, puede ser mejor comenzar por ellos. Puedes ver la
          comparativa completa de todos los tipos de bono en{' '}
          <Link href="/casas" className="text-purple-600 hover:text-purple-700 font-medium">
            el panel de casas de IAPredictHub
          </Link>
          .
        </p>

        {/* ── Sección 3: Tabla comparativa ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Comparativa de casas con reembolso en España (2026)
        </h2>
        <p>
          La tabla recoge todas las casas del proyecto con tipología <em>reembolso</em>, ordenadas
          por ganancia potencial estimada con matched betting. Los datos corresponden a las condiciones
          vigentes en el momento de actualización de esta guía y pueden variar.
        </p>

        <div className="overflow-x-auto rounded-xl border border-stone-200">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200">
                <th className="text-left px-3 py-3 font-semibold text-stone-700">Casa</th>
                <th className="text-left px-3 py-3 font-semibold text-stone-700">Reembolso</th>
                <th className="text-left px-3 py-3 font-semibold text-stone-700 hidden md:table-cell">Depósito</th>
                <th className="text-left px-3 py-3 font-semibold text-stone-700 hidden lg:table-cell">Notas</th>
                <th className="text-center px-3 py-3 font-semibold text-stone-700">Dificultad</th>
                <th className="text-right px-3 py-3 font-semibold text-stone-700">Ganancia est.</th>
              </tr>
            </thead>
            <tbody>
              {casasReembolso.map((c, i) => (
                <tr
                  key={c.casa}
                  className={`border-b border-stone-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'}`}
                >
                  <td className="px-3 py-2.5 font-medium text-stone-800 whitespace-nowrap">{c.casa}</td>
                  <td className="px-3 py-2.5 text-stone-600 whitespace-nowrap">{c.reembolso}</td>
                  <td className="px-3 py-2.5 text-stone-500 hidden md:table-cell whitespace-nowrap">{c.deposito}</td>
                  <td className="px-3 py-2.5 text-stone-500 hidden lg:table-cell">{c.nota}</td>
                  <td className="px-3 py-2.5 text-center">
                    <DificultadBadge nivel={c.dificultad} />
                  </td>
                  <td className="px-3 py-2.5 text-right font-semibold text-purple-700 whitespace-nowrap">
                    ~{c.ganancia} €
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-400 -mt-2">
          * Ganancias estimadas con matched betting a cuotas habituales de mercado. No son ingresos
          garantizados. Condiciones sujetas a cambio. Consulta siempre los T&amp;C vigentes de cada casa.
        </p>

        {/* ── Sección 4 ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Cómo funciona un reembolso con matched betting
        </h2>
        <p>
          El proceso básico de un reembolso con cobertura en Betfair tiene siempre la misma
          estructura en dos pasos:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-stone-600 pl-1">
          <li>
            <strong>Apuesta calificante:</strong> apuestas el importe requerido en la casa (por ejemplo,
            100 €) y cubres simultáneamente el resultado contrario en Betfair Exchange. Para
            calcular exactamente cuánto apostar en Betfair, usa la{' '}
            <Link href="/calculadora" className="text-purple-600 hover:text-purple-700 font-medium">
              calculadora de reembolso de IAPredictHub
            </Link>
            . El modo <em>Reembolso</em> de la calculadora tiene en cuenta el valor estimado de la
            freebet que recibirías si pierdes.
          </li>
          <li>
            <strong>Conversión de la freebet (si aplica):</strong> si la apuesta calificante pierde,
            recibes la freebet de reembolso. A continuación, la conviertes en dinero real con la
            calculadora en modo <em>Apuesta Gratis (SNR)</em>, buscando cuotas altas para maximizar
            la retención. Si la calificante gana, cobras en dinero real y el proceso termina.
          </li>
        </ol>
        <p>
          El objetivo de cubrir en Betfair no es ganar en el partido, sino que el resultado del
          evento sea irrelevante: obtienes un resultado parecido tanto si gana como si pierde la
          apuesta de la casa. Para entender la mecánica completa, consulta la{' '}
          <Link
            href="/guias/modulos/modulo-3-reembolso"
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            guía específica sobre bonos de reembolso en IAPredictHub →
          </Link>
        </p>

        {/* ── Sección 5 ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Qué mirar antes de activar un reembolso
        </h2>
        <p>
          No todos los reembolsos son iguales. Antes de depositar en cualquier casa, revisa
          estos puntos concretos en los términos y condiciones:
        </p>
        <ul className="list-disc list-inside space-y-2 text-stone-600 pl-1">
          <li>
            <strong>¿El reembolso es en freebet o en dinero real?</strong> La mayoría devuelven el
            importe en forma de apuesta gratis (freebet SNR), no en saldo retirable directamente.
            Esto significa que hay un segundo paso de conversión con su propio proceso.
          </li>
          <li>
            <strong>¿Hay cuota mínima para la apuesta calificante?</strong> Algunas casas exigen
            una cuota mínima (por ejemplo, 1.50 o 2.00) para que la apuesta sea válida y active
            el seguro. Apostar a cuota inferior anularía el bono.
          </li>
          <li>
            <strong>¿Cuánto tiempo tienes para usar la freebet?</strong> Los plazos más habituales
            son 4, 7 o 14 días desde que se acredita la freebet. Pasado ese tiempo, desaparece.
          </li>
          <li>
            <strong>¿Hay rollover sobre el bono recibido?</strong> Algunas casas (como Interwetten)
            aplican un multiplicador de rollover al bono de reembolso antes de poder retirar
            el saldo. Comprueba si lo hay y cuál es el multiplicador.
          </li>
          <li>
            <strong>¿Se requiere activar el bono manualmente?</strong> Casos como Interwetten o
            Bet365 requieren que vayas a la sección de bonos y pulses un botón antes de apostar.
            Si no lo haces, no recibes el reembolso aunque cumplas el resto de condiciones.
          </li>
          <li>
            <strong>¿Qué deportes y mercados son válidos?</strong> No todos los mercados de una casa
            cuentan como apuesta calificante para el reembolso. Suelen excluirse los mercados
            de sistemas, las apuestas combinadas con cuota muy baja, o deportes específicos.
          </li>
        </ul>

        {/* ── Sección 6 ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Errores comunes con los bonos de reembolso
        </h2>
        <ul className="list-disc list-inside space-y-2 text-stone-600 pl-1">
          <li>
            <strong>No activar el bono antes de apostar.</strong> En casas como Interwetten o
            algunos bonos de bet365, el bono debe activarse manualmente antes de realizar la
            apuesta calificante. Hacerlo después no tiene efecto retroactivo.
          </li>
          <li>
            <strong>Confundir el valor del reembolso con el beneficio final.</strong> Un reembolso
            de 100 € no se traduce directamente en 100 € de beneficio: la freebet recibida tiene
            una eficiencia de conversión de entre el 65 % y el 80 % con matched betting,
            dependiendo de la cuota y la comisión de Betfair.
          </li>
          <li>
            <strong>Usar cuotas demasiado bajas para la apuesta calificante.</strong> A cuotas
            bajas, la pérdida en la apuesta calificante (si no se cubre bien) puede ser mayor
            que el beneficio esperado del bono. Usa siempre la calculadora para calcular la
            cobertura óptima antes de apostar.
          </li>
          <li>
            <strong>No revisar si el reembolso es al 100 % o parcial.</strong> Algunos bonos
            devuelven el 50 % del importe perdido (como OlyBet), no el 100 %. El beneficio
            esperado varía considerablemente entre ambos tipos.
          </li>
          <li>
            <strong>Asumir que las condiciones siguen igual.</strong> Las casas pueden modificar
            o retirar sus promociones en cualquier momento. Verifica siempre las condiciones
            vigentes en la web de la casa, no en terceros, el mismo día que vayas a activar
            el bono.
          </li>
          <li>
            <strong>No tener saldo suficiente en Betfair.</strong> Los reembolsos grandes (200 €
            en Marca Apuestas, por ejemplo) requieren cubrir importes elevados en el Exchange.
            Asegúrate de tener el saldo necesario antes de colocar la apuesta de la casa.
          </li>
        </ul>

        {/* ── Sección 7: Casas destacadas ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Casas con reembolso recomendadas para empezar
        </h2>
        <p>
          Si es la primera vez que trabajas con un bono de reembolso, estas tres opciones tienen
          una relación razonable entre dificultad y beneficio esperado:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-1">
          {[
            {
              casa: '888Sport',
              ganancia: '~75 €',
              por: 'Dificultad 2/5. Proceso claro en dos fases. Reembolso 100 € + freebets de registro.',
            },
            {
              casa: 'Kirolbet',
              ganancia: '~60 €',
              por: 'Dificultad 2/5. Reembolso 100 € más 50 tiradas gratis. Doble incentivo con poco riesgo.',
            },
            {
              casa: 'OlyBet',
              ganancia: '~35 €',
              por: 'Dificultad 2/5. Reembolso en dos tramos pequeños. Ideal para practicar la mecánica.',
            },
          ].map((item) => (
            <div key={item.casa} className="bg-white border border-stone-100 rounded-xl p-4">
              <div className="flex justify-between items-start mb-1">
                <span className="font-semibold text-stone-800 text-sm">{item.casa}</span>
                <span className="text-purple-700 font-bold text-sm">{item.ganancia}</span>
              </div>
              <p className="text-xs text-stone-500">{item.por}</p>
            </div>
          ))}
        </div>

        <p>
          Para los bonos de mayor potencial (Bwin, Marca Apuestas, Winamax), se recomienda tener
          experiencia previa con al menos 3–4 bonos más sencillos antes de intentarlos. Consulta
          el estado de cada casa y las guías paso a paso en{' '}
          <Link href="/casas" className="text-purple-600 hover:text-purple-700 font-medium">
            el panel de casas →
          </Link>
        </p>

        {/* ── Sección 8: Conclusión ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Conclusión práctica
        </h2>
        <p>
          Los bonos de reembolso son una opción sólida dentro del matched betting, especialmente
          cuando el ratio reembolso/depósito es elevado o cuando el proceso de conversión es
          sencillo. No garantizan un beneficio fijo como un bet &amp; get puro, pero bien
          ejecutados —con cobertura en Betfair y calculadora en mano— ofrecen un margen de
          beneficio real con riesgo controlado.
        </p>
        <p>
          Lo más importante es revisar las condiciones actuales de cada casa antes de depositar,
          usar la calculadora para cada operación y no asumir que las condiciones de ayer siguen
          siendo las de hoy.
        </p>

      </div>

      {/* ── CTA final ── */}
      <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 flex flex-col items-start gap-3 mt-2">
        <p className="text-sm font-semibold text-stone-800">
          Gestiona tus bonos de reembolso con la calculadora y el seguimiento de casas de IAPredictHub — todo en un solo lugar.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/bienvenida"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Empezar con IAPredictHub →
          </Link>
          <Link
            href="/casas"
            className="inline-block bg-white border border-purple-200 hover:border-purple-400 text-purple-700 text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Ver todas las casas →
          </Link>
        </div>
      </div>

      {/* ── Artículos relacionados ── */}
      <aside className="bg-white rounded-2xl border border-stone-100 p-5">
        <h2 className="text-sm font-bold text-stone-800 mb-3">Artículos y guías relacionados</h2>
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              href="/guias/modulos/modulo-3-reembolso"
              className="text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              Módulo 3: cómo ejecutar un bono de reembolso paso a paso →
            </Link>
          </li>
          <li>
            <Link
              href="/blog/mejores-bonos-bienvenida-apuestas-espana"
              className="text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              Mejores bonos de bienvenida en casas de apuestas España 2026 →
            </Link>
          </li>
          <li>
            <Link
              href="/calculadora"
              className="text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              Calculadora de cobertura y freebet →
            </Link>
          </li>
          <li>
            <Link
              href="/casas"
              className="text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              Ver todas las casas y sus bonos de bienvenida →
            </Link>
          </li>
          <li>
            <Link
              href="/bienvenida"
              className="text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              Guía de bienvenida — por dónde empezar →
            </Link>
          </li>
        </ul>
      </aside>

      {/* ── Volver al blog ── */}
      <div className="pt-4 border-t border-stone-100">
        <Link
          href="/blog"
          className="text-sm text-stone-500 hover:text-stone-700 transition-colors"
        >
          ← Volver al blog
        </Link>
      </div>
    </article>
  )
}
