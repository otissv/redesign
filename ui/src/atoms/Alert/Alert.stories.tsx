import React from 'react'
import { ThemeProvider } from '@redesign/ui-core'

import { Alert } from './Alert'
import { Box } from '../Box'
import { useBoolean } from '../../hooks/useBoolean'
import { Close as CloseComponent } from '../Close'

export default {
  title: 'Components/Atoms/Alert',
  component: Alert,
}

export const Default = () => (
  <ThemeProvider>
    <Box childrenProps={{ m: 'default' }}>
      <Alert>Alert</Alert>
    </Box>
  </ThemeProvider>
)

export const Close = () => {
  const { boolean: opened, onToggleClick } = useBoolean(true)
  return (
    <ThemeProvider>
      <Box childrenProps={{ m: 'default' }}>
        <Alert opened={opened} appearance="PRIMARY">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <CloseComponent onClick={onToggleClick} />
        </Alert>
      </Box>
    </ThemeProvider>
  )
}

export const Appearance = () => (
  <ThemeProvider>
    <Box childrenProps={{ m: 'default' }}>
      <Alert appearance="PRIMARY">Primary</Alert>
      <Alert appearance="SECONDARY">Secondary</Alert>
      <Alert appearance="TERTIARY">Tertiary</Alert>
    </Box>
    <Box childrenProps={{ m: 'default' }}>
      <Alert appearance="ACCENT">Accent</Alert>
      <Alert appearance="PRIMARY_ACCENT">Primary Accent</Alert>
      <Alert appearance="SECONDARY_ACCENT">Secondary Accent</Alert>
      <Alert appearance="TERTIARY_ACCENT">Tertiary Accent</Alert>
    </Box>
    <Box childrenProps={{ m: 'default' }}>
      <Alert appearance="ACTIVE">Active</Alert>
      <Alert appearance="PRIMARY_ACTIVE">Primary Active</Alert>
      <Alert appearance="SECONDARY_ACTIVE">Secondary Active</Alert>
      <Alert appearance="TERTIARY_ACTIVE">Tertiary Active</Alert>
    </Box>
    <Box childrenProps={{ m: 'default' }}>
      <Alert appearance="ACTION">Action</Alert>
      <Alert appearance="PRIMARY_ACTION">Primary Action</Alert>
      <Alert appearance="SECONDARY_ACTION">Secondary Action</Alert>
      <Alert appearance="TERTIARY_ACTION">Tertiary Action</Alert>
    </Box>
    <Box childrenProps={{ m: 'default' }}>
      <Alert appearance="DANGER">Danger</Alert>
      <Alert appearance="PRIMARY_DANGER">Primary Danger</Alert>
      <Alert appearance="SECONDARY_DANGER">Secondary Danger</Alert>
      <Alert appearance="TERTIARY_DANGER">Tertiary Danger</Alert>
    </Box>
    <Box childrenProps={{ m: 'default' }}>
      <Alert appearance="ERROR">Error</Alert>
      <Alert appearance="PRIMARY_ERROR">Primary Error</Alert>
      <Alert appearance="SECONDARY_ERROR">Secondary Error</Alert>
      <Alert appearance="TERTIARY_ERROR">Tertiary Error</Alert>
    </Box>
    <Box childrenProps={{ m: 'default' }}>
      <Alert appearance="SUCCESS">Success</Alert>
      <Alert appearance="PRIMARY_SUCCESS">Primary Success</Alert>
      <Alert appearance="SECONDARY_SUCCESS">Secondary Success</Alert>
      <Alert appearance="TERTIARY_SUCCESS">Tertiary Success</Alert>
    </Box>
    <Box childrenProps={{ m: 'default' }}>
      <Alert appearance="WARNING">Warning</Alert>
      <Alert appearance="PRIMARY_WARNING">Primary Warning</Alert>
      <Alert appearance="SECONDARY_WARNING">Secondary Warning</Alert>
      <Alert appearance="TERTIARY_WARNING">Tertiary Warning</Alert>
    </Box>
    <Box childrenProps={{ m: 'default' }}>
      <Alert appearance="DISABLED">Disabled</Alert>
      <Alert appearance="PRIMARY_DISABLED">Primary Disabled</Alert>
      <Alert appearance="SECONDARY_DISABLED">Secondary Disabled</Alert>
      <Alert appearance="TERTIARY_DISABLED">Tertiary Disabled</Alert>
    </Box>
  </ThemeProvider>
)
