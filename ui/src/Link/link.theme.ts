import {
  isFunction,
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

import { LinkInterface } from './link.types'

export function linkTheme(props: LinkInterface) {
  const {
    theme: { color, Link },
  } = props

  return {
    position: 'relative',
    color: color.linkText,
    display: 'inline-block',
    textDecoration: 'underline',
    '&:hover': {
      color: color.linkTextHover,
    },

    '&:focus': {
      color: color.linkTextFocus,
      outline: `0.2em solid ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      color: color.linkTextActive,
    },
    ...(isFunction(Link) ? Link(props)?.default : Link?.default),
  }
}

export function linkAppearanceTheme(props: LinkInterface) {
  const {
    appearance,
    theme: { color, border, Link },
  } = props

  const buttonAppearanceTheme = isFunction(Link)
    ? Link(props)?.appearance
    : Link?.appearance

  const accent = {
    color: color.accent_200,
    '&:hover': {
      color: color.accent_200,
    },
    '&:focus': {
      outline: `0.2em solid ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      color: color.accent,
    },
    ...buttonAppearanceTheme?.accent,
  }

  const active = {
    color: color.active_200,
    '&:hover': {
      color: color.active_200,
    },
    '&:focus': {
      outline: `0.2em solid ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      color: color.active,
    },
    ...buttonAppearanceTheme?.active,
  }

  const action = {
    color: color.action_200,
    '&:hover': {
      color: color.action_200,
    },
    '&:focus': {
      outline: `0.2em solid ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      color: color.action,
    },
    ...buttonAppearanceTheme?.action,
  }

  const danger = {
    color: color.danger_200,
    '&:hover': {
      color: color.danger_200,
    },
    '&:focus': {
      outline: `0.2em solid ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      color: color.danger,
    },
    ...buttonAppearanceTheme?.danger,
  }

  const error = {
    color: color.error_200,
    '&:hover': {
      color: color.error_200,
    },
    '&:focus': {
      outline: `0.2em solid ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      color: color.danger,
    },
    ...buttonAppearanceTheme?.error,
  }

  const success = {
    color: color.success_200,
    '&:hover': {
      color: color.success_200,
    },
    '&:focus': {
      outline: `0.2em solid ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      color: color.success,
    },
    ...buttonAppearanceTheme?.success,
  }

  const warning = {
    color: color.warning_200,
    '&:hover': {
      color: color.warning_200,
    },
    '&:focus': {
      outline: `0.2em solid ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      color: color.warning,
    },
    ...buttonAppearanceTheme?.warning,
  }

  const disabled = {
    color: color.grey_300,
    cursor: 'default',
    pointerEvents: 'none',

    '&:hover': {
      color: color.grey_300,
    },
    '&:active': {
      color: color.grey_300,
    },
    '&:focus': {
      color: color.grey_300,
      outline: `0.2em solid ${color.outline}`,
      zIndex: 2,
    },
    ...buttonAppearanceTheme?.disabled,
  }

  switch (appearance) {
    case SECONDARY:
      return {
        background: 'none',
        color: color.linkText,
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
        '&:focus': {
          outline: `0.2em solid ${color.outline}`,
          textDecoration: 'underline',
          zIndex: 2,
        },
        '&:active': {
          textDecoration: 'underline',
        },
        ...buttonAppearanceTheme?.secondary,
      }
    case TERTIARY:
      return {
        background: 'none',
        border: `1px solid ${color.transparent}`,
        color: color.linkText,
        textDecoration: 'none',

        '&:hover': {
          background: color.linkTextHover,
          color: color.white,
        },

        '&:focus': {
          background: color.linkTextFocus,
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        '&:active': {
          background: color.linkTextActive,
        },
        ...buttonAppearanceTheme?.tertiary,
      }

    case ACCENT:
    case PRIMARY_ACCENT:
      return accent
    case SECONDARY_ACCENT:
      return {
        textDecoration: 'none',
        color: color.accent_200,
        '&:hover': {
          color: color.accent_200,
          textDecoration: 'underline',
        },
        '&:focus': {
          textDecoration: 'underline',
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        '&:active': {
          color: color.accent_200,
          textDecoration: 'underline',
        },
        ...buttonAppearanceTheme?.secondaryAccent,
      }
    case TERTIARY_ACCENT:
      return {
        background: 'none',
        border: `1px solid ${color.transparent}`,
        color: color.accent_200,
        textDecoration: 'none',
        '&:hover': {
          background: color.accent,
          color: color.white,
        },
        '&:active': {
          background: color.accent2,
          borderBottom: border.thinAccent,
          color: color.white,
        },
        '&:focus': {
          outline: `0.2em solid ${color.outline}`,
          outlineStyle: 'solid',
          outlineWidth: '1px',
          zIndex: 2,
        },
        ...buttonAppearanceTheme?.tertiaryAccent,
      }

    case ACTIVE:
    case PRIMARY_ACTIVE:
      return active
    case SECONDARY_ACTIVE:
      return {
        textDecoration: 'none',
        color: color.active_200,
        '&:hover': {
          color: color.active_200,
          textDecoration: 'underline',
        },
        '&:active': {
          color: color.active_200,
          textDecoration: 'underline',
        },
        '&:focus': {
          textDecoration: 'underline',
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        ...buttonAppearanceTheme?.secondaryActive,
      }
    case TERTIARY_ACTIVE:
      return {
        background: 'none',
        border: `1px solid ${color.transparent}`,
        color: color.active_200,
        textDecoration: 'none',
        '&:hover': {
          background: color.active,
          color: color.white,
        },
        '&:active': {
          background: color.active,
          color: color.white,
        },
        '&:focus': {
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        ...buttonAppearanceTheme?.tertiaryActive,
      }

    case ACTION:
    case PRIMARY_ACTION:
      return action
    case SECONDARY_ACTION:
      return {
        textDecoration: 'none',
        color: color.action_200,
        '&:hover': {
          color: color.action_200,
          textDecoration: 'underline',
        },
        '&:active': {
          color: color.action_200,
          textDecoration: 'underline',
        },
        '&:focus': {
          textDecoration: 'underline',
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        ...buttonAppearanceTheme?.secondaryAction,
      }
    case TERTIARY_ACTION:
      return {
        background: 'none',
        border: `1px solid ${color.transparent}`,
        textDecoration: 'none',
        color: color.action_200,
        '&:hover': {
          background: color.action,
          color: color.white,
        },
        '&:active': {
          background: color.action2,
          color: color.white,
        },
        '&:focus': {
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        ...buttonAppearanceTheme?.tertiaryAction,
      }

    case DANGER:
    case PRIMARY_DANGER:
      return danger
    case SECONDARY_DANGER:
      return {
        textDecoration: 'none',
        color: color.danger_200,
        '&:hover': {
          color: color.danger_200,
          textDecoration: 'underline',
        },
        '&:active': {
          color: color.danger_200,
          textDecoration: 'underline',
        },
        '&:focus': {
          textDecoration: 'underline',
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        ...buttonAppearanceTheme?.secondaryDanger,
      }
    case TERTIARY_DANGER:
      return {
        background: 'none',
        border: `1px solid ${color.transparent}`,
        color: color.danger_200,
        textDecoration: 'none',
        '&:hover': {
          background: color.danger,
          color: color.white,
        },
        '&:active': {
          background: color.danger2,
          color: color.white,
        },
        '&:focus': {
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        ...buttonAppearanceTheme?.tertiaryDanger,
      }

    case ERROR:
    case PRIMARY_ERROR:
      return error
    case SECONDARY_ERROR:
      return {
        textDecoration: 'none',
        color: color.error_200,
        '&:hover': {
          color: color.error_200,
          textDecoration: 'underline',
        },
        '&:active': {
          color: color.error_200,
          textDecoration: 'underline',
        },
        '&:focus': {
          textDecoration: 'underline',
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        ...buttonAppearanceTheme?.secondaryError,
      }
    case TERTIARY_ERROR:
      return {
        background: 'none',
        border: `1px solid ${color.transparent}`,
        color: color.error_200,
        textDecoration: 'none',
        '&:hover': {
          background: color.error,
          color: color.white,
        },
        '&:active': {
          background: color.error2,
          color: color.white,
        },
        '&:focus': {
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        ...buttonAppearanceTheme?.tertiaryError,
      }
    case SUCCESS:
    case PRIMARY_SUCCESS:
      return success
    case SECONDARY_SUCCESS:
      return {
        textDecoration: 'none',
        color: color.success_200,
        '&:hover': {
          color: color.success_200,
          textDecoration: 'underline',
        },
        '&:active': {
          color: color.success_200,
          textDecoration: 'underline',
        },
        '&:focus': {
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        ...buttonAppearanceTheme?.success?.secondarySuccess,
      }
    case TERTIARY_SUCCESS:
      return {
        background: 'none',
        border: `1px solid ${color.transparent}`,
        color: color.success_200,
        textDecoration: 'none',
        '&:hover': {
          background: color.success,
          color: color.white,
        },
        '&:active': {
          background: color.success2,
          color: color.white,
        },
        '&:focus': {
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        ...buttonAppearanceTheme?.tertiarySuccess,
      }

    case WARNING:
    case PRIMARY_WARNING:
      return warning
    case SECONDARY_WARNING:
      return {
        textDecoration: 'none',
        color: color.warning_200,
        '&:hover': {
          color: color.warning_200,
          textDecoration: 'underline',
        },
        '&:active': {
          color: color.warning_200,
          textDecoration: 'underline',
        },
        '&:focus': {
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        ...buttonAppearanceTheme?.secondaryWarning,
      }
    case TERTIARY_WARNING:
      return {
        background: 'none',
        border: `1px solid ${color.transparent}`,
        color: color.warning_200,
        textDecoration: 'none',
        '&:hover': {
          background: color.warning,
          borderBottom: border.thinWarning,
          color: color.white,
        },
        '&:active': {
          background: color.warning2,
          borderBottom: border.thinWarning,
          color: color.white,
        },
        '&:focus': {
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        ...buttonAppearanceTheme?.tertiaryWarning,
      }

    case DISABLED:
    case PRIMARY_DISABLED:
      return disabled
    case SECONDARY_DISABLED:
      return {
        textDecoration: 'none',
        color: color.disabled_300,
        '&:hover': {
          color: color.disabled_300,
          textDecoration: 'none',
        },
        '&:active': {
          color: color.disabled_300,
          textDecoration: 'none',
        },
        '&:focus': {
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        ...buttonAppearanceTheme?.secondaryWarning,
      }
    case TERTIARY_DISABLED:
      return {
        background: 'none',
        border: `1px solid ${color.transparent}`,
        color: color.disabled_300,
        textDecoration: 'none',
        cursor: 'default',
        '&:hover': {
          background: 'none',
          border: `1px solid ${color.transparent}`,
          color: color.disabled_300,
          textDecoration: 'none',
        },
        '&:active': {
          background: 'none',
          border: `1px solid ${color.transparent}`,
          color: color.disabled_300,
          textDecoration: 'none',
        },
        '&:focus': {
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        ...buttonAppearanceTheme?.tertiaryWarning,
      }

    case PRIMARY:
    default:
      return {
        ...buttonAppearanceTheme?.[appearance as string],
      }
  }
}
