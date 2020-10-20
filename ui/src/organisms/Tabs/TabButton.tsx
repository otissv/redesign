import React, { FC } from 'react'

import { tabsButtonTheme } from './tabs.theme'
import { ButtonGroupButton } from '../../molecules/ButtonGroup'
import { useTheme } from '@redesign-system/ui-core'
import { TabButtonInterface } from './tabs.types'

export const TabButton: FC<TabButtonInterface> = function TabButton({
  as = 'button',
  children,
  className = '',
  css = '',
  id,
  onClick,
  stacked = false,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `TabButton ${className}`
  const cssList = [tabsButtonTheme, css]

  return (
    <ButtonGroupButton
      as={as}
      className={classNames}
      theme={theme}
      css={cssList}
      onClick={onClick}
      stacked={stacked}
      id={id}
      {...propsRest}
    >
      {children}
    </ButtonGroupButton>
  )
}

TabButton.displayName = 'TabButton'
