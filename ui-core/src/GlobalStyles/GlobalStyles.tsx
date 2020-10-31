import React from 'react'

import { injectGlobal } from 'emotion'
import { GlobalStylesInterface } from '@redesign-system/theme'
import { createStyleString } from '../helpers/createStyleString'
import { normalizeTheme } from '@redesign-system/theme'

export function GlobalStyles({ theme, css }: GlobalStylesInterface) {
  const normalize = React.useCallback(normalizeTheme, [])
  const global = theme?.global || {}

  injectGlobal(normalize(), global, createStyleString(css))
  return null
}
