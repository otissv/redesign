import React from 'react'
import { ThemeProvider, useString } from '@redesign-system/ui-core'

import { Nav } from './Nav'
import { NavItem } from './NavItem'
import { NavItemButton } from './NavItemButton'

export default {
  title: 'Components/Nav',
  component: Nav,
}

export const Default = () => {
  const { string: active, onClick } = useString('dashboard')
  return (
    <ThemeProvider>
      <Nav>
        <NavItem id="dashboard" title="Default 1" onClick={onClick}>
          <NavItemButton
            active={active === 'dashboard'}
            href="#"
            textAlign="left"
          >
            Dashboard
          </NavItemButton>
        </NavItem>
        <NavItem id="projects" title="Projects" onClick={onClick}>
          <NavItemButton
            active={active === 'projects'}
            href="#"
            textAlign="left"
          >
            Projects
          </NavItemButton>
        </NavItem>
        <NavItem id="notes" title="Notes" onClick={onClick}>
          <NavItemButton active={active === 'notes'} href="#" textAlign="left">
            Notes
          </NavItemButton>
        </NavItem>
        <NavItem id="support" title="Support" onClick={onClick}>
          <NavItemButton
            active={active === 'support'}
            href="#"
            textAlign="left"
          >
            Support
          </NavItemButton>
        </NavItem>
      </Nav>
    </ThemeProvider>
  )
}

export const Stacked = () => {
  const { string: active, onClick } = useString('dashboard')

  return (
    <ThemeProvider>
      <Nav stacked>
        <NavItem id="dashboard" title="Default 1" onClick={onClick}>
          <NavItemButton
            active={active === 'dashboard'}
            href="#"
            textAlign="left"
          >
            Dashboard
          </NavItemButton>
        </NavItem>
        <NavItem id="projects" title="Projects" onClick={onClick}>
          <NavItemButton
            active={active === 'projects'}
            href="#"
            textAlign="left"
          >
            Projects
          </NavItemButton>
        </NavItem>
        <NavItem id="notes" title="Notes" onClick={onClick}>
          <NavItemButton active={active === 'notes'} href="#" textAlign="left">
            Notes
          </NavItemButton>
        </NavItem>
        <NavItem id="support" title="Support" onClick={onClick}>
          <NavItemButton
            active={active === 'support'}
            href="#"
            textAlign="left"
          >
            Support
          </NavItemButton>
        </NavItem>
      </Nav>
    </ThemeProvider>
  )
}
