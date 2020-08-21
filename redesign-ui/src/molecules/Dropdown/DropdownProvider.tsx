import React, { FC, cloneElement, useMemo, useReducer, useRef } from 'react'
import cuid from 'cuid'

import { DropdownContext } from './DropdownContext'

import {
  DropdownAction,
  DropdownInitialState,
  DropdownProviderInterface,
  SET_DROPDOWN_FLIP,
  SET_DROPDOWN_JUSTIFY,
  SET_DROPDOWN_OPENED,
  SET_DROPDOWN_POSITION,
  DropDownStateInterface,
} from './dropdown.types'

export const DropdownProvider: FC<DropdownProviderInterface> = function DropdownContextProvider({
  children,
  flip = DropdownInitialState.state.flip,
  justify = DropdownInitialState.state.justify,
  opened = DropdownInitialState.state.opened,
  position = DropdownInitialState.state.position,
  reducer,
  id = cuid(),
  ...propsRest
}) {
  const uid = useRef(id)

  const initialState: DropDownStateInterface = {
    flip,
    justify,
    opened,
    position,
    id: uid.current,
  }

  function internalReducer(
    state: DropDownStateInterface,
    action: DropdownAction
  ) {
    switch (action.type) {
      case SET_DROPDOWN_OPENED:
        return {
          ...state,
          opened: action.payload,
        }
      case SET_DROPDOWN_FLIP:
        return {
          ...state,
          flip: action.payload,
        }

      case SET_DROPDOWN_JUSTIFY:
        return {
          ...state,
          justify: action.payload,
        }

      case SET_DROPDOWN_POSITION:
        return {
          ...state,
          position: action.payload,
        }

      default:
        return reducer ? reducer(state, action) : state
    }
  }

  const [state, dispatch] = useReducer(internalReducer, initialState)

  const childElements = useMemo(
    () =>
      Boolean(Object.keys(propsRest).length)
        ? React.Children.map(children, (child: any) =>
            cloneElement(
              child,
              { ...child.props, ...propsRest },
              child.props.children
            )
          )
        : children,
    [propsRest, children]
  )

  const context = { state, dispatch }

  return (
    <DropdownContext.Provider value={context}>
      {childElements}
    </DropdownContext.Provider>
  )
}

DropdownProvider.displayName = 'DropdownProvider'
