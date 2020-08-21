import { ThemeComponentInterface } from '@redesign/theme'

export interface ImgResponsiveInterface {
  alt: string
  height?: string
  width?: string
  size?: number
  src: string
}

export interface ImgInterface extends ThemeComponentInterface {
  children?: React.ReactNode
  alt: string
  height?: string
  width?: string
  widths?: number
  src: string
}
