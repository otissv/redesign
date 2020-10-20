import React, { FC, useMemo } from 'react'
import { Base, useTheme } from '@redesign-system/ui-core'

import { ListItemInterface } from './list.types'
import { listItemTheme } from './list.theme'

export const ListItem: FC<ListItemInterface> = function List({
  as = 'li',
  children,
  className = '',
  css = '',
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = useMemo(() => `ListItem ${className}`, [className])
  const cssList: any = useMemo(() => [listItemTheme, css], [listItemTheme, css])

  return (
    <Base
      as={as}
      className={classNames}
      theme={theme}
      css={cssList}
      {...propsRest}
    >
      {children}
    </Base>
  )
}
ListItem.displayName = 'ListItem'
