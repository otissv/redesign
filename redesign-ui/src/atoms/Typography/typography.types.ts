import { ThemeComponentInterface, AppearanceBaseTypes } from '@redesign/theme'

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

export const TRUNCATE = 'TRUNCATE'
export const BREAK = 'BREAK'
export const NOWRAP = 'NOWRAP'

export type ModifyType = typeof LEAD | typeof META

export type TextAlignType =
  | typeof LEFT
  | typeof RIGHT
  | typeof CENTER
  | typeof JUSTIFY

export type TextTransformType =
  | typeof CAPITALIZE
  | typeof LOWERCASE
  | typeof UPPERCASE

export type TextVerticalType = typeof TOP | typeof MIDDLE | typeof BOTTOM

export type TextWrapType = typeof TRUNCATE | typeof BREAK | typeof NOWRAP

export interface TypographyInterface extends ThemeComponentInterface {
  children?: React.ReactNode
  appearance?: AppearanceBaseTypes
  href?: string
  modify?: ModifyType
  textAlign?: TextAlignType
  textTransform?: TextTransformType
  textWrap?: TextWrapType
  textVertical?: TextVerticalType
}
