import React, { FC, useMemo } from 'react'

import { TableToolbarInterface } from './table.types'
import { Toolbar } from '../../molecules/Toolbar'
import { tableToolbarTheme } from './table.theme'

export const TableToolbar: FC<TableToolbarInterface> = function TableToolbar({
  children,
  className = '',
  css = '',
  ...propsRest
}) {
  const classNames = useMemo(() => `TableToolbar ${className}`, [className])
  const cssList: any = useMemo(() => [tableToolbarTheme, css], [
    tableToolbarTheme,
    css,
  ])

  return (
    <Toolbar className={classNames} css={cssList} {...propsRest}>
      {children}
    </Toolbar>
  )
}

TableToolbar.displayName = 'TableToolbar'
