import React, { FC } from 'react'

import { AppBarSearchInterface } from './appBar.types'
import { Textbox } from '../../atoms/Textbox'
import { appBarSearchTheme } from './appBar.theme'

export const AppBarSearch: FC<AppBarSearchInterface> = function AppBarSearch({
  className = '',
  css = '',
  placeholder = 'Search',
  onSearch,
  ...propsRest
}) {
  const classNames = `AppBar ${className}`

  const cssList: any = React.useMemo(() => [appBarSearchTheme, css], [
    appBarSearchTheme,
    css,
  ])

  function handleOnChange(e: any) {
    const value = e.target.value
    onSearch && onSearch(e, { value })
  }

  return (
    <div>
      <Textbox
        className={classNames}
        css={cssList}
        placeholder={placeholder}
        {...propsRest}
        onChange={handleOnChange}
      />
    </div>
  )
}

AppBarSearch.displayName = 'AppBarSearch'
