import React, { FC, useMemo } from 'react'

import { Base, useTheme, isComponentDisabled } from '@redesign/ui-core'

import { RadioInterface } from './radio.types'
import { radioTheme, radioContainerTheme } from './radio.theme'

export const Radio: FC<RadioInterface> = function Radio({
  appearance,
  as = 'div',
  checked,
  className = '',
  disabled,
  id,
  label,
  onChange,
  css = '',
  ...propsRest
}: RadioInterface) {
  const { theme } = useTheme()
  const classNames = useMemo(() => `Radio ${className}`, [className])
  const cssList: any = useMemo(() => [radioTheme, css], [radioTheme, css])
  const radioContainerCssList: any = useMemo(() => [radioContainerTheme, css], [
    radioContainerTheme,
    css,
  ])

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
      theme={theme}
      className={classNames}
      css={cssList}
      {...propsRest}
    >
      <Base
        theme={theme}
        className="RadioContainer"
        css={radioContainerCssList}
        appearance={appearance}
      >
        <input
          className="RadioInput"
          disabled={isDisabled}
          id={id}
          name={id}
          onChange={onChange}
          type="radio"
        />
        <div className="RadioBackground">
          <div className="RadioInnerCircle"></div>
          <div className="RadioOuterCircle"></div>
        </div>
      </Base>
      {label ? <label htmlFor={id}>{label}</label> : null}
    </Base>
  )
}

Radio.displayName = 'Radio'
