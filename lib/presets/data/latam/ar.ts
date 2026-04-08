import type { Casa } from '@/types/presets'

export const casasAr: Casa[] = [
  {
    id: 'betano-ar',
    nombre: 'Betano',
    market: 'latam',
    pais: 'ar',
    url: 'https://bdeal.io/betano/144459/1',
    descripcionBreve: 'Bono de primer depósito hasta ARS 500.000 con rollover. Disponible por jurisdicción.',
    resumen: 'Opera en CABA, Prov. Buenos Aires y Mendoza. Rollover sobre depósito+bono. Mínimo y multiplicador exactos pendientes.',
    tipologia: 'rollover',
    beneficioPotencial: 0,
    dificultad: 3,
    requisitos: [
      'Nuevo usuario.',
      'Depósito mínimo probable: ARS 1.000 (~$0,72 USD). PENDIENTE de confirmar.',
      'Apostar depósito+bono a cuota ≥ 1.50.',
      'Completar wagering dentro de 30 días.',
    ],
    notas: [
      'Bono máximo: ARS 500.000 (~$359 USD).',
      'Solo disponible en CABA, Provincia de Buenos Aires y Mendoza.',
      'Depósito mínimo exacto: PENDIENTE.',
      'Multiplicador de wagering exacto: PENDIENTE.',
    ],
    promos: [
      {
        id: 'bienvenida-deportes',
        titulo: '100% Primer Depósito hasta ARS 500.000',
        descripcion: 'Match bonus deportivo por jurisdicción. Rollover sobre depósito+bono a cuota ≥ 1.50.',
        vencimiento: '',
        fases: [
          {
            id: 'deposito-y-rollover',
            numero: 1,
            titulo: 'Deposita y completa el rollover',
            descripcion: 'Primer depósito, activar bono y completar wagering a cuota ≥ 1.50 en 30 días.',
            modo: 'rollover',
            stakeRecomendado: 0,
            alertas: [
              'Verificar disponibilidad según jurisdicción antes de registrarse.',
              'Depósito mínimo exacto: PENDIENTE.',
              'Multiplicador exacto: PENDIENTE. Confirmar en Mi Cuenta.',
            ],
            checklist: [
              'Verificar que tu provincia tiene acceso.',
              'Registrar cuenta nueva.',
              'Primer depósito.',
              'Activar bono desde Mi Cuenta.',
              'Completar rollover a cuota ≥ 1.50.',
            ],
            siGana: { accion: 'Continuar descontando rollover hasta completarlo.' },
            siPierde: { accion: 'Continuar descontando rollover hasta completarlo.' },
          },
        ],
      },
    ],
  },
]
