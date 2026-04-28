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
  etiquetaDia: 'martes 28 de abril',
  cuotaTotal: '10.03',
  confianza: 'Media · 7/10',
  horaActualizacion: '09:30',
  notaConfianza: 'Basada en la alta correlación de goles en partidos decisivos de final de temporada.',
  motivoGeneral: 'Combinada de alta probabilidad en mercados de goles. Se aprovecha el colapso defensivo del Northampton, la inercia ofensiva del Bayern en UCL y la tendencia histórica de alta anotación en los playoffs holandeses e ingleses.',
  picks: [
    {
      text: 'Paris Saint-Germain vs FC Bayern · Más de 3.5 goles @ 1.90',
      partido: 'Paris Saint-Germain vs FC Bayern',
      liga: 'UEFA Champions League',
      hora: '20:00',
      mercado: 'Más de 3.5 goles',
      cuota: '1.90',
      probabilidadModelo: '0.541',
      fairOdds: '1.85',
      ev: '0.027',
      motivoCorto: 'Bayern ha anotado 4+ goles en 6 de sus últimos 10 partidos y Kane está en racha goleadora récord.',
    },
    {
      text: 'Roda JC vs RKC Waalwijk · Más de 2.5 goles @ 1.80',
      partido: 'Roda JC vs RKC Waalwijk',
      liga: 'Eredivisie',
      hora: '16:45',
      mercado: 'Más de 2.5 goles',
      cuota: '1.80',
      probabilidadModelo: '0.672',
      fairOdds: '1.49',
      ev: '0.208',
      motivoCorto: 'Waalwijk promedia 4.2 goles en sus últimos partidos y el 80% de sus juegos cumplen el ambos marcan.',
    },
    {
      text: 'Southampton vs Ipswich · Más de 2.5 goles @ 1.81',
      partido: 'Southampton vs Ipswich',
      liga: 'Championship',
      hora: '19:45',
      mercado: 'Más de 2.5 goles',
      cuota: '1.81',
      probabilidadModelo: '0.580',
      fairOdds: '1.72',
      ev: '0.052',
      motivoCorto: 'Duelo directo por el ascenso con dos de las mejores delanteras de Inglaterra (152 goles combinados).',
    },
    {
      text: 'Northampton vs Barnsley · Más de 2.5 goles @ 1.62',
      partido: 'Northampton vs Barnsley',
      liga: 'League One',
      hora: '19:45',
      mercado: 'Más de 2.5 goles',
      cuota: '1.62',
      probabilidadModelo: '0.650',
      fairOdds: '1.54',
      ev: '0.051',
      motivoCorto: 'Northampton ha perdido 9 partidos seguidos y ha concedido 2+ goles en 7 de sus últimos 8 encuentros.',
    }
  ],
}
