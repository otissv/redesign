import { isFunction } from '@redesign/theme'

import { IconInterface } from './icon.types'
import {
  ACCENT,
  ACTION,
  ACTIVE,
  DANGER,
  ERROR,
  SUCCESS,
  WARNING,
  DISABLED,
} from '@redesign/theme'

export function iconTheme(props: IconInterface) {
  const {
    hoverColor,
    theme: { Icon },
  } = props

  return {
    display: 'inline-block',
    color: 'inherit',
    fill: 'currentcolor',
    height: 'auto',
    position: 'relative',
    ...(hoverColor && { '&:hover': { color: hoverColor } }),
    ...(isFunction(Icon) ? Icon(props)?.default : Icon?.default),
  }
}

export function iconAppearanceTheme(props: IconInterface) {
  const {
    appearance,
    theme: { color, Icon },
  } = props

  const iconAppearanceTheme = isFunction(Icon)
    ? Icon(props)?.appearance
    : Icon?.appearance

  switch (appearance) {
    case ACCENT:
      return {
        color: color.accent,
        '&:hover': {
          color: color.accent2,
        },
        ...iconAppearanceTheme?.accent,
      }
    case ACTION:
      return {
        color: color.action,
        '&:hover': {
          color: color.action2,
        },
        ...iconAppearanceTheme?.action,
      }
    case ACTIVE:
      return {
        color: color.active,
        '&:hover': {
          color: color.active2,
        },
        ...iconAppearanceTheme?.active,
      }
    case DANGER:
      return {
        color: color.danger,
        '&:hover': {
          color: color.danger2,
        },
        ...iconAppearanceTheme?.danger,
      }
    case ERROR:
      return {
        color: color.error,
        '&:hover': {
          color: color.error2,
        },
        ...iconAppearanceTheme?.error,
      }
    case SUCCESS:
      return {
        color: color.success,
        '&:hover': {
          color: color.success2,
        },
        ...iconAppearanceTheme?.success,
      }
    case WARNING:
      return {
        color: color.warning,
        '&:hover': {
          color: color.warning2,
        },
        ...iconAppearanceTheme?.warning,
      }
    case DISABLED:
      return {
        color: color.disabled,
        '&:hover': {
          color: color.disabled2,
        },
        ...iconAppearanceTheme?.disabled,
      }

    default:
      return {
        ...iconAppearanceTheme?.[appearance as string],
      }
  }
}
