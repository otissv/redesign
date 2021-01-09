import { isFunction } from '@redesign-system/theme'
import {
  PRIMARY,
  SECONDARY,
  TERTIARY,
  ACCENT,
  PRIMARY_ACCENT,
  SECONDARY_ACCENT,
  TERTIARY_ACCENT,
  ACTIVE,
  PRIMARY_ACTIVE,
  SECONDARY_ACTIVE,
  TERTIARY_ACTIVE,
  ACTION,
  PRIMARY_ACTION,
  SECONDARY_ACTION,
  TERTIARY_ACTION,
  DANGER,
  PRIMARY_DANGER,
  SECONDARY_DANGER,
  TERTIARY_DANGER,
  ERROR,
  PRIMARY_ERROR,
  SECONDARY_ERROR,
  TERTIARY_ERROR,
  SUCCESS,
  PRIMARY_SUCCESS,
  SECONDARY_SUCCESS,
  TERTIARY_SUCCESS,
  WARNING,
  PRIMARY_WARNING,
  SECONDARY_WARNING,
  TERTIARY_WARNING,
  DISABLED,
  PRIMARY_DISABLED,
  SECONDARY_DISABLED,
  TERTIARY_DISABLED,
} from '@redesign-system/theme'

import { TextboxInterface } from './textbox.types'

//TODO: add border to default

