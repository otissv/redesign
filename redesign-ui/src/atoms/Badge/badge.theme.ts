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
} from '@redesign/theme';

import { BadgeInterface } from './badge.types';

export function badgeTheme({ theme: { border, color } }: BadgeInterface) {
  return {
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
  };
}

export function badgeAppearanceTheme({
  appearance,
  theme: { color, border },
}: BadgeInterface) {
  switch (appearance) {
    case SECONDARY:
      return {
        color: color.grey_600,
        background: color.grey_200,
        border: border.thinTransparent,
      };
    case TERTIARY:
      return {
        background: 'none',
        border: border.thin,
        color: color.text,
      };

    case ACCENT:
    case PRIMARY_ACCENT:
      return {
        color: '#fff',
        background: color.accent,
        border: border.thinTransparent,
      };
    case SECONDARY_ACCENT:
      return {
        color: color.accent_600,
        background: color.accent_200,
        border: border.thinTransparent,
      };
    case TERTIARY_ACCENT:
      return {
        background: 'none',
        border: `1px solid ${color.accent_400}`,
        color: color.accent_400,
      };

    case ACTION:
    case PRIMARY_ACTION:
      return {
        color: color.action_500,
        background: color.action_200,
        border: border.thinTransparent,
      };

    case SECONDARY_ACTION:
      return {
        color: color.action_600,
        background: color.action_200,
        border: border.thinTransparent,
      };
    case TERTIARY_ACTION:
      return {
        background: 'none',
        border: `1px solid ${color.action_400}`,
        color: color.action_400,
      };

    case DANGER:
    case PRIMARY_DANGER:
      return {
        color: '#fff',
        background: color.danger,
        border: border.thinTransparent,
      };
    case SECONDARY_DANGER:
      return {
        color: color.danger_600,
        background: color.danger_200,
        border: border.thinTransparent,
      };
    case TERTIARY_DANGER:
      return {
        background: 'none',
        border: `1px solid ${color.danger_400}`,
        color: color.danger_400,
      };

    case ERROR:
    case PRIMARY_ERROR:
      return {
        color: '#fff',
        background: color.error,
        border: border.thinTransparent,
      };
    case SECONDARY_ERROR:
      return {
        color: color.error_600,
        background: color.error_200,
        border: border.thinTransparent,
      };
    case TERTIARY_ERROR:
      return {
        background: 'none',
        border: `1px solid ${color.error_400}`,
        color: color.error_400,
      };

    case SUCCESS:
    case PRIMARY_SUCCESS:
      return {
        color: '#fff',
        background: color.success,
        border: border.thinTransparent,
      };

    case SECONDARY_SUCCESS:
      return {
        color: color.success_600,
        background: color.success_200,
        border: border.thinTransparent,
      };
    case TERTIARY_SUCCESS:
      return {
        background: 'none',
        border: `1px solid ${color.success_400}`,
        color: color.success_400,
      };

    case WARNING:
    case PRIMARY_WARNING:
      return {
        color: '#fff',
        background: color.warning,
        border: border.thinTransparent,
      };
    case SECONDARY_WARNING:
      return {
        color: color.warning_600,
        background: color.warning_200,
        border: border.thinTransparent,
      };
    case TERTIARY_WARNING:
      return {
        background: 'none',
        border: `1px solid ${color.warning_400}`,
        color: color.warning_400,
      };

    case DISABLED:
    case PRIMARY_DISABLED:
      return {
        color: '#fff',
        background: color.disabled,
        border: border.thinTransparent,
      };
    case SECONDARY_DISABLED:
      return {
        color: color.disabled_600,
        background: color.disabled_200,
        border: border.thinTransparent,
      };
    case TERTIARY_DISABLED:
      return {
        background: 'none',
        border: `1px solid ${color.disabled_400}`,
        color: color.disabled_400,
      };

    case PRIMARY:
    default:
      return {};
  }
}

export function badgePillTheme({ pill }: BadgeInterface) {
  return pill
    ? {
        paddingRight: '0.6em',
        paddingLeft: '0.6em',
        borderRadius: '10rem',
      }
    : {};
}
