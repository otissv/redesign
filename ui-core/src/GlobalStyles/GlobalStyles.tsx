import { injectGlobal } from 'emotion'
import { GlobalStylesInterface } from '@redesign-system/theme'
import { createStyleString } from '../helpers/createStyleString'

export function GlobalStyles({ theme, css }: GlobalStylesInterface) {
  const global = theme?.global || {}

  injectGlobal(global, createStyleString(css))

  return null
}
