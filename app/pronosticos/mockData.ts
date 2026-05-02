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
  etiquetaDia: 'Sábado 2 de mayo',
  cuotaTotal: '13.53',
  confianza: 'Media · 7/10',
  horaActualizacion: '13:30',
  notaConfianza: 'Basada en la solidez de los visitantes en Inglaterra y Francia, junto con la eficiencia goleadora en España.',
  motivoGeneral: 'Se aprovecha la urgencia del Lens por el título y la superioridad del Sunderland ante unos Wolves ya descendidos. Se complementa con tendencias de goles altas en Villarreal y Newcastle respaldadas por xG.',
  picks: [
    {
      text: 'Villarreal vs Levante · Más de 2.5 goles @ 1.91',
      partido: 'Villarreal vs Levante',
      liga: 'La Liga',
      hora: '13:00',
      mercado: 'Más de 2.5 goles',
      cuota: '1.91',
      probabilidadModelo: '0.530',
      fairOdds: '1.89',
      ev: '0.012',
      motivoCorto: 'Villarreal promedia 2.25 goles en casa y el Levante es la defensa más goleada fuera de casa.',
    },
    {
      text: 'Newcastle vs Brighton · Más de 2.5 goles @ 1.75',
      partido: 'Newcastle vs Brighton',
      liga: 'Premier League',
      hora: '16:00',
      mercado: 'Más de 2.5 goles',
      cuota: '1.75',
      probabilidadModelo: '0.570',
      fairOdds: '1.75',
      ev: '-0.002',
      motivoCorto: 'Historial de enfrentamientos directos ofensivos y promedios de xG combinados superiores a 2.80.',
    },
    {
      text: 'Wolves vs Sunderland · Gana visitante @ 2.25',
      partido: 'Wolves vs Sunderland',
      liga: 'Premier League',
      hora: '16:00',
      mercado: 'Gana visitante',
      cuota: '2.25',
      probabilidadModelo: '0.444',
      fairOdds: '2.25',
      ev: '0.000',
      motivoCorto: 'Wolves está descendido, no ha marcado en tres partidos y pierde a su portero titular por lesión.',
    },
    {
      text: 'Nice vs Lens · Gana visitante @ 1.80',
      partido: 'Nice vs Lens',
      liga: 'Ligue 1',
      hora: '20:05',
      mercado: 'Gana visitante',
      cuota: '1.80',
      probabilidadModelo: '0.521',
      fairOdds: '1.92',
      ev: '0.036',
      motivoCorto: 'Lens pelea el título con una racha de 19/20 partidos marcando ante un Niza en zona baja.',
    }
  ],
}
