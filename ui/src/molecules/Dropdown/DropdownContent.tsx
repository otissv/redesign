import React, { FC } from 'react'

import { DropdownContentInterface } from './dropdown.types'
import { Portal } from '../../helpers/Portal/Portal'

import { Base, useTheme } from '@redesign-system/ui-core'
import { dropdownContentTheme } from './dropdown.theme'

export const DropdownContent: FC<DropdownContentInterface> = function Dropdown({
  as = 'div',
  children,
  className = '',
  css = '',
  height = 'auto',
  id,
  flip = true,
  justify = false,
  opened = false,
  overflow = 'hidden',
  position = 'bottom-left',
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `DropdownContent ${className}`
  const cssList = [dropdownContentTheme, css]

  return (
    <Portal selector={`#${id}`}>
      <Base
        as={as}
        className={classNames}
        css={cssList}
        flip={flip}
        height={height}
        justify={justify}
        opened={opened}
        hidden={!opened}
        overflow={overflow}
        position={position}
        {...propsRest}
        theme={theme}
      >
        {children}
      </Base>
    </Portal>
  )
}

DropdownContent.displayName = 'DropdownContent'
