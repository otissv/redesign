import facepaint from 'facepaint'

import { maybeString } from '../utils/maybe'
import {
  RADIUS_CIRCLE,
  RADIUS_NONE,
  RADIUS_ROUND,
  RADIUS_ROUNDED,
  RadiusInterface,
} from '../radius'
import { BorderInterface } from '../border'
import { ElevateInterface } from '../elevate'
import { ColorInterface } from '../color'
import { toUpperFirst, toCamel } from '../utils/textTransform'
import { UnitInterface, UnitPositionsInterface } from '../unit'
import {
  FontFamilyTypes,
  FontLineHeightInterface,
  FontSizeType,
  FontWeightType,
} from '../font'
import {
  FlexDirectionTypes,
  FlexContentTypes,
  FlexItemsTypes,
  FlexSelfTypes,
  FlexWrapTypes,
  AppearanceCssTypes,
  PointerEventsTypes,
  ResizeTypes,
  UserSelectTypes,
  CursorTypes,
  ColorTypes,
  BorderStyleTypes,
  BackgroundSizeTypes,
  BackgroundRepeatTypes,
  BackgroundClipTypes,
  BackgroundAttachmentTypes,
  BackgroundPositionTypes,
  WordBreakTypes,
  FloatTypes,
  OverflowTypes,
  OverflowScrollingTypes,
  OverflowWrapTypes,
  VisibilityTypes,
  TextAlignTypes,
  ListStyleTypes,
  ListPositionTypes,
  TextDecorationTypes,
  TextTransformTypes,
  VerticalAlignTypes,
  WhiteSpaceTypes,
  PositionTypes,
  ObjectFitTypes,
  ObjectPositionTypes,
  BoxSizingTypes,
  DisplayTypes,
  TransitionTypes,
} from './utility.types'
import { getAlias } from './utility.alias'
import { BreakpointsInterface } from '../mediaQueries'
import { FontInterface } from '../font'

const propCase = (key: string) => toCamel(key).trim()

/*
 * Color
 */
export const getColor = (color: ColorInterface) => (value: string) => ({
  color: color[value as keyof ColorInterface] || value,
})

/*
 * Display
 */
export const getDisplay = (display: DisplayTypes) => ({ display })

/*
 * Background
 */
export const getBackground = (color: ColorInterface) => (
  background: string
) => ({
  background: color[background as keyof ColorInterface] || background,
})

export const getBackgroundAttachment = (
  backgroundAttachment: BackgroundAttachmentTypes
) => ({ backgroundAttachment })
export const getBackgroundClip = (backgroundClip: BackgroundClipTypes) => ({
  backgroundClip,
})
export const getBackgroundColor = (color: ColorInterface) => (
  backgroundColor: ColorTypes
) => ({
  background: color[backgroundColor as keyof ColorInterface] || backgroundColor,
})
export const getBackgroundPosition = (
  backgroundPosition: BackgroundPositionTypes
) => ({ backgroundPosition })
export const getBackgroundRepeat = (
  backgroundRepeat: BackgroundRepeatTypes
) => ({ backgroundRepeat })
export const getBackgroundSize = (backgroundSize: BackgroundSizeTypes) => ({
  backgroundSize,
})
export const getBackgroundImage = (backgroundImage: string) => ({
  backgroundImage,
})

/*
 * Border
 */

export function getRadiuses(
  radius: RadiusInterface = {
    circle: RADIUS_CIRCLE,
    none: RADIUS_NONE,
    round: RADIUS_ROUND,
    rounded: RADIUS_ROUNDED,
  }
) {
  return (value: keyof RadiusInterface | string) => {
    switch (value) {
      case 'circle':
        return maybeString(radius.circle) ?? RADIUS_CIRCLE
      case 'none':
        return maybeString(radius.none) ?? RADIUS_NONE
      case 'round':
        return maybeString(radius.round) ?? RADIUS_ROUND
      case 'rounded':
        return maybeString(radius.rounded) ?? RADIUS_ROUNDED

      default:
        return value || 0
    }
  }
}

export const getBorder = (border: BorderInterface) => (value: string) => ({
  border: border[value as keyof BorderInterface] || value,
})
export const getBorderBottom = (border: BorderInterface) => (
  borderBottom: string
) => ({
  borderBottom: border[borderBottom as keyof BorderInterface] || borderBottom,
})
export const getBorderLeft = (border: BorderInterface) => (
  borderLeft: string
) => ({
  borderLeft: border[borderLeft as keyof BorderInterface] || borderLeft,
})
export const getBorderRight = (border: BorderInterface) => (
  borderRight: string
) => ({
  borderRight: border[borderRight as keyof BorderInterface] || borderRight,
})
export const getBorderTop = (border: BorderInterface) => (
  borderTop: string
) => ({
  borderTop: border[borderTop as keyof BorderInterface] || borderTop,
})
export const getBorderY = (border: BorderInterface) => (value: string) => ({
  borderTop: border[value as keyof BorderInterface] || value,
  borderBottom: border[value as keyof BorderInterface] || value,
})
export const getBorderX = (border: BorderInterface) => (value: string) => ({
  borderRight: border[value as keyof BorderInterface] || value,
  borderLeft: border[value as keyof BorderInterface] || value,
})

