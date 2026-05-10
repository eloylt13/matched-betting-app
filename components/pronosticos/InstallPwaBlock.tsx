'use client'

import { useEffect, useState } from 'react'

type BeforeInstallPromptEvent = Event & {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>
}

type Platform = 'android' | 'ios' | 'other'

const androidSteps = [
  'Abre IAPredictHub en Chrome.',
  'Pulsa el menú ⋮ arriba a la derecha.',
  'Toca “Añadir a pantalla de inicio”.',
  'Confirma en “Añadir”.',
]

const iosSteps = [
  'Abre IAPredictHub en Safari.',
  'Pulsa el botón Compartir.',
  'Desliza hacia abajo y toca “Añadir a pantalla de inicio”.',
  'Confirma en “Añadir”.',
]

export function InstallPwaBlock() {
  const [isInstalled, setIsInstalled] = useState(false)
  const [canPromptInstall, setCanPromptInstall] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [platform, setPlatform] = useState<Platform>('other')

  useEffect(() => {
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as { standalone?: boolean }).standalone === true

    if (isStandalone) {
      setIsInstalled(true)
    }

    const userAgent = window.navigator.userAgent

    if (/iphone|ipad|ipod/i.test(userAgent)) {
      setPlatform('ios')
    } else if (/android/i.test(userAgent)) {
      setPlatform('android')
    } else {
      setPlatform('other')
    }

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault()
      setDeferredPrompt(event as BeforeInstallPromptEvent)
      setCanPromptInstall(true)
    }

    const handleAppInstalled = () => {
      setIsInstalled(true)
      setCanPromptInstall(false)
      setDeferredPrompt(null)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      return
    }

    try {
      await deferredPrompt.prompt()
      await deferredPrompt.userChoice
    } catch (error) {
      console.warn('No se pudo mostrar el instalador de IAPredictHub.', error)
    } finally {
      setCanPromptInstall(false)
      setDeferredPrompt(null)
    }
  }

  if (isInstalled || platform === 'other') {
    return null
  }

  const isAndroid = platform === 'android'
  const steps = isAndroid ? androidSteps : iosSteps
  const platformLabel = isAndroid ? 'Android · Chrome' : 'iPhone / iPad · Safari'
  const shouldShowInstallButton = isAndroid && canPromptInstall && deferredPrompt

  return (
    <section className="mt-6 rounded-3xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50/70 to-stone-50 px-5 py-5 shadow-sm sm:px-6 sm:py-6">
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-lg font-bold leading-tight text-stone-900 sm:text-xl">
            📱 Guarda IAPredictHub en tu móvil
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            Accede cada día a la Freebet diaria, tus guías y tu panel sin buscar la web en el navegador.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-stone-700">
            Guárdala en tu pantalla de inicio y ábrela más rápido, como una app.
          </p>
        </div>

        {shouldShowInstallButton ? (
          <button
            type="button"
            onClick={handleInstallClick}
            className="inline-flex min-h-11 w-full items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:w-auto"
          >
            Instalar IAPredictHub
          </button>
        ) : (
          <div className="rounded-2xl border border-stone-200 bg-white/80 px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
              {platformLabel}
            </p>
            <ol className="mt-3 space-y-2">
              {steps.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm leading-relaxed text-stone-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-800">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {platform === 'ios' ? (
          <p className="text-xs leading-relaxed text-stone-500">
            En iPhone recomendamos Safari para una experiencia más parecida a app. Si no ves la opción, abre IAPredictHub en Safari.
          </p>
        ) : null}
      </div>
    </section>
  )
}
