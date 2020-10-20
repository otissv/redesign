import React from 'react'

import { ThemeProvider } from '@redesign-system/ui-core'
import { Caption } from './Caption'

export default {
  title: 'Components/Atoms/Caption',
  component: Caption,
}

export const Default = () => (
  <ThemeProvider>
    <Caption>Caption</Caption>
  </ThemeProvider>
)
