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
  etiquetaDia: 'domingo 3 de mayo',
  cuotaTotal: '8.95',
  confianza: 'Media · 7/10',
  horaActualizacion: '10:56',
  notaConfianza: 'Ajustada según los picks de la imagen; cuota total ligeramente inferior al rango objetivo pero con alta probabilidad de acierto en mercados de goles.',
  motivoGeneral: 'Se combinan la solidez del United en casa ante un Liverpool mermado con la alta tendencia de goles en ambas porterías de los duelos de Villa Park, Friburgo y Cornellà.',
  picks: [
    {
      text: 'Manchester United vs Liverpool · Gana local @ 2.30',
      partido: 'Manchester United vs Liverpool',
      liga: 'Premier League',
      hora: '07:30',
      mercado: 'Gana local',
      cuota: '2.30',
      probabilidadModelo: '0.574',
      fairOdds: '1.74',
      ev: '0.320',
      motivoCorto: 'El United de Carrick es el mejor equipo de 2026; Liverpool llega sin Salah ni Ekitike por lesión.',
    },
    {
      text: 'Aston Villa vs Tottenham · Ambos equipos anotarán @ 1.61',
      partido: 'Aston Villa vs Tottenham',
      liga: 'Premier League',
      hora: '11:00',
      mercado: 'Ambos equipos anotarán',
      cuota: '1.61',
      probabilidadModelo: '0.650',
      fairOdds: '1.54',
      ev: '0.046',
      motivoCorto: 'Ambos equipos superan el gol recibido por partido y presentan plantillas volcadas al ataque.',
    },
    {
      text: 'SC Friburgo vs Wolfsburgo · Ambos equipos anotarán @ 1.53',
      partido: 'SC Friburgo vs Wolfsburgo',
      liga: 'Bundesliga',
      hora: '15:30',
      mercado: 'Ambos equipos anotarán',
      cuota: '1.53',
      probabilidadModelo: '0.680',
      fairOdds: '1.47',
      ev: '0.040',
      motivoCorto: 'Duelo de zona media en Bundesliga con tendencia histórica de goles en ambos arcos.',
    },
    {
      text: 'Espanyol vs Real Madrid · Ambos equipos anotarán @ 1.57',
      partido: 'Espanyol vs Real Madrid',
      liga: 'La Liga',
      hora: '21:00',
      mercado: 'Ambos equipos anotarán',
      cuota: '1.57',
      probabilidadModelo: '0.670',
      fairOdds: '1.49',
      ev: '0.051',
      motivoCorto: 'El Madrid encaja con facilidad fuera de casa y el Espanyol se juega la permanencia ante su público.',
    }
  ],
}