export function textboxTheme(props: TextboxInterface) {
  const {
    theme: { transition, border, color, font, unit, Textbox },
  } = props

  return {
    '-webkitAppearance': 'none',
    background: color.grey_600,
    border: border.thinTransparent,
    color: color.text,
    display: 'inline-block',
    fontSize: font.size.default,
    lineHeight: font.lineHeight.default,
    overflow: 'visible',
    padding: `${unit[1]} ${unit[2]}`,
    verticalAlign: 'bottom',
    transition: `${transition.easeMedium()}, outline`,
    outlineOffset: '-2px',
    width: '100%',

    '&:hover': {
      background: color.grey_500,
    },
    '&:focus': {
      background: color.grey_700,
      outline: `0.2em solid ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      background: color.grey_700,
    },

    '&::placeholder': {
      color: color.grey_200,
    },
    ...(isFunction(Textbox) ? Textbox(props)?.default : Textbox?.default),
  }
}

export function textboxAppearanceTheme(props: TextboxInterface) {
  const {
    appearance,
    theme: { color, border, Textbox },
  } = props

  const textboxAppearanceTheme = isFunction(Textbox)
    ? Textbox(props)?.appearance
    : Textbox?.appearance

  const accent = {
    background: color.accent_600,
    '&:hover': {
      background: color.accent_500,
    },
    '&:focus': {
      background: color.accent_700,
      outline: `1px solid ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      background: color.accent_700,
    },
    ...textboxAppearanceTheme?.accent,
  }

  const active = {
    background: color.active_600,
    '&:hover': {
      background: color.active_500,
    },
    '&:focus': {
      background: color.active_700,
      outline: `0.2em solid ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      background: color.active_600,
    },
    ...textboxAppearanceTheme?.active,
  }

  const action = {
    background: color.action_600,
    '&:hover': {
      background: color.action_500,
    },
    '&:focus': {
      background: color.action_700,
      outline: `0.2em solid ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      background: color.action_700,
    },
    ...textboxAppearanceTheme?.action,
  }

  const danger = {
    background: color.danger_600,
    '&:hover': {
      background: color.danger_500,
    },
    '&:focus': {
      background: color.danger_700,
      outline: `0.2em solid ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      background: color.danger_700,
    },
    ...textboxAppearanceTheme?.danger,
  }

  const secondaryDanger = {
    border: border.thinDanger,
    background: color.transparent,
    '&:hover': {
      background: color.grey_500,
    },
    '&:focus': {
      background: color.grey_700,
      outline: `0.2em solid ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      background: color.grey_700,
    },
    ...textboxAppearanceTheme?.secondaryDanger,
  }

  const tertiaryDanger = {
    background: 'none',
    border: border.thinTransparent,
    borderBottom: border.thinDanger,
    '&:active': {
      borderBottom: border.thinDanger,
    },
    '&:focus': {
      borderBottom: border.thinDanger,
      outline: `0.2em solid ${color.outline}`,
      zIndex: 2,
    },
    '&:hover': {
      borderBottom: border.thinDanger,
      background: color.grey_500,
    },
    ...textboxAppearanceTheme?.tertiaryDanger,
  }

  const error = {
    background: color.error_600,
    '&:hover': {
      background: color.error_500,
    },
    '&:focus': {
      background: color.error_700,
      outline: `0.2em solid ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      background: color.error_700,
    },
    ...textboxAppearanceTheme?.error,
  }
  const secondaryError = {
    border: border.thinError,
    background: color.transparent,
    '&:hover': {
      background: color.grey_500,
    },
    '&:focus': {
      background: color.grey_700,
      outline: `0.2em solid ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      background: color.grey_700,
    },
    ...textboxAppearanceTheme?.secondaryError,
  }
  const tertiaryError = {
    background: 'none',
    border: border.thinTransparent,
    borderBottom: border.thinError,
    '&:active': {
      borderBottom: border.thinError,
    },
    '&:focus': {
      borderBottom: border.thinError,
      outline: `0.2em solid ${color.outline}`,
      zIndex: 2,
    },
    '&:hover': {
      borderBottom: border.thinError,
      background: color.grey_500,
    },
    ...textboxAppearanceTheme?.tertiaryError,
  }

  const success = {
    background: color.success_600,
    '&:hover': {
      background: color.success_500,
    },
    '&:focus': {
      background: color.success_700,
      outline: `0.2em solid ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      background: color.success_700,
    },
    ...textboxAppearanceTheme?.success,
  }

  const warning = {
    background: color.yellow_600,
    '&:hover': {
      background: color.yellow_500,
    },
    '&:focus': {
      background: color.yellow_700,
      outline: `0.2em solid ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      background: color.yellow_700,
    },
    ...textboxAppearanceTheme?.warning,
  }

  const disabled = {
    color: color.grey_900,
    background: color.disabled,
    border: border.disabled,
    borderBottom: border.disabled,
    '&::placeholder': {
      color: color.grey_900,
    },
    '&:active': {
      background: color.disabled,
      border: border.disabled,
    },
    '&:focus': {
      background: color.disabled,
      border: border.disabled,
      outline: `0.2em solid ${color.outline}`,
      zIndex: 2,
    },
    '&:hover': {
      background: color.disabled,
      border: border.disabled,
    },
    ...textboxAppearanceTheme?.disabled,
  }

  switch (appearance) {
    case SECONDARY:
      return {
        background: border.thinTransparent,
        border: border.thinText,

        '&:hover': {
          background: color.grey_500,
        },
        '&:focus': {
          background: color.grey_700,
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        '&:active': {
          background: color.grey_700,
        },
        ...textboxAppearanceTheme?.secondary,
      }
    case TERTIARY:
      return {
        background: 'none',
        border: border.thinTransparent,
        borderBottom: border.thinText,
        '&:hover': {
          background: color.grey_500,
        },
        '&:focus': {
          background: color.grey_700,
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        '&:active': {
          background: color.grey_700,
        },
        ...textboxAppearanceTheme?.tertiary,
      }

    case ACCENT:
      return accent
    case PRIMARY_ACCENT:
      return { accent, ...textboxAppearanceTheme?.primary }
    case SECONDARY_ACCENT:
      return {
        border: border.thinAccent,
        borderBottom: border.thinAccent,
        background: border.thinTransparent,
        '&:hover': {
          background: color.grey_500,
        },
        '&:focus': {
          background: color.grey_700,
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        '&:active': {
          background: color.grey_700,
        },
        ...textboxAppearanceTheme?.secondaryAccent,
      }
    case TERTIARY_ACCENT:
      return {
        background: 'none',
        border: border.thinTransparent,
        borderBottom: border.thinAccent,
        '&:hover': {
          borderBottom: border.thinAccent,
          background: color.grey_500,
        },
        '&:focus': {
          borderBottom: border.thinAccent,
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        '&:active': {
          borderBottom: border.thinAccent,
        },
        ...textboxAppearanceTheme?.tertiaryAccent,
      }

    case ACTIVE:
      return active
    case PRIMARY_ACTIVE:
      return { active, ...textboxAppearanceTheme?.active }
    case SECONDARY_ACTIVE:
      return {
        border: border.thinActive,
        borderBottom: border.thinActive,
        background: color.grey_700,
        '&:hover': {
          background: color.grey_500,
        },
        '&:focus': {
          background: color.grey_700,
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        '&:active': {
          background: color.grey_700,
        },
        ...textboxAppearanceTheme?.secondaryActive,
      }
    case TERTIARY_ACTIVE:
      return {
        background: color.grey_700,
        border: border.thinTransparent,
        borderBottom: border.thinActive,
        '&:active': {
          background: color.grey_700,
          borderBottom: border.thinActive,
        },
        '&:focus': {
          borderBottom: border.thinActive,
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        '&:hover': {
          borderBottom: border.thinActive,
          background: color.grey_500,
        },
        ...textboxAppearanceTheme?.tertiaryActive,
      }

    case ACTION:
      return action
    case PRIMARY_ACTION:
      return { action, ...textboxAppearanceTheme?.action }
    case SECONDARY_ACTION:
      return {
        border: border.thinAction,
        borderBottom: border.thinAction,
        background: border.thinTransparent,
        '&:hover': {
          background: color.grey_500,
        },
        '&:focus': {
          background: color.grey_700,
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        '&:active': {
          background: color.grey_700,
        },
        ...textboxAppearanceTheme?.secondaryAction,
      }
    case TERTIARY_ACTION:
      return {
        background: 'none',
        border: border.thinTransparent,
        borderBottom: border.thinAction,
        '&:active': {
          borderBottom: border.thinAction,
        },
        '&:focus': {
          borderBottom: border.thinAction,
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        '&:hover': {
          borderBottom: border.thinAction,
          background: color.grey_500,
        },
        ...textboxAppearanceTheme?.tertiaryAction,
      }

    case DANGER:
      return danger
    case PRIMARY_DANGER:
      return { danger, ...textboxAppearanceTheme?.danger }
    case SECONDARY_DANGER:
      return secondaryDanger
    case TERTIARY_DANGER:
      return tertiaryDanger

    case ERROR:
      return error
    case PRIMARY_ERROR:
      return { error, ...textboxAppearanceTheme?.error }
    case SECONDARY_ERROR:
      return secondaryError
    case TERTIARY_ERROR:
      return tertiaryError

    case SUCCESS:
      return success
    case PRIMARY_SUCCESS:
      return { success, ...textboxAppearanceTheme?.success }
    case SECONDARY_SUCCESS:
      return {
        border: border.thinSuccess,
        borderBottom: border.thinSuccess,
        background: border.thinTransparent,
        '&:hover': {
          background: color.grey_500,
        },
        '&:focus': {
          background: color.grey_700,
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        '&:active': {
          background: color.grey_700,
        },
        ...textboxAppearanceTheme?.secondarySuccess,
      }
    case TERTIARY_SUCCESS:
      return {
        background: 'none',
        border: border.thinTransparent,
        borderBottom: border.thinSuccess,
        '&:active': {
          borderBottom: border.thinSuccess,
        },
        '&:focus': {
          borderBottom: border.thinSuccess,
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        '&:hover': {
          borderBottom: border.thinSuccess,
          background: color.grey_500,
        },
        ...textboxAppearanceTheme?.tertiarySuccess,
      }

    case WARNING:
      return warning
    case PRIMARY_WARNING:
      return { warning, ...textboxAppearanceTheme?.warning }
    case SECONDARY_WARNING:
      return {
        border: border.thinWarning,
        borderBottom: border.thinWarning,
        background: border.thinTransparent,
        '&:hover': {
          background: color.grey_500,
        },
        '&:focus': {
          background: color.grey_700,
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        '&:active': {
          background: color.grey_700,
        },
        ...textboxAppearanceTheme?.secondaryWarning,
      }
    case TERTIARY_WARNING:
      return {
        background: 'none',
        border: border.thinTransparent,
        borderBottom: border.thinWarning,
        '&:active': {
          borderBottom: border.thinWarning,
        },
        '&:focus': {
          borderBottom: border.thinWarning,
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        '&:hover': {
          borderBottom: border.thinWarning,
          background: color.grey_500,
        },
        ...textboxAppearanceTheme?.tertiaryWarning,
      }

    case DISABLED:
      return disabled
    case PRIMARY_DISABLED:
      return disabled
    case SECONDARY_DISABLED:
      return disabled
    case TERTIARY_DISABLED:
      return disabled

    case PRIMARY:
    default:
      return {
        ...textboxAppearanceTheme?.[appearance as string],
      }
  }
}

export function textboxSizeTheme(props: TextboxInterface) {
  const {
    size,
    theme: { font, Textbox },
  } = props

  const sizes: any = {
    1: { fontSize: font.size[1] },
    2: { fontSize: font.size[2] },
    3: { fontSize: font.size[3] },
    4: { fontSize: font.size[4] },
    5: { fontSize: font.size[5] },
    6: { fontSize: font.size[6] },
    7: { fontSize: font.size[7] },
    8: { fontSize: font.size[8] },
    9: { fontSize: font.size[9] },
    10: { fontSize: font.size[10] },
    11: { fontSize: font.size[11] },
    12: { fontSize: font.size[12] },
    ...(isFunction(Textbox) ? Textbox(props)?.size : Textbox?.size),
  }

  const value = size?.toString() || ''

  return sizes[value] || {}
}

export function textboxWidthsTheme(props: TextboxInterface) {
  const {
    widths,
    theme: { Textbox },
  } = props

  const _widths: any = {
    1: { width: '100px' },
    2: { width: '200px' },
    3: { width: '300px' },
    4: { width: '400px' },
    5: { width: '500px' },
    6: { width: '600px' },
    7: { width: '700px' },
    8: { width: '800px' },
    9: { width: '900px' },
    10: { width: '1000px' },
    ...(isFunction(Textbox) ? Textbox(props)?.size : Textbox?.size),
  }

  const value = widths?.toString() || ''

  return _widths[value] || {}
}
