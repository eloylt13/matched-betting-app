'use client'

import { useEffect, useState } from 'react'
import BottomNav from '@/components/BottomNav'

export default function HomeFloatingBottomNav() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const sentinel = document.getElementById('home-hero-sentinel')

    if (!sentinel) {
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry) {
        return
      }

      const isPastHero = !entry.isIntersecting && entry.boundingClientRect.top < 0
      setVisible(isPastHero)
    })

    observer.observe(sentinel)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      aria-hidden={!visible}
      className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-300 ease-out md:hidden ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <BottomNav />
    </div>
  )
}
