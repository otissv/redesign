import React, { useMemo, useState } from 'react'
import { createTheme, ThemeInterface } from '@redesign-system/theme'
import { GlobalStyles } from '../GlobalStyles'

import { ThemeProviderInterface } from './themeContext.types'
import { ThemeContext } from './ThemeContext'

export const ThemeProvider = function ThemeProvider({
  children,
  theme: hostTheme,
}: ThemeProviderInterface) {
  const theme = createTheme(hostTheme) as ThemeInterface

  const [themeContext, setTheme] = useState(theme as ThemeInterface)

  const context = useMemo(() => ({ theme: themeContext, setTheme }), [
    themeContext,
    setTheme,
  ])

  return (
    <ThemeContext.Provider value={context}>
      <GlobalStyles theme={themeContext} />
      {children}
    </ThemeContext.Provider>
  )
}
