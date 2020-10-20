import React, { FC } from 'react'
import { Base, useTheme } from '@redesign-system/ui-core'

import { ListInterface } from './list.types'
import { listTheme } from './list.theme'

export const List: FC<ListInterface> = function List({
  as = 'ul',
  children,
  className = '',
  css = '',
  columns,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `List ${className}`
  const cssList = [listTheme, css]

  return (
    <Base
      as={as}
      className={classNames}
      theme={theme}
      css={cssList}
      columns={columns}
      {...propsRest}
    >
      {children}
    </Base>
  )
}
List.displayName = 'List'
