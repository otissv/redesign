import React from 'react'

import { ThemeProvider } from '@redesign-system/ui-core'
import { ErrorMessage } from './ErrorMessage'

export default {
  title: 'Components/ErrorMessage',
  component: ErrorMessage,
}

export const Default = () => (
  <ThemeProvider>
    <ErrorMessage>ErrorMessage</ErrorMessage>
  </ThemeProvider>
)

export const Appearance = () => (
  <ThemeProvider>
    <ErrorMessage appearance="PRIMARY">Primary</ErrorMessage>
    <ErrorMessage appearance="SECONDARY">Secondary</ErrorMessage>
  </ThemeProvider>
)
