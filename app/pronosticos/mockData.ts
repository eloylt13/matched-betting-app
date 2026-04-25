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
  etiquetaDia: 'domingo 26 de abril',
  cuotaTotal: '13.35',
  confianza: 'Media · 7/10',
  horaActualizacion: '10:30',
  notaConfianza: 'Basada en la debilidad defensiva por bajas clave en Niza y la tendencia Over en los enfrentamientos directos en España e Italia.',
  motivoGeneral: 'Selección de cuatro mercados de goles en ligas Tier 1. Se priorizan partidos donde la necesidad de puntos de los locales y las bajas defensivas de los visitantes elevan la expectativa de gol por encima de las cuotas de mercado.',
  picks: [
    {
      text: 'Villarreal vs Celta de Vigo · Más de 2.5 goles @ 2.10',
      partido: 'Villarreal vs Celta de Vigo',
      liga: 'La Liga',
      hora: '14:00',
      mercado: 'Más de 2.5 goles',
      cuota: '2.10',
      probabilidadModelo: '0.524',
      fairOdds: '1.91',
      ev: '0.100',
      motivoCorto: 'Duelo de alta eficacia ofensiva (56 goles local vs 44 visitante) y antecedentes H2H cargados de goles.',
    },
    {
      text: 'Marseille vs Nice · Más de 2.5 goles @ 1.73',
      partido: 'Marseille vs Nice',
      liga: 'Ligue 1',
      hora: '18:45',
      mercado: 'Más de 2.5 goles',
      cuota: '1.73',
      probabilidadModelo: '0.600',
      fairOdds: '1.67',
      ev: '0.038',
      motivoCorto: 'Niza llega con bajas críticas en el centro de la defensa (Dante y Bombito) ante un Marsella muy sólido en el Vélodrome.',
    },
    {
      text: 'AC Milan vs Juventus · Más de 2.5 goles @ 2.10',
      partido: 'AC Milan vs Juventus',
      liga: 'Serie A',
      hora: '11:45',
      mercado: 'Más de 2.5 goles',
      cuota: '2.10',
      probabilidadModelo: '0.494',
      fairOdds: '2.02',
      ev: '0.037',
      motivoCorto: 'Ambos equipos superan los 45 goles esta temporada y la Juventus ha mostrado una gran eficacia rematadora reciente.',
    },
    {
      text: 'Excelsior vs Utrecht · Más de 2.5 goles @ 1.75',
      partido: 'Excelsior vs Utrecht',
      liga: 'Eredivisie',
      hora: '12:15',
      mercado: 'Más de 2.5 goles',
      cuota: '1.75',
      probabilidadModelo: '0.580',
      fairOdds: '1.72',
      ev: '0.015',
      motivoCorto: 'Excelsior ha recibido el primer gol en 5 de sus últimos 6 partidos y promedia 2.6 goles concedidos por encuentro.',
    }
  ],
}
