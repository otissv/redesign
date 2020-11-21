import React, { FC } from 'react'
import { Base, useTheme } from '@redesign-system/ui-core'

import { DoubleContentInnerInterface } from './doubleContent.types'
import { doubleContentInnerTheme } from './doubleContent.theme'

export const DoubleContentInner: FC<DoubleContentInnerInterface> = function DoubleContentInner({
  as = 'div',
  className = '',
  css = '',
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `DoubleContentInner ${className}`
  const cssList = [doubleContentInnerTheme, css]

  return (
    <Base
      as={as}
      css={cssList}
      className={classNames}
      theme={theme}
      {...propsRest}
    />
  )
}

DoubleContentInner.displayName = 'DoubleContentInner'
