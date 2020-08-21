import React from 'react'

import { ThemeProvider } from '@redesign/ui-core'
import { Box } from './Box'

export default {
  title: 'Components/Atoms/Box',
  component: Box,
}

export const Default = () => (
  <ThemeProvider>
    <Box>BOX</Box>
  </ThemeProvider>
)

export const Appearance = () => (
  <ThemeProvider>
    <Box matchProps={{ m: 5, p: 1 }}>
      <Box appearance="PRIMARY">Primary</Box>
      <Box appearance="SECONDARY">Secondary</Box>
      <Box appearance="TERTIARY">Tertiary</Box>
    </Box>
    <Box matchProps={{ m: 5, p: 1 }}>
      <Box appearance="ACCENT">Accent</Box>
      <Box appearance="PRIMARY_ACCENT">Primary Accent</Box>
      <Box appearance="SECONDARY_ACCENT">Secondary Accent</Box>
      <Box appearance="TERTIARY_ACCENT">Tertiary Accent</Box>
    </Box>
    <Box matchProps={{ m: 5, p: 1 }}>
      <Box appearance="ACCENT">Accent</Box>
      <Box appearance="PRIMARY_ACCENT">Primary Accent</Box>
      <Box appearance="SECONDARY_ACCENT">Secondary Accent</Box>
      <Box appearance="TERTIARY_ACCENT">Tertiary Accent</Box>
    </Box>
  </ThemeProvider>
)
