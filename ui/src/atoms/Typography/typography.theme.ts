import { isFunction } from '@redesign/theme'

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

export function typographyTheme(props: TypographyInterface) {
  const {
    theme: { transition, Typography },
  } = props

  return {
    position: 'relative',
    transition: transition.easeMedium(),
    ...(isFunction(Typography)
      ? Typography(props)?.default
      : Typography?.default),
  }
}

export function typographyAppearanceTheme(props: TypographyInterface) {
  const {
    appearance,
    theme: { color, Typography },
  } = props

  const typographyAppearanceTheme = isFunction(Typography)
    ? Typography(props)?.appearance
    : Typography?.appearance

  switch (appearance) {
    case ACCENT:
      return {
        color: color.accent_200,
        ...typographyAppearanceTheme?.accent,
      }
    case ACTIVE:
      return {
        color: color.active_200,
        ...typographyAppearanceTheme?.active,
      }
    case ACTION:
      return {
        color: color.action_200,
        ...typographyAppearanceTheme?.action,
      }
    case DANGER:
      return {
        color: color.danger_200,
        ...typographyAppearanceTheme?.danger,
      }
    case ERROR:
      return {
        color: color.error_200,
        ...typographyAppearanceTheme?.error,
      }
    case DISABLED:
      return {
        color: color.disabled_300,
        ...typographyAppearanceTheme?.disabled,
      }
    case SUCCESS:
      return {
        color: color.success_200,
        ...typographyAppearanceTheme?.success,
      }
    case WARNING:
      return {
        color: color.warning_200,
        ...typographyAppearanceTheme?.warning,
      }

    case PRIMARY:
    default:
      return {
        ...typographyAppearanceTheme?.[appearance as string],
      }
  }
}

export function typographyModifyTheme(props: TypographyInterface) {
  const {
    modify,
    theme: { color, font, Typography },
  } = props

  const typographyModifyTheme = isFunction(Typography)
    ? Typography(props)?.modify
    : Typography?.modify

  switch (modify) {
    case 'LEAD':
      return {
        fontSize: font.size[8],
        fontWeight: 300,
        ...typographyModifyTheme?.lead,
      }
    case 'META':
      return {
        fontSize: font.size[2],
        color: color.grey_500,
        ...typographyModifyTheme?.meta,
      }
    default:
      return {
        ...(modify ? typographyModifyTheme?.[modify as string] : {}),
      }
  }
}

export function typographyWrapTheme(props: TypographyInterface) {
  const {
    textWrap,
    theme: { Typography },
  } = props

  const typographyTextWrapTheme = isFunction(Typography)
    ? Typography(props)?.textWrap
    : Typography?.textWrap

  switch (textWrap) {
    case 'TRUNCATE':
      return {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        ...typographyTextWrapTheme?.truncate,
      }
    case 'BREAK':
      return {
        wordWrap: 'break-word',
        hyphens: 'auto',
        ...typographyTextWrapTheme?.break,
      }
    case 'NOWRAP':
      return {
        whiteSpace: 'nowrap',
        ...typographyTextWrapTheme?.whiteSpace,
      }
    default:
      return {
        ...(textWrap ? typographyTextWrapTheme?.[textWrap as string] : {}),
      }
  }
}

export function typographyTransformTheme(props: TypographyInterface) {
  const {
    textTransform,
    theme: { Typography },
  } = props

  const typographyTextTransformTheme = isFunction(Typography)
    ? Typography(props)?.textTransform
    : Typography?.textTransform

  switch (textTransform) {
    case 'CAPITALIZE':
      return {
        textTransform: 'capitalize',
        ...typographyTextTransformTheme?.textTransform,
      }
    case 'LOWERCASE':
      return {
        textTransform: 'lowercase',
        ...typographyTextTransformTheme?.lowercase,
      }
    case 'UPPERCASE':
      return {
        textTransform: 'uppercase',
        ...typographyTextTransformTheme?.uppercase,
      }
    default:
      return {
        ...(textTransform
          ? typographyTextTransformTheme?.[textTransform as string]
          : {}),
      }
  }
}
