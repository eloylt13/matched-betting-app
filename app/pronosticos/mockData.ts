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
  etiquetaDia: 'lunes 20 de abril',
  cuotaTotal: '13.64',
  confianza: 'Media · 7/10',
  horaActualizacion: '15:00',
  notaConfianza: 'Sólido anclaje en Tier 1; riesgo moderado en la liga turca.',
  motivoGeneral: 'Se explotan las crisis defensivas en Portugal y Turquía, junto con la inercia ganadora de la Fiorentina y la tendencia goleadora histórica del duelo Palace-West Ham.',
  picks: [
    {
      text: 'Crystal Palace vs West Ham · Más de 2.5 goles @ 1.88',
      partido: 'Crystal Palace vs West Ham',
      liga: 'Premier League',
      hora: '18:00',
      mercado: 'Más de 2.5 goles',
      cuota: '1.88',
      probabilidadModelo: '0.560',
      fairOdds: '1.79',
      ev: '0.053',
      motivoCorto: 'Tendencia histórica de 2+ goles en H2H y debilidad defensiva visitante con bajas en portería.',
    },
    {
      text: 'Lecce vs Fiorentina · Gana visitante @ 2.16',
      partido: 'Lecce vs Fiorentina',
      liga: 'Serie A',
      hora: '18:45',
      mercado: 'Gana visitante',
      cuota: '2.16',
      probabilidadModelo: '0.500',
      fairOdds: '2.00',
      ev: '0.080',
      motivoCorto: 'Lecce encadena 4 derrotas seguidas y la Fiorentina llega en racha con el regreso de Gudmundsson.',
    },
    {
      text: 'Moreirense vs Estoril · Más de 2.5 goles @ 2.10',
      partido: 'Moreirense vs Estoril',
      liga: 'Primeira Liga',
      hora: '21:15',
      mercado: 'Más de 2.5 goles',
      cuota: '2.10',
      probabilidadModelo: '0.537',
      fairOdds: '1.86',
      ev: '0.113',
      motivoCorto: 'Grave crisis defensiva en Moreirense con 3 titulares fuera y Begraoui en gran estado de forma.',
    },
    {
      text: 'Gaziantep FK vs Kayserispor · Gana local @ 1.60',
      partido: 'Gaziantep FK vs Kayserispor',
      liga: 'Süper Lig',
      hora: '19:00',
      mercado: 'Gana local',
      cuota: '1.60',
      probabilidadModelo: '0.680',
      fairOdds: '1.47',
      ev: '0.088',
      motivoCorto: 'Gaziantep fuerte en casa ante un Kayserispor diezmado en defensa y en zona de descenso.',
    }
  ],
}
