import React from 'react'
import { ThemeProvider } from '@redesign/ui-core'

import { Button } from '../Button'

import { List } from './List'
import { ListItem } from './ListItem'

export default {
  title: 'Components/Atoms/List',
  component: List,
}

export const Default = () => (
  <ThemeProvider>
    <List>
      <ListItem>
        <Button stretch>Item 1</Button>
      </ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
      <ListItem>Item 4</ListItem>
    </List>
  </ThemeProvider>
)
