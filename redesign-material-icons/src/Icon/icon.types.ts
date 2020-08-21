import { ThemeComponentInterface, AppearanceBaseTypes } from '@redesign/theme'

export interface IconInterface extends ThemeComponentInterface {
  alt?: string
  appearance?: AppearanceBaseTypes
  height?: string
  hoverColor?: string
  viewBox?: string
  width?: string
  title?: string
}
