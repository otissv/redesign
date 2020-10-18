import { isFunction } from '@redesign/theme'

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

import { ButtonInterface } from './button.types'

export function buttonTheme(props: ButtonInterface) {
  const {
    theme: { transition, color, border, font, unit, Button },
  } = props

  const buttonText = 'white'
  const buttonBackground = 'default'
  const buttonBorder = 'thinDefault'
  const buttonHoverBackground = 'default2'
  const buttonHoverBorder = 'thinDefault2'
  const buttonActiveBackground = 'default'
  const buttonActiveBorderBottom = 'thinDefault'

  return {
    color: color[buttonText],
    background: color[buttonBackground],
    border: border[buttonBorder],
    boxShadow: 'none',
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'inline-block',
    font: 'inherit',
    lineHeight: font.lineHeight[4],
    overflow: 'visible',
    padding: `0 ${unit[3]}`,
    textAlign: 'center',
    transition: `${transition.easeMedium()}, outline`,
    verticalAlign: 'middle',
    position: 'relative',
    outlineOffset: '-2px',

    '&:hover': {
      background: color[buttonHoverBackground],
      borderBottom: border[buttonHoverBorder],
    },
    '&:focus': {
      outline: `0.2em solid ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      background: color[buttonActiveBackground],
      borderBottom: border[buttonActiveBorderBottom],
    },
    ...(isFunction(Button) ? Button(props)?.default : Button?.default),
  }
}

export function buttonAppearanceTheme(props: ButtonInterface) {
  const {
    active: isActive,
    appearance,
    theme: { color, border, Button },
  } = props

  const buttonAppearanceTheme = isFunction(Button)
    ? Button(props)?.appearance
    : Button?.appearance

  const accent = {
    background: color.accent_600,
    border: border.thinAccent,
    color: color.white,
    '&:hover': {
      background: color.accent2,
      border: border.thinAccent2,
    },
    '&:focus': {
      outline: `0.2em solid ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      background: color.accent,
      border: border.thinAccent,
    },
    ...buttonAppearanceTheme?.accent,
  }

  const active = {
    background: color.active,
    border: border.thinActive,
    color: color.white,
    '&:hover': {
      background: color.active2,
      border: border.thinActive2,
    },
    '&:focus': {
      outline: `0.2em solid ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      background: color.active,
      border: border.thinActive,
    },
    ...buttonAppearanceTheme?.active,
  }

  const action = {
    background: color.action,
    border: border.thinAction,
    color: color.white,
    '&:hover': {
      background: color.action2,
      border: border.thinAction2,
    },
    '&:focus': {
      outline: `0.2em solid ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      background: color.action,
      border: border.thinAction,
    },
    ...buttonAppearanceTheme?.action,
  }

  const danger = {
    background: color.danger,
    border: border.thinDanger,
    color: color.white,
    '&:hover': {
      background: color.danger2,
      border: border.thinDanger2,
    },
    '&:focus': {
      outline: `0.2em solid ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      background: color.danger,
      border: border.thinDanger,
    },
    ...buttonAppearanceTheme?.danger,
  }

  const error = {
    background: color.error,
    border: border.thinDanger,
    color: color.white,
    '&:hover': {
      background: color.error2,
      border: border.thinError2,
    },
    '&:focus': {
      outline: `0.2em solid ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      background: color.danger,
      border: border.thinError,
    },
    ...buttonAppearanceTheme?.error,
  }

  const success = {
    background: color.success,
    border: border.thinSuccess,
    color: color.white,
    '&:hover': {
      background: color.success2,
      border: border.thinSuccess2,
    },
    '&:focus': {
      outline: `0.2em solid ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      background: color.success,
      border: border.thinSuccess,
    },
    ...buttonAppearanceTheme?.success,
  }

  const warning = {
    background: color.warning,
    border: border.thinWarning,
    color: color.black,
    '&:hover': {
      background: color.warning2,
      border: border.thinWarning2,
    },
    '&:focus': {
      outline: `0.2em solid ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      background: color.warning,
      border: border.thinWarning,
    },
    ...buttonAppearanceTheme?.warning,
  }

  const disabled = {
    background: color.disabled,
    border: border.thinDisabled,
    color: color.disabled_400,
    cursor: 'default',
    pointerEvents: 'none',

    '&:hover': {
      background: color.disabled,
      border: border.thinDisabled,
      color: color.disabled_900,
    },
    '&:active': {
      background: color.disabled,
      border: border.thinDisabled,
      color: color.disabled_900,
    },
    '&:focus': {
      background: color.disabled,
      border: border.thinDisabled,
      color: color.disabled_900,
      outline: `0.2em solid ${color.outline}`,
      zIndex: 2,
    },
    ...buttonAppearanceTheme?.disabled,
  }

  const appearanceType = isActive ? ACTIVE : appearance

  switch (appearanceType) {
    case SECONDARY:
      return {
        background: 'none',
        border: border.thinDefault,
        color: color.white,
        '&:hover': {
          background: color.default2,
          border: border.thinDefault2,
          color: color.white,
        },
        '&:focus': {
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        '&:active': {
          background: color.default2,
          border: border.thinDefault2,
          color: color.white,
        },
        ...buttonAppearanceTheme?.secondary,
      }
    case TERTIARY:
      return {
        background: 'none',
        border: `1px solid ${color.transparent}`,
        color: color.text,
        '&:focus': {
          outline: `0.2em solid ${color.outline}`,

          zIndex: 2,
        },
        '&:active': {
          background: color.default_300,
        },
        ...buttonAppearanceTheme?.tertiary,
      }

    case ACCENT:
    case PRIMARY_ACCENT:
      return accent
    case SECONDARY_ACCENT:
      return {
        background: 'none',
        border: border.thinAccent200,
        color: color.accent_200,
        '&:hover': {
          background: color.accent2,
          border: border.thinAccent2,
          color: color.white,
        },
        '&:focus': {
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        '&:active': {
          background: color.accent,
          border: `1px solid ${color.accent}`,
          color: color.white,
        },
        ...buttonAppearanceTheme?.secondaryAccent,
      }
    case TERTIARY_ACCENT:
      return {
        background: 'none',
        border: `1px solid ${color.transparent}`,
        color: color.accent_100,
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
        background: 'none',
        border: border.thinActive200,
        color: color.active_200,
        '&:hover': {
          background: color.active2,
          border: border.thinActive2,
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
        ...buttonAppearanceTheme?.secondaryActive,
      }
    case TERTIARY_ACTIVE:
      return {
        background: 'none',
        border: `1px solid ${color.transparent}`,
        color: color.active_100,
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
        background: 'none',
        border: border.thinAction200,
        color: color.action_200,
        '&:hover': {
          background: color.action2,
          border: border.thinAction2,
          color: color.white,
        },
        '&:active': {
          background: color.action2,
          border: border.thinAction2,
          color: color.white,
        },
        '&:focus': {
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        ...buttonAppearanceTheme?.secondaryAction,
      }
    case TERTIARY_ACTION:
      return {
        background: 'none',
        border: `1px solid ${color.transparent}`,
        color: color.action_100,
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
        background: 'none',
        border: border.thinDanger200,
        color: color.danger_200,
        '&:hover': {
          background: color.danger2,
          border: border.thinDanger2,
          color: color.white,
        },
        '&:active': {
          background: color.danger2,
          border: border.thinDanger2,
          color: color.white,
        },
        '&:focus': {
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        ...buttonAppearanceTheme?.secondaryDanger,
      }
    case TERTIARY_DANGER:
      return {
        background: 'none',
        border: `1px solid ${color.transparent}`,
        color: color.danger_100,
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
        background: 'none',
        border: border.thinError200,
        color: color.error_200,
        '&:hover': {
          background: color.error2,
          border: border.thinError2,
          color: color.white,
        },
        '&:active': {
          background: color.error2,
          border: border.thinError2,
          color: color.white,
        },
        '&:focus': {
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
        ...buttonAppearanceTheme?.secondaryError,
      }
    case TERTIARY_ERROR:
      return {
        background: 'none',
        border: `1px solid ${color.transparent}`,
        color: color.error_100,
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
        background: 'none',
        border: border.thinSuccess200,
        color: color.success_200,
        '&:hover': {
          background: color.success2,
          border: border.thinSuccess2,
          color: color.white,
        },
        '&:active': {
          background: color.success2,
          border: border.thinSuccess2,
          color: color.white,
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
        color: color.success_100,
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
        background: 'none',
        border: border.thinWarning200,
        color: color.warning_200,
        '&:hover': {
          background: color.warning2,
          border: border.thinWaring2,
          color: color.white,
        },
        '&:active': {
          background: color.warning2,
          border: border.thinWaring2,
          color: color.white,
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
        color: color.warning_100,
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
    case SECONDARY_DISABLED:
    case TERTIARY_DISABLED:
      return disabled

    case PRIMARY:
    default:
      return {
        ...buttonAppearanceTheme?.[appearance as string],
      }
  }
}

export function buttonSizeTheme(props: ButtonInterface) {
  const {
    size,
    theme: { font, unit, Button },
  } = props

  const sizes: any = {
    1: {
      padding: `0 ${unit[1]}`,
      fontSize: font.size[2],
    },
    2: {
      padding: `0 ${unit[2]}`,
      fontSize: font.size[3],
    },
    3: {
      padding: `0 ${unit[3]}`,
      fontSize: font.size[4],
    },
    4: {
      padding: `0 ${unit[4]}`,
      fontSize: font.size[5],
    },
    5: {
      padding: `0 ${unit[5]}`,
      fontSize: font.size[6],
    },
    6: {
      padding: `0 ${unit[6]}`,
      fontSize: font.size[7],
    },
    7: {
      padding: `0 ${unit[7]}`,
      fontSize: font.size[8],
    },
    8: {
      padding: `0 ${unit[8]}`,
      fontSize: font.size[9],
    },
    9: {
      padding: `0 ${unit[9]}`,
      fontSize: font.size[10],
    },
    10: {
      padding: `0 ${unit[10]}`,
      fontSize: font.size[11],
    },
    ...(isFunction(Button) ? Button(props)?.size : Button?.size),
  }

  const value = size?.toString() || ''

  return sizes[value] || {}
}

export function buttonStretchTheme(props: ButtonInterface) {
  const {
    stretch,
    theme: { Button },
  } = props

  const buttonStretchTheme = isFunction(Button)
    ? Button(props)?.stretch
    : Button?.stretch

  return stretch ? { width: '100%', ...buttonStretchTheme } : {}
}
