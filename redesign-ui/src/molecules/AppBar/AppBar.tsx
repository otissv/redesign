import React, { FC, useMemo } from 'react'

import { Base, useTheme } from '@redesign/ui-core'
import { AppBarInterface } from './appBar.types'
import { appBarTheme, appBarAppearanceTheme } from './appBar.theme'

export const AppBar: FC<AppBarInterface> = function AppBar({
  as = 'div',
  children,
  className = '',
  css = '',
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = useMemo(() => `AppBar ${className}`, [className])
  const cssList: any = useMemo(
    () => [appBarTheme, appBarAppearanceTheme, css],
    [appBarTheme, appBarAppearanceTheme, css]
  )

  return (
    <Base
      as={as}
      className={classNames}
      theme={theme}
      css={cssList}
      aria-orientation="horizontal"
      {...propsRest}
    >
      {children}
    </Base>
  )
}

AppBar.displayName = 'AppBar'
