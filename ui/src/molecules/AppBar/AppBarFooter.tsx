import React from 'react'
import { Base, useTheme } from '@redesign-system/ui-core'

import { appBarFooterTheme } from './appBar.theme'

export function AppBarFooter({
  as = 'footer',
  className = '',
  css = '',
  children,
  smallAppBar,
  ...propsRest
}: any) {
  const { theme } = useTheme()

  const classNames = `AppBarFooter ${className}`

  const cssList = [appBarFooterTheme, css]

  return smallAppBar ? (
    <Base
      as={as}
      className={classNames}
      css={cssList}
      theme={theme}
      {...propsRest}
    >
      {children}
    </Base>
  ) : null
}

AppBarFooter.displayName = 'AppBarFooter'
