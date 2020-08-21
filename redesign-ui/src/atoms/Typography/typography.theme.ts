import { TypographyInterface } from './typography.types'
import {
  PRIMARY,
  ACCENT,
  ACTIVE,
  ACTION,
  DANGER,
  ERROR,
  SUCCESS,
  WARNING,
  DISABLED,
} from '@redesign/theme'

export function typographyTheme({
  theme: { transition },
}: TypographyInterface) {
  return {
    transition: transition.easeMedium(),
  }
}

export function typographyAppearanceTheme({
  appearance,
  theme: { color },
}: TypographyInterface) {
  switch (appearance) {
    case ACCENT:
      return {
        color: color.accent,
      }
    case ACTIVE:
      return {
        color: color.action,
      }
    case ACTION:
      return {
        color: color.action,
      }
    case DANGER:
      return {
        color: color.danger,
      }
    case ERROR:
      return {
        color: color.error,
      }
    case DISABLED:
      return {
        color: color.disabled,
      }
    case SUCCESS:
      return {
        color: color.success,
      }
    case WARNING:
      return {
        color: color.warning,
      }

    case PRIMARY:
    default:
      return {}
  }
}

export function typographyModifyTheme({
  modify,
  theme: { color, font },
}: TypographyInterface) {
  switch (modify) {
    case 'LEAD':
      return {
        fontSize: font.size[8],
        fontWeight: 300,
      }
    case 'META':
      return {
        fontSize: font.size[2],
        color: color.grey_500,
      }
    default:
      return {}
  }
}

export function typographyWrapTheme({ textWrap }: TypographyInterface) {
  switch (textWrap) {
    case 'TRUNCATE':
      return {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }
    case 'BREAK':
      return {
        wordWrap: 'break-word',
        hyphens: 'auto',
      }
    case 'NOWRAP':
      return {
        whiteSpace: 'nowrap',
      }
    default:
      return {}
  }
}

export function typographyTransformTheme({
  textTransform,
}: TypographyInterface) {
  switch (textTransform) {
    case 'CAPITALIZE':
      return {
        textTransform: 'capitalize',
      }
    case 'LOWERCASE':
      return {
        textTransform: 'lowercase',
      }
    case 'UPPERCASE':
      return {
        textTransform: 'uppercase',
      }
    default:
      return {}
  }
}
export function typographyTextAlignTheme({ textAlign }: TypographyInterface) {
  switch (textAlign) {
    case 'LEFT':
      return {
        textAlign: 'left',
      }
    case 'RIGHT':
      return {
        textAlign: 'right',
      }
    case 'CENTER':
      return {
        textAlign: 'center',
      }
    case 'JUSTIFY':
      return {
        textAlign: 'justify',
      }
    default:
      return {}
  }
}
