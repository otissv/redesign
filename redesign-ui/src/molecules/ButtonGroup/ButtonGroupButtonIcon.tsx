import React, { FC, useMemo } from 'react'
import { ACTIVE } from '@redesign/theme'

import { ButtonIcon } from '../../molecules/ButtonIcon'
import { useButtonGroup } from './ButtonGroupContext'
import { ButtonGroupButtonIconInterface } from './buttonGroup.types'

export const ButtonGroupButtonIcon: FC<ButtonGroupButtonIconInterface> = function ButtonGroupButton({
  children,
  className = '',
  css = '',
  active,
  ...propsRest
}) {
  const buttonGroup: any = useButtonGroup()
  const classNames = useMemo(() => `ButtonGroupButtonIcon ${className || ''}`, [
    className,
  ])

  return (
    <ButtonIcon
      className={classNames}
      {...buttonGroup}
      css={css}
      {...propsRest}
      appearance={active ? ACTIVE : buttonGroup.appearance}
    >
      {children}
    </ButtonIcon>
  )
}

ButtonGroupButtonIcon.displayName = 'ButtonGroupButtonIcon'
