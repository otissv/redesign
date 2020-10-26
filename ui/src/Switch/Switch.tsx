import React, { FC } from 'react'

import { SwitchInterface } from './switch.types'
import { switchTheme } from './switch.theme'
import { Toggle } from '../Toggle'

export const Switch: FC<SwitchInterface> = function Switch({
  children,
  className = '',
  css = '',
  on = false,
  ...propsRest
}) {
  const classNames = `Switch ${className}`
  const cssList = [switchTheme, css]
  return (
    <Toggle css={cssList} className={classNames} {...propsRest}>
      {children}
    </Toggle>
  )
}

Switch.displayName = 'Switch'
