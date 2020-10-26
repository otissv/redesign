import { isFunction } from '@redesign-system/theme'

import { JsonInterface } from './json.types'

export function jsonTheme(props: JsonInterface) {
  const {
    theme: { Json },
  } = props

  return {
    position: 'relative',
    ...(isFunction(Json) ? Json(props)?.default : Json?.default),
  }
}
