import React, { FC, useContext, useReducer } from 'react'

import {
  TabsContextInterface,
  TabsProviderInterface,
  TabStateInterface,
  TabActionsTypes,
  RESET_TABS,
  SET_TAB_ACTIVE,
} from './tabs.types'

export const TabsContext = React.createContext<TabsContextInterface>({})

export function useTabs() {
  return useContext(TabsContext)
}

export const TabsProvider: FC<TabsProviderInterface> = function TabsProvider({
  active,
  children,
}) {
  const initialState: TabStateInterface = {
    active: `${active},tab`,
  }

  function reducer(state: TabStateInterface, action: TabActionsTypes) {
    switch (action.type) {
      case SET_TAB_ACTIVE:
        return {
          ...state,
          active: action.active,
        }

      case RESET_TABS:
        return initialState

      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const context = {
    ...state,
    dispatch,
  }

  return <TabsContext.Provider value={context}>{children}</TabsContext.Provider>
}

TabsProvider.displayName = 'TabsProvider'
