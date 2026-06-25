const CACHE_NAME = 'iapredicthub-static-v1'

const STATIC_ASSET_PATHS = new Set([
  '/favicon.ico',
  '/apple-touch-icon.png',
  '/icons/web-app-manifest-192x192.png',
  '/icons/web-app-manifest-512x512.png',
])

self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))),
      )
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // No cachear documentos HTML ni rutas dinamicas/API.
  if (
    request.method !== 'GET' ||
    request.mode === 'navigate' ||
    request.destination === 'document' ||
    url.pathname.startsWith('/api') ||
    request.headers.get('accept')?.includes('text/html')
  ) {
    return
  }

  const isNextStaticAsset = url.pathname.startsWith('/_next/static/')
  const isKnownStaticIcon = STATIC_ASSET_PATHS.has(url.pathname)

  if (!isNextStaticAsset && !isKnownStaticIcon) {
    return
  }

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cached = await cache.match(request)

      if (cached) {
        return cached
      }

      const response = await fetch(request)

      if (response.ok) {
        cache.put(request, response.clone())
      }

      return response
    }),
  )
})
