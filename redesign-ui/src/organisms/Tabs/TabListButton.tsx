import React, { FC, useCallback, useMemo } from 'react'
import { ACTIVE, PRIMARY } from '@redesign/theme'

import { tabsListButtonTheme } from './tabs.theme'
import { ButtonGroupButton } from '../../molecules/ButtonGroup'
import { useTabs } from './TabContext'
import { useTheme } from '@redesign/ui-core'
import { TabListButtonInterface, SET_TAB_ACTIVE } from './tabs.types'

export const TabListButton: FC<TabListButtonInterface> = function TabListButton({
  appearance = PRIMARY,
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
  const classNames = useMemo(() => `TabListButton ${className}`, [className])
  const cssList: any = useMemo(() => [tabsListButtonTheme, css], [
    tabsListButtonTheme,
    css,
  ])
  const { active, dispatch } = useTabs()

  const handleClick = useCallback(
    function handleClick(e: React.MouseEvent<HTMLElement>) {
      e.preventDefault()
      const id = e.currentTarget.id

      dispatch &&
        dispatch({
          type: SET_TAB_ACTIVE,
          active: id,
        })

      onClick && onClick(e)
    },
    [dispatch]
  )

  const getActiveAppearance = useMemo(
    () => (active === id ? ACTIVE : appearance),
    [active, appearance, id]
  )

  return (
    <ButtonGroupButton
      as={as}
      className={classNames}
      theme={theme}
      css={cssList}
      onClick={handleClick}
      appearance={getActiveAppearance}
      stacked={stacked}
      id={`${id},tab`}
      {...propsRest}
    >
      {children}
    </ButtonGroupButton>
  )
}

TabListButton.displayName = 'TabListButton'
