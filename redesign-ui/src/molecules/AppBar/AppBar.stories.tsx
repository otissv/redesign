import React from 'react'

import { ThemeProvider } from '@redesign/ui-core'
import { Typography } from '../../atoms/Typography'
import { Textbox } from '../../atoms/Textbox'
import { AppBar } from './AppBar'

export default {
  title: 'Components/Molecules/AppBar',
  component: AppBar,
}

export const Default = () => (
  <ThemeProvider>
    <AppBar paddingRight={4}>
      <Typography
        element="h3"
        marginLeft="default"
        flexGrow={1}
        display="inline-block"
      >
        My App
      </Typography>
      <Textbox id="" marginLeft={4} widths={4} placeholder="Search" />
    </AppBar>
  </ThemeProvider>
)
