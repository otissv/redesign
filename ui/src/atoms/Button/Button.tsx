import React, { FC } from 'react'

import { Base, useTheme, isComponentDisabled } from '@redesign-system/ui-core'
import { ButtonInterface } from './button.types'

import {
  buttonTheme,
  buttonSizeTheme,
  buttonStretchTheme,
  buttonAppearanceTheme,
} from './button.theme'
import { noop } from '@redesign-system/theme'

export const Button: FC<ButtonInterface> = function Button({
  appearance,
  as = 'button',
  children,
  className = '',
  disabled,
  onClick = noop,
  css = '',
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `Button ${className}`
  const cssList = [
    buttonTheme,
    buttonAppearanceTheme,
    buttonSizeTheme,
    buttonStretchTheme,
    css,
  ]

  const handleOnClick = React.useCallback(
    function handleOnClick(e: any) {
      e.preventDefault()

      onClick(e)
    },
    [onClick]
  )

  const isDisabled = React.useMemo(
    () =>
      isComponentDisabled({
        appearance,
        disabled,
      }),
    [appearance, disabled, isComponentDisabled]
  )

  return (
    <Base
      appearance={appearance}
      as={as}
      className={classNames}
      disabled={isDisabled}
      onClick={handleOnClick}
      role="button"
      tabIndex={0}
      theme={theme}
      css={cssList}
      __ignore="stretch"
      {...propsRest}
    >
      {children}
    </Base>
  )
}

Button.displayName = 'Button'
