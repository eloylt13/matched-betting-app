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
  etiquetaDia: 'Sábado 18 de abril',
  cuotaTotal: '10.55',
  confianza: 'Media · 7/10',
  horaActualizacion: '13:45',
  notaConfianza: 'Basada en alta correlación goleadora en Tier 1 y superioridad técnica de favoritos locales/visitantes.',
  motivoGeneral: 'Se combinan mercados de goles en partidos con defensas mermadas (Roma, Newcastle) y victorias de equipos en racha ganadora superior al 60% (Leipzig, Lille).',
  picks: [
    {
      text: 'Roma vs Atalanta · Más de 2.5 goles @ 1.95',
      partido: 'Roma vs Atalanta',
      liga: 'Serie A',
      hora: '15:45',
      mercado: 'Más de 2.5 goles',
      cuota: '1.95',
      probabilidadModelo: '0.580',
      fairOdds: '1.72',
      ev: '0.131',
      motivoCorto: 'Historial H2H promedia 2.5 goles y ambos equipos superan el 60% de Over 2.5 recientemente.',
    },
    {
      text: 'Eintracht Frankfurt vs RB Leipzig · Gana visitante @ 2.05',
      partido: 'Eintracht Frankfurt vs RB Leipzig',
      liga: 'Bundesliga',
      hora: '18:30',
      mercado: 'Gana visitante',
      cuota: '2.05',
      probabilidadModelo: '0.550',
      fairOdds: '1.82',
      ev: '0.127',
      motivoCorto: 'Leipzig llega con tres victorias seguidas y promedia 1.93 goles frente a la irregular defensa local.',
    },
    {
      text: 'Lille vs Nice · Gana local @ 1.76',
      partido: 'Lille vs Nice',
      liga: 'Ligue 1',
      hora: '21:05',
      mercado: 'Gana local',
      cuota: '1.76',
      probabilidadModelo: '0.600',
      fairOdds: '1.67',
      ev: '0.056',
      motivoCorto: 'Lille suma 4 victorias consecutivas ante un Niza que ha encajado 56 goles en la temporada.',
    },
    {
      text: 'Newcastle vs Bournemouth · Más de 2.5 goles @ 1.50',
      partido: 'Newcastle vs Bournemouth',
      liga: 'Premier League',
      hora: '16:00',
      mercado: 'Más de 2.5 goles',
      cuota: '1.50',
      probabilidadModelo: '0.700',
      fairOdds: '1.43',
      ev: '0.050',
      motivoCorto: 'Bajas críticas en la defensa de Newcastle y racha goleadora abierta en el estadio local.',
    }
  ],
}
