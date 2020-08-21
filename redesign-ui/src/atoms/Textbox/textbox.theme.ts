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
} from '@redesign/theme'

import { TextboxInterface } from './textbox.types'

//TODO: add border to default

export function textboxTheme({
  theme: { transition, border, color, font, unit },
}: TextboxInterface) {
  return {
    '-webkitAppearance': 'none',
    background: color.grey_600,
    border: border.transparent,
    borderBottom: border.thinText,
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
  }
}

export function textboxAppearanceTheme({
  appearance,
  theme: { color, border },
}: TextboxInterface) {
  const accent = {
    background: color.accent_600,
    borderBottom: border.thinText,
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
  }

  const active = {
    background: color.active_600,
    borderBottom: border.thinText,
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
  }

  const action = {
    background: color.action_600,
    borderBottom: border.thinText,
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
  }

  const danger = {
    background: color.danger_600,
    borderBottom: border.thinText,
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
  }
  const secondaryDanger = {
    border: border.thinDanger,
    borderBottom: border.thinDanger,
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
  }
  const tertiaryDanger = {
    background: 'none',
    border: border.transparent,
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
  }

  const error = {
    background: color.error_600,
    borderBottom: border.thinText,
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
  }
  const secondaryError = {
    border: border.thinError,
    borderBottom: border.thinError,
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
  }
  const tertiaryError = {
    background: 'none',
    border: border.transparent,
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
  }

  const success = {
    background: color.success_600,
    borderBottom: border.thinText,
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
  }

  const warning = {
    background: color.yellow_600,
    borderBottom: border.thinText,
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
  }

  switch (appearance) {
    case SECONDARY:
      return {
        background: border.transparent,
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
      }
    case TERTIARY:
      return {
        background: 'none',
        border: border.transparent,
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
      }

    case ACCENT:
    case PRIMARY_ACCENT:
      return accent
    case SECONDARY_ACCENT:
      return {
        border: border.thinAccent,
        borderBottom: border.thinAccent,
        background: border.transparent,
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
      }
    case TERTIARY_ACCENT:
      return {
        background: 'none',
        border: border.transparent,
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
      }

    case ACTIVE:
    case PRIMARY_ACTIVE:
      return active
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
      }
    case TERTIARY_ACTIVE:
      return {
        background: color.grey_700,
        border: border.transparent,
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
      }

    case ACTION:
    case PRIMARY_ACTION:
      return action
    case SECONDARY_ACTION:
      return {
        border: border.thinAction,
        borderBottom: border.thinAction,
        background: border.transparent,
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
      }
    case TERTIARY_ACTION:
      return {
        background: 'none',
        border: border.transparent,
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
      }

    case DANGER:
    case PRIMARY_DANGER:
      return danger
    case SECONDARY_DANGER:
      return secondaryDanger
    case TERTIARY_DANGER:
      return tertiaryDanger

    case ERROR:
      return error
    case PRIMARY_ERROR:
      return error
    case SECONDARY_ERROR:
      return secondaryError
    case TERTIARY_ERROR:
      return tertiaryError

    case SUCCESS:
    case PRIMARY_SUCCESS:
      return success
    case SECONDARY_SUCCESS:
      return {
        border: border.thinSuccess,
        borderBottom: border.thinSuccess,
        background: border.transparent,
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
      }
    case TERTIARY_SUCCESS:
      return {
        background: 'none',
        border: border.transparent,
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
      }

    case WARNING:
    case PRIMARY_WARNING:
      return warning
    case SECONDARY_WARNING:
      return {
        border: border.thinWarning,
        borderBottom: border.thinWarning,
        background: border.transparent,
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
      }
    case TERTIARY_WARNING:
      return {
        background: 'none',
        border: border.transparent,
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
      }

    case DISABLED:
    case PRIMARY_DISABLED:
      return disabled
    case SECONDARY_DISABLED:
      return disabled
    case TERTIARY_DISABLED:
      return disabled

    case PRIMARY:
    default:
      return {}
  }
}

export function textboxSizeTheme({ size, theme: { font } }: TextboxInterface) {
  switch (size) {
    case 1:
      return { fontSize: font.size[1] }
    case 2:
      return { fontSize: font.size[2] }
    case 3:
      return { fontSize: font.size[3] }
    case 4:
      return { fontSize: font.size[4] }
    case 5:
      return { fontSize: font.size[5] }
    case 6:
      return { fontSize: font.size[6] }
    case 7:
      return { fontSize: font.size[7] }
    case 8:
      return { fontSize: font.size[8] }
    case 9:
      return { fontSize: font.size[9] }
    case 10:
      return { fontSize: font.size[10] }
    case 11:
      return { fontSize: font.size[11] }
    case 12:
      return { fontSize: font.size[12] }
    default:
      return {}
  }
}

export function textboxWidthsTheme({ widths }: TextboxInterface) {
  switch (widths) {
    case 1:
      return { width: '100px' }
    case 2:
      return { width: '200px' }
    case 3:
      return { width: '300px' }
    case 4:
      return { width: '400px' }
    case 5:
      return { width: '500px' }
    case 6:
      return { width: '600px' }
    case 7:
      return { width: '700px' }
    case 8:
      return { width: '800px' }
    case 9:
      return { width: '900px' }
    case 10:
      return { width: '1000px' }
    default:
      return {}
  }
}
