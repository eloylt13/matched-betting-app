import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mejores Bonos de Bienvenida en Casas de Apuestas España 2026 | IAPredictHub',
  description:
    'Lista actualizada de los mejores bonos de bienvenida en casas de apuestas en España 2026. Comparativa con tipo de oferta, requisitos, dificultad y ganancia potencial por casa.',
}

const bonos = [
  { casa: 'SolCasino',        tipo: 'Rollover',         requisitos: 'Depósito mín. 200€, rollover exigente',          dificultad: 5, ganancia: 150 },
  { casa: 'Betfair',          tipo: 'Rollover',         requisitos: 'Sin depósito mínimo, cuota mín. 1.25',            dificultad: 3, ganancia: 150 },
  { casa: 'Sportium',         tipo: 'Apuesta y recibe', requisitos: 'Depósito 100€, 2 freebets de 100€ SNR',           dificultad: 1, ganancia: 140 },
  { casa: 'Bwin',             tipo: 'Reembolso',        requisitos: 'Apuesta sin riesgo hasta 100€ + bonos extra',     dificultad: 3, ganancia: 140 },
  { casa: 'Betway',           tipo: 'Reembolso',        requisitos: 'Reembolso 100% hasta 200€ + 50 tiradas gratis',   dificultad: 4, ganancia: 140 },
  { casa: 'DaznBet',          tipo: 'Apuesta y recibe', requisitos: 'Depósito 200€, freebet 200€ no fragmentable',     dificultad: 2, ganancia: 130 },
  { casa: 'William Hill',     tipo: 'Reembolso',        requisitos: 'Reembolso 100% hasta 200€ combinada, código BONO200', dificultad: 4, ganancia: 130 },
  { casa: 'Pastón',           tipo: 'Rollover',         requisitos: 'Pack bienvenida 3 fases, rollover x10',           dificultad: 4, ganancia: 120 },
  { casa: 'RetaBet',          tipo: 'Apuesta y recibe', requisitos: 'Depósito 150€, freebet garantizada SNR',          dificultad: 2, ganancia: 100 },
  { casa: 'Juegging',         tipo: 'Apuesta y recibe', requisitos: 'Depósito 75€, bono 200%, dos fases',              dificultad: 3, ganancia: 100 },
  { casa: 'Marca Apuestas',   tipo: 'Reembolso',        requisitos: 'Reembolso 100% hasta 200€ si fallas',             dificultad: 3, ganancia: 90 },
  { casa: '888Sport',         tipo: 'Reembolso',        requisitos: 'Reembolso 100€ íntegro si fallas',                dificultad: 2, ganancia: 75 },
  { casa: 'Winamax',          tipo: 'Reembolso',        requisitos: 'Reembolso 150%, depósito 100€ si pierdes',        dificultad: 3, ganancia: 70 },
  { casa: 'Yaass Casino',     tipo: 'Reembolso',        requisitos: 'Apuesta sin riesgo hasta 100€',                   dificultad: 3, ganancia: 70 },
  { casa: 'JokerBet',         tipo: 'Rollover',         requisitos: 'Bono 200% hasta 100€, rollover x10',              dificultad: 5, ganancia: 70 },
  { casa: 'Versus',           tipo: 'Apuesta y recibe', requisitos: 'Depósito 100€, freebet instantánea SNR',          dificultad: 1, ganancia: 65 },
  { casa: 'Codere',           tipo: 'Apuesta y recibe', requisitos: 'Depósito 200€, freebets escalonadas',             dificultad: 2, ganancia: 65 },
  { casa: 'EFBet',            tipo: 'Rollover',         requisitos: 'Depósito 100€, freebet 100€ vía email',           dificultad: 3, ganancia: 65 },
  { casa: 'Casino Gran Madrid', tipo: 'Apuesta y recibe', requisitos: 'Bono 50% hasta 100€, cuota máx 3.00',          dificultad: 3, ganancia: 62 },
  { casa: 'Bet365',           tipo: 'Apuesta y recibe', requisitos: 'Depósito 100€, créditos de apuesta',              dificultad: 1, ganancia: 60 },
  { casa: 'Kirolbet',         tipo: 'Reembolso',        requisitos: 'Reembolso 100€ + 50 tiradas gratis',              dificultad: 2, ganancia: 60 },
  { casa: 'PokerStars',       tipo: 'Reembolso',        requisitos: 'Seguro 100% hasta 100€ en dos tramos',            dificultad: 3, ganancia: 60 },
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

export default function MejoresBonos2026Page() {
  return (
    <article className="max-w-3xl mx-auto flex flex-col gap-6 pb-8">
      <time dateTime="2026-03-29" className="text-xs text-stone-400">
        29 de marzo de 2026
      </time>

      <h1 className="text-2xl font-bold text-stone-800 tracking-tight leading-snug">
        Mejores bonos de bienvenida en casas de apuestas en España (2026)
      </h1>

      <div className="flex flex-col gap-4 text-sm text-stone-700 leading-relaxed">

        <p>
          Las casas de apuestas reguladas en España compiten activamente por captar nuevos usuarios
          ofreciendo bonos de bienvenida cada vez más generosos. Desde que en <strong>abril de 2024</strong>{' '}
          se reabrió la ventana de bonos para nuevos usuarios en España, la oferta disponible es la mejor
          de los últimos años. En esta guía encontrarás una comparativa actualizada de <strong>más de 20 casas</strong>,
          ordenadas por ganancia potencial, para que sepas exactamente por dónde empezar.
        </p>

        {/* ── Sección 1 ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          ¿Qué son los bonos de bienvenida?
        </h2>
        <p>
          Los bonos de bienvenida son promociones que las casas de apuestas ofrecen a sus nuevos usuarios para
          incentivar el registro y el primer depósito. En esencia, la casa te premia por abrir una cuenta y
          apostar por primera vez con ellos. Existen tres tipos principales:
        </p>
        <ul className="list-disc list-inside space-y-2 text-stone-600 pl-1">
          <li>
            <strong>Apuesta y recibe (Bet &amp; Get / Freebet):</strong> depositas y apuestas un importe, y recibes
            una cantidad equivalente en &quot;apuesta gratis&quot; (freebet) independientemente del resultado.
            Ejemplo: &quot;Apuesta 100€ y recibe 100€ en freebets&quot;. Son los más sencillos de aprovechar.
          </li>
          <li>
            <strong>Reembolso (apuesta sin riesgo):</strong> realizas una apuesta y, si pierdes, la casa te
            devuelve el importe apostado en forma de apuesta gratis o crédito. Ejemplo: &quot;Reembolso 100%
            hasta 100€ si tu primera apuesta falla&quot;.
          </li>
          <li>
            <strong>Depósito igualado (rollover):</strong> la casa iguala tu depósito con saldo de bono, pero
            con un requisito de rollover: debes apostar ese saldo un número determinado de veces antes de
            poder retirarlo. Son más complejos pero pueden tener mayor potencial si se dominan bien.
          </li>
        </ul>
        <p>
          Un punto importante: desde <strong>abril de 2024</strong>, la regulación española volvió a permitir
          los bonos de bienvenida para nuevos usuarios mayores de 18 años (la restricción de 2021 había
          eliminado estas promociones temporalmente). Esto significa que si aún no has aprovechado los bonos
          de las principales casas, estás a tiempo de hacerlo desde cero.
        </p>

        {/* ── Sección 2: Tabla ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Ranking de bonos de bienvenida 2026
        </h2>
        <p>
          La siguiente tabla incluye todas las casas disponibles actualmente en España, ordenadas de mayor
          a menor ganancia potencial estimada usando técnicas de matched betting. Los datos provienen de los
          bonos vigentes y pueden variar según promociones puntuales de cada operador.
        </p>

        <div className="overflow-x-auto rounded-xl border border-stone-200">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200">
                <th className="text-left px-3 py-3 font-semibold text-stone-700">Casa</th>
                <th className="text-left px-3 py-3 font-semibold text-stone-700">Tipo de bono</th>
                <th className="text-left px-3 py-3 font-semibold text-stone-700 hidden md:table-cell">Requisitos</th>
                <th className="text-center px-3 py-3 font-semibold text-stone-700">Dificultad</th>
                <th className="text-right px-3 py-3 font-semibold text-stone-700">Ganancia est.</th>
              </tr>
            </thead>
            <tbody>
              {bonos.map((bono, i) => (
                <tr
                  key={bono.casa}
                  className={`border-b border-stone-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'}`}
                >
                  <td className="px-3 py-2.5 font-medium text-stone-800 whitespace-nowrap">{bono.casa}</td>
                  <td className="px-3 py-2.5 text-stone-600 whitespace-nowrap">{bono.tipo}</td>
                  <td className="px-3 py-2.5 text-stone-500 hidden md:table-cell">{bono.requisitos}</td>
                  <td className="px-3 py-2.5 text-center">
                    <DificultadBadge nivel={bono.dificultad} />
                  </td>
                  <td className="px-3 py-2.5 text-right font-semibold text-purple-700 whitespace-nowrap">
                    ~{bono.ganancia} €
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-400 -mt-2">
          * Ganancias estimadas con matched betting a cuotas habituales de mercado. No son ingresos garantizados.
          Consulta siempre los T&amp;C vigentes de cada casa.
        </p>

        {/* ── Sección 3 ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          ¿Cómo aprovechar los bonos sin riesgo?
        </h2>
        <p>
          La manera más eficiente de convertir un bono de bienvenida en dinero real es mediante el{' '}
          <strong>matched betting</strong>: una técnica matemática que consiste en cubrir todos los posibles
          resultados de un evento deportivo, de modo que el resultado del partido no importa. Así, el bono
          que la casa te ha dado se convierte en beneficio real con un riesgo mínimo.
        </p>
        <p>
          El proceso básico es siempre el mismo: apuestas <em>a favor</em> de un resultado en la casa de
          apuestas (apuesta &quot;back&quot;) y simultáneamente apuestas <em>en contra</em> del mismo resultado en
          Betfair Exchange (apuesta &quot;lay&quot;). Cuando el bono entra en juego, la diferencia entre lo que
          ganas con la freebet y lo que pierdes en Betfair es tu beneficio neto.
        </p>
        <ul className="list-none space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-purple-500 font-bold mt-0.5 shrink-0">→</span>
            <span>
              Si quieres entender el proceso completo desde cero, lee nuestro artículo:{' '}
              <Link
                href="/blog/que-es-matched-betting-espana"
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                ¿Qué es el Matched Betting y cómo funciona en España?
              </Link>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-500 font-bold mt-0.5 shrink-0">→</span>
            <span>
              Para calcular exactamente cuánto apostar en Betfair en cada operación, usa la{' '}
              <Link href="/calculadora" className="text-purple-600 hover:text-purple-700 font-medium">
                calculadora de cobertura
              </Link>
              . Es gratis y hace todos los cálculos en segundos.
            </span>
          </li>
        </ul>

        {/* ── Sección 4 ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Bonos más fáciles para empezar
        </h2>
        <p>
          Si es la primera vez que practicas matched betting, empieza siempre por los bonos de dificultad
          1 o 2. Son los que tienen menos requisitos, el proceso más sencillo y el menor margen de error.
          Estas son las cuatro mejores opciones para principiantes:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
          {[
            {
              casa: 'Sportium',
              ganancia: '~140 €',
              por: 'Dos freebets de 100€ SNR con un proceso muy claro y alta liquidez en Betfair.',
            },
            {
              casa: 'Versus',
              ganancia: '~65 €',
              por: 'Freebet instantánea al depositar, sin condiciones complejas. Ideal para el primer bono.',
            },
            {
              casa: 'Bet365',
              ganancia: '~60 €',
              por: 'La casa más conocida. Proceso de créditos estándar, muy documentado y sin sorpresas.',
            },
            {
              casa: 'Botemania',
              ganancia: '~35 €',
              por: '5 freebets de 10€ fáciles de limpiar. Perfecto para practicar la mecánica básica.',
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
          Consulta los detalles de cada bono, las condiciones vigentes y el estado de tu registro en{' '}
          <Link href="/casas" className="text-purple-600 hover:text-purple-700 font-medium">
            el panel de casas
          </Link>
          .
        </p>

        {/* ── Sección 5 ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Bonos con mayor ganancia potencial
        </h2>
        <p>
          Los bonos más lucrativos suelen ser más exigentes: requieren depósitos mayores, procesos de
          varios pasos o rollovers. No te lances a ellos sin haber completado antes al menos 3-4 bonos
          sencillos. Cuando estés listo, estos son los de mayor potencial:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
          {[
            {
              casa: 'SolCasino',
              ganancia: '~150 €',
              advertencia: 'Rollover muy exigente. Requiere dominar la gestión de bonos con rollover antes de intentarlo.',
            },
            {
              casa: 'Betfair',
              ganancia: '~150 €',
              advertencia: 'Paquetes de freebets por volumen. Necesitas operar con consistencia durante varias semanas.',
            },
            {
              casa: 'Sportium',
              ganancia: '~140 €',
              advertencia: 'Dificultad 1/5: es el de mayor ganancia y más fácil a la vez. Recomendado en cualquier nivel.',
            },
            {
              casa: 'Bwin',
              ganancia: '~140 €',
              advertencia: 'Reembolso con bonos extra. El proceso tiene más pasos que un bet & get estándar.',
            },
          ].map((item) => (
            <div key={item.casa} className="bg-amber-50 border border-amber-100 rounded-xl p-4">
              <div className="flex justify-between items-start mb-1">
                <span className="font-semibold text-stone-800 text-sm">{item.casa}</span>
                <span className="text-purple-700 font-bold text-sm">{item.ganancia}</span>
              </div>
              <p className="text-xs text-stone-500">{item.advertencia}</p>
            </div>
          ))}
        </div>

        {/* ── Sección 6 ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Consejos antes de activar un bono
        </h2>
        <p>
          Antes de depositar en cualquier casa, ten en cuenta estos puntos clave para no cometer errores
          que cuestan dinero real:
        </p>
        <ul className="list-disc list-inside space-y-2 text-stone-600 pl-1">
          <li>
            <strong>Lee siempre las condiciones antes de depositar.</strong> Presta atención a la cuota
            mínima, el plazo de uso del bono, los deportes válidos y si la freebet es o no fragmentable.
            Un error aquí puede invalidar el bono.
          </li>
          <li>
            <strong>Verifica tu cuenta antes de apostar.</strong> La mayoría de casas exige DNI y selfie
            antes de permitir retiradas. Hazlo el mismo día del registro para no tener problemas al cobrar.
          </li>
          <li>
            <strong>Empieza por los bonos de dificultad 1 y 2.</strong> Practica la mecánica con bonos
            pequeños antes de arriesgar depósitos de 150-200€ en casas más complejas.
          </li>
          <li>
            <strong>Usa la calculadora para cada operación.</strong> Nunca calcules mentalmente cuánto
            apostar en Betfair. Un error de céntimos puede convertirse en pérdida real.{' '}
            <Link href="/calculadora" className="text-purple-600 hover:text-purple-700">
              Usa la calculadora de IAPredictHub →
            </Link>
          </li>
          <li>
            <strong>No actives varios bonos simultáneamente al principio.</strong> Gestionar múltiples
            freebets abiertas a la vez aumenta el riesgo de confusiones. Termina un bono antes de empezar
            el siguiente hasta que tengas experiencia.
          </li>
          <li>
            <strong>Actúa de forma natural en cada casa.</strong> Para evitar restricciones de cuenta
            (<em>gubbing</em>), varía los importes, los deportes y no retires el dinero inmediatamente
            tras completar el bono.
          </li>
        </ul>

        {/* ── Sección 7: FAQ ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Preguntas frecuentes
        </h2>

        <h3 className="text-base font-semibold text-stone-800">
          ¿Puedo activar bonos en varias casas a la vez?
        </h3>
        <p>
          Técnicamente sí, no hay ninguna ley ni norma que lo impida. Sin embargo, para los principiantes
          es muy recomendable terminar un bono antes de empezar el siguiente. Gestionar varias freebets
          en paralelo aumenta la probabilidad de cometer errores. Una vez que dominas la mecánica (tras
          5-6 bonos completados), puedes ir abriendo varias casas a la vez para acelerar el proceso.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          ¿Qué pasa si no cumplo el rollover?
        </h3>
        <p>
          Si no completas el requisito de rollover dentro del plazo establecido por la casa, el saldo del
          bono caduca y se elimina de tu cuenta. El dinero depositado originalmente (el real) sigue siendo
          tuyo, pero perderás el saldo del bono. Por eso es importante leer el plazo y el multiplicador
          de rollover antes de activar este tipo de oferta.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          ¿Los bonos caducan?
        </h3>
        <p>
          Sí, casi todos los bonos tienen un plazo de caducidad. Los más comunes son 7, 14 o 30 días desde
          que se activa o recibe el bono. Pasado ese tiempo sin usar la freebet o sin completar el rollover,
          el bono desaparece. Las condiciones de cada casa especifican exactamente el plazo vigente; en
          IAPredictHub las guías de cada casa incluyen este detalle actualizado.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          ¿Necesito depositar dinero para recibir el bono?
        </h3>
        <p>
          En la mayoría de casos, sí. Los bonos de tipo <em>apuesta y recibe</em> y los de{' '}
          <em>reembolso</em> requieren que realices un depósito y una primera apuesta para desbloquear la
          oferta. Los bonos de tipo rollover requieren siempre un depósito. En algunos casos muy
          específicos existen bonos sin depósito, pero son excepcionales y con condiciones muy restrictivas.
          El depósito que realizas siempre te pertenece y puedes retirarlo si decides no continuar.
        </p>

      </div>

      {/* ── CTA final ── */}
      <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 flex flex-col items-start gap-3 mt-2">
        <p className="text-sm font-semibold text-stone-800">
          Organiza tus bonos paso a paso con IAPredictHub: seguimiento de casas, calculadora y guías en un solo lugar.
        </p>
        <Link
          href="/bienvenida"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          Organiza tus bonos paso a paso con IAPredictHub →
        </Link>
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
              href="/guias/primeros-pasos/cuanto-se-puede-ganar"
              className="text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              ¿Cuánto se puede ganar con matched betting en España? →
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
