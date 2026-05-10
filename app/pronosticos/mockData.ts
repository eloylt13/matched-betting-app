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
  etiquetaDia: 'domingo 10 de mayo',
  cuotaTotal: '11.70',
  confianza: 'Media · 7/10',
  horaActualizacion: '15:15',
  notaConfianza: 'Equilibrio entre la solvencia del Arsenal y la inestabilidad defensiva madridista.',
  motivoGeneral: 'La combinada se apoya en la urgencia del Arsenal por el título y la crisis del Real Madrid en defensa , junto al mal rendimiento visitante del Heidenheim y la vocación ofensiva en Francia.',
  picks: [
    {
      text: 'Barcelona vs Real Madrid · Más de 3.5 Total de goles @ 1.90',
      partido: 'Barcelona vs Real Madrid',
      liga: 'LaLiga EA Sports',
      hora: '21:00',
      mercado: 'Más de 3.5 Total de goles',
      cuota: '1.90',
      probabilidadModelo: '0.550',
      fairOdds: '1.82',
      ev: '0.045',
      motivoCorto: 'El Barça puede certificar el título ante un Madrid mermado por una crisis interna y bajas críticas en defensa como Militão y Carvajal.',
    },
    {
      text: 'West Ham vs Arsenal · Arsenal -1.0 Hándicap asiático @ 1.95',
      partido: 'West Ham vs Arsenal',
      liga: 'Premier League',
      hora: '17:30',
      mercado: 'Arsenal -1.0 Hándicap asiático',
      cuota: '1.95',
      probabilidadModelo: '0.535',
      fairOdds: '1.87',
      ev: '0.043',
      motivoCorto: 'Los Gunners buscan el liderato ante el equipo que más goles de cabeza y a balón parado concede de la liga.',
    },
    {
      text: 'Monaco vs Lille · Sí Ambos equipos anotarán @ 1.53',
      partido: 'Monaco vs Lille',
      liga: 'Ligue 1',
      hora: '20:00',
      mercado: 'Sí Ambos equipos anotarán',
      cuota: '1.53',
      probabilidadModelo: '0.680',
      fairOdds: '1.47',
      ev: '0.040',
      motivoCorto: 'Choque directo por plazas de Champions entre dos de los ataques más efectivos y con promedios superiores a 3 goles por partido.',
    },
    {
      text: 'Colonia vs Heidenheim · Colonia Resultado final @ 2.05',
      partido: 'Colonia vs Heidenheim',
      liga: 'Bundesliga',
      hora: '17:30',
      mercado: 'Colonia Resultado final',
      cuota: '2.05',
      probabilidadModelo: '0.510',
      fairOdds: '1.96',
      ev: '0.046',
      motivoCorto: 'El Colonia cierra el curso en casa ante un Heidenheim que descenderá matemáticamente si pierde y que solo ha ganado un partido fuera.',
    }
  ],
}
