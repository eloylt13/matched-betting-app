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
  etiquetaDia: 'Sábado 9 de mayo',
  cuotaTotal: '12.69',
  confianza: 'Media · 7/10',
  horaActualizacion: '14:20',
  notaConfianza: 'Combinada basada en la necesidad de puntos de los favoritos en La Liga y el poder ofensivo de los equipos de Manchester.',
  motivoGeneral: 'Se seleccionan victorias locales sólidas en España y mercados de goles/hándicap para los equipos de Manchester, quienes atraviesan dinámicas goleadoras positivas.',
  picks: [
    {
      text: 'Atlético de Madrid vs Celta de Vigo · Gana local @ 2.15',
      partido: 'Atlético de Madrid vs Celta de Vigo',
      liga: 'La Liga',
      hora: '17:30',
      mercado: 'Gana local',
      cuota: '2.15',
      probabilidadModelo: '0.520',
      fairOdds: '1.92',
      ev: '0.118',
      motivoCorto: 'El Atlético es históricamente dominante en casa frente al Celta, que sufre defensivamente ante equipos del Top 4.',
    },
    {
      text: 'Sevilla vs Espanyol · Gana local @ 2.05',
      partido: 'Sevilla vs Espanyol',
      liga: 'La Liga',
      hora: '15:15',
      mercado: 'Gana local',
      cuota: '2.05',
      probabilidadModelo: '0.530',
      fairOdds: '1.89',
      ev: '0.086',
      motivoCorto: 'El Sevilla ha ganado 3 de sus últimos 4 duelos directos en casa contra el Espanyol, que baja notablemente su rendimiento como visitante.',
    },
    {
      text: 'Manchester City vs Brentford · Gana local @ 1.60',
      partido: 'Manchester City vs Brentford',
      liga: 'Premier League',
      hora: '17:30',
      mercado: 'Gana local',
      cuota: '1.60',
      probabilidadModelo: '0.680',
      fairOdds: '1.47',
      ev: '0.088',
      motivoCorto: 'Tras empatar 3-3 ante Everton, el City de Haaland (25 goles) no tiene margen de error en su lucha por el título.',
    },
    {
      text: 'Sunderland vs Manchester United · Más de 1.5 goles @ 1.80',
      partido: 'Sunderland vs Manchester United',
      liga: 'Premier League',
      hora: '15:00',
      mercado: 'Más de 1.5 goles',
      cuota: '1.80',
      probabilidadModelo: '0.600',
      fairOdds: '1.67',
      ev: '0.080',
      motivoCorto: 'El United viene de marcar 3 goles al Liverpool y se enfrenta a un Sunderland que ha encajado en sus últimos 5 compromisos.',
    }
  ],
}
