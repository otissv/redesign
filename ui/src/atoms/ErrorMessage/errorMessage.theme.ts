import { isFunction } from '@redesign/theme'
import { ErrorMessageInterface } from './errorMessage.types'

import { PRIMARY, SECONDARY } from '@redesign/theme'

export function errorMessageTheme(props: ErrorMessageInterface) {
  const {
    theme: { transition, color, unit, ErrorMessage },
  } = props

  return {
    position: 'relative',
    color: color.error,
    transition: transition.easeMedium(),
    paddingTop: unit[1],
    paddingBottom: unit[1],
    ...(isFunction(ErrorMessage)
      ? ErrorMessage(props)?.default
      : ErrorMessage?.default),
  }
}

export function errorMessageAppearanceTheme(props: ErrorMessageInterface) {
  const {
    appearance,
    theme: { border, color, unit, ErrorMessage },
  } = props

  const errorMessageAppearanceTheme = isFunction(ErrorMessage)
    ? ErrorMessage(props)?.appearance
    : ErrorMessage?.appearance

  switch (appearance) {
    case SECONDARY:
      return {
        color: color.error_200,
        border: border.thinError600,
        paddingLeft: unit[2],
        paddingRight: unit[2],
        ...errorMessageAppearanceTheme?.secondary,
      }

    case PRIMARY:
    default:
      return {
        color: color.text,
        backgroundColor: color.error,
        paddingLeft: unit[2],
        paddingRight: unit[2],
        ...errorMessageAppearanceTheme?.primary,
      }
  }
}
