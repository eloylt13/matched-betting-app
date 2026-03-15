// app/guias/page.tsx
'use client'

import { useState } from 'react'

/* ───────── Tipos ───────── */
interface Guia {
  titulo: string
  archivo: string          // ruta relativa a /guias/
  descripcion: string
  icono: string
}

interface Seccion {
  id: string
  titulo: string
  descripcion: string
  icono: string
  color: string            // gradiente de fondo
  badgeColor: string
  guias: Guia[]
}

/* ───────── Datos ───────── */
const SECCIONES: Seccion[] = [
  {
    id: 'inicio',
    titulo: 'Primeros pasos',
    descripcion: 'Todo lo que necesitas para entender los bonos de bienvenida y empezar paso a paso.',
    icono: '🚀',
    color: 'from-emerald-500/10 to-emerald-500/5',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    guias: [
      {
        titulo: 'Introducción al Matched Betting',
        archivo: 'inicio/1. INTRODUCCIÓN AL MATCHED BETTING.pdf',
        descripcion: 'Qué es, cómo funciona y por qué es rentable.',
        icono: '📖',
      },
      {
        titulo: 'Cuánto se puede ganar (España)',
        archivo: 'inicio/2. CUÁNTO SE PUEDE GANAR (ESPAÑA).pdf',
        descripcion: 'Estimación realista de beneficios en el mercado español.',
        icono: '💰',
      },
      {
        titulo: 'Léeme primero',
        archivo: 'inicio/01 - LEEME PRIMERO.pdf',
        descripcion: 'Instrucciones esenciales antes de comenzar.',
        icono: '⚠️',
      },
      {
        titulo: 'Orden recomendado de uso',
        archivo: 'inicio/02 - Orden recomendado de uso.pdf',
        descripcion: 'La secuencia óptima para maximizar beneficios.',
        icono: '📋',
      },
    ],
  },
  {
    id: 'modulos',
    titulo: 'Módulos',
    descripcion: 'Guías detalladas de cada tipo de bono y herramienta del sistema.',
    icono: '📘',
    color: 'from-blue-500/10 to-blue-500/5',
    badgeColor: 'bg-blue-100 text-blue-700',
    guias: [
      {
        titulo: 'Módulo 1 — Betfair',
        archivo: 'modulos/Modulo_1_Betfair_Actualizado_con_registro.pdf',
        descripcion: 'Registro y uso de Betfair Exchange para cubrir apuestas.',
        icono: '♻️',
      },
      {
        titulo: 'Módulo 2 — Apuesta y Recibe',
        archivo: 'modulos/Modulo_2_Apuesta_y_Recibe_Actualizado_OK.pdf',
        descripcion: 'Cómo aprovechar ofertas de tipo "apuesta y recibe".',
        icono: '🟢',
      },
      {
        titulo: 'Módulo 3 — Reembolso',
        archivo: 'modulos/Modulo_3_Reembolso_Actualizado_OK.pdf',
        descripcion: 'Estrategia para bonos de reembolso si pierdes.',
        icono: '🔵',
      },
      {
        titulo: 'Módulo 4 — Rollover',
        archivo: 'modulos/Modulo_4_Rollover_Actualizado_OK_v2.pdf',
        descripcion: 'Cómo limpiar bonos con requisitos de rollover.',
        icono: '🔄',
      },
      {
        titulo: 'Módulo 5 — Herramientas',
        archivo: 'modulos/Modulo_5_Herramientas_Actualizado_OK.pdf',
        descripcion: 'Software y recursos complementarios.',
        icono: '🛠️',
      },
      {
        titulo: 'Módulo 6 — Dutcher',
        archivo: 'modulos/Modulo_6_Dutcher_Actualizado_OK_v2.pdf',
        descripcion: 'Técnica avanzada de dutching para maximizar beneficios.',
        icono: '🎯',
      },
      {
        titulo: 'Módulo 7 — Calculadora Web',
        archivo: 'modulos/Modulo_7_Guia_Maestra_Calculadora_Web.pdf',
        descripcion: 'Manual completo de la calculadora integrada.',
        icono: '🧮',
      },
    ],
  },
  {
    id: 'casas',
    titulo: 'Guías por casa',
    descripcion: 'Instrucciones específicas de registro y extracción de bono para cada casa.',
    icono: '🏠',
    color: 'from-purple-500/10 to-purple-500/5',
    badgeColor: 'bg-purple-100 text-purple-700',
    guias: [
      '888Sport', 'Aupabet ', 'Bet365', 'Betfair', 'Betsson', 'Betway',
      'Botemania', 'Bwin', 'Casino Gran Madrid', 'Casumo', 'Codere',
      'DaznBet', 'Ebingo', 'EFBet', 'Goldenpark', 'Interwetten',
      'Juegging', 'KirolBet', 'Leovegas', 'Marcaapuestas', 'Olybet',
      'Paf', 'Pastón', 'Pokerstars', 'Retabet', 'Solcasino',
      'Sportium', 'Versus', 'William Hill', 'Winamax', 'Yaass Casino',
    ].map((nombre) => ({
      titulo: nombre.trim(),
      archivo: `casas/${nombre}.pdf`,
      descripcion: `Guía de registro y bono para ${nombre.trim()}.`,
      icono: '🏢',
    })),
  },
]

