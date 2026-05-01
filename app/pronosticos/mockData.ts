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
  etiquetaDia: 'viernes 1 de mayo',
  cuotaTotal: '12.83',
  confianza: 'Media · 7/10',
  horaActualizacion: '14:45',
  notaConfianza: 'Selección equilibrada basada en la necesidad crítica de puntos de los equipos locales en España e Inglaterra.',
  motivoGeneral: 'La combinada explota la fragilidad defensiva del Burnley (ya descendido) y el colapso competitivo del Pisa en Italia. Se complementa con la fortaleza local del Girona y la tendencia ofensiva de los playoffs en Países Bajos.',
  picks: [
    {
      text: 'Leeds United vs Burnley FC · Más de 2.5 goles @ 1.65',
      partido: 'Leeds United vs Burnley FC',
      liga: 'Premier League',
      hora: '20:00',
      mercado: 'Más de 2.5 goles',
      cuota: '1.65',
      probabilidadModelo: '0.610',
      fairOdds: '1.64',
      ev: '0.006',
      motivoCorto: 'Burnley ha concedido 68 goles y llega ya descendido, mientras Leeds busca asegurar la permanencia con Calvert-Lewin en racha.',
    },
    {
      text: 'Girona FC vs RCD Mallorca · Gana local @ 2.10',
      partido: 'Girona FC vs RCD Mallorca',
      liga: 'La Liga',
      hora: '12:00',
      mercado: 'Gana local',
      cuota: '2.10',
      probabilidadModelo: '0.510',
      fairOdds: '1.96',
      ev: '0.071',
      motivoCorto: 'Girona ha ganado 5 de sus últimos 6 duelos directos en casa frente a un Mallorca que solo ha sumado 4 puntos como visitante.',
    },
    {
      text: 'Pisa vs Lecce · Gana visitante @ 2.30',
      partido: 'Pisa vs Lecce',
      liga: 'Serie A',
      hora: '21:45',
      mercado: 'Gana visitante',
      cuota: '2.30',
      probabilidadModelo: '0.440',
      fairOdds: '2.27',
      ev: '0.012',
      motivoCorto: 'Pisa ha perdido 9 de sus últimos 10 partidos y descenderá si no gana a un Lecce que lucha por la salvación.',
    },
    {
      text: 'RKC Waalwijk vs Roda JC · Más de 2.5 goles @ 1.61',
      partido: 'RKC Waalwijk vs Roda JC',
      liga: 'Eredivisie',
      hora: '18:00',
      mercado: 'Más de 2.5 goles',
      cuota: '1.61',
      probabilidadModelo: '0.640',
      fairOdds: '1.56',
      ev: '0.030',
      motivoCorto: 'Vuelta de playoff tras el 1-1 en la ida; ambos equipos promedian altas cifras goleadoras en sus últimos compromisos.',
    }
  ],
}
