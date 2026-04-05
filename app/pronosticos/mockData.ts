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
  etiquetaDia: 'Domingo 5 de abril',
  cuotaTotal: '4.61',
  confianza: 'Alta · 8/10',
  horaActualizacion: '12:15',
  notaConfianza: 'Superioridad manifiesta en Eredivisie y crisis de bajas en la Roma.',
  motivoGeneral: 'La combinada se basa en la victoria de tres favoritos claros (Feyenoord, Inter, Heerenveen) con cuotas sólidas y dos picks de goles apoyados en las altas medias de anotación de la Ligue 1 y Bundesliga. Se ha priorizado la fiabilidad de las plantillas titulares frente a rivales mermados.',
  picks: [
    {
      text: 'Heerenveen vs Heracles · Gana local @ 1.40',
      partido: 'Heerenveen vs Heracles',
      liga: 'Eredivisie',
      hora: '13:30',
      mercado: 'Gana local',
      cuota: '1.40',
      probabilidadModelo: '0.765',
      fairOdds: '1.31',
      ev: '0.068',
      motivoCorto: 'Heerenveen (7º) promedia 1.8 goles ante un Heracles que ha perdido 7 de sus últimos 10 partidos.',
    },
    {
      text: 'FC Volendam vs Feyenoord · Gana visitante @ 1.33',
      partido: 'FC Volendam vs Feyenoord',
      liga: 'Eredivisie',
      hora: '13:30',
      mercado: 'Gana visitante',
      cuota: '1.33',
      probabilidadModelo: '0.810',
      fairOdds: '1.23',
      ev: '0.081',
      motivoCorto: 'Feyenoord cuenta con el máximo goleador Ueda (22 goles) frente a la peor defensa de la liga.',
    },
    {
      text: 'AS Monaco vs Olympique de Marsella · Más de 1.5 goles @ 1.25',
      partido: 'AS Monaco vs Olympique de Marsella',
      liga: 'Ligue 1',
      hora: '19:45',
      mercado: 'Más de 1.5 goles',
      cuota: '1.25',
      probabilidadModelo: '0.872',
      fairOdds: '1.15',
      ev: '0.087',
      motivoCorto: 'Monaco ha marcado 2+ goles en sus últimos 8 partidos y Marsella ha encajado 2+ en 5 de sus últimas 6 salidas.',
    },
    {
      text: 'Inter de Milán vs AS Roma · Gana local @ 1.55',
      partido: 'Inter de Milán vs AS Roma',
      liga: 'Serie A',
      hora: '19:45',
      mercado: 'Gana local',
      cuota: '1.55',
      probabilidadModelo: '0.700',
      fairOdds: '1.43',
      ev: '0.084',
      motivoCorto: 'Roma viaja sin sus tres máximos goleadores por lesión; Inter recupera a la dupla Lautaro-Thuram.',
    },
    {
      text: 'Eintracht Frankfurt vs 1. FC Köln · Más de 1.5 goles @ 1.28',
      partido: 'Eintracht Frankfurt vs 1. FC Köln',
      liga: 'Bundesliga',
      hora: '16:30',
      mercado: 'Más de 1.5 goles',
      cuota: '1.28',
      probabilidadModelo: '0.840',
      fairOdds: '1.19',
      ev: '0.075',
      motivoCorto: 'Alta tendencia goleadora en Bundesliga; Frankfurt supera este umbral en el 85% de sus partidos en casa.',
    }
  ],
}
