import { isFunction } from '@redesign/theme'

import { LegendInterface } from './legend.types'

export function legendTheme(props: LegendInterface) {
  const {
    theme: { Legend },
  } = props

  return {
    position: 'relative',
    ...(isFunction(Legend) ? Legend(props)?.default : Legend?.default),
  }
}
