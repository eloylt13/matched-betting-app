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
  etiquetaDia: 'viernes 24 de abril',
  cuotaTotal: '10.37',
  confianza: 'Media · 7/10',
  horaActualizacion: '10:42',
  notaConfianza: 'Basada en la solidez de los visitantes en Tier 1 y tendencias over claras.',
  motivoGeneral: 'Se aprovecha la urgencia del Real Madrid y Lens en sus ligas junto con las carencias defensivas verificadas del Union Berlin y Sunderland. El estado de forma del Forest y Leipzig garantiza volumen de ocasiones.',
  picks: [
    {
      text: 'Real Betis vs Real Madrid · Gana visitante @ 1.94',
      partido: 'Real Betis vs Real Madrid',
      liga: 'La Liga',
      hora: '21:00',
      mercado: 'Gana visitante',
      cuota: '1.94',
      probabilidadModelo: '0.530',
      fairOdds: '1.88',
      ev: '0.028',
      motivoCorto: 'El Madrid de Arbeloa necesita los puntos para el título y el Betis sufre ante ataques de élite.',
    },
    {
      text: 'Sunderland vs Nottingham Forest · Más de 2.5 goles @ 1.91',
      partido: 'Sunderland vs Nottingham Forest',
      liga: 'Premier League',
      hora: '21:00',
      mercado: 'Más de 2.5 goles',
      cuota: '1.91',
      probabilidadModelo: '0.550',
      fairOdds: '1.82',
      ev: '0.050',
      motivoCorto: 'Sunderland es propenso a partidos de muchos goles y el Forest ha marcado en sus últimas 8 salidas.',
    },
    {
      text: 'RB Leipzig vs Union Berlin · Más de 2.5 goles @ 1.53',
      partido: 'RB Leipzig vs Union Berlin',
      liga: 'Bundesliga',
      hora: '20:30',
      mercado: 'Más de 2.5 goles',
      cuota: '1.53',
      probabilidadModelo: '0.690',
      fairOdds: '1.45',
      ev: '0.055',
      motivoCorto: 'Leipzig promedia 2 goles en casa y el Union Berlin ha encajado 52 tantos en la temporada.',
    },
    {
      text: 'Stade Brest vs RC Lens · Gana visitante @ 1.83',
      partido: 'Stade Brest vs RC Lens',
      liga: 'Ligue 1',
      hora: '20:45',
      mercado: 'Gana visitante',
      cuota: '1.83',
      probabilidadModelo: '0.670',
      fairOdds: '1.49',
      ev: '0.226',
      motivoCorto: 'Lens es el equipo con mejor EV de la jornada enfrentando a un Brest en caída libre y con bajas.',
    }
  ],
}
