import React from 'react'

import { ThemeProvider } from '@redesign-system/ui-core'

import { Fieldset } from './Fieldset'
import { Label } from '../../atoms/Label'
import { Textbox } from '../../atoms/Textbox'

export default {
  title: 'Components/Molecules/Fieldset',
  component: Fieldset,
}

export const Default = () => (
  <ThemeProvider>
    <Fieldset legend="Personal details">
      <Label htmlFor="firstName" mr={3}>
        First name
      </Label>
      <Textbox label="firstName" id="firstName" mb={5} />

      <Label htmlFor="lastName" mr={3}>
        Last name
      </Label>
      <Textbox label="lastName" id="lastName" mb={5} />
    </Fieldset>
  </ThemeProvider>
)
