import { isFunction } from '@redesign/theme'

import {
  PRIMARY,
  SECONDARY,
  TERTIARY,
  ACCENT,
  PRIMARY_ACCENT,
  SECONDARY_ACCENT,
  TERTIARY_ACCENT,
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

import { BadgeInterface } from './badge.types'

export function badgeTheme(props: BadgeInterface) {
  const {
    theme: { border, color, Badge },
  } = props
  return {
    position: 'relative',
    display: 'inline-block',
    fontWeight: 700,
    padding: '0.25em 0.4em',
    fontSize: '90%',
    lineHeight: 1,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'baseline',
    borderRadius: '2px',
    color: color.textInvert,
    background: color.backgroundInvert,
    border: border.thinTransparent,
    ...(isFunction(Badge) ? Badge(props)?.default : Badge?.default),
  }
}

export function badgeAppearanceTheme(props: BadgeInterface) {
  const {
    appearance,
    theme: { color, border, Badge },
  } = props
  const badgeAppearanceTheme = isFunction(Badge)
    ? Badge(props)?.appearance
    : Badge?.appearance

  switch (appearance) {
    case SECONDARY:
      return {
        color: color.grey_600,
        background: color.grey_200,
        border: border.thinTransparent,
        ...badgeAppearanceTheme?.secondary,
      }
    case TERTIARY:
      return {
        background: 'none',
        border: border.thin,
        color: color.text,
        ...badgeAppearanceTheme?.tertiary,
      }

    case ACCENT:
    case PRIMARY_ACCENT:
      return {
        color: color.white,
        background: color.accent_600,
        border: border.thinTransparent,
        ...badgeAppearanceTheme?.accent,
      }
    case SECONDARY_ACCENT:
      return {
        color: color.accent_800,
        background: color.accent_100,
        border: border.thinTransparent,
        ...badgeAppearanceTheme?.secondaryAccent,
      }
    case TERTIARY_ACCENT:
      return {
        background: 'none',
        border: `1px solid ${color.accent_100}`,
        color: color.accent_100,
        ...badgeAppearanceTheme?.tertiaryAccent,
      }

    case ACTION:
    case PRIMARY_ACTION:
      return {
        color: color.white,
        background: color.action_600,
        border: border.thinTransparent,
        ...badgeAppearanceTheme?.action,
      }

    case SECONDARY_ACTION:
      return {
        color: color.action_800,
        background: color.action_100,
        border: border.thinTransparent,
        ...badgeAppearanceTheme?.secondaryAction,
      }
    case TERTIARY_ACTION:
      return {
        background: 'none',
        border: `1px solid ${color.action_100}`,
        color: color.action_100,
        ...badgeAppearanceTheme?.tertiaryAction,
      }

    case DANGER:
    case PRIMARY_DANGER:
      return {
        color: color.white,
        background: color.danger_600,
        border: border.thinTransparent,
        ...badgeAppearanceTheme?.danger,
      }
    case SECONDARY_DANGER:
      return {
        color: color.danger_800,
        background: color.danger_100,
        border: border.thinTransparent,
        ...badgeAppearanceTheme?.secondaryDanger,
      }
    case TERTIARY_DANGER:
      return {
        background: 'none',
        border: `1px solid ${color.danger_100}`,
        color: color.danger_100,
        ...badgeAppearanceTheme?.tertiaryDanger,
      }

    case ERROR:
    case PRIMARY_ERROR:
      return {
        color: color.white,
        background: color.error_600,
        border: border.thinTransparent,
        ...badgeAppearanceTheme?.error,
      }
    case SECONDARY_ERROR:
      return {
        color: color.error_800,
        background: color.error_100,
        border: border.thinTransparent,
        ...badgeAppearanceTheme?.secondaryError,
      }
    case TERTIARY_ERROR:
      return {
        background: 'none',
        border: `1px solid ${color.error_100}`,
        color: color.error_100,
        ...badgeAppearanceTheme?.tertiaryError,
      }

    case SUCCESS:
    case PRIMARY_SUCCESS:
      return {
        color: color.white,
        background: color.success_600,
        border: border.thinTransparent,
        ...badgeAppearanceTheme?.success,
      }

    case SECONDARY_SUCCESS:
      return {
        color: color.success_800,
        background: color.success_100,
        border: border.thinTransparent,
        ...badgeAppearanceTheme?.secondarySuccess,
      }
    case TERTIARY_SUCCESS:
      return {
        background: 'none',
        border: `1px solid ${color.success_100}`,
        color: color.success_100,
        ...badgeAppearanceTheme?.tertiarySuccess,
      }

    case WARNING:
    case PRIMARY_WARNING:
      return {
        color: color.black,
        background: color.warning_600,
        border: border.thinTransparent,
        ...badgeAppearanceTheme?.warning,
      }
    case SECONDARY_WARNING:
      return {
        color: color.warning_800,
        background: color.warning_100,
        border: border.thinTransparent,
        ...badgeAppearanceTheme?.secondaryWarning,
      }
    case TERTIARY_WARNING:
      return {
        background: 'none',
        border: `1px solid ${color.warning_100}`,
        color: color.warning_100,
        ...badgeAppearanceTheme?.tertiaryWarning,
      }

    case DISABLED:
    case PRIMARY_DISABLED:
      return {
        color: color.white,
        background: color.disabled_600,
        border: border.thinTransparent,
        ...badgeAppearanceTheme?.disabled,
      }
    case SECONDARY_DISABLED:
      return {
        color: color.disabled_800,
        background: color.disabled_100,
        border: border.thinTransparent,
        ...badgeAppearanceTheme?.secondaryDisabled,
      }
    case TERTIARY_DISABLED:
      return {
        background: 'none',
        border: `1px solid ${color.disabled_100}`,
        color: color.disabled_100,
        ...badgeAppearanceTheme?.tertiaryDisabled,
      }

    case PRIMARY:
    default:
      return {
        ...badgeAppearanceTheme?.[appearance as string],
      }
  }
}

export function badgePillTheme(props: BadgeInterface) {
  const {
    pill,
    theme: { Badge },
  } = props
  return pill
    ? {
        paddingRight: '0.6em',
        paddingLeft: '0.6em',
        borderRadius: '10rem',
        ...(isFunction(Badge) ? Badge(props)?.pill : Badge?.pill),
      }
    : {}
}
