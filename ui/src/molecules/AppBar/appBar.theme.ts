import { isFunction } from '@redesign/theme'

import { AppBarInterface } from './appBar.types'

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
} from '@redesign/theme'

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
})

export function appBarTheme(props: AppBarInterface) {
  const {
    width,
    theme: { color, AppBar },
  } = props

  return {
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    flexShrink: 0,
    minHeight: '56px',
    position: 'relative',
    width: width || '100%',
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
    ...(isFunction(AppBar) ? AppBar(props)?.default : AppBar?.default),
  }
}

export function appBarAppearanceTheme(props: AppBarInterface) {
  const {
    appearance,
    theme: { color, AppBar },
  } = props

  const appBarAppearanceTheme = isFunction(AppBar)
    ? AppBar(props)?.appearance
    : AppBar?.appearance

  const appearanceInput = {
    'input.Input': {
      ...input(color),
      color: color.wite,
    },
  }
  switch (appearance) {
    case ACCENT:
      return {
        background: color.accent,
        color: '#ffffff',
        ...appearanceInput,
        ...appBarAppearanceTheme?.accent,
      }
    case ACTIVE:
      return {
        backgroundColor: color.active,
        color: '#ffffff',
        ...appearanceInput,
        ...appBarAppearanceTheme?.active,
      }
    case ACTION:
      return {
        backgroundColor: color.action,
        color: '#ffffff',
        ...appearanceInput,
        ...appBarAppearanceTheme?.action,
      }
    case DANGER:
      return {
        backgroundColor: color.danger,
        color: '#ffffff',
        ...appearanceInput,
        ...appBarAppearanceTheme?.danger,
      }
    case ERROR:
      return {
        backgroundColor: color.error,
        color: '#ffffff',
        ...appearanceInput,
        ...appBarAppearanceTheme?.error,
      }
    case SUCCESS:
      return {
        backgroundColor: color.success,
        color: '#ffffff',
        ...appearanceInput,
        ...appBarAppearanceTheme?.success,
      }
    case WARNING:
      return {
        backgroundColor: color.warning,
        color: '#ffffff',
        ...appearanceInput,
        ...appBarAppearanceTheme?.warning,
      }
    case DISABLED:
      return {
        backgroundColor: color.disabled,
        color: '#ffffff',
        ...appearanceInput,
        ...appBarAppearanceTheme?.disabled,
      }
    case PRIMARY:
    default:
      return {
        ...appBarAppearanceTheme?.[appearance as string],
      }
  }
}

export function appBarFooterTheme(props: AppBarInterface) {
  const {
    theme: { unit, AppBarFooter },
  } = props

  return {
    padding: unit[1],

    ...(isFunction(AppBarFooter)
      ? AppBarFooter(props)?.appearance
      : AppBarFooter?.appearance),
  }
}

export function appBarPanelTheme(props: AppBarInterface) {
  const {
    height,
    opened,
    theme: { color, AppBarFooter },
  } = props

  //TODO: get appearance

  return {
    background: color.default,
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 9999,
    height: opened ? height || 'auto' : '0px',

    ...(isFunction(AppBarFooter)
      ? AppBarFooter(props)?.appearance
      : AppBarFooter?.appearance),
  }
}

export function appBarSearchTheme(props: AppBarInterface) {
  const {
    theme: { AppBarSearch },
  } = props

  return {
    ...(isFunction(AppBarSearch)
      ? AppBarSearch(props)?.appearance
      : AppBarSearch?.appearance),
  }
}

export function appBarTriggerTheme(props: AppBarInterface) {
  const {
    theme: { unit, AppBarTrigger },
  } = props

  return {
    alignSelf: 'stretch',
    display: 'flex',
    justifyContent: 'center',
    width: unit[7],
    height: 'inherit',
    input: {},

    ...(isFunction(AppBarTrigger)
      ? AppBarTrigger(props)?.appearance
      : AppBarTrigger?.appearance),
  }
}
