import { PartialUtilityInterface, UtilityInterface } from './utility.types'
import { maybe } from '../utils/maybe'

import { PartialThemeInterface } from '../theme'

import {
  unitPositions,
  getColor,
  getBackground,
  getBorder,
  getBorderBottom,
  getBorderLeft,
  getBorderRight,
  getBorderTop,
  getBorderY,
  getBorderX,
  getRadius,
  getBorderBottomRadius,
  getBorderLeftRadius,
  getBorderRightRadius,
  getBorderTopRadius,
  getBorderYRadius,
  getBorderXRadius,
  getDisplay,
  getBackgroundAttachment,
  getBackgroundClip,
  getBackgroundColor,
  getBackgroundPosition,
  getBackgroundRepeat,
  getBackgroundSize,
  getBackgroundImage,
  getCentered,
  getFlex,
  getFlexGrow,
  getOrder,
  getFlexShrink,
  getFlexDirection,
  getFlexWrap,
  getFlexBasis,
  getJustifyContent,
  getJustifyItems,
  getJustifySelf,
  getAlignContent,
  getAlignSelf,
  getAlignItems,
  getElevate,
  getHeight,
  getWidth,
  getMaxHeight,
  getMaxWidth,
  getWidthHeight,
  getTextAlign,
  getTruncate,
  getWordBreak,
  getListStyle,
  getListPosition,
  getTextDecoration,
  getTextTransform,
  getVerticalAlign,
  getWhiteSpace,
  getMediaQuires,
  getPosition,
  getBottom,
  getLeft,
  getRight,
  getFloat,
  getOverflow,
  getFontSize,
  getLineHeight,
  getLetterSpacing,
  getFontWeight,
  getClearFix,
  getOverflowX,
  getOverflowY,
  getOverflowScrolling,
  getOverflowWrap,
  getFontFamily,
  getBorderWidth,
  getBorderStyle,
  getBorderColor,
  getZIndex,
  getObjectFit,
  getObjectPosition,
  getVisibility,
  getCursor,
  getAppearance,
  getPointerEvents,
  getResize,
  getUserSelect,
  getTransition,
  getTransform,
  getBoxSizing,
  getFilter,
  getFilterBlur,
  getFilterBrightness,
  getFilterContrast,
  getFilterDropShadow,
  getFilterGrayscale,
  getFilterHueRotate,
  getFilterOpacity,
  getFilterSaturate,
  getFilterSepia,
} from './utility.helpers'

export function utilityTheme<
  P extends PartialThemeInterface,
  T extends PartialUtilityInterface
