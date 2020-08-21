import React from 'react'

import { ThemeProvider } from '@redesign/ui-core'
import { FormatDateTime } from './FormatDateTime'

export default {
  title: 'Helpers/FormatDateTime',
  component: FormatDateTime,
}

export const Default = () => (
  <ThemeProvider>
    <FormatDateTime date={new Date().toISOString()} />
  </ThemeProvider>
)
