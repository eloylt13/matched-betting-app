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
  etiquetaDia: 'Sábado 11 de abril',
  cuotaTotal: '2.83',
  confianza: 'Alta · 8/10',
  horaActualizacion: '12:45',
  notaConfianza: 'Basada en xG acumulado y bajas críticas en defensa.',
  motivoGeneral: 'Explotamos la fragilidad defensiva en la Bundesliga y la superioridad histórica del Barcelona y Sporting en sus feudos frente a rivales con bajas clave.',
  picks: [
    {
      text: 'Borussia Dortmund vs Bayer Leverkusen · Más de 2.5 goles @ 1.53',
      partido: 'Borussia Dortmund vs Bayer Leverkusen',
      liga: 'Bundesliga',
      hora: '13:30',
      mercado: 'Más de 2.5 goles',
      cuota: '1.53',
      probabilidadModelo: '0.680',
      fairOdds: '1.47',
      ev: '0.040',
      motivoCorto: 'Bajas de Emre Can y Quansah en defensas que conceden un xG combinado superior a 4.5.',
    },
    {
      text: 'FC Barcelona vs Espanyol · Gana local @ 1.32',
      partido: 'FC Barcelona vs Espanyol',
      liga: 'La Liga',
      hora: '17:30',
      mercado: 'Gana local',
      cuota: '1.32',
      probabilidadModelo: '0.771',
      fairOdds: '1.30',
      ev: '0.017',
      motivoCorto: 'Récord impecable de 15/15 en casa y el Espanyol llega sin su capitán y goleador Javi Puado.',
    },
    {
      text: 'Estrela da Amadora vs Sporting CP · Más de 1.5 goles @ 1.40',
      partido: 'Estrela da Amadora vs Sporting CP',
      liga: 'Primeira Liga',
      hora: '20:30',
      mercado: 'Más de 1.5 goles',
      cuota: '1.40',
      probabilidadModelo: '0.720',
      fairOdds: '1.39',
      ev: '0.008',
      motivoCorto: 'Sporting promedia 2.67 goles/partido impulsado por el estado de gracia de Luis Suárez con 24 tantos.',
    }
  ],
}
