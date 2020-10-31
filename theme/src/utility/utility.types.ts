import { DynamicStyleFunction } from 'facepaint'
import { UnitInterface } from '../unit'
import { BorderInterface } from '../border'
import { ElevateInterface } from '../elevate'
import { RadiusInterface } from '../radius'
import { ColorInterface } from '../color'
import { FontInterface, FontFamilyTypes } from '../font'
import { MediaQueriesInterface } from '../mediaQueries'
import { TransitionInterface } from '../transition'

export interface AliasInterface {
  [key: string]: string
}

export interface UtilityInterface {
  /*
   * Color
   */
  color: (color: ColorInterface) => (value: string) => { color: ColorTypes }
  cl: (color: ColorInterface) => (value: string) => { color: ColorTypes }

  /*
   * Display
   */
  display: (display: DisplayTypes) => { display: DisplayTypes }
  d: (display: DisplayTypes) => { display: DisplayTypes }

  /*
   * Background
   */
  background: (
    color: ColorInterface
  ) => (background: string) => { background: string }
  bg: (color: ColorInterface) => (background: string) => { background: string }
  backgroundAttachment: (
    backgroundAttachment: BackgroundAttachmentTypes
  ) => { backgroundAttachment: BackgroundAttachmentTypes }
  bga: (
    backgroundAttachment: BackgroundAttachmentTypes
  ) => { backgroundAttachment: BackgroundAttachmentTypes }
  backgroundClip: (
    backgroundClip: BackgroundClipTypes
  ) => { backgroundClip: BackgroundClipTypes }
  bgl: (
    backgroundClip: BackgroundClipTypes
  ) => { backgroundClip: BackgroundClipTypes }
  backgroundColor: (
    color: ColorInterface
  ) => (backgroundColor: ColorTypes) => { backgroundColor: ColorTypes }
  bgc: (
    color: ColorInterface
  ) => (background: string) => { background: ColorTypes }
  backgroundPosition: (
    backgroundPosition: BackgroundPositionTypes
  ) => { backgroundPosition: BackgroundPositionTypes }
  bgp: (
    backgroundPosition: BackgroundPositionTypes
  ) => { backgroundPosition: BackgroundPositionTypes }
  backgroundRepeat: (
    backgroundRepeat: BackgroundRepeatTypes
  ) => { backgroundRepeat: BackgroundRepeatTypes }
  bgr: (
    backgroundRepeat: BackgroundRepeatTypes
  ) => { backgroundRepeat: BackgroundRepeatTypes }
  backgroundSize: (
    backgroundSize: BackgroundSizeTypes
  ) => { backgroundSize: BackgroundSizeTypes }
  bgs: (
    backgroundSize: BackgroundSizeTypes
  ) => { backgroundSize: BackgroundSizeTypes }
  backgroundImage: (backgroundImage: string) => { backgroundImage: string }
  bgi: (backgroundImage: string) => { backgroundImage: string }

  /*
   * Border
   */
  border: (border: BorderInterface) => (border: string) => { border: string }
  borderBottom: (
    border: BorderInterface
  ) => (borderBottom: string) => { borderBottom: string }
  borderLeft: (
    border: BorderInterface
  ) => (borderLeft: string) => { borderLeft: string }
  borderRight: (
    border: BorderInterface
  ) => (borderRight: string) => { borderRight: string }
  borderTop: (
    border: BorderInterface
  ) => (borderTop: string) => { borderTop: string }
  borderX: (
    border: BorderInterface
  ) => (value: string) => { borderRight: string; borderLeft: string }
  borderY: (
    border: BorderInterface
  ) => (value: string) => { borderTop: string; borderBottom: string }
  borderWidth: (borderWidth: string) => { borderWidth: string }
  borderColor: (
    color: ColorInterface
  ) => (borderColor: ColorTypes) => { borderColor: ColorTypes }
  borderStyle: (
    borderStyle: BorderStyleTypes
  ) => { borderStyle: BorderStyleTypes }
  bd: (border: BorderInterface) => (border: string) => { border: string }
  bdb: (
    border: BorderInterface
  ) => (borderBottom: string) => { borderBottom: string }
  bdl: (
    border: BorderInterface
  ) => (borderLeft: string) => { borderLeft: string }
  bdr: (
    border: BorderInterface
  ) => (borderRight: string) => { borderRight: string }
  bdt: (border: BorderInterface) => (borderTop: string) => { borderTop: string }
  bdx: (
    border: BorderInterface
  ) => (value: string) => { borderRight: string; borderLeft: string }
  bdy: (
    border: BorderInterface
  ) => (value: string) => { borderTop: string; borderBottom: string }
  bdw: (borderWidth: string) => { borderWidth: string }
  bdc: (
    color: ColorInterface
  ) => (borderColor: ColorTypes) => { borderColor: ColorTypes }
  bds: (bds: BorderStyleTypes) => { borderStyle: BorderStyleTypes }

  radius: (
    radius: RadiusInterface
  ) => (borderRadius: string) => { borderRadius: string }
  borderBottomRadius: (
    radius: RadiusInterface
  ) => (borderBottomRadius: string) => { borderBottomRadius: string }
  borderLeftRadius: (
    radius: RadiusInterface
  ) => (borderLeftRadius: string) => { borderLeftRadius: string }
  borderRightRadius: (
    radius: RadiusInterface
  ) => (borderRightRadius: string) => { borderRightRadius: string }
  borderTopRadius: (
    radius: RadiusInterface
  ) => (borderTopRadius: string) => { borderTopRadius: string }
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
  r: (
    radius: RadiusInterface
  ) => (borderRadius: string) => { borderRadius: string }
  rb: (
    radius: RadiusInterface
  ) => (borderBottomRadius: string) => { borderBottomRadius: string }
  rl: (
    radius: RadiusInterface
  ) => (borderLeftRadius: string) => { borderLeftRadius: string }
  rr: (
    radius: RadiusInterface
  ) => (borderRightRadius: string) => { borderRightRadius: string }
  rt: (
    radius: RadiusInterface
  ) => (borderTopRadius: string) => { borderTopRadius: string }
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

  /*
   * Margin
   */
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

  /*
   * Padding
   */
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

  /*
   * Elevate/ Box Sizing
   */
  elevate: (
    elevate: ElevateInterface
  ) => (boxShadow: string) => { boxShadow: string }
  e: (elevate: ElevateInterface) => (boxShadow: string) => { boxShadow: string }
  boxSizing: (boxSizing: BoxSizingTypes) => { boxSizing: BoxSizingTypes }
  bs: (boxSizing: BoxSizingTypes) => { boxSizing: BoxSizingTypes }

  /*
   * Centered
   */
  centered: () => { margin: string }
  cd: () => { margin: string }

  /*
   * Flex
   */
  flex: (flex: string) => { flex: string }
  fl: (flex: string) => { flex: string }
  flexGrow: (flexGrow: number | string) => { flexGrow: number | string }
  flg: (flexGrow: string) => { flexGrow: string }
  flexShrink: (flexShrink: string | number) => { flexShrink: string | number }
  fls: (flexShrink: string | number) => { flexShrink: string | number }
  flexDirection: (
    flexDirection: FlexDirectionTypes
  ) => { flexDirection: FlexDirectionTypes }
  fld: (
    flexDirection: FlexDirectionTypes
  ) => { flexDirection: FlexDirectionTypes }
  flexWrap: (flexWrap: FlexWrapTypes) => { flexWrap: FlexWrapTypes }
  flw: (flexWrap: FlexWrapTypes) => { flexWrap: FlexWrapTypes }
  flexBasis: (flexBasis: string | number) => { flexBasis: string | number }
  flb: (flexBasis: string | number) => { flexBasis: string | number }

  order: (order: number | string) => { order: number | string }
  od: (flexShrink: number | string) => { order: number | string }

  justifyContent: (
    justifyContent: FlexContentTypes
  ) => { justifyContent: FlexContentTypes }
  jc: (justifyContent: FlexContentTypes) => { justifyContent: FlexContentTypes }
  justifyItems: (
    justifyItems: FlexItemsTypes
  ) => { justifyItems: FlexItemsTypes }
  ji: (justifyItems: FlexItemsTypes) => { justifyItems: FlexItemsTypes }
  justifySelf: (justifySelf: FlexSelfTypes) => { justifySelf: FlexSelfTypes }
  js: (justifySelf: FlexSelfTypes) => { justifySelf: FlexSelfTypes }

  alignContent: (
    alignContent: FlexContentTypes
  ) => { alignContent: FlexContentTypes }
  ac: (alignContent: FlexContentTypes) => { alignContent: FlexContentTypes }
  alignItems: (alignItems: FlexItemsTypes) => { alignItems: FlexItemsTypes }
  ai: (alignItems: FlexItemsTypes) => { alignItems: FlexItemsTypes }
  alignSelf: (alignSelf: FlexSelfTypes) => { alignSelf: FlexSelfTypes }
  af: (alignSelf: FlexSelfTypes) => { alignSelf: FlexSelfTypes }

  /*
   * Width / Height
   */
  h: (unit: UnitInterface) => (height: string) => { height: string }
  w: (unit: UnitInterface) => (width: string) => { width: string }
  maxWidth: (unit: UnitInterface) => (maxWidth: string) => { maxWidth: string }
  mw: (unit: UnitInterface) => (maxWidth: string) => { maxWidth: string }
  maxHeight: (
    unit: UnitInterface
  ) => (maxHeight: string) => { maxHeight: string }
  mh: (unit: UnitInterface) => (maxHeight: string) => { maxHeight: string }
  wh: (
    unit: UnitInterface
  ) => (value: string) => { width: string; height: string }

  /*
   * Text
   */
  textAlign: (textAlign: string) => { textAlign: TextAlignTypes }
  ta: (textAlign: string) => { textAlign: TextAlignTypes }
  truncate: () => {
    overflow: 'hidden'
    whiteSpace: 'ellipsis'
    textOverflow: 'nowrap'
  }
  tc: () => {
    overflow: 'hidden'
    whiteSpace: 'ellipsis'
    textOverflow: 'nowrap'
  }
  wordBreak: (wordBreak: WordBreakTypes) => { wordBreak: WordBreakTypes }
  wb: (wordBreak: WordBreakTypes) => { wordBreak: WordBreakTypes }

  listStyle: (listStyle: ListStyleTypes) => { listStyle: ListStyleTypes }
  lt: (listStyle: ListStyleTypes) => { listStyle: ListStyleTypes }
  listPosition: (
    listPosition: ListPositionTypes
  ) => { listPosition: ListPositionTypes }
  lp: (listPosition: ListPositionTypes) => { listPosition: ListPositionTypes }
  textDecoration: (
    textDecoration: TextDecorationTypes
  ) => { textDecoration: TextDecorationTypes }
  td: (
    textDecoration: TextDecorationTypes
  ) => { textDecoration: TextDecorationTypes }
  textTransform: (
    textTransform: TextTransformTypes
  ) => { textTransform: TextTransformTypes }
  tt: (
    textTransform: TextTransformTypes
  ) => { textTransform: TextTransformTypes }
  verticalAlign: (
    verticalAlign: VerticalAlignTypes
  ) => { verticalAlign: VerticalAlignTypes }
  va: (
    verticalAlign: VerticalAlignTypes
  ) => { verticalAlign: VerticalAlignTypes }
  whiteSpace: (whiteSpace: WhiteSpaceTypes) => { whiteSpace: WhiteSpaceTypes }
  ws: (whiteSpace: WhiteSpaceTypes) => { whiteSpace: WhiteSpaceTypes }

  /*
   * Media
   */
  mq: (
    mediaQuires: MediaQueriesInterface
  ) => (value: { [key: string]: any }) => DynamicStyleFunction

  /*
   * Position
   */
  position: (position: PositionTypes) => { position: PositionTypes }
  ps: (position: PositionTypes) => { position: PositionTypes }
  top: (top: string) => { top: string | 'auto' }
  bottom: (bottom: string) => { bottom: string | 'auto' }
  left: (left: string) => { left: string | 'auto' }
  right: (right: string) => { right: string | 'auto' }

  /*
   * Floats
   */
  float: (float: FloatTypes) => { float: FloatTypes }
  ft: (float: FloatTypes) => { float: FloatTypes }

  clearFix: () => `&::after {
    content: "";
    display: table;
    clear: both;
  }`
  cf: () => `&::after {
    content: "";
    display: table;
    clear: both;
  }`

  /*
   * Overflow
   */
  overflow: (overflow: OverflowTypes) => { overflow: OverflowTypes }
  of: (overflow: OverflowTypes) => { overflow: OverflowTypes }
  overflowX: (overflowX: OverflowTypes) => { overflowX: OverflowTypes }
  ox: (overflowX: OverflowTypes) => { overflow: OverflowTypes }
  overflowY: (overflowY: OverflowTypes) => { overflowY: OverflowTypes }
  oy: (overflowY: OverflowTypes) => { overflow: OverflowTypes }
  overflowScrolling: (
    overflowScrolling: OverflowScrollingTypes
  ) => { ['-webkit-Overflow-scrolling']: OverflowScrollingTypes }
  os: (
    overflowScrolling: OverflowScrollingTypes
  ) => { ['-webkit-Overflow-scrolling']: OverflowScrollingTypes }
  overflowWrap: (
    overflowWrap: OverflowWrapTypes
  ) => { overflowWrap: OverflowWrapTypes }
  ow: (overflowWrap: OverflowWrapTypes) => { overflowWrap: OverflowWrapTypes }

  /*
   * Font
   */
  fontSize: (font: FontInterface) => (fontSize: string) => { fontSize: string }
  fs: (font: FontInterface) => (fontSize: string) => { fontSize: string }
  lineHeight: (
    font: FontInterface
  ) => (lineHeight: string | number) => { lineHeight: string | number }
  lh: (
    font: FontInterface
  ) => (lineHeight: string | number) => { lineHeight: string | number }
  letterSpacing: (letterSpacing: string) => { letterSpacing: string }
  ls: (letterSpacing: string) => { letterSpacing: string }
  fontWeight: (
    font: FontInterface
  ) => (fontWeight: string | number) => { fontWeight: string | number }
  fw: (
    font: FontInterface
  ) => (fontWeight: string | number) => { fontWeight: string | number }
  fontFamily: (
    font: FontInterface
  ) => (fontFamily: FontFamilyTypes) => { fontFamily: string }
  ff: (
    font: FontInterface
  ) => (fontFamily: FontFamilyTypes) => { fontFamily: string }

  /*
   * Z Index
   */
  zIndex: (
    zIndex: number | string | 'auto'
  ) => { zIndex: number | string | 'auto' }
  z: (zIndex: number | string | 'auto') => { zIndex: number | string | 'auto' }

  /*
   * Object
   */
  objectFit: (objectFit: ObjectFitTypes) => { objectFit: ObjectFitTypes }
  ot: (objectFit: ObjectFitTypes) => { objectFit: ObjectFitTypes }
  objectPosition: (
    objectPosition: ObjectPositionTypes
  ) => { objectPosition: ObjectPositionTypes }
  op: (
    objectPosition: ObjectPositionTypes
  ) => { objectPosition: ObjectPositionTypes }

  /*
   * Visibility
   */
  visibility: (visibility: VisibilityTypes) => { visibility: VisibilityTypes }
  vs: (visibility: VisibilityTypes) => { visibility: VisibilityTypes }

  /*
   * Interactivity
   */
  cursor: (cursor: CursorTypes) => { cursor: CursorTypes }
  cr: (cursor: CursorTypes) => { cursor: CursorTypes }
  appearance: (
    appearance: AppearanceCssTypes
  ) => { appearance: AppearanceCssTypes }
  ap: (appearance: AppearanceCssTypes) => { appearance: AppearanceCssTypes }
  pointerEvents: (
    pointerEvents: PointerEventsTypes
  ) => { pointerEvents: PointerEventsTypes }
  pe: (
    pointerEvents: PointerEventsTypes
  ) => { pointerEvents: PointerEventsTypes }
  resize: (resize: ResizeTypes) => { resize: ResizeTypes }
  rs: (resize: ResizeTypes) => { resize: ResizeTypes }
  userSelect: (userSelect: UserSelectTypes) => { userSelect: UserSelectTypes }
  us: (userSelect: UserSelectTypes) => { userSelect: UserSelectTypes }

  /*
   * Transition
   */
  transition: (transition: TransitionTypes) => { transition: string }
  tr: (transition: TransitionTypes) => { transition: string }

  /*
   * Transforms
   */
  transform: (transform: string) => { transform: string }
  tf: (transform: string) => { transform: string }
}

export interface UtilityPropsInterface {
  /*
   * Color
   */
  color?: ColorTypes
  cl?: ColorTypes

  /*
   * Display
   */
  display?: DisplayTypes
  d?: DisplayTypes

  /*
   * Background
   */
  background?: string
  bg?: string
  backgroundAttachment?: BackgroundAttachmentTypes
  bga?: BackgroundAttachmentTypes
  backgroundClip?: BackgroundClipTypes
  bgl?: BackgroundClipTypes
  backgroundColor?: ColorTypes
  bgc?: ColorTypes
  backgroundPosition?: BackgroundPositionTypes
  bgp?: BackgroundPositionTypes
  backgroundRepeat?: BackgroundRepeatTypes
  bgr?: BackgroundRepeatTypes
  backgroundSize?: BackgroundSizeTypes
  bgs?: BackgroundSizeTypes
  backgroundImage?: string
  bgi?: string

  /*
   * Border
   */
  border: string
  borderBottom: string
  borderLeft: string
  borderRight: string
  borderTop: string
  borderX: string
  borderY: string
  borderColor: string
  borderStyle: string
  bdb: string
  bdl: string
  bdr?: string
  bdt?: string
  bdx?: string
  bdy?: string
  bdw?: string
  bdc?: ColorTypes
  bds?: BorderStyleTypes

  radius?: string
  borderBottomRadius?: string
  borderLeftRadius?: string
  borderRightRadius?: string
  borderTopRadius?: string
  borderXRadius?: string
  borderYRadius?: string
  r?: string
  rb?: string
  rl?: string
  rr?: string
  rt?: string
  rx?: string
  ry?: string

  /*
   * Margin
   */
  margin?: string | number
  marginTop?: string | number
  marginRight?: string | number
  marginBottom?: string | number
  marginLeft?: string | number
  marginX?: string | number
  marginY?: string | number
  margin0?: string
  margin1?: string
  margin2?: string
  margin3?: string
  margin4?: string
  margin5?: string
  margin6?: string
  margin7?: string
  margin8?: string
  margin9?: string
  margin10?: string
  m?: string | number
  mt?: string | number
  mr?: string | number
  mb?: string | number
  ml?: string | number
  mx?: string | number
  my?: string | number
  m0?: string
  m1?: string
  m2?: string
  m3?: string
  m4?: string
  m5?: string
  m6?: string
  m7?: string
  m8?: string
  m9?: string
  m10?: string

  /*
   * Padding
   */
  padding?: string | number
  paddingTop?: string | number
  paddingRight?: string | number
  paddingBottom?: string | number
  paddingLeft?: string | number
  paddingX?: string | number
  paddingY?: string | number
  padding0?: string
  padding1?: string
  padding2?: string
  padding3?: string
  padding4?: string
  padding5?: string
  padding6?: string
  padding7?: string
  padding8?: string
  padding9?: string
  padding10?: string
  p?: string | number
  pt?: string | number
  pr?: string | number
  pb?: string | number
  pl?: string | number
  pX?: string
  pY?: string
  p0?: string
  p1?: string
  p2?: string
  p3?: string
  p4?: string
  p5?: string
  p6?: string
  p7?: string
  p8?: string
  p9?: string
  p10?: string

  /*
   * Elevate/ Box Sizing
   */
  elevate?: string
  e?: string
  boxSizing?: string
  bs?: string

  /*
   * Centered
   */
  centered?: string
  cd?: string

  /*
   * Flex
   */
  flex?: string
  fl?: string
  flexGrow?: number | string
  flg?: string
  flexShrink?: string | number
  fls?: string | number
  flexDirection?: FlexDirectionTypes
  fld?: FlexDirectionTypes
  flexWrap?: FlexWrapTypes
  flw?: FlexWrapTypes
  flexBasis?: string | number
  flb?: string | number

  order?: number | string
  od?: number | string

  justifyContent?: FlexContentTypes
  jc?: FlexContentTypes
  justifyItems?: FlexItemsTypes
  ji?: FlexItemsTypes
  justifySelf?: FlexSelfTypes
  js?: FlexSelfTypes

  alignContent?: FlexContentTypes
  ac?: FlexContentTypes
  alignItems?: FlexItemsTypes
  ai?: FlexItemsTypes
  alignSelf?: FlexSelfTypes
  af?: FlexSelfTypes

  /*
   * Width / Height
   */
  h?: string
  w?: string
  maxWidth?: string
  mw?: string
  maxHeight?: string
  mh?: string
  wh?: string

  /*
   * Text
   */
  textAlign?: TextAlignTypes
  ta?: TextAlignTypes
  truncate?: boolean
  tc?: boolean
  wordBreak?: WordBreakTypes
  wb?: WordBreakTypes
  listStyle?: ListStyleTypes
  lt?: ListStyleTypes
  listPosition?: ListPositionTypes
  lp?: ListPositionTypes
  textDecoration?: TextDecorationTypes
  td?: TextDecorationTypes
  textTransform?: TextTransformTypes
  tt?: TextTransformTypes
  verticalAlign?: VerticalAlignTypes
  va?: VerticalAlignTypes
  whiteSpace?: WhiteSpaceTypes
  ws?: WhiteSpaceTypes

  /*
   * Media
   */
  mediaQuires: MediaQuiresTypes
  mq: MediaQuiresTypes

  /*
   * Position
   */
  position: PositionTypes
  ps: PositionTypes
  top: string | 'auto'
  bottom: string | 'auto'
  left: string | 'auto'
  right: string | 'auto'

  /*
   * Floats
   */
  float?: FloatTypes
  ft?: FloatTypes

  clearFix?: boolean
  cf?: boolean

  /*
   * Overflow
   */
  overflow?: OverflowTypes
  of?: OverflowTypes
  overflowX?: OverflowTypes
  ox?: OverflowTypes
  overflowY?: OverflowTypes
  oy?: OverflowTypes
  overflowScrolling?: OverflowScrollingTypes
  os?: OverflowScrollingTypes
  overflowWrap?: OverflowWrapTypes
  ow?: OverflowWrapTypes

  /*
   * Font
   */
  fontSize?: string
  fs?: string
  lineHeight?: string | number
  lh?: string | number
  letterSpacing?: string
  ls?: string
  fontWeight?: string | number
  fw?: string | number
  fontFamily?: string
  ff?: string

  /*
   * Z Index
   */
  zIndex?: number | string | 'auto'
  z?: number | string | 'auto'

  /*
   * Object
   */
  objectFit?: ObjectFitTypes
  ot?: ObjectFitTypes
  objectPosition?: ObjectPositionTypes
  op?: ObjectPositionTypes

  /*
   * Visibility
   */
  visibility?: VisibilityTypes
  vs?: VisibilityTypes

  /*
   * Interactivity
   */
  cursor?: CursorTypes
  cr?: CursorTypes
  appearance?: AppearanceCssTypes
  ap?: AppearanceCssTypes
  pointerEvents?: PointerEventsTypes
  pe?: PointerEventsTypes
  resize?: ResizeTypes
  rs?: ResizeTypes
  userSelect?: UserSelectTypes
  us?: UserSelectTypes

  /*
   * Transition
   */
  transition?: string
  tr?: string

  /*
   * Transforms
   */
  transform?: string
  tf?: string
}

export type TransitionTypes = TransitionInterface | string

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

export type FlexContentTypes = FlexPositionTypes | string

