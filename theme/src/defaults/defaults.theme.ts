import { XSLOW, SLOW, MEDIUM, FAST, TransitionInterface } from '../transition'
import { ThemeInterface } from '../theme'
import {
  BorderInterface,
  BORDER_NONE,
  BORDER_STYLE,
  BORDER_THICK_WIDTH,
  BORDER_THICK_COLOR,
  BORDER_THIN_WIDTH,
  BORDER_THIN_COLOR,
} from '../border'
import {
  RADIUS_ROUNDED,
  RADIUS_CIRCLE,
  RADIUS_ROUND,
  RADIUS_NONE,
  RadiusInterface,
} from '../radius'
import { ColorInterface } from '../color'
import { ElevateInterface } from '../elevate'
import { ScrollbarInterface } from '../scrollbar'
import { FontInterface, FontFamilyTypes } from '../font'
import {
  UtilityInterface,
  AppearanceCssTypes,
  BackgroundAttachmentTypes,
  BackgroundClipTypes,
  BackgroundPositionTypes,
  BackgroundRepeatTypes,
  BackgroundSizeTypes,
  BorderStyleTypes,
  BoxSizingTypes,
  ColorTypes,
  CursorTypes,
  DisplayTypes,
  FlexContentTypes,
  FlexDirectionTypes,
  FlexItemsTypes,
  FlexSelfTypes,
  FlexWrapTypes,
  FloatTypes,
  ListPositionTypes,
  ListStyleTypes,
  ObjectFitTypes,
  ObjectPositionTypes,
  OverflowScrollingTypes,
  OverflowTypes,
  OverflowWrapTypes,
  PointerEventsTypes,
  PositionTypes,
  ResizeTypes,
  TextAlignTypes,
  TextDecorationTypes,
  TextTransformTypes,
  TransitionTypes,
  UserSelectTypes,
  VerticalAlignTypes,
  VisibilityTypes,
  WhiteSpaceTypes,
  WordBreakTypes,
} from '../utility'
import { UnitInterface } from '../unit'

import { noopString } from '../utils/noop'
import { BreakpointsInterface, MediaQueriesInterface } from '../mediaQueries'

const transitionThemeDefaults: TransitionInterface = {
  0: XSLOW,
  1: SLOW,
  2: MEDIUM,
  3: FAST,

  easeFast: noopString,
  easeMedium: noopString,
  easeSlow: noopString,
  easeXslow: noopString,

  easeInFast: noopString,
  easeInMedium: noopString,
  easeInSlow: noopString,
  easeInXslow: noopString,

  easeInOutFast: noopString,
  easeInOutMedium: noopString,
  easeInOutSlow: noopString,
  easeInOutXslow: noopString,

  easeOutFast: noopString,
  easeOutMedium: noopString,
  easeOutSlow: noopString,
  easeOutXslow: noopString,
}

const borderThemeDefaults: BorderInterface = {
  none: BORDER_NONE,
  style: BORDER_STYLE,

  thickWidth: BORDER_THICK_WIDTH,
  thickColor: BORDER_THICK_COLOR,
  thinWidth: BORDER_THIN_WIDTH,
  thinColor: BORDER_THIN_COLOR,

  thick: '',
  thickInvert: '',
  thickTransparent: '',

  thin: '',
  thinInvert: '',
  thinTransparent: '',
}

const breakpointsTheme: BreakpointsInterface = {
  sm: { min: 640, max: 767 },
  md: { min: 768, max: 1023 },
  lg: { min: 1024, max: 1279 },
  xl: { min: 1280, max: 1535 },
}

