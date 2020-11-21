import React from 'react'
import cuid from 'cuid'
import { Base, useTheme } from '@redesign-system/ui-core'

import { GoogleMapsInterface } from './googleMaps.types'
import { googleMapsTheme } from './googleMaps.theme'

export const GoogleMaps = React.memo(function GoogleMaps({
  as = 'div',
  children,
  className = '',
  css = '',
  location,
  themed = [],
  height = '300',
  width = '100%',
  zoom,
  ...propsRest
}: GoogleMapsInterface) {
  const { theme } = useTheme()
  const classNames = `GoogleMaps ${className}}`
  const cssList = [googleMapsTheme, css]
  const query = encodeURIComponent(location as string)

  return (
    <Base
      as={as}
      className={classNames}
      theme={theme}
      css={cssList}
      width={width}
      height={height}
      {...propsRest}
    >
      <div className="gmap_canvas">
        <iframe
          title={cuid()}
          width={width}
          height={height}
          id="gmap_canvas"
          src={`https://maps.google.com/maps?q=${query}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
        />
      </div>
    </Base>
  )
})

GoogleMaps.displayName = 'GoogleMaps'
