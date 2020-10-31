import {
  ThemeComponentInterface,
  AppearanceBaseTypes,
} from '@redesign-system/theme'

export interface IconInterface extends ThemeComponentInterface {
  alt?: string
  appearance?: AppearanceBaseTypes
  height?: string
  hoverColor?: string
  viewBox?: string
  width?: string
  title?: string
  fill?: string | 'currentColor'
  stroke?: string | 'currentColor'
  strokeWidth?: number
}
