import React from 'react'

import { ThemeProvider } from '@redesign-system/ui-core'
import { Overlay } from './Overlay'

export default {
  title: 'Components/Atoms/Overlay',
  component: Overlay,
}

export const Default = () => (
  <ThemeProvider>
    <Overlay color="#ffffff50" w="300px" h="100px" />
  </ThemeProvider>
)
