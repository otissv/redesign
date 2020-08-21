import React, { FC, Fragment, useMemo } from 'react'

import { useTable } from './TableContext'

import { tableTheme } from './table.theme'
import { Base, useTheme } from '@redesign/ui-core'
import { TableHead } from './TableHead'
import { TableBody } from './TableBody'
import {
  JSON_TABLE,
  TABULAR_TABLE,
  TableInterface,
  TableViewInterface,
} from './table.types'

function toChildArray(children: React.ReactNode) {
  return Array.isArray(children) ? children : [children]
}

export const Table: FC<TableInterface> = function Table({
  children = [],
  className = '',
  css = '',
  expandable,
  header,
  onSelect,
  ...propsRest
}) {
  const tableContent = useMemo(
    () =>
      toChildArray(children).reduce((acc: any, c: any) => {
        switch (true) {
          case c.type.displayName == 'TableCaption':
            return {
              ...acc,
              caption: c,
            }

          case c.type.displayName == 'TableRowDetail':
            return {
              ...acc,
              rowDetail: c,
            }

          case c.type.displayName == 'TableToolbar':
            return {
              ...acc,
              toolbar: c,
            }
          default:
            return acc
        }
      }, {}),
    [children]
  )

  return (
    <Fragment>
      {tableContent.toolbar}
      <TableView
        {...propsRest}
        onSelect={onSelect}
        header={header}
        css={css}
        caption={tableContent.caption}
        rowDetail={tableContent.rowDetail}
      >
        {children}
      </TableView>
    </Fragment>
  )
}
Table.displayName = 'Table'

export const TableView: FC<TableViewInterface> = function TableView({
  caption,
  rowDetail,
  className,
  css,
  header,
  onSelect,
  ...propsRest
}) {
  const { content, dispatch, items, view } = useTable()

  const { theme } = useTheme()
  const cssList: any = useMemo(() => [tableTheme, css], [tableTheme, css])
  const classNames = useMemo(() => `Table ${className}`, [className])

  switch (view) {
    case TABULAR_TABLE:
      return (
        <Base
          as="table"
          className={classNames}
          css={cssList}
          theme={theme}
          {...propsRest}
        >
          {caption}
          <TableHead
            expandable={Boolean(content.rowDetail)}
            dispatch={dispatch}
            onSelect={onSelect}
            {...header}
          />
          <TableBody rowDetail={rowDetail} />
        </Base>
      )

    case JSON_TABLE:
      return <pre>{JSON.stringify(items, null, 2)}</pre>
  }
}
