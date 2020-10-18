import { isFunction } from '@redesign/theme'

import { TextAreaInterface } from './textArea.types'

export function textAreaTheme(props: TextAreaInterface) {
  const {
    theme: { TextArea },
  } = props

  return {
    position: 'relative',
    ...(isFunction(TextArea) ? TextArea(props)?.default : TextArea?.default),
  }
}
