import { XSLOW, SLOW, MEDIUM, FAST, TransitionInterface } from '../transition'
import { ThemeInterface } from '../theme'
import {
  BorderInterface,
  BORDER_NONE,
  BORDER_STYLE,
  BORDER_DASH,
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
import { FontInterface } from '../font'
import {
  UtilityInterface,
  FlexDirectionTypes,
  FlexWrapTypes,
  FlexContentTypes,
  FlexItemsTypes,
  FlexSelfTypes,
} from '../utility'
import { UnitInterface } from '../unit'

import { noopString } from '../utils'
import { MediaQueriesInterface } from 'mediaQueries'

export const transitionThemeDefaults: TransitionInterface = {
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

export const borderThemeDefaults: BorderInterface = {
  none: BORDER_NONE,
  style: BORDER_STYLE,
  dash: BORDER_DASH,

  thickWidth: BORDER_THICK_WIDTH,
  thickColor: BORDER_THICK_COLOR,
  thinWidth: BORDER_THIN_WIDTH,
  thinColor: BORDER_THIN_COLOR,

  thick: '',
  thickInvert: '',
  thickDashed: '',
  thickDashedInvert: '',
  thickTransparent: '',

  thin: '',
  thinDashed: '',
  thinDashedInvert: '',
  thinInvert: '',
  thinTransparent: '',
}

export const colorThemeDefaults: ColorInterface = {
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

export const elevateThemeDefaults: ElevateInterface = {
  0: '',
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
}

export const fontThemeDefaults: FontInterface = {
  base: 16,
  code:
    "'Source Code Pro', 'Consolas', 'Inconsolata', 'Source Code Pro', 'Monaco', monospace !important",
  color: 'grey_050',
  colorInvert: 'night_blue_700',
  letterSpacing: '0px',
  lineHeight: {
    1: 1,
    2: 1.5,
    3: 1.75,
    4: 2,
    5: 2.5,
    default: 1.75,
  },
  sans:
    'system_ui, _apple_system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, sans_serif',
  serif: "'Merriweather','Georgia',serif",
  size: {
    1: '12px',
    2: '14px',
    3: '16px',
    4: '18px',
    5: '20px',
    6: '24px',
    7: '30px',
    8: '36px',
    9: '48px',
    10: '60px',
    11: '72px',
    12: '84px',
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

export const mediaQueriesThemeDefaults: MediaQueriesInterface = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
}

export const radiusThemeDefaults: RadiusInterface = {
  circle: RADIUS_CIRCLE,
  none: RADIUS_NONE,
  round: RADIUS_ROUND,
  rounded: RADIUS_ROUNDED,
}

export const scrollbarThemeDefaults: ScrollbarInterface = {
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

export const utilityThemeDefaults: UtilityInterface = {
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

  border: (_border: BorderInterface) => (_value: string) => ({ border: '' }),
  borderBottom: (_border: BorderInterface) => (_value: string) => ({
    borderBottom: '',
  }),
  borderLeft: (_border: BorderInterface) => (_value: string) => ({
    borderLeft: '',
  }),
  borderRight: (_border: BorderInterface) => (_value: string) => ({
    borderRight: '',
  }),
  borderTop: (_border: BorderInterface) => (_value: string) => ({
    borderTop: '',
  }),
  borderY: (_border: BorderInterface) => (_value: string) => ({
    borderTop: '',
    borderBottom: '',
  }),
  borderX: (_border: BorderInterface) => (_value: string) => ({
    borderRight: '',
    borderLeft: '',
  }),
  b: (_border: BorderInterface) => (_value: string) => ({ border: '' }),
  bb: (_border: BorderInterface) => (_value: string) => ({ borderBottom: '' }),
  bl: (_border: BorderInterface) => (_value: string) => ({ borderLeft: '' }),
  br: (_border: BorderInterface) => (_value: string) => ({ borderRight: '' }),
  bt: (_border: BorderInterface) => (_value: string) => ({ borderTop: '' }),
  by: (_border: BorderInterface) => (_value: string) => ({
    borderTop: '',
    borderBottom: '',
  }),
  bx: (_border: BorderInterface) => (_value: string) => ({
    borderRight: '',
    borderLeft: '',
  }),

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

  elevate: (_elevate: ElevateInterface) => (_value: string) => ({
    boxShadow: '',
  }),
  e: (_elevate: ElevateInterface) => (_value: string) => ({
    boxShadow: '',
  }),

  centered: () => ({ margin: '0 auto' }),
  c: () => ({ margin: '0 auto' }),

  display: (_value: string) => ({ display: '' }),
  d: (_value: string) => ({ display: '' }),

  flex: (_value: string) => ({ flex: '' }),
  f: (_value: string) => ({ flex: '' }),
  flexGrow: (_value: string | number) => ({ flexGrow: '' }),
  fg: (_value: string | number) => ({ flexGrow: '' }),
  order: (_value: string | number) => ({ order: '' }),
  od: (_value: string | number) => ({ order: '' }),
  flexShrink: (_value: string | number) => ({ flexShrink: '' }),
  fs: (_value: string | number) => ({ flexShrink: '' }),
  flexDirection: (_value: FlexDirectionTypes) => ({ flexDirection: '' }),
  fd: (_value: FlexDirectionTypes) => ({ flexDirection: 'string' }),
  flexWrap: (_value: FlexWrapTypes) => ({ flexWrap: 'string' }),
  fw: (_value: FlexWrapTypes) => ({ flexWrap: 'string' }),
  flexBasis: (_value: string | number) => ({ flexBasis: '' }),
  fb: (_value: string | number) => ({ flexBasis: '' }),

  justifyContent: (_value: FlexContentTypes) => ({ justifyContent: '' }),
  jc: (_value: FlexContentTypes) => ({ justifyContent: '' }),
  justifyItems: (_value: FlexItemsTypes) => ({ justifyContent: '' }),
  ji: (_value: FlexItemsTypes) => ({ justifyContent: '' }),
  justifySelf: (_value: FlexSelfTypes) => ({ justifyContent: '' }),
  js: (_value: FlexSelfTypes) => ({ justifyContent: '' }),

  alignContent: (_value: FlexContentTypes) => ({ alignContent: '' }),
  ac: (_value: FlexContentTypes) => ({ alignContent: '' }),
  alignItems: (_value: FlexItemsTypes) => ({ alignItems: '' }),
  ai: (_value: FlexItemsTypes) => ({ alignItems: '' }),
  alignSelf: (_value: FlexSelfTypes) => ({ alignSelf: '' }),
  af: (_value: FlexSelfTypes) => ({ alignSelf: '' }),

  heightSize: (_unit: UnitInterface) => (_value: string) => ({
    width: 'string',
  }),
  h: (_unit: UnitInterface) => (_value: string) => ({ width: '' }),
  widthSize: (_unit: UnitInterface) => (_value: string) => ({ width: '' }),
  w: (_unit: UnitInterface) => (_value: string) => ({ width: '' }),

  overflow: (_value: FlexSelfTypes) => ({ overflow: '' }),
  of: (_value: FlexSelfTypes) => ({ overflow: '' }),
}

export const swatchesThemeDefaults = {}

export const unitThemeDefaults: UnitInterface = {
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
  default: '',
}

export const themeDefaults: ThemeInterface = {
  transition: transitionThemeDefaults,
  border: borderThemeDefaults,
  color: colorThemeDefaults,
  elevate: elevateThemeDefaults,
  font: fontThemeDefaults,
  mediaQueries: mediaQueriesThemeDefaults,
  radius: radiusThemeDefaults,
  scrollbar: scrollbarThemeDefaults,
  utility: utilityThemeDefaults,
  swatches: swatchesThemeDefaults,
  unit: unitThemeDefaults,
  global: {},
}
