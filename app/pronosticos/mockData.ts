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
  etiquetaDia: 'Domingo 26 de abril',
  cuotaTotal: '10.66',
  confianza: 'Media · 7/10',
  horaActualizacion: '11:45',
  notaConfianza: 'Basada en la alta eficiencia ofensiva de los líderes en Italia y Turquía, sumada a la fortaleza local del Villarreal.',
  motivoGeneral: 'Se seleccionan mercados de goles en ligas con alta tendencia al Over y una victoria local con EV positivo claro en La Liga. La combinada aprovecha la necesidad de puntos de equipos en zona de descenso y la lucha por el título en Turquía.',
  picks: [
    {
      text: 'Villarreal vs Celta de Vigo · Gana local @ 2.09',
      partido: 'Villarreal vs Celta de Vigo',
      liga: 'La Liga',
      hora: '12:00',
      mercado: 'Gana local',
      cuota: '2.09',
      probabilidadModelo: '0.640',
      fairOdds: '1.56',
      ev: '0.337',
      motivoCorto: 'El Villarreal presenta un 80% de victorias en casa esta temporada contra un Celta muy vulnerable como visitante.',
    },
    {
      text: 'VfB Stuttgart vs Werder Bremen · Más de 2.5 goles @ 1.91',
      partido: 'VfB Stuttgart vs Werder Bremen',
      liga: 'Bundesliga',
      hora: '15:30',
      mercado: 'Más de 2.5 goles',
      cuota: '1.91',
      probabilidadModelo: '0.620',
      fairOdds: '1.61',
      ev: '0.184',
      motivoCorto: 'Stuttgart promedia 2.12 goles en casa y el Bremen ha superado la línea en 3 de sus últimos 5 encuentros.',
    },
    {
      text: 'Torino vs Inter · Más de 2.5 goles @ 1.67',
      partido: 'Torino vs Inter',
      liga: 'Serie A',
      hora: '18:00',
      mercado: 'Más de 2.5 goles',
      cuota: '1.67',
      probabilidadModelo: '0.650',
      fairOdds: '1.54',
      ev: '0.085',
      motivoCorto: 'El Inter es el equipo más goleador de Italia (2.36 p/p) y el Torino ha mostrado una tendencia de 2.83 goles totales recientes.',
    },
    {
      text: 'Galatasaray vs Fenerbahçe · Más de 2.5 goles @ 1.60',
      partido: 'Galatasaray vs Fenerbahçe',
      liga: 'Süper Lig',
      hora: '17:00',
      mercado: 'Más de 2.5 goles',
      cuota: '1.60',
      probabilidadModelo: '0.635',
      fairOdds: '1.57',
      ev: '0.016',
      motivoCorto: 'Enfrentamiento entre los dos mejores ataques de Turquía (133 goles combinados) en un duelo decisivo por el título.',
    }
  ],
}
