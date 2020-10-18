import React, { FC } from 'react'

import { Base, useTheme, isComponentDisabled } from '@redesign/ui-core'

import { ToggleInterface } from './toggle.types'
import { toggleTheme } from './toggle.theme'

export const Toggle: FC<ToggleInterface> = function Toggle({
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
}: ToggleInterface) {
  const { theme } = useTheme()
  const classNames = `Toggle ${className}`
  const cssList: any = React.useMemo(() => [toggleTheme, css], [
    toggleTheme,
    css,
  ])

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
      as={as}
      appearance={appearance}
      className={classNames}
      theme={theme}
      css={cssList}
      {...propsRest}
    >
      <input
        checked={checked}
        className="ToggleInput"
        disabled={isDisabled}
        id={id}
        name={name || id}
        onChange={onChange}
        type="checkbox"
        aria-label={label}
      />
      <div className="ToggleChecked">{children[0]}</div>
      <div className="ToggleUnchecked">{children[1]}</div>
    </Base>
  )
}

Toggle.displayName = 'Toggle'
