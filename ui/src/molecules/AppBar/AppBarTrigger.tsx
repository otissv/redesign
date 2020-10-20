import React from 'react'
import { MenuIcon } from '@redesign-system/material-icons/MenuIcon'
import { MenuOpenIcon } from '@redesign-system/material-icons/MenuOpenIcon'

import { appBarTriggerTheme } from './appBar.theme'
import { Toggle } from '../../atoms/Toggle'

export function AppBarTrigger({
  className = '',
  children,
  css = '',
  opened,
  onClick,
  smallAppBar,
  onChange,
  ...propsRest
}: any) {
  const classNames = `AppBarTrigger ${className}`

  const cssList = [appBarTriggerTheme, css]

  const triggerDefault = [<MenuOpenIcon key={1} />, <MenuIcon key={2} />]

  return smallAppBar ? (
    <Toggle
      className={classNames}
      id="1"
      label="menu"
      onChange={onChange}
      onClick={onClick}
      css={cssList}
      {...propsRest}
      aria-haspopup="menu"
      aria-expanded={opened}
    >
      {children ? children : triggerDefault}
    </Toggle>
  ) : null
}

AppBarTrigger.displayName = 'AppBarTrigger'
