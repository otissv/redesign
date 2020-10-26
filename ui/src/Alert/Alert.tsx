import React, { FC } from 'react'

import { Base, useTheme } from '@redesign-system/ui-core'

import { AlertInterface } from './alert.types'
import { alertTheme, alertAppearanceTheme } from './alert.theme'

export const Alert: FC<AlertInterface> = function Alert({
  as = 'div',
  children,
  className = '',
  css = '',
  onClose,
  close,
  opened = true,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `Alert ${className}`
  const cssList: any = [alertTheme, alertAppearanceTheme, css]

  return (
    <Base
      as={as}
      className={classNames}
      theme={theme}
      css={cssList}
      hidden={!opened}
      {...propsRest}
    >
      {children}
    </Base>
  )
}

Alert.displayName = 'Alert'
