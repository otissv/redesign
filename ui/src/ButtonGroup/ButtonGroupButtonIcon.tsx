import React, { FC } from 'react'

import { ButtonIcon } from '../ButtonIcon'
import { ButtonGroupButtonIconInterface } from './buttonGroup.types'
import { buttonGroupButtonIconTheme } from './buttonGroup.theme'

export const ButtonGroupButtonIcon: FC<ButtonGroupButtonIconInterface> = function ButtonGroupButton({
  children,
  className = '',
  css = '',
  active,
  ...propsRest
}) {
  const classNames = `ButtonGroupButtonIcon ${className || ''}`

  const cssList = [buttonGroupButtonIconTheme, css]

  return (
    <ButtonIcon className={classNames} css={cssList} {...propsRest}>
      {children}
    </ButtonIcon>
  )
}

ButtonGroupButtonIcon.displayName = 'ButtonGroupButtonIcon'
