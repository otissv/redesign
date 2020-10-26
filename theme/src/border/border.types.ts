export const BORDER_NONE = 'none'
export const BORDER_STYLE = 'solid'
export const BORDER_DASH = 'dashed'
export const BORDER_THICK_WIDTH = '2px'
export const BORDER_THICK_COLOR = 'grey_700'
export const BORDER_THIN_WIDTH = '1px'
export const BORDER_THIN_COLOR = 'grey_700'

export interface BorderInterface {
  none: typeof BORDER_NONE | string
  style: typeof BORDER_STYLE | string
  dash: typeof BORDER_DASH | string
  thickWidth: typeof BORDER_THICK_WIDTH | string
  thickColor: typeof BORDER_THICK_COLOR | string
  thinWidth: typeof BORDER_THIN_WIDTH | string
  thinColor: typeof BORDER_THIN_COLOR | string

  thick: string
  thickInvert: string
  thickDashed: string
  thickDashedInvert: string
  thickTransparent: string

  thin: string
  thinDashed: string
  thinDashedInvert: string
  thinInvert: string
  thinTransparent: string
  // [key: string]: string;
}

export interface PartialBorderInterface extends Partial<BorderInterface> {}
