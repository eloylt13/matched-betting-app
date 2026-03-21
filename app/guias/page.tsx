'use client'

import { useState, useEffect } from 'react'

/* ───────── Tipos ───────── */
interface Guia {
  titulo: string
  slug: string
  categoria: string
  descripcion: string
  emoji: string
  orden?: number
}

interface Seccion {
  id: string
  titulo: string
  descripcion: string
  icono: string
  color: string
  badgeColor: string
  guias: Guia[]
}

const CATEGORIAS_METADATA: Record<string, { titulo: string; descripcion: string; icono: string; color: string; badgeColor: string }> = {
  'primeros-pasos': {
    titulo: 'Primeros pasos',
    descripcion: 'Todo lo que necesitas para entender los bonos de bienvenida y empezar paso a paso.',
    icono: '🚀',
    color: 'from-emerald-500/10 to-emerald-500/5',
    badgeColor: 'bg-emerald-100 text-emerald-700',
  },
  'modulos': {
    titulo: 'Módulos',
    descripcion: 'Guías detalladas de cada tipo de bono y herramienta del sistema.',
    icono: '📘',
    color: 'from-blue-500/10 to-blue-500/5',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  'estrategia': {
    titulo: 'Estrategia',
    descripcion: 'Consejos y tácticas avanzadas para maximizar beneficios.',
    icono: '🎯',
    color: 'from-amber-500/10 to-amber-500/5',
    badgeColor: 'bg-amber-100 text-amber-700',
  },
  'casas': {
    titulo: 'Guías por casa',
    descripcion: 'Instrucciones específicas de registro y extracción de bono para cada casa.',
    icono: '🏠',
    color: 'from-purple-500/10 to-purple-500/5',
    badgeColor: 'bg-purple-100 text-purple-700',
  },
}

/* ───────── Componente ───────── */
export default function GuiasPage() {
  const [seccionAbierta, setSeccionAbierta] = useState<string>('primeros-pasos')
  const [secciones, setSecciones] = useState<Seccion[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadGuias() {
      try {
        const response = await fetch('/api/guias')
        const guias: Guia[] = await response.json()

        // Agrupar por categoría
        const gruposPorCategoria: Record<string, Guia[]> = {}
        guias.forEach((guia) => {
          if (!gruposPorCategoria[guia.categoria]) {
            gruposPorCategoria[guia.categoria] = []
          }
          gruposPorCategoria[guia.categoria].push(guia)
        })

        // Ordenar dentro de cada categoría
        Object.keys(gruposPorCategoria).forEach((categoria) => {
          gruposPorCategoria[categoria].sort((a, b) => (a.orden ?? 999) - (b.orden ?? 999))
        })

        // Crear secciones
        const seccionesData: Seccion[] = Object.entries(gruposPorCategoria).map(([categoria, guiasLista]) => {
          const metadata = CATEGORIAS_METADATA[categoria] || {
            titulo: categoria,
            descripcion: '',
            icono: '📄',
            color: 'from-stone-500/10 to-stone-500/5',
            badgeColor: 'bg-stone-100 text-stone-700',
          }
          return {
            id: categoria,
            ...metadata,
            guias: guiasLista,
          }
        })

        // Ordenar secciones en el orden correcto
        const categoriasOrdenadas = ['primeros-pasos', 'modulos', 'estrategia', 'casas']
        const seccionesOrdenadas = categoriasOrdenadas
          .map(catId => seccionesData.find(s => s.id === catId))
          .filter((sec): sec is Seccion => sec !== undefined)

        setSecciones(seccionesOrdenadas)
      } catch (error) {
        console.error('Error loading guias:', error)
      } finally {
        setLoading(false)
      }
    }

    loadGuias()
  }, [])

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
        {secciones.map((sec) => (
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
      {!loading && secciones.filter((s) => s.id === seccionAbierta).map((sec) => (
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
                key={`${guia.categoria}-${guia.slug}`}
                href={`/guias/${guia.categoria}/${guia.slug}`}
                className="group bg-white rounded-2xl border border-stone-100 hover:border-purple-200
                           hover:shadow-lg transition-all p-4 flex flex-col gap-2"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl shrink-0 mt-0.5">{guia.emoji}</span>
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
                    Leer →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      ))}

      {loading && (
        <div className="flex justify-center items-center py-12">
          <p className="text-stone-500">Cargando guías...</p>
        </div>
      )}
    </div>
  )
}
