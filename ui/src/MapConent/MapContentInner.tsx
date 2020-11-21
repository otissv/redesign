import React, { FC } from 'react'
import { Base, useTheme } from '@redesign-system/ui-core'

import { MapContentInnerInterface } from './mapContent.types'
import { mapContentInnerTheme } from './mapContent.theme'

export const MapContentInner: FC<MapContentInnerInterface> = function MapContentInner({
  as = 'div',
  className = '',
  css = '',
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `MapContentInner ${className}`
  const cssList = [mapContentInnerTheme, css]

  return (
    <Base
      as={as}
      css={cssList}
      className={classNames}
      theme={theme}
      {...propsRest}
    />
  )
}
MapContentInner.displayName = 'MapContentInner'
