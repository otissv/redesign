import React, { FC } from 'react'
import { Base, useTheme } from '@redesign-system/ui-core'

import { FixedWidthInterface } from './fixedWidth.types'
import { fixedWidthTheme } from './fixedWidth.theme'

export const FixedWidth: FC<FixedWidthInterface> = function FixedWidth({
  as = 'div',
  children,
  className = '',
  css = '',
  ...propsRest
}: any) {
  const { theme } = useTheme()
  const classNames = `FixedWidth ${className}`
  const cssList: any = [fixedWidthTheme, css]

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

FixedWidth.displayName = 'FixedWidth'
