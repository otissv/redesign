import React, { FC, useMemo } from 'react'

import { Base, useTheme } from '@redesign/ui-core'

import { LegendInterface } from '././legend.types'
import { legendTheme } from '././legend.theme'

export const Legend: FC<LegendInterface> = function Legend({
  as = 'legend',
  className = '',
  css = '',
  children,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = useMemo(() => `Fieldset ${className}`, [className])
  const cssList: any = useMemo(() => [legendTheme, css], [legendTheme, css])

  return (
    <Base
      as={as}
      className={classNames}
      theme={theme}
      css={cssList}
      {...propsRest}
    >
      {children}
    </Base>
  )
}

Legend.displayName = 'Legend'
