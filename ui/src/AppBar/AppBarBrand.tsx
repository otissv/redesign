import React, { FC } from 'react'
import { Base, useTheme } from '@redesign-system/ui-core'

import { AppBarBrandInterface } from './appBar.types'
import { appBarBrandTheme } from './appBar.theme'

export const AppBarBrand: FC<AppBarBrandInterface> = function AppBarBrand({
  as = 'div',
  className = '',
  css = '',
  children,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `Fieldset ${className}`
  const cssList = [appBarBrandTheme, css]

  return (
    <Base
      as={as}
      css={cssList}
      className={classNames}
      theme={theme}
      {...propsRest}
    >
      {children}
    </Base>
  )
}

// white-space: nowrap;
AppBarBrand.displayName = 'AppBarBrand'
