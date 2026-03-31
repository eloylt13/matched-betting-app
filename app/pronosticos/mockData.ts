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
  }>
}

export const combinadaDelDia: CombinadaData = {
  etiquetaDia: 'Martes 31 de marzo',
  cuotaTotal: '8.75',
  confianza: 'Alta · 8/10',
  horaActualizacion: '09:30',
  notaConfianza: 'Selección manual del día para la beta',
  motivoGeneral:
    'Combinada orientada a mercados conservadores y favoritos sólidos, buscando equilibrio entre cuota total y margen de acierto.',
  picks: [
    { text: 'Real Madrid gana' },
    { text: 'Más de 1.5 goles en el partido' },
    { text: 'Manchester City marca en ambas partes' },
    { text: 'Inter o empate' },
    { text: 'Más de 8.5 córners totales' },
  ],
}
