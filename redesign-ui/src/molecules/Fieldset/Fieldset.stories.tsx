import React from 'react'

import { ThemeProvider } from '@redesign/ui-core'

import { Fieldset } from './Fieldset'

export default {
  title: 'Components/Atoms/Fieldset',
  component: Fieldset,
}

export const Default = () => (
  <ThemeProvider>
    <Fieldset legend="Main details">
      <div>
        <label htmlFor="firstName">First name</label>
        <input id="firstName" />
      </div>
    </Fieldset>
  </ThemeProvider>
)
