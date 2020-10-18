import React, { FC } from 'react'

import { buttonGroupTheme, buttonStretchGroupTheme } from './buttonGroup.theme'
import { ButtonGroupInterface } from './buttonGroup.types'
import { Base, useTheme } from '@redesign/ui-core'

export const ButtonGroup: FC<ButtonGroupInterface> = function ButtonGroup({
  as = 'div',
  children,
  className = '',
  onClick,
  css = '',
  stretch,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `ButtonGroup ${className}`

  const cssList: any = React.useMemo(
    () => [buttonGroupTheme, buttonStretchGroupTheme, css],
    [buttonGroupTheme, buttonStretchGroupTheme, css]
  )

  return (
    <Base
      as={as}
      role="group"
      className={classNames}
      css={cssList}
      theme={theme}
      stretch={stretch}
      {...propsRest}
    >
      {children}
    </Base>
  )
}

ButtonGroup.displayName = 'ButtonGroup'
