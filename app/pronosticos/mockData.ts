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
  etiquetaDia: 'lunes 4 de mayo',
  cuotaTotal: '7.78',
  confianza: 'Media · 7/10',
  horaActualizacion: '18:36',
  notaConfianza: 'Combinada equilibrada donde el Sevilla actúa como multiplicador de valor y el City como ancla de fiabilidad.',
  motivoGeneral: 'Se seleccionan favoritos claros en casa (Roma) y fuera (City), junto a la alta eficiencia goleadora en Portugal y la inercia local del Sevilla.',
  picks: [
    {
      text: 'Sevilla vs Real Sociedad · Gana local @ 2.37',
      partido: 'Sevilla vs Real Sociedad',
      liga: 'La Liga',
      hora: '21:00',
      mercado: 'Gana local',
      cuota: '2.37',
      probabilidadModelo: '0.450',
      fairOdds: '2.22',
      ev: '0.067',
      motivoCorto: 'El Sevilla en el Pizjuán suele elevar su nivel ante rivales directos; la Real Sociedad llega con desgaste físico acumulado.',
    },
    {
      text: 'Everton vs Manchester City · Gana visitante @ 1.45',
      partido: 'Everton vs Manchester City',
      liga: 'Premier League',
      hora: '12:00',
      mercado: 'Gana visitante',
      cuota: '1.45',
      probabilidadModelo: '0.740',
      fairOdds: '1.35',
      ev: '0.073',
      motivoCorto: 'El City no puede fallar en su persecución al Arsenal y cuenta con Haaland en racha (24 goles).',
    },
    {
      text: 'Roma vs Fiorentina · Gana local @ 1.53',
      partido: 'Roma vs Fiorentina',
      liga: 'Serie A',
      hora: '20:45',
      mercado: 'Gana local',
      cuota: '1.53',
      probabilidadModelo: '0.680',
      fairOdds: '1.47',
      ev: '0.040',
      motivoCorto: 'Roma se hace fuerte en el Olímpico frente a una Fiorentina muy irregular en sus salidas este año.',
    },
    {
      text: 'Sporting vs Vitória de Guimarães · Más de 2.5 goles @ 1.47',
      partido: 'Sporting vs Vitória de Guimarães',
      liga: 'Primeira Liga',
      hora: '20:15',
      mercado: 'Más de 2.5 goles',
      cuota: '1.47',
      probabilidadModelo: '0.710',
      fairOdds: '1.41',
      ev: '0.043',
      motivoCorto: 'El Sporting es la mejor ofensiva de Portugal y sus duelos directos suelen ser de alta anotación.',
    }
  ],
}
