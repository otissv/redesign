import React from 'react'
import { ThemeProvider } from '@redesign/ui-core'

import { Figure } from './Figure'

export default {
  title: 'Components/Atoms/Figure',
  component: Figure,
}

export const Default = () => {
  return (
    <ThemeProvider>
      <Figure caption="this is  a caption"></Figure>
    </ThemeProvider>
  )
}
