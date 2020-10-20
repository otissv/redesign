import React from 'react'
import { ThemeProvider } from '@redesign-system/ui-core'

import { List } from './List'
import { ListItem } from './ListItem'

export default {
  title: 'Components/Atoms/List',
  component: List,
}

export const Default = () => (
  <ThemeProvider>
    <List
      childrenProps={{
        bb: 'thin',
        p: 3,
      }}
    >
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
      <ListItem>Item 4</ListItem>
    </List>
  </ThemeProvider>
)

export const Columns = () => (
  <ThemeProvider>
    <List
      columns
      childrenProps={{
        b: 'thin',
        p: 3,
        m: 3,
        w: '100px',
      }}
    >
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
      <ListItem>Item 4</ListItem>
      <ListItem>Item 5</ListItem>
      <ListItem>Item 6</ListItem>
      <ListItem>Item 7</ListItem>
      <ListItem>Item 8</ListItem>
      <ListItem>Item 9</ListItem>
      <ListItem>Item 10</ListItem>
      <ListItem>Item 11</ListItem>
      <ListItem>Item 12</ListItem>
      <ListItem>Item 13</ListItem>
      <ListItem>Item 14</ListItem>
    </List>
  </ThemeProvider>
)
