import { isFunction } from '@redesign-system/theme'

import { LabelInterface } from './label.types'

export function labelTheme(props: LabelInterface) {
  const {
    theme: { Label },
  } = props

  return {
    position: 'relative',
    ...(isFunction(Label) ? Label(props)?.default : Label?.default),
  }
}
