import { AppBarInterface } from './appBar.types';

import {
  ColorInterface,
  PRIMARY,
  ACCENT,
  ACTIVE,
  ACTION,
  DANGER,
  ERROR,
  SUCCESS,
  WARNING,
  DISABLED,
} from '@redesign/theme';

const input = (color: ColorInterface) => ({
  background: 'hsla(0,0%,0%,0.1)',
  border: '1px solid #0000',
  flex: 0,

  '&::placeholder': {
    color: color.grey_900,
  },

  '&:hover': {
    background: 'hsla(0,0%,0%,0.2)',
  },
  '&:focus': {
    background: 'hsla(0,0%,0%,0.2)',
  },
  '&:active': {
    background: 'hsla(0,0%, 0%,0.2)',
  },
});

export function appBarTheme({ theme: { color } }: AppBarInterface) {
  return {
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    flexShrink: 0,
    minHeight: '56px',
    position: 'relative',
    width: '100%',
    zIndex: '1100',
    backgroundColor: color.default,
    color: color.white,

    '>button.Button': {
      minHeight: 'inherit',
      border: '1px solid #0000',
      borderRadius: 0,
      '>svg.Icon': {
        paddingRight: 0,
      },
    },

    'input.Input': {
      ...input(color),
      color: color.foregroundInvert,
    },
  };
}

export function appBarAppearanceTheme({
  appearance,
  theme: { color },
}: AppBarInterface) {
  const appearanceInput = {
    'input.Input': {
      ...input(color),
      color: color.wite,
    },
  };
  switch (appearance) {
    case ACCENT:
      return {
        background: color.accent,
        color: '#ffffff',
        ...appearanceInput,
      };
    case ACTIVE:
      return {
        backgroundColor: color.active,
        color: '#ffffff',
        ...appearanceInput,
      };
    case ACTION:
      return {
        backgroundColor: color.action,
        color: '#ffffff',
        ...appearanceInput,
      };
    case DANGER:
      return {
        backgroundColor: color.danger,
        color: '#ffffff',
        ...appearanceInput,
      };
    case ERROR:
      return {
        backgroundColor: color.error,
        color: '#ffffff',
        ...appearanceInput,
      };
    case SUCCESS:
      return {
        backgroundColor: color.success,
        color: '#ffffff',
        ...appearanceInput,
      };
    case WARNING:
      return {
        backgroundColor: color.warning,
        color: '#ffffff',
        ...appearanceInput,
      };
    case DISABLED:
      return {
        backgroundColor: color.disabled,
        color: '#ffffff',
        ...appearanceInput,
      };
    case PRIMARY:
    default:
      return {};
  }
}
