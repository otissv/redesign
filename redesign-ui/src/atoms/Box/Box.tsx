import React, { FC, useMemo } from 'react'
import { Base, useTheme } from '@redesign/ui-core'

import { BoxInterface } from './box.types'
import { boxAppearanceTheme } from './box.theme'

export const Box: FC<BoxInterface> = function Box({
  as = 'div',
  children,
  className = '',
  css = '',
  ...propsRest
}: any) {
  const { theme } = useTheme()
  const classNames = useMemo(() => `Box ${className}`, [className])
  const cssList: any = useMemo(() => [boxAppearanceTheme, css], [
    boxAppearanceTheme,
    css,
  ])

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