export const getBorderWidth = (borderWidth: string) => ({
  borderWidth,
})
export const getBorderColor = (borderColor: BorderStyleTypes) => ({
  borderColor,
})
export const getBorderStyle = (borderStyle: BorderStyleTypes) => ({
  borderStyle,
})

export const getRadius = (radius: RadiusInterface) => (
  value: keyof RadiusInterface
) => ({ borderRadius: getRadiuses(radius)(value) })
export const getBorderBottomRadius = (radius: RadiusInterface) => (
  borderBottomRadius: keyof RadiusInterface
) => ({
  borderBottomRadius: getRadiuses(radius)(borderBottomRadius),
})
export const getBorderLeftRadius = (radius: RadiusInterface) => (
  borderLeftRadius: keyof RadiusInterface
) => ({
  borderLeftRadius: getRadiuses(radius)(borderLeftRadius),
})
export const getBorderRightRadius = (radius: RadiusInterface) => (
  borderRightRadius: keyof RadiusInterface
) => ({
  borderRightRadius: getRadiuses(radius)(borderRightRadius),
})
export const getBorderTopRadius = (radius: RadiusInterface) => (
  borderTopRadius: keyof RadiusInterface
) => ({
  borderTopRadius: getRadiuses(radius)(borderTopRadius),
})
export const getBorderYRadius = (radius: RadiusInterface) => (
  value: keyof RadiusInterface
) => ({
  borderTopRadius: getRadiuses(radius)(value),
  borderBottomRadius: getRadiuses(radius)(value),
})
export const getBorderXRadius = (radius: RadiusInterface) => (
  value: keyof RadiusInterface
) => ({
  borderRightRadius: getRadiuses(radius)(value),
  borderLeftRadius: getRadiuses(radius)(value),
})

/*
 * Elevate
 */

export const getElevate = (elevate: ElevateInterface) => (
  value: string | keyof ElevateInterface
) => {
  const elevateValue = typeof value === 'number' ? value : parseInt(value, 10)

  return {
    boxShadow: elevate[elevateValue as keyof ElevateInterface],
  }
}
export const getBoxSizing = (boxSizing: BoxSizingTypes) => ({ boxSizing })

/*
 * Centered
 */
export const getCentered = () => ({ margin: '0 auto' })

/*
 * Flex
 */
export const getFlex = (value: string) => ({ flex: value })
export const getFlexGrow = (value: number) => ({ flexGrow: value })
export const getFlexShrink = (value: number) => ({ flexShrink: value })
export const getFlexDirection = (value: FlexDirectionTypes) => ({
  flexDirection: value,
})
export const getFlexWrap = (value: FlexWrapTypes) => ({
  flexWrap: value,
})
export const getFlexBasis = (value: string | number) => ({
  flexBasis: value,
})
export const getOrder = (value: number) => ({ order: value })
export const getJustifyContent = (value: FlexContentTypes) => ({
  justifyContent: value,
})
export const getJustifyItems = (value: FlexContentTypes) => ({
  justifyItems: value,
})
export const getJustifySelf = (value: FlexSelfTypes) => ({
  justifySelf: value,
})
export const getAlignContent = (value: FlexContentTypes) => ({
  alignContent: value,
})
export const getAlignItems = (value: FlexItemsTypes) => ({
  alignItems: value,
})
export const getAlignSelf = (value: FlexSelfTypes) => ({
  alignSelf: value,
})

/*
 * Width / Height
 */
export const getHeight = (unit: UnitInterface) => (
  height: string | keyof UnitInterface
) => ({
  height: unit[height as keyof UnitInterface] || height,
})
export const getWidth = (unit: UnitInterface) => (
  width: string | keyof UnitInterface
) => ({
  width: unit[width as keyof UnitInterface] || width,
})
export const getMaxHeight = (unit: UnitInterface) => (
  maxHeight: string | keyof UnitInterface
) => ({
  maxHeight: unit[maxHeight as keyof UnitInterface] || maxHeight,
})
export const getMaxWidth = (unit: UnitInterface) => (
  maxWidth: string | keyof UnitInterface
) => ({
  maxWidth: unit[maxWidth as keyof UnitInterface] || maxWidth,
})
export const getWidthHeight = (unit: UnitInterface) => (value: string) => {
  return {
    height: unit[value as keyof UnitInterface] || value,
    width: unit[value as keyof UnitInterface] || value,
  }
}

