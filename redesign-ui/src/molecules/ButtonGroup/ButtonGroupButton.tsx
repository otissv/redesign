import React, { FC, useMemo } from 'react'
import { ACTIVE } from '@redesign/theme'

import { Button } from '../../atoms/Button'
import { useButtonGroup } from './ButtonGroupContext'
import { ButtonGroupButtonInterface } from './buttonGroup.types'

export const ButtonGroupButton: FC<ButtonGroupButtonInterface> = function ButtonGroupButton({
  children,
  className = '',
  css = '',
  active,
  ...propsRest
}) {
  const buttonGroup: any = useButtonGroup()
  const classNames = useMemo(() => `ButtonGroupButton ${className || ''}`, [
    className,
  ])

  return (
    <Button
      className={classNames}
      {...buttonGroup}
      css={css}
      {...propsRest}
      appearance={active ? ACTIVE : buttonGroup.appearance}
    >
      {children}
    </Button>
  )
}

ButtonGroupButton.displayName = 'ButtonGroupButton'
