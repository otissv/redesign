import { ThemeComponentInterface } from '@redesign-system/theme'
import { HeadingInterface } from 'molecules/Heading'

export interface HeaderInterface extends ThemeComponentInterface {
  children?: React.ReactNode
  backgroundImageUrl?: string
  image?: HeaderImageInterface
  headerHeight?: string
  overlay?: string
  heading?: string | HeadingInterface
}

export interface HeaderImageInterface {
  alt: string
  height?: string
  width?: string
  size?: number
  src: string
}
