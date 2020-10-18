export type FontLetterSpacingType = string
export interface FontLineHeightInterface {
  1: number
  2: number
  3: number
  4: number
  5: number
  default: number
}
export type FontSansType = string
export type FontSerifType = string
export type FontSizeType = {
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
export interface FontInterface {
  base: number
  code: string
  color: string
  colorInvert: string
  letterSpacing: FontLetterSpacingType
  lineHeight: FontLineHeightInterface
  sans: FontSansType
  serif: FontSerifType
  size: FontSizeType
  smooth: FontSmoothType
  weight: FontWeightType
}

export interface PartialFontInterface extends Partial<FontInterface> {}
