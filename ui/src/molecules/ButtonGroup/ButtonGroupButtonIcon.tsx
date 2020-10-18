import React, { FC } from 'react'

import { ButtonIcon } from '../../molecules/ButtonIcon'
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

  const cssList: any = React.useMemo(() => [buttonGroupButtonIconTheme, css], [
    buttonGroupButtonIconTheme,
    css,
  ])

  return (
    <ButtonIcon className={classNames} css={cssList} {...propsRest}>
      {children}
    </ButtonIcon>
  )
}

ButtonGroupButtonIcon.displayName = 'ButtonGroupButtonIcon'
