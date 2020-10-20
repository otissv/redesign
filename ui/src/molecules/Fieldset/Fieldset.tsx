import React, { FC } from 'react'

import { Base, useTheme } from '@redesign-system/ui-core'

import { FieldsetInterface } from './fieldset.types'
import { fieldsetTheme } from './fieldset.theme'
import { Legend } from '../../atoms/Legend'

export const Fieldset: FC<FieldsetInterface> = function Fieldset({
  as = 'fieldset',
  children,
  className = '',
  css = '',
  legend,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `Fieldset ${className}`
  const cssList = [fieldsetTheme, css]

  return (
    <Base
      as={as}
      className={classNames}
      theme={theme}
      css={cssList}
      {...propsRest}
    >
      {
        (legend =
          typeof legend === 'string' ? (
            <Legend>{legend}</Legend>
          ) : (
            <Legend {...legend} />
          ))
      }
      {children}
    </Base>
  )
}

Fieldset.displayName = 'Fieldset'
