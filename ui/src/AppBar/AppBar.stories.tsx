import React from 'react'
import { ThemeProvider } from '@redesign-system/ui-core'
import { Logo } from '../Logo'

import { AppBar, useAppBar } from './AppBar'
import { AppBarTrigger } from './AppBarTrigger'
import { AppBarSearch } from './AppBarSearch'
import { AppBarBrand } from './AppBarBrand'
import { AppBarFooter } from './AppBarFooter'
import { List, ListItem } from '../List'
import { Nav, NavItem } from '../Nav'
import { Button } from '../Button'
import { useString } from '../useString'

export default {
  title: 'Components/AppBar',
  component: AppBar,
}

export const Default = () => {
  const { onOpenedClick, opened, smallAppBar } = useAppBar()
  const { string: active, onClick } = useString('dashboard')

  const onSearch = (e: any) => {
    console.log(e)
  }

  return (
    <ThemeProvider>
      <AppBar paddingRight={4} opened={opened} smallAppBar={smallAppBar}>
        <AppBarTrigger onClick={onOpenedClick} smallAppBar={smallAppBar} />
        <AppBarBrand ml={3}>
          <Logo w="99px" h="22px" />
        </AppBarBrand>
        <Nav
          as="ul"
          flexGrow={1}
          jc="center"
          stacked={opened}
          p={3}
          childrenProps={{
            margin: 1,
          }}
        >
          <NavItem id="dashboard" title="Default 1" onClick={onClick}>
            <Button
              appearance={active === 'dashboard' ? 'ACTIVE' : ''}
              as="a"
              href="#"
              radius="rounded"
              stretch
              textAlign="left"
            >
              Dashboard
            </Button>
          </NavItem>
          <NavItem id="projects" title="Projects" onClick={onClick}>
            <Button
              appearance={active === 'projects' ? 'ACTIVE' : ''}
              as="a"
              href="#"
              radius="rounded"
              stretch
              textAlign="left"
            >
              Projects
            </Button>
          </NavItem>
          <NavItem id="notes" title="Notes" onClick={onClick}>
            <Button
              appearance={active === 'notes' ? 'ACTIVE' : ''}
              as="a"
              href="#"
              radius="rounded"
              stretch
              textAlign="left"
            >
              Notes
            </Button>
          </NavItem>
          <NavItem id="support" title="Support" onClick={onClick}>
            <Button
              appearance={active === 'support' ? 'ACTIVE' : ''}
              as="a"
              href="#"
              radius="rounded"
              stretch
              textAlign="left"
            >
              Support
            </Button>
          </NavItem>
        </Nav>

        <AppBarSearch
          id="app-search"
          label="search"
          m={!smallAppBar ? 3 : undefined}
          widths={!smallAppBar ? 2 : undefined}
          onSearch={onSearch}
        />

        <AppBarFooter smallAppBar={smallAppBar}>
          <List p={4}>
            <ListItem>About company</ListItem>
            <ListItem>Contact us</ListItem>
            <ListItem>Terms and Conditions</ListItem>
            <ListItem>Privacy Policy</ListItem>
          </List>
        </AppBarFooter>
      </AppBar>
    </ThemeProvider>
  )
}
