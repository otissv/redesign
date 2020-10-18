import React, { FC, useMemo } from 'react'

import { CloseInterface } from './close.types'
import { Base, useTheme } from '@redesign/ui-core'
import { closeTheme } from './close.theme'

export const Close: FC<CloseInterface> = function Close({
  as = 'div',
  onClose,
  className = '',
  css = '',
  onClick,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `Close ${className}`
  const cssList: any = useMemo(() => [closeTheme, css], [closeTheme, css])

  //TODO: add appearance theme

  return (
    <Base
      as={as}
      css={cssList}
      className={classNames}
      theme={theme}
      onClick={onClick}
      {...propsRest}
      tabIndex="0"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line fill="none" strokeWidth="1.1" x1="1" y1="1" x2="13" y2="13" />
        <line fill="none" strokeWidth="1.1" x1="13" y1="1" x2="1" y2="13" />
      </svg>
    </Base>
  )
}

Close.displayName = 'Close'
