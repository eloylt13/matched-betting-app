'use client'

import { useState } from 'react'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')

    try {
      const res = await fetch('https://formspree.io/f/xvzwbdrr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, _subject: 'Nueva suscripción — IAPredictHub' }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl px-8 py-6 text-center max-w-md mx-auto">
        <p className="text-3xl mb-3">✅</p>
        <p className="font-semibold text-emerald-800 mb-1">¡Apuntado!</p>
        <p className="text-sm text-emerald-600">Te avisaremos cuando haya novedades o nuevas guías.</p>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
          className="flex-1 bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="shrink-0 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
        >
          {status === 'loading' ? 'Enviando...' : 'Suscribirse'}
        </button>
      </form>
      {status === 'error' && (
        <p className="text-xs text-red-500 mt-2 text-center">
          Algo ha fallado. Prueba de nuevo o escríbenos directamente.
        </p>
      )}
    </div>
  )
}
