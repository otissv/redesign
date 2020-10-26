import React, { FC } from 'react'
import { Base, useTheme } from '@redesign-system/ui-core'

import { MainInterface } from './main.types'
import { mainTheme } from './main.theme'

export const Main: FC<MainInterface> = function Main({
  as = 'main',
  children,
  className = '',
  css = '',
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `Main ${className}`
  const cssList = [mainTheme, css]

  return (
    <Base
      as={as}
      className={classNames}
      theme={theme}
      css={cssList}
      {...propsRest}
    >
      {children}
    </Base>
  )
}

Main.displayName = 'Main'
