import type { Casa } from '@/types/presets'

export const casasPa: Casa[] = [
  {
    id: 'betway-pa',
    nombre: 'Betway',
    market: 'latam',
    pais: 'pa',
    url: 'https://bdeal.io/betway/144468/1',
    descripcionBreve: 'Reembolso hasta $100 USD en freebets si pierde la primera apuesta triple.',
    resumen: 'Primera apuesta triple o superior a cuota ≥ 1.25 por selección. Si pierde → freebets hasta $100 USD. Solo vía app y pre-partido.',
    tipologia: 'reembolso',
    beneficioPotencial: 50,
    dificultad: 2,
    requisitos: [
      'Nuevo cliente.',
      'Solicitar la oferta dentro de 7 días del registro.',
      'Apuesta mínima: $10 USD.',
      'Combinada triple o superior.',
      'Cuota mínima por selección: 1.25.',
      'Solo pre-partido.',
      'Disponible vía Betway App.',
      'Reembolso solo si la primera apuesta pierde.',
    ],
    notas: [
      'Bono máximo: $100 USD + 20 free spins.',
      'Tenis de mesa y eSoccer excluidos.',
      'Solo dinero real, no saldo de bono.',
    ],
    promos: [
      {
        id: 'reembolso-primera-apuesta',
        titulo: 'Hasta $100 USD si pierdes tu primera apuesta',
        descripcion: 'Primera apuesta triple o superior pre-partido. Si pierde → freebet hasta $100 USD.',
        vencimiento: '',
        fases: [
          {
            id: 'primera-apuesta',
            numero: 1,
            titulo: 'Primera apuesta cualificante',
            descripcion: 'Apostar mínimo $10 USD en combinada triple o superior a cuota ≥ 1.25 por selección. Solo pre-partido.',
            modo: 'cualificante',
            stakeRecomendado: 10,
            alertas: [
              'Solicitar la oferta dentro de 7 días del registro.',
              'Solo combinada triple o superior.',
              'Solo pre-partido.',
              'Tenis de mesa y eSoccer excluidos.',
            ],
            checklist: [
              'Registrarse y solicitar la oferta.',
              'Descargar la Betway App.',
              'Apostar ≥ $10 USD en combinada triple pre-partido.',
              'Cuota ≥ 1.25 por selección.',
            ],
            siGana: { accion: 'No hay reembolso. Cerrar la promo.' },
            siPierde: { accion: 'Esperar acreditación de la freebet y pasar a fase 2.' },
          },
          {
            id: 'usar-freebet',
            numero: 2,
            titulo: 'Usar la freebet de reembolso',
            descripcion: 'Freebet hasta $100 USD. Solo ganancias a saldo real.',
            modo: 'freebet',
            stakeRecomendado: 10,
            alertas: ['Solo ganancias a saldo real.'],
            checklist: [
              'Confirmar acreditación.',
              'Usar antes del vencimiento.',
            ],
            siGana: { accion: 'Convertir ganancias a saldo real.' },
            siPierde: { accion: 'Cerrar promo.' },
          },
        ],
      },
    ],
  },
]
