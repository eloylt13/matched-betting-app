export type CombinadaData = {
  etiquetaDia: string
  cuotaTotal: string
  confianza: string
  horaActualizacion: string
  notaConfianza: string
  motivoGeneral: string
  picks: Array<{
    text: string
    motivoBreve?: string
    partido?: string
    liga?: string
    hora?: string
    mercado?: string
    cuota?: string
    probabilidadModelo?: string
    fairOdds?: string
    ev?: string
    motivoCorto?: string
  }>
}

export const combinadaDelDia: CombinadaData = {
  etiquetaDia: 'Sábado 4 de abril de 2026',
  cuotaTotal: '5.95',
  confianza: 'Alta · 8/10',
  horaActualizacion: '16:30',
  notaConfianza: 'Selección basada en modelos de alta producción goleadora en Alemania y la necesidad competitiva de los líderes en España y Portugal.',
  motivoGeneral:
    'El modelo prioriza encuentros con ineficiencias en las cuotas de goles en Bundesliga y la disparidad estadística entre favoritos y equipos en zona de descenso. La solidez defensiva del Porto y el Real Madrid actúa como seguro ante bajas ofensivas.',
  picks: [
    {
      text: 'VfB Stuttgart vs Borussia Dortmund · Más de 2.5 goles @ 1.44',
      partido: 'VfB Stuttgart vs Borussia Dortmund',
      liga: 'Bundesliga',
      hora: '15:30',
      mercado: 'Más de 2.5 goles',
      cuota: '1.44',
      probabilidadModelo: '0.765',
      fairOdds: '1.31',
      ev: '0.101',
      motivoCorto: 'Ambos equipos promedian más de 3.5 goles totales en sus últimos encuentros y el Dortmund ha anotado 2+ goles en 13 jornadas seguidas.',
    },
    {
      text: 'AZ Alkmaar vs Fortuna Sittard · Gana local @ 1.37',
      partido: 'AZ Alkmaar vs Fortuna Sittard',
      liga: 'Eredivisie',
      hora: '17:45',
      mercado: 'Gana local',
      cuota: '1.37',
      probabilidadModelo: '0.750',
      fairOdds: '1.33',
      ev: '0.027',
      motivoCorto: 'El AZ ha vencido en 8 de los últimos 10 choques directos y el Fortuna concede más de 2 goles por partido como visitante.',
    },
    {
      text: 'Mallorca vs Real Madrid · Gana visitante @ 1.53',
      partido: 'Mallorca vs Real Madrid',
      liga: 'La Liga',
      hora: '15:15',
      mercado: 'Gana visitante',
      cuota: '1.53',
      probabilidadModelo: '0.665',
      fairOdds: '1.50',
      ev: '0.017',
      motivoCorto: 'El Madrid es el mejor visitante de la liga y se enfrenta al 18º clasificado, que ha perdido 15 partidos en la temporada.',
    },
    {
      text: 'FC Porto vs Famalicão · Gana local @ 1.41',
      partido: 'FC Porto vs Famalicão',
      liga: 'Primeira Liga',
      hora: '20:30',
      mercado: 'Gana local',
      cuota: '1.41',
      probabilidadModelo: '0.715',
      fairOdds: '1.40',
      ev: '0.008',
      motivoCorto: 'El Porto es el mejor local de Portugal (11W-2D) y su defensa solo ha encajado 11 goles en toda la competición.',
    },
    {
      text: 'SC Freiburg vs Bayern Munich · Más de 2.5 goles @ 1.40',
      motivoBreve: 'Bundesliga · 15:30 · p=0.720 · justa 1.39 · EV 0.008 · El Bayern promedia 3.1 goles fuera de casa y la tendencia histórica muestra Over 2.5 en 12 de los últimos 14 duelos directos.',
      partido: 'SC Freiburg vs Bayern Munich',
      liga: 'Bundesliga',
      hora: '15:30',
      mercado: 'Más de 2.5 goles',
      cuota: '1.40',
      probabilidadModelo: '0.720',
      fairOdds: '1.39',
      ev: '0.008',
      motivoCorto: 'El Bayern promedia 3.1 goles fuera de casa y la tendencia histórica muestra Over 2.5 en 12 de los últimos 14 duelos directos.',
    },
  ],
}

