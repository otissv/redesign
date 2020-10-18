import React, { FC } from 'react'
import { Base, useTheme } from '@redesign/ui-core'

import { NavItemInterface } from './nav.types'
import { navItemTheme } from './nav.theme'

export const NavItem: FC<NavItemInterface> = function NavItem({
  as = 'li',
  className = '',
  css = '',
  children,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `NavItem ${className}`

  const cssList: any = React.useMemo(() => [navItemTheme, css], [
    navItemTheme,
    css,
  ])

  return (
    <Base
      as={as}
      css={cssList}
      className={classNames}
      {...propsRest}
      theme={theme}
    >
      {children}
    </Base>
  )
}

NavItem.displayName = 'NavItem'
