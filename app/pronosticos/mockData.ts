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
  etiquetaDia: 'sábado 9 de mayo',
  cuotaTotal: '9.03',
  confianza: 'Media · 7/10',
  horaActualizacion: '22:45',
  notaConfianza: 'Equilibrio entre solidez local y alta tendencia de goles.',
  motivoGeneral: 'Combinada que aprovecha la urgencia de puntos de Sevilla y City en casa, junto con dos duelos europeos de máxima vocación ofensiva y precedentes de alta anotación.',
  picks: [
    {
      text: 'Sevilla FC vs RCD Espanyol · Gana local @ 2.05',
      partido: 'Sevilla FC vs RCD Espanyol',
      liga: 'LaLiga',
      hora: '10:15',
      mercado: 'Gana local',
      cuota: '2.05',
      probabilidadModelo: '0.490',
      fairOdds: '2.04',
      ev: '0.005',
      motivoCorto: 'El Sevilla busca certificar la permanencia ante un Espanyol que ha caído derrotado en 6 de sus últimas 8 salidas.',
    },
    {
      text: 'Manchester City vs Brentford · Hándicap asiático -1.0 Manchester City @ 1.60',
      partido: 'Manchester City vs Brentford',
      liga: 'Premier League',
      hora: '16:30',
      mercado: 'Hándicap asiático -1.0 Manchester City',
      cuota: '1.60',
      probabilidadModelo: '0.630',
      fairOdds: '1.59',
      ev: '0.008',
      motivoCorto: 'El City mantiene su asedio al liderato tras ganar 10 de sus últimos 12 encuentros disputados en el Etihad Stadium.',
    },
    {
      text: 'Liverpool vs Chelsea · Ambos equipos anotarán: Sí @ 1.53',
      partido: 'Liverpool vs Chelsea',
      liga: 'Premier League',
      hora: '11:30',
      mercado: 'Ambos equipos anotarán: Sí',
      cuota: '1.53',
      probabilidadModelo: '0.660',
      fairOdds: '1.52',
      ev: '0.010',
      motivoCorto: 'Ambas escuadras promedian 2 goles por partido y han visto puerta en sus enfrentamientos directos más recientes.',
    },
    {
      text: 'Stuttgart vs Bayer Leverkusen · Más de 3.5 goles @ 1.80',
      partido: 'Stuttgart vs Bayer Leverkusen',
      liga: 'Bundesliga',
      hora: '15:30',
      mercado: 'Más de 3.5 goles',
      cuota: '1.80',
      probabilidadModelo: '0.560',
      fairOdds: '1.79',
      ev: '0.008',
      motivoCorto: 'Duelo directo por la Champions entre dos ataques potentes que registraron 5 o más goles en sus últimos cruces.',
    }
  ],
}
