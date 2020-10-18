import facepaint from 'facepaint'

import { BorderInterface } from '../border'
import { ElevateInterface } from '../elevate'
import { ColorInterface } from '../color'

import {
  RADIUS_CIRCLE,
  RADIUS_NONE,
  RADIUS_ROUND,
  RADIUS_ROUNDED,
  RadiusInterface,
} from '../radius'
import {
  PartialUtilityInterface,
  UtilityInterface,
  FlexDirectionTypes,
  FlexContentTypes,
  FlexItemsTypes,
  FlexSelfTypes,
  FlexWrapTypes,
} from './utility.types'
import { maybeString, maybe, toUpperFirst, toCamel } from '../utils'
import { themeDefaults } from '../defaults'

import { UnitInterface, UnitPositionsInterface } from '../unit'
import { PartialThemeInterface } from '../theme'
import { MediaQueriesInterface } from '../mediaQueries'

const propCase = (key: string) => toCamel(key).trim()

export const getColor = (color: ColorInterface) => (value: string) => ({
  color: color[value as keyof ColorInterface] || value,
})
export const getBackground = (color: ColorInterface) => (value: string) => ({
  background: color[value as keyof ColorInterface] || value,
})

export const getBorder = (border: BorderInterface) => (value: string) => ({
  border: border[value as keyof BorderInterface] || value,
})
export const getBorderBottom = (border: BorderInterface) => (
  value: string
) => ({ borderBottom: border[value as keyof BorderInterface] || border })
export const getBorderLeft = (border: BorderInterface) => (value: string) => ({
  borderLeft: border[value as keyof BorderInterface] || value,
})
export const getBorderRight = (border: BorderInterface) => (value: string) => ({
  borderRight: border[value as keyof BorderInterface] || value,
})
export const getBorderTop = (border: BorderInterface) => (value: string) => ({
  borderTop: border[value as keyof BorderInterface] || value,
})
export const getBorderY = (border: BorderInterface) => (value: string) => ({
  borderTop: border[value as keyof BorderInterface] || value,
  borderBottom: border[value as keyof BorderInterface] || value,
})
export const getBorderX = (border: BorderInterface) => (value: string) => ({
  borderRight: border[value as keyof BorderInterface] || value,
  borderLeft: border[value as keyof BorderInterface] || value,
})

