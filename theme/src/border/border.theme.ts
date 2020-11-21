import merge from 'deepmerge'

import { toCamel, toUpperFirst } from '../utils/textTransform'
import { maybe } from '../utils/maybe'
import {
  BorderInterface,
  BORDER_NONE,
  BORDER_STYLE,
  BORDER_THICK_WIDTH,
  BORDER_THICK_COLOR,
  BORDER_THIN_WIDTH,
  BORDER_THIN_COLOR,
  PartialBorderInterface,
} from './border.types'
import { ColorInterface } from '../color'
import { PartialThemeInterface } from '../theme'

export function borderTheme<
  P extends PartialThemeInterface,
  T extends PartialBorderInterface
>(theme?: P): T {
  const maybeTheme = maybe({})
  const border = maybeTheme(theme?.border)
  const color: { [key: string]: string } = maybeTheme(theme?.color)

  const initialBorders: PartialThemeInterface = {}

  const thickWidth = border.thickWidth || BORDER_THICK_WIDTH
  const thickColor = border.thickColor || color[BORDER_THICK_COLOR]
  const thinWidth = border.thinWidth || BORDER_THIN_WIDTH
  const thinColor = border.thinColor || color[BORDER_THIN_COLOR]

  const none = BORDER_NONE
  const style = border.style || BORDER_STYLE

  function getColor(value: string) {
    return color[value] || value
  }

  const defaults: BorderInterface = {
    none,
    style,
    thickWidth,
    thickColor,
    thinWidth,
    thinColor,

    // thick
    thick: `${thickWidth} ${style} ${getColor(thickColor)}`,
    thickInvert: `${thickWidth} ${style} ${getColor(thickColor)}`,
    thickTransparent: `${thickWidth} ${style} rgba(0, 0, 0, 0);`,

    // thin
    thin: `${thinWidth} ${style} ${getColor(thinColor)}`,
    thinInvert: `${thinWidth} ${style} ${getColor(thinColor)}`,
    thinTransparent: `${thinWidth} ${style} rgba(0, 0, 0, 0);`,

    ...Object.keys(color).reduce((previous, key) => {
      const color_key = color[key as keyof ColorInterface]

      const upperFirstKey = toUpperFirst(toCamel(key))

      return {
        ...previous,
        [`thick${upperFirstKey}`]: `${thickWidth} ${style} ${color_key}`,
        [`thin${upperFirstKey}`]: `${thinWidth} ${style} ${color_key}`,
      }
    }, initialBorders),
  }

  return merge(defaults, border) as T
}
