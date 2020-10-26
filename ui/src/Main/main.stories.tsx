import React from 'react'

import { ThemeProvider } from '@redesign-system/ui-core'
import { Main } from './Main'

export default {
  title: 'Components/Main',
  component: Main,
}

export const Default = () => (
  <ThemeProvider>
    <Main>Main</Main>
  </ThemeProvider>
)
