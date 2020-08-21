import React, { FC, useMemo } from 'react'

import { tabsTheme } from './tabs.theme'
import { TabsInterface } from './tabs.types'
import { Base, useTheme } from '@redesign/ui-core'

export const Tabs: FC<TabsInterface> = function Tabs({
  as = 'div',
  children,
  className = '',
  css = '',
  height,
  width,
  ...propsRest
}) {
  const { theme } = useTheme()

  const classNames = useMemo(() => `Tabs ${className}`, [className])
  const cssList: any = useMemo(() => [tabsTheme, css], [tabsTheme, css])

  return (
    <Base
      as={as}
      className={classNames}
      css={cssList}
      theme={theme}
      {...propsRest}
      __ignore="align"
    >
      {children}
    </Base>
  )
}

Tabs.displayName = 'Tabs'
