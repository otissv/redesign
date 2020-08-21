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

export function buttonTheme({
  theme: { transition, color, border, font, unit },
}: ButtonInterface) {
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
  }
}

export function buttonAppearanceTheme({
  appearance,
  theme: { color, border },
}: ButtonInterface) {
  const accent = {
    background: color.accent,
    border: border.thinAccent,
    color: color.white,
    '&:hover': {
      background: color.accent2,
      borderBottom: border.thinAccent2,
    },
    '&:focus': {
      outline: `0.2em solid ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      background: color.accent,
      border: border.thinAccent,
    },
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
  }

  const error = {
    background: color.error,
    border: border.thinDanger,
    color: color.white,
    '&:hover': {
      background: color.error,
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
  }

  const warning = {
    background: color.warning,
    border: border.thinWarning,
    color: color.white,
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
  }

  const disabled = {
    background: color.disabled,
    border: border.thinDisabled,
    color: color.grey_900,
    cursor: 'default',
    pointerEvents: 'none',

    '&:hover': {
      background: color.disabled,
      border: border.thinDisabled,
      color: color.grey_900,
    },
    '&:active': {
      background: color.disabled,
      border: border.thinDisabled,
      color: color.grey_900,
    },
    '&:focus': {
      background: color.disabled,
      border: border.thinDisabled,
      color: color.grey_900,
      outline: `0.2em solid ${color.outline}`,
      zIndex: 2,
    },
  }

  switch (appearance) {
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
      }
    case TERTIARY:
      return {
        background: 'none',
        border: `1px solid ${color.transparent}`,
        color: color.text,
        '&:hover': {
          background: 'none',
          borderBottom: border.thinDefault200,
        },
        '&:focus': {
          outline: `0.2em solid ${color.outline}`,

          zIndex: 2,
        },
        '&:active': {
          background: color.default_300,
        },
      }

    case ACCENT:
    case PRIMARY_ACCENT:
      return accent
    case SECONDARY_ACCENT:
      return {
        background: 'none',
        border: border.thinAccent,
        color: color.accent,
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
      }
    case TERTIARY_ACCENT:
      return {
        background: 'none',
        border: `1px solid ${color.transparent}`,
        color: color.accent,
        '&:hover': {
          color: color.white,
          background: color.accent,
          borderBottom: border.thinAccent,
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
      }

    case ACTIVE:
    case PRIMARY_ACTIVE:
      return active
    case SECONDARY_ACTIVE:
      return {
        background: color.active,
        border: border.thinActive,
        color: color.white,
        '&:hover': {
          background: color.active2,
          border: border.thinActive2,
          color: color.white,
        },
        '&:active': {
          background: color.active,
          border: border.thinActive,
          color: color.white,
        },
        '&:focus': {
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
      }
    case TERTIARY_ACTIVE:
      return {
        background: 'none',
        border: `1px solid ${color.transparent}`,
        borderBottom: border.thinActive,
        color: color.active,
        '&:hover': {
          background: color.active,
          borderBottom: border.thinActive2,
          color: color.white,
        },
        '&:active': {
          background: color.active,
          borderBottom: border.thinActive,
          color: color.white,
        },
        '&:focus': {
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
      }

    case ACTION:
    case PRIMARY_ACTION:
      return action
    case SECONDARY_ACTION:
      return {
        background: 'none',
        border: border.thinAction,
        color: color.action,
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
      }
    case TERTIARY_ACTION:
      return {
        background: 'none',
        border: `1px solid ${color.transparent}`,
        color: color.action,
        '&:hover': {
          background: color.action,
          borderBottom: border.thinAction,
          color: color.white,
        },
        '&:active': {
          background: color.action2,
          borderBottom: border.thinAction,
          color: color.white,
        },
        '&:focus': {
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
      }

    case DANGER:
    case PRIMARY_DANGER:
      return danger
    case SECONDARY_DANGER:
      return {
        background: 'none',
        border: border.thinDanger,
        color: color.danger,
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
      }
    case TERTIARY_DANGER:
      return {
        background: 'none',
        border: `1px solid ${color.transparent}`,
        color: color.danger,
        '&:hover': {
          background: color.danger,
          borderBottom: border.thinDanger,
          color: color.white,
        },
        '&:active': {
          background: color.danger2,
          borderBottom: border.thinDanger,
          color: color.white,
        },
        '&:focus': {
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
      }

    case ERROR:
    case PRIMARY_ERROR:
      return error
    case SECONDARY_ERROR:
      return {
        background: 'none',
        border: border.thinError,
        color: color.error,
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
      }
    case TERTIARY_ERROR:
      return {
        background: 'none',
        border: `1px solid ${color.transparent}`,
        color: color.error,
        '&:hover': {
          background: color.error,
          borderBottom: border.thinError,
          color: color.white,
        },
        '&:active': {
          background: color.error2,
          borderBottom: border.thinError,
          color: color.white,
        },
        '&:focus': {
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
      }
    case SUCCESS:
    case PRIMARY_SUCCESS:
      return success
    case SECONDARY_SUCCESS:
      return {
        background: 'none',
        border: border.thinSuccess,
        color: color.success,
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
      }
    case TERTIARY_SUCCESS:
      return {
        background: 'none',
        border: `1px solid ${color.transparent}`,
        color: color.success,
        '&:hover': {
          background: color.success,
          borderBottom: border.thinSuccess,
          color: color.white,
        },
        '&:active': {
          background: color.success2,
          borderBottom: border.thinSuccess,
          color: color.white,
        },
        '&:focus': {
          outline: `0.2em solid ${color.outline}`,
          zIndex: 2,
        },
      }

    case WARNING:
    case PRIMARY_WARNING:
      return warning
    case SECONDARY_WARNING:
      return {
        background: 'none',
        border: border.thinWaring,
        color: color.warning,
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
      }
    case TERTIARY_WARNING:
      return {
        background: 'none',
        border: `1px solid ${color.transparent}`,
        color: color.warning,
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
      }

    case DISABLED:
    case PRIMARY_DISABLED:
    case SECONDARY_DISABLED:
    case TERTIARY_DISABLED:
      return disabled

    case PRIMARY:
    default:
      return {}
  }
}

export function buttonSizeTheme({
  size,
  theme: { font, unit },
}: ButtonInterface) {
  switch (size) {
    case 1:
      return {
        padding: `0 ${unit[1]}`,
        fontSize: font.size[2],
      }
    case 2:
      return {
        padding: `0 ${unit[2]}`,
        fontSize: font.size[3],
      }
    case 3:
      return {
        padding: `0 ${unit[3]}`,
        fontSize: font.size[4],
      }
    case 4:
      return {
        padding: `0 ${unit[4]}`,
        fontSize: font.size[5],
      }
    case 5:
      return {
        padding: `0 ${unit[5]}`,
        fontSize: font.size[6],
      }
    case 6:
      return {
        padding: `0 ${unit[6]}`,
        fontSize: font.size[7],
      }
    case 7:
      return {
        padding: `0 ${unit[7]}`,
        fontSize: font.size[8],
      }
    case 8:
      return {
        padding: `0 ${unit[8]}`,
        fontSize: font.size[9],
      }
    case 9:
      return {
        padding: `0 ${unit[9]}`,
        fontSize: font.size[10],
      }
    case 10:
      return {
        padding: `0 ${unit[10]}`,
        fontSize: font.size[11],
      }
    default:
      return {}
  }
}

export function buttonStretchTheme({ stretch }: ButtonInterface) {
  return stretch ? { width: '100%' } : {}
}