>(theme: P): T {
  const maybeTheme = maybe({})

  const hostColor = maybeTheme(theme.color)
  const hostBorder = maybeTheme(theme.border)
  const hostElevate = maybeTheme(theme.elevate)
  const hostFont = maybeTheme(theme.font)
  const hostRadius = maybeTheme(theme.radius)
  const hostUnit = maybeTheme(theme.unit)
  const hostUtility = maybeTheme(theme.utility)
  const hostBreakpoints = maybeTheme(theme.breakpoints)

  const defaults: UtilityInterface = {
    ...hostUtility,

    /*
     * Margin
     */
    ...unitPositions({ unit: hostUnit, style: 'margin' }),
    ...unitPositions({ unit: hostUnit, style: 'm' }),

    /*
     * Padding
     */
    ...unitPositions({ unit: hostUnit, style: 'padding' }),
    ...unitPositions({ unit: hostUnit, style: 'p' }),

    /*
     * Color
     */
    color: getColor(hostColor),
    cl: getColor(hostColor),

    /*
     * Display
     */
    display: getDisplay,
    d: getDisplay,

    /*
     * Background
     */
    background: getBackground(hostColor),
    bg: getBackground(hostColor),
    backgroundAttachment: getBackgroundAttachment,
    bga: getBackgroundAttachment,
    backgroundClip: getBackgroundClip,
    bgl: getBackgroundClip,
    backgroundColor: getBackgroundColor,
    bgc: getBackgroundColor(hostColor),
    backgroundPosition: getBackgroundPosition,
    bgp: getBackgroundPosition,
    backgroundRepeat: getBackgroundRepeat,
    bgr: getBackgroundRepeat,
    backgroundSize: getBackgroundSize,
    bgs: getBackgroundSize,
    backgroundImage: getBackgroundImage,
    bgi: getBackgroundImage,
    /*
     * Border
     */
    border: getBorder(hostBorder),
    borderBottom: getBorderBottom(hostBorder),
    borderLeft: getBorderLeft(hostBorder),
    borderRight: getBorderRight(hostBorder),
    borderTop: getBorderTop(hostBorder),
    borderY: getBorderY(hostBorder),
    borderX: getBorderX(hostBorder),
    borderColor: getBorderColor(hostColor),
    borderWidth: getBorderWidth,
    borderStyle: getBorderStyle,
    bd: getBorder(hostBorder),
    bdb: getBorderBottom(hostBorder),
    bdl: getBorderLeft(hostBorder),
    bdr: getBorderRight(hostBorder),
    bdt: getBorderTop(hostBorder),
    bdx: getBorderX(hostBorder),
    bdy: getBorderY(hostBorder),
    bdc: getBorderColor(hostColor),
    bdw: getBorderWidth,
    bds: getBorderStyle,

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

    /*
     * Elevate
     */

    elevate: getElevate(hostElevate),
    e: getElevate(hostElevate),
    boxSizing: getBoxSizing,
    bs: getBoxSizing,

    /*
     * Centered
     */
    centered: getCentered,
    ct: getCentered,

    /*
     * Flex
     */
    flex: getFlex,
    fl: getFlex,
    flexGrow: getFlexGrow,
    flg: getFlexGrow,
    flexShrink: getFlexShrink,
    fls: getFlexShrink,
    flexDirection: getFlexDirection,
    fld: getFlexDirection,
    flexWrap: getFlexWrap,
    flw: getFlexWrap,
    flexBasis: getFlexBasis,
    flb: getFlexBasis,

    order: getOrder,
    od: getOrder,

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

    /*
     * Width / Height
     */
    h: getHeight(hostUnit),
    w: getWidth(hostUnit),
    maxHeight: getMaxHeight(hostUnit),
    mh: getMaxHeight(hostUnit),
    maxWidth: getMaxWidth(hostUnit),
    mw: getMaxWidth(hostUnit),
    wh: getWidthHeight(hostUnit),

    /*
     * Text
     */
    textAlign: getTextAlign,
    ta: getTextAlign,
    truncate: getTruncate,
    tc: getTruncate,
    wordBreak: getWordBreak,
    wb: getWordBreak,
    listStyle: getListStyle,
    lt: getListStyle,
    listPosition: getListPosition,
    lp: getListPosition,
    textDecoration: getTextDecoration,
    td: getTextDecoration,
    tt: getTextTransform,
    verticalAlign: getVerticalAlign,
    va: getVerticalAlign,
    whiteSpace: getWhiteSpace,

    /*
     * Media
     */
    mediaQuires: getMediaQuires(hostBreakpoints, hostUnit),
    mq: getMediaQuires(hostBreakpoints, hostUnit),
    sm: (value: { [key: string]: number | string }) =>
      getMediaQuires(hostBreakpoints, hostUnit)(value),
    md: (value: { [key: string]: number | string }) =>
      getMediaQuires(hostBreakpoints, hostUnit)(value),
    lg: (value: { [key: string]: number | string }) =>
      getMediaQuires(hostBreakpoints, hostUnit)(value),
    xl: (value: { [key: string]: number | string }) =>
      getMediaQuires(hostBreakpoints, hostUnit)(value),

    /*
     * Position
     */
    position: getPosition,
    ps: getPosition,
    top: getBorderTop,
    bottom: getBottom,
    left: getLeft,
    right: getRight,

    /*
     * Float
     */
    float: getFloat,
    ft: getFloat,
    clearFix: getClearFix,
    cf: getClearFix,

    /*
     * Overflow
     */
    overflow: getOverflow,
    of: getOverflow,
    overflowX: getOverflowX,
    ox: getOverflowX,
    overflowY: getOverflowY,
    oy: getOverflowY,
    overflowScrolling: getOverflowScrolling,
    os: getOverflowScrolling,
    overflowWrap: getOverflowWrap,
    ow: getOverflowWrap,
    fontFamily: getFontFamily(hostFont),
    fontSize: getFontSize(hostFont),
    fs: getFontSize(hostFont),
    lineHeight: getLineHeight(hostFont),
    lh: getLineHeight(hostFont),
    letterSpacing: getLetterSpacing,
    ls: getLetterSpacing(hostFont),
    fontWeight: getFontWeight(hostFont),
    fw: getFontWeight(hostFont),

    /*
     * Z Index
     */
    zIndex: getZIndex,
    zi: getZIndex,

    /*
     * Object
     */
    objectFit: getObjectFit,
    ot: getObjectFit,
    objectPosition: getObjectPosition,
    op: getObjectPosition,

    /*
     * Visibility
     */
    visibility: getVisibility,

    /*
     * Interactivity
     */
    cursor: getCursor,
    cr: getCursor,
    appearance: getAppearance,
    ap: getAppearance,
    pointerEvents: getPointerEvents,
    pe: getPointerEvents,
    resize: getResize,
    rs: getResize,
    userSelect: getUserSelect,
    us: getUserSelect,

    /*
     * Transition
     */
    transition: getTransition,
    tr: getTransition,

    /*
     * Transforms
     */
    transform: getTransform,
    tf: getTransform,

    /*
     * Filters
     */
    filter: getFilter,
    filterBlur: getFilterBlur,
    filterBrightness: getFilterBrightness,
    filterContrast: getFilterContrast,
    filterDropShadow: getFilterDropShadow,
    filterGrayscale: getFilterGrayscale,
    filterHueRotate: getFilterHueRotate,
    filterOpacity: getFilterOpacity,
    filterSaturate: getFilterSaturate,
    filterSepia: getFilterSepia,
    fr: getFilter,
    frr: getFilterBlur,
    frb: getFilterBrightness,
    frc: getFilterContrast,
    frd: getFilterDropShadow,
    frg: getFilterGrayscale,
    frh: getFilterHueRotate,
    fro: getFilterOpacity,
    frs: getFilterSaturate,
    frp: getFilterSepia,
  }
  return defaults as T
}
