// app/sitemap.ts
import { MetadataRoute } from 'next'
import { casasEspana } from '@/lib/presets/data/espana'

const GUIA_PRIORITY_BY_CATEGORY: Record<string, number> = {
    'primeros-pasos': 0.8,
    modulos: 0.8,
    estrategia: 0.7,
    casas: 0.7,
}

const GUIA_ROUTES: Array<{ categoria: string; slug: string }> = [
    { categoria: 'primeros-pasos', slug: 'leeme-primero' },
    { categoria: 'primeros-pasos', slug: 'introduccion-matched-betting' },
    { categoria: 'primeros-pasos', slug: 'cuanto-se-puede-ganar' },
    { categoria: 'primeros-pasos', slug: 'orden-recomendado' },
    { categoria: 'primeros-pasos', slug: 'betfair-exchange' },
    { categoria: 'primeros-pasos', slug: 'calculadora-oddsmatcher' },
    { categoria: 'primeros-pasos', slug: 'calculadora-dutcher' },
    { categoria: 'primeros-pasos', slug: 'glosario-terminos' },
    { categoria: 'modulos', slug: 'modulo-1-betfair' },
    { categoria: 'modulos', slug: 'modulo-2-apuesta-y-recibe' },
    { categoria: 'modulos', slug: 'modulo-3-reembolso' },
    { categoria: 'modulos', slug: 'modulo-4-rollover' },
    { categoria: 'modulos', slug: 'modulo-5-herramientas' },
    { categoria: 'modulos', slug: 'modulo-6-dutcher' },
    { categoria: 'modulos', slug: 'modulo-7-calculadora-web' },
    { categoria: 'estrategia', slug: 'maximizar-apuesta-recibe' },
    { categoria: 'estrategia', slug: 'maximizar-reembolso' },
    { categoria: 'estrategia', slug: 'gestionar-rollover' },
    { categoria: 'estrategia', slug: 'gestion-bankroll' },
    { categoria: 'estrategia', slug: 'errores-comunes' },
    { categoria: 'estrategia', slug: 'como-no-perder-la-cuenta' },
    { categoria: 'casas', slug: '888sport' },
    { categoria: 'casas', slug: 'aupabet' },
    { categoria: 'casas', slug: 'bet365' },
    { categoria: 'casas', slug: 'betfair' },
    { categoria: 'casas', slug: 'betsson' },
    { categoria: 'casas', slug: 'betway' },
    { categoria: 'casas', slug: 'botemania' },
    { categoria: 'casas', slug: 'bwin' },
    { categoria: 'casas', slug: 'casino-gran-madrid' },
    { categoria: 'casas', slug: 'casumo' },
    { categoria: 'casas', slug: 'codere' },
    { categoria: 'casas', slug: 'daznbet' },
    { categoria: 'casas', slug: 'ebingo' },
    { categoria: 'casas', slug: 'efbet' },
    { categoria: 'casas', slug: 'goldenpark' },
    { categoria: 'casas', slug: 'interwetten' },
    { categoria: 'casas', slug: 'juegging' },
    { categoria: 'casas', slug: 'jokerbet' },
    { categoria: 'casas', slug: 'kirolbet' },
    { categoria: 'casas', slug: 'leovegas' },
    { categoria: 'casas', slug: 'marca-apuestas' },
    { categoria: 'casas', slug: 'olybet' },
    { categoria: 'casas', slug: 'paf' },
    { categoria: 'casas', slug: 'paston' },
    { categoria: 'casas', slug: 'pokerstars' },
    { categoria: 'casas', slug: 'retabet' },
    { categoria: 'casas', slug: 'solcasino' },
    { categoria: 'casas', slug: 'sportium' },
    { categoria: 'casas', slug: 'versus' },
    { categoria: 'casas', slug: 'william-hill' },
    { categoria: 'casas', slug: 'winamax' },
    { categoria: 'casas', slug: 'yaass' },
]

const GUIAS_PDF_ROUTES = [
    { slug: 'introduccion-matched-betting', priority: 0.9 },
    { slug: 'cuanto-se-puede-ganar-espana', priority: 0.9 },
    { slug: 'modulo-betfair-exchange', priority: 0.85 },
    { slug: 'modulo-apuesta-y-recibe', priority: 0.85 },
]

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
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
    ]

    // Rutas dinámicas de casas
    const casaRoutes: MetadataRoute.Sitemap = casasEspana.map((casa) => ({
        url: `${baseUrl}/casas/${casa.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    const guiaRoutes: MetadataRoute.Sitemap = GUIA_ROUTES.map(({ categoria, slug }) => ({
        url: `${baseUrl}/guias/${categoria}/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: GUIA_PRIORITY_BY_CATEGORY[categoria] ?? 0.7,
    }))

    const guiasPdfRoutes: MetadataRoute.Sitemap = GUIAS_PDF_ROUTES.map(({ slug, priority }) => ({
        url: `${baseUrl}/guias/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority,
    }))

    const blogRoutes: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/blog/que-es-matched-betting-espana`,
            lastModified: new Date('2026-03-29'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ]

    return [...staticRoutes, ...casaRoutes, ...guiaRoutes, ...guiasPdfRoutes, ...blogRoutes]
}
