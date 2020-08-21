import React, { FC, useCallback, useMemo } from 'react'

import { ButtonGroup, ButtonGroupProvider } from '../../molecules/ButtonGroup'
import { tabsListTheme } from './tabs.theme'
import { TabsListInterface } from './tabs.types'
import { useTheme } from '@redesign/ui-core'

export const TabList: FC<TabsListInterface> = function TabList({
  active,
  appearance,
  as = 'div',
  children,
  className = '',
  css,
  size,
  stacked,
  stretch,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = useMemo(() => `TabList ${className}`, [className])
  const cssList: any = useMemo(() => [tabsListTheme, css, 'overflow:hidden;'], [
    tabsListTheme,
    css,
  ])

  const handleOnWheel = useCallback(function handleOnWheel(e: any) {
    e.preventDefault()

    const tabList = e.currentTarget
    //TODO: not working
    tabList.scrollLeft = -e.nativeEvent.wheelDelta || -e.nativeEvent.detail
  }, [])

  return (
    <ButtonGroupProvider
      appearance={appearance}
      size={size}
      stacked={stacked}
      stretch={stretch}
    >
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
    </ButtonGroupProvider>
  )
}

TabList.displayName = 'TabList'
