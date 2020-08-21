import React, { FC, useMemo } from 'react'

import { DropdownContentInterface } from './dropdown.types'
import { Portal } from '../../helpers/Portal/Portal'
import { useDropdown } from './DropdownContext'

import { Base, useTheme } from '@redesign/ui-core'
import { dropdownContentTheme } from './dropdown.theme'

export const DropdownContent: FC<DropdownContentInterface> = function Dropdown({
  as = 'div',
  children,
  className = '',
  css = '',
  height = '200px',
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = useMemo(() => `DropdownContent ${className}`, [className])
  const cssList: any = useMemo(() => [dropdownContentTheme, css], [
    dropdownContentTheme,
    css,
  ])
  const {
    state: { opened, id },
  } = useDropdown()

  return (
    <Portal selector={`#${id}`}>
      <Base
        opened={opened}
        as={as}
        className={classNames}
        css={cssList}
        {...propsRest}
        theme={theme}
      >
        {children}
      </Base>
    </Portal>
  )
}

DropdownContent.displayName = 'DropdownContent'
