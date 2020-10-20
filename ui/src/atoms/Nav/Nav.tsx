import React, { FC } from 'react'
import { Base, useTheme } from '@redesign-system/ui-core'

import { navTheme } from './nav.theme'
import { NavInterface } from './nav.types'

/*TODO: ARIA
Keyboard Actions if focus is on the menubar
- Left arrow: Previous menubar item
- Right arrow: Next menubar item
- Up arrow: Open pull down menu and select first menu item
- Down arrow: Open pull down menu and select first menu item
- Enter: Open or close pull down menu. Select first menu item if opening
- Space: Open or close pull down menu. Select first menu item if opening

Keyboard Actions if focus is on a menu item
- Left arrow: Open previous pull down menu and select first item
- Right arrow: Open next pull menu and select first item
- Up arrow: Select previous menu item
- Down arrow: Select next menu item
- Enter: Invoke selected item and dismiss menu
- Space: Invoke selected item and dismiss menu
- Esc: Close menu and return focus to menubar
*/

export const Nav: FC<NavInterface> = function Nav({
  as = 'ul',
  children,
  className = '',
  css = '',
  stacked,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `Nav ${className}`
  const cssList = [navTheme, css]

  return (
    <Base
      as={as}
      className={classNames}
      stacked={stacked}
      smallAppBar={stacked}
      css={cssList}
      {...propsRest}
      theme={theme}
    >
      {children}
    </Base>
  )
}

Nav.displayName = 'Nav'
