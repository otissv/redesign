import { ThemeComponentInterface } from '@redesign-system/theme'

import { CaptionInterface } from '../Caption'
import { OverlayInterface } from '../Overlay'

type colorType = string

export interface CoverImageInterface extends ThemeComponentInterface {
  children?: React.ReactNode
  cover?: boolean
  height?: string
  overlay?: colorType | OverlayInterface
  parallax?: boolean
  position?: string
  repeat?: boolean
  src?: string
  width?: string
  caption?: string | CaptionInterface
  content?: CoverImageContentInterface
}

export interface CoverImageContentInterface extends ThemeComponentInterface {
  children?: React.ReactNode
}
