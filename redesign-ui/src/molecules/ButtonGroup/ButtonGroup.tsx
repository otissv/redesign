import React, { FC, useMemo } from 'react'

import { buttonGroupTheme, buttonStretchGroupTheme } from './buttonGroup.theme'
import { ButtonGroupInterface } from './buttonGroup.types'
import { Base, useTheme } from '@redesign/ui-core'
import { useButtonGroup } from './ButtonGroupContext'

export const ButtonGroup: FC<ButtonGroupInterface> = function ButtonGroup({
  as = 'div',
  children,
  className = '',
  onClick,
  css = '',
  ...propsRest
}) {
  const { stretch }: any = useButtonGroup()
  const { theme } = useTheme()
  const classNames = useMemo(() => `ButtonGroup ${className}`, [className])

  const cssList: any = useMemo(
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
