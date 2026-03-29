import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '¿Qué es el Matched Betting? Guía para España 2026 | IAPredictHub',
  description:
    'Aprende qué es el matched betting, cómo funciona en España, si es legal y cuánto puedes ganar. Guía completa para principiantes con ejemplos reales paso a paso.',
}

export default function QueEsMatchedBettingPage() {
  return (
    <article className="max-w-2xl mx-auto flex flex-col gap-6 pb-8">
      <time dateTime="2026-03-29" className="text-xs text-stone-400">
        29 de marzo de 2026
      </time>

      <h1 className="text-2xl font-bold text-stone-800 tracking-tight leading-snug">
        ¿Qué es el Matched Betting y cómo funciona en España?
      </h1>

      <div className="flex flex-col gap-4 text-sm text-stone-700 leading-relaxed">

        {/* ── Introducción ── */}
        <p>
          El matched betting es una de las técnicas más populares para generar ingresos
          extra en España aprovechando los bonos y promociones que ofrecen las casas de
          apuestas reguladas. A diferencia de lo que pueda parecer, no se trata de
          apostar con suerte: es matemática pura. En esta guía te explicamos exactamente
          qué es, cómo funciona paso a paso, si es legal en España y cuánto dinero puedes
          ganar de forma realista.
        </p>

        {/* ── Sección 1 ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          ¿Qué es el matched betting?
        </h2>
        <p>
          El matched betting (literalmente, &quot;apuesta igualada&quot;) es una técnica matemática
          que permite extraer los bonos de las casas de apuestas con un riesgo casi nulo.
          La clave está en cubrir todos los resultados posibles de un evento deportivo,
          de modo que el resultado final del partido es irrelevante.
        </p>
        <p>
          Cuando una casa de apuestas te ofrece un bono de bienvenida —por ejemplo,
          &quot;apuesta 20 € y te devolvemos 20 € en apuesta gratis&quot;— el matched betting
          te permite convertir ese bono en dinero real sin depender de que gane o pierda
          ningún equipo.
        </p>
        <ul className="list-disc list-inside space-y-1 text-stone-600 pl-1">
          <li>Es una técnica matemática, no de azar ni de predicción deportiva.</li>
          <li>Se aprovechan los bonos y promociones de casas de apuestas reguladas.</li>
          <li>Se cubren todos los resultados posibles para eliminar el riesgo.</li>
          <li>El resultado del partido no importa: ganas de todas formas.</li>
        </ul>

        {/* ── Sección 2 ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          ¿Cómo funciona paso a paso?
        </h2>
        <p>
          El proceso básico siempre sigue la misma estructura. Necesitas dos
          plataformas: una casa de apuestas convencional (donde cobras el bono) y
          Betfair Exchange (donde cubres la apuesta).
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          Paso 1: Regístrate en una casa de apuestas
        </h3>
        <p>
          Elige una casa de apuestas española regulada que ofrezca un bono de bienvenida.
          Ejemplos habituales en 2026: Bet365, William Hill, Codere, Sportium, Bwin.
          Completa el registro con tu DNI y verificación de identidad antes de apostar.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          Paso 2: Realiza la apuesta de calificación con el bono
        </h3>
        <p>
          Haz la apuesta que la casa exige para activar el bono (la &quot;apuesta de
          calificación&quot;). Apuesta <em>a favor</em> de un resultado con una cuota
          determinada, por ejemplo, que el Real Madrid gane a cuota 2.00.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          Paso 3: Cubre la apuesta en contra en Betfair Exchange
        </h3>
        <p>
          Simultáneamente, entra en Betfair Exchange y realiza una apuesta
          <em> lay</em> (en contra) sobre el mismo resultado: que el Real Madrid
          NO gane. Así, si el Madrid gana, pierdes en Betfair pero ganas en la
          casa; si no gana, pierdes en la casa pero ganas en Betfair. El resultado
          neto es una pequeña pérdida mínima (el &quot;deslizamiento&quot;), que es el
          coste de activar el bono.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          Paso 4: Usa el bono y repite el proceso
        </h3>
        <p>
          Una vez activado el bono, repites el mismo procedimiento: apuesta el bono
          a favor en la casa y cubre en Betfair. Esta vez, como estás usando dinero
          de bono (no dinero real), la conversión se convierte en beneficio neto.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          Ejemplo numérico real
        </h3>
        <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-stone-700 text-xs leading-loose">
          <p className="font-semibold mb-2">Escenario: Bono &quot;Apuesta 20 € → Apuesta gratis 20 €&quot;</p>
          <p><strong>Apuesta de calificación:</strong></p>
          <ul className="list-disc list-inside space-y-0.5 pl-2">
            <li>Apuesta back en casa: 20 € a cuota 3.00</li>
            <li>Apuesta lay en Betfair: 20 € a cuota 3.05 (comisión 5 %)</li>
            <li>Resultado: pérdida de calificación ≈ −1.30 €</li>
          </ul>
          <p className="mt-2"><strong>Apuesta gratis (bono 20 €):</strong></p>
          <ul className="list-disc list-inside space-y-0.5 pl-2">
            <li>Apuesta back con bono: 20 € a cuota 3.00</li>
            <li>Apuesta lay en Betfair: cubres con tu propio dinero</li>
            <li>Si gana la apuesta: cobras 40 € en casa, pierdes ~41 € en Betfair → neto ≈ −1 €</li>
            <li>Si no gana: no cobras en casa, ganas ~19 € en Betfair → neto ≈ +19 €</li>
          </ul>
          <p className="mt-2">
            <strong>Beneficio neto total (ambos escenarios ponderados) ≈ +13-15 €</strong>{' '}
            de un bono que parecía &quot;gratuito&quot;.
          </p>
        </div>
        <p>
          En la práctica, con cuotas más altas la eficiencia sube. La{' '}
          <Link href="/calculadora" className="text-purple-600 hover:text-purple-700 font-medium">
            calculadora de IAPredictHub
          </Link>{' '}
          hace este cálculo automáticamente para que nunca cometas errores.
        </p>

        {/* ── Sección 3 ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          ¿Es legal el matched betting en España?
        </h2>
        <p>
          <strong>Sí, el matched betting es completamente legal en España.</strong> No
          existe ninguna ley que prohíba utilizar bonos de bienvenida de la forma más
          eficiente posible, ni tampoco apostar simultáneamente en distintas plataformas.
        </p>
        <p>
          Las casas de apuestas que operan en España están reguladas y supervisadas por
          la <strong>DGOJ</strong> (Dirección General de Ordenación del Juego), organismo
          dependiente del Ministerio de Consumo. El marco legal vigente es la{' '}
          <strong>Ley 13/2011, de 27 de mayo, de regulación del juego</strong>, que
          garantiza que tanto operadores como usuarios actúen dentro de un entorno
          seguro y transparente.
        </p>
        <p>
          Un hito importante: desde <strong>abril de 2024</strong>, la nueva normativa
          volvió a permitir los bonos de bienvenida para nuevos usuarios mayores de 18
          años en España (tras la restricción de 2021). Esto reabrió una ventana de
          oportunidad enorme para los practicantes de matched betting, ya que las casas
          compiten activamente con sus ofertas para captar nuevos clientes.
        </p>
        <ul className="list-disc list-inside space-y-1 text-stone-600 pl-1">
          <li>No viola ninguna ley española ni europea.</li>
          <li>Las casas de apuestas están reguladas por la DGOJ.</li>
          <li>Desde abril de 2024 los bonos de bienvenida están permitidos.</li>
          <li>Tú eres libre de gestionar tu dinero como consideres oportuno.</li>
        </ul>

        {/* ── Sección 4 ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          ¿Cuánto se puede ganar con matched betting en España?
        </h2>
        <p>
          Las cifras varían según el tiempo dedicado y las casas disponibles, pero
          estas son estimaciones realistas para 2026 en España:
        </p>
        <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 flex flex-col gap-2">
          <div className="flex justify-between text-xs font-semibold text-stone-700">
            <span>Solo con bonos de bienvenida (fase inicial)</span>
            <span className="text-purple-700">2.000 – 2.500 €</span>
          </div>
          <div className="flex justify-between text-xs font-semibold text-stone-700">
            <span>Con promociones recurrentes (mes a mes)</span>
            <span className="text-purple-700">400 – 600 €/mes</span>
          </div>
          <div className="flex justify-between text-xs font-semibold text-stone-700">
            <span>Tiempo necesario al día</span>
            <span className="text-purple-700">~30 min/día</span>
          </div>
        </div>
        <p>
          La fase de bonos de bienvenida es la más lucrativa y la más rápida: en uno
          o dos meses puedes completar todas las casas disponibles. Después, la
          actividad se sostiene con recargas, apuestas mejoradas y otras promociones
          semanales.
        </p>
        <p>
          <strong>Importante:</strong> estas cifras son estimaciones basadas en la
          experiencia de la comunidad. No son ingresos garantizados. Tu resultado
          depende de la disciplina, del tiempo dedicado y de las ofertas disponibles
          en cada momento. El matched betting no es un &quot;hacerse rico rápido&quot;, sino
          un complemento de ingresos sistemático y metódico.
        </p>

        {/* ── Sección 5 ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          ¿Qué necesitas para empezar?
        </h2>
        <p>
          Los requisitos para practicar matched betting en España son mínimos:
        </p>
        <ul className="list-disc list-inside space-y-1 text-stone-600 pl-1">
          <li><strong>Ser mayor de 18 años</strong> — requisito legal para jugar en España.</li>
          <li><strong>DNI español y residencia en España</strong> — las casas reguladas por la DGOJ lo exigen para el registro.</li>
          <li><strong>Cuenta bancaria o método de pago</strong> — para los depósitos y retiradas (tarjeta, transferencia, Bizum en algunas casas).</li>
          <li><strong>Capital inicial de 50–100 €</strong> — suficiente para cubrir las primeras apuestas de calificación.</li>
          <li><strong>Cuenta en Betfair Exchange</strong> — imprescindible para hacer las apuestas lay y cubrir los resultados.</li>
        </ul>
        <p>
          No necesitas saber de fútbol ni de apuestas deportivas. La técnica es
          puramente matemática y las herramientas de IAPredictHub hacen los cálculos
          por ti.
        </p>

        {/* ── Sección 6 ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Herramientas imprescindibles
        </h2>
        <p>
          Para practicar matched betting de forma eficiente necesitas las herramientas
          adecuadas. En IAPredictHub tienes todo en un solo lugar:
        </p>
        <ul className="list-none space-y-3 mt-1">
          <li className="flex items-start gap-3">
            <span className="text-purple-500 font-bold mt-0.5">→</span>
            <div>
              <Link href="/calculadora" className="font-semibold text-purple-600 hover:text-purple-700">
                Calculadora de cobertura
              </Link>
              <span className="text-stone-500"> — calcula automáticamente cuánto apostar en Betfair para cubrir cada bono con la máxima eficiencia.</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-500 font-bold mt-0.5">→</span>
            <div>
              <Link href="/guias" className="font-semibold text-purple-600 hover:text-purple-700">
                Guías paso a paso
              </Link>
              <span className="text-stone-500"> — módulos detallados con cada tipo de bono: apuesta y recibe, reembolso, rollover, dutcher y más.</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-500 font-bold mt-0.5">→</span>
            <div>
              <Link href="/casas" className="font-semibold text-purple-600 hover:text-purple-700">
                Seguimiento de casas y bonos
              </Link>
              <span className="text-stone-500"> — listado actualizado de todas las casas españolas con sus bonos de bienvenida y estado de tu registro.</span>
            </div>
          </li>
        </ul>
        <div className="mt-3">
          <Link
            href="/bienvenida"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Empieza gratis con IAPredictHub →
          </Link>
        </div>

        {/* ── Sección 7 ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Errores comunes al empezar
        </h2>
        <p>
          La mayoría de principiantes comete los mismos fallos. Conocerlos de antemano
          te ahorrará dinero y frustraciones:
        </p>
        <ul className="list-disc list-inside space-y-2 text-stone-600 pl-1">
          <li>
            <strong>Apostar en la columna equivocada de Betfair.</strong> En Betfair
            Exchange hay dos columnas: &quot;Back&quot; (a favor) y &quot;Lay&quot; (en contra). Confundirlas
            es el error más frecuente y puede costarte dinero real. Comprueba siempre
            que estás en la columna azul (Lay) al cubrir.
          </li>
          <li>
            <strong>No verificar la cuenta antes de apostar.</strong> La mayoría de casas
            exigen verificación de identidad (DNI, selfie) antes de permitir retiradas.
            Si no lo haces antes, puedes bloquearte las ganancias. Hazlo el día del
            registro.
          </li>
          <li>
            <strong>No leer las condiciones del bono.</strong> Cada bono tiene sus propias
            reglas: plazo de uso, cuota mínima, deportes válidos, wagering requerido.
            Léelas siempre antes de apostar. Nuestras guías resumen las condiciones
            de cada casa.
          </li>
          <li>
            <strong>Invertir más capital del necesario al principio.</strong> Con 50–100 €
            de bankroll inicial es más que suficiente para los primeros bonos. No
            necesitas arriesgar más hasta entender la mecánica.
          </li>
          <li>
            <strong>Hacer las apuestas en momentos diferentes.</strong> La apuesta back y
            la apuesta lay deben realizarse casi simultáneamente. Si las cuotas cambian
            entre una y otra, la cobertura ya no es perfecta.
          </li>
        </ul>

        {/* ── Sección 8: FAQ ── */}
        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Preguntas frecuentes
        </h2>

        <h3 className="text-base font-semibold text-stone-800">
          ¿Puedo perder dinero con el matched betting?
        </h3>
        <p>
          El riesgo es muy bajo si sigues el proceso correctamente. La única pérdida
          real es el pequeño &quot;deslizamiento&quot; de la apuesta de calificación (normalmente
          1–3 € por bono). Los errores humanos —como apostar en la columna incorrecta
          o no cubrir— sí pueden generar pérdidas, por eso la calculadora y las guías
          son fundamentales.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          ¿Me pueden cerrar la cuenta?
        </h3>
        <p>
          Las casas de apuestas pueden restringir o cerrar cuentas de usuarios que
          consideran &quot;profesionales&quot; o poco rentables para ellas. Esto se llama
          <em> gubbing</em>. Para minimizar el riesgo, es importante actuar de forma
          natural: apostar en diferentes deportes, no retirar el dinero inmediatamente
          después de cada bono y variar los importes. En nuestras guías tienes una
          sección completa sobre cómo proteger tus cuentas.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          ¿Hay que declarar las ganancias a Hacienda?
        </h3>
        <p>
          En España, las ganancias procedentes de apuestas son rendimientos del capital
          mobiliario y deben incluirse en la declaración de la Renta (IRPF) si superan
          el umbral legal. Las casas reguladas por la DGOJ están obligadas a informar
          a la Agencia Tributaria de los premios superiores a 300 €. Consulta siempre
          con un asesor fiscal para tu situación específica.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          ¿Funciona si no entiendo de deportes?
        </h3>
        <p>
          Sí. El matched betting no requiere ningún conocimiento deportivo. No importa
          quién gane el partido: la técnica funciona cubriendo todos los resultados.
          Lo único que necesitas es seguir el proceso matemático que las herramientas
          de IAPredictHub calculan automáticamente.
        </p>

      </div>

      {/* ── CTA final ── */}
      <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 flex flex-col items-start gap-3 mt-2">
        <p className="text-sm font-semibold text-stone-800">
          ¿Listo para empezar? IAPredictHub es gratis y tiene todo lo que necesitas.
        </p>
        <Link
          href="/bienvenida"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          Empieza gratis con IAPredictHub →
        </Link>
      </div>

      {/* ── Artículos relacionados ── */}
      <aside className="bg-white rounded-2xl border border-stone-100 p-5">
        <h2 className="text-sm font-bold text-stone-800 mb-3">Artículos relacionados</h2>
        <ul className="flex flex-col gap-2">
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
              href="/guias/primeros-pasos/betfair-exchange"
              className="text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              Cómo usar Betfair Exchange paso a paso →
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
