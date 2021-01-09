import React, { FC } from 'react'
import { Base, useTheme } from '@redesign-system/ui-core'

import { toolbarTheme } from './toolbar.theme'
import { ToolbarInterface } from './toolbar.types'

export const Toolbar: FC<ToolbarInterface> = function Toolbar({
  children,
  className = '',
  css,
  ...propsRest
}) {
  const { theme } = useTheme()

  const classNames = `Toolbar ${className}`
  const cssList = [toolbarTheme, css]

  return (
    <Base className={classNames} css={cssList} theme={theme} {...propsRest}>
      {children}
    </Base>
  )
}

Toolbar.displayName = 'Toolbar'
