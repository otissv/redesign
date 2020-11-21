import React, { FC } from 'react'

import { NavItemButtonInterface } from './nav.types'
import { Button } from '../Button'
import { navItemButtonTheme } from './nav.theme'

export const NavItemButton: FC<NavItemButtonInterface> = function NavItemButton({
  as = 'a',
  className = '',
  css = '',
  ...propsRest
}) {
  const classNames = `NavItemButton ${className}`

  const cssList = [navItemButtonTheme, css]
  return <Button className={classNames} css={cssList} as={as} {...propsRest} />
}
NavItemButton.displayName = 'NavItemButton'
