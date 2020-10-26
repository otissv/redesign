import { isFunction } from '@redesign-system/theme'

import { GoogleMapsInterface } from './googleMaps.types'

export function googleMapsTheme(props: GoogleMapsInterface) {
  const {
    height,
    width,
    theme: { GoogleMaps },
  } = props
  return {
    position: 'relative',
    textAlign: 'right',
    height: width,
    width: height,

    '.gmap_canvas': {
      overflow: 'hidden',
      background: 'none !important',
      height: 'inherit',
      width: 'inherit',
    },

    ...(isFunction(GoogleMaps)
      ? GoogleMaps(props)?.default
      : GoogleMaps?.default),
  }
}
