import React, { FC, useMemo } from 'react'

import { useTabs } from './TabContext'
import { tabsPanelTheme } from './tabs.theme'

import { TabPanelInterface } from './tabs.types'
import { Base, useTheme } from '@redesign/ui-core'

export const TabPanel: FC<TabPanelInterface> = function TabPanel({
  as = 'div',
  css = '',
  children,
  className = '',
  id,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = useMemo(() => `TabPanel ${className}`, [className])

  const { active } = useTabs()

  const getActiveStyle = useMemo(
    () => (active === id ? 'display: block;' : 'display: none;'),
    [active, id]
  )

  const cssList: any = useMemo(() => [tabsPanelTheme, css], [
    tabsPanelTheme,
    getActiveStyle,
    css,
  ])

  return active === `${id},tab` ? (
    <Base className={classNames} theme={theme} css={cssList} {...propsRest}>
      {children}
    </Base>
  ) : null
}

TabPanel.displayName = 'TabPanel'
