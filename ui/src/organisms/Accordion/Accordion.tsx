import React, { FC } from 'react'

import { AccordionInterface } from './accordion.types'
import { accordionTheme } from './accordion.theme'
import { Base, useTheme } from '@redesign/ui-core'

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
export const Accordion: FC<AccordionInterface> = function Accordion({
  as = 'div',
  children,
  className = '',
  css = '',
  height,
  width,
  ...propsRest
}) {
  const { theme } = useTheme()

  const classNames = `Accordion ${className}`
  const cssList: any = React.useMemo(() => [accordionTheme, css], [
    accordionTheme,
    css,
  ])

  return (
    <Base
      as={as}
      className={classNames}
      css={cssList}
      theme={theme}
      {...propsRest}
      __ignore="align"
    >
      {children}
    </Base>
  )
}

Accordion.displayName = 'Accordion'
