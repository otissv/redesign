import React from 'react'
import { MenuIcon } from '@redesign-system/material-icons/MenuIcon'
import { MenuOpenIcon } from '@redesign-system/material-icons/MenuOpenIcon'
import { ThemeProvider } from '@redesign-system/ui-core'

import { Toggle } from './Toggle'

export default {
  title: 'Components/Toggle',
  component: Toggle,
}

export const Default = () => (
  <ThemeProvider>
    <Toggle id="1" label="default">
      <MenuOpenIcon />
      <MenuIcon />
    </Toggle>
  </ThemeProvider>
)
