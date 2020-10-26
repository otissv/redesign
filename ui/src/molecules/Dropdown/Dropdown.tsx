import React, { FC } from 'react'
import cuid from 'cuid'

import { Base, useTheme } from '@redesign-system/ui-core'
import { DropdownInterface } from './dropdown.types'
import { dropdownTheme } from './dropdown.theme'

import { useBoolean } from '../../hooks/useBoolean'

export function useDropdown(initialState = false) {
  const { boolean: opened, ...state } = useBoolean(initialState)

  return {
    opened,
    ...state,
    id: cuid(),
  }
}

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
export const Dropdown: FC<DropdownInterface> = function Alert({
  as = 'div',
  children,
  className = '',
  css = '',
  id,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `Dropdown ${className}`
  const cssList = [dropdownTheme, css]

  return (
    <Base
      as={as}
      className={classNames}
      theme={theme}
      css={cssList}
      {...propsRest}
      id={`#${id}`}
    >
      {children}
    </Base>
  )
}

Dropdown.displayName = 'Dropdown'
