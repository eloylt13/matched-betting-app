'use client'

import { useEffect, useRef } from 'react'

export default function HeroAtmosphere() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const canAnimate =
      window.matchMedia('(min-width: 768px)').matches &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!canAnimate) return

    let frame = 0

    const setVars = (x = 0, y = 0, scroll = 0) => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => {
        root.style.setProperty('--hero-mx', `${x.toFixed(2)}px`)
        root.style.setProperty('--hero-my', `${y.toFixed(2)}px`)
        root.style.setProperty('--hero-sy', `${scroll.toFixed(2)}px`)
      })
    }

    const updateScroll = () => {
      const rect = root.getBoundingClientRect()
      const progress = Math.max(-1, Math.min(1, -rect.top / Math.max(rect.height, 1)))
      const currentX = Number.parseFloat(root.style.getPropertyValue('--hero-mx')) || 0
      const currentY = Number.parseFloat(root.style.getPropertyValue('--hero-my')) || 0
      setVars(currentX, currentY, progress * 5)
    }

    const handlePointerMove = (event: PointerEvent) => {
      const rect = root.getBoundingClientRect()
      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      ) {
        handlePointerLeave()
        return
      }

      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 6
      const scrollY = Number.parseFloat(root.style.getPropertyValue('--hero-sy')) || 0
      setVars(x, y, scrollY)
    }

    const handlePointerLeave = () => {
      const scrollY = Number.parseFloat(root.style.getPropertyValue('--hero-sy')) || 0
      setVars(0, 0, scrollY)
    }

    updateScroll()
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('scroll', updateScroll, { passive: true })

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('scroll', updateScroll)
    }
  }, [])

  return (
    <div
      ref={rootRef}
      className="pointer-events-none absolute inset-0 [--hero-mx:0px] [--hero-my:0px] [--hero-sy:0px]"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          background:
            'radial-gradient(circle at 18% 18%, rgba(16, 185, 129, 0.16), transparent 30%), radial-gradient(circle at 82% 12%, rgba(99, 102, 241, 0.14), transparent 28%), linear-gradient(145deg, #080B16 0%, #10172A 48%, #151029 100%)',
          transform: 'translate3d(calc(var(--hero-mx) * 0.35), calc((var(--hero-my) * 0.25) + var(--hero-sy)), 0)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.07] transition-transform duration-700 ease-out"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.55) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.55) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 72%, transparent 100%)',
          transform: 'translate3d(calc(var(--hero-mx) * -0.2), calc((var(--hero-my) * -0.18) + (var(--hero-sy) * 0.45)), 0)',
        }}
      />
      <div
        className="absolute left-1/2 top-16 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl transition-transform duration-700 ease-out"
        style={{
          transform:
            'translate3d(calc(-50% + (var(--hero-mx) * 0.55)), calc((var(--hero-my) * 0.35) + (var(--hero-sy) * 0.6)), 0)',
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/25 to-transparent" />
    </div>
  )
}
