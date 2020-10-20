import { ThemeComponentInterface } from '@redesign-system/theme'

export interface GoogleMapsInterface extends ThemeComponentInterface {
  children?: React.ReactNode
  location?: string
  height?: string
  width?: string
}
