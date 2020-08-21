import React, { FC, useReducer, useMemo } from 'react'

import {
  REPLACE_ITEMS,
  SET_CONTENT,
  SET_ERRORS,
  SET_FOCUS,
  SET_VIEW,
  TABULAR_TABLE,
  TOGGLE_EXPANDED,
  TOGGLE_SELECTED,
  TOGGLE_SELECT_ALL,
  TableActionTypes,
  TableContentInterface,
  TableItemInterface,
  TableProviderInterface,
  UPDATE_ITEM,
} from './table.types'

import { TableContextProvider } from './TableContext'

//

function getCellPosition(id: string) {
  return id.split(',')
}

export function buildContent(childArray: any[]) {
  return childArray.reduce((acc: any, c: any) => {
    switch (true) {
      case c.type.displayName === 'TableSchema':
        return {
          ...acc,
          schema: {
            ...acc.schema,
            [c.props.column]: c.props,
          },
        }

      case c.type.displayName === 'Table':
        return {
          ...acc,
          table: c,
        }

      default:
        return acc
    }
  }, {})
}

export const TableProvider: FC<TableProviderInterface> = function TableProvider({
  children,
  expanded = {},
  focus,
  items = [],
  rowId,
  selected,
  view = TABULAR_TABLE,
  // onBlur,
  // onExpand,
  // onFocus,
  onChange,
  // onSelect,
  // onToggleError,
}) {
  const childArray = useMemo(
    () => (Array.isArray(children) ? children : [children]),
    [children]
  )

  const content: TableContentInterface = useMemo(
    () => buildContent(childArray),
    [childArray]
  )

  const initialState = {
    rowId,
    items,
    expanded,
    selected,
    view,
    focus,
    errors: {},
    content,
  }

  function reducer(state: any, action: TableActionTypes) {
    switch (action.type) {
      case REPLACE_ITEMS: {
        return {
          ...state,
          items: action.payload,
        }
      }

      case SET_FOCUS: {
        return {
          ...state,
          focus: action.payload,
        }
      }

      case SET_CONTENT: {
        return {
          ...state,
          content: action.payload,
        }
      }

      case SET_VIEW: {
        return {
          ...state,
          view: action.payload,
        }
      }

      case TOGGLE_EXPANDED: {
        const expanded = { ...state.expanded }

        if (expanded[action.payload]) {
          delete expanded[action.payload]
        } else {
          expanded[action.payload] = true
        }

        return {
          ...state,
          expanded,
        }

        // return state;
      }
      case TOGGLE_SELECTED: {
        // const selected = { ...state.selected };

        // if (selected[action.payload]) {
        //   delete selected[action.payload];
        // } else {
        //   selected[action.payload] = true;
        // }

        // return {
        //   ...state,
        //   selected,
        // };

        return
      }

      case TOGGLE_SELECT_ALL: {
        // let selected = { ...state.selected };

        // if (
        //   Object.keys(state.selected).length === Object.keys(state.items).length
        // ) {
        //   selected = {};
        // } else {
        //   selected = Object.values(state.items).reduce(
        //     (acc: { [key: string]: boolean }, item: any) => {
        //       return {
        //         ...acc,
        //         [item[rowId]]: true,
        //       };
        //     },
        //     {}
        //   );
        // }
        // return {
        //   ...state,
        //   selected,
        // };

        return
      }

      // case UPDATE_ITEM: {
      //   // return {
      //   //   ...state,
      //   //   items: action.payload,
      //   // };

      //   return state;
      // }

      case SET_ERRORS: {
        return {
          ...state,
          errors: {
            ...state.errors,
            ...action.payload,
          },
        }
      }

      case UPDATE_ITEM: {
        const index = items.findIndex(
          item => item[state.items] === action.payload[state.items]
        )

        switch (index) {
          case 0:
            return {}

          case -1:
          default:
            return state
        }
      }

      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  function getItem(state: any, element: any) {
    const id = element.id

    const [columnId, rowId] = getCellPosition(id)

    if (
      typeof columnId !== 'string' ||
      typeof rowId !== 'string' ||
      columnId.trim() === '' ||
      rowId.trim() === ''
    ) {
      return {}
    }

    const row = state.items[rowId]
    const cell = row?.[columnId]

    if (!cell) {
      if (process.env.NODE_ENV === 'development') {
        throw new Error(
          'Table cell does not value a valid id. Show be a column and row position separated by a comma. E.g. "A,1"'
        )
      } else {
        return {}
      }
    }

    return {
      rowId,
      columnId,
      row,
    }
  }

  function handleOnChange(e: any) {
    const element = e.target
    const { columnId, row } = getItem(state, element)

    if (row) {
      dispatch({
        type: UPDATE_ITEM,
        payload: {
          ...row,
          [columnId as string]: element.value,
        },
      })
      onChange && onChange(e, row)
    }
  }

  function handleOnBlur(_e: any) {
    // console.log(state)
    // const element = e.target
    // const { columnId, row } = getItem(state, element)
    // const schema = state.content.schema[columnId as string]
    // if (row) {
    //   if (schema.required && element.value.trim() === '') {
    //     const errorMessage = `${schema.heading} is required.`
    //     dispatch({
    //       type: SET_ERRORS,
    //       payload: {
    //         [element.id]: errorMessage,
    //       },
    //     })
    //   } else {
    //     const errorMessage = schema.validation(element.value)
    //     let errors: { [key: string]: string | null } = {}
    //     if (errorMessage) {
    //       errors[element.id] = errorMessage
    //       dispatch({
    //         type: SET_ERRORS,
    //         payload: errors,
    //       })
    //     } else if (state.errors[element.id]) {
    //       delete errors[element.id]
    //     }
    //   }
    // }
    // onBlur && onBlur(e, row)
  }

  function handleOnFocus(_e: any) {
    // const element = e.target
    // const { row } = getItem(state, element)
    // const cell = row[state.rowId].id
    // if (row && state.focus === cell) {
    //   dispatch({
    //     type: SET_FOCUS,
    //     payload: cell,
    //   })
    //   onFocus && onFocus(e, row)
    // }
  }

  function handleOnToggleError(_e: any, { id, showError }: any) {
    const { columnId, row, rowId } = getItem(state, { id })

    if (row) {
      const cell = { ...row[columnId as string] }

      cell.showError = showError

      const key = columnId as string
      const clonedItems: TableItemInterface = new Map(state.items)
      clonedItems.set(rowId as string, {
        ...row,
        [key]: {
          ...row[key],
          showError,
        },
      })

      dispatch({
        type: REPLACE_ITEMS,
        payload: clonedItems,
      })
    }

    // onToggleError && onToggleError(e, { id, showError });
  }

  function handleOnExpand(e: any) {
    const id = e.currentTarget.id
    const [row] = getCellPosition(id)

    dispatch({
      type: TOGGLE_EXPANDED,
      payload: row,
    })
    // onExpand && onExpand(e)
  }

  function handleOnSelect(_e: any) {
    // const id = e.target.id
    // const [row] = getCellPosition(id)
    // console.log(e.currentTarget)
    // dispatch({
    //   type: TOGGLE_SELECTED,
    //   payload: row,
    // });
    // onSelect && onSelect(e)
  }

  const itemsList = () => Object.values(state.items)

  return (
    <TableContextProvider
      {...state}
      errors={state.errors}
      dispatch={dispatch}
      onBlur={handleOnBlur}
      onExpand={handleOnExpand}
      onFocus={handleOnFocus}
      onChange={handleOnChange}
      onSelect={handleOnSelect}
      onToggleError={handleOnToggleError}
      itemsList={itemsList}
    >
      {content.table}
    </TableContextProvider>
  )
}

TableProvider.displayName = 'TableProvider'
