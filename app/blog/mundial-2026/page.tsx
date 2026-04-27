import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mundial 2026: grupos, favoritos y selecciones | IAPredictHub',
  description:
    'Guía actualizada del Mundial 2026: formato, los 12 grupos completos, debutantes, favoritos según las cuotas y qué vigilar antes del 11 de junio.',
}

export default function Mundial2026Page() {
  return (
    <article className="max-w-2xl mx-auto flex flex-col gap-6 pb-8">
      <p className="text-xs text-stone-400">
        Actualizado: 27 de abril de 2026
      </p>

      <h1 className="text-2xl font-bold text-stone-800 tracking-tight leading-snug">
        Mundial 2026: selecciones, grupos y favoritos actualizados
      </h1>

      <div className="my-2 overflow-hidden rounded-2xl">
        <Image
          src="/blog/mundial-2026/trofeo.webp"
          alt="Trofeo de la Copa del Mundo de la FIFA sobre césped"
          width={1200}
          height={1200}
          priority
          sizes="(min-width: 768px) 672px, 100vw"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="flex flex-col gap-4 text-sm text-stone-700 leading-relaxed">
        <p>
          A poco más de seis semanas para el inicio, el Mundial 2026 ya tiene
          todo lo importante definido. Los grupos están sorteados desde el 5 de
          diciembre de 2025, los 48 participantes están confirmados, y la
          conversación sobre favoritos empieza a tomar forma con cada amistoso y
          cada lesión que aparece.
        </p>

        <p>
          Esta guía repasa lo esencial antes del torneo: el nuevo formato, los
          doce grupos completos, las selecciones que llegan mejor situadas y los
          favoritos según las cuotas a finales de abril. No es una recomendación
          de apuesta ni una predicción cerrada. Es una lectura del contexto
          antes de que ruede el balón.
        </p>

        <h2 className="text-xl font-bold text-stone-800 tracking-tight mt-6 mb-2">
          Qué se sabe del Mundial 2026
        </h2>

        <p>
          La gran novedad es el formato. El Mundial pasa de 32 a 48 selecciones
          y se jugarán 104 partidos. Habrá 12 grupos de cuatro equipos. Pasan
          los dos primeros de cada grupo y los ocho mejores terceros, lo que
          forma una eliminatoria de 32 selecciones. Eso añade una ronda más
          respecto al formato clásico: quien llegue a la final habrá disputado
          ocho partidos, no siete.
        </p>

        <p>
          El torneo empezará el{' '}
          <strong className="font-semibold text-stone-800">
            11 de junio de 2026
          </strong>{' '}
          y terminará el{' '}
          <strong className="font-semibold text-stone-800">
            19 de julio de 2026
          </strong>
          . El partido inaugural enfrentará a México y Sudáfrica en el Estadio
          Azteca de Ciudad de México. La final se jugará en el MetLife Stadium
          de Nueva York/Nueva Jersey.
        </p>

        <p>
          El cambio de formato afecta directamente a la lectura del torneo. Ya
          no basta con tener un once titular fuerte. Hará falta plantilla larga,
          buena gestión de minutos y capacidad para sobrevivir a una ronda
          eliminatoria más, todo en un torneo que se reparte entre tres países
          con diferencias de huso horario, clima y altitud.
        </p>

        <p>
          Conviene también recordar a los grandes ausentes.{' '}
          <strong className="font-semibold text-stone-800">
            Italia se queda fuera por tercer Mundial consecutivo
          </strong>{' '}
          tras caer en penaltis ante Bosnia y Herzegovina en la final del
          playoff europeo del 31 de marzo. Es el único campeón del mundo que no
          estará en Norteamérica. Tampoco estarán Dinamarca, Polonia, Serbia,
          Gales, Camerún ni Costa Rica.
        </p>

        <h2 className="text-xl font-bold text-stone-800 tracking-tight mt-6 mb-2">
          Selecciones clasificadas y grupos del Mundial 2026
        </h2>

        <p>
          La ampliación a 48 selecciones abre la puerta a varios debutantes.
          Esta edición verá por primera vez en un Mundial a{' '}
          <strong className="font-semibold text-stone-800">
            Cabo Verde, Curazao, Jordania y Uzbekistán
          </strong>
          . Curazao se convierte además en la nación más pequeña por población
          que haya disputado nunca un Mundial.
        </p>

        <p>Estos son los 12 grupos del Mundial 2026:</p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse my-2">
            <thead>
              <tr>
                <th className="bg-stone-100 text-left px-3 py-2 font-semibold text-stone-800 text-xs uppercase tracking-wide">
                  Grupo
                </th>
                <th className="bg-stone-100 text-left px-3 py-2 font-semibold text-stone-800 text-xs uppercase tracking-wide">
                  Selecciones
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-t border-stone-200 px-3 py-2">
                  <strong className="font-semibold text-stone-800">A</strong>
                </td>
                <td className="border-t border-stone-200 px-3 py-2">
                  México, Sudáfrica, Corea del Sur, Chequia
                </td>
              </tr>
              <tr>
                <td className="border-t border-stone-200 px-3 py-2">
                  <strong className="font-semibold text-stone-800">B</strong>
                </td>
                <td className="border-t border-stone-200 px-3 py-2">
                  Canadá, Bosnia y Herzegovina, Qatar, Suiza
                </td>
              </tr>
              <tr>
                <td className="border-t border-stone-200 px-3 py-2">
                  <strong className="font-semibold text-stone-800">C</strong>
                </td>
                <td className="border-t border-stone-200 px-3 py-2">
                  Brasil, Marruecos, Haití, Escocia
                </td>
              </tr>
              <tr>
                <td className="border-t border-stone-200 px-3 py-2">
                  <strong className="font-semibold text-stone-800">D</strong>
                </td>
                <td className="border-t border-stone-200 px-3 py-2">
                  Estados Unidos, Paraguay, Australia, Turquía
                </td>
              </tr>
              <tr>
                <td className="border-t border-stone-200 px-3 py-2">
                  <strong className="font-semibold text-stone-800">E</strong>
                </td>
                <td className="border-t border-stone-200 px-3 py-2">
                  Alemania, Curazao, Costa de Marfil, Ecuador
                </td>
              </tr>
              <tr>
                <td className="border-t border-stone-200 px-3 py-2">
                  <strong className="font-semibold text-stone-800">F</strong>
                </td>
                <td className="border-t border-stone-200 px-3 py-2">
                  Países Bajos, Japón, Suecia, Túnez
                </td>
              </tr>
              <tr>
                <td className="border-t border-stone-200 px-3 py-2">
                  <strong className="font-semibold text-stone-800">G</strong>
                </td>
                <td className="border-t border-stone-200 px-3 py-2">
                  Bélgica, Egipto, Irán, Nueva Zelanda
                </td>
              </tr>
              <tr>
                <td className="border-t border-stone-200 px-3 py-2">
                  <strong className="font-semibold text-stone-800">H</strong>
                </td>
                <td className="border-t border-stone-200 px-3 py-2">
                  España, Cabo Verde, Arabia Saudí, Uruguay
                </td>
              </tr>
              <tr>
                <td className="border-t border-stone-200 px-3 py-2">
                  <strong className="font-semibold text-stone-800">I</strong>
                </td>
                <td className="border-t border-stone-200 px-3 py-2">
                  Francia, Senegal, Iraq, Noruega
                </td>
              </tr>
              <tr>
                <td className="border-t border-stone-200 px-3 py-2">
                  <strong className="font-semibold text-stone-800">J</strong>
                </td>
                <td className="border-t border-stone-200 px-3 py-2">
                  Argentina, Argelia, Austria, Jordania
                </td>
              </tr>
              <tr>
                <td className="border-t border-stone-200 px-3 py-2">
                  <strong className="font-semibold text-stone-800">K</strong>
                </td>
                <td className="border-t border-stone-200 px-3 py-2">
                  Portugal, RD Congo, Uzbekistán, Colombia
                </td>
              </tr>
              <tr>
                <td className="border-t border-stone-200 px-3 py-2">
                  <strong className="font-semibold text-stone-800">L</strong>
                </td>
                <td className="border-t border-stone-200 px-3 py-2">
                  Inglaterra, Croacia, Ghana, Panamá
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Hay grupos con lectura clara desde el sorteo.{' '}
          <strong className="font-semibold text-stone-800">
            España y Uruguay comparten Grupo H
          </strong>{' '}
          y se medirán el 26 de junio en Zapopan.{' '}
          <strong className="font-semibold text-stone-800">
            Francia tiene a Senegal y Noruega en el Grupo I
          </strong>
          , posiblemente el grupo más exigente del torneo.{' '}
          <strong className="font-semibold text-stone-800">
            Inglaterra y Croacia repiten el cruce
          </strong>{' '}
          que tantas veces se han visto las caras en los últimos años.{' '}
          <strong className="font-semibold text-stone-800">
            Brasil-Marruecos
          </strong>{' '}
          abrirá el Grupo C el 13 de junio, una repetición de uno de los
          amistosos más comentados de los últimos meses. Y{' '}
          <strong className="font-semibold text-stone-800">Portugal</strong>{' '}
          tendrá un grupo intenso con Colombia, RD Congo y Uzbekistán: nada
          parece sencillo más allá del nombre de cada selección.
        </p>

        <p>
          El detalle importante es que el tercer puesto puede valer una
          clasificación. Eso cambia la forma de mirar la fase de grupos: no solo
          importa quedar primero, también sumar bien y cuidar la diferencia de
          goles.
        </p>

        <h2 className="text-xl font-bold text-stone-800 tracking-tight mt-6 mb-2">
          Favoritos del Mundial 2026 según las cuotas
        </h2>

        <p>
          Las cuotas sirven como fotografía del mercado, no como verdad
          absoluta. Cambian con lesiones, convocatorias, amistosos y volumen de
          apuestas. Aun así, ayudan a entender qué selecciones están siendo más
          respetadas antes del torneo.
        </p>

        <p>
          A finales de abril, las principales casas (BetMGM, DraftKings, ESPN
          BET) sitúan al primer grupo de favoritas así:
        </p>

        <ul className="list-disc pl-5 flex flex-col gap-2">
          <li>
            <strong className="font-semibold text-stone-800">España:</strong>{' '}
            +450
          </li>
          <li>
            <strong className="font-semibold text-stone-800">Francia:</strong>{' '}
            +550
          </li>
          <li>
            <strong className="font-semibold text-stone-800">
              Inglaterra:
            </strong>{' '}
            +650
          </li>
          <li>
            <strong className="font-semibold text-stone-800">Brasil:</strong>{' '}
            +800
          </li>
          <li>
            <strong className="font-semibold text-stone-800">
              Argentina:
            </strong>{' '}
            +850
          </li>
          <li>
            <strong className="font-semibold text-stone-800">
              Portugal:
            </strong>{' '}
            +1100
          </li>
          <li>
            <strong className="font-semibold text-stone-800">Alemania:</strong>{' '}
            +1400
          </li>
        </ul>

        <p>
          En Polymarket, donde el mercado es de probabilidad implícita en lugar
          de cuota americana,{' '}
          <strong className="font-semibold text-stone-800">
            Francia lidera con 17% y España con 15%
          </strong>
          , seguidas de Inglaterra al 11%.
        </p>

        <p>
          Hay un detalle que no se puede pasar por alto en abril: tras la lesión
          reciente de Lamine Yamal,{' '}
          <strong className="font-semibold text-stone-800">
            Francia ha igualado o superado a España como favorita en varias
            casas
          </strong>
          . Es un buen ejemplo de cómo una sola noticia puede mover toda la
          conversación.
        </p>

        <p>
          <strong className="font-semibold text-stone-800">España</strong>{' '}
          llega con la base de la Eurocopa 2024 ganada y un proyecto
          reconocible. Rodri da orden, Pedri marca diferencias entre líneas y
          Lamine Yamal había transformado el techo ofensivo del equipo. La
          pregunta clave ahora es si Yamal llega a tiempo y con qué nivel.
        </p>

        <p>
          <strong className="font-semibold text-stone-800">Francia</strong>{' '}
          sigue siendo una selección construida para torneos grandes. Mbappé
          condiciona toda la lectura ofensiva, pero Deschamps ha trabajado años
          con un bloque físico, competitivo y acostumbrado a eliminatorias.
        </p>

        <p>
          <strong className="font-semibold text-stone-800">Inglaterra</strong>{' '}
          tiene a Kane como referente, Bellingham con peso en las dos áreas y
          opciones desde fuera con Saka, Foden, Palmer o Rice. El talento
          individual nunca ha sido el problema. La duda es si esta vez el equipo
          será capaz de jugar suelto en una eliminatoria cerrada.
        </p>

        <p>
          <strong className="font-semibold text-stone-800">Brasil</strong>, con
          Carlo Ancelotti en el banquillo, llega más estructurado de lo que
          solía. Vinícius y Raphinha son la amenaza por las bandas; Marquinhos
          sostiene la defensa. Si encuentra continuidad y equilibrio, su techo
          sigue siendo de los más altos del torneo.
        </p>

        <p>
          <strong className="font-semibold text-stone-800">Argentina</strong>{' '}
          es la campeona vigente. Scaloni mantiene buena parte del bloque que
          ganó Qatar 2022, y nadie en el ranking se atreve a darla por muerta.
          El gran foco está en Messi: si llega y juega, cambia la dimensión
          emocional del grupo. Si no, Argentina seguirá siendo dura, pero
          perderá parte de su aura.
        </p>

        <p>
          Por detrás aparecen{' '}
          <strong className="font-semibold text-stone-800">
            Portugal, Alemania y Países Bajos
          </strong>
          . Portugal mezcla a Cristiano Ronaldo con Bruno Fernandes, Bernardo
          Silva, Vitinha, Rafael Leão y Gonçalo Ramos: si Roberto Martínez
          encuentra equilibrio, no es una selección menor. Alemania llega con
          Wirtz, Musiala y Kimmich como ejes y un grupo amable que le permite
          construir confianza temprano.
        </p>

        <h2 className="text-xl font-bold text-stone-800 tracking-tight mt-6 mb-2">
          Factores que pueden cambiar el escenario
        </h2>

        <p>
          <strong className="font-semibold text-stone-800">
            Estado físico de las estrellas.
          </strong>{' '}
          El Mundial empieza justo después de una temporada larga en Europa.
          Casos como Lamine Yamal, Mbappé, Messi, Cristiano Ronaldo, Haaland o
          Vinícius hay que seguirlos con calma hasta convocatorias. Una molestia
          en abril no significa una baja en junio, pero sí puede afectar al
          ritmo.
        </p>

        <p>
          <strong className="font-semibold text-stone-800">
            Profundidad de plantilla.
          </strong>{' '}
          Con 48 equipos, 104 partidos y una ronda eliminatoria extra, las
          selecciones que dependan demasiado de once jugadores van a sufrir. Las
          que tengan banquillo de verdad podrán rotar sin perder tanto nivel.
        </p>

        <p>
          <strong className="font-semibold text-stone-800">El cuadro.</strong>{' '}
          Un mal resultado en fase de grupos puede cambiarlo todo. Aunque pasen
          varios terceros, caer en una zona complicada puede adelantar un cruce
          duro.
        </p>

        <p>
          <strong className="font-semibold text-stone-800">Logística.</strong>{' '}
          Se juega en tres países con sedes muy separadas. Viajes, clima,
          horarios y descanso pueden tener más peso de lo habitual.
        </p>

        <h2 className="text-xl font-bold text-stone-800 tracking-tight mt-6 mb-2">
          Qué vigilar antes del 11 de junio
        </h2>

        <p>
          Más que cerrar una predicción definitiva en abril, conviene seguir
          cinco puntos:
        </p>

        <ol className="list-decimal pl-5 flex flex-col gap-2">
          <li>
            <strong className="font-semibold text-stone-800">
              Convocatorias definitivas
            </strong>{' '}
            y plazos de entrega de jugadores por los clubes (24 de mayo es el
            último partido oficial; los clubes liberan jugadores el 25 de mayo).
          </li>
          <li>
            <strong className="font-semibold text-stone-800">
              Estado físico de las estrellas
            </strong>
            , especialmente la evolución de Yamal y la situación de Messi.
          </li>
          <li>
            <strong className="font-semibold text-stone-800">
              Primeros cruces del cuadro
            </strong>
            , una vez se confirmen los terceros que pasan a la eliminatoria de
            32.
          </li>
          <li>
            <strong className="font-semibold text-stone-800">
              Gestión de minutos
            </strong>{' '}
            en las primeras dos jornadas de grupos, que dirá mucho sobre qué
            selecciones llegan con plan claro.
          </li>
          <li>
            <strong className="font-semibold text-stone-800">
              Adaptación a sedes y clima
            </strong>
            , sobre todo para selecciones europeas que jueguen en altitud
            (Ciudad de México, Guadalajara) o con calor extremo (Houston,
            Dallas).
          </li>
        </ol>

        <h2 className="text-xl font-bold text-stone-800 tracking-tight mt-6 mb-2">
          Conclusión
        </h2>

        <p>
          El Mundial 2026 no se puede leer como una edición normal. Hay más
          selecciones, más partidos y una ronda eliminatoria extra. Las cuotas
          apuntan a un grupo principal de favoritas —España, Francia,
          Inglaterra, Brasil y Argentina—, con Portugal y Alemania asomando
          justo detrás. Pero el torneo aún tiene muchas variables abiertas:
          convocatorias, estado físico real de las estrellas y un mes largo de
          competición en el que los detalles pueden cambiarlo todo.
        </p>

        <p>
          En IAPredictHub iremos actualizando la lectura del torneo desde un
          enfoque editorial. Puedes ver la versión visual y resumida en el{' '}
          <Link
            href="/especial/mundial"
            className="text-purple-600 hover:text-purple-700 font-semibold transition-colors"
          >
            Especial Mundial 2026 de IAPredictHub
          </Link>
          . Y si además quieres revisar la parte de operadores y promociones,
          puedes consultar la sección de{' '}
          <Link
            href="/casas"
            className="text-purple-600 hover:text-purple-700 font-semibold transition-colors"
          >
            bonos de bienvenida
          </Link>
          .
        </p>

        <h2 className="text-xl font-bold text-stone-800 tracking-tight mt-6 mb-2">
          Preguntas frecuentes
        </h2>

        <h3 className="text-base font-semibold text-stone-800 mt-4 mb-1">
          ¿Cuándo empieza el Mundial 2026?
        </h3>
        <p>
          El Mundial 2026 empieza el 11 de junio de 2026 y termina el 19 de
          julio de 2026.
        </p>

        <h3 className="text-base font-semibold text-stone-800 mt-4 mb-1">
          ¿Dónde se juega el Mundial 2026?
        </h3>
        <p>
          Se juega en Estados Unidos, México y Canadá. Es la primera Copa del
          Mundo masculina organizada por tres países.
        </p>

        <h3 className="text-base font-semibold text-stone-800 mt-4 mb-1">
          ¿Cuántas selecciones participan en el Mundial 2026?
        </h3>
        <p>
          Participan 48 selecciones. Es la primera edición con este formato
          ampliado, que pasa de 32 a 48 equipos.
        </p>

        <h3 className="text-base font-semibold text-stone-800 mt-4 mb-1">
          ¿Qué selecciones debutan en el Mundial 2026?
        </h3>
        <p>
          Cabo Verde, Curazao, Jordania y Uzbekistán disputarán su primera Copa
          del Mundo.
        </p>

        <h3 className="text-base font-semibold text-stone-800 mt-4 mb-1">
          ¿Cómo funcionan los grupos del Mundial 2026?
        </h3>
        <p>
          Hay 12 grupos de cuatro selecciones. Pasan los dos primeros de cada
          grupo y los ocho mejores terceros, formando una eliminatoria de 32
          equipos.
        </p>

        <h3 className="text-base font-semibold text-stone-800 mt-4 mb-1">
          ¿Quiénes son los favoritos del Mundial 2026?
        </h3>
        <p>
          Según las cuotas a finales de abril, España, Francia, Inglaterra,
          Brasil y Argentina aparecen entre las principales favoritas. Portugal
          y Alemania asoman justo detrás. Las cuotas son una referencia del
          mercado, no una predicción segura.
        </p>

        <h3 className="text-base font-semibold text-stone-800 mt-4 mb-1">
          ¿Está Italia en el Mundial 2026?
        </h3>
        <p>
          No. Italia quedó eliminada en la final del playoff europeo ante Bosnia
          y Herzegovina el 31 de marzo de 2026. Es el tercer Mundial consecutivo
          sin la selección italiana.
        </p>
      </div>
    </article>
  )
}
