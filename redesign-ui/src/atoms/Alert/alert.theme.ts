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
} from '@redesign/theme';

import { AlertInterface } from './alert.types';

export function alertTheme({ theme: { unit } }: AlertInterface) {
  return {
    position: 'relative',
    padding: `${unit[4]}`,
  };
}

export function alertAppearanceTheme({
  appearance,
  theme: { border, color },
}: AlertInterface) {
  const accent = {
    color: color.accent_050,
    backgroundColor: color.accent_500,
    border: `1px solid ${color.accent_500}`,
  };

  const active = {
    color: color.active_050,
    backgroundColor: color.active_500,
    border: `1px solid ${color.active_500}`,
  };

  const action = {
    color: color.action_050,
    backgroundColor: color.action_500,
    border: `1px solid ${color.action_500}`,
  };

  const danger = {
    color: color.danger_050,
    backgroundColor: color.danger_500,
    border: `1px solid ${color.danger_500}`,
  };

  const error = {
    color: color.error_050,
    backgroundColor: color.error_500,
    border: `1px solid ${color.error_500}`,
  };

  const success = {
    color: color.success_050,
    backgroundColor: color.success_500,
    border: `1px solid ${color.success_500}`,
  };

  const warning = {
    color: color.warning_050,
    backgroundColor: color.warning_500,
    border: `1px solid ${color.warning_500}`,
  };

  switch (appearance) {
    case PRIMARY:
      return {
        color: color.white,
        backgroundColor: color.default,
        border: border.thinDefault,
      };
    case SECONDARY:
      return {
        color: color.default - 800,
        backgroundColor: color.default - 100,
        border: `1px solid ${color.default - 100}`,
      };
    case TERTIARY:
      return {
        backgroundColor: 'none',
        border: border.thin,
      };

    case ACCENT:
    case PRIMARY_ACCENT:
      return accent;
    case SECONDARY_ACCENT:
      return {
        color: color.accent_800,
        backgroundColor: color.accent_100,
        border: `1px solid ${color.accent_100}`,
      };
    case TERTIARY_ACCENT:
      return {
        color: color.accent_300,
        backgroundColor: 'none',
        border: `1px solid ${color.accent_300}`,
      };

    case ACTIVE:
    case PRIMARY_ACTIVE:
      return active;
    case SECONDARY_ACTIVE:
      return {
        color: color.active_800,
        backgroundColor: color.active_100,
        border: `1px solid ${color.active_100}`,
      };
    case TERTIARY_ACTIVE:
      return {
        color: color.active_300,
        backgroundColor: 'none',
        border: `1px solid ${color.active_300}`,
      };

    case ACTION:
    case PRIMARY_ACTION:
      return action;
    case SECONDARY_ACTION:
      return {
        color: color.action_800,
        backgroundColor: color.action_100,
        border: `1px solid ${color.action_100}`,
      };
    case TERTIARY_ACTION:
      return {
        color: color.action_300,
        backgroundColor: 'none',
        border: `1px solid ${color.action_300}`,
      };

    case DANGER:
    case PRIMARY_DANGER:
      return danger;
    case SECONDARY_DANGER:
      return {
        color: color.danger_800,
        backgroundColor: color.danger_300,
        border: `1px solid ${color.danger_300}`,
      };
    case TERTIARY_DANGER:
      return {
        color: color.danger_300,
        backgroundColor: 'none',
        border: `1px solid ${color.danger_300}`,
      };

    case ERROR:
    case PRIMARY_ERROR:
      return error;
    case SECONDARY_ERROR:
      return {
        color: color.error_800,
        backgroundColor: color.error_300,
        border: `1px solid ${color.error_300}`,
      };
    case TERTIARY_ERROR:
      return {
        color: color.error_300,
        backgroundColor: 'none',
        border: `1px solid ${color.error_300}`,
      };

    case SUCCESS:
    case PRIMARY_SUCCESS:
      return success;
    case SECONDARY_SUCCESS:
      return {
        color: color.success_800,
        backgroundColor: color.success_300,
        border: `1px solid ${color.success_300}`,
      };
    case TERTIARY_SUCCESS:
      return {
        color: color.success_300,
        backgroundColor: 'none',
        border: `1px solid ${color.success_300}`,
      };

    case WARNING:
    case PRIMARY_WARNING:
      return warning;
    case SECONDARY_WARNING:
      return {
        color: color.warning_800,
        backgroundColor: color.warning_300,
        border: `1px solid ${color.warning - 300}`,
      };
    case TERTIARY_WARNING:
      return {
        color: color.warning_300,
        backgroundColor: 'none',
        border: `1px solid ${color.warning_300}`,
      };

    case DISABLED:
    case PRIMARY_DISABLED:
      return warning;
    case SECONDARY_DISABLED:
      return {
        color: color.disabled_800,
        backgroundColor: color.disabled_300,
        border: `1px solid ${color.disabled_300}`,
      };
    case TERTIARY_DISABLED:
      return {
        color: color.disabled_300,
        backgroundColor: 'none',
        border: `1px solid ${color.disabled_300}`,
      };
    default:
      return {};
  }
}
