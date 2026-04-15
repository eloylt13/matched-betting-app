import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mejores Bonos Apuesta y Recibe en España 2026 | IAPredictHub',
  description:
    'Comparativa de los mejores bonos apuesta y recibe (bet and get) disponibles en España en 2026. Freebets garantizadas, casas recomendadas para principiantes y guía para aprovecharlos sin errores.',
}

const casasApuestaYRecibe = [
  {
    casa: 'Sportium',
    bono: '2 × 100 € en freebets',
    deposito: '100 €',
    fragmentable: 'Sí',
    dificultad: 1,
    ganancia: 140,
    nota: 'El mejor apuesta y recibe del mercado español. Dos freebets SNR de 100 € con alta liquidez en Betfair.',
  },
  {
    casa: 'DaznBet',
    bono: '200 € en freebet',
    deposito: '200 €',
    fragmentable: 'No',
    dificultad: 2,
    ganancia: 130,
    nota: 'Freebet única de 200 € no fragmentable. Requiere una sola apuesta de cuota mín. 1.80 para activarla.',
  },
  {
    casa: 'RetaBet',
    bono: '150 € en freebet',
    deposito: '150 €',
    fragmentable: 'Sí',
    dificultad: 2,
    ganancia: 100,
    nota: 'Freebet garantizada SNR. Cuota mínima de calificación 1.80. Buen volumen en Betfair.',
  },
  {
    casa: 'Juegging',
    bono: 'Hasta 150 € en dos fases',
    deposito: '75 €',
    fragmentable: 'Sí',
    dificultad: 3,
    ganancia: 100,
    nota: 'Bono en dos fases. Depósito inicial más bajo que otras casas. Proceso bien documentado.',
  },
  {
    casa: 'Versus',
    bono: '100 € en freebet',
    deposito: '100 €',
    fragmentable: 'Sí',
    dificultad: 1,
    ganancia: 65,
    nota: 'Freebet instantánea al depositar. Sin condiciones complejas. Ideal para el primer bono.',
  },
  {
    casa: 'Codere',
    bono: 'Hasta 200 € en freebets escalonadas',
    deposito: '200 €',
    fragmentable: 'Sí',
    dificultad: 2,
    ganancia: 65,
    nota: 'Freebets en varios tramos. Proceso algo más largo pero sin dificultad técnica.',
  },
  {
    casa: 'Casino Gran Madrid',
    bono: 'Bono 50 % hasta 100 €',
    deposito: '100 €',
    fragmentable: 'Sí',
    dificultad: 3,
    ganancia: 62,
    nota: 'Cuota máxima de 3.00. Bono sobre el depósito con conversión estándar de freebet.',
  },
  {
    casa: 'Bet365',
    bono: 'Créditos de apuesta hasta 100 €',
    deposito: '100 €',
    fragmentable: 'Sí',
    dificultad: 1,
    ganancia: 60,
    nota: 'La casa más conocida. Créditos de apuesta estándar, muy documentados y sin sorpresas.',
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

export default function MejoresBonosApuestaYRecibePage() {
  return (
    <article className="max-w-3xl mx-auto flex flex-col gap-6 pb-8">
      <time dateTime="2026-04-15" className="text-xs text-stone-400">
        15 de abril de 2026
      </time>

      <h1 className="text-2xl font-bold text-stone-800 tracking-tight leading-snug">
        Mejores bonos apuesta y recibe en España (2026): freebets garantizadas comparadas
      </h1>

      <div className="flex flex-col gap-4 text-sm text-stone-700 leading-relaxed">

        {/* ── Introducción ── */}
        <p>
          Entre todos los tipos de bonos de bienvenida disponibles en las casas de apuestas españolas,
          los <strong>bonos apuesta y recibe</strong> —también llamados <em>bet and get</em> o freebet
          garantizada— son los más sencillos de aprovechar. La mecánica es directa: depositas, haces
          una apuesta de calificación y, independientemente del resultado, recibes una apuesta gratis
          (freebet) de valor equivalente. En esta guía encontrarás una comparativa de las mejores
          opciones disponibles en España en 2026, con datos reales y sin rodeos.
        </p>

        {/* ── Sección 1 ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          ¿Qué es un bono apuesta y recibe?
        </h2>
        <p>
          Un bono de tipo <strong>apuesta y recibe</strong> funciona así: la casa de apuestas te pide
          que realices un depósito mínimo y una primera apuesta (la &quot;apuesta de calificación&quot;) con
          una cuota determinada. Una vez que esa apuesta se resuelve —gane o pierda— la casa te
          acredita automáticamente una freebet por el valor pactado.
        </p>
        <p>
          La freebet es una <strong>apuesta gratis</strong>: si gana, cobras las ganancias (sin
          recuperar el importe de la freebet, que no es dinero real); si pierde, no has perdido
          nada de tu propio bolsillo. Esta asimetría es lo que hace que sean tan interesantes para
          el matched betting. Si quieres entender en detalle cómo funciona una freebet y los tipos
          existentes (SNR y SR), consulta:{' '}
          <Link
            href="/blog/que-es-una-freebet"
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            ¿Qué es una freebet y cómo convertirla en dinero real? →
          </Link>
        </p>
        <ul className="list-disc list-inside space-y-1 text-stone-600 pl-1">
          <li>La freebet se recibe <strong>independientemente del resultado</strong> de la calificación.</li>
          <li>No hay rollover: una vez convertida, el dinero es tuyo.</li>
          <li>El proceso completo suele completarse en uno o dos días.</li>
          <li>Son los bonos con <strong>menor riesgo de error</strong> para principiantes.</li>
        </ul>

        {/* ── Sección 2 ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Diferencia respecto a otros tipos de bonos
        </h2>
        <p>
          Es importante no confundir el apuesta y recibe con otros tipos de promociones que pueden
          parecer similares pero funcionan de forma distinta:
        </p>
        <div className="overflow-x-auto rounded-xl border border-stone-200 mt-1">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200">
                <th className="text-left px-3 py-3 font-semibold text-stone-700">Tipo de bono</th>
                <th className="text-left px-3 py-3 font-semibold text-stone-700">¿Cuándo recibes la freebet?</th>
                <th className="text-left px-3 py-3 font-semibold text-stone-700">¿Qué pasa si ganas la calificación?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-stone-100 bg-white">
                <td className="px-3 py-2.5 font-medium text-stone-800">Apuesta y recibe</td>
                <td className="px-3 py-2.5 text-stone-600">Siempre, ganes o pierdas</td>
                <td className="px-3 py-2.5 text-stone-500">Cobras la apuesta normal + recibes la freebet</td>
              </tr>
              <tr className="border-b border-stone-100 bg-stone-50/50">
                <td className="px-3 py-2.5 font-medium text-stone-800">
                  <Link href="/blog/casas-apuestas-reembolso-espana" className="text-purple-600 hover:text-purple-700 font-medium">Reembolso</Link>
                </td>
                <td className="px-3 py-2.5 text-stone-600">Solo si pierdes</td>
                <td className="px-3 py-2.5 text-stone-500">No hay freebet, solo cobras tu apuesta</td>
              </tr>
              <tr className="border-b border-stone-100 bg-white">
                <td className="px-3 py-2.5 font-medium text-stone-800">Rollover / depósito igualado</td>
                <td className="px-3 py-2.5 text-stone-600">Tras el depósito</td>
                <td className="px-3 py-2.5 text-stone-500">Debes apostar el bono X veces antes de retirar</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          El apuesta y recibe es el más predecible de los tres: sabes exactamente qué freebet vas
          a recibir antes de apostar, lo que facilita planificar la operación con la calculadora.
        </p>

        {/* ── Sección 3 ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Por qué son los mejores bonos para empezar
        </h2>
        <p>
          Si estás comenzando con el matched betting, los bonos apuesta y recibe tienen tres ventajas
          claras sobre los demás tipos:
        </p>
        <ul className="list-disc list-inside space-y-2 text-stone-600 pl-1">
          <li>
            <strong>Resultado predecible.</strong> Como recibes la freebet sí o sí, no hay
            incertidumbre sobre si el bono se activará. Puedes planificar la operación completa
            desde el principio.
          </li>
          <li>
            <strong>Sin requisitos de rollover.</strong> No hace falta hacer nada especial con
            la freebet después de recibirla: la apuestas una vez, cubres en Betfair y listo. El
            proceso es limpio y directo.
          </li>
          <li>
            <strong>Proceso corto.</strong> La mayoría se completa en dos pasos: la apuesta de
            calificación y la apuesta de la freebet. En total, entre 30 minutos y un día.
          </li>
          <li>
            <strong>Alta eficiencia en Betfair.</strong> Las casas con este tipo de bono suelen
            tener buena liquidez en los mercados habituales de fútbol y tenis, lo que facilita
            encontrar cuotas similares en Betfair para cubrir bien.
          </li>
        </ul>
        <p>
          Para entender en detalle cómo se convierte una freebet en dinero real, consulta la{' '}
          <Link href="/guias/modulos/modulo-2-apuesta-y-recibe" className="text-purple-600 hover:text-purple-700 font-medium">
            guía del módulo 2: apuesta y recibe
          </Link>
          , donde se explica el proceso paso a paso con ejemplos numéricos.
        </p>

        {/* ── Sección 4: Tabla comparativa ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Comparativa de bonos apuesta y recibe en España 2026
        </h2>
        <p>
          La siguiente tabla recoge las casas españolas que ofrecen actualmente bonos de tipo
          apuesta y recibe, ordenadas por ganancia potencial estimada con matched betting. Las
          condiciones pueden variar; consulta siempre los términos vigentes en cada casa antes
          de depositar.
        </p>

        <div className="overflow-x-auto rounded-xl border border-stone-200">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200">
                <th className="text-left px-3 py-3 font-semibold text-stone-700">Casa</th>
                <th className="text-left px-3 py-3 font-semibold text-stone-700 hidden sm:table-cell">Bono</th>
                <th className="text-left px-3 py-3 font-semibold text-stone-700 hidden md:table-cell">Depósito</th>
                <th className="text-left px-3 py-3 font-semibold text-stone-700 hidden md:table-cell">Fragmentable</th>
                <th className="text-center px-3 py-3 font-semibold text-stone-700">Dificultad</th>
                <th className="text-right px-3 py-3 font-semibold text-stone-700">Ganancia est.</th>
              </tr>
            </thead>
            <tbody>
              {casasApuestaYRecibe.map((item, i) => (
                <tr
                  key={item.casa}
                  className={`border-b border-stone-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'}`}
                >
                  <td className="px-3 py-2.5 font-medium text-stone-800 whitespace-nowrap">{item.casa}</td>
                  <td className="px-3 py-2.5 text-stone-600 hidden sm:table-cell">{item.bono}</td>
                  <td className="px-3 py-2.5 text-stone-500 hidden md:table-cell">{item.deposito}</td>
                  <td className="px-3 py-2.5 text-stone-500 hidden md:table-cell">{item.fragmentable}</td>
                  <td className="px-3 py-2.5 text-center">
                    <DificultadBadge nivel={item.dificultad} />
                  </td>
                  <td className="px-3 py-2.5 text-right font-semibold text-purple-700 whitespace-nowrap">
                    ~{item.ganancia} €
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-400 -mt-2">
          * Ganancias estimadas con matched betting a cuotas habituales de mercado. No son ingresos garantizados.
          Consulta siempre los T&amp;C vigentes de cada casa antes de depositar.
        </p>

        {/* ── Fichas destacadas ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Los tres mejores apuesta y recibe para empezar
        </h2>
        <p>
          Si buscas un punto de partida claro, estas son las tres opciones que combinan mayor
          ganancia potencial con menor dificultad:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-1">
          {[
            {
              casa: 'Sportium',
              ganancia: '~140 €',
              etiqueta: 'Mejor opción global',
              color: 'bg-emerald-50 border-emerald-100',
              detalle: 'Dos freebets de 100 € SNR. Alta liquidez en Betfair. Proceso claro y sin trampas.',
            },
            {
              casa: 'Versus',
              ganancia: '~65 €',
              etiqueta: 'Ideal para el primer bono',
              color: 'bg-purple-50 border-purple-100',
              detalle: 'Freebet instantánea al depositar. Sin condiciones complejas. Perfecto para practicar la mecánica.',
            },
            {
              casa: 'Bet365',
              ganancia: '~60 €',
              etiqueta: 'La más conocida',
              color: 'bg-stone-50 border-stone-200',
              detalle: 'Proceso de créditos estándar. Muy documentado, alta liquidez y sin sorpresas.',
            },
          ].map((item) => (
            <div key={item.casa} className={`border rounded-xl p-4 flex flex-col gap-1 ${item.color}`}>
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wide">{item.etiqueta}</span>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-stone-800 text-sm">{item.casa}</span>
                <span className="text-purple-700 font-bold text-sm">{item.ganancia}</span>
              </div>
              <p className="text-xs text-stone-500 mt-0.5">{item.detalle}</p>
            </div>
          ))}
        </div>

        {/* ── Fichas individuales ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Análisis detallado por casa
        </h2>
        <p>
          A continuación, un resumen de las características más relevantes de cada casa para
          este tipo de bono. Las condiciones exactas pueden variar; verifica siempre antes de activar.
        </p>

        <div className="flex flex-col gap-3">
          {casasApuestaYRecibe.map((item) => (
            <div key={item.casa} className="bg-white border border-stone-100 rounded-xl p-4">
              <div className="flex justify-between items-start mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-stone-800 text-sm">{item.casa}</span>
                  <DificultadBadge nivel={item.dificultad} />
                </div>
                <span className="text-purple-700 font-bold text-sm shrink-0 ml-2">~{item.ganancia} €</span>
              </div>
              <p className="text-xs text-stone-500 mb-1">{item.nota}</p>
              <div className="flex gap-4 text-xs text-stone-400">
                <span>Bono: <strong className="text-stone-600">{item.bono}</strong></span>
                <span>Depósito: <strong className="text-stone-600">{item.deposito}</strong></span>
                <span>Fragmentable: <strong className="text-stone-600">{item.fragmentable}</strong></span>
              </div>
            </div>
          ))}
        </div>

        <p>
          Consulta el estado de tu registro en cada una y sus condiciones vigentes en{' '}
          <Link href="/casas" className="text-purple-600 hover:text-purple-700 font-medium">
            el panel de casas
          </Link>
          .
        </p>

        {/* ── Sección 5 ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Qué revisar antes de activar un bono apuesta y recibe
        </h2>
        <p>
          Aunque son los bonos más sencillos, hay detalles que pueden afectar al resultado si no
          se comprueban antes de depositar:
        </p>
        <ul className="list-disc list-inside space-y-2 text-stone-600 pl-1">
          <li>
            <strong>Cuota mínima de calificación.</strong> La mayoría exige una cuota mínima para
            la apuesta de calificación (habitualmente entre 1.65 y 2.00). Si apuestas a una cuota
            inferior, el bono no se activa.
          </li>
          <li>
            <strong>¿La freebet es SNR o SR?</strong> SNR (<em>Stake Not Returned</em>) significa
            que si la freebet gana, no recuperas el importe apostado; solo cobras las ganancias.
            Casi todas las freebets españolas son SNR. Esto afecta directamente a la eficiencia de
            la conversión con matched betting.
          </li>
          <li>
            <strong>¿Es fragmentable?</strong> Algunas casas permiten dividir la freebet en varias
            apuestas más pequeñas (fragmentable), lo que da más flexibilidad para cubrir en Betfair.
            Otras exigen usarla de una sola vez. Comprueba siempre antes.
          </li>
          <li>
            <strong>Plazo de uso.</strong> La freebet tiene fecha de caducidad, normalmente entre
            7 y 30 días. Si no la usas en ese plazo, desaparece. Organiza el calendario antes de activar.
          </li>
          <li>
            <strong>Deporte y mercado válido.</strong> Algunas casas solo permiten usar la freebet
            en deportes concretos o excluyen mercados de cuotas asiáticas. Comprueba que el evento
            que vayas a usar es válido.
          </li>
          <li>
            <strong>Verificación de identidad.</strong> Hazla el mismo día del registro, antes de
            apostar. Sin verificación completada, muchas casas bloquean las retiradas aunque el
            bono ya esté convertido.
          </li>
          <li>
            <strong>Comprueba que no hay rollover sobre la freebet.</strong> La inmensa mayoría de
            bonos apuesta y recibe en España son{' '}
            <Link
              href="/blog/bonos-sin-rollover-espana"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              bonos sin rollover
            </Link>
            : la apuestas una vez y las ganancias son tuyas. Pero verifica siempre los T&amp;C
            por si hubiera excepciones.
          </li>
        </ul>

        {/* ── Sección 6 ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Errores comunes al gestionar freebets garantizadas
        </h2>
        <p>
          Aunque el proceso es sencillo, estos son los errores que más se repiten al usar bonos
          de tipo apuesta y recibe:
        </p>
        <ul className="list-disc list-inside space-y-2 text-stone-600 pl-1">
          <li>
            <strong>Usar la freebet en un evento con poca liquidez en Betfair.</strong> Si no
            encuentras una cuota lay cercana a la cuota back en Betfair, el diferencial (o
            &quot;deslizamiento&quot;) aumenta y reduces la eficiencia. Apuesta siempre en mercados
            de alta liquidez: Premier League, La Liga, Wimbledon, etc.
          </li>
          <li>
            <strong>No calcular el lay antes de apostar.</strong> El importe a apostar en Betfair
            no es el mismo que en la casa. Usa siempre la{' '}
            <Link href="/calculadora" className="text-purple-600 hover:text-purple-700">
              calculadora de cobertura
            </Link>{' '}
            para obtener el importe exacto. Un error de cálculo manual puede convertir una
            operación rentable en una pérdida.
          </li>
          <li>
            <strong>Activar el bono en el mercado equivocado.</strong> En algunas casas, si
            apuestas en un mercado excluido, la apuesta puede resolverse correctamente pero el
            bono no se acredita. Siempre verifica en los T&amp;C qué mercados son válidos.
          </li>
          <li>
            <strong>Esperar demasiado a usar la freebet.</strong> Las cuotas cambian constantemente.
            Una vez recibida la freebet, planifica la operación en las siguientes 24-48 horas para
            tener más opciones de mercado.
          </li>
          <li>
            <strong>Confundir la freebet con saldo real.</strong> La freebet no es dinero en
            efectivo. Si ganas con ella, solo cobras las ganancias netas (cuota − 1 × importe
            de freebet). No intentes retirar el importe de la freebet directamente.
          </li>
        </ul>

        {/* ── Sección 7: FAQ ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Preguntas frecuentes
        </h2>

        <h3 className="text-base font-semibold text-stone-800">
          ¿Puedo perder dinero con un bono apuesta y recibe?
        </h3>
        <p>
          Con matched betting correctamente ejecutado, la única pérdida es el pequeño deslizamiento
          de la apuesta de calificación (típicamente entre 1 y 4 € dependiendo de la cuota). La
          conversión de la freebet con cobertura en Betfair siempre genera un beneficio neto. Los
          errores humanos —calcular mal el lay, apostar en el mercado equivocado, usar la cuota
          incorrecta— son la causa principal de pérdidas en este tipo de operaciones.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          ¿Cuánto tiempo tarda en acreditarse la freebet?
        </h3>
        <p>
          Depende de la casa. En Versus y Sportium la freebet suele aparecer a las pocas horas de
          que se resuelve la apuesta de calificación. En otras casas como DaznBet o Codere puede
          tardar hasta 24-48 horas. Si pasado ese plazo no aparece, contacta con el servicio de
          atención al cliente con el comprobante de la apuesta.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          ¿Qué es una freebet SNR y cómo afecta al beneficio?
        </h3>
        <p>
          SNR (<em>Stake Not Returned</em>) significa que si la freebet gana, solo cobras las
          ganancias sin recuperar el importe de la apuesta. Por ejemplo, una freebet SNR de 100 €
          a cuota 3.00 te da 200 € de ganancias (no 300 €). En matched betting, esto implica que
          la eficiencia de conversión típica ronda el 70-85 % del valor de la freebet, dependiendo
          de las cuotas usadas.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          ¿Puedo usar varios bonos apuesta y recibe a la vez?
        </h3>
        <p>
          Técnicamente sí. Sin embargo, si estás empezando, es recomendable completar un bono
          antes de abrir el siguiente. Gestionar varias freebets en paralelo aumenta el riesgo
          de confundirse con los importes o los plazos. Una vez hayas completado 3 o 4 bonos, el
          proceso es lo suficientemente automático como para llevar varios en paralelo.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          ¿Las condiciones de estos bonos pueden cambiar?
        </h3>
        <p>
          Sí. Las casas pueden modificar o retirar sus promociones de bienvenida en cualquier
          momento. Los datos de esta comparativa corresponden a las condiciones vigentes en abril
          de 2026 y pueden haber variado. Comprueba siempre los T&amp;C actuales en la web de cada
          casa antes de depositar. En IAPredictHub actualizamos las guías de cada casa cuando
          detectamos cambios relevantes.
        </p>

      </div>

      {/* ── CTA final ── */}
      <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 flex flex-col items-start gap-3 mt-2">
        <p className="text-sm font-semibold text-stone-800">
          Organiza tus bonos apuesta y recibe paso a paso: calculadora, seguimiento de casas y guías en un solo lugar.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/bienvenida"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Empieza gratis con IAPredictHub →
          </Link>
          <Link
            href="/casas"
            className="inline-block bg-white hover:bg-stone-50 text-purple-600 border border-purple-200 text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Ver todas las casas →
          </Link>
        </div>
      </div>

      {/* ── Artículos y guías relacionados ── */}
      <aside className="bg-white rounded-2xl border border-stone-100 p-5">
        <h2 className="text-sm font-bold text-stone-800 mb-3">Artículos y guías relacionados</h2>
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              href="/guias/modulos/modulo-2-apuesta-y-recibe"
              className="text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              Módulo 2: cómo funciona un bono apuesta y recibe paso a paso →
            </Link>
          </li>
          <li>
            <Link
              href="/blog/mejores-bonos-bienvenida-apuestas-espana"
              className="text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              Mejores bonos de bienvenida en España 2026 (todos los tipos) →
            </Link>
          </li>
          <li>
            <Link
              href="/calculadora"
              className="text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              Calculadora de cobertura para freebets →
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
              Guía de bienvenida: por dónde empezar con IAPredictHub →
            </Link>
          </li>
          <li>
            <Link
              href="/blog/que-es-una-freebet"
              className="text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              ¿Qué es una freebet y cómo convertirla? (SNR, SR y conversión) →
            </Link>
          </li>
          <li>
            <Link
              href="/blog/casas-apuestas-reembolso-espana"
              className="text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              Casas de apuestas con reembolso en España 2026 →
            </Link>
          </li>
          <li>
            <Link
              href="/blog/bonos-sin-rollover-espana"
              className="text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              Bonos sin rollover en España: qué son y cuáles encontrar →
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
