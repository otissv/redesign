import React, { FC, useMemo } from 'react'

import { AppBar } from '../AppBar'
import { toolbarTheme } from './toolbar.theme'
import { ToolbarInterface } from './toolbar.types'

export const Toolbar: FC<ToolbarInterface> = function Toolbar({
  children,
  className = '',
  css,
  ...propsRest
}) {
  const classNames = useMemo(() => `Toolbar ${className}`, [className])
  const cssList: any = useMemo(() => [toolbarTheme, css], [toolbarTheme, css])

  return (
    <AppBar className={classNames} css={cssList} {...propsRest}>
      {children}
    </AppBar>
  )
}

Toolbar.displayName = 'Toolbar'
