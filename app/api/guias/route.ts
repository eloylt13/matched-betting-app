import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface GuiaData {
  titulo: string
  slug: string
  categoria: string
  descripcion?: string
  emoji?: string
  orden?: number
}

export async function GET() {
  try {
    const guiasDir = path.join(process.cwd(), 'content/guias')
    const guias: GuiaData[] = []

    // Leer todas las categorías
    const categorias = fs.readdirSync(guiasDir)

    categorias.forEach((categoria) => {
      const categoriaPath = path.join(guiasDir, categoria)
      const stat = fs.statSync(categoriaPath)

      if (stat.isDirectory()) {
        // Leer todos los archivos MDX en la categoría
        const files = fs.readdirSync(categoriaPath)

        files.forEach((file) => {
          if (file.endsWith('.mdx') || file.endsWith('.md')) {
            const filePath = path.join(categoriaPath, file)
            const fileContent = fs.readFileSync(filePath, 'utf-8')
            const { data } = matter(fileContent)

            const slug = file.replace(/\.(mdx|md)$/, '')

            guias.push({
              titulo: data.title || slug,
              slug,
              categoria,
              descripcion: data.descripcion || '',
              emoji: data.emoji || '📄',
              orden: data.orden,
            })
          }
        })
      }
    })

    return NextResponse.json(guias)
  } catch (error) {
    console.error('Error reading guias:', error)
    return NextResponse.json(
      { error: 'Failed to read guias' },
      { status: 500 }
    )
  }
}
