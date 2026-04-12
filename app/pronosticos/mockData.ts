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
  etiquetaDia: 'Domingo 12 de abril',
  cuotaTotal: '13.37',
  confianza: 'Alta · 8/10',
  horaActualizacion: '10:00',
  notaConfianza: 'Combinada basada en datos verificados de Tier 1 y Tier 3.',
  motivoGeneral: 'Selección apoyada en la superioridad del Manchester City visitante, el alto potencial goleador del choque Athletic-Villarreal, el dominio local del Celta ante el colista y la fragilidad defensiva del Mazatlán fuera de casa.',
  picks: [
    {
      text: 'Chelsea vs Manchester City · Gana visitante @ 2.15',
      partido: 'Chelsea vs Manchester City',
      liga: 'Premier League',
      hora: '16:00',
      mercado: 'Gana visitante',
      cuota: '2.15',
      probabilidadModelo: '0.512',
      fairOdds: '1.95',
      ev: '0.101',
      motivoCorto: 'City invicto en 13 partidos, promedia 2.33 goles anotados; Chelsea concede demasiado ante ataques de élite.',
    },
    {
      text: 'Athletic Club vs Villarreal · Más de 2.5 goles @ 1.91',
      partido: 'Athletic Club vs Villarreal',
      liga: 'La Liga',
      hora: '18:30',
      mercado: 'Más de 2.5 goles',
      cuota: '1.91',
      probabilidadModelo: '0.560',
      fairOdds: '1.79',
      ev: '0.070',
      motivoCorto: 'Villarreal 3º goleador de LaLiga, 60% de sus partidos fuera superan 2.5 goles.',
    },
    {
      text: 'Celta de Vigo vs Real Oviedo · Gana local @ 1.67',
      partido: 'Celta de Vigo vs Real Oviedo',
      liga: 'La Liga',
      hora: '14:00',
      mercado: 'Gana local',
      cuota: '1.67',
      probabilidadModelo: '0.620',
      fairOdds: '1.61',
      ev: '0.035',
      motivoCorto: 'Oviedo sin victorias fuera de casa en toda la temporada, Celta sólido en Balaídos.',
    },
    {
      text: 'Pumas vs Mazatlán · Más de 2.5 goles @ 1.95',
      partido: 'Pumas vs Mazatlán',
      liga: 'Liga MX',
      hora: '12:00',
      mercado: 'Más de 2.5 goles',
      cuota: '1.95',
      probabilidadModelo: '0.540',
      fairOdds: '1.85',
      ev: '0.053',
      motivoCorto: 'Mazatlán encaja en todos sus partidos fuera, diferencia de goles -10 en la temporada.',
    }
  ],
}
