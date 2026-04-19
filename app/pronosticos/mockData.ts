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
  etiquetaDia: 'Domingo 19 de abril',
  cuotaTotal: '13.96',
  confianza: 'Media · 7/10',
  horaActualizacion: '13:45',
  notaConfianza: 'Basada en la alta correlación ofensiva de los enfrentamientos directos en ligas Tier 1.',
  motivoGeneral: 'Se seleccionan cuatro partidos de las principales ligas europeas con promedios de goles superiores a la media y necesidades competitivas críticas que favorecen el mercado de Más de goles.',
  picks: [
    {
      text: 'Bayern Munich vs Stuttgart · Más de 3.5 goles @ 2.15',
      partido: 'Bayern Munich vs Stuttgart',
      liga: 'Bundesliga',
      hora: '16:30',
      mercado: 'Más de 3.5 goles',
      cuota: '2.15',
      probabilidadModelo: '0.580',
      fairOdds: '1.72',
      ev: '0.247',
      motivoCorto: 'El Bayern promedia 4.55 goles totales por partido y el 83% de sus juegos superan la línea de 3.5.',
    },
    {
      text: 'Manchester City vs Arsenal · Más de 2.5 goles @ 1.95',
      partido: 'Manchester City vs Arsenal',
      liga: 'Premier League',
      hora: '17:30',
      mercado: 'Más de 2.5 goles',
      cuota: '1.95',
      probabilidadModelo: '0.620',
      fairOdds: '1.61',
      ev: '0.209',
      motivoCorto: 'Duelo directo por el liderato con dos de los ataques más prolíficos (63 y 62 goles anotados).',
    },
    {
      text: 'Sporting CP vs Benfica · Más de 2.5 goles @ 1.85',
      partido: 'Sporting CP vs Benfica',
      liga: 'Primeira Liga',
      hora: '18:00',
      mercado: 'Más de 2.5 goles',
      cuota: '1.85',
      probabilidadModelo: '0.560',
      fairOdds: '1.78',
      ev: '0.036',
      motivoCorto: 'Derby de Lisboa entre el equipo más goleador y un Benfica invicto con necesidad de victoria.',
    },
    {
      text: 'Everton vs Liverpool · Más de 2.5 goles @ 1.80',
      partido: 'Everton vs Liverpool',
      liga: 'Premier League',
      hora: '15:00',
      mercado: 'Más de 2.5 goles',
      cuota: '1.80',
      probabilidadModelo: '0.580',
      fairOdds: '1.72',
      ev: '0.044',
      motivoCorto: 'Derby de Merseyside con el Liverpool obligado a ganar para entrar en puestos de Champions League.',
    }
  ],
}
