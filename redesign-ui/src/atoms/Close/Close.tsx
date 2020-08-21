import React, { FC, useCallback } from 'react'

import { CloseInterface } from './close.types'
import { Base, useTheme } from '@redesign/ui-core'

export const Close: FC<CloseInterface> = function Close({
  onClose,
  ...propsRest
}) {
  const { theme } = useTheme()
  const handleOnClose = useCallback(function handleOnClose(e: any) {
    e.preventDefault()
    onClose(e)
  }, [])

  //TODO: add appearance theme

  return (
    <Base theme={theme} onClick={handleOnClose} {...propsRest}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          fill="none"
          stroke="#000"
          strokeWidth="1.1"
          x1="1"
          y1="1"
          x2="13"
          y2="13"
        />
        <line
          fill="none"
          stroke="#000"
          strokeWidth="1.1"
          x1="13"
          y1="1"
          x2="1"
          y2="13"
        />
      </svg>
    </Base>
  )
}

Close.displayName = 'Close'
