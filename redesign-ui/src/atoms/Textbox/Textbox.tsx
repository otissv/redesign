import React, { FC, useMemo } from 'react'

import { Base, useTheme, isComponentDisabled } from '@redesign/ui-core'

import {
  textboxTheme,
  textboxAppearanceTheme,
  textboxSizeTheme,
  textboxWidthsTheme,
} from './textbox.theme'
import { TextboxInterface } from './textbox.types'

export const Textbox: FC<TextboxInterface> = function Textbox({
  appearance,
  as = 'input',
  children,
  className = '',
  css = '',
  disabled,
  id,
  onChange,
  placeholder = undefined,
  required,
  size = undefined,
  invalid = true,
  widths = undefined,
  value,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = useMemo(() => `Textbox ${className}`, [className])
  const cssList: any = useMemo(
    () => [
      textboxTheme,
      textboxAppearanceTheme,
      textboxSizeTheme,
      textboxWidthsTheme,
      css,
    ],
    [
      textboxTheme,
      textboxAppearanceTheme,
      textboxSizeTheme,
      textboxWidthsTheme,
      css,
    ]
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
      aria-invalid={invalid}
      as={as}
      className={classNames}
      disabled={isDisabled}
      onChange={onChange}
      placeholder={placeholder}
      size={size}
      theme={theme}
      css={cssList}
      widths={widths}
      name={id}
      id={id}
      invalid={invalid}
      required={required}
      value={value}
      __ignore="invalid"
      {...propsRest}
    >
      {children}
    </Base>
  )
}

Textbox.displayName = 'Textbox'
