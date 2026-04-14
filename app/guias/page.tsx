import type { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import GuiasTabsClient from './GuiasTabsClient'

export const metadata: Metadata = {
  title: 'Guías de matched betting en España | Paso a paso y soporte LATAM | IAPredictHub',
  description: 'Guías prácticas de matched betting pensadas principalmente para España, con explicaciones paso a paso sobre bonos de bienvenida, estrategia, módulos y contenido útil también para LATAM.',
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
  'casas-espana': {
    titulo: 'Guías por casa — España',
    descripcion: 'Instrucciones de registro y bono para cada casa española.',
    icono: '🏠',
    color: 'from-purple-500/10 to-purple-500/5',
    badgeColor: 'bg-purple-100 text-purple-700',
  },
  'casas-latam': {
    titulo: 'Guías por casa — LATAM',
    descripcion: 'Instrucciones de registro y bono para casas en LATAM.',
    icono: '🌎',
    color: 'from-blue-500/10 to-blue-500/5',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
}

function loadGuias() {
  const guiasDir = path.join(process.cwd(), 'content/guias')
  const guias: { titulo: string; slug: string; categoria: string; descripcion: string; emoji: string; orden?: number; market: string }[] = []

  const categorias = fs.readdirSync(guiasDir)
  categorias.forEach((categoria) => {
    const categoriaPath = path.join(guiasDir, categoria)
    if (!fs.statSync(categoriaPath).isDirectory()) return

    fs.readdirSync(categoriaPath).forEach((file) => {
      if (!file.endsWith('.mdx') && !file.endsWith('.md')) return
      const { data } = matter(fs.readFileSync(path.join(categoriaPath, file), 'utf-8'))
      const slug = file.replace(/\.(mdx|md)$/, '')
      guias.push({
        titulo: data.title || slug,
        slug,
        categoria,
        descripcion: data.descripcion || '',
        emoji: data.emoji || '📄',
        orden: data.orden,
        market: data.market || 'espana',
      })
    })
  })

  return guias
}

export default function GuiasPage() {
  const guias = loadGuias()

  // Agrupar por categoría
  const gruposPorCategoria: Record<string, typeof guias> = {}
  guias.forEach((guia) => {
    const clave = guia.categoria === 'casas'
      ? (guia.market === 'latam' ? 'casas-latam' : 'casas-espana')
      : guia.categoria
    if (!gruposPorCategoria[clave]) gruposPorCategoria[clave] = []
    gruposPorCategoria[clave].push(guia)
  })

  // Ordenar dentro de cada categoría
  Object.keys(gruposPorCategoria).forEach((cat) => {
    gruposPorCategoria[cat].sort((a, b) => (a.orden ?? 999) - (b.orden ?? 999))
  })

  // Construir secciones en el orden correcto
  const categoriasOrdenadas = ['primeros-pasos', 'modulos', 'estrategia', 'casas-espana', 'casas-latam']
  const secciones = categoriasOrdenadas
    .filter((cat) => gruposPorCategoria[cat])
    .map((cat) => ({
      id: cat,
      ...(CATEGORIAS_METADATA[cat] ?? {
        titulo: cat,
        descripcion: '',
        icono: '📄',
        color: 'from-stone-500/10 to-stone-500/5',
        badgeColor: 'bg-stone-100 text-stone-700',
      }),
      guias: gruposPorCategoria[cat],
    }))

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

      <GuiasTabsClient secciones={secciones} />
    </div>
  )
}
