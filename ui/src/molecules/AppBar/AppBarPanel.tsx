import React, { FC } from 'react'

import { Base, useTheme } from '@redesign-system/ui-core'
import { AppBarPanelInterface } from './appBar.types'
import { appBarPanelTheme } from './appBar.theme'

export const AppBarPanel: FC<AppBarPanelInterface> = function AppBarPanel({
  className = '',
  children,
  css = '',
  smallAppBar,
  opened,
  ...propsRest
}: any) {
  const { theme } = useTheme()
  const classNames = `AppBarPanel ${className}`

  const cssList = [appBarPanelTheme, css]

  return smallAppBar ? (
    <Base
      hidden={!opened}
      theme={theme}
      css={cssList}
      className={classNames}
      opened={opened}
      {...propsRest}
    >
      {children}
    </Base>
  ) : null
}

AppBarPanel.displayName = 'AppBarPanel'
