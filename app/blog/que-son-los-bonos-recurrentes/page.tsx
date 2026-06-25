import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '¿Qué son los bonos recurrentes? Guía matched betting | IAPredictHub',
  description:
    'Descubre qué son los bonos recurrentes, cómo funcionan y cómo aprovechar promociones de casas de apuestas con matched betting sin depender de acertar el resultado.',
}

export default function QueSonLosBonosRecurrentesPage() {
  return (
    <article className="max-w-2xl mx-auto flex flex-col gap-6 pb-8">
      <time dateTime="2026-06-12" className="text-xs text-stone-400">
        12 de junio de 2026
      </time>

      <h1 className="text-2xl font-bold text-stone-800 tracking-tight leading-snug">
        ¿Qué son los bonos recurrentes?
      </h1>

      <div className="flex flex-col gap-4 text-sm text-stone-700 leading-relaxed">
        <p>
          Los bonos recurrentes son promociones que las casas de apuestas ofrecen a
          usuarios que ya tienen cuenta. A diferencia de los bonos de bienvenida, que
          normalmente solo puedes usar una vez al registrarte, los bonos recurrentes
          pueden aparecer varias veces a lo largo del mes: fines de semana, eventos
          deportivos importantes, partidos destacados o campañas puntuales.
        </p>
        <p>
          Después de completar los bonos de bienvenida, los bonos recurrentes son una
          de las formas más sencillas de seguir aprovechando promociones, siempre que
          sepas calcular bien la cobertura y elegir solo las ofertas que realmente
          compensan.
        </p>
        <p>
          La ventaja del matched betting es que no dependes de acertar el resultado
          del partido. El método consiste en analizar la promoción, cubrir los
          escenarios posibles y calcular antes de apostar si la oferta puede merecer
          la pena.
        </p>
        <p>No se trata de adivinar quién gana. Se trata de entender las condiciones.</p>

        <div className="flex flex-col gap-3 rounded-2xl border border-violet-100 bg-[linear-gradient(135deg,#ffffff_0%,#faf7ff_58%,#f8fbfa_100%)] p-3 shadow-[0_14px_36px_rgba(46,16,101,0.06)] sm:flex-row sm:items-stretch">
          <Link
            href="#cuanto-se-puede-ganar-bonos-recurrentes"
            className="relative inline-flex min-h-14 flex-1 items-center justify-center overflow-hidden rounded-2xl border border-emerald-300/30 bg-[radial-gradient(circle_at_10%_8%,rgba(45,212,191,0.18),transparent_36%),linear-gradient(135deg,rgba(15,23,42,0.97),rgba(30,27,75,0.9)_58%,rgba(2,6,23,0.94))] bg-gradient-to-br from-emerald-400/15 via-slate-950 to-violet-950 px-4 py-3 text-center text-sm font-bold text-emerald-50 shadow-[0_16px_40px_rgba(15,23,42,0.18),0_0_24px_rgba(45,212,191,0.10)] ring-1 ring-white/[0.06] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-emerald-200/45 hover:text-white hover:shadow-[0_18px_44px_rgba(15,23,42,0.22),0_0_30px_rgba(45,212,191,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/55 sm:justify-start sm:text-left"
          >
            📈 ¿Cuánto se puede ganar?
          </Link>
          <Link
            href="/bienvenida"
            className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-violet-200 bg-white px-4 py-2 text-center text-sm font-semibold text-[#2A1F3D] shadow-sm transition-all hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-50 sm:min-h-14 sm:w-auto"
          >
            Empezar primer bono guiado
          </Link>
        </div>

        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Diferencia entre bonos de bienvenida y bonos recurrentes
        </h2>
        <p>
          Los bonos de bienvenida están pensados para nuevos usuarios. Suelen ser más
          grandes y sirven para atraer registros: apuestas gratis, reembolsos, bonos
          de depósito o promociones por crear una cuenta y hacer una primera apuesta.
        </p>
        <p>
          Los bonos recurrentes, en cambio, aparecen cuando ya eres cliente de una
          casa. Normalmente son más pequeños, pero pueden repetirse con frecuencia.
          Por eso son interesantes: quizá una oferta aislada no parezca gran cosa,
          pero varias promociones bien elegidas pueden sumar con el tiempo.
        </p>
        <p>La diferencia principal es esta:</p>
        <ul className="list-disc list-inside space-y-1 text-stone-600 pl-1">
          <li>Bono de bienvenida: grande, único y pensado para empezar.</li>
          <li>Bono recurrente: más pequeño, repetible y pensado para usuarios activos.</li>
          <li>
            Oferta exclusiva: promoción personalizada que algunas casas ofrecen solo
            a ciertos usuarios.
          </li>
        </ul>
        <p>
          En IAPredictHub, la idea es sencilla: primero aprovechas los bonos de
          bienvenida con una guía paso a paso, y después puedes seguir atento a las
          promociones recurrentes que vayan apareciendo.
        </p>

        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Tipos habituales de bonos recurrentes
        </h2>
        <p>
          No todos los bonos recurrentes funcionan igual. Algunas promociones son
          fáciles de calcular y otras no merecen la pena. Estos son los formatos más
          habituales.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          Apuestas gratis o freebets
        </h3>
        <p>
          Una casa puede ofrecerte una apuesta gratis si cumples una condición previa.
          Por ejemplo: apostar cierta cantidad en un partido, participar en una
          promoción concreta o cumplir unos requisitos durante el fin de semana.
        </p>
        <p>
          La clave está en calcular cuánto valor real tiene esa freebet y si la
          apuesta previa compensa.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          Reembolsos si pierdes
        </h3>
        <p>
          En este tipo de oferta, la casa te devuelve parte de una apuesta si sale
          perdedora. A veces el reembolso llega en forma de freebet, otras veces como
          saldo bono o promoción similar.
        </p>
        <p>
          Este formato puede ser interesante con matched betting porque puedes cubrir
          la apuesta en un exchange o en otra casa y reducir mucho la exposición.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          Bonos de depósito
        </h3>
        <p>
          Algunas promociones recurrentes funcionan así: depositas una cantidad y la
          casa te da un porcentaje extra en forma de bono.
        </p>
        <p>
          Aquí hay que tener especial cuidado con las condiciones. No basta con ver
          &quot;100% hasta X €&quot;. Hay que revisar rollover, cuota mínima, plazo, mercados
          válidos y si el bono se puede convertir realmente en saldo retirable.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          Cuotas mejoradas
        </h3>
        <p>
          Las cuotas mejoradas son selecciones donde la casa sube artificialmente la
          cuota de un evento. A veces solo son reclamos comerciales, pero en algunos
          casos pueden crear oportunidades interesantes si la cuota queda por encima
          del mercado.
        </p>
        <p>
          Aquí conviene comparar la cuota con otras casas y calcular si existe valor
          real.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          Promociones en eventos concretos
        </h3>
        <p>
          Durante grandes competiciones, finales, clásicos o torneos importantes, las
          casas suelen lanzar promociones especiales. Pueden ser freebets, boosts,
          reembolsos o retos por apostar en ciertos partidos.
        </p>
        <p>
          Estas ofertas pueden aparecer con poco margen de tiempo, así que conviene
          estar atento y tener fondos preparados en las cuentas que uses.
        </p>

        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Por qué los bonos recurrentes pueden ser interesantes
        </h2>
        <p>
          Los bonos de bienvenida son el punto de entrada más potente, pero no duran
          para siempre. Una vez has completado las principales casas, necesitas otra
          forma de seguir encontrando oportunidades.
        </p>
        <p>Ahí entran los bonos recurrentes.</p>
        <p>
          Su valor no está en que cada promoción sea enorme. Su valor está en que
          pueden aparecer de forma repetida. Una freebet pequeña, un reembolso bien
          cubierto o una cuota mejorada con valor pueden ser oportunidades
          interesantes si las calculas correctamente.
        </p>
        <p>
          El objetivo no es apostar por intuición. El objetivo es detectar promociones
          donde los números encajan.
        </p>
        <p>
          Por eso los bonos recurrentes encajan tan bien con el matched betting: el
          foco no está en acertar el resultado, sino en aprovechar promociones con una
          estrategia calculada.
        </p>

        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Cómo saber si una oferta recurrente merece la pena
        </h2>
        <p>Antes de entrar en una promoción, revisa siempre estas preguntas.</p>

        <h3 className="text-base font-semibold text-stone-800">
          ¿Cuál es la condición exacta?
        </h3>
        <p>
          No es lo mismo &quot;apuesta 10 €&quot; que &quot;apuesta 10 € a cuota mínima 2.00 en
          mercado simple y recibe una freebet si pierdes&quot;. Los detalles importan.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          ¿Qué recibes realmente?
        </h3>
        <p>
          Puede ser una freebet, saldo bono, reembolso, giro, apuesta gratis o mejora
          de cuota. Cada formato se calcula de forma distinta.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          ¿La promoción tiene rollover?
        </h3>
        <p>
          Si hay que apostar varias veces el bono antes de retirarlo, el valor puede
          bajar mucho. Algunas ofertas parecen buenas al principio, pero dejan de
          compensar cuando lees las condiciones completas.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          ¿Qué cuota mínima exige?
        </h3>
        <p>
          Muchas promociones requieren apostar a una cuota mínima. Si la cuota mínima
          es alta, puede ser más difícil cubrir bien la operación.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          ¿Hay plazo de uso?
        </h3>
        <p>
          Algunas freebets caducan rápido. Si no la usas a tiempo, pierdes el valor
          de la promoción.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          ¿Se puede cubrir de forma eficiente?
        </h3>
        <p>
          Esta es la pregunta más importante. Si la cobertura sale demasiado cara,
          quizá la promoción no merezca la pena.
        </p>

        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Ejemplo simple de análisis
        </h2>
        <p>Imagina que una casa ofrece una promoción de este tipo:</p>
        <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-stone-700 text-xs leading-loose">
          <p className="font-semibold">
            &quot;Apuesta 10 € en un partido seleccionado y, si pierdes, recibe una
            freebet de 10 €.&quot;
          </p>
        </div>
        <p>
          A simple vista, parece una apuesta normal. Pero con matched betting puedes
          analizar los dos escenarios:
        </p>
        <ul className="list-disc list-inside space-y-1 text-stone-600 pl-1">
          <li>Si gana tu apuesta en la casa, ganas allí.</li>
          <li>Si pierde, recibes la freebet.</li>
          <li>
            Si cubres correctamente en el exchange o en otra casa, puedes reducir la
            pérdida del escenario negativo.
          </li>
        </ul>
        <p>
          La clave está en calcular si el valor esperado de la freebet compensa la
          pérdida de cobertura. Si compensa, la oferta puede ser interesante. Si no
          compensa, se descarta.
        </p>
        <p>
          Esto es lo importante: no se trata de apostar porque te gusta un equipo. Se
          trata de hacer números antes.
        </p>

        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Errores comunes con bonos recurrentes
        </h2>
        <p>
          Los bonos recurrentes pueden parecer sencillos, pero también es fácil
          cometer errores si haces demasiadas cosas a la vez o no lees bien las
          condiciones.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          No leer los términos completos
        </h3>
        <p>
          Este es el error más habitual. Muchas promociones esconden detalles
          importantes: cuota mínima, mercados excluidos, límites, plazos o rollover.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          Entrar en todas las ofertas
        </h3>
        <p>
          No todas las promociones merecen la pena. Algunas tienen demasiado poco
          valor, demasiada fricción o condiciones poco claras.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          No calcular la cobertura
        </h3>
        <p>
          Apostar sin calcular puede convertir una promoción interesante en una
          pérdida innecesaria. Antes de entrar, conviene saber cuánto puedes ganar o
          perder en cada escenario.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          Mezclar promociones
        </h3>
        <p>
          Si llevas varias ofertas abiertas al mismo tiempo, es fácil confundirse:
          importes, cuotas, plazos, freebets pendientes o casas utilizadas.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          No controlar el bankroll
        </h3>
        <p>
          Aunque uses matched betting, necesitas liquidez para cubrir apuestas. Si
          tienes poco saldo repartido entre casas y exchange, puedes quedarte
          bloqueado en mitad de una operación.
        </p>

        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          ¿Pueden limitarte por usar promociones?
        </h2>
        <p>
          Sí, puede pasar. Algunas casas limitan cuentas que usan muchas promociones,
          apuestan siempre de forma muy similar o muestran un patrón demasiado
          evidente.
        </p>
        <p>
          No hay una forma perfecta de evitarlo, pero sí conviene actuar con sentido
          común:
        </p>
        <ul className="list-disc list-inside space-y-1 text-stone-600 pl-1">
          <li>No usar siempre el importe mínimo exacto.</li>
          <li>No apostar siempre en el mismo tipo de mercado.</li>
          <li>No retirar todo justo después de cada promoción.</li>
          <li>No concentrarlo todo en una sola casa.</li>
          <li>No abusar de promociones con patrones demasiado claros.</li>
        </ul>
        <p>
          Las limitaciones forman parte del mundo de las casas de apuestas. Por eso
          es importante repartir actividad, elegir bien las promociones y no depender
          de una sola cuenta.
        </p>

        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Empieza por el primer bono guiado
        </h2>
        <p>
          Si todavía no has hecho matched betting o no tienes claro cómo cubrir una
          apuesta, lo mejor es empezar por un bono de bienvenida sencillo antes de
          lanzarte a las ofertas recurrentes.
        </p>
        <p>
          En IAPredictHub puedes seguir un primer bono guiado paso a paso: registro,
          apuesta inicial, cobertura, escenarios posibles y uso de la calculadora. Así
          entiendes la lógica del método antes de aplicar la misma idea a promociones
          más pequeñas.
        </p>
        <p>
          Cuando ya tienes claro cómo funciona una apuesta cubierta, los bonos
          recurrentes son mucho más fáciles de analizar: lees condiciones, calculas la
          cobertura y decides si la oferta merece la pena.
        </p>
        <div className="rounded-2xl border border-violet-100 bg-[linear-gradient(135deg,#ffffff_0%,#faf7ff_58%,#f8fbfa_100%)] p-5 shadow-[0_18px_50px_rgba(46,16,101,0.08)]">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-violet-700">
            Primer bono guiado
          </p>
          <h2 className="text-xl font-bold leading-tight text-stone-950">
            Aprende el método con una operación sencilla
          </h2>
          <p className="mt-3 text-sm leading-6 text-stone-600">
            Sigue el proceso paso a paso antes de analizar promociones recurrentes.
          </p>
          <Link
            href="/bienvenida"
            className="mt-5 inline-flex min-h-12 items-center justify-center rounded-2xl bg-[#2A1F3D] px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#3d2e57] hover:shadow-md"
          >
            Empezar primer bono guiado
          </Link>
        </div>

        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Preguntas frecuentes sobre bonos recurrentes
        </h2>

        <h3 className="text-base font-semibold text-stone-800">
          ¿Los bonos recurrentes son solo para usuarios antiguos?
        </h3>
        <p>
          Sí. Normalmente están pensados para personas que ya tienen cuenta en una
          casa de apuestas. Los bonos de bienvenida son para nuevos usuarios; los
          recurrentes son promociones posteriores.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          ¿Son mejores que los bonos de bienvenida?
        </h3>
        <p>
          No necesariamente. Los bonos de bienvenida suelen ser más grandes. Los
          recurrentes suelen ser más pequeños, pero pueden aparecer más veces. Lo
          interesante es combinarlos: primero bienvenida, después recurrentes.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          ¿Necesito acertar el resultado del partido?
        </h3>
        <p>
          No es el objetivo. Con matched betting, la idea es cubrir escenarios,
          revisar condiciones y calcular bien la operación antes de apostar.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          ¿Necesito mucho dinero para hacer bonos recurrentes?
        </h3>
        <p>
          Normalmente necesitas menos capital que para algunos bonos de bienvenida
          grandes, pero depende de la promoción. Algunas se pueden hacer con importes
          pequeños; otras requieren más liquidez para cubrir.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          ¿Todas las ofertas recurrentes compensan?
        </h3>
        <p>
          No. Algunas no merecen la pena. Por eso hay que revisar condiciones,
          cuotas, plazo, rollover y coste de cobertura antes de entrar.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          ¿Puedo hacer varias promociones a la vez?
        </h3>
        <p>
          Sí, pero no es lo ideal si estás empezando. Es mejor ir una por una, apuntar
          cada operación y evitar confusiones.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          ¿Hace falta usar Betfair Exchange?
        </h3>
        <p>
          En muchas estrategias de matched betting, un exchange como Betfair ayuda a
          cubrir apuestas. En otros casos se puede usar una segunda casa si las cuotas
          encajan, pero el exchange suele dar más flexibilidad.
        </p>

        <h3 className="text-base font-semibold text-stone-800">
          ¿Cuánto tiempo se tarda en completar una oferta recurrente?
        </h3>
        <p>
          Depende de la promoción. Algunas se revisan y ejecutan en pocos minutos;
          otras requieren esperar a que termine un partido o a que la casa acredite
          una freebet.
        </p>

        <h2 className="text-lg font-semibold text-stone-800 mt-2">
          Resumen
        </h2>
        <p>
          Los bonos recurrentes son promociones que las casas ofrecen a usuarios que
          ya tienen cuenta. Aunque suelen ser más pequeños que los bonos de
          bienvenida, pueden aparecer con frecuencia y convertirse en una forma
          sencilla de seguir aprovechando oportunidades.
        </p>
        <p>
          La clave está en no apostar a ciegas. Hay que leer condiciones, calcular la
          cobertura y elegir solo las ofertas que realmente compensan.
        </p>
        <p>
          Con matched betting, no dependes de acertar el resultado del partido.
          Dependiendo de la promoción, puedes cubrir escenarios, reducir exposición y
          saber antes de apostar si la operación tiene sentido.
        </p>
        <p>
          Si estás empezando, lo mejor es seguir primero una guía de bono de
          bienvenida. Si ya has completado tus primeros bonos, los bonos recurrentes
          pueden ser el siguiente paso.
        </p>

        <h2
          id="cuanto-se-puede-ganar-bonos-recurrentes"
          className="scroll-mt-24 text-lg font-semibold text-stone-800 mt-2"
        >
          ¿Cuánto se puede ganar con bonos recurrentes?
        </h2>
        <p>Las ganancias del matched betting suelen dividirse en dos fases.</p>
        <p>
          La primera fase son los bonos de bienvenida. Es donde normalmente está el
          mayor beneficio inicial, porque las casas ofrecen promociones más potentes
          para nuevos usuarios. En esta etapa, siguiendo un orden adecuado y cubriendo
          bien las apuestas, es posible acumular una cantidad importante antes de
          pasar a las ofertas recurrentes.
        </p>
        <p>
          La segunda fase empieza cuando ya has usado los principales bonos de
          bienvenida. Ahí entran los bonos recurrentes: promociones más pequeñas, pero
          que pueden aparecer cada semana o incluso varios días al mes.
        </p>
        <p>
          Con bonos recurrentes, una referencia realista para usuarios constantes
          puede estar aproximadamente entre 200 € y 600 € al mes, dependiendo de
          varios factores:
        </p>
        <ul className="list-disc list-inside space-y-1 text-stone-600 pl-1">
          <li>cuántas casas tengas activas;</li>
          <li>cuántas promociones aparezcan ese mes;</li>
          <li>cuánto capital tengas repartido entre casas y exchange;</li>
          <li>si sabes calcular bien la cobertura;</li>
          <li>si evitas ofertas que no compensan;</li>
          <li>si tus cuentas no están limitadas.</li>
        </ul>
        <p>
          La clave no está en acertar partidos, sino en repetir un proceso: detectar
          una promoción, leer condiciones, calcular escenarios y entrar solo cuando
          los números tienen sentido.
        </p>
        <p>
          No todos los meses serán iguales. Habrá meses con muchas oportunidades y
          otros más flojos. También habrá ofertas que parezcan buenas pero que, al
          calcularlas, no merezcan la pena.
        </p>
        <p>
          Por eso los bonos recurrentes funcionan mejor como una estrategia de
          constancia: pequeñas oportunidades repetidas que pueden sumar con el tiempo
          después de completar los bonos de bienvenida.
        </p>

        <div className="rounded-2xl border border-violet-100 bg-[linear-gradient(135deg,#ffffff_0%,#faf7ff_58%,#f8fbfa_100%)] p-5 shadow-[0_18px_50px_rgba(46,16,101,0.08)]">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-violet-700">
            Siguiente paso
          </p>
          <h2 className="text-xl font-bold leading-tight text-stone-950">
            Empieza con el primer bono guiado
          </h2>
          <p className="mt-3 text-sm leading-6 text-stone-600">
            Practica primero con una guía paso a paso y aplica después la misma lógica
            a promociones recurrentes.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/bienvenida"
              className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-[#2A1F3D] px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#3d2e57] hover:shadow-md"
            >
              Empezar primer bono guiado
            </Link>
            <a
              href="https://t.me/beneficiosrecurrentes"
              className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-stone-200 bg-white px-5 py-3 text-center text-sm font-semibold text-stone-700 transition-colors hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
            >
              Canal de beneficios recurrentes
            </a>
          </div>
          <p className="mt-5 border-t border-stone-200/70 pt-4 text-xs leading-5 text-stone-500">
            +18 · Juego responsable · No garantiza resultados. Apuesta solo cantidades
            que puedas permitirte perder.
          </p>
        </div>
      </div>
    </article>
  )
}
