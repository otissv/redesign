import React from 'react'

import { ThemeProvider } from '@redesign-system/ui-core'
import { Copyright } from './Copyright'

export default {
  title: 'Components/Copyright',
  component: Copyright,
}

export const Default = () => (
  <ThemeProvider>
    <Copyright>Redesign</Copyright>
  </ThemeProvider>
)
