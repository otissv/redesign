import React from 'react'

import { ThemeProvider } from '@redesign/ui-core'
import { Main } from './Main'

export default {
  title: 'Components/Atoms/Main',
  component: Main,
}

export const Default = () => (
  <ThemeProvider>
    <Main>Main</Main>
  </ThemeProvider>
)
