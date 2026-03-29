'use client'

import { useState } from 'react'

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

export default function GuiasTabsClient({ secciones }: { secciones: Seccion[] }) {
  const [seccionAbierta, setSeccionAbierta] = useState<string>(secciones[0]?.id ?? '')

  const seccionActiva = secciones.find((s) => s.id === seccionAbierta)

  return (
    <>
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
      {seccionActiva && (
        <section key={seccionActiva.id}>
          {/* Banner */}
          <div className={`rounded-2xl bg-gradient-to-br ${seccionActiva.color} border border-stone-100 p-5 mb-5`}>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-2xl">{seccionActiva.icono}</span>
              <h2 className="text-lg font-bold text-stone-800">{seccionActiva.titulo}</h2>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${seccionActiva.badgeColor}`}>
                {seccionActiva.guias.length} guías
              </span>
            </div>
            <p className="text-sm text-stone-500 ml-10">{seccionActiva.descripcion}</p>
          </div>

          {/* Grid de cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {seccionActiva.guias.map((guia) => (
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
      )}
    </>
  )
}
