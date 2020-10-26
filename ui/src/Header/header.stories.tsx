import React from 'react'
import { ThemeProvider } from '@redesign-system/ui-core'

import { Header } from './Header'
import { Typography } from '../Typography'

export default {
  title: 'Components/Header',
  component: Header,
}

export const Default = () => (
  <ThemeProvider>
    <Header
      height="300px"
      src="https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      overlay="#58424280"
      content={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography as="h1">Heading</Typography>
    </Header>
  </ThemeProvider>
)
