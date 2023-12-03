// https://github.com/gaearon/overreacted.io/pull/797

'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface AutoRefreshProps {
  children: React.ReactNode
}

let AutoRefresh = function AutoRefresh({ children }: AutoRefreshProps) {
  return children
}

if (process.env.NODE_ENV === 'development') {
  AutoRefresh = function AutoRefresh({ children }: AutoRefreshProps) {
    const router = useRouter()
    useEffect(() => {
      const ws = new WebSocket('ws://localhost:3001')
      ws.onmessage = (event) => {
        if (event.data === 'refresh') {
          router.refresh()
        }
      }
      return () => {
        ws.close()
      }
    }, [router])
    return children
  }
}

export default AutoRefresh
