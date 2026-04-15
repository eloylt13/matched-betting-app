'use client'

import Link, { type LinkProps } from 'next/link'
import type { MouseEventHandler, ReactNode } from 'react'
import { captureEvent, type AnalyticsProps } from '@/lib/analytics'

type TrackedLinkProps = LinkProps & {
  eventName: string
  eventProps?: AnalyticsProps
  className?: string
  children: ReactNode
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export default function TrackedLink({
  eventName,
  eventProps,
  onClick,
  children,
  ...props
}: TrackedLinkProps) {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    captureEvent(eventName, eventProps)
    onClick?.(event)
  }

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  )
}
