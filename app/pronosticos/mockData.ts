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
  etiquetaDia: 'sábado 13 de junio',
  cuotaTotal: '2,53',
  confianza: 'Combinada recreativa',
  horaActualizacion: '21:00',
  notaConfianza: 'Pick recreativo, no apuesta garantizada.',
  motivoGeneral: 'Combinada de cuota 2,53 para seguir la jornada con dos mercados seleccionados. Pick recreativo, no apuesta garantizada.',
  picks: [
    {
      text: 'Catar - Suiza · Suiza gana por al menos 2 goles de diferencia: Sí @ 1,56',
      partido: 'Catar - Suiza',
      hora: 'Hoy 21:00',
      mercado: 'Suiza gana por al menos 2 goles de diferencia: Sí',
      cuota: '1,56',
    },
    {
      text: 'Brasil - Marruecos · Más de 23,5 faltas cometidas @ 1,62',
      partido: 'Brasil - Marruecos',
      hora: 'Mañana 00:00',
      mercado: 'Más de 23,5 faltas cometidas',
      cuota: '1,62',
    },
  ],
}
