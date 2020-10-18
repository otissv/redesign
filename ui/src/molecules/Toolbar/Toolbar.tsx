import React, { FC } from 'react'

import { AppBar } from '../AppBar'
import { toolbarTheme } from './toolbar.theme'
import { ToolbarInterface } from './toolbar.types'

export const Toolbar: FC<ToolbarInterface> = function Toolbar({
  children,
  className = '',
  css,
  ...propsRest
}) {
  const classNames = `Toolbar ${className}`
  const cssList: any = React.useMemo(() => [toolbarTheme, css], [
    toolbarTheme,
    css,
  ])

  return (
    <AppBar className={classNames} css={cssList} {...propsRest}>
      {children}
    </AppBar>
  )
}

Toolbar.displayName = 'Toolbar'
