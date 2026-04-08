import type { Casa } from '@/types/presets'

export const casasUy: Casa[] = [
  {
    id: 'betway-uy',
    nombre: 'Betway',
    market: 'latam',
    pais: 'uy',
    url: 'https://bdeal.io/betway/144468/1',
    descripcionBreve: 'Depósito mínimo $10 USD → freebet hasta $30 USD tras rollover ×1 a cuota ≥ 1.75.',
    resumen: 'Rollover ×1 sobre el primer depósito a cuota ≥ 1.75 para desbloquear freebet hasta $30 USD. Plazo pendiente.',
    tipologia: 'rollover',
    beneficioPotencial: 15,
    dificultad: 2,
    requisitos: [
      'Nuevo cliente.',
      'Depósito mínimo: $10 USD (~UYU 406).',
      'Rollover ×1 sobre el depósito a cuota ≥ 1.75.',
      'Freebet máxima: $30 USD (~UYU 1.219).',
      'Plazo exacto: PENDIENTE.',
    ],
    notas: [
      'La promo se muestra en €/USD, no localizada a UYU.',
      'Plazo exacto: PENDIENTE. No aparece en la landing oficial.',
      'Moneda exacta para usuarios uruguayos: PENDIENTE de confirmar.',
    ],
    promos: [
      {
        id: 'bienvenida-deportes',
        titulo: 'Hasta $30 USD en freebets',
        descripcion: 'Depositar $10 USD, apostar ×1 a cuota ≥ 1.75 → freebet hasta $30 USD.',
        vencimiento: '',
        fases: [
          {
            id: 'deposito-y-rollover',
            numero: 1,
            titulo: 'Depositar y completar rollover ×1',
            descripcion: 'Depositar mínimo $10 USD y apostar el importe a cuota ≥ 1.75.',
            modo: 'rollover',
            stakeRecomendado: 10,
            alertas: [
              'Confirmar moneda exacta (USD o EUR) dentro de la cuenta.',
              'Plazo: PENDIENTE.',
            ],
            checklist: [
              'Registrar cuenta nueva.',
              'Depositar ≥ $10 USD.',
              'Apostar el depósito a cuota ≥ 1.75.',
              'Esperar acreditación de la freebet.',
            ],
            siGana: { accion: 'Esperar acreditación de la freebet.' },
            siPierde: { accion: 'Esperar acreditación de la freebet.' },
          },
          {
            id: 'usar-freebet',
            numero: 2,
            titulo: 'Usar la freebet hasta $30 USD',
            descripcion: 'Usar la freebet antes del vencimiento. Solo ganancias a saldo real.',
            modo: 'freebet',
            stakeRecomendado: 30,
            alertas: ['Plazo: PENDIENTE. Confirmar en la app.'],
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
