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
  etiquetaDia: 'miércoles 22 de abril',
  cuotaTotal: '11.36',
  confianza: 'Media · 7/10',
  horaActualizacion: '14:15',
  notaConfianza: 'Riesgo controlado en goles apoyado por la fragilidad defensiva de los visitantes.',
  motivoGeneral: 'Se explota el récord perfecto del Barcelona en casa y las bajas críticas en la defensa del Getafe. La combinada equilibra favoritos sólidos con mercados de goles de alto valor estadístico.',
  picks: [
    {
      text: 'Barcelona vs Celta Vigo · Más de 3.5 goles @ 1.80',
      partido: 'Barcelona vs Celta Vigo',
      liga: 'La Liga',
      hora: '20:30',
      mercado: 'Más de 3.5 goles',
      cuota: '1.80',
      probabilidadModelo: '0.620',
      fairOdds: '1.61',
      ev: '0.116',
      motivoCorto: 'Barcelona mantiene un 100% de victorias en casa promediando 2.7 goles por partido.',
    },
    {
      text: 'Elche vs Atlético Madrid · Gana visitante @ 1.56',
      partido: 'Elche vs Atlético Madrid',
      liga: 'La Liga',
      hora: '18:00',
      mercado: 'Gana visitante',
      cuota: '1.56',
      probabilidadModelo: '0.680',
      fairOdds: '1.47',
      ev: '0.061',
      motivoCorto: 'El Atleti necesita asegurar Champions tras perder la Copa; Elche es el 18º de la tabla.',
    },
    {
      text: 'Real Sociedad vs Getafe · Más de 2.5 goles @ 2.38',
      partido: 'Real Sociedad vs Getafe',
      liga: 'La Liga',
      hora: '19:00',
      mercado: 'Más de 2.5 goles',
      cuota: '2.38',
      probabilidadModelo: '0.460',
      fairOdds: '2.17',
      ev: '0.096',
      motivoCorto: 'Getafe viaja con sus dos centrales titulares suspendidos y un H2H histórico de goles en Anoeta.',
    },
    {
      text: 'Bournemouth vs Leeds · Más de 2.5 goles @ 1.70',
      partido: 'Bournemouth vs Leeds',
      liga: 'Premier League',
      hora: '20:00',
      mercado: 'Más de 2.5 goles',
      cuota: '1.70',
      probabilidadModelo: '0.640',
      fairOdds: '1.56',
      ev: '0.088',
      motivoCorto: 'Duelo de estilos ofensivos sin presión defensiva; 16 goles en sus últimos 3 enfrentamientos.',
    }
  ],
}
