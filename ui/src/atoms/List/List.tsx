import React, { FC, useMemo } from 'react'
import { Base, useTheme } from '@redesign/ui-core'

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
  const classNames = useMemo(() => `List ${className}`, [className])
  const cssList: any = useMemo(() => [listTheme, css], [listTheme, css])

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
