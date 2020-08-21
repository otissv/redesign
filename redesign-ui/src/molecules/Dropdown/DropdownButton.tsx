import React, { FC, useMemo } from 'react'

import { DropdownButtonInterface, SET_DROPDOWN_OPENED } from './dropdown.types'
import { Button } from '../../atoms/Button'
import { MenuDownIcon } from '@redesign/material-icons'
import { useDropdown } from './DropdownContext'
import { dropdownButtonTheme } from './dropdown.theme'

export const DropdownButton: FC<DropdownButtonInterface> = function DropdownButton({
  children,
  css = '',
  ...propsRest
}) {
  const {
    state: { opened },
    dispatch,
  } = useDropdown()

  const cssList: any = useMemo(() => [dropdownButtonTheme, css], [
    dropdownButtonTheme,
    css,
  ])

  function handleClick(_e: any) {
    dispatch({
      type: SET_DROPDOWN_OPENED,
      payload: !opened,
    })
  }

  return (
    <Button css={cssList} {...propsRest} onClick={handleClick}>
      {children}
      <MenuDownIcon alt="dropdown" />
    </Button>
  )
}

DropdownButton.displayName = 'DropdownButton'
