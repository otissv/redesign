import { createContext, useContext } from 'react'

import { ThemeContextInterface } from './themeContext.types'
import { themeDefaults, noop } from '@redesign-system/theme'

const initialState: ThemeContextInterface = {
  theme: themeDefaults,
  setTheme: noop,
}

export const ThemeContext = createContext(initialState)

export function useTheme() {
  return useContext(ThemeContext)
}
