import React, { FC } from 'react'
import { Base, useTheme } from '@redesign-system/ui-core'

import { BoxInterface } from './box.types'
import { boxTheme, boxAppearanceTheme } from './box.theme'

export const Box: FC<BoxInterface> = function Box({
  as = 'div',
  children,
  className = '',
  css = '',
  ...propsRest
}: any) {
  const { theme } = useTheme()
  const classNames = `Box ${className}`
  const cssList: any = [boxTheme, boxAppearanceTheme, css]

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

Box.displayName = 'Box'
