import { ThemeComponentInterface } from '@redesign/theme'

export type PreloadType = 'none' | 'metadata' | 'auto'

export interface VideoInterface extends ThemeComponentInterface {
  allowFullScreen?: boolean
  autoplay?: boolean
  controls?: boolean
  embeded?: boolean
  height?: string
  intrinsicsize?: string
  inview?: boolean
  loop?: boolean
  muted?: boolean
  playsinline?: boolean
  preload?: PreloadType
  src?: string
  width?: string
}
