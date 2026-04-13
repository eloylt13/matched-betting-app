'use client'

import { Suspense, useEffect } from 'react'
import posthog from 'posthog-js'
import { PostHogProvider as PostHogProviderClient } from 'posthog-js/react'

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com'
let hasInitializedPostHog = false

function PostHogPageView() {
  useEffect(() => {
    if (!posthogKey || typeof window === 'undefined') {
      return
    }

    const { pathname, search } = window.location
    const url = search ? `${pathname}${search}` : pathname

    posthog.capture('$pageview', {
      $current_url: url,
    })
  }, [])

  return null
}

export default function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!posthogKey || hasInitializedPostHog) {
      return
    }

    posthog.init(posthogKey, {
      api_host: posthogHost,
      capture_pageview: false,
      capture_pageleave: true,
      person_profiles: 'identified_only',
    })
    hasInitializedPostHog = true
  }, [])

  if (!posthogKey) {
    return <>{children}</>
  }

  return (
    <PostHogProviderClient client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </PostHogProviderClient>
  )
}
