import merge from 'deepmerge'

import { toCamel, toUpperFirst, maybe } from '../utils'
import {
  BorderInterface,
  BORDER_NONE,
  BORDER_STYLE,
  BORDER_DASH,
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

  const defaults: BorderInterface = {
    none: BORDER_NONE,
    style: BORDER_STYLE,
    dash: BORDER_DASH,

    thickWidth: BORDER_THICK_WIDTH,
    thickColor: color[BORDER_THICK_COLOR],
    thinWidth: BORDER_THIN_WIDTH,
    thinColor: color[BORDER_THIN_COLOR],

    // thick
    thick: `${BORDER_THICK_WIDTH} ${BORDER_STYLE} ${color[BORDER_THICK_COLOR]}`,
    thickInvert: `${BORDER_THICK_WIDTH} ${BORDER_STYLE} ${color[BORDER_THICK_COLOR]}`,
    thickDashed: `${BORDER_THICK_WIDTH} ${BORDER_DASH} ${color[BORDER_THICK_COLOR]}`,
    thickDashedInvert: `${BORDER_THICK_WIDTH} ${BORDER_DASH} ${color[BORDER_THICK_COLOR]}`,
    thickTransparent: `${BORDER_THICK_WIDTH} ${BORDER_STYLE} rgba(0, 0, 0, 0);`,

    // thin
    thin: `${BORDER_THIN_WIDTH} ${BORDER_STYLE} ${color[BORDER_THIN_COLOR]}`,
    thinDashed: `${BORDER_THIN_WIDTH} ${BORDER_DASH}  ${color[BORDER_THIN_COLOR]}`,
    thinDashedInvert: `${BORDER_THIN_WIDTH} ${BORDER_DASH}  ${color[BORDER_THIN_COLOR]}`,
    thinInvert: `${BORDER_THIN_WIDTH} ${BORDER_STYLE} ${color[BORDER_THIN_COLOR]}`,
    thinTransparent: `${BORDER_THIN_WIDTH} ${BORDER_STYLE} rgba(0, 0, 0, 0);`,

    ...Object.keys(color).reduce((previous, key) => {
      const color_key = color[key as keyof ColorInterface]

      const upperFirstKey = toUpperFirst(toCamel(key))

      return {
        ...previous,
        // [key]: color_key,
        [`thick${upperFirstKey}`]: `${BORDER_THICK_WIDTH} ${BORDER_STYLE} ${color_key}`,
        [`thin${upperFirstKey}`]: `${BORDER_THIN_WIDTH} ${BORDER_STYLE} ${color_key}`,
        [`thickDashed${upperFirstKey}`]: `${BORDER_THICK_WIDTH} ${BORDER_DASH} ${color_key}`,
        [`thinDashed${upperFirstKey}`]: `${BORDER_THIN_WIDTH} ${BORDER_DASH} ${color_key}`,
      }
    }, initialBorders),
  }

  return merge(defaults, border) as T
}
