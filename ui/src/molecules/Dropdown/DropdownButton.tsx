import React, { FC } from 'react'
import { MenuDownIcon } from '@redesign/material-icons/MenuDownIcon'

import { DropdownButtonInterface } from './dropdown.types'
import { Button } from '../../atoms/Button'
import { dropdownButtonTheme } from './dropdown.theme'

export const DropdownButton: FC<DropdownButtonInterface> = function DropdownButton({
  children,
  css = '',
  onClick,
  icon: Icon,
  ...propsRest
}) {
  const cssList: any = React.useMemo(() => [dropdownButtonTheme, css], [
    dropdownButtonTheme,
    css,
  ])

  return (
    <Button css={cssList} {...propsRest} onClick={onClick}>
      {children}
      {Icon ? <Icon alt="dropdown" /> : <MenuDownIcon alt="dropdown" />}
    </Button>
  )
}

DropdownButton.displayName = 'DropdownButton'
