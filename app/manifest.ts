import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'IAPredictHub',
    short_name: 'IAPredictHub',
    description:
      'Herramienta gratuita para bonos de bienvenida, matched betting y freebets en español.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#050914',
    theme_color: '#12112A',
    lang: 'es',
    icons: [
      {
        src: '/icons/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
