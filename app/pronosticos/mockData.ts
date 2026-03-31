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
  cuotaTotal: '5.64',
  confianza: 'Alta · 8/10',
  horaActualizacion: '09:30',
  notaConfianza: 'Fallback seguro si las APIs no responden',
  motivoGeneral:
    'Selección diaria de respaldo centrada en mercados de goles y ganador con perfil conservador para no interrumpir la vista diaria.',
  picks: [
    { text: 'Real Madrid vs Getafe · Más de 1.5 goles @ 1.28' },
    { text: 'Inter vs Cagliari · Gana local @ 1.42' },
    { text: 'PSV vs Heerenveen · Más de 2.0 goles asiático @ 1.31' },
    { text: 'Benfica vs Rio Ave · Gana local @ 1.37' },
    { text: 'Celtic vs St. Mirren · Más de 2.5 goles @ 1.66', motivoBreve: 'Pick de respaldo visible; puede diferir de la selección diaria si faltan datos.' },
  ],
}