/* ───────── Componente ───────── */
export default function GuiasPage() {
  const [seccionAbierta, setSeccionAbierta] = useState<string>('inicio')

  return (
    <div className="flex flex-col gap-8">
      {/* Encabezado */}
      <header>
        <h1 className="text-2xl font-bold text-stone-800 tracking-tight">
          🚀 Empieza aquí
        </h1>
        <p className="text-sm text-stone-500 mt-1">
          Guía en español para entender los bonos de bienvenida, calcular cada paso
          y llevar todo organizado de forma sencilla.
        </p>
      </header>

      {/* Tabs de secciones */}
      <div className="flex gap-2 flex-wrap">
        {SECCIONES.map((sec) => (
          <button
            key={sec.id}
            onClick={() => setSeccionAbierta(sec.id)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all
              ${seccionAbierta === sec.id
                ? 'bg-gradient-to-r from-[#12112A] to-[#2A1F3D] text-white shadow-md'
                : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-300 hover:shadow-sm'
              }`}
          >
            {sec.icono} {sec.titulo}
          </button>
        ))}
      </div>

      {/* Sección activa */}
      {SECCIONES.filter((s) => s.id === seccionAbierta).map((sec) => (
        <section key={sec.id}>
          {/* Banner */}
          <div className={`rounded-2xl bg-gradient-to-br ${sec.color} border border-stone-100 p-5 mb-5`}>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-2xl">{sec.icono}</span>
              <h2 className="text-lg font-bold text-stone-800">{sec.titulo}</h2>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${sec.badgeColor}`}>
                {sec.guias.length} guías
              </span>
            </div>
            <p className="text-sm text-stone-500 ml-10">{sec.descripcion}</p>
          </div>

          {/* Grid de cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {sec.guias.map((guia) => (
              <a
                key={guia.archivo}
                href={`/guias/${guia.archivo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl border border-stone-100 hover:border-purple-200
                           hover:shadow-lg transition-all p-4 flex flex-col gap-2"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl shrink-0 mt-0.5">{guia.icono}</span>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-stone-800 text-sm group-hover:text-purple-700 transition-colors truncate">
                      {guia.titulo}
                    </h3>
                    <p className="text-xs text-stone-400 mt-0.5 line-clamp-2">
                      {guia.descripcion}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-end mt-auto pt-2 border-t border-stone-50">
                  <span className="text-xs font-semibold text-purple-500 group-hover:text-purple-600 transition-colors">
                    Abrir PDF →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