const colorThemeDefaults: ColorInterface = {
  black: '',
  white: '',
  transparent: '',

  outline: '',

  text: '',
  textInvert: '',

  linkText: '',
  linkTextHover: '',
  linkTextActive: '',
  linkTextFocus: '',
  linkTextVisited: '',
  linkBackground: '',
  linkBackgroundHover: '',
  linkBackgroundActive: '',
  linkBackgroundFocus: '',
  linkBackgroundVisited: '',

  background: '',
  backgroundInvert: '',
  background_050: '',
  background_100: '',
  background_200: '',
  background_300: '',
  background_400: '',
  background_500: '',
  background_600: '',
  background_700: '',
  background_800: '',
  background_900: '',

  default: '',
  default2: '',
  default_050: '',
  default_100: '',
  default_200: '',
  default_300: '',
  default_400: '',
  default_500: '',
  default_600: '',
  default_700: '',
  default_800: '',
  default_900: '',

  grey: '',
  grey2: '',
  grey_050: '',
  grey_100: '',
  grey_200: '',
  grey_300: '',
  grey_400: '',
  grey_500: '',
  grey_600: '',
  grey_700: '',
  grey_800: '',
  grey_900: '',

  active: '',
  active2: '',
  active_050: '',
  active_100: '',
  active_200: '',
  active_300: '',
  active_400: '',
  active_500: '',
  active_600: '',
  active_700: '',
  active_800: '',
  active_900: '',

  accent: '',
  accent2: '',
  accent_050: '',
  accent_100: '',
  accent_200: '',
  accent_300: '',
  accent_400: '',
  accent_500: '',
  accent_600: '',
  accent_700: '',
  accent_800: '',
  accent_900: '',

  action: '',
  action2: '',
  action_050: '',
  action_100: '',
  action_200: '',
  action_300: '',
  action_400: '',
  action_500: '',
  action_600: '',
  action_700: '',
  action_800: '',
  action_900: '',

  danger: '',
  danger2: '',
  danger_050: '',
  danger_100: '',
  danger_200: '',
  danger_300: '',
  danger_400: '',
  danger_500: '',
  danger_600: '',
  danger_700: '',
  danger_800: '',
  danger_900: '',

  error: '',
  error2: '',
  error_050: '',
  error_100: '',
  error_200: '',
  error_300: '',
  error_400: '',
  error_500: '',
  error_600: '',
  error_700: '',
  error_800: '',
  error_900: '',

  warning: '',
  warning2: '',
  warning_050: '',
  warning_100: '',
  warning_200: '',
  warning_300: '',
  warning_400: '',
  warning_500: '',
  warning_600: '',
  warning_700: '',
  warning_800: '',
  warning_900: '',

  success: '',
  success2: '',
  success_050: '',
  success_100: '',
  success_200: '',
  success_300: '',
  success_400: '',
  success_500: '',
  success_600: '',
  success_700: '',
  success_800: '',
  success_900: '',

  disabled: '',
  disabled2: '',
  disabled_050: '',
  disabled_100: '',
  disabled_200: '',
  disabled_300: '',
  disabled_400: '',
  disabled_500: '',
  disabled_600: '',
  disabled_700: '',
  disabled_800: '',
  disabled_900: '',
}

const elevateThemeDefaults: ElevateInterface = {
  0: '',
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
}

const fontThemeDefaults: FontInterface = {
  base: 16,

  color: 'grey_050',
  colorInvert: 'night_blue_700',
  letterSpacing: '0px',
  lineHeight: {
    0: 0,
    1: 1,
    2: 1.5,
    3: 1.75,
    4: 2,
    5: 2.5,
    default: 1.75,
  },
  family: {
    mono:
      "'Source Code Pro', 'Consolas', 'Inconsolata', 'Source Code Pro', 'Monaco', monospace !important",
    sans:
      'system_ui, _apple_system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, sans_serif',
    serif: "'Merriweather','Georgia',serif",
  },
  size: {
    0: '0rem',
    1: '0.512.rem',
    2: '0.64rem',
    3: '0.8rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.563rem',
    7: '1.953rem',
    8: '2.441rem',
    9: '3.052rem',
    10: '3.815rem',
    11: '4.768rem',
    12: '5.96rem',
    13: '7.451rem',
    14: '7.451rem',
    15: '9.313rem',
    16: '11.642rem',
    default: '1rem',
    base: '16px',
  },
  smooth: `
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased;0
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
  `,
  weight: {
    1: 400,
    2: 500,
    3: 600,
    4: 700,
    5: 800,
    6: 900,
    default: 400,
  },
}

