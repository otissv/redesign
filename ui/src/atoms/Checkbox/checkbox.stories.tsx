import React from 'react'

import { ThemeProvider } from '@redesign-system/ui-core'
import { Label } from '../Label'
import { Checkbox } from './Checkbox'

export default {
  title: 'Components/Atoms/Checkbox',
  component: Checkbox,
}

export const Default = () => (
  <ThemeProvider>
    <Checkbox id="1" label="default" />
  </ThemeProvider>
)

export const Appearance = () => (
  <ThemeProvider>
    <Label htmlFor="Default">
      Default <Checkbox id="Default" label="default" />
    </Label>
    <Label htmlFor="PRIMARY">
      Primary <Checkbox id="PRIMARY" appearance="PRIMARY" label="Primary" />
    </Label>
    <Label htmlFor="ACCENT">
      Accent <Checkbox id="ACCENT" appearance="ACCENT" label="Accent" />
    </Label>
    <Label htmlFor="ACTIVE">
      Active <Checkbox id="ACTIVE" appearance="ACTIVE" label="Active" />
    </Label>
    <Label htmlFor="ACTION">
      Action <Checkbox id="ACTION" appearance="ACTION" label="Action" />
    </Label>
    <Label htmlFor="DANGER">
      Danger <Checkbox id="DANGER" appearance="DANGER" label="Danger" />
    </Label>
    <Label htmlFor="ERROR">
      Error <Checkbox id="ERROR" appearance="ERROR" label="Error" />
    </Label>
    <Label htmlFor="SUCCESS">
      Success <Checkbox id="SUCCESS" appearance="SUCCESS" label="Success" />
    </Label>
    <Label htmlFor="WARNING">
      Warning <Checkbox id="WARNING" appearance="WARNING" label="Warning" />
    </Label>
    <Label htmlFor="DISABLED">
      Disabled <Checkbox id="DISABLED" appearance="DISABLED" label="Disabled" />
    </Label>
    <Label htmlFor="DISABLED_CHECKED" label="Active">
      Disabled Checked
      <Checkbox
        id="DISABLED_CHECKED"
        appearance="DISABLED"
        checked
        label="Disabled Checked"
      />
    </Label>
  </ThemeProvider>
)

export const Custom = () => (
  <ThemeProvider>
    <Checkbox id="1" label="default">
      <span>Yes</span>
      <span>No</span>
    </Checkbox>
  </ThemeProvider>
)
