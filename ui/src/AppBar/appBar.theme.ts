import { isFunction } from '@redesign-system/theme'

import { AppBarInterface, AppBarNavInterface } from './appBar.types'

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
} from '@redesign-system/theme'

const input = (color: ColorInterface) => ({
  flex: 0,

  '&::placeholder': {
    color: color.grey_900,
  },
})

export function appBarTheme(props: AppBarInterface) {
  const {
    theme: { mediaQueries, color, unit, AppBar },
  } = props

  return {
    position: 'relative',
    width: '100%',
    zIndex: '1100',
    padding: unit[4],

    [mediaQueries.lg.min]: {
      display: 'inline-flex',
      alignItems: 'center',
      height: '56px',
      // padding: unit[3],x
    },

    'ul.Nav': {
      width: '100%',
      flexDirection: 'column',
      [mediaQueries.lg.min]: {
        flexDirection: 'row',
        height: '50px',
        width: 'auto',
        alignItems: 'center',
      },
    },

    '>button.Button, >a.Link': {
      minHeight: 'inherit',
      border: '1px solid #0000',
      borderRadius: 0,
      '>svg.Icon': {
        paddingRight: 0,
      },
    },

    'input.Input': {
      ...input(color),
    },
    ...(isFunction(AppBar) ? AppBar(props)?.default : AppBar?.default),
  }
}

export function appBarNavTheme(props: AppBarNavInterface) {
  const {
    theme: { AppBarNav },
  } = props

  return {
    position: 'relative',
    display: 'flex',
    flex: 1,

    ...(isFunction(AppBarNav)
      ? AppBarNav(props)?.appearance
      : AppBarNav?.appearance),
  }
}

export function appBarContentTheme(props: AppBarInterface) {
  const {
    theme: { mediaQueries, unit, AppBarContent },
  } = props

  return {
    position: 'relative',
    padding: unit[1],
    display: 'none',
    alignItems: 'center',
    flex: 1,
    [mediaQueries.lg.min]: {
      display: 'flex',
    },

    ...(isFunction(AppBarContent)
      ? AppBarContent(props)?.appearance
      : AppBarContent?.appearance),
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

export function appBarBrandTheme(props: AppBarInterface) {
  const {
    theme: { AppBarBrand },
  } = props

  return {
    position: 'relative',
    display: 'inline-flex',
    ...(isFunction(AppBarBrand)
      ? AppBarBrand(props)?.appearance
      : AppBarBrand?.appearance),
  }
}

export function appBarPanelTheme(props: AppBarInterface) {
  const {
    opened,
    theme: { mediaQueries, AppBarFooter },
  } = props

  return {
    position: 'relative',
    display: opened ? 'flex' : 'none',

    flexDirection: 'column',
    zIndex: 9999,

    [mediaQueries.lg.min]: {
      display: 'none',
    },

    ...(isFunction(AppBarFooter)
      ? AppBarFooter(props)?.appearance
      : AppBarFooter?.appearance),
  }
}

export function appBarSearchTheme(props: AppBarInterface) {
  const {
    theme: { mediaQueries, AppBarSearch },
  } = props

  return {
    position: 'relative',
    [mediaQueries.lg.min]: {
      display: 'inline-block',
    },
    ...(isFunction(AppBarSearch)
      ? AppBarSearch(props)?.appearance
      : AppBarSearch?.appearance),
  }
}

export function appBarTriggerTheme(props: AppBarInterface) {
  const {
    theme: { mediaQueries, unit, AppBarTrigger },
  } = props

  return {
    position: 'relative',
    marginRight: unit[4],
    display: 'inline-block',

    [mediaQueries.lg.min]: {
      display: 'none',
    },
    ...(isFunction(AppBarTrigger)
      ? AppBarTrigger(props)?.appearance
      : AppBarTrigger?.appearance),
  }
}

export function appBarFooterTheme(props: AppBarInterface) {
  const {
    theme: { font, unit, AppBarFooter },
  } = props

  return {
    position: 'relative',
    padding: unit[1],
    lineHeight: font.lineHeight[4],

    ...(isFunction(AppBarFooter)
      ? AppBarFooter(props)?.appearance
      : AppBarFooter?.appearance),
  }
}
