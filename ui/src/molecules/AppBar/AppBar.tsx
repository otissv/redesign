import React, { FC, Fragment } from 'react'
import { Base, useTheme } from '@redesign-system/ui-core'

import { AppBarInterface } from './appBar.types'
import { appBarTheme, appBarAppearanceTheme } from './appBar.theme'
import { AppBarPanel } from './AppBarPanel'

import { useViewport } from '../../hooks'

export function useAppBar(
  {
    show = false,
    smallAppBarWidth = 768,
  }: {
    show: boolean
    smallAppBarWidth: number
  } = {
    show: false,
    smallAppBarWidth: 768,
  }
) {
  const { theme } = useTheme()
  const [opened, setOpened] = React.useState(show)
  const { breakpoint } = useViewport(theme)

  const onOpenedClick = () => {
    setOpened(!opened)
  }

  return {
    onOpenedClick,
    opened,
    smallAppBar: breakpoint <= smallAppBarWidth,
  }
}

export const AppBar: FC<AppBarInterface> = function AppBar({
  as = 'div',
  children,
  className = '',
  css = '',
  smallAppBar,
  opened,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `AppBar ${className}`
  const cssList = [appBarTheme, appBarAppearanceTheme, css]

  const components =
    smallAppBar &&
    children &&
    React.Children.toArray(children).reduce(
      (acc: any, component: any) => {
        switch (component.type?.displayName) {
          case 'AppBarBrand':
            return {
              ...acc,
              brand: [...acc.brand, component],
            }
          case 'AppBarButtonGroup':
            return {
              ...acc,
              buttonGroup: [...acc.buttonGroup, component],
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
        buttonGroup: [],
        content: [],
        footer: [],
        search: [],
        trigger: [],
      }
    )

  return (
    <Fragment>
      <Base
        as={as}
        className={classNames}
        theme={theme}
        css={cssList}
        aria-orientation="horizontal"
        {...propsRest}
      >
        {!smallAppBar && children}

        {smallAppBar && components.trigger[0]}
        {smallAppBar && components.brand[0]}
      </Base>

      <AppBarPanel smallAppBar={smallAppBar} opened={opened}>
        {smallAppBar && components.search[0]}

        {smallAppBar && components.buttonGroup}
        {smallAppBar && components.content}
        {smallAppBar && components.footer}
      </AppBarPanel>
    </Fragment>
  )
}

AppBar.displayName = 'AppBar'
