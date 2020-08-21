import React from 'react'

import { ThemeProvider } from '@redesign/ui-core'
import { Box } from '../Box'
import { Label } from '../Label'

export default {
  title: 'Components/Atoms/Checkbox',
  component: Box,
}
import { Checkbox } from './Checkbox'

export const Default = () => (
  <ThemeProvider>
    <Checkbox id="1" />
  </ThemeProvider>
)

export const Appearance = () => (
  <ThemeProvider>
    <Label htmlFor="Default">
      Default <Checkbox id="Default" />
    </Label>
    <Label htmlFor="PRIMARY">
      Primary <Checkbox id="PRIMARY" appearance="PRIMARY" />
    </Label>
    <Label htmlFor="ACCENT">
      Accent <Checkbox id="ACCENT" appearance="ACCENT" />
    </Label>
    <Label htmlFor="ACTIVE">
      Active <Checkbox id="ACTIVE" appearance="ACTIVE" />
    </Label>
    <Label htmlFor="ACTION">
      Action <Checkbox id="ACTION" appearance="ACTION" />
    </Label>
    <Label htmlFor="DANGER">
      Danger <Checkbox id="DANGER" appearance="DANGER" />
    </Label>
    <Label htmlFor="ERROR">
      Error <Checkbox id="ERROR" appearance="ERROR" />
    </Label>
    <Label htmlFor="SUCCESS">
      Success <Checkbox id="SUCCESS" appearance="SUCCESS" />
    </Label>
    <Label htmlFor="WARNING">
      Warning <Checkbox id="WARNING" appearance="WARNING" />
    </Label>
    <Label htmlFor="DISABLED">
      Disabled <Checkbox id="DISABLED" appearance="DISABLED" />
    </Label>
    <Label htmlFor="DISABLED">
      Disabled Checked <Checkbox id="DISABLED" appearance="DISABLED" checked />
    </Label>
  </ThemeProvider>
)
