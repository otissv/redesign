import React from 'react'

import { ThemeProvider } from '@redesign/ui-core'
import { Label } from './Label'
import { Box } from '../Box'

export default {
  title: 'Components/Atoms/Label',
  component: Label,
}

export const Default = () => (
  <ThemeProvider>
    <Label htmlFor="label">Label</Label>
  </ThemeProvider>
)

export const Required = () => (
  <ThemeProvider>
    <Label htmlFor="label" required>
      Required
    </Label>
  </ThemeProvider>
)

export const Appearance = () => (
  <ThemeProvider>
    <Box mb={5}>
      <Label htmlFor="label">Default</Label>
    </Box>
    <Box mb={5}>
      <Label htmlFor="label" appearance="PRIMARY">
        {' '}
        Primary
      </Label>
    </Box>
    <Box mb={5}>
      <Label htmlFor="label" appearance="ACCENT">
        Accent
      </Label>
    </Box>
    <Box mb={5}>
      <Label htmlFor="label" appearance="ACTIVE">
        Active
      </Label>
    </Box>
    <Box mb={5}>
      <Label htmlFor="label" appearance="ACTION">
        Action
      </Label>
    </Box>
    <Box mb={5}>
      <Label htmlFor="label" appearance="DANGER">
        Danger
      </Label>
    </Box>
    <Box mb={5}>
      <Label htmlFor="label" appearance="ERROR">
        Error
      </Label>
    </Box>
    <Box mb={5}>
      <Label htmlFor="label" appearance="SUCCESS">
        Success
      </Label>
    </Box>
    <Box mb={5}>
      <Label htmlFor="label" appearance="WARNING">
        Warning
      </Label>
    </Box>
    <Box mb={5}>
      <Label htmlFor="label" appearance="DISABLED">
        Disabled
      </Label>
    </Box>
  </ThemeProvider>
)
