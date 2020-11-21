import React, { FC } from 'react'
import { Base, useTheme } from '@redesign-system/ui-core'

import { AppBarSearchInterface } from './appBar.types'
import { Textbox } from '../Textbox'
import { appBarSearchTheme } from './appBar.theme'

export const AppBarSearch: FC<AppBarSearchInterface> = function AppBarSearch({
  as = 'div',
  className = '',
  css = '',
  placeholder = 'Search',
  onSearch,
  textbox,
  id,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `AppBarSearch ${className}`
  const cssList = [appBarSearchTheme, css]

  function handleOnChange(e: any) {
    const value = e.target.value
    onSearch && onSearch(e, { value })
  }

  return (
    <Base theme={theme} css={cssList} className={classNames} {...propsRest}>
      <Textbox
        id="appBar-search"
        label="search"
        placeholder={placeholder}
        {...textbox}
        onChange={handleOnChange}
      />
    </Base>
  )
}

AppBarSearch.displayName = 'AppBarSearch'
