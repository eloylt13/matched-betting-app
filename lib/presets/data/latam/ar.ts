import type { Casa } from '@/types/presets'

export const casasAr: Casa[] = [
  {
    id: 'betano-ar',
    nombre: 'Betano',
    market: 'latam',
    pais: 'ar',
    url: 'https://bdeal.io/betano/144459/1',
    descripcionBreve: 'Promoción vigente no comprobada oficialmente. Disponible solo donde el operador esté autorizado.',
    resumen: 'En CABA, Betano aparece como operador autorizado según LOTBA/Juego Seguro y Legal. Durante la auditoría no se pudo comprobar la promoción vigente por bloqueo geográfico.',
    beneficioPotencial: 0,
    dificultad: 3,
    requisitos: [
      'Disponible solo donde el operador esté autorizado.',
      'Verifica tu jurisdicción antes de registrarte.',
      'Revisar términos oficiales antes de depositar.',
    ],
    notas: [
      'Promoción vigente no comprobada oficialmente.',
      'En CABA, Betano aparece como operador autorizado según LOTBA/Juego Seguro y Legal.',
      'Durante la auditoría no se pudo comprobar la promoción vigente por bloqueo geográfico.',
    ],
    promos: [
      {
        id: 'promocion-no-comprobada',
        titulo: 'Promoción vigente no comprobada oficialmente',
        descripcion: 'Disponible solo donde el operador esté autorizado. Verifica tu jurisdicción y revisa los términos oficiales antes de depositar.',
        vencimiento: '',
        fases: [],
      },
    ],
  },
]
