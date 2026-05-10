'use client'

import { useEffect } from 'react'

export default function PwaRegister() {
  useEffect(() => {
    if (!('serviceWorker' in navigator)) {
      return
    }

    const isAllowedProtocol =
      window.location.protocol === 'https:' || window.location.hostname === 'localhost'

    if (!isAllowedProtocol) {
      return
    }

    navigator.serviceWorker.register('/sw.js').catch((error) => {
      console.warn('No se pudo registrar el service worker de IAPredictHub.', error)
    })
  }, [])

  return null
}
