export type CombinadaData = {
  etiquetaDia: string
  cuotaTotal: string
  confianza: string
  horaActualizacion: string
  notaConfianza: string
  motivoGeneral: string
  casa?: {
    texto: string
    nombre: string
    url: string
  }
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
  etiquetaDia: 'martes 16 de junio',
  cuotaTotal: '3,487',
  confianza: 'Combinada recreativa',
  horaActualizacion: '12:00',
  notaConfianza: 'Pick recreativo, no apuesta garantizada.',
  motivoGeneral: 'Combinada de cuota 3,487 para seguir la jornada con tres mercados seleccionados. Pick recreativo, no apuesta garantizada.',
  casa: {
    texto: 'Hecha en Sportium',
    nombre: 'Sportium',
    url: 'https://bdeal.io/Sportium/136726/1',
  },
  picks: [
    {
      text: 'Francia - Senegal · Más de 1,5 goles de Francia @ 1,55',
      partido: 'Francia - Senegal',
      mercado: 'Más de 1,5 goles de Francia',
      cuota: '1,55',
    },
    {
      text: 'Argentina - Argelia · Argelia 14 o más faltas cometidas @ 1,50',
      partido: 'Argentina - Argelia',
      mercado: 'Argelia 14 o más faltas cometidas',
      cuota: '1,50',
    },
    {
      text: 'Austria - Jordania · Más de 1,5 goles de Austria @ 1,50',
      partido: 'Austria - Jordania',
      mercado: 'Más de 1,5 goles de Austria',
      cuota: '1,50',
    },
  ],
}
