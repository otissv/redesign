export type FontLetterSpacingType = string
export interface FontLineHeightInterface {
  0: 0
  1: number
  2: number
  3: number
  4: number
  5: number
  default: number
}

export type FontSizeType = {
  0: string
  1: string
  2: string
  3: string
  4: string
  5: string
  6: string
  7: string
  8: string
  9: string
  10: string
  11: string
  12: string
  13: string
  14: string
  15: string
  16: string
  default: string
  base: string
}
export type FontSmoothType = string
export type FontWeightType = {
  1: number
  2: number
  3: number
  4: number
  5: number
  6: number
  default: number
}

export interface FontFamilyInterface {
  sans: string
  serif: string
  mono: string
}

export type FontFamilyTypes = 'sans' | 'serif' | 'mono' | string
export type FontVariantNumericTypes =
  | 'normal'
  | 'ordinal'
  | 'slashed-zero'
  | 'lining-nums'
  | 'oldstyle-nums'
  | 'proportional-nums'
  | 'tabular-nums'
  | 'diagonal-fractions'
  | 'stacked-fractions'
  | string

export interface FontInterface {
  base: number
  family: FontFamilyInterface
  color: string
  colorInvert: string
  letterSpacing: FontLetterSpacingType
  lineHeight: FontLineHeightInterface

  size: FontSizeType
  smooth: FontSmoothType
  weight: FontWeightType
}

export interface PartialFontInterface extends Partial<FontInterface> {}
