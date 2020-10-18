import { ThemeComponentInterface } from '@redesign/theme'

export interface GoogleMapsInterface extends ThemeComponentInterface {
  children?: React.ReactNode
  location?: string
  height?: string
  width?: string
}
