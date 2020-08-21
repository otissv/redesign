import React, { createContext, cloneElement, useMemo, useContext } from 'react'

import {
  TABULAR_TABLE,
  TableCellEventType,
  TableContextInterface,
  TableContextProviderInterface,
} from './table.types'

const eventNoop: TableCellEventType = _e => {}

const initialState: TableContextInterface = {
  content: {
    caption: null,
    schema: {},
    rowDetail: null,
    table: null,
    toolbar: null,
  },
  dispatch: () => {},
  errors: {},
  expanded: {},
  focus: null,
  items: new Map(),
  rowId: 'id',
  selected: null,
  view: TABULAR_TABLE,
  onBlur: eventNoop,
  onExpand: eventNoop,
  onFocus: eventNoop,
  onChange: eventNoop,
  onSelect: eventNoop,
  onToggleError: eventNoop,
}

export const TableContext = createContext(initialState)

export function useTable() {
  return useContext(TableContext)
}

export const TableContextProvider = function ThemeProvider({
  children,
  content,
  dispatch,
  errors = {},
  expanded = {},
  focus,
  items = new Map(),
  rowId = 'id',
  selected,
  view = TABULAR_TABLE,
  onBlur,
  onExpand,
  onFocus,
  onChange,
  onSelect,
  onToggleError,
  itemsList,
  ...propsRest
}: TableContextProviderInterface) {
  const childElements = useMemo(
    () =>
      React.Children.map(children, (child: any) =>
        cloneElement(
          child,
          { ...child.props, ...propsRest },
          child.props.children
        )
      ),
    [children, cloneElement]
  )

  const context = useMemo(
    () => ({
      content,
      dispatch,
      errors,
      expanded,
      focus,
      items,
      itemsList,
      onBlur,
      onChange,
      onExpand,
      onFocus,
      onSelect,
      onToggleError,
      rowId,
      selected,
      view,
    }),
    [
      content,
      dispatch,
      errors,
      expanded,
      focus,
      items,
      itemsList,
      onBlur,
      onChange,
      onExpand,
      onFocus,
      onSelect,
      onToggleError,
      rowId,
      selected,
      view,
    ]
  )

  return (
    <TableContext.Provider value={context}>
      {childElements}
    </TableContext.Provider>
  )
}
TableContextProvider.displayName = 'TableContextProvider'