/*
 * Text
 */
export const getTextAlign = (textAlign: TextAlignTypes) => ({ textAlign })
export const getTruncate = () => ({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
})
export const getWordBreak = (wordBreak: WordBreakTypes) => ({ wordBreak })
export const getListStyle = (listStyle: ListStyleTypes) => ({ listStyle })
export const getListPosition = (listPosition: ListPositionTypes) => ({
  listPosition,
})
export const getTextDecoration = (textDecoration: TextDecorationTypes) => ({
  textDecoration,
})
export const getTextTransform = (textTransform: TextTransformTypes) => ({
  textTransform,
})
export const getVerticalAlign = (verticalAlign: VerticalAlignTypes) => ({
  verticalAlign,
})
export const getWhiteSpace = (whiteSpace: WhiteSpaceTypes) => ({ whiteSpace })

/*
 * Media
 */

export const getMediaQuires = (
  breakpoints: BreakpointsInterface,
  unit: UnitInterface
) => (hostBreakpoints: { [key: string]: any }) => {
  const { sm, md, lg, xl } = breakpoints

  let result: { [key: string]: string[] } = {}

  for (let breakpoint in hostBreakpoints) {
    let index = 0

    switch (breakpoint) {
      case 'sm':
        index = 0
        break
      case 'md':
        index = 2
        break
      case 'lg':
        index = 4
        break
      case 'xl':
        index = 6
        break
    }

    for (let key in hostBreakpoints[breakpoint].min) {
      const prop = getAlias(key) || key
      const value = hostBreakpoints[breakpoint].min[key]

      if (result[prop]) {
        result[prop][index] = unit[value as keyof UnitInterface] || value
      } else {
        result[prop] = []
        result[prop][index] = unit[value as keyof UnitInterface] || value
      }
    }

    for (let key in hostBreakpoints[breakpoint].max) {
      const prop = getAlias(key) || key
      const value = hostBreakpoints[breakpoint].max[key]

      if (result[prop]) {
        result[prop][index + 1] = unit[value as keyof UnitInterface] || value
      } else {
        result[prop] = []
        result[prop][index + 1] = unit[value as keyof UnitInterface] || value
      }
    }
  }

  return facepaint(
    [
      `@media(min-width: ${sm.min}px)`, // 0
      `@media(min-width: ${sm.max}px)`, // 1
      `@media(min-width: ${md.min}px)`, // 2
      `@media(min-width: ${md.max}px)`, // 3
      `@media(min-width: ${lg.min}px)`, // 4
      `@media(min-width: ${lg.max}px)`, // 5
      `@media(min-width: ${xl.min}px)`, // 6
      `@media(min-width: ${xl.max}px)`, // 7
    ],
    {
      literal: true,
    }
  )(result)[0]
}

/*
 * Position
 */
export const getPosition = (position: PositionTypes) => ({
  position,
})
export const getTop = (top: string) => ({
  top,
})
export const getBottom = (bottom: string) => ({
  bottom,
})
export const getLeft = (left: string) => ({
  left,
})
export const getRight = (right: string) => ({
  right,
})

/*
 * Floats
 */
export const getFloat = (float: FloatTypes) => ({
  float,
})
export const getClearFix = () => `&::after {
  content: "";
  display: table;
  clear: both;
}`

/*
 * Overflow
 */
export const getOverflow = (value: string) => ({ overflow: value })
export const getOverflowX = (overflowX: OverflowTypes) => ({ overflowX })
export const getOverflowY = (overflowY: OverflowTypes) => ({ overflowY })
export const getOverflowScrolling = (
  overflowScrolling: OverflowScrollingTypes
) => ({ '-webkit-Overflow-scrolling': overflowScrolling })
export const getOverflowWrap = (overflowWrap: OverflowWrapTypes) => ({
  overflowWrap,
})

/*
 * Font
 */
export const getFontSize = (font: FontInterface) => (
  fontSize: number | string
) => {
  return {
    fontSize: font.size[fontSize as keyof FontSizeType] || fontSize,
  }
}
export const getLineHeight = (font: FontInterface) => (
  lineHeight: number | string
) => {
  return {
    lineHeight:
      font.lineHeight[lineHeight as keyof FontLineHeightInterface] ||
      lineHeight,
  }
}
export const getLetterSpacing = (letterSpacing: string) => {
  return {
    letterSpacing,
  }
}
export const getFontWeight = (font: FontInterface) => (
  weight: number | string
) => {
  return {
    weight: font.weight[weight as keyof FontWeightType] || weight,
  }
}
export const getFontFamily = (font: FontInterface) => (
  fontFamily: FontFamilyTypes
) => {
  return {
    fontFamily: (font as any).family[fontFamily] || fontFamily,
  }
}

