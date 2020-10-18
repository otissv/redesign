import React, { useMemo } from 'react'

import { Base, useTheme } from '@redesign/ui-core'

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
  ...propsRest
}: GoogleMapsInterface) {
  const { theme } = useTheme()
  const classNames = `GoogleMaps ${className}}`
  const cssList: any = useMemo(() => [googleMapsTheme, css], [
    googleMapsTheme,
    css,
  ])
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
          width={width}
          height={height}
          id="gmap_canvas"
          src={`https://maps.google.com/maps?q=${query}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
        />
      </div>
    </Base>
  )
})

export default GoogleMaps
