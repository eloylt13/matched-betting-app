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
        body: JSON.stringify({ email, _subject: 'Nueva suscripci\u00f3n \u2014 IAPredictHub' }),
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
      <div className="relative mx-auto max-w-lg overflow-hidden rounded-[1.75rem] border border-emerald-300/20 bg-[#0b1020] px-8 py-6 text-center shadow-[0_24px_60px_rgba(15,23,42,0.16)]">
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/45 to-transparent" />
        <p className="mb-3 text-3xl">✅</p>
        <p className="mb-1 font-semibold text-white">¡Apuntado!</p>
        <p className="text-sm text-slate-300">Te avisaremos cuando haya novedades o nuevas guías.</p>
      </div>
    )
  }

  return (
    <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-[1.75rem] border border-slate-800/70 bg-[#0b1020] p-4 shadow-[0_24px_60px_rgba(15,23,42,0.16)] sm:p-5">
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
          className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-400 focus:border-emerald-300/40 focus:outline-none focus:ring-2 focus:ring-emerald-300/40"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="shrink-0 rounded-xl border border-emerald-300/20 bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_28px_rgba(16,185,129,0.24)] transition-all hover:bg-emerald-300 disabled:opacity-60"
        >
          {status === 'loading' ? 'Enviando...' : 'Suscribirse'}
        </button>
      </form>
      {status === 'error' && (
        <p className="mt-2 text-center text-xs text-red-400">
          Algo ha fallado. Prueba de nuevo o escríbenos directamente.
        </p>
      )}
    </div>
  )
}
