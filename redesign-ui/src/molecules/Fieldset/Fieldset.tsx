import React, { FC, useMemo } from 'react'

import { Base, useTheme } from '@redesign/ui-core'

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
  const classNames = useMemo(() => `Fieldset ${className}`, [className])
  const cssList: any = useMemo(() => [fieldsetTheme, css], [fieldsetTheme, css])

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
