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
  etiquetaDia: 'Viernes 24 de Abril',
  cuotaTotal: '5.82',
  confianza: 'Alta · 8/10',
  horaActualizacion: '11:15',
  notaConfianza: 'Alta probabilidad basada en la superioridad de locales en Italia y Alemania, y la inercia del Madrid.',
  motivoGeneral: 'Selección que combina favoritos con gran volumen ofensivo y equipos con bajas críticas en su estructura defensiva o ataque.',
  picks: [
    {
      text: 'Levante vs Sevilla · Gana o Empata: Levante @ 1.65',
      partido: 'Levante vs Sevilla',
      liga: 'La Liga',
      hora: '18:00',
      mercado: 'Gana o Empata: Levante',
      cuota: '1.65',
      probabilidadModelo: '0.640',
      fairOdds: '1.56',
      ev: '0.057',
      motivoCorto: 'El Levante ha perdido solo 1 de sus últimos 6 partidos y el Sevilla es muy frágil fuera de casa.',
    },
    {
      text: 'Napoli vs Cremonese · Gana: Napoli @ 1.36',
      partido: 'Napoli vs Cremonese',
      liga: 'Serie A',
      hora: '19:45',
      mercado: 'Gana: Napoli',
      cuota: '1.36',
      probabilidadModelo: '0.785',
      fairOdds: '1.27',
      ev: '0.068',
      motivoCorto: 'Napoli es casi imbatible en casa y la Cremonese viaja sin su delantero estrella Jamie Vardy.',
    },
    {
      text: 'RB Leipzig vs Union Berlin · Más de 2.5 goles @ 1.72',
      partido: 'RB Leipzig vs Union Berlin',
      liga: 'Bundesliga',
      hora: '18:30',
      mercado: 'Más de 2.5 goles',
      cuota: '1.72',
      probabilidadModelo: '0.615',
      fairOdds: '1.62',
      ev: '0.058',
      motivoCorto: 'El Leipzig promedia un xG muy alto y el Union Berlin llega con bajas defensivas y entrenador interino.',
    },
    {
      text: 'Real Betis vs Real Madrid · Más de 1.5 goles @ 1.51',
      partido: 'Real Betis vs Real Madrid',
      liga: 'La Liga',
      hora: '20:00',
      mercado: 'Más de 1.5 goles',
      cuota: '1.51',
      probabilidadModelo: '0.710',
      fairOdds: '1.41',
      ev: '0.071',
      motivoCorto: 'El Madrid ha marcado en 18 salidas consecutivas y el Betis recupera a Isco potenciando su ataque.',
    }
  ],
}
