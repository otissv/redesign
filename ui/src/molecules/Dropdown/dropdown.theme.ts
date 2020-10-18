import { isFunction } from '@redesign/theme'

import { DropdownInterface, DropdownContentInterface } from './dropdown.types'

export function dropdownTheme(props: DropdownInterface) {
  const {
    theme: { Dropdown },
  } = props

  return {
    position: 'relative',
    display: ' inline-block',
    ...(isFunction(Dropdown) ? Dropdown(props)?.default : Dropdown?.default),
  }
}

export function dropdownButtonTheme(props: DropdownInterface) {
  const {
    theme: { DropdownButton },
  } = props

  return {
    display: 'block',
    whiteSpace: 'nowrap',
    position: 'relative',

    '>svg.Icon': {
      transform: 'translateY(4px)',
    },
    ...(isFunction(DropdownButton)
      ? DropdownButton(props)?.button
      : DropdownButton?.button),
  }
}

export function dropdownContentTheme(props: DropdownContentInterface) {
  const {
    opened,
    height,
    justify,
    overflow,
    theme: { transition, DropdownContent },
  } = props

  return {
    position: 'absolute',
    zIndex: 8,
    display: 'inline-block',
    height: opened ? height : '0px',
    overflow,

    ...(justify
      ? {
          justifyContent: 'stretch',
          width: '100%',
        }
      : {}),
    transition: transition.easeMedium,
    ...(isFunction(DropdownContent)
      ? DropdownContent(props)?.content
      : DropdownContent?.content),
  }
}
