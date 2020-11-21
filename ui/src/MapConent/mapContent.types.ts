import { ThemeComponentInterface, UnitInterface } from '@redesign-system/theme'
import { GoogleMapsInterface } from '../GoogleMaps'

export interface MapContentInterface extends ThemeComponentInterface {
  children?: React.ReactNode
  googleMaps?: GoogleMapsInterface
  location?: string
  mapContentInner?: MapContentInnerInterface
  w?: UnitInterface | string
  h?: UnitInterface | string
}

export interface MapContentInnerInterface extends ThemeComponentInterface {}