const mediaQueriesThemeDefaults: MediaQueriesInterface = {
  sm: { min: `@media(min-width: 640px)`, max: `@media(max-width: 767px)` },
  md: { min: `@media(min-width: 768px)`, max: `@media(max-width: 1023px)` },
  lg: { min: `@media(min-width: 1024px)`, max: `@media(max-width: 1279px)` },
  xl: { min: `@media(min-width: 1280px)`, max: `@media(max-width: 1535px)` },
}

const radiusThemeDefaults: RadiusInterface = {
  circle: RADIUS_CIRCLE,
  none: RADIUS_NONE,
  round: RADIUS_ROUND,
  rounded: RADIUS_ROUNDED,
}

const scrollbarThemeDefaults: ScrollbarInterface = {
  width: '',
  height: '',
  backgroundColor: '',
  corner: {
    backgroundColor: '',
  },
  thumb: {
    backgroundColor: '',
    outline: '',
    transition: '',
    hover: {
      backgroundColor: '',
    },
  },
}

const utilityThemeDefaults: UtilityInterface = {
  /*
   * Color
   */
  color: (_color: ColorInterface) => (_value: ColorTypes) => ({ color: '' }),
  cl: (_color: ColorInterface) => (_value: ColorTypes) => ({ color: '' }),

  /*
   * Display
   */
  display: (_value: DisplayTypes) => ({ display: '' }),
  d: (_value: DisplayTypes) => ({ display: '' }),

  /*
   * Background
   */
  background: (_color: ColorInterface) => (_background: string) => ({
    background: '',
  }),
  bg: (_color: ColorInterface) => (_background: string) => ({ background: '' }),
  backgroundAttachment: (_backgroundAttachment: BackgroundAttachmentTypes) => ({
    backgroundAttachment: '',
  }),
  bga: (_backgroundAttachment: BackgroundAttachmentTypes) => ({
    backgroundAttachment: '',
  }),
  backgroundClip: (_backgroundClip: BackgroundClipTypes) => ({
    backgroundClip: '',
  }),
  bgl: (_backgroundClip: BackgroundClipTypes) => ({ backgroundClip: '' }),
  backgroundColor: (_color: ColorInterface) => (
    _backgroundColor: ColorTypes
  ) => ({ backgroundColor: '' }),
  bgc: (_color: ColorInterface) => (_background: string) => ({
    background: '',
  }),
  backgroundPosition: (_backgroundPosition: BackgroundPositionTypes) => ({
    backgroundPosition: '',
  }),
  bgp: (_backgroundPosition: BackgroundPositionTypes) => ({
    backgroundPosition: '',
  }),
  backgroundRepeat: (_backgroundRepeat: BackgroundRepeatTypes) => ({
    backgroundRepeat: '',
  }),
  bgr: (_backgroundRepeat: BackgroundRepeatTypes) => ({ backgroundRepeat: '' }),
  backgroundSize: (_backgroundSize: BackgroundSizeTypes) => ({
    backgroundSize: '',
  }),
  bgs: (_backgroundSize: BackgroundSizeTypes) => ({ backgroundSize: '' }),
  backgroundImage: (_backgroundImage: string) => ({ backgroundImage: '' }),
  bgi: (_backgroundImage: string) => ({ backgroundImage: '' }),

  /*
   * Border
   */
  border: (_border: BorderInterface) => (_border: string) => ({ border: '' }),
  borderBottom: (_border: BorderInterface) => (_borderBottom: string) => ({
    borderBottom: '',
  }),
  borderLeft: (_border: BorderInterface) => (_borderLeft: string) => ({
    borderLeft: '',
  }),
  borderRight: (_border: BorderInterface) => (_borderRight: string) => ({
    borderRight: '',
  }),
  borderTop: (_border: BorderInterface) => (_borderTop: string) => ({
    borderTop: '',
  }),
  borderX: (_border: BorderInterface) => (_value: string) => ({
    borderRight: '',
    borderLeft: '',
  }),
  borderY: (_border: BorderInterface) => (_value: string) => ({
    borderTop: '',
    borderBottom: '',
  }),
  borderWidth: (_borderWidth: string) => ({ borderWidth: '' }),
  borderColor: (_color: ColorInterface) => (_borderColor: ColorTypes) => ({
    borderColor: '',
  }),
  borderStyle: (_borderStyle: BorderStyleTypes) => ({
    borderStyle: '',
  }),
  bd: (_border: BorderInterface) => (_border: string) => ({ border: '' }),
  bdb: (_border: BorderInterface) => (_borderBottom: string) => ({
    borderBottom: '',
  }),
  bdl: (_border: BorderInterface) => (_borderLeft: string) => ({
    borderLeft: '',
  }),
  bdr: (_border: BorderInterface) => (_borderRight: string) => ({
    borderRight: '',
  }),
  bdt: (_border: BorderInterface) => (_borderTop: string) => ({
    borderTop: '',
  }),
  bdx: (_border: BorderInterface) => (_value: string) => ({
    borderRight: '',
    borderLeft: '',
  }),
  bdy: (_border: BorderInterface) => (_value: string) => ({
    borderTop: '',
    borderBottom: '',
  }),
  bdw: (_borderWidth: string) => ({ borderWidth: '' }),
  bdc: (_color: ColorInterface) => (_borderColor: ColorTypes) => ({
    borderColor: '',
  }),
  bds: (_bds: BorderStyleTypes) => ({ borderStyle: '' }),

  radius: (_radius: RadiusInterface) => (_value: string) => ({
    borderRadius: '',
  }),
  borderBottomRadius: (_radius: RadiusInterface) => (_value: string) => ({
    borderBottomRadius: '',
  }),
  borderLeftRadius: (_radius: RadiusInterface) => (_value: string) => ({
    borderLeftRadius: '',
  }),
  borderRightRadius: (_radius: RadiusInterface) => (_value: string) => ({
    borderRightRadius: '',
  }),
  borderTopRadius: (_radius: RadiusInterface) => (_value: string) => ({
    borderTopRadius: '',
  }),
  borderYRadius: (_radius: RadiusInterface) => (_value: string) => ({
    borderTopRadius: '',
    borderBottomRadius: '',
  }),
  borderXRadius: (_radius: RadiusInterface) => (_value: string) => ({
    borderRightRadius: '',
    borderLeftRadius: '',
  }),
  r: (_radius: RadiusInterface) => (_value: string) => ({
    borderRadius: '',
  }),
  rb: (_radius: RadiusInterface) => (_value: string) => ({
    borderBottomRadius: '',
  }),
  rl: (_radius: RadiusInterface) => (_value: string) => ({
    borderLeftRadius: '',
  }),
  rr: (_radius: RadiusInterface) => (_value: string) => ({
    borderRightRadius: '',
  }),
  rt: (_radius: RadiusInterface) => (_value: string) => ({
    borderTopRadius: '',
  }),
  ry: (_radius: RadiusInterface) => (_value: string) => ({
    borderTopRadius: '',
    borderBottomRadius: '',
  }),
  rx: (_radius: RadiusInterface) => (_value: string) => ({
    borderRightRadius: '',
    borderLeftRadius: '',
  }),

  /*
   * Margin
   */
  margin: (_value: string | number) => ({ margin: '' }),
  marginBottom: (_value: string | number) => ({ marginBottom: '' }),
  marginTop: (_value: string | number) => ({ marginTop: '' }),
  marginLeft: (_value: string | number) => ({ marginLeft: '' }),
  marginRight: (_value: string | number) => ({ marginRight: '' }),
  marginX: (_value: string | number) => ({ marginRight: '', marginLeft: '' }),
  marginY: (_value: string | number) => ({ marginTop: '', marginBottom: '' }),
  margin0: (_value: string) => ({ margin: '' }),
  margin1: (_value: string) => ({ margin: '' }),
  margin2: (_value: string) => ({ margin: '' }),
  margin3: (_value: string) => ({ margin: '' }),
  margin4: (_value: string) => ({ margin: '' }),
  margin5: (_value: string) => ({ margin: '' }),
  margin6: (_value: string) => ({ margin: '' }),
  margin7: (_value: string) => ({ margin: '' }),
  margin8: (_value: string) => ({ margin: '' }),
  margin9: (_value: string) => ({ margin: '' }),
  margin10: (_value: string) => ({ margin: '' }),
  m: (_value: string | number) => ({ margin: '' }),
  mt: (_value: string | number) => ({ marginTop: '' }),
  mr: (_value: string | number) => ({ marginRight: '' }),
  mb: (_value: string | number) => ({ marginBottom: '' }),
  ml: (_value: string | number) => ({ marginLeft: '' }),
  mx: (_value: string | number) => ({ marginRight: '', marginLeft: '' }),
  my: (_value: string | number) => ({ marginTop: '', marginBottom: '' }),
  m0: (_value: string) => ({ margin: '' }),
  m1: (_value: string) => ({ margin: '' }),
  m2: (_value: string) => ({ margin: '' }),
  m3: (_value: string) => ({ margin: '' }),
  m4: (_value: string) => ({ margin: '' }),
  m5: (_value: string) => ({ margin: '' }),
  m6: (_value: string) => ({ margin: '' }),
  m7: (_value: string) => ({ margin: '' }),
  m8: (_value: string) => ({ margin: '' }),
  m9: (_value: string) => ({ margin: '' }),
  m10: (_value: string) => ({ margin: '' }),

  /*
   * Padding
   */
  padding: (_value: string | number) => ({ padding: '' }),
  paddingBottom: (_value: string | number) => ({ paddingBottom: '' }),
  paddingTop: (_value: string | number) => ({ paddingTop: '' }),
  paddingLeft: (_value: string | number) => ({ paddingLeft: '' }),
  paddingRight: (_value: string | number) => ({ paddingRight: '' }),
  paddingX: (_value: string | number) => ({
    paddingRight: '',
    paddingLeft: '',
  }),
  paddingY: (_value: string | number) => ({
    paddingTop: '',
    paddingBottom: '',
  }),
  padding0: (_value: string) => ({ padding: '' }),
  padding1: (_value: string) => ({ padding: '' }),
  padding2: (_value: string) => ({ padding: '' }),
  padding3: (_value: string) => ({ padding: '' }),
  padding4: (_value: string) => ({ padding: '' }),
  padding5: (_value: string) => ({ padding: '' }),
  padding6: (_value: string) => ({ padding: '' }),
  padding7: (_value: string) => ({ padding: '' }),
  padding8: (_value: string) => ({ padding: '' }),
  padding9: (_value: string) => ({ padding: '' }),
  padding10: (_value: string) => ({ padding: '' }),
  p: (_value: string | number) => ({ padding: '' }),
  pTop: (_value: string | number) => ({ paddingTop: '' }),
  pRight: (_value: string | number) => ({ paddingRight: '' }),
  pBottom: (_value: string | number) => ({ paddingBottom: '' }),
  pLeft: (_value: string | number) => ({ paddingLeft: '' }),
  pX: (_value: string | number) => ({ paddingRight: '', paddingLeft: '' }),
  pY: (_value: string | number) => ({ paddingTop: '', paddingBottom: '' }),
  p0: (_value: string) => ({ padding: '' }),
  p1: (_value: string) => ({ padding: '' }),
  p2: (_value: string) => ({ padding: '' }),
  p3: (_value: string) => ({ padding: '' }),
  p4: (_value: string) => ({ padding: '' }),
  p5: (_value: string) => ({ padding: '' }),
  p6: (_value: string) => ({ padding: '' }),
  p7: (_value: string) => ({ padding: '' }),
  p8: (_value: string) => ({ padding: '' }),
  p9: (_value: string) => ({ padding: '' }),
  p10: (_value: string) => ({ padding: '' }),

  /*
   * Elevate/ Box Sizing
   */
  elevate: (_elevate: ElevateInterface) => (_value: string) => ({
    boxShadow: '',
  }),
  e: (_elevate: ElevateInterface) => (_value: string) => ({
    boxShadow: '',
  }),
  boxSizing: (_boxSizing: BoxSizingTypes) => ({ boxSizing: '' }),
  bs: (_boxSizing: BoxSizingTypes) => ({ boxSizing: '' }),

  /*
   * Centered
   */
  centered: () => ({ margin: '0 auto' }),
  cd: () => ({ margin: '0 auto' }),

  /*
   * Flex
   */
  flex: (_value: string) => ({ flex: '' }),
  fl: (_value: string) => ({ flex: '' }),
  flexGrow: (_value: string | number) => ({ flexGrow: '' }),
  flg: (_value: string | number) => ({ flexGrow: '' }),

  flexShrink: (_value: string | number) => ({ flexShrink: '' }),
  fls: (_value: string | number) => ({ flexShrink: '' }),
  flexDirection: (_value: FlexDirectionTypes) => ({ flexDirection: '' }),
  fld: (_value: FlexDirectionTypes) => ({ flexDirection: 'string' }),
  flexWrap: (_value: FlexWrapTypes) => ({ flexWrap: 'string' }),
  flw: (_value: FlexWrapTypes) => ({ flexWrap: 'string' }),
  flexBasis: (_value: string | number) => ({ flexBasis: '' }),
  flb: (_value: string | number) => ({ flexBasis: '' }),

  order: (_value: string | number) => ({ order: '' }),
  od: (_value: string | number) => ({ order: '' }),

  justifyContent: (_value: FlexContentTypes) => ({ justifyContent: '' }),
  jc: (_value: FlexContentTypes) => ({ justifyContent: '' }),
  justifyItems: (_value: FlexItemsTypes) => ({ justifyItems: '' }),
  ji: (_value: FlexItemsTypes) => ({ justifyItems: '' }),
  justifySelf: (_value: FlexSelfTypes) => ({ justifySelf: '' }),
  js: (_value: FlexSelfTypes) => ({ justifySelf: '' }),

  alignContent: (_value: FlexContentTypes) => ({ alignContent: '' }),
  ac: (_value: FlexContentTypes) => ({ alignContent: '' }),
  alignItems: (_value: FlexItemsTypes) => ({ alignItems: '' }),
  ai: (_value: FlexItemsTypes) => ({ alignItems: '' }),
  alignSelf: (_value: FlexSelfTypes) => ({ alignSelf: '' }),
  af: (_value: FlexSelfTypes) => ({ alignSelf: '' }),

  /*
   * Width / Height
   */
  h: (_unit: UnitInterface) => (_value: string) => ({ height: '' }),
  w: (_unit: UnitInterface) => (_value: string) => ({ width: '' }),
  maxWidth: (_unit: UnitInterface) => (_value: string) => ({ maxWidth: '' }),
  mw: (_unit: UnitInterface) => (_value: string) => ({ maxWidth: '' }),
  maxHeight: (_unit: UnitInterface) => (_value: string) => ({ maxHeight: '' }),
  mh: (_unit: UnitInterface) => (_value: string) => ({ maxHeight: '' }),
  wh: (_unit: UnitInterface) => (_value: string) => ({ width: '', height: '' }),

  /*
   * Text
   */
  textAlign: (_value: TextAlignTypes) => ({ textAlign: '' }),
  ta: (_value: TextAlignTypes) => ({ textAlign: '' }),
  truncate: () => ({
    overflow: 'hidden',
    whiteSpace: 'ellipsis',
    textOverflow: 'nowrap',
  }),
  tc: () => ({
    overflow: 'hidden',
    whiteSpace: 'ellipsis',
    textOverflow: 'nowrap',
  }),
  wordBreak: (_wordBreak: WordBreakTypes) => ({ wordBreak: '' }),
  wb: (_wordBreak: WordBreakTypes) => ({ wordBreak: '' }),

  listStyle: (_listStyle: ListStyleTypes) => ({ listStyle: '' }),
  lt: (_listStyle: ListStyleTypes) => ({ listStyle: '' }),
  listPosition: (_listPosition: ListPositionTypes) => ({ listPosition: '' }),
  lp: (_listPosition: ListPositionTypes) => ({ listPosition: '' }),
  textDecoration: (_textDecoration: TextDecorationTypes) => ({
    textDecoration: '',
  }),
  td: (_textDecoration: TextDecorationTypes) => ({ textDecoration: '' }),
  textTransform: (_textTransform: TextTransformTypes) => ({
    textTransform: '',
  }),
  tt: (_textTransform: TextTransformTypes) => ({ textTransform: '' }),
  verticalAlign: (_verticalAlign: VerticalAlignTypes) => ({
    verticalAlign: '',
  }),
  va: (_verticalAlign: VerticalAlignTypes) => ({ verticalAlign: '' }),
  whiteSpace: (_whiteSpace: WhiteSpaceTypes) => ({ whiteSpace: '' }),
  ws: (_whiteSpace: WhiteSpaceTypes) => ({ whiteSpace: '' }),

  /*
   * Media
   */
  mq: (_mediaQuires: MediaQueriesInterface) => (_value: {
    [key: string]: any
  }) => (..._args: any[]) => [{}],

  /*
   * Position
   */
  position: (_value: PositionTypes) => ({ position: '' }),
  ps: (_value: PositionTypes) => ({ position: '' }),
  top: (_value: string) => ({ top: '' }),
  bottom: (_value: string) => ({ bottom: '' }),
  left: (_value: string) => ({ left: '' }),
  right: (_value: string) => ({ right: '' }),

  /*
   * Floats
   */
  float: (_value: FloatTypes) => ({ float: '' }),
  ft: (_value: FloatTypes) => ({ float: '' }),
  clearFix: () => `&::after {
    content: "";
    display: table;
    clear: both;
  }`,
  cf: () => `&::after {
    content: "";
    display: table;
    clear: both;
  }`,

  overflow: (_value: FlexSelfTypes) => ({ overflow: '' }),
  of: (_value: FlexSelfTypes) => ({ overflow: '' }),
  overflowX: (_overflowX: OverflowTypes) => ({ overflowX: '' }),
  ox: (_overflowX: OverflowTypes) => ({ overflow: '' }),
  overflowY: (_overflowY: OverflowTypes) => ({ overflowY: '' }),
  oy: (_overflowY: OverflowTypes) => ({ overflow: '' }),
  overflowScrolling: (_overflowScrolling: OverflowScrollingTypes) => ({
    '-webkit-Overflow-scrolling': '',
  }),
  os: (_overflowScrolling: OverflowScrollingTypes) => ({
    '-webkit-Overflow-scrolling': '',
  }),
  overflowWrap: (_overflowWrap: OverflowWrapTypes) => ({ overflowWrap: '' }),
  ow: (_overflowWrap: OverflowWrapTypes) => ({ overflowWrap: '' }),

  /*
   * Font
   */
  fontSize: (_font: FontInterface) => (_value: string) => ({ fontSize: '' }),
  fs: (_font: FontInterface) => (_value: string) => ({ fontSize: '' }),
  lineHeight: (_font: FontInterface) => (_value: string | number) => ({
    lineHeight: '',
  }),
  lh: (_font: FontInterface) => (_value: string | number) => ({
    lineHeight: '',
  }),
  letterSpacing: (_value: string) => ({ letterSpacing: '' }),
  ls: (_value: string) => ({ letterSpacing: '' }),
  fontWeight: (_font: FontInterface) => (_value: string | number) => ({
    fontWeight: '',
  }),
  fw: (_font: FontInterface) => (_value: string | number) => ({
    fontWeight: '',
  }),
  fontFamily: (_font: FontInterface) => (_fontFamily: FontFamilyTypes) => ({
    fontFamily: '',
  }),
  ff: (_font: FontInterface) => (_fontFamily: FontFamilyTypes) => ({
    fontFamily: '',
  }),

  /*
   * Z Index
   */
  zIndex: (_zIndex: number | string | 'auto') => ({ zIndex: '' }),
  z: (_zIndex: number | string | 'auto') => ({ zIndex: '' }),

  /*
   * Object
   */
  objectFit: (_objectFit: ObjectFitTypes) => ({ objectFit: '' }),
  ot: (_objectFit: ObjectFitTypes) => ({ objectFit: '' }),
  objectPosition: (_objectPosition: ObjectPositionTypes) => ({
    objectPosition: '',
  }),
  op: (_objectPosition: ObjectPositionTypes) => ({ objectPosition: '' }),

  /*
   * Visibility
   */
  visibility: (_visibility: VisibilityTypes) => ({ visibility: '' }),
  vs: (_visibility: VisibilityTypes) => ({ visibility: '' }),

  /*
   * Interactivity
   */
  cursor: (_cursor: CursorTypes) => ({ cursor: '' }),
  cr: (_cursor: CursorTypes) => ({ cursor: '' }),
  appearance: (_appearance: AppearanceCssTypes) => ({
    appearance: '',
  }),
  ap: (_appearance: AppearanceCssTypes) => ({ appearance: '' }),
  pointerEvents: (_pointerEvents: PointerEventsTypes) => ({
    pointerEvents: '',
  }),
  pe: (_pointerEvents: PointerEventsTypes) => ({ pointerEvents: '' }),
  resize: (_resize: ResizeTypes) => ({ resize: '' }),
  rs: (_resize: ResizeTypes) => ({ resize: '' }),
  userSelect: (_userSelect: UserSelectTypes) => ({ userSelect: '' }),
  us: (_userSelect: UserSelectTypes) => ({ userSelect: '' }),

  /*
   * Transition
   */
  transition: (_transition: TransitionTypes) => ({ transition: '' }),
  tr: (_transition: TransitionTypes) => ({ transition: '' }),

  /*
   * Transforms
   */
  transform: (_transform: string) => ({ transform: '' }),
  tf: (_transform: string) => ({ transform: '' }),
}

const swatchesThemeDefaults = {}

const unitThemeDefaults: UnitInterface = {
  1: '',
  2: '',
  0: '',
  3: '',
  4: '',
  5: '',
  6: '',
  7: '',
  8: '',
  9: '',
  10: '',
  11: '',
  12: '',
  13: '',
  14: '',
  15: '',
  16: '',
  default: '',
}

export const themeDefaults: ThemeInterface = {
  transition: transitionThemeDefaults,
  border: borderThemeDefaults,
  color: colorThemeDefaults,
  elevate: elevateThemeDefaults,
  font: fontThemeDefaults,
  breakpoints: breakpointsTheme,
  mediaQueries: mediaQueriesThemeDefaults,
  radius: radiusThemeDefaults,
  scrollbar: scrollbarThemeDefaults,
  utility: utilityThemeDefaults,
  swatches: swatchesThemeDefaults,
  unit: unitThemeDefaults,
  global: {},
}
