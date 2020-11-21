import { isFunction } from '@redesign-system/theme'

import {
  NavInterface,
  NavItemButtonInterface,
  NavItemInterface,
} from './nav.types'

export function navTheme(props: NavInterface) {
  const {
    stacked,
    theme: { transition, Nav },
  } = props

  return {
    display: 'inline-flex',
    flexDirection: stacked ? 'column' : 'row',
    listStyle: 'none',
    position: 'relative',
    transition: transition.easeFast(),
    verticalAlign: 'middle',

    ...(isFunction(Nav) ? Nav(props)?.appearance : Nav?.appearance),
  }
}

export function navItemTheme(props: NavItemInterface) {
  const {
    theme: { NavItem },
  } = props

  return {
    '> a, button': {
      width: '100%',
    },
    ...(isFunction(NavItem) ? NavItem(props)?.appearance : NavItem?.appearance),
  }
}

export function navItemButtonTheme(props: NavItemButtonInterface) {
  const {
    theme: { NavItemButton },
  } = props

  return {
    ...(isFunction(NavItemButton)
      ? NavItemButton(props)?.appearance
      : NavItemButton?.appearance),
  }
}
