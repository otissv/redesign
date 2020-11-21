import React, { FC } from 'react'
import { Base, useTheme } from '@redesign-system/ui-core'

import { MapContentInterface } from './mapContent.types'
import { MapContentInner } from './MapContentInner'
import { mapContentTheme } from './mapContent.theme'

import { GoogleMaps } from '../GoogleMaps'

export const MapContent: FC<MapContentInterface> = function MapContent({
  as = 'div',
  children,
  className = '',
  googleMaps,
  css = '',
  mapContentInner,
  h,
  w,
  location,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `MapContent ${className}`
  const cssList = [mapContentTheme, css]

  return (
    <Base
      as={as}
      css={cssList}
      className={classNames}
      theme={theme}
      h={h}
      w={w}
      {...propsRest}
    >
      <GoogleMaps fl="1" location={location} {...googleMaps} />

      <MapContentInner
        as={as}
        className={classNames}
        theme={theme}
        {...propsRest}
        {...mapContentInner}
      >
        {children}
      </MapContentInner>
    </Base>
  )
}
MapContent.displayName = 'MapContent'
