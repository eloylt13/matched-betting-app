'use client'

import posthog from 'posthog-js'

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY

export type AnalyticsProps = Record<string, string | number | boolean | null | undefined>

export function captureEvent(eventName: string, props?: AnalyticsProps) {
  if (typeof window === 'undefined' || !posthogKey) {
    return
  }

  try {
    posthog.capture(eventName, props)
  } catch {
    // Ignore analytics failures so navigation never breaks.
  }
}
