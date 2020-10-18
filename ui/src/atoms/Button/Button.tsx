import React, { FC, useCallback, useMemo } from 'react'

import { Base, useTheme, isComponentDisabled } from '@redesign/ui-core'
import { ButtonInterface } from './button.types'

import {
  buttonTheme,
  buttonSizeTheme,
  buttonStretchTheme,
  buttonAppearanceTheme,
} from './button.theme'
import { noop } from '@redesign/theme'

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
  const cssList: any = useMemo(
    () => [
      buttonTheme,
      buttonAppearanceTheme,
      buttonSizeTheme,
      buttonStretchTheme,
      css,
    ],
    [
      buttonTheme,
      buttonAppearanceTheme,
      buttonSizeTheme,
      buttonStretchTheme,
      css,
    ]
  )

  const handleOnClick = useCallback(
    function handleOnClick(e: any) {
      e.preventDefault()

      onClick(e)
    },
    [onClick]
  )

  const isDisabled = useMemo(
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
