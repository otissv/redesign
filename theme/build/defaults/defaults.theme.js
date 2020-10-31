"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.themeDefaults = exports.unitThemeDefaults = exports.swatchesThemeDefaults = exports.utilityThemeDefaults = exports.scrollbarThemeDefaults = exports.radiusThemeDefaults = exports.mediaQueriesThemeDefaults = exports.fontThemeDefaults = exports.elevateThemeDefaults = exports.colorThemeDefaults = exports.borderThemeDefaults = exports.transitionThemeDefaults = void 0;
var transition_1 = require("../transition");
var border_1 = require("../border");
var radius_1 = require("../radius");
var noop_1 = require("../utils/noop");
exports.transitionThemeDefaults = {
    0: transition_1.XSLOW,
    1: transition_1.SLOW,
    2: transition_1.MEDIUM,
    3: transition_1.FAST,
    easeFast: noop_1.noopString,
    easeMedium: noop_1.noopString,
    easeSlow: noop_1.noopString,
    easeXslow: noop_1.noopString,
    easeInFast: noop_1.noopString,
    easeInMedium: noop_1.noopString,
    easeInSlow: noop_1.noopString,
    easeInXslow: noop_1.noopString,
    easeInOutFast: noop_1.noopString,
    easeInOutMedium: noop_1.noopString,
    easeInOutSlow: noop_1.noopString,
    easeInOutXslow: noop_1.noopString,
    easeOutFast: noop_1.noopString,
    easeOutMedium: noop_1.noopString,
    easeOutSlow: noop_1.noopString,
    easeOutXslow: noop_1.noopString,
};
exports.borderThemeDefaults = {
    none: border_1.BORDER_NONE,
    style: border_1.BORDER_STYLE,
    dash: border_1.BORDER_DASH,
    thickWidth: border_1.BORDER_THICK_WIDTH,
    thickColor: border_1.BORDER_THICK_COLOR,
    thinWidth: border_1.BORDER_THIN_WIDTH,
    thinColor: border_1.BORDER_THIN_COLOR,
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
};
exports.colorThemeDefaults = {
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
};
exports.elevateThemeDefaults = {
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
};
exports.fontThemeDefaults = {
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
        mono: "'Source Code Pro', 'Consolas', 'Inconsolata', 'Source Code Pro', 'Monaco', monospace !important",
        sans: 'system_ui, _apple_system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, sans_serif',
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
    smooth: "\n  text-rendering: optimizeLegibility !important;\n  -webkit-font-smoothing: antialiased;0\n  -moz-osx-font-smoothing: grayscale;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n  ",
    weight: {
        1: 400,
        2: 500,
        3: 600,
        4: 700,
        5: 800,
        6: 900,
        default: 400,
    },
};
exports.mediaQueriesThemeDefaults = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
};
exports.radiusThemeDefaults = {
    circle: radius_1.RADIUS_CIRCLE,
    none: radius_1.RADIUS_NONE,
    round: radius_1.RADIUS_ROUND,
    rounded: radius_1.RADIUS_ROUNDED,
};
exports.scrollbarThemeDefaults = {
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
};
exports.utilityThemeDefaults = {
    /*
     * Color
     */
    color: function (_color) { return function (_value) { return ({ color: '' }); }; },
    cl: function (_color) { return function (_value) { return ({ color: '' }); }; },
    /*
     * Display
     */
    display: function (_value) { return ({ display: '' }); },
    d: function (_value) { return ({ display: '' }); },
    /*
     * Background
     */
    background: function (_color) { return function (_background) { return ({
        background: '',
    }); }; },
    bg: function (_color) { return function (_background) { return ({ background: '' }); }; },
    backgroundAttachment: function (_backgroundAttachment) { return ({
        backgroundAttachment: '',
    }); },
    bga: function (_backgroundAttachment) { return ({
        backgroundAttachment: '',
    }); },
    backgroundClip: function (_backgroundClip) { return ({
        backgroundClip: '',
    }); },
    bgl: function (_backgroundClip) { return ({ backgroundClip: '' }); },
    backgroundColor: function (_color) { return function (_backgroundColor) { return ({ backgroundColor: '' }); }; },
    bgc: function (_color) { return function (_background) { return ({
        background: '',
    }); }; },
    backgroundPosition: function (_backgroundPosition) { return ({
        backgroundPosition: '',
    }); },
    bgp: function (_backgroundPosition) { return ({
        backgroundPosition: '',
    }); },
    backgroundRepeat: function (_backgroundRepeat) { return ({
        backgroundRepeat: '',
    }); },
    bgr: function (_backgroundRepeat) { return ({ backgroundRepeat: '' }); },
    backgroundSize: function (_backgroundSize) { return ({
        backgroundSize: '',
    }); },
    bgs: function (_backgroundSize) { return ({ backgroundSize: '' }); },
    backgroundImage: function (_backgroundImage) { return ({ backgroundImage: '' }); },
    bgi: function (_backgroundImage) { return ({ backgroundImage: '' }); },
    /*
     * Border
     */
    border: function (_border) { return function (_border) { return ({ border: '' }); }; },
    borderBottom: function (_border) { return function (_borderBottom) { return ({
        borderBottom: '',
    }); }; },
    borderLeft: function (_border) { return function (_borderLeft) { return ({
        borderLeft: '',
    }); }; },
    borderRight: function (_border) { return function (_borderRight) { return ({
        borderRight: '',
    }); }; },
    borderTop: function (_border) { return function (_borderTop) { return ({
        borderTop: '',
    }); }; },
    borderX: function (_border) { return function (_value) { return ({
        borderRight: '',
        borderLeft: '',
    }); }; },
    borderY: function (_border) { return function (_value) { return ({
        borderTop: '',
        borderBottom: '',
    }); }; },
    borderWidth: function (_borderWidth) { return ({ borderWidth: '' }); },
    borderColor: function (_color) { return function (_borderColor) { return ({
        borderColor: '',
    }); }; },
    borderStyle: function (_borderStyle) { return ({
        borderStyle: '',
    }); },
    bd: function (_border) { return function (_border) { return ({ border: '' }); }; },
    bdb: function (_border) { return function (_borderBottom) { return ({
        borderBottom: '',
    }); }; },
    bdl: function (_border) { return function (_borderLeft) { return ({
        borderLeft: '',
    }); }; },
    bdr: function (_border) { return function (_borderRight) { return ({
        borderRight: '',
    }); }; },
    bdt: function (_border) { return function (_borderTop) { return ({
        borderTop: '',
    }); }; },
    bdx: function (_border) { return function (_value) { return ({
        borderRight: '',
        borderLeft: '',
    }); }; },
    bdy: function (_border) { return function (_value) { return ({
        borderTop: '',
        borderBottom: '',
    }); }; },
    bdw: function (_borderWidth) { return ({ borderWidth: '' }); },
    bdc: function (_color) { return function (_borderColor) { return ({
        borderColor: '',
    }); }; },
    bds: function (_bds) { return ({ borderStyle: '' }); },
    radius: function (_radius) { return function (_value) { return ({
        borderRadius: '',
    }); }; },
    borderBottomRadius: function (_radius) { return function (_value) { return ({
        borderBottomRadius: '',
    }); }; },
    borderLeftRadius: function (_radius) { return function (_value) { return ({
        borderLeftRadius: '',
    }); }; },
    borderRightRadius: function (_radius) { return function (_value) { return ({
        borderRightRadius: '',
    }); }; },
    borderTopRadius: function (_radius) { return function (_value) { return ({
        borderTopRadius: '',
    }); }; },
    borderYRadius: function (_radius) { return function (_value) { return ({
        borderTopRadius: '',
        borderBottomRadius: '',
    }); }; },
    borderXRadius: function (_radius) { return function (_value) { return ({
        borderRightRadius: '',
        borderLeftRadius: '',
    }); }; },
    r: function (_radius) { return function (_value) { return ({
        borderRadius: '',
    }); }; },
    rb: function (_radius) { return function (_value) { return ({
        borderBottomRadius: '',
    }); }; },
    rl: function (_radius) { return function (_value) { return ({
        borderLeftRadius: '',
    }); }; },
    rr: function (_radius) { return function (_value) { return ({
        borderRightRadius: '',
    }); }; },
    rt: function (_radius) { return function (_value) { return ({
        borderTopRadius: '',
    }); }; },
    ry: function (_radius) { return function (_value) { return ({
        borderTopRadius: '',
        borderBottomRadius: '',
    }); }; },
    rx: function (_radius) { return function (_value) { return ({
        borderRightRadius: '',
        borderLeftRadius: '',
    }); }; },
    /*
     * Margin
     */
    margin: function (_value) { return ({ margin: '' }); },
    marginBottom: function (_value) { return ({ marginBottom: '' }); },
    marginTop: function (_value) { return ({ marginTop: '' }); },
    marginLeft: function (_value) { return ({ marginLeft: '' }); },
    marginRight: function (_value) { return ({ marginRight: '' }); },
    marginX: function (_value) { return ({ marginRight: '', marginLeft: '' }); },
    marginY: function (_value) { return ({ marginTop: '', marginBottom: '' }); },
    margin0: function (_value) { return ({ margin: '' }); },
    margin1: function (_value) { return ({ margin: '' }); },
    margin2: function (_value) { return ({ margin: '' }); },
    margin3: function (_value) { return ({ margin: '' }); },
    margin4: function (_value) { return ({ margin: '' }); },
    margin5: function (_value) { return ({ margin: '' }); },
    margin6: function (_value) { return ({ margin: '' }); },
    margin7: function (_value) { return ({ margin: '' }); },
    margin8: function (_value) { return ({ margin: '' }); },
    margin9: function (_value) { return ({ margin: '' }); },
    margin10: function (_value) { return ({ margin: '' }); },
    m: function (_value) { return ({ margin: '' }); },
    mt: function (_value) { return ({ marginTop: '' }); },
    mr: function (_value) { return ({ marginRight: '' }); },
    mb: function (_value) { return ({ marginBottom: '' }); },
    ml: function (_value) { return ({ marginLeft: '' }); },
    mx: function (_value) { return ({ marginRight: '', marginLeft: '' }); },
    my: function (_value) { return ({ marginTop: '', marginBottom: '' }); },
    m0: function (_value) { return ({ margin: '' }); },
    m1: function (_value) { return ({ margin: '' }); },
    m2: function (_value) { return ({ margin: '' }); },
    m3: function (_value) { return ({ margin: '' }); },
    m4: function (_value) { return ({ margin: '' }); },
    m5: function (_value) { return ({ margin: '' }); },
    m6: function (_value) { return ({ margin: '' }); },
    m7: function (_value) { return ({ margin: '' }); },
    m8: function (_value) { return ({ margin: '' }); },
    m9: function (_value) { return ({ margin: '' }); },
    m10: function (_value) { return ({ margin: '' }); },
    /*
     * Padding
     */
    padding: function (_value) { return ({ padding: '' }); },
    paddingBottom: function (_value) { return ({ paddingBottom: '' }); },
    paddingTop: function (_value) { return ({ paddingTop: '' }); },
    paddingLeft: function (_value) { return ({ paddingLeft: '' }); },
    paddingRight: function (_value) { return ({ paddingRight: '' }); },
    paddingX: function (_value) { return ({
        paddingRight: '',
        paddingLeft: '',
    }); },
    paddingY: function (_value) { return ({
        paddingTop: '',
        paddingBottom: '',
    }); },
    padding0: function (_value) { return ({ padding: '' }); },
    padding1: function (_value) { return ({ padding: '' }); },
    padding2: function (_value) { return ({ padding: '' }); },
    padding3: function (_value) { return ({ padding: '' }); },
    padding4: function (_value) { return ({ padding: '' }); },
    padding5: function (_value) { return ({ padding: '' }); },
    padding6: function (_value) { return ({ padding: '' }); },
    padding7: function (_value) { return ({ padding: '' }); },
    padding8: function (_value) { return ({ padding: '' }); },
    padding9: function (_value) { return ({ padding: '' }); },
    padding10: function (_value) { return ({ padding: '' }); },
    p: function (_value) { return ({ padding: '' }); },
    pTop: function (_value) { return ({ paddingTop: '' }); },
    pRight: function (_value) { return ({ paddingRight: '' }); },
    pBottom: function (_value) { return ({ paddingBottom: '' }); },
    pLeft: function (_value) { return ({ paddingLeft: '' }); },
    pX: function (_value) { return ({ paddingRight: '', paddingLeft: '' }); },
    pY: function (_value) { return ({ paddingTop: '', paddingBottom: '' }); },
    p0: function (_value) { return ({ padding: '' }); },
    p1: function (_value) { return ({ padding: '' }); },
    p2: function (_value) { return ({ padding: '' }); },
    p3: function (_value) { return ({ padding: '' }); },
    p4: function (_value) { return ({ padding: '' }); },
    p5: function (_value) { return ({ padding: '' }); },
    p6: function (_value) { return ({ padding: '' }); },
    p7: function (_value) { return ({ padding: '' }); },
    p8: function (_value) { return ({ padding: '' }); },
    p9: function (_value) { return ({ padding: '' }); },
    p10: function (_value) { return ({ padding: '' }); },
    /*
     * Elevate/ Box Sizing
     */
    elevate: function (_elevate) { return function (_value) { return ({
        boxShadow: '',
    }); }; },
    e: function (_elevate) { return function (_value) { return ({
        boxShadow: '',
    }); }; },
    boxSizing: function (_boxSizing) { return ({ boxSizing: '' }); },
    bs: function (_boxSizing) { return ({ boxSizing: '' }); },
    /*
     * Centered
     */
    centered: function () { return ({ margin: '0 auto' }); },
    cd: function () { return ({ margin: '0 auto' }); },
    /*
     * Flex
     */
    flex: function (_value) { return ({ flex: '' }); },
    fl: function (_value) { return ({ flex: '' }); },
    flexGrow: function (_value) { return ({ flexGrow: '' }); },
    flg: function (_value) { return ({ flexGrow: '' }); },
    flexShrink: function (_value) { return ({ flexShrink: '' }); },
    fls: function (_value) { return ({ flexShrink: '' }); },
    flexDirection: function (_value) { return ({ flexDirection: '' }); },
    fld: function (_value) { return ({ flexDirection: 'string' }); },
    flexWrap: function (_value) { return ({ flexWrap: 'string' }); },
    flw: function (_value) { return ({ flexWrap: 'string' }); },
    flexBasis: function (_value) { return ({ flexBasis: '' }); },
    flb: function (_value) { return ({ flexBasis: '' }); },
    order: function (_value) { return ({ order: '' }); },
    od: function (_value) { return ({ order: '' }); },
    justifyContent: function (_value) { return ({ justifyContent: '' }); },
    jc: function (_value) { return ({ justifyContent: '' }); },
    justifyItems: function (_value) { return ({ justifyItems: '' }); },
    ji: function (_value) { return ({ justifyItems: '' }); },
    justifySelf: function (_value) { return ({ justifySelf: '' }); },
    js: function (_value) { return ({ justifySelf: '' }); },
    alignContent: function (_value) { return ({ alignContent: '' }); },
    ac: function (_value) { return ({ alignContent: '' }); },
    alignItems: function (_value) { return ({ alignItems: '' }); },
    ai: function (_value) { return ({ alignItems: '' }); },
    alignSelf: function (_value) { return ({ alignSelf: '' }); },
    af: function (_value) { return ({ alignSelf: '' }); },
    /*
     * Width / Height
     */
    h: function (_unit) { return function (_value) { return ({ height: '' }); }; },
    w: function (_unit) { return function (_value) { return ({ width: '' }); }; },
    maxWidth: function (_unit) { return function (_value) { return ({ maxWidth: '' }); }; },
    mw: function (_unit) { return function (_value) { return ({ maxWidth: '' }); }; },
    maxHeight: function (_unit) { return function (_value) { return ({ maxHeight: '' }); }; },
    mh: function (_unit) { return function (_value) { return ({ maxHeight: '' }); }; },
    wh: function (_unit) { return function (_value) { return ({ width: '', height: '' }); }; },
    /*
     * Text
     */
    textAlign: function (_value) { return ({ textAlign: '' }); },
    ta: function (_value) { return ({ textAlign: '' }); },
    truncate: function () { return ({
        overflow: 'hidden',
        whiteSpace: 'ellipsis',
        textOverflow: 'nowrap',
    }); },
    tc: function () { return ({
        overflow: 'hidden',
        whiteSpace: 'ellipsis',
        textOverflow: 'nowrap',
    }); },
    wordBreak: function (_wordBreak) { return ({ wordBreak: '' }); },
    wb: function (_wordBreak) { return ({ wordBreak: '' }); },
    listStyle: function (_listStyle) { return ({ listStyle: '' }); },
    lt: function (_listStyle) { return ({ listStyle: '' }); },
    listPosition: function (_listPosition) { return ({ listPosition: '' }); },
    lp: function (_listPosition) { return ({ listPosition: '' }); },
    textDecoration: function (_textDecoration) { return ({
        textDecoration: '',
    }); },
    td: function (_textDecoration) { return ({ textDecoration: '' }); },
    textTransform: function (_textTransform) { return ({
        textTransform: '',
    }); },
    tt: function (_textTransform) { return ({ textTransform: '' }); },
    verticalAlign: function (_verticalAlign) { return ({
        verticalAlign: '',
    }); },
    va: function (_verticalAlign) { return ({ verticalAlign: '' }); },
    whiteSpace: function (_whiteSpace) { return ({ whiteSpace: '' }); },
    ws: function (_whiteSpace) { return ({ whiteSpace: '' }); },
    /*
     * Media
     */
    mq: function (_mediaQuires) { return function (_value) { return function () {
        var _args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _args[_i] = arguments[_i];
        }
        return [{}];
    }; }; },
    /*
     * Position
     */
    position: function (_value) { return ({ position: '' }); },
    ps: function (_value) { return ({ position: '' }); },
    top: function (_value) { return ({ top: '' }); },
    bottom: function (_value) { return ({ bottom: '' }); },
    left: function (_value) { return ({ left: '' }); },
    right: function (_value) { return ({ right: '' }); },
    /*
     * Floats
     */
    float: function (_value) { return ({ float: '' }); },
    ft: function (_value) { return ({ float: '' }); },
    clearFix: function () { return "&::after {\n    content: \"\";\n    display: table;\n    clear: both;\n  }"; },
    cf: function () { return "&::after {\n    content: \"\";\n    display: table;\n    clear: both;\n  }"; },
    overflow: function (_value) { return ({ overflow: '' }); },
    of: function (_value) { return ({ overflow: '' }); },
    overflowX: function (_overflowX) { return ({ overflowX: '' }); },
    ox: function (_overflowX) { return ({ overflow: '' }); },
    overflowY: function (_overflowY) { return ({ overflowY: '' }); },
    oy: function (_overflowY) { return ({ overflow: '' }); },
    overflowScrolling: function (_overflowScrolling) { return ({
        '-webkit-Overflow-scrolling': '',
    }); },
    os: function (_overflowScrolling) { return ({
        '-webkit-Overflow-scrolling': '',
    }); },
    overflowWrap: function (_overflowWrap) { return ({ overflowWrap: '' }); },
    ow: function (_overflowWrap) { return ({ overflowWrap: '' }); },
    /*
     * Font
     */
    fontSize: function (_font) { return function (_value) { return ({ fontSize: '' }); }; },
    fs: function (_font) { return function (_value) { return ({ fontSize: '' }); }; },
    lineHeight: function (_font) { return function (_value) { return ({
        lineHeight: '',
    }); }; },
    lh: function (_font) { return function (_value) { return ({
        lineHeight: '',
    }); }; },
    letterSpacing: function (_value) { return ({ letterSpacing: '' }); },
    ls: function (_value) { return ({ letterSpacing: '' }); },
    fontWeight: function (_font) { return function (_value) { return ({
        fontWeight: '',
    }); }; },
    fw: function (_font) { return function (_value) { return ({
        fontWeight: '',
    }); }; },
    fontFamily: function (_font) { return function (_fontFamily) { return ({
        fontFamily: '',
    }); }; },
    ff: function (_font) { return function (_fontFamily) { return ({
        fontFamily: '',
    }); }; },
    /*
     * Z Index
     */
    zIndex: function (_zIndex) { return ({ zIndex: '' }); },
    z: function (_zIndex) { return ({ zIndex: '' }); },
    /*
     * Object
     */
    objectFit: function (_objectFit) { return ({ objectFit: '' }); },
    ot: function (_objectFit) { return ({ objectFit: '' }); },
    objectPosition: function (_objectPosition) { return ({
        objectPosition: '',
    }); },
    op: function (_objectPosition) { return ({ objectPosition: '' }); },
    /*
     * Visibility
     */
    visibility: function (_visibility) { return ({ visibility: '' }); },
    vs: function (_visibility) { return ({ visibility: '' }); },
    /*
     * Interactivity
     */
    cursor: function (_cursor) { return ({ cursor: '' }); },
    cr: function (_cursor) { return ({ cursor: '' }); },
    appearance: function (_appearance) { return ({
        appearance: '',
    }); },
    ap: function (_appearance) { return ({ appearance: '' }); },
    pointerEvents: function (_pointerEvents) { return ({
        pointerEvents: '',
    }); },
    pe: function (_pointerEvents) { return ({ pointerEvents: '' }); },
    resize: function (_resize) { return ({ resize: '' }); },
    rs: function (_resize) { return ({ resize: '' }); },
    userSelect: function (_userSelect) { return ({ userSelect: '' }); },
    us: function (_userSelect) { return ({ userSelect: '' }); },
    /*
     * Transition
     */
    transition: function (_transition) { return ({ transition: '' }); },
    tr: function (_transition) { return ({ transition: '' }); },
    /*
     * Transforms
     */
    transform: function (_transform) { return ({ transform: '' }); },
    tf: function (_transform) { return ({ transform: '' }); },
};
exports.swatchesThemeDefaults = {};
exports.unitThemeDefaults = {
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
};
exports.themeDefaults = {
    transition: exports.transitionThemeDefaults,
    border: exports.borderThemeDefaults,
    color: exports.colorThemeDefaults,
    elevate: exports.elevateThemeDefaults,
    font: exports.fontThemeDefaults,
    mediaQueries: exports.mediaQueriesThemeDefaults,
    radius: exports.radiusThemeDefaults,
    scrollbar: exports.scrollbarThemeDefaults,
    utility: exports.utilityThemeDefaults,
    swatches: exports.swatchesThemeDefaults,
    unit: exports.unitThemeDefaults,
    global: {},
};
//# sourceMappingURL=defaults.theme.js.map