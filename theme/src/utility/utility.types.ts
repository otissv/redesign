import { UnitInterface } from '../unit'
import { BorderInterface } from '../border'
import { ElevateInterface } from '../elevate'
import { RadiusInterface } from '../radius'
export interface AliasInterface {
  [key: string]: string
}

export interface UtilityInterface {
  margin: (value: string | number) => { margin: string | number }
  marginTop: (value: string | number) => { marginTop: string | number }
  marginRight: (value: string | number) => { marginRight: string | number }
  marginBottom: (value: string | number) => { marginBottom: string | number }
  marginLeft: (value: string | number) => { marginLeft: string | number }
  marginX: (
    value: string | number
  ) => { marginRight: string | number; marginLeft: string | number }
  marginY: (
    value: string | number
  ) => { marginTop: string; marginBottom: string | number }
  margin0: (value: string) => { margin: string }
  margin1: (value: string) => { margin: string }
  margin2: (value: string) => { margin: string }
  margin3: (value: string) => { margin: string }
  margin4: (value: string) => { margin: string }
  margin5: (value: string) => { margin: string }
  margin6: (value: string) => { margin: string }
  margin7: (value: string) => { margin: string }
  margin8: (value: string) => { margin: string }
  margin9: (value: string) => { margin: string }
  margin10: (value: string) => { margin: string }
  m: (value: string | number) => { margin: string | number }
  mt: (value: string | number) => { marginTop: string | number }
  mr: (value: string | number) => { marginRight: string | number }
  mb: (value: string | number) => { marginBottom: string | number }
  ml: (value: string | number) => { marginLeft: string | number }
  mx: (
    value: string | number
  ) => { marginRight: string | number; marginLeft: string | number }
  my: (
    value: string | number
  ) => { marginTop: string | number; marginBottom: string | number }
  m0: (value: string) => { margin: string }
  m1: (value: string) => { margin: string }
  m2: (value: string) => { margin: string }
  m3: (value: string) => { margin: string }
  m4: (value: string) => { margin: string }
  m5: (value: string) => { margin: string }
  m6: (value: string) => { margin: string }
  m7: (value: string) => { margin: string }
  m8: (value: string) => { margin: string }
  m9: (value: string) => { margin: string }
  m10: (value: string) => { margin: string }

  padding: (value: string | number) => { padding: string | number }
  paddingTop: (value: string | number) => { paddingTop: string | number }
  paddingRight: (value: string | number) => { paddingRight: string | number }
  paddingBottom: (value: string | number) => { paddingBottom: string | number }
  paddingLeft: (value: string | number) => { paddingLeft: string | number }
  paddingX: (
    value: string | number
  ) => { paddingRight: string; paddingLeft: string | number }
  paddingY: (
    value: string | number
  ) => { paddingTop: string; paddingBottom: string | number }
  padding0: (value: string) => { padding: string }
  padding1: (value: string) => { padding: string }
  padding2: (value: string) => { padding: string }
  padding3: (value: string) => { padding: string }
  padding4: (value: string) => { padding: string }
  padding5: (value: string) => { padding: string }
  padding6: (value: string) => { padding: string }
  padding7: (value: string) => { padding: string }
  padding8: (value: string) => { padding: string }
  padding9: (value: string) => { padding: string }
  padding10: (value: string) => { padding: string }
  p: (value: string | number) => { padding: string | number }
  pTop: (value: string | number) => { paddingTop: string | number }
  pRight: (value: string | number) => { paddingRight: string | number }
  pBottom: (value: string | number) => { paddingBottom: string | number }
  pLeft: (value: string | number) => { paddingLeft: string | number }
  pX: (value: string) => { paddingRight: string; paddingLeft: string }
  pY: (value: string) => { paddingTop: string; paddingBottom: string }
  p0: (value: string) => { padding: string }
  p1: (value: string) => { padding: string }
  p2: (value: string) => { padding: string }
  p3: (value: string) => { padding: string }
  p4: (value: string) => { padding: string }
  p5: (value: string) => { padding: string }
  p6: (value: string) => { padding: string }
  p7: (value: string) => { padding: string }
  p8: (value: string) => { padding: string }
  p9: (value: string) => { padding: string }
  p10: (value: string) => { padding: string }

  border: (border: BorderInterface) => (value: string) => { border: string }
  borderBottom: (
    border: BorderInterface
  ) => (value: string) => { borderBottom: string }
  borderLeft: (
    border: BorderInterface
  ) => (value: string) => { borderLeft: string }
  borderRight: (
    border: BorderInterface
  ) => (value: string) => { borderRight: string }
  borderTop: (
    border: BorderInterface
  ) => (value: string) => { borderTop: string }
  borderX: (
    border: BorderInterface
  ) => (value: string) => { borderRight: string; borderLeft: string }
  borderY: (
    border: BorderInterface
  ) => (value: string) => { borderTop: string; borderBottom: string }
  b: (border: BorderInterface) => (value: string) => { border: string }
  bb: (border: BorderInterface) => (value: string) => { borderBottom: string }
  bl: (border: BorderInterface) => (value: string) => { borderLeft: string }
  br: (border: BorderInterface) => (value: string) => { borderRight: string }
  bt: (border: BorderInterface) => (value: string) => { borderTop: string }
  bx: (
    border: BorderInterface
  ) => (value: string) => { borderRight: string; borderLeft: string }
  by: (
    border: BorderInterface
  ) => (value: string) => { borderTop: string; borderBottom: string }

  radius: (
    radius: RadiusInterface
  ) => (value: string) => { borderRadius: string }
  borderBottomRadius: (
    radius: RadiusInterface
  ) => (value: string) => { borderBottomRadius: string }
  borderLeftRadius: (
    radius: RadiusInterface
  ) => (value: string) => { borderLeftRadius: string }
  borderRightRadius: (
    radius: RadiusInterface
  ) => (value: string) => { borderRightRadius: string }
  borderTopRadius: (
    radius: RadiusInterface
  ) => (value: string) => { borderTopRadius: string }
  borderXRadius: (
    radius: RadiusInterface
  ) => (
    value: string
  ) => { borderRightRadius: string; borderLeftRadius: string }
  borderYRadius: (
    radius: RadiusInterface
  ) => (
    radius: string
  ) => { borderTopRadius: string; borderBottomRadius: string }
  r: (radius: RadiusInterface) => (value: string) => { borderRadius: string }
  rb: (
    radius: RadiusInterface
  ) => (value: string) => { borderBottomRadius: string }
  rl: (
    radius: RadiusInterface
  ) => (value: string) => { borderLeftRadius: string }
  rr: (
    radius: RadiusInterface
  ) => (value: string) => { borderRightRadius: string }
  rt: (
    radius: RadiusInterface
  ) => (value: string) => { borderTopRadius: string }
  rx: (
    radius: RadiusInterface
  ) => (
    value: string
  ) => { borderRightRadius: string; borderLeftRadius: string }
  ry: (
    radius: RadiusInterface
  ) => (
    value: string
  ) => { borderTopRadius: string; borderBottomRadius: string }

  display: (value: string) => { display: string }
  d: (value: string) => { display: string }

  flex: (value: string) => { flex: string }
  f: (value: string) => { flex: string }
  flexGrow: (value: number | string) => { flexGrow: number | string }
  fg: (value: string) => { flexGrow: string }
  order: (value: number | string) => { order: number | string }
  od: (value: number | string) => { order: number | string }
  flexShrink: (value: string | number) => { flexShrink: string | number }
  fs: (value: string | number) => { flexShrink: string | number }
  flexDirection: (value: FlexDirectionTypes) => { flexDirection: string }
  fd: (value: FlexDirectionTypes) => { flexDirection: string }
  flexWrap: (value: FlexWrapTypes) => { flexWrap: string }
  fw: (value: FlexWrapTypes) => { flexWrap: string }
  flexBasis: (value: string | number) => { flexBasis: string | number }
  fb: (value: string | number) => { flexBasis: string | number }

  justifyContent: (value: FlexContentTypes) => { justifyContent: string }
  jc: (value: FlexContentTypes) => { justifyContent: string }
  justifyItems: (value: FlexItemsTypes) => { justifyContent: string }
  ji: (value: FlexItemsTypes) => { justifyContent: string }
  justifySelf: (value: FlexSelfTypes) => { justifyContent: string }
  js: (value: FlexSelfTypes) => { justifyContent: string }

  alignContent: (value: FlexContentTypes) => { alignContent: string }
  ac: (value: FlexContentTypes) => { alignContent: string }
  alignItems: (value: FlexItemsTypes) => { alignItems: string }
  ai: (value: FlexItemsTypes) => { alignItems: string }
  alignSelf: (value: FlexSelfTypes) => { alignSelf: string }
  af: (value: FlexSelfTypes) => { alignSelf: string }

  elevate: (
    elevate: ElevateInterface
  ) => (value: string) => { boxShadow: string }
  e: (elevate: ElevateInterface) => (value: string) => { boxShadow: string }

  centered: () => { margin: string }
  c: () => { margin: string }

  heightSize: (unit: UnitInterface) => (value: string) => { width: string }
  h: (unit: UnitInterface) => (value: string) => { width: string }
  widthSize: (unit: UnitInterface) => (value: string) => { width: string }
  w: (unit: UnitInterface) => (value: string) => { width: string }

  overflow: (value: string) => { overflow: string }
  of: (value: string) => { overflow: string }
}

export type FlexDirectionTypes =
  | 'column'
  | 'column-reverse'
  | 'row-reverse'
  | 'revert'
  | 'row'
  | string

export type FlexWrapTypes = 'nowrap' | 'wrap' | 'wrap-reverse' | string

export type FlexPositionTypes =
  | 'flex-start'
  | 'flex-end '
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | string

export type FlexContentTypes = FlexPositionTypes

export type FlexItemsTypes = FlexPositionTypes

export type FlexSelfTypes = FlexPositionTypes | 'baseline'

export interface PartialUtilityInterface extends Partial<UtilityInterface> {}

//TODO: add to utilites

// export const TRUNCATE = 'TRUNCATE'
// export const BREAK = 'BREAK'
// export const NOWRAP = 'NOWRAP'

// export type TextAlignType =
//   | typeof LEFT
//   | typeof RIGHT
//   | typeof CENTER
//   | typeof JUSTIFY

// export type TextTransformType =
//   | typeof CAPITALIZE
//   | typeof LOWERCASE
//   | typeof UPPERCASE

// export type TextVerticalType = typeof TOP | typeof MIDDLE | typeof BOTTOM

// export type TextWrapType = typeof TRUNCATE | typeof BREAK | typeof NOWRAP

// textAlign?: TextAlignType
// textTransform?: TextTransformType
// textVertical?: TextVerticalType
// textWrap?: TextWrapType
// weight?: FontWeightType
// sans?: FontSansType
// serif?: FontSerifType
// size?: FontSizeType
// smooth?: FontSmoothType
// letterSpacing?: FontLetterSpacingType
// lineHeight?: FontLineHeightInterface
