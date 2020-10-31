import {
  ThemeComponentInterface,
  AppearanceBaseTypes,
} from '@redesign-system/theme'

export const LEAD = 'LEAD'
export const META = 'META'

export type ModifyType = typeof LEAD | typeof META

export interface TypographyInterface extends ThemeComponentInterface {
  appearance?: AppearanceBaseTypes
  children?: React.ReactNode
  href?: string
  modify?: ModifyType
  role?: string
}
