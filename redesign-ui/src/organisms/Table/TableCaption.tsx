import React, { FC, useMemo } from 'react'
import { Base, useTheme } from '@redesign/ui-core'

import { TableCaptionInterface } from './table.types'

export const TableCaption: FC<TableCaptionInterface> = function TableCaption({
  as = 'caption',
  children,
  className = '',
  css = '',
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = useMemo(() => `TableCaption ${className}`, [className])

  return (
    <Base as={as} className={classNames} css={css} theme={theme} {...propsRest}>
      {children}
    </Base>
  )
}

TableCaption.displayName = 'TableCaption'
