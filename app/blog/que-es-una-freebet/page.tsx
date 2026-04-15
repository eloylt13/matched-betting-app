import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '¿Qué es una freebet y cómo convertirla? Guía práctica | IAPredictHub',
  description:
    'Aprende qué es una freebet, los tipos más comunes (stake devuelto y stake no devuelto) y cómo convertirla en dinero real con la técnica del matched betting paso a paso.',
}

export default function QueEsUnaFreebetPage() {
  return (
    <article className="max-w-2xl mx-auto flex flex-col gap-6 pb-8">
      <time dateTime="2026-04-15" className="text-xs text-stone-400">
        15 de abril de 2026
      </time>

      <h1 className="text-2xl font-bold text-stone-800 tracking-tight leading-snug">
        ¿Qué es una freebet y cómo convertirla en dinero real?
      </h1>

      <div className="flex flex-col gap-4 text-sm text-stone-700 leading-relaxed">

        {/* ── Introducción ── */}
        <p>
          La freebet es uno de los conceptos más importantes del matched betting y, a la vez,
          uno de los que más dudas genera al principio. ¿Es dinero real? ¿Puedo retirarla
          directamente? ¿Por qué no cobro el importe completo cuando gana? En esta guía
          te explicamos qué es exactamente una freebet, cómo funciona, qué tipos existen y,
          sobre todo, cómo convertirla en dinero real de forma eficiente con la técnica del{' '}
          <Link
            href="/blog/que-es-matched-betting-espana"
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            matched betting
          </Link>
          .
        </p>

        {/* ── Sección 1 ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          ¿Qué es una freebet?
        </h2>
        <p>
          Una freebet (también llamada &quot;apuesta gratis&quot; o &quot;apuesta libre&quot;) es un crédito
          que una casa de apuestas te entrega para que realices una apuesta sin usar tu
          propio dinero. Si esa apuesta gana, cobras las ganancias; si pierde, no pierdes
          nada de tu bolsillo porque el dinero apostado era del bono.
        </p>
        <p>
          A priori suena perfecto, pero hay un detalle clave: <strong>cuando una freebet
          gana, la casa no te devuelve el importe que apostaste</strong>. Solo te paga
          las ganancias netas. Eso significa que una freebet de 20 € a cuota 3.00 te
          genera 40 € brutos si gana, pero cobras 40 − 20 = <strong>20 € netos</strong>,
          no 60 €.
        </p>
        <p>
          Esta diferencia es fundamental para entender por qué las freebets no se pueden
          retirar directamente: primero hay que &quot;convertirlas&quot; en dinero real, y para eso
          sirve el matched betting.
        </p>

        {/* ── Sección 2 ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Cómo funciona una freebet
        </h2>
        <p>
          El flujo básico de una freebet es el siguiente:
        </p>
        <ol className="list-decimal list-inside space-y-1 text-stone-600 pl-1">
          <li>La casa de apuestas te acredita la freebet en tu cuenta, normalmente tras completar una apuesta de calificación inicial.</li>
          <li>Seleccionas un evento deportivo y utilizas la freebet para apostar, igual que harías con dinero real.</li>
          <li>Si la apuesta <strong>gana</strong>: cobras solo las ganancias netas (cuota − 1) × importe de la freebet.</li>
          <li>Si la apuesta <strong>pierde</strong>: no pierdes nada, pero la freebet desaparece.</li>
        </ol>
        <p>
          El importe original de la freebet no aparece nunca en tu saldo disponible: solo
          se materializa si la apuesta gana y, aun así, únicamente en forma de las
          ganancias generadas. Por eso la estrategia para aprovecharla al máximo es elegir
          cuotas altas y cubrir el resultado contrario en Betfair Exchange.
        </p>

        {/* ── Sección 3 ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Tipos de freebet más comunes
        </h2>
        <p>
          No todas las freebets funcionan igual. La diferencia principal está en si el
          stake (el importe apostado) se devuelve o no cuando la apuesta gana.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          Freebet stake no devuelto (SNR)
        </h3>
        <p>
          Es el tipo más habitual en España. Cuando gana, cobras solo las ganancias netas:
          (cuota − 1) × importe de la freebet. El importe original del bono no se
          suma al pago. Una freebet SNR de 20 € a cuota 3.00 genera <strong>40 € netos</strong>{' '}
          si gana (20 × 2 = 40).
        </p>
        <p>
          En matched betting, la eficiencia de conversión de una freebet SNR oscila
          generalmente entre el <strong>65 % y el 80 %</strong> del valor nominal,
          dependiendo de la cuota y la comisión de Betfair. Es decir, una freebet de
          20 € SNR suele convertirse en unos 13–16 € en dinero real.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          Freebet stake devuelto (SR)
        </h3>
        <p>
          En este caso, cuando gana la apuesta, cobras las ganancias netas más el importe
          original de la freebet. Una freebet SR de 20 € a cuota 3.00 genera{' '}
          <strong>60 € brutos</strong> si gana (20 × 3 = 60, incluyendo el stake).
        </p>
        <p>
          Las freebets SR son más valiosas porque se comportan casi como dinero real.
          Su eficiencia de conversión es mayor, cercana al <strong>90–95 %</strong>
          del valor nominal. Son menos frecuentes, pero cuando aparecen conviene
          aprovecharlas con cuotas moderadas.
        </p>

        <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-stone-700 text-xs leading-loose">
          <p className="font-semibold mb-2">Resumen comparativo</p>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="font-semibold text-stone-500"></div>
            <div className="font-semibold text-stone-700">SNR</div>
            <div className="font-semibold text-stone-700">SR</div>
            <div className="text-stone-500 text-left">Freebet 20 € a cuota 3.00 — si gana</div>
            <div>40 €</div>
            <div>60 €</div>
            <div className="text-stone-500 text-left">Eficiencia conversión aprox.</div>
            <div>65–80 %</div>
            <div>90–95 %</div>
            <div className="text-stone-500 text-left">Frecuencia en bonos españoles</div>
            <div>Alta</div>
            <div>Baja</div>
          </div>
        </div>

        {/* ── Sección 4 ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Cómo convertir una freebet paso a paso
        </h2>
        <p>
          Convertir una freebet significa usar la técnica del{' '}
          <Link
            href="/guias/primeros-pasos/introduccion-matched-betting"
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            matched betting
          </Link>{' '}
          para transformar ese crédito de bono en dinero real disponible en tu cuenta
          bancaria. El proceso tiene siempre la misma estructura:
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          Paso 1: Comprueba las condiciones de la freebet
        </h3>
        <p>
          Antes de apostar, lee los términos del bono: cuota mínima requerida, deportes
          válidos, plazo de uso y si la freebet es SNR o SR. Cada casa tiene sus propias
          reglas y no cumplirlas puede anular el bono.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          Paso 2: Busca un evento con cuota alta y mercado líquido en Betfair
        </h3>
        <p>
          Para maximizar la eficiencia de una freebet SNR, necesitas cuotas altas
          (entre 3.00 y 6.00 es el rango habitual). A mayor cuota back, mayor porcentaje
          del bono recuperas, siempre que la cuota lay en Betfair sea similar.
          Usa el{' '}
          <Link
            href="/guias/primeros-pasos/calculadora-oddsmatcher"
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            buscador de cuotas de IAPredictHub
          </Link>{' '}
          para encontrar las mejores oportunidades.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          Paso 3: Calcula la cobertura con la calculadora
        </h3>
        <p>
          Antes de apostar, introduce en la{' '}
          <Link href="/calculadora" className="text-purple-600 hover:text-purple-700 font-medium">
            calculadora de freebet de IAPredictHub
          </Link>{' '}
          el importe de la freebet, la cuota back, la cuota lay y el tipo (SNR o SR).
          La calculadora te dirá exactamente cuánto apostar en Betfair para cubrir todos
          los resultados y cuánto dinero neto vas a obtener en cada escenario. No hagas
          esta operación de cabeza.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          Paso 4: Coloca las dos apuestas casi simultáneamente
        </h3>
        <p>
          Primero, usa la freebet en la casa de apuestas apostando a favor del resultado
          elegido. Inmediatamente después, coloca la apuesta lay en Betfair Exchange
          por el importe que te ha indicado la calculadora. Es importante que las cuotas
          no varíen significativamente entre una apuesta y la otra.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          Paso 5: Recoge el resultado
        </h3>
        <p>
          Cuando el evento termina, uno de los dos lados gana. En cualquier caso, el
          resultado neto es aproximadamente el porcentaje de conversión que te indicó
          la calculadora: si la apuesta de la casa gana, cobras en la casa y pierdes
          en Betfair; si pierde, cobras en Betfair. El saldo final queda disponible
          en ambas cuentas para retirarlo o reutilizarlo.
        </p>

        <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-stone-700 text-xs leading-loose">
          <p className="font-semibold mb-2">Ejemplo numérico: freebet SNR de 20 €</p>
          <ul className="list-disc list-inside space-y-0.5 pl-2">
            <li>Freebet back en casa: 20 € SNR a cuota 4.00</li>
            <li>Apuesta lay en Betfair: importe calculado a cuota 4.10 (comisión 5 %)</li>
            <li>Si gana la apuesta: cobras 60 € en casa (cuota − 1 × freebet), pierdes ~58 € en Betfair → neto ≈ +14 €</li>
            <li>Si pierde la apuesta: no cobras en casa, ganas ≈ +14 € en Betfair → neto ≈ +14 €</li>
          </ul>
          <p className="mt-2">
            <strong>Resultado neto en ambos casos: ≈ 14 € de los 20 € de freebet</strong>{' '}
            (conversión del 70 %).
          </p>
        </div>

        {/* ── Sección 5 ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Errores frecuentes al usar una freebet
        </h2>
        <p>
          Conocer los errores más habituales te evitará pérdidas innecesarias:
        </p>
        <ul className="list-disc list-inside space-y-2 text-stone-600 pl-1">
          <li>
            <strong>Usar cuotas demasiado bajas.</strong> A menor cuota back, menor es
            la eficiencia de conversión de una freebet SNR. Con cuotas de 1.50 o 2.00
            recuperas una fracción muy pequeña del bono. Busca siempre cuotas superiores
            a 3.00 para maximizar la conversión.
          </li>
          <li>
            <strong>No verificar si la freebet es SNR o SR.</strong> La diferencia afecta
            directamente al importe de cobertura que debes apostar en Betfair. Usar la
            calculadora con el tipo incorrecto puede dejarte descubierto o sobreapalancado.
          </li>
          <li>
            <strong>Olvidar comprobar la liquidez en Betfair.</strong> Si el mercado de
            Betfair tiene poco dinero disponible a la cuota deseada, puede que no puedas
            colocar la apuesta lay completa. Usa eventos populares como fútbol de
            primera división o tenis de Grand Slam.
          </li>
          <li>
            <strong>Apostar en momentos distintos.</strong> Si colocas la back y la lay
            con mucha diferencia de tiempo, las cuotas pueden haber cambiado y la
            cobertura ya no será exacta. Hazlas casi simultáneamente.
          </li>
          <li>
            <strong>No leer el plazo de uso.</strong> Las freebets suelen caducar en 7
            o 14 días desde que se acreditan. Si no las usas a tiempo, desaparecen
            sin posibilidad de recuperarlas.
          </li>
          <li>
            <strong>Intentar retirar la freebet directamente.</strong> Las freebets no son
            dinero disponible: son crédito para apostar. Solo se convierten en saldo
            retirable a través del proceso de conversión descrito arriba.
          </li>
        </ul>

        {/* ── Conclusión ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Conclusión práctica
        </h2>
        <p>
          Una freebet no es dinero en efectivo, pero con el proceso correcto puede
          convertirse en una cantidad real y retirable. La clave está en entender si
          es SNR o SR, elegir cuotas adecuadas, calcular bien la cobertura en Betfair
          y actuar con las dos apuestas al mismo tiempo.
        </p>
        <p>
          Si estás empezando, no intentes hacerlo de cabeza. La{' '}
          <Link href="/calculadora" className="text-purple-600 hover:text-purple-700 font-medium">
            calculadora de IAPredictHub
          </Link>{' '}
          está diseñada específicamente para este tipo de operaciones: introduce los
          datos del bono y te dice exactamente qué hacer y cuánto vas a obtener antes
          de arriesgar nada.
        </p>
        <p>
          Si todavía no conoces los fundamentos del matched betting, te recomendamos
          empezar por aquí:{' '}
          <Link
            href="/guias/primeros-pasos/introduccion-matched-betting"
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            Introducción al matched betting — guía completa →
          </Link>
        </p>

      </div>

      {/* ── CTA final ── */}
      <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 flex flex-col items-start gap-3 mt-2">
        <p className="text-sm font-semibold text-stone-800">
          ¿Tienes una freebet y no sabes cómo convertirla? Usa la calculadora gratuita
          de IAPredictHub y obtén el resultado exacto antes de apostar.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/calculadora"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Usar la calculadora de freebet →
          </Link>
          <Link
            href="/bienvenida"
            className="inline-block bg-white border border-purple-200 hover:border-purple-400 text-purple-700 text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Ver guía completa →
          </Link>
        </div>
      </div>

      {/* ── Artículos relacionados ── */}
      <aside className="bg-white rounded-2xl border border-stone-100 p-5">
        <h2 className="text-sm font-bold text-stone-800 mb-3">Artículos y guías relacionados</h2>
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              href="/blog/que-es-matched-betting-espana"
              className="text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              ¿Qué es el Matched Betting y cómo funciona en España? →
            </Link>
          </li>
          <li>
            <Link
              href="/guias/primeros-pasos/introduccion-matched-betting"
              className="text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              Introducción al matched betting — guía completa →
            </Link>
          </li>
          <li>
            <Link
              href="/guias/primeros-pasos/calculadora-oddsmatcher"
              className="text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              Cómo usar el buscador de cuotas (oddsmatcher) →
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
