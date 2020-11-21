import React, { FC } from 'react'
import { Base, useTheme } from '@redesign-system/ui-core'

import { AppBarInterface } from './appBar.types'
import { appBarTheme, appBarAppearanceTheme } from './appBar.theme'
import { AppBarPanel } from './AppBarPanel'
import { AppBarContent } from './AppBarContent'

export const AppBar: FC<AppBarInterface> = function AppBar({
  as = 'div',
  children,
  className = '',
  css = '',
  opened,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `AppBar ${className}`
  const cssList = [appBarTheme, appBarAppearanceTheme, css]

  const childrenArray = React.Children.toArray(children)
  const components =
    children &&
    childrenArray.reduce(
      (acc: any, component: any) => {
        switch (component.type?.displayName) {
          case 'AppBarBrand':
            return {
              ...acc,
              brand: [...acc.brand, component],
            }
          case 'AppNav':
            return {
              ...acc,
              appNav: [...acc.appNav, component],
            }

          case 'AppBarFooter':
            return {
              ...acc,
              footer: [...acc.footer, component],
            }
          case 'AppBarSearch':
            return {
              ...acc,
              search: [...acc.search, component],
            }
          case 'AppBarTrigger':
            return {
              ...acc,
              trigger: [...acc.trigger, component],
            }
          default:
            return {
              ...acc,
              content: [...acc.content, component],
            }
        }
      },
      {
        brand: [],
        appNav: [],
        content: [],
        footer: [],
        search: [],
        trigger: [],
      }
    )

  return (
    <Base
      as={as}
      className={classNames}
      theme={theme}
      css={cssList}
      aria-orientation="horizontal"
      {...propsRest}
    >
      {components.trigger}
      {components.brand[0]}

      <AppBarContent>
        {components.appNav}
        {components.content}
        {components.search[0]}
      </AppBarContent>

      <AppBarPanel opened={opened}>
        {components.search[0]}

        {components.appNav}
        {components.content}
        {components.footer}
      </AppBarPanel>
    </Base>
  )
}

AppBar.displayName = 'AppBar'
