import { ThemeComponentInterface, AppearanceBaseTypes } from '@redesign-system/theme'

export const LEFT = 'LEFT'
export const RIGHT = 'RIGHT'
export const CENTER = 'CENTER'
export const JUSTIFY = 'JUSTIFY'

export const LEAD = 'LEAD'
export const META = 'META'

export const CAPITALIZE = 'CAPITALIZE'
export const LOWERCASE = 'LOWERCASE'
export const UPPERCASE = 'UPPERCASE'

export const TOP = 'top'
export const MIDDLE = 'middle'
export const BOTTOM = 'bottom'

export type ModifyType = typeof LEAD | typeof META

export interface TypographyInterface extends ThemeComponentInterface {
  appearance?: AppearanceBaseTypes
  children?: React.ReactNode
  href?: string
  modify?: ModifyType
  role?: string
}
