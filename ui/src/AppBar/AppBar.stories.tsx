import React from 'react'
import { ThemeProvider, useString } from '@redesign-system/ui-core'
import { Logo } from '../Logo'

import { AppBar } from './AppBar'
import { AppBarNav } from './AppBarNav'
import { AppBarTrigger } from './AppBarTrigger'
import { AppBarSearch } from './AppBarSearch'
import { AppBarBrand } from './AppBarBrand'
import { AppBarFooter } from './AppBarFooter'
import { List, ListItem } from '../List'
import { Nav, NavItem, NavItemButton } from '../Nav'

export default {
  title: 'Components/AppBar',
  component: AppBar,
}

export const Default = () => {
  const [opened, setOpened] = React.useState<boolean>()
  const { string: active, onClick } = useString('dashboard')

  const onSearch = (e: any) => {
    console.log(e)
  }

  const onOpenedClick = () => {
    setOpened(!opened)
  }

  return (
    <ThemeProvider>
      <AppBar opened={opened} bg="grey_800">
        <AppBarTrigger onClick={onOpenedClick} opened={opened} />
        <AppBarBrand>
          <Logo w="99px" h="22px" />
        </AppBarBrand>
        <AppBarNav>
          <Nav as="ul" flexGrow={1} jc="center" py={4}>
            <NavItem id="dashboard" title="Default 1" onClick={onClick}>
              <NavItemButton
                appearance={active === 'dashboard' ? 'ACTIVE' : 'TERTIARY'}
                href="#"
                radius="rounded"
                stretch
                textAlign="left"
              >
                Dashboard
              </NavItemButton>
            </NavItem>
            <NavItem id="projects" title="Projects" onClick={onClick}>
              <NavItemButton
                appearance={active === 'projects' ? 'ACTIVE' : 'TERTIARY'}
                href="#"
                radius="rounded"
                stretch
                textAlign="left"
              >
                Projects
              </NavItemButton>
            </NavItem>
            <NavItem id="notes" title="Notes" onClick={onClick}>
              <NavItemButton
                appearance={active === 'notes' ? 'ACTIVE' : 'TERTIARY'}
                href="#"
                radius="rounded"
                stretch
                textAlign="left"
              >
                Notes
              </NavItemButton>
            </NavItem>
            <NavItem id="support" title="Support" onClick={onClick}>
              <NavItemButton
                appearance={active === 'support' ? 'ACTIVE' : 'TERTIARY'}
                href="#"
                radius="rounded"
                stretch
                textAlign="left"
              >
                Support
              </NavItemButton>
            </NavItem>
          </Nav>
        </AppBarNav>

        <AppBarSearch id="app-search" label="search" onSearch={onSearch} />

        <AppBarFooter>
          <List>
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
