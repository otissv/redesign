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

import { AlertInterface } from './alert.types'

export function alertTheme(props: AlertInterface) {
  const {
    theme: { unit, Alert },
  } = props
  return {
    position: 'relative',
    padding: `${unit[4]} ${unit[6]} ${unit[4]}  ${unit[4]}`,

    '>.Close': {
      position: 'absolute',
      top: `${unit[2]}`,
      right: `${unit[2]}`,
    },
    ...(isFunction(Alert) ? Alert(props)?.default : Alert?.default),
  }
}

export function alertAppearanceTheme(props: AlertInterface) {
  const {
    appearance,
    theme: { border, color, Alert },
  } = props

  const alertAppearanceTheme = isFunction(Alert)
    ? Alert(props)?.appearance
    : Alert?.appearance

  const accent = {
    color: color.white,
    backgroundColor: color.accent_600,
    border: `1px solid ${color.accent_500}`,
    ...alertAppearanceTheme?.accent,
  }

  const active = {
    color: color.white,
    backgroundColor: color.active_600,
    border: `1px solid ${color.active_600}`,
    ...alertAppearanceTheme?.active,
  }

  const action = {
    color: color.white,
    backgroundColor: color.action_600,
    border: `1px solid ${color.action_600}`,
    ...alertAppearanceTheme?.action,
  }

  const danger = {
    color: color.white,
    backgroundColor: color.danger_600,
    border: `1px solid ${color.danger_600}`,
    ...alertAppearanceTheme?.danger,
  }

  const error = {
    color: color.white,
    backgroundColor: color.error_600,
    border: `1px solid ${color.error_600}`,
    ...alertAppearanceTheme?.error,
  }

  const success = {
    color: color.white,
    backgroundColor: color.success_600,
    border: `1px solid ${color.success_600}`,
    ...alertAppearanceTheme?.success,
  }

  const warning = {
    color: color.black,
    backgroundColor: color.warning_500,
    border: `1px solid ${color.warning_500}`,
    ...alertAppearanceTheme?.warning,
  }

  const disabled = {
    color: color.white,
    backgroundColor: color.disabled_600,
    border: `1px solid ${color.disabled_600}`,
    ...alertAppearanceTheme?.warning,
  }

  switch (appearance) {
    case PRIMARY:
      return {
        color: color.white,
        backgroundColor: color.default,
        border: border.thinDefault,
        ...alertAppearanceTheme?.primary,
      }
    case SECONDARY:
      return {
        color: color.default_800,
        backgroundColor: color.default_100,
        border: `1px solid ${color.default_100}`,
        ...alertAppearanceTheme?.secondary,
      }
    case TERTIARY:
      return {
        backgroundColor: 'none',
        border: border.thin,
        ...alertAppearanceTheme?.tertiary,
      }

    case ACCENT:
    case PRIMARY_ACCENT:
      return accent
    case SECONDARY_ACCENT:
      return {
        color: color.accent_800,
        backgroundColor: color.accent_100,
        border: `1px solid ${color.accent_100}`,
        ...alertAppearanceTheme?.secondaryAccent,
      }
    case TERTIARY_ACCENT:
      return {
        color: color.accent_200,
        backgroundColor: 'none',
        border: `1px solid ${color.accent_200}`,
        ...alertAppearanceTheme?.tertiaryAccent,
      }

    case ACTIVE:
    case PRIMARY_ACTIVE:
      return active
    case SECONDARY_ACTIVE:
      return {
        color: color.active_800,
        backgroundColor: color.active_100,
        border: `1px solid ${color.active_100}`,
        ...alertAppearanceTheme?.secondaryActive,
      }
    case TERTIARY_ACTIVE:
      return {
        color: color.active_200,
        backgroundColor: 'none',
        border: `1px solid ${color.active_200}`,
        ...alertAppearanceTheme?.tertiaryActive,
      }

    case ACTION:
    case PRIMARY_ACTION:
      return action
    case SECONDARY_ACTION:
      return {
        color: color.action_800,
        backgroundColor: color.action_100,
        border: `1px solid ${color.action_100}`,
        ...alertAppearanceTheme?.secondaryAction,
      }
    case TERTIARY_ACTION:
      return {
        color: color.action_200,
        backgroundColor: 'none',
        border: `1px solid ${color.action_200}`,
        ...alertAppearanceTheme?.tertiaryAction,
      }

    case DANGER:
    case PRIMARY_DANGER:
      return danger
    case SECONDARY_DANGER:
      return {
        color: color.danger_800,
        backgroundColor: color.danger_100,
        border: `1px solid ${color.danger_100}`,
        ...alertAppearanceTheme?.secondaryDanger,
      }
    case TERTIARY_DANGER:
      return {
        color: color.danger_200,
        backgroundColor: 'none',
        border: `1px solid ${color.danger_200}`,
        ...alertAppearanceTheme?.tertiaryDanger,
      }

    case ERROR:
    case PRIMARY_ERROR:
      return error
    case SECONDARY_ERROR:
      return {
        color: color.error_800,
        backgroundColor: color.error_100,
        border: `1px solid ${color.error_100}`,
        ...alertAppearanceTheme?.secondaryError,
      }
    case TERTIARY_ERROR:
      return {
        color: color.error_200,
        backgroundColor: 'none',
        border: `1px solid ${color.error_200}`,
        ...alertAppearanceTheme?.tertiaryError,
      }

    case SUCCESS:
    case PRIMARY_SUCCESS:
      return success
    case SECONDARY_SUCCESS:
      return {
        color: color.success_800,
        backgroundColor: color.success_100,
        border: `1px solid ${color.success_100}`,
        ...alertAppearanceTheme?.secondarySuccess,
      }
    case TERTIARY_SUCCESS:
      return {
        color: color.success_200,
        backgroundColor: 'none',
        border: `1px solid ${color.success_200}`,
        ...alertAppearanceTheme?.tertiarySuccess,
      }

    case WARNING:
    case PRIMARY_WARNING:
      return warning
    case SECONDARY_WARNING:
      return {
        color: color.warning_800,
        backgroundColor: color.warning_100,
        border: `1px solid ${color.warning_100}`,
        ...alertAppearanceTheme?.secondaryWarning,
      }
    case TERTIARY_WARNING:
      return {
        color: color.warning_200,
        backgroundColor: 'none',
        border: `1px solid ${color.warning_200}`,
        ...alertAppearanceTheme?.tertiaryWarning,
      }

    case DISABLED:
    case PRIMARY_DISABLED:
      return disabled
    case SECONDARY_DISABLED:
      return {
        color: color.disabled_800,
        backgroundColor: color.disabled_100,
        border: `1px solid ${color.disabled_100}`,
        ...alertAppearanceTheme?.secondaryDisabled,
      }
    case TERTIARY_DISABLED:
      return {
        color: color.disabled_00,
        backgroundColor: 'none',
        border: `1px solid ${color.disabled_00}`,
        ...alertAppearanceTheme?.tertiaryDisabled,
      }
    default:
      return {
        ...alertAppearanceTheme?.[appearance as string],
      }
  }
}
