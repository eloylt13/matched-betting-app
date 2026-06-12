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
  etiquetaDia: 'viernes 12 de junio',
  cuotaTotal: '3.40',
  confianza: 'Combinada (2)',
  horaActualizacion: '15:40',
  notaConfianza: 'Selección diaria manual con enfoque prudente.',
  motivoGeneral: 'Combinada manual diaria preparada para la jornada.',
  picks: [
    {
      text: 'Canadá - Bosnia y Herzegovina · Ambos equipos marcan Sí @ 2.10',
      partido: 'Canadá - Bosnia y Herzegovina',
      mercado: 'Ambos equipos marcan Sí',
      cuota: '2.10',
    },
    {
      text: 'Estados Unidos - Paraguay · Número de faltas cometidas Más de 23,5 @ 1.62',
      partido: 'Estados Unidos - Paraguay',
      mercado: 'Número de faltas cometidas Más de 23,5',
      cuota: '1.62',
    },
  ],
}
