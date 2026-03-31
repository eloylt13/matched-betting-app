export type CombinadaData = {
  etiquetaDia: string
  cuotaTotal: string
  confianza: string
  horaActualizacion: string
  notaConfianza: string
  motivoGeneral: string
  picks: string[]
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
    'Real Madrid gana',
    'Más de 1.5 goles en el partido',
    'Manchester City marca en ambas partes',
    'Inter o empate',
    'Más de 8.5 córners totales',
  ],
}
