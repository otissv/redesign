import React, { FC, useMemo } from 'react'

import { Button } from '../../atoms/Button'
import { ButtonGroupButtonInterface } from './buttonGroup.types'
import { buttonGroupButtonTheme } from './buttonGroup.theme'

export const ButtonGroupButton: FC<ButtonGroupButtonInterface> = function ButtonGroupButton({
  children,
  className = '',
  css = '',
  active,
  ...propsRest
}) {
  const classNames = `ButtonGroupButton ${className || ''}`

  const cssList: any = useMemo(() => [buttonGroupButtonTheme, css], [
    buttonGroupButtonTheme,
    css,
  ])

  return (
    <Button className={classNames} css={cssList} {...propsRest} active={active}>
      {children}
    </Button>
  )
}

ButtonGroupButton.displayName = 'ButtonGroupButton'
