import { ThemeComponentInterface } from '@redesign/theme'

export interface MediaInterface extends ThemeComponentInterface {
  caption: string | MediaCaptionInterface
  figure: any
}

export interface MediaCaptionInterface extends ThemeComponentInterface {
  children?: React.ReactNode
  [key: string]: any
}
