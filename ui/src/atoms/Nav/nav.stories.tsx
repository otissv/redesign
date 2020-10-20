import React from 'react'
import { ThemeProvider } from '@redesign-system/ui-core'

import { Nav } from './Nav'
import { NavItem } from './NavItem'
import { useString } from '../../hooks/useString'
import { Button } from '../Button'

export default {
  title: 'Components/atoms/Nav',
  component: Nav,
}

export const Default = () => {
  const { string: active, onClick } = useString('dashboard')
  return (
    <ThemeProvider>
      <Nav>
        <NavItem id="dashboard" title="Default 1" onClick={onClick}>
          <Button
            active={active === 'dashboard'}
            as="a"
            href="#"
            textAlign="left"
          >
            Dashboard
          </Button>
        </NavItem>
        <NavItem id="projects" title="Projects" onClick={onClick}>
          <Button
            active={active === 'projects'}
            as="a"
            href="#"
            textAlign="left"
          >
            Projects
          </Button>
        </NavItem>
        <NavItem id="notes" title="Notes" onClick={onClick}>
          <Button active={active === 'notes'} as="a" href="#" textAlign="left">
            Notes
          </Button>
        </NavItem>
        <NavItem id="support" title="Support" onClick={onClick}>
          <Button
            active={active === 'support'}
            as="a"
            href="#"
            textAlign="left"
          >
            Support
          </Button>
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
          <Button
            active={active === 'dashboard'}
            as="a"
            href="#"
            textAlign="left"
          >
            Dashboard
          </Button>
        </NavItem>
        <NavItem id="projects" title="Projects" onClick={onClick}>
          <Button
            active={active === 'projects'}
            as="a"
            href="#"
            textAlign="left"
          >
            Projects
          </Button>
        </NavItem>
        <NavItem id="notes" title="Notes" onClick={onClick}>
          <Button active={active === 'notes'} href="#" textAlign="left">
            Notes
          </Button>
        </NavItem>
        <NavItem id="support" title="Support" onClick={onClick}>
          <Button
            active={active === 'support'}
            as="a"
            href="#"
            textAlign="left"
          >
            Support
          </Button>
        </NavItem>
      </Nav>
    </ThemeProvider>
  )
}
