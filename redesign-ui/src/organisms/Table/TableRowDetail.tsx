import React, { FC, createContext, useMemo, useContext } from 'react'

import { TableRowDetailInterface } from './table.types'
import { useTable } from './TableContext'

export const TableRowDetailContext = createContext<any>({})

export function useTableRowDetail() {
  return useContext(TableRowDetailContext)
}

export const TableRowContextProvider = function ThemeProvider({
  children,
  ...propsRest
}: any) {
  const { content, selected } = useTable()

  const context = useMemo(
    () => ({
      colSpan: Object.keys(content.schema).length + 1 + (selected ? +1 : 0),
      ...propsRest,
    }),
    [content.schema, selected]
  )

  return (
    <TableRowDetailContext.Provider value={context}>
      {children}
    </TableRowDetailContext.Provider>
  )
}
TableRowContextProvider.displayName = 'TableRowContextProvider'

export const TableRowDetail: FC<TableRowDetailInterface> = function TableRowDetail() {
  return null
}

TableRowDetail.displayName = 'TableRowDetail'
