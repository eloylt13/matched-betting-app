// app/sitemap.ts
import { MetadataRoute } from 'next'
import { casasEspana } from '@/lib/presets/data/espana'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://matched-betting-app.vercel.app'

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

    return [...staticRoutes, ...casaRoutes]
}
