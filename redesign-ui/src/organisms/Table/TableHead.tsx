import React, { FC, useCallback, useMemo } from 'react'
import { isFunction, noop } from '@redesign/theme'

import { useTable } from './TableContext'
import {
  TableHeadInterface,
  TOGGLE_SELECT_ALL,
  TableHeadingInterface,
} from './table.types'

import { Base, useTheme } from '@redesign/ui-core'
import { tableHeaderTheme } from './table.theme'
import { Checkbox } from '../../atoms/Checkbox'

export const TableHead: FC<TableHeadInterface> = function TableHeader({
  as = 'thead',
  children,
  className = '',
  css = '',
  expandable = false,
  onSelect = noop,
  ...propsRest
}) {
  const { theme } = useTheme()
  const { content, items, selected, dispatch } = useTable()

  const cssList: any = useMemo(() => [tableHeaderTheme, css], [
    tableHeaderTheme,
    css,
  ])
  const classNames = useMemo(() => `TableHead ${className}`, [className])

  const allChecked = useMemo(
    () => Object.keys(selected || {}).length === items.size,
    [selected, items]
  )

  const handleSelectAll = useCallback(function handleSelectAll(e: any) {
    dispatch({
      type: TOGGLE_SELECT_ALL,
    })

    onSelect(e, 'ALL')
  }, [])

  const headings = useMemo(
    () =>
      Object.values(content.schema).map((child: any, index: number) => {
        let headingContent = child.children?.find((c: any) => c.type === 'th')
        return (
          <TableHeading key={index} heading={child.heading}>
            {headingContent}
          </TableHeading>
        )
      }),
    [content.schema]
  )

  return (
    <Base
      as={as}
      className={classNames}
      css={cssList}
      theme={theme}
      {...propsRest}
    >
      <Base as="tr" className={classNames} css={cssList} theme={theme}>
        {expandable && <th className="TableHeading"></th>}

        {Boolean(selected) && (
          <th className="TableHeading TableCellSelector">
            <Checkbox id="" onClick={handleSelectAll} checked={allChecked} />
          </th>
        )}

        {headings}
      </Base>
    </Base>
  )
}
TableHead.displayName = 'TableHead'

const TableHeading: FC<TableHeadingInterface> = function TableHeading({
  heading,
  children = {},
}: any) {
  if (isFunction(children.props?.children)) {
    return (
      <th className="TableHeading" {...children.props}>
        {children.props.children({ heading })}
      </th>
    )
  } else {
    return <th className="TableHeading">{heading}</th>
  }
}
TableHead.displayName = 'TableHeading'
