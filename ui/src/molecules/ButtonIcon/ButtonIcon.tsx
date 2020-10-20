import React, { FC } from 'react'

import { buttonIconTheme } from './buttonIcon.theme'
import { Button } from '../../atoms/Button'
import { ButtonIconInterface } from './buttonIcon.types'

export const ButtonIcon: FC<ButtonIconInterface> = function ButtonIcon({
  alt,
  children,
  className = '',
  icon,
  iconProps,
  onClick,
  css = '',
  viewBox = '0 0 24 24',
  ...propsRest
}) {
  const classNames = `ButtonIcon ${className}`
  const cssList = [buttonIconTheme, css]

  const Component: any = icon

  return (
    <Button
      className={classNames}
      onClick={onClick}
      css={cssList}
      viewBox={viewBox}
      {...propsRest}
    >
      <Component alt={alt} {...iconProps} />
      {children ? <span className="ButtonIconContent">{children}</span> : null}
    </Button>
  )
}

ButtonIcon.displayName = 'ButtonIcon'
