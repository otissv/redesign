import React from 'react'

import { ThemeProvider } from '@redesign/ui-core'

import { Legend } from './Legend'

export default {
  title: 'Components/Atoms/Legend',
  component: Legend,
}

export const Default = () => (
  <ThemeProvider>
    <Legend legend="Main details">
      <div>
        <label htmlFor="firstName">First name</label>
        <input id="firstName" />
      </div>
    </Legend>
  </ThemeProvider>
)