export const getRadius = (radius: RadiusInterface) => (
  value: keyof RadiusInterface
) => ({ borderRadius: getRadiuses(radius)(value) })
export const getBorderBottomRadius = (radius: RadiusInterface) => (
  value: keyof RadiusInterface
) => ({
  borderBottomRadius: getRadiuses(radius)(value),
})
export const getBorderLeftRadius = (radius: RadiusInterface) => (
  value: keyof RadiusInterface
) => ({
  borderLeftRadius: getRadiuses(radius)(value),
})
export const getBorderRightRadius = (radius: RadiusInterface) => (
  value: keyof RadiusInterface
) => ({
  borderRightRadius: getRadiuses(radius)(value),
})
export const getBorderTopRadius = (radius: RadiusInterface) => (
  value: keyof RadiusInterface
) => ({
  borderTopRadius: getRadiuses(radius)(value),
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

export const getElevate = (elevate: ElevateInterface) => (
  value: string | keyof ElevateInterface
) => {
  const elevateValue = typeof value === 'number' ? value : parseInt(value, 10)

  return {
    boxShadow: elevate[elevateValue as keyof ElevateInterface],
  }
}
export const getCentered = () => ({ margin: '0 auto' })
export const getDisplay = (value: string) => ({ display: value })
export const getFlex = (value: string) => ({ flex: value })
export const getFlexGrow = (value: number) => ({ flexGrow: value })
export const getOrder = (value: number) => ({ order: value })
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
export const getHeight = (unit: UnitInterface) => (
  value: string | keyof UnitInterface
) => ({
  height: unit[value as keyof UnitInterface] || value,
})
export const getWidth = (unit: UnitInterface) => (
  value: string | keyof UnitInterface
) => ({
  width: unit[value as keyof UnitInterface] || value,
})

export const getMaxHeight = (unit: UnitInterface) => (
  value: string | keyof UnitInterface
) => ({
  maxHeight: unit[value as keyof UnitInterface] || value,
})
export const getMaxWidth = (unit: UnitInterface) => (
  value: string | keyof UnitInterface
) => ({
  maxWidth: unit[value as keyof UnitInterface] || value,
})

export const getTextAlign = (value: string) => ({ textAlign: value })

export const getTruncate = () => ({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
})

export const getMediaQuires = (mediaQuires: MediaQueriesInterface) => (value: {
  [key: string]: any
}) => {
  const { sm, md, lg, xl, ...breakpoints } = mediaQuires

  return facepaint(
    [
      `@media(min-width: ${sm}px`,
      `@media(min-width: ${md}px`,
      `@media(min-width: ${lg}px`,
      `@media(min-width: ${xl}px`,
      ...Object.values(breakpoints).map(b => `@media(min-width: ${b}px`),
    ],
    {
      literal: true,
    }
  )(value)[0]
}

export const getOverflow = (value: string) => ({ overflow: value })

export function utilityTheme<
  P extends PartialThemeInterface,
  T extends PartialUtilityInterface
>(theme: P): T {
  const maybeTheme = maybe({})

  const hostColor = maybeTheme(theme.color)
  const hostBorder = maybeTheme(theme.border)
  const hostElevate = maybeTheme(theme.elevate)
  const hostRadius = maybeTheme(theme.radius)
  const hostUnit = maybeTheme(theme.unit)
  const hostUtility = maybeTheme(theme.utility)
  const hostMediaQueries = maybeTheme(theme.mediaQueries)

  const defaults: UtilityInterface = {
    ...unitPositions({ unit: hostUnit, style: 'margin' }),
    ...unitPositions({ unit: hostUnit, style: 'padding' }),
    ...unitPositions({ unit: hostUnit, style: 'm' }),
    ...unitPositions({ unit: hostUnit, style: 'p' }),

    color: getColor(hostColor),
    c: getColor(hostColor),
    background: getBackground(hostColor),
    bg: getBackground(hostColor),

    border: getBorder(hostBorder),
    borderBottom: getBorderBottom(hostBorder),
    borderLeft: getBorderLeft(hostBorder),
    borderRight: getBorderRight(hostBorder),
    borderTop: getBorderTop(hostBorder),
    borderY: getBorderY(hostBorder),
    borderX: getBorderX(hostBorder),
    b: getBorder(hostBorder),
    bb: getBorderBottom(hostBorder),
    bl: getBorderLeft(hostBorder),
    br: getBorderRight(hostBorder),
    bt: getBorderTop(hostBorder),
    bx: getBorderX(hostBorder),
    by: getBorderY(hostBorder),

    radius: getRadius(hostRadius),
    borderBottomRadius: getBorderBottomRadius(hostRadius),
    borderLeftRadius: getBorderLeftRadius(hostRadius),
    borderRightRadius: getBorderRightRadius(hostRadius),
    borderTopRadius: getBorderTopRadius(hostRadius),
    borderYRadius: getBorderYRadius(hostRadius),
    borderXRadius: getBorderXRadius(hostRadius),
    r: getRadius(hostRadius),
    rb: getBorderBottomRadius(hostRadius),
    rl: getBorderLeftRadius(hostRadius),
    rr: getBorderRightRadius(hostRadius),
    rt: getBorderTopRadius(hostRadius),
    ry: getBorderYRadius(hostRadius),
    rx: getBorderXRadius(hostRadius),

    display: getDisplay,
    d: getDisplay,

    flex: getFlex,
    f: getFlex,
    flexGrow: getFlex,
    fg: getFlex,
    order: getOrder,
    od: getOrder,
    flexShrink: getFlexShrink,
    fs: getFlexShrink,
    flexDirection: getFlexDirection,
    fd: getFlexDirection,
    flexWrap: getFlexWrap,
    fw: getFlexWrap,
    flexBasis: getFlexBasis,
    fb: getFlexBasis,

    justifyContent: getJustifyContent,
    jc: getJustifyContent,
    justifyItems: getJustifyItems,
    ji: getJustifyItems,
    justifySelf: getJustifySelf,
    js: getJustifySelf,

    alignContent: getAlignContent,
    ac: getAlignContent,
    alignItems: getAlignItems,
    ai: getAlignItems,
    alignSelf: getAlignSelf,
    af: getAlignSelf,

    elevate: getElevate(hostElevate),
    e: getElevate(hostElevate),

    centered: getCentered,
    ct: getCentered,

    heightSize: getHeight(hostUnit),
    h: getHeight(hostUnit),
    widthSize: getWidth(hostUnit),
    w: getWidth(hostUnit),
    maxHeight: getMaxHeight(hostUnit),
    mh: getMaxHeight(hostUnit),
    maxWidth: getMaxWidth(hostUnit),
    mw: getMaxWidth(hostUnit),

    textAlign: getTextAlign,
    ta: getTextAlign,
    truncate: getTruncate,
    tr: getTruncate,

    mediaQuires: getMediaQuires(hostMediaQueries),
    mq: getMediaQuires(hostMediaQueries),

    overflow: getOverflow,
    of: getOverflow,
    ...hostUtility,
  }
  return defaults as T
}

export const isValidStringValue = (value: any) =>
  typeof value === 'string' && value.trim() !== ''

export const isValidNumberValue = (value: any) => typeof value === 'number'

export const isValidUnitValue = (value: any) => {
  return isValidStringValue(value) && Boolean(value.match(/%|px|rem|em|auto/))
}

export function getRadiuses(radius: RadiusInterface = themeDefaults.radius) {
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
