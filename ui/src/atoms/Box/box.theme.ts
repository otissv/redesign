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

import { BoxInterface } from './box.types'

export function boxTheme(props: BoxInterface) {
  const {
    theme: { Box },
  } = props

  return {
    position: 'relative',
    ...(isFunction(Box) ? Box(props).default : Box?.default),
  }
}

export function boxAppearanceTheme(props: BoxInterface) {
  const {
    appearance,
    theme: { border, color, Box },
  } = props

  const boxAppearanceTheme = isFunction(Box)
    ? Box(props)?.appearance
    : Box?.appearance

  const accent = {
    color: color.white,
    backgroundColor: color.accent_600,
    border: `1px solid ${color.accent_600}`,
    ...boxAppearanceTheme?.accent,
  }

  const active = {
    color: color.white,
    backgroundColor: color.active_600,
    border: `1px solid ${color.active_600}`,
    ...boxAppearanceTheme?.active,
  }

  const action = {
    color: color.white,
    backgroundColor: color.action_600,
    border: `1px solid ${color.action_600}`,
    ...boxAppearanceTheme?.action,
  }

  const danger = {
    color: color.white,
    backgroundColor: color.danger_600,
    border: `1px solid ${color.danger_600}`,
    ...boxAppearanceTheme?.danger,
  }

  const error = {
    color: color.white,
    backgroundColor: color.error_600,
    border: `1px solid ${color.error_600}`,
    ...boxAppearanceTheme?.error,
  }

  const success = {
    color: color.white,
    backgroundColor: color.success_600,
    border: `1px solid ${color.success_600}`,
    ...boxAppearanceTheme?.success,
  }

  const warning = {
    color: color.black,
    backgroundColor: color.warning_600,
    border: `1px solid ${color.warning_600}`,
    ...boxAppearanceTheme?.warning,
  }

  const disabled = {
    color: color.white,
    backgroundColor: color.disabled_600,
    border: `1px solid ${color.disabled_600}`,
    ...boxAppearanceTheme?.disabled,
  }

  switch (appearance) {
    case PRIMARY:
      return {
        color: color.textInvert,
        backgroundColor: color.backgroundInvert,
        border: border!.thinTransparent,
        ...boxAppearanceTheme?.primary,
      }
    case SECONDARY:
      return {
        color: color.grey_600,
        backgroundColor: color.grey_100,
        border: `1px solid ${color.grey_100}`,
        ...boxAppearanceTheme?.secondary,
      }
    case TERTIARY:
      return {
        backgroundColor: 'none',
        border: border!.thin,
        ...boxAppearanceTheme?.tertiary,
      }

    case ACCENT:
      return accent
    case PRIMARY_ACCENT:
      return {
        ...accent,
        ...boxAppearanceTheme?.accent,
      }

    case SECONDARY_ACCENT:
      return {
        color: color.accent_800,
        backgroundColor: color.accent_100,
        border: `1px solid ${color.accent_100}`,
        ...boxAppearanceTheme?.secondaryAccent,
      }
    case TERTIARY_ACCENT:
      return {
        color: color.accent_100,
        backgroundColor: 'none',
        border: `1px solid ${color.accent_100}`,
        ...boxAppearanceTheme?.tertiaryAccent,
      }

    case ACTIVE:
      return active
    case PRIMARY_ACTIVE:
      return { active, ...boxAppearanceTheme?.active }
    case SECONDARY_ACTIVE:
      return {
        color: color.active_800,
        backgroundColor: color.active_100,
        border: `1px solid ${color.active_100}`,
        ...boxAppearanceTheme?.secondaryActive,
      }
    case TERTIARY_ACTIVE:
      return {
        color: color.active_100,
        backgroundColor: 'none',
        border: `1px solid ${color.active_100}`,
        ...boxAppearanceTheme?.tertiaryActive,
      }

    case ACTION:
      return action
    case PRIMARY_ACTION:
      return {
        action,
        ...boxAppearanceTheme?.action,
      }
    case SECONDARY_ACTION:
      return {
        color: color.action_800,
        backgroundColor: color.action_100,
        border: `1px solid ${color.action_100}`,
        ...boxAppearanceTheme?.secondaryAction,
      }
    case TERTIARY_ACTION:
      return {
        color: color.action_100,
        backgroundColor: 'none',
        border: `1px solid ${color.action_100}`,
        ...boxAppearanceTheme?.tertiaryAction,
      }

    case DANGER:
      return danger
    case PRIMARY_DANGER:
      return { danger, ...boxAppearanceTheme?.danger }
    case SECONDARY_DANGER:
      return {
        color: color.danger_800,
        backgroundColor: color.danger_100,
        border: `1px solid ${color.danger_100}`,
        ...boxAppearanceTheme?.secondaryDanger,
      }
    case TERTIARY_DANGER:
      return {
        color: color.danger_100,
        backgroundColor: 'none',
        border: `1px solid ${color.danger_100}`,
        ...boxAppearanceTheme?.tertiaryDanger,
      }

    case ERROR:
      return error
    case PRIMARY_ERROR:
      return { error, ...boxAppearanceTheme?.error }

    case SECONDARY_ERROR:
      return {
        color: color.error_800,
        backgroundColor: color.error_100,
        border: `1px solid ${color.error_100}`,
        ...boxAppearanceTheme?.secondaryError,
      }
    case TERTIARY_ERROR:
      return {
        color: color.error_100,
        backgroundColor: 'none',
        border: `1px solid ${color.error_100}`,
        ...boxAppearanceTheme?.tertiaryError,
      }

    case SUCCESS:
      return success
    case PRIMARY_SUCCESS:
      return { success, ...boxAppearanceTheme?.success }
    case SECONDARY_SUCCESS:
      return {
        color: color.success_800,
        backgroundColor: color.success_100,
        border: `1px solid ${color.success_100}`,
        ...boxAppearanceTheme?.secondarySuccess,
      }
    case TERTIARY_SUCCESS:
      return {
        color: color.success_100,
        backgroundColor: 'none',
        border: `1px solid ${color.success_100}`,
        ...boxAppearanceTheme?.tertiarySuccess,
      }

    case WARNING:
      return warning
    case PRIMARY_WARNING:
      return { warning, ...boxAppearanceTheme?.warning }
    case SECONDARY_WARNING:
      return {
        color: color.warning_800,
        backgroundColor: color.warning_100,
        border: `1px solid ${color.warning_100}`,
        ...boxAppearanceTheme?.secondaryWarning,
      }
    case TERTIARY_WARNING:
      return {
        color: color.warning_100,
        backgroundColor: 'none',
        border: `1px solid ${color.warning_100}`,
        ...boxAppearanceTheme?.tertiaryWarning,
      }

    case DISABLED:
      return disabled
    case PRIMARY_DISABLED:
      return { disabled, ...boxAppearanceTheme?.disabled }
    case SECONDARY_DISABLED:
      return {
        color: color.disabled_800,
        backgroundColor: color.disabled_100,
        border: `1px solid ${color.disabled_100}`,
        ...boxAppearanceTheme?.secondaryDisabled,
      }
    case TERTIARY_DISABLED:
      return {
        color: color.disabled_100,
        backgroundColor: 'none',
        border: `1px solid ${color.disabled_100}`,
        ...boxAppearanceTheme?.tertiaryDisabled,
      }

    case PRIMARY:
    default:
      return {
        ...boxAppearanceTheme?.[appearance as string],
      }
  }
}
