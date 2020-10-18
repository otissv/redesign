import React, { FC } from 'react'
import { Base, useTheme } from '@redesign/ui-core'

import { AppBarBrandInterface } from './appBar.types'

export const AppBarBrand: FC<AppBarBrandInterface> = function AppBarBrand({
  as = 'div',
  className = '',
  css = '',
  children,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `Fieldset ${className}`

  return (
    <Base as={as} className={classNames} theme={theme} css={css} {...propsRest}>
      {children}
    </Base>
  )
}

// white-space: nowrap;
AppBarBrand.displayName = 'AppBarBrand'
