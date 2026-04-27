// app/sitemap.ts
import fs from 'fs'
import path from 'path'
import { MetadataRoute } from 'next'
import { todasLasCasas } from '@/lib/presets'

const GUIA_PRIORITY_BY_CATEGORY: Record<string, number> = {
    'primeros-pasos': 0.8,
    modulos: 0.8,
    estrategia: 0.7,
    casas: 0.7,
}

const BLOG_ROUTES = [
    { slug: 'mundial-2026', lastModified: '2026-04-27', priority: 0.85 },
    { slug: 'que-es-matched-betting-espana', lastModified: '2026-03-29', priority: 0.8 },
    { slug: 'mejores-bonos-bienvenida-apuestas-espana', lastModified: '2026-03-29', priority: 0.8 },
    { slug: 'que-es-matched-betting-latam', lastModified: '2026-04-08', priority: 0.72 },
    { slug: 'mejores-bonos-bienvenida-latam', lastModified: '2026-04-08', priority: 0.72 },
    { slug: 'mejores-bonos-apuesta-y-recibe-espana', lastModified: '2026-04-15', priority: 0.72 },
    { slug: 'bonos-sin-rollover-espana', lastModified: '2026-04-15', priority: 0.72 },
    { slug: 'casas-apuestas-reembolso-espana', lastModified: '2026-04-15', priority: 0.72 },
    { slug: 'que-es-una-freebet', lastModified: '2026-04-15', priority: 0.72 },
    { slug: 'es-legal-matched-betting-espana', lastModified: '2026-04-15', priority: 0.72 },
] as const

const GUIAS_PDF_ROUTES = [
    { slug: 'introduccion-matched-betting', priority: 0.9 },
    { slug: 'cuanto-se-puede-ganar-espana', priority: 0.9 },
    { slug: 'modulo-betfair-exchange', priority: 0.85 },
    { slug: 'modulo-apuesta-y-recibe', priority: 0.85 },
]

const guiasDir = path.join(process.cwd(), 'content', 'guias')

function getGuiaRoutes(): Array<{ categoria: string; slug: string }> {
    if (!fs.existsSync(guiasDir)) return []

    return fs.readdirSync(guiasDir).flatMap((categoria) => {
        const categoriaPath = path.join(guiasDir, categoria)
        if (!fs.statSync(categoriaPath).isDirectory()) return []

        return fs
            .readdirSync(categoriaPath)
            .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
            .map((file) => ({
                categoria,
                slug: file.replace(/\.(mdx|md)$/, ''),
            }))
    })
}

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://iapredicthub.es'
    const now = new Date()

    // Rutas estáticas
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            // Landing pública — máxima prioridad de indexación
            url: baseUrl,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            // Dashboard de la app — no es una página pública de contenido
            url: `${baseUrl}/dashboard`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.4,
        },
        {
            url: `${baseUrl}/guias`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/calculadora`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/casas`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/bonos`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/historial`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/especial/mundial`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
    ]

    // Rutas dinámicas de casas
    const casaRoutes: MetadataRoute.Sitemap = todasLasCasas.map((casa) => ({
        url: `${baseUrl}/casas/${casa.id}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: casa.market === 'espana' ? 0.7 : 0.62,
    }))

    const guiaRoutes: MetadataRoute.Sitemap = getGuiaRoutes().map(({ categoria, slug }) => ({
        url: `${baseUrl}/guias/${categoria}/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority:
            categoria === 'casas' && /-(ar|cl|co|ec|mx|pa|pe|uy|reg)$/.test(slug)
                ? 0.64
                : GUIA_PRIORITY_BY_CATEGORY[categoria] ?? 0.7,
    }))

    const guiasPdfRoutes: MetadataRoute.Sitemap = GUIAS_PDF_ROUTES.map(({ slug, priority }) => ({
        url: `${baseUrl}/guias/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority,
    }))

    const blogRoutes: MetadataRoute.Sitemap = BLOG_ROUTES.map(({ slug, lastModified, priority }) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(lastModified),
        changeFrequency: 'monthly',
        priority,
    }))

    return [...staticRoutes, ...casaRoutes, ...guiaRoutes, ...guiasPdfRoutes, ...blogRoutes]
}
