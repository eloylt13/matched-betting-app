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
  etiquetaDia: 'domingo 14 de junio',
  cuotaTotal: '3,90',
  confianza: 'Combinada recreativa',
  horaActualizacion: '21:00',
  notaConfianza: 'Pick recreativo, no apuesta garantizada.',
  motivoGeneral: 'Combinada de cuota aproximada 3,90 para seguir la jornada con tres mercados seleccionados. Pick recreativo, no apuesta garantizada.',
  picks: [
    {
      text: 'Países Bajos - Japón · Ambos equipos anotarán: Sí @ 1,80',
      partido: 'Países Bajos - Japón',
      hora: 'Dom 14 jun · 21:00',
      mercado: 'Ambos equipos anotarán: Sí',
      cuota: '1,80',
    },
    {
      text: 'Costa de Marfil - Ecuador · Más de 28,5 tiros libres @ 1,50',
      partido: 'Costa de Marfil - Ecuador',
      hora: 'Lun 15 jun · 00:00',
      mercado: 'Más de 28,5 tiros libres',
      cuota: '1,50',
    },
    {
      text: 'Suecia - Túnez · Más de 27,5 tiros libres @ 1,44',
      partido: 'Suecia - Túnez',
      hora: 'Lun 15 jun · 03:00',
      mercado: 'Más de 27,5 tiros libres',
      cuota: '1,44',
    },
  ],
}
