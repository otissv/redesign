import React from 'react'

import { ThemeProvider } from '@redesign/ui-core'
import { Overlay } from './Overlay'

export default {
  title: 'Components/Atoms/Overlay',
  component: Overlay,
}

export const Default = () => (
  <ThemeProvider>
    <Overlay />
  </ThemeProvider>
)
