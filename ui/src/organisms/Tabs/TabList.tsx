import React, { FC, useCallback } from 'react'

import { ButtonGroup } from '../../molecules/ButtonGroup'
import { tabsListTheme } from './tabs.theme'
import { TabsListInterface } from './tabs.types'
import { useTheme } from '@redesign-system/ui-core'

export const TabList: FC<TabsListInterface> = function TabList({
  active,
  as = 'div',
  children,
  className = '',
  css,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `TabList ${className}`
  const cssList = [tabsListTheme, css, 'overflow:hidden;']

  const handleOnWheel = useCallback(function handleOnWheel(e: any) {
    e.preventDefault()

    const tabList = e.currentTarget
    //TODO: not working
    tabList.scrollLeft = -e.nativeEvent.wheelDelta || -e.nativeEvent.detail
  }, [])

  return (
    <ButtonGroup
      as={as}
      className={classNames}
      onWheel={handleOnWheel}
      theme={theme}
      css={cssList}
      {...propsRest}
    >
      {children}
    </ButtonGroup>
  )
}

TabList.displayName = 'TabList'