/*
 * Z Index
 */
export const getZIndex = (zIndex: number | string | 'auto') => ({ zIndex })

/*
 * Object
 */
export const getObjectFit = (objectFit: ObjectFitTypes) => ({
  objectFit,
})
export const getObjectPosition = (objectPosition: ObjectPositionTypes) => ({
  objectPosition,
})

/*
 * Visibility
 */
export const getVisibility = (visibility: VisibilityTypes) => ({
  visibility,
})

/*
 * Interactivity
 */
export const getCursor = (cursor: CursorTypes) => ({
  cursor,
})
export const getAppearance = (appearance: AppearanceCssTypes) => ({
  appearance,
})
export const getPointerEvents = (pointerEvents: PointerEventsTypes) => ({
  pointerEvents,
})
export const getResize = (resize: ResizeTypes) => ({
  resize,
})
export const getUserSelect = (userSelect: UserSelectTypes) => ({
  userSelect,
})

/*
 * Transition
 */
export const getTransition = (transition: TransitionTypes) => ({
  transition,
})

/*
 * Transforms
 */
export const getTransform = (transform: string) => ({
  transform,
})

/*
 * Filters
 */
export const getFilter = (filter: string) => ({ filter })
export const getFilterBlur = (filterBlur: string) => ({ filterBlur })
export const getFilterBrightness = (filterBrightness: string) => ({
  filterBrightness,
})
export const getFilterContrast = (filterContrast: string) => ({
  filterContrast,
})
export const getFilterDropShadow = (filterDropShadow: string) => ({
  filterDropShadow,
})
export const getFilterGrayscale = (filterGrayscale: string) => ({
  filterGrayscale,
})
export const getFilterHueRotate = (filterHueRotate: string) => ({
  filterHueRotate,
})
export const getFilterOpacity = (filterOpacity: string) => ({ filterOpacity })
export const getFilterSaturate = (filterSaturate: string) => ({
  filterSaturate,
})
export const getFilterSepia = (filterSepia: string) => ({ filterSepia })
/*
 Spacing
*/
export const isValidStringValue = (value: any) =>
  typeof value === 'string' && value.trim() !== ''

export const isValidNumberValue = (value: any) => typeof value === 'number'

export const isValidUnitValue = (value: any) => {
  return isValidStringValue(value) && Boolean(value.match(/%|px|rem|em|auto/))
}

export function allPositions(unit: UnitInterface) {
  return (value: string | number, prop: string) => {
    const propsList = prop.split(';')

    switch (true) {
      case value === 'default':
        return propsList.reduce((acc: any, key: string) => {
          return {
            ...acc,
            [propCase(key)]: unit.default,
          }
        }, {})

      case isValidNumberValue(value):
        return propsList.reduce((acc: any, key: string) => {
          return {
            ...acc,
            [propCase(key)]: unit[value as keyof UnitInterface],
          }
        }, {})

      case isValidUnitValue(value) && isValidStringValue(value): {
        return propsList.reduce((acc: any, key: string) => {
          return { ...acc, [propCase(key)]: value }
        }, {})
      }

      default: {
        return ''
      }
    }
  }
}

export function unitPositions({ unit, style }: UnitPositionsInterface) {
  const unitsReducer = (
    accumulator: { [key: string]: any },
    key: string
  ): any => {
    if (key === 'default') return accumulator

    const prop = `${style}${toUpperFirst(key)}`

    return {
      ...accumulator,
      [prop]: (value: string) => {
        if (!isValidStringValue(value)) return {}
        let positions = value.split(' ')

        return Object.keys(positions).reduce((accum, pos: string) => {
          const index = parseInt(pos, 10)
          return {
            ...accum,
            [toCamel(`${style}-${positions[index]}`)]: unit[
              key as keyof UnitInterface
            ],
          }
        }, {})
      },
    }
  }

  const getAllPositions = allPositions(unit)

  const initialStyles = {
    [style]: (value: string) => getAllPositions(value, style),
    [`${style}Bottom`]: (value: string) =>
      getAllPositions(value, `${style}Bottom`),
    [`${style}Left`]: (value: string) => getAllPositions(value, `${style}Left`),
    [`${style}Right`]: (value: string) =>
      getAllPositions(value, `${style}Right`),
    [`${style}Top`]: (value: string) => getAllPositions(value, `${style}Top`),
    [`${style}X`]: (value: string) =>
      getAllPositions(value, `${style}Right; ${style}Left`),
    [`${style}Y`]: (value: string) =>
      getAllPositions(value, `${style}Bottom; ${style}Top`),
  }

  return Object.keys(unit).reduce(unitsReducer, initialStyles)
}
