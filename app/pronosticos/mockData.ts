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
  etiquetaDia: 'Martes 31 de marzo',
  cuotaTotal: '5.64',
  confianza: 'Alta · 8/10',
  horaActualizacion: '09:30',
  notaConfianza: 'Fallback seguro si las APIs no responden',
  motivoGeneral:
    'Selección diaria de respaldo centrada en mercados de goles y ganador con perfil conservador para no interrumpir la vista diaria.',
  picks: [
    {
      text: 'Real Madrid vs Getafe · Más de 1.5 goles @ 1.28',
      partido: 'Real Madrid vs Getafe',
      liga: 'LaLiga',
      hora: '21:00',
      mercado: 'Más de 1.5 goles',
      cuota: '1.28',
      probabilidadModelo: 'Dato no disponible',
      fairOdds: 'Dato no disponible',
      ev: 'Dato no disponible',
      motivoCorto: 'Fallback seguro visible si la selección diaria no puede generarse con datos en vivo.',
    },
    {
      text: 'Inter vs Cagliari · Gana local @ 1.42',
      partido: 'Inter vs Cagliari',
      liga: 'Serie A',
      hora: '20:45',
      mercado: 'Gana local',
      cuota: '1.42',
      probabilidadModelo: 'Dato no disponible',
      fairOdds: 'Dato no disponible',
      ev: 'Dato no disponible',
      motivoCorto: 'Fallback seguro visible si la selección diaria no puede generarse con datos en vivo.',
    },
    {
      text: 'PSV vs Heerenveen · Más de 2.0 goles asiático @ 1.31',
      partido: 'PSV vs Heerenveen',
      liga: 'Eredivisie',
      hora: '18:45',
      mercado: 'Más de 2.0 goles asiático',
      cuota: '1.31',
      probabilidadModelo: 'Dato no disponible',
      fairOdds: 'Dato no disponible',
      ev: 'Dato no disponible',
      motivoCorto: 'Fallback seguro visible si la selección diaria no puede generarse con datos en vivo.',
    },
    {
      text: 'Benfica vs Rio Ave · Gana local @ 1.37',
      partido: 'Benfica vs Rio Ave',
      liga: 'Primeira Liga',
      hora: '19:00',
      mercado: 'Gana local',
      cuota: '1.37',
      probabilidadModelo: 'Dato no disponible',
      fairOdds: 'Dato no disponible',
      ev: 'Dato no disponible',
      motivoCorto: 'Fallback seguro visible si la selección diaria no puede generarse con datos en vivo.',
    },
    {
      text: 'Celtic vs St. Mirren · Más de 2.5 goles @ 1.66',
      motivoBreve: 'Pick de respaldo visible; puede diferir de la selección diaria si faltan datos.',
      partido: 'Celtic vs St. Mirren',
      liga: 'Premiership',
      hora: '20:00',
      mercado: 'Más de 2.5 goles',
      cuota: '1.66',
      probabilidadModelo: 'Dato no disponible',
      fairOdds: 'Dato no disponible',
      ev: 'Dato no disponible',
      motivoCorto: 'Pick de respaldo visible; puede diferir de la selección diaria si faltan datos.',
    },
  ],
}
