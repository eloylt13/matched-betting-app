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
  etiquetaDia: 'jueves 7 de mayo',
  cuotaTotal: '12.24',
  confianza: 'Media · 7/10',
  horaActualizacion: '14:30',
  notaConfianza: 'Basada en la necesidad de remontada local en competiciones UEFA y tendencias de goles en semifinales.',
  motivoGeneral: 'Se seleccionan cuatro encuentros de semifinales europeas donde la estadística de goles y la fortaleza local ante bajas clave del rival ofrecen un valor esperado positivo. Se priorizan los mercados de Goles y Gana Local sobre el 1X2 puro en partidos de alta volatilidad.',
  picks: [
    {
      text: 'Aston Villa vs Nottingham Forest · Gana local @ 1.73',
      partido: 'Aston Villa vs Nottingham Forest',
      liga: 'UEFA Europa League',
      hora: '21:00',
      mercado: 'Gana local',
      cuota: '1.73',
      probabilidadModelo: '0.585',
      fairOdds: '1.71',
      ev: '0.012',
      motivoCorto: 'Necesidad imperativa de remontada y superioridad técnica en Villa Park tras el 0-1 de la ida.',
    },
    {
      text: 'SC Friburgo vs Sporting Braga · Más de 2.5 goles @ 2.10',
      partido: 'SC Friburgo vs Sporting Braga',
      liga: 'UEFA Europa League',
      hora: '21:00',
      mercado: 'Más de 2.5 goles',
      cuota: '2.10',
      probabilidadModelo: '0.620',
      fairOdds: '1.61',
      ev: '0.302',
      motivoCorto: 'Tendencia de ambos equipos a marcar y conceder; el Friburgo debe abrirse para igualar el 1-2 global.',
    },
    {
      text: 'Crystal Palace vs Shakhtar Donetsk · Más de 2.5 goles @ 1.82',
      partido: 'Crystal Palace vs Shakhtar Donetsk',
      liga: 'UEFA Conference League',
      hora: '21:00',
      mercado: 'Más de 2.5 goles',
      cuota: '1.82',
      probabilidadModelo: '0.655',
      fairOdds: '1.53',
      ev: '0.192',
      motivoCorto: 'El Shakhtar ha superado esta línea en 9 de sus últimos 10 partidos y necesita marcar tras el 1-3 de la ida.',
    },
    {
      text: 'RC Estrasburgo vs Rayo Vallecano · Gana local @ 1.85',
      partido: 'RC Estrasburgo vs Rayo Vallecano',
      liga: 'UEFA Conference League',
      hora: '21:00',
      mercado: 'Gana local',
      cuota: '1.85',
      probabilidadModelo: '0.540',
      fairOdds: '1.85',
      ev: '-0.001',
      motivoCorto: 'El Strasbourg es muy sólido en casa y el Rayo llega con tres bajas críticas, incluyendo a su referente Álvaro García.',
    }
  ],
}
