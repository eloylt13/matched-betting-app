'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

type StickyMobileCTAProps = {
  href: string
  label: string
  offset?: 'default' | 'aboveNav'
  hideWhileElementVisibleId?: string
}

export default function StickyMobileCTA({
  href,
  label,
  offset = 'default',
  hideWhileElementVisibleId,
}: StickyMobileCTAProps) {
  const [isHiddenByVisibleElement, setIsHiddenByVisibleElement] = useState(false)

  useEffect(() => {
    if (!hideWhileElementVisibleId) {
      setIsHiddenByVisibleElement(false)
      return
    }

    if (typeof IntersectionObserver === 'undefined') {
      setIsHiddenByVisibleElement(false)
      return
    }

    const targetElement = document.getElementById(hideWhileElementVisibleId)

    if (!targetElement) {
      setIsHiddenByVisibleElement(false)
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsHiddenByVisibleElement(entry.isIntersecting)
    })

    observer.observe(targetElement)

    return () => observer.disconnect()
  }, [hideWhileElementVisibleId])

  const bottomClass =
    offset === 'aboveNav'
      ? 'bottom-[calc(6rem+env(safe-area-inset-bottom))]'
      : 'bottom-[calc(1rem+env(safe-area-inset-bottom))]'

  if (isHiddenByVisibleElement) {
    return null
  }

  return (
    <div className={`fixed inset-x-4 z-[60] md:hidden ${bottomClass}`}>
      <Link
        href={href}
        className="flex min-h-12 w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-emerald-950/20 transition hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950"
      >
        {label}
      </Link>
    </div>
  )
}