export type FlexItemsTypes = FlexPositionTypes | string

export type FlexSelfTypes = FlexPositionTypes | 'baseline' | string

export interface PartialUtilityInterface extends Partial<UtilityInterface> {}

export type PositionTypes =
  | 'absolute'
  | 'relative'
  | 'fixed'
  | 'static'
  | 'sticky'
  | string

export type ObjectFitTypes =
  | 'contain'
  | 'cover'
  | 'fill'
  | 'none'
  | 'scale-down'
  | string

export type ObjectPositionTypes =
  | 'bottom'
  | 'center'
  | 'left'
  | 'left-bottom	'
  | 'left-top'
  | 'right'
  | 'right-bottom'
  | 'right-top'
  | 'top'
  | string

export type BoxSizingTypes = 'border-box' | 'content-box' | string

export type DisplayTypes =
  | 'block'
  | 'inline-block'
  | 'inline'
  | 'flex'
  | 'inline-flex'
  | 'table'
  | 'table-caption'
  | 'table-cell'
  | 'table-column'
  | 'table-column-group'
  | 'table-footer-group'
  | 'table-header-group'
  | 'table-row-group'
  | 'table-row'
  | 'flow-root'
  | 'grid'
  | 'inline-grid'
  | 'contents'
  | 'none'
  | string

export type FloatTypes = 'right' | 'left' | 'none' | string

export type OverflowTypes = 'visible' | 'scroll' | 'auto' | 'hidden' | string
export type OverflowScrollingTypes = 'touch' | 'auto' | string
export type OverflowWrapTypes = 'normal' | 'break-word' | string

export type VisibilityTypes = 'visible' | 'hidden' | string

export type TextAlignTypes = 'left' | 'right' | 'center' | 'justify' | string
export type ListStyleTypes = 'none' | 'disc' | 'decimal' | string
export type ListPositionTypes = 'inside' | 'outside' | string
export type TextDecorationTypes = 'underline' | 'line-through' | 'none' | string
export type TextTransformTypes =
  | 'uppercase'
  | 'lowercase'
  | 'capitalize'
  | 'none'
  | string
export type VerticalAlignTypes =
  | 'baseline'
  | 'top'
  | 'middle'
  | 'bottom'
  | 'text-top'
  | 'text-bottom'
  | string
export type WhiteSpaceTypes =
  | 'normal'
  | 'nowrap'
  | 'pre'
  | 'pre-line'
  | 'pre-wrap'
  | string
export type WordBreakTypes = 'normal' | 'break-all' | string

export type BackgroundAttachmentTypes = 'fixed' | 'local' | 'scroll' | string
export type BackgroundClipTypes =
  | 'border-box'
  | 'padding-box'
  | 'content-box'
  | 'text'
  | string

export type BackgroundPositionTypes =
  | 'bottom'
  | 'center'
  | 'left'
  | 'left bottom'
  | 'left top'
  | 'right'
  | 'right bottom'
  | 'right top'
  | 'top'
  | string

export type BackgroundRepeatTypes =
  | 'repeat'
  | 'no-repeat'
  | 'repeat-x'
  | 'repeat-y'
  | 'round'
  | 'space'
  | string

export type BackgroundSizeTypes = 'auto' | 'cover' | 'contain' | string

export type BorderStyleTypes =
  | 'solid'
  | 'dashed'
  | 'dotted'
  | 'double'
  | 'none'
  | string

export type ColorTypes =
  | ColorInterface
  | 'transparent'
  | 'currentColor'
  | string

export type CursorTypes =
  | 'auto'
  | 'default'
  | 'pointer'
  | 'wait'
  | 'text'
  | 'move'
  | 'not-allowed'
  | string

export type AppearanceCssTypes = 'auto' | 'none' | string
export type PointerEventsTypes = 'auto' | 'none' | string
export type ResizeTypes = 'none' | 'vertical' | 'horizontal' | 'both' | string
export type UserSelectTypes = 'none' | 'text' | 'all' | 'auto' | string

export type MediaQuiresTypes =
  | {
      [key: string]: any
    }
  | string[]
