import React from 'react'

import { ThemeProvider } from '@redesign-system/ui-core'
import { Close } from './Close'

export default {
  title: 'Components/Close',
  component: Close,
}

export const Default = () => (
  <ThemeProvider>
    <Close />
  </ThemeProvider>
)
