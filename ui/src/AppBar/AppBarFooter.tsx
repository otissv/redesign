import React, { FC } from 'react'
import { Base, useTheme } from '@redesign-system/ui-core'

import { appBarFooterTheme } from './appBar.theme'
import { AppBarFooterInterface } from './appBar.types'

export const AppBarFooter: FC<AppBarFooterInterface> = function AppBarFooter({
  as = 'footer',
  className = '',
  css = '',
  children,
  ...propsRest
}: any) {
  const { theme } = useTheme()
  const classNames = `AppBarFooter ${className}`
  const cssList = [appBarFooterTheme, css]

  return (
    <Base
      as={as}
      className={classNames}
      css={cssList}
      theme={theme}
      {...propsRest}
    >
      {children}
    </Base>
  )
}

AppBarFooter.displayName = 'AppBarFooter'
