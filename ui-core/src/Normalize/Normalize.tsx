import { useCallback, useEffect } from 'react'
import { injectGlobal } from 'emotion'
import { normalizeTheme } from '@redesign/theme'

export function Normalize() {
  const normalize = useCallback(normalizeTheme, [])

  useEffect(() => {
    injectGlobal(normalize())
  }, [])

  return null
}
