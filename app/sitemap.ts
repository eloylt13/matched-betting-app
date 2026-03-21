// app/sitemap.ts
import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import { casasEspana } from '@/lib/presets/data/espana'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://matched-betting-app.vercel.app'
    const guiasDir = path.join(process.cwd(), 'content/guias')

    // Rutas estáticas
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            // Landing pública — máxima prioridad de indexación
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            // Dashboard de la app — no es una página pública de contenido
            url: `${baseUrl}/dashboard`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.4,
        },
        {
            url: `${baseUrl}/guias`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/calculadora`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/casas`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/bonos`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/historial`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
    ]

    // Rutas dinámicas de casas
    const casaRoutes: MetadataRoute.Sitemap = casasEspana.map((casa) => ({
        url: `${baseUrl}/casas/${casa.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    const guiaPriorityByCategory: Record<string, number> = {
        'primeros-pasos': 0.8,
        modulos: 0.8,
        estrategia: 0.7,
        casas: 0.7,
    }

    const guiaRoutes: MetadataRoute.Sitemap = []
    const categorias = fs.readdirSync(guiasDir)

    categorias.forEach((categoria) => {
        const categoriaPath = path.join(guiasDir, categoria)
        const stat = fs.statSync(categoriaPath)

        if (!stat.isDirectory()) return

        const files = fs.readdirSync(categoriaPath)

        files.forEach((file) => {
            if (!file.endsWith('.mdx') && !file.endsWith('.md')) return

            const slug = file.replace(/\.(mdx|md)$/, '')

            guiaRoutes.push({
                url: `${baseUrl}/guias/${categoria}/${slug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: guiaPriorityByCategory[categoria] ?? 0.7,
            })
        })
    })

    return [...staticRoutes, ...casaRoutes, ...guiaRoutes]
}
