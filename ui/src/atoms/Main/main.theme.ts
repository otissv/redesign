import { isFunction } from '@redesign/theme'

import { MainInterface } from './main.types'

export function mainTheme(props: MainInterface) {
  const {
    theme: { Main },
  } = props

  return {
    position: 'relative',
    ...(isFunction(Main) ? Main(props)?.default : Main?.default),
  }
}
