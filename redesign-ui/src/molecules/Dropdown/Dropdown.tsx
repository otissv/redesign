import React, { FC, useMemo } from 'react'

import { Base, useTheme } from '@redesign/ui-core'
import { useDropdown } from './DropdownContext'
import { DropdownInterface } from './dropdown.types'
import { dropdownTheme } from './dropdown.theme'

export const Dropdown: FC<DropdownInterface> = function Alert({
  as = 'div',
  children,
  className = '',
  css = '',
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = useMemo(() => `Dropdown ${className}`, [className])
  const cssList: any = useMemo(() => [dropdownTheme, css], [dropdownTheme, css])

  const {
    state: { id },
  } = useDropdown()

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
