import React, { FC } from 'react'

import { Base, useTheme, isComponentDisabled } from '@redesign-system/ui-core'

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
  invalid = true,
  label,
  name,
  onChange,
  placeholder = undefined,
  required,
  size = undefined,
  value,
  widths = undefined,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `Textbox ${className}`
  const cssList: any = React.useMemo(
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
      name={name || id}
      id={id}
      invalid={invalid}
      required={required}
      value={value}
      aria-label={label}
      __ignore="invalid"
      {...propsRest}
    >
      {children}
    </Base>
  )
}

Textbox.displayName = 'Textbox'
