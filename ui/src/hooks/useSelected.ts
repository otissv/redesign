import React from 'react'

const SELECTED_ADD = 'SELECTED_ADD'
const SELECTED_REMOVE = 'SELECTED_REMOVE'
const SELECTED_REMOVE_ALL = 'SELECTED_REMOVE_ALL'
const SELECTED_RESET = 'SELECTED_RESET'
const SELECTED_ADD_MANY = 'SELECTED_ADD_MANY'

export interface SelectedAddAction {
  type: typeof SELECTED_ADD
  id: string
}

export interface SelectedAddManyAction {
  type: typeof SELECTED_ADD_MANY
  ids: string[]
}

export interface SelectedRemoveAction {
  type: typeof SELECTED_REMOVE
  id: string
}

export interface SelectedRemoveAllAction {
  type: typeof SELECTED_REMOVE_ALL
}

export interface SelectedResetAction {
  type: typeof SELECTED_RESET
}

export type SelectedActions =
  | SelectedAddAction
  | SelectedAddManyAction
  | SelectedRemoveAction
  | SelectedRemoveAllAction
  | SelectedResetAction

export interface SelectedInterface {
  [key: string]: boolean
}

export interface SelectedDataInterface {
  id: string
  [key: string]: any
}

export function useSelected(initialState: SelectedInterface = {}) {
  function reducer(state: { [key: string]: any }, action: SelectedActions) {
    switch (action.type) {
      case SELECTED_ADD:
        return {
          ...state,
          [action.id]: true,
        }

      case SELECTED_ADD_MANY:
        return {
          ...state,
          ...action.ids.reduce(
            (acc, id: string) => ({
              ...acc,
              [id]: true,
            }),
            {}
          ),
        }

      case SELECTED_REMOVE:
        const clonedState = { ...state }
        delete clonedState[action.id]

        return clonedState
      case SELECTED_REMOVE_ALL:
        return {}

      case SELECTED_RESET:
        return initialState
      default:
        return state
    }
  }
  const [state, dispatch] = React.useReducer(reducer, initialState)

  function checked(id: string) {
    return state[id] || null
  }

  /*
   * Methods
   */
  const add = React.useCallback(
    function add(id: string) {
      dispatch({
        type: SELECTED_ADD,
        id,
      })
    },
    [dispatch, SELECTED_ADD]
  )

  const addMany = React.useCallback(
    function addMany(ids: string[]) {
      dispatch({
        type: SELECTED_ADD_MANY,
        ids,
      })
    },
    [dispatch, SELECTED_ADD_MANY]
  )

  const remove = React.useCallback(
    function remove(id: string) {
      dispatch({
        type: SELECTED_REMOVE,
        id,
      })
    },
    [dispatch, SELECTED_REMOVE]
  )

  const removeAll = React.useCallback(
    function removeAll() {
      dispatch({
        type: SELECTED_REMOVE_ALL,
      })
    },
    [dispatch, SELECTED_REMOVE_ALL]
  )

  const reset = React.useCallback(
    function removeAll() {
      dispatch({
        type: SELECTED_RESET,
      })
    },
    [dispatch, SELECTED_RESET]
  )

  /*
   * Events
   */
  const onClick = React.useCallback(
    function onClick(e: any) {
      e.preventDefault && e.preventDefault()

      return (action: SelectedActions) => dispatch(action)
    },
    [dispatch]
  )

  const onChecked = React.useCallback(
    function onChecked(e: any) {
      const id = e.target.id

      e.target.checked
        ? dispatch({
            type: SELECTED_ADD,
            id,
          })
        : dispatch({
            type: SELECTED_REMOVE,
            id,
          })
    },
    [dispatch, SELECTED_ADD, SELECTED_REMOVE]
  )

  const onToggleClick = React.useCallback(
    function onToggle(e: any) {
      e.preventDefault && e.preventDefault()
      const id = e.target.id

      return state[id]
        ? dispatch({
            type: SELECTED_REMOVE,
            id,
          })
        : dispatch({
            type: SELECTED_ADD,
            id,
          })
    },
    [dispatch, SELECTED_REMOVE, SELECTED_ADD]
  )

  function onCheckAllChange(data: SelectedDataInterface[] = []) {
    return (e: any) => {
      if (data && e.target.checked) {
        let selected: string[] = []
        for (let item of data) {
          selected.push(item.id)
        }

        addMany(selected)
      } else {
        removeAll()
      }
    }
  }

  function onCheckAllClick(data: SelectedDataInterface[] = []) {
    return (e: any) => {
      console.log('onCheckAllClick')
      if (data && e.target.checked) {
        let selected: string[] = []
        for (let item of data) {
          selected.push(item.id)
        }

        addMany(selected)
      } else {
        console.log('removeAll')

        removeAll()
      }
    }
  }

  return {
    state,
    checked,

    // methods
    add,
    addMany,
    dispatch,
    remove,
    removeAll,
    reset,

    // events
    onCheckAllChange,
    onCheckAllClick,
    onChecked,
    onClick,
    onToggleClick,
  }
}
