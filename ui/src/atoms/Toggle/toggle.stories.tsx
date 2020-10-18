import React from 'react'
import { MenuIcon } from '@redesign/material-icons/MenuIcon'
import { MenuOpenIcon } from '@redesign/material-icons/MenuOpenIcon'
import { ThemeProvider } from '@redesign/ui-core'

import { Toggle } from './Toggle'

export default {
  title: 'Components/Atoms/Toggle',
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
