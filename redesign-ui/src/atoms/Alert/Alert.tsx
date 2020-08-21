import React, { FC, useMemo } from 'react'

import { Base, useTheme } from '@redesign/ui-core'

import { AlertInterface } from './alert.types'
import { alertTheme, alertAppearanceTheme } from './alert.theme'
import { Close } from '../Close'

export const Alert: FC<AlertInterface> = function Alert({
  as = 'div',
  children,
  className = '',
  css = '',
  onClose,
  close,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = useMemo(() => `Alert ${className}`, [className])
  const cssList: any = useMemo(() => [alertTheme, alertAppearanceTheme, css], [
    alertTheme,
    alertAppearanceTheme,
    css,
  ])

  return (
    <Base
      as={as}
      className={classNames}
      theme={theme}
      css={cssList}
      {...propsRest}
    >
      {close && <Close onClose={typeof close !== 'boolean' && close.onClose} />}
      {children}
    </Base>
  )
}

Alert.displayName = 'Alert'
