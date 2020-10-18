import { ThemeComponentInterface } from '@redesign/theme'

export interface ImageResponsiveInterface {
  alt: string
  height?: string
  width?: string
  size?: number
  src: string
}

export interface ImageInterface extends ThemeComponentInterface {
  children?: React.ReactNode
  alt: string
  height?: string
  width?: string
  widths?: number
  src: string
}
