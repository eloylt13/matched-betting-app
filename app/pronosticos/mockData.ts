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
  etiquetaDia: 'viernes 17 de abril',
  cuotaTotal: '10.14',
  confianza: 'Media · 7/10',
  horaActualizacion: '12:43',
  notaConfianza: 'Basada en la alta eficiencia ofensiva local y las debilidades defensivas críticas de los visitantes en ligas Tier 1.',
  motivoGeneral: 'Se seleccionan partidos con una alta correlación entre la necesidad de puntos y la fragilidad defensiva de los rivales. La combinada aprovecha el excelente momento goleador de Inter, Lens y Colonia, junto con la superioridad técnica manifiesta del Rio Ave ante el colista de Portugal.',
  picks: [
    {
      text: 'Inter vs Cagliari · Más de 2.5 goles @ 1.57',
      partido: 'Inter vs Cagliari',
      liga: 'Serie A',
      hora: '20:45',
      mercado: 'Más de 2.5 goles',
      cuota: '1.57',
      probabilidadModelo: '0.730',
      fairOdds: '1.37',
      ev: '0.146',
      motivoCorto: 'Inter promedia 2.34 goles y el Cagliari ha encajado en todos sus enfrentamientos contra los líderes esta temporada.',
    },
    {
      text: 'Lens vs Toulouse · Más de 2.5 goles @ 1.75',
      partido: 'Lens vs Toulouse',
      liga: 'Ligue 1',
      hora: '20:45',
      mercado: 'Más de 2.5 goles',
      cuota: '1.75',
      probabilidadModelo: '0.650',
      fairOdds: '1.54',
      ev: '0.138',
      motivoCorto: 'Lens anota 2.21 goles por partido en casa y el Toulouse pierde a su central titular McKenzie por sanción.',
    },
    {
      text: 'St. Pauli vs Koln · Más de 2.5 goles @ 2.21',
      partido: 'St. Pauli vs Koln',
      liga: 'Bundesliga',
      hora: '20:30',
      mercado: 'Más de 2.5 goles',
      cuota: '2.21',
      probabilidadModelo: '0.520',
      fairOdds: '1.92',
      ev: '0.149',
      motivoCorto: 'El 76% de los partidos del Colonia han cumplido el over de goles gracias a la irrupción de Said El Mala.',
    },
    {
      text: 'Rio Ave vs AVS · Gana local @ 1.67',
      partido: 'Rio Ave vs AVS',
      liga: 'Primeira Liga',
      hora: '21:45',
      mercado: 'Gana local',
      cuota: '1.67',
      probabilidadModelo: '0.660',
      fairOdds: '1.51',
      ev: '0.102',
      motivoCorto: 'El Rio Ave ha ganado 4 de sus últimos 5 partidos y recibe al colista que no ha ganado fuera de casa en toda la temporada.',
    }
  ],
}
