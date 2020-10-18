import React from 'react'

import { ThemeProvider } from '@redesign/ui-core'
import { Copyright } from './Copyright'

export default {
  title: 'Components/Atoms/Copyright',
  component: Copyright,
}

export const Default = () => (
  <ThemeProvider>
    <Copyright>Redesign</Copyright>
  </ThemeProvider>
)
