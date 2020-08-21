import React, { FC, useMemo } from 'react'

import { Base, useTheme, isComponentDisabled } from '@redesign/ui-core'

import { CheckboxInterface } from './checkbox.types'
import { checkboxTheme } from './checkbox.theme'

export const Checkbox: FC<CheckboxInterface> = function Checkbox({
  appearance,
  as = 'div',
  checked,
  className = '',
  disabled,
  id,
  name,
  onChange,
  css = '',
  ...propsRest
}: CheckboxInterface) {
  const { theme } = useTheme()
  const classNames = useMemo(() => `Checkbox ${className}`, [className])
  const cssList: any = useMemo(() => [checkboxTheme, css], [checkboxTheme, css])

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
        name={name}
        onChange={onChange}
        type="checkbox"
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
