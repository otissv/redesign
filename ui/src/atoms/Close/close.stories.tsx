import React from 'react'

import { ThemeProvider } from '@redesign/ui-core'
import { Close } from './Close'

export default {
  title: 'Components/Atoms/Close',
  component: Close,
}

export const Default = () => (
  <ThemeProvider>
    <Close />
  </ThemeProvider>
)
