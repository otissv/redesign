import React, { FC } from 'react'

import { Base, useTheme, isComponentDisabled } from '@redesign-system/ui-core'

import { CheckboxInterface } from './checkbox.types'
import { checkboxTheme } from './checkbox.theme'

export const Checkbox: FC<CheckboxInterface> = function Checkbox({
  appearance,
  as = 'div',
  checked,
  children,
  className = '',
  disabled,
  id,
  label,
  name,
  onChange,
  css = '',
  ...propsRest
}: CheckboxInterface) {
  const { theme } = useTheme()
  const classNames = `Checkbox ${className}`
  const cssList = [checkboxTheme, css]

  const isDisabled = React.useMemo(
    () =>
      isComponentDisabled({
        appearance,
        disabled,
      }),
    [appearance, disabled]
  )

  return (
    <Base
      as={as}
      appearance={appearance}
      className={classNames}
      theme={theme}
      css={cssList}
      {...propsRest}
    >
      <input
        checked={checked}
        className="CheckboxInput"
        disabled={isDisabled}
        id={id}
        name={name || id}
        onChange={onChange}
        type="checkbox"
        aria-label={label}
      />
      <div className="CheckboxBackground">
        <svg className="CheckboxCheckmark" viewBox="0 0 24 24">
          <path
            className="mdc-checkbox__checkmark-path"
            fill="none"
            stroke="white"
            d="M1.73,12.91 8.1,19.28 22.79,4.59"
          ></path>
        </svg>
      </div>
    </Base>
  )
}

Checkbox.displayName = 'Checkbox'
