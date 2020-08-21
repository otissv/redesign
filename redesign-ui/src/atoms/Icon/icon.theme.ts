import { IconInterface } from './icon.types';
import {
  ACCENT,
  ACTION,
  ACTIVE,
  DANGER,
  ERROR,
  SUCCESS,
  WARNING,
  DISABLED,
} from '@redesign/theme';

export function iconTheme({ hoverColor }: IconInterface) {
  return {
    display: 'inline-block',
    color: 'inherit',
    fill: 'currentcolor',
    height: 'auto',
    position: 'relative',
    ...(hoverColor && { '&:hover': { color: hoverColor } }),
  };
}

export function iconAppearanceTheme({
  appearance,
  theme: { color },
}: IconInterface) {
  switch (appearance) {
    case ACCENT:
      return {
        color: color.accent,
        '&:hover': {
          color: color.accent2,
        },
      };
    case ACTION:
      return {
        color: color.action,
        '&:hover': {
          color: color.action2,
        },
      };
    case ACTIVE:
      return {
        color: color.active,
        '&:hover': {
          color: color.active2,
        },
      };
    case DANGER:
      return {
        color: color.danger,
        '&:hover': {
          color: color.danger2,
        },
      };
    case ERROR:
      return {
        color: color.danger,
        '&:hover': {
          color: color.danger2,
        },
      };
    case SUCCESS:
      return {
        color: color.success,
        '&:hover': {
          color: color.success2,
        },
      };
    case WARNING:
      return {
        color: color.warning,
        '&:hover': {
          color: color.warning2,
        },
      };
    case DISABLED:
      return {
        color: color.disabled,
        '&:hover': {
          color: color.disabled2,
        },
      };

    default:
      return {};
  }
}
