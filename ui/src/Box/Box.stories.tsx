import React from 'react'

import { ThemeProvider } from '@redesign-system/ui-core'
import { Box } from './Box'

export default {
  title: 'Components/Box',
  component: Box,
}

export const Default = () => (
  <ThemeProvider>
    <Box>BOX</Box>
  </ThemeProvider>
)

export const Appearance = () => (
  <ThemeProvider>
    <Box childrenProps={{ m: 5, p: 1 }}>
      <Box appearance="PRIMARY">Primary</Box>
      <Box appearance="SECONDARY">Secondary</Box>
      <Box appearance="TERTIARY">Tertiary</Box>

      <Box appearance="ACCENT">Accent</Box>
      <Box appearance="PRIMARY_ACCENT">Primary Accent</Box>
      <Box appearance="SECONDARY_ACCENT">Secondary Accent</Box>
      <Box appearance="TERTIARY_ACCENT">Tertiary Accent</Box>

      <Box appearance="ACTIVE">Active</Box>
      <Box appearance="PRIMARY_ACTIVE">Primary Active</Box>
      <Box appearance="SECONDARY_ACTIVE">Secondary Active</Box>
      <Box appearance="TERTIARY_ACTIVE">Tertiary Active</Box>

      <Box appearance="ACTION">Action</Box>
      <Box appearance="PRIMARY_ACTION">Primary Action</Box>
      <Box appearance="SECONDARY_ACTION">Secondary Action</Box>
      <Box appearance="TERTIARY_ACTION">Tertiary Action</Box>

      <Box appearance="DANGER">Danger</Box>
      <Box appearance="PRIMARY_DANGER">Primary Danger</Box>
      <Box appearance="SECONDARY_DANGER">Secondary Danger</Box>
      <Box appearance="TERTIARY_DANGER">Tertiary Danger</Box>

      <Box appearance="ERROR">Error</Box>
      <Box appearance="PRIMARY_ERROR">Primary Error</Box>
      <Box appearance="SECONDARY_ERROR">Secondary Error</Box>
      <Box appearance="TERTIARY_ERROR">Tertiary Error</Box>

      <Box appearance="SUCCESS">Success</Box>
      <Box appearance="PRIMARY_SUCCESS">Primary Success</Box>
      <Box appearance="SECONDARY_SUCCESS">Secondary Success</Box>
      <Box appearance="TERTIARY_SUCCESS">Tertiary Success</Box>

      <Box appearance="WARNING">Warning</Box>
      <Box appearance="PRIMARY_WARNING">Primary Warning</Box>
      <Box appearance="SECONDARY_WARNING">Secondary Warning</Box>
      <Box appearance="TERTIARY_WARNING">Tertiary Warning</Box>

      <Box appearance="DISABLED">Disabled</Box>
      <Box appearance="PRIMARY_DISABLED">Primary Disabled</Box>
      <Box appearance="SECONDARY_DISABLED">Secondary Disabled</Box>
      <Box appearance="TERTIARY_DISABLED">Tertiary Disabled</Box>
    </Box>
  </ThemeProvider>
)
