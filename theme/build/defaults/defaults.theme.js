import { XSLOW, SLOW, MEDIUM, FAST } from '../transition';
import { BORDER_NONE, BORDER_STYLE, BORDER_DASH, BORDER_THICK_WIDTH, BORDER_THICK_COLOR, BORDER_THIN_WIDTH, BORDER_THIN_COLOR } from '../border';
import { RADIUS_ROUNDED, RADIUS_CIRCLE, RADIUS_ROUND, RADIUS_NONE } from '../radius';
import { noopString } from '../utils';
export var transitionThemeDefaults = {
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
    easeOutXslow: noopString
};
export var borderThemeDefaults = {
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
    thinTransparent: ''
};
export var colorThemeDefaults = {
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
    disabled_900: ''
};
export var elevateThemeDefaults = {
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: ''
};
export var fontThemeDefaults = {
    base: 16,
    code: "'Source Code Pro', 'Consolas', 'Inconsolata', 'Source Code Pro', 'Monaco', monospace !important",
    color: 'grey_050',
    colorInvert: 'night_blue_700',
    letterSpacing: '0px',
    lineHeight: {
        1: 1,
        2: 1.5,
        3: 1.75,
        4: 2,
        5: 2.5,
        default: 1.75
    },
    sans: 'system_ui, _apple_system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, sans_serif',
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
        base: '16px'
    },
    smooth: "\n  text-rendering: optimizeLegibility !important;\n  -webkit-font-smoothing: antialiased;0\n  -moz-osx-font-smoothing: grayscale;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n  ",
    weight: {
        1: 400,
        2: 500,
        3: 600,
        4: 700,
        5: 800,
        6: 900,
        default: 400
    }
};
export var mediaQueriesThemeDefaults = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280
};
export var radiusThemeDefaults = {
    circle: RADIUS_CIRCLE,
    none: RADIUS_NONE,
    round: RADIUS_ROUND,
    rounded: RADIUS_ROUNDED
};
export var scrollbarThemeDefaults = {
    width: '',
    height: '',
    backgroundColor: '',
    corner: {
        backgroundColor: ''
    },
    thumb: {
        backgroundColor: '',
        outline: '',
        transition: '',
        hover: {
            backgroundColor: ''
        }
    }
};
export var utilityThemeDefaults = {
    margin: function(_value) {
        return {
            margin: ''
        };
    },
    marginBottom: function(_value) {
        return {
            marginBottom: ''
        };
    },
    marginTop: function(_value) {
        return {
            marginTop: ''
        };
    },
    marginLeft: function(_value) {
        return {
            marginLeft: ''
        };
    },
    marginRight: function(_value) {
        return {
            marginRight: ''
        };
    },
    marginX: function(_value) {
        return {
            marginRight: '',
            marginLeft: ''
        };
    },
    marginY: function(_value) {
        return {
            marginTop: '',
            marginBottom: ''
        };
    },
    margin0: function(_value) {
        return {
            margin: ''
        };
    },
    margin1: function(_value) {
        return {
            margin: ''
        };
    },
    margin2: function(_value) {
        return {
            margin: ''
        };
    },
    margin3: function(_value) {
        return {
            margin: ''
        };
    },
    margin4: function(_value) {
        return {
            margin: ''
        };
    },
    margin5: function(_value) {
        return {
            margin: ''
        };
    },
    margin6: function(_value) {
        return {
            margin: ''
        };
    },
    margin7: function(_value) {
        return {
            margin: ''
        };
    },
    margin8: function(_value) {
        return {
            margin: ''
        };
    },
    margin9: function(_value) {
        return {
            margin: ''
        };
    },
    margin10: function(_value) {
        return {
            margin: ''
        };
    },
    m: function(_value) {
        return {
            margin: ''
        };
    },
    mt: function(_value) {
        return {
            marginTop: ''
        };
    },
    mr: function(_value) {
        return {
            marginRight: ''
        };
    },
    mb: function(_value) {
        return {
            marginBottom: ''
        };
    },
    ml: function(_value) {
        return {
            marginLeft: ''
        };
    },
    mx: function(_value) {
        return {
            marginRight: '',
            marginLeft: ''
        };
    },
    my: function(_value) {
        return {
            marginTop: '',
            marginBottom: ''
        };
    },
    m0: function(_value) {
        return {
            margin: ''
        };
    },
    m1: function(_value) {
        return {
            margin: ''
        };
    },
    m2: function(_value) {
        return {
            margin: ''
        };
    },
    m3: function(_value) {
        return {
            margin: ''
        };
    },
    m4: function(_value) {
        return {
            margin: ''
        };
    },
    m5: function(_value) {
        return {
            margin: ''
        };
    },
    m6: function(_value) {
        return {
            margin: ''
        };
    },
    m7: function(_value) {
        return {
            margin: ''
        };
    },
    m8: function(_value) {
        return {
            margin: ''
        };
    },
    m9: function(_value) {
        return {
            margin: ''
        };
    },
    m10: function(_value) {
        return {
            margin: ''
        };
    },
    padding: function(_value) {
        return {
            padding: ''
        };
    },
    paddingBottom: function(_value) {
        return {
            paddingBottom: ''
        };
    },
    paddingTop: function(_value) {
        return {
            paddingTop: ''
        };
    },
    paddingLeft: function(_value) {
        return {
            paddingLeft: ''
        };
    },
    paddingRight: function(_value) {
        return {
            paddingRight: ''
        };
    },
    paddingX: function(_value) {
        return {
            paddingRight: '',
            paddingLeft: ''
        };
    },
    paddingY: function(_value) {
        return {
            paddingTop: '',
            paddingBottom: ''
        };
    },
    padding0: function(_value) {
        return {
            padding: ''
        };
    },
    padding1: function(_value) {
        return {
            padding: ''
        };
    },
    padding2: function(_value) {
        return {
            padding: ''
        };
    },
    padding3: function(_value) {
        return {
            padding: ''
        };
    },
    padding4: function(_value) {
        return {
            padding: ''
        };
    },
    padding5: function(_value) {
        return {
            padding: ''
        };
    },
    padding6: function(_value) {
        return {
            padding: ''
        };
    },
    padding7: function(_value) {
        return {
            padding: ''
        };
    },
    padding8: function(_value) {
        return {
            padding: ''
        };
    },
    padding9: function(_value) {
        return {
            padding: ''
        };
    },
    padding10: function(_value) {
        return {
            padding: ''
        };
    },
    p: function(_value) {
        return {
            padding: ''
        };
    },
    pTop: function(_value) {
        return {
            paddingTop: ''
        };
    },
    pRight: function(_value) {
        return {
            paddingRight: ''
        };
    },
    pBottom: function(_value) {
        return {
            paddingBottom: ''
        };
    },
    pLeft: function(_value) {
        return {
            paddingLeft: ''
        };
    },
    pX: function(_value) {
        return {
            paddingRight: '',
            paddingLeft: ''
        };
    },
    pY: function(_value) {
        return {
            paddingTop: '',
            paddingBottom: ''
        };
    },
    p0: function(_value) {
        return {
            padding: ''
        };
    },
    p1: function(_value) {
        return {
            padding: ''
        };
    },
    p2: function(_value) {
        return {
            padding: ''
        };
    },
    p3: function(_value) {
        return {
            padding: ''
        };
    },
    p4: function(_value) {
        return {
            padding: ''
        };
    },
    p5: function(_value) {
        return {
            padding: ''
        };
    },
    p6: function(_value) {
        return {
            padding: ''
        };
    },
    p7: function(_value) {
        return {
            padding: ''
        };
    },
    p8: function(_value) {
        return {
            padding: ''
        };
    },
    p9: function(_value) {
        return {
            padding: ''
        };
    },
    p10: function(_value) {
        return {
            padding: ''
        };
    },
    border: function(_border) {
        return function(_value) {
            return {
                border: ''
            };
        };
    },
    borderBottom: function(_border) {
        return function(_value) {
            return {
                borderBottom: ''
            };
        };
    },
    borderLeft: function(_border) {
        return function(_value) {
            return {
                borderLeft: ''
            };
        };
    },
    borderRight: function(_border) {
        return function(_value) {
            return {
                borderRight: ''
            };
        };
    },
    borderTop: function(_border) {
        return function(_value) {
            return {
                borderTop: ''
            };
        };
    },
    borderY: function(_border) {
        return function(_value) {
            return {
                borderTop: '',
                borderBottom: ''
            };
        };
    },
    borderX: function(_border) {
        return function(_value) {
            return {
                borderRight: '',
                borderLeft: ''
            };
        };
    },
    b: function(_border) {
        return function(_value) {
            return {
                border: ''
            };
        };
    },
    bb: function(_border) {
        return function(_value) {
            return {
                borderBottom: ''
            };
        };
    },
    bl: function(_border) {
        return function(_value) {
            return {
                borderLeft: ''
            };
        };
    },
    br: function(_border) {
        return function(_value) {
            return {
                borderRight: ''
            };
        };
    },
    bt: function(_border) {
        return function(_value) {
            return {
                borderTop: ''
            };
        };
    },
    by: function(_border) {
        return function(_value) {
            return {
                borderTop: '',
                borderBottom: ''
            };
        };
    },
    bx: function(_border) {
        return function(_value) {
            return {
                borderRight: '',
                borderLeft: ''
            };
        };
    },
    radius: function(_radius) {
        return function(_value) {
            return {
                borderRadius: ''
            };
        };
    },
    borderBottomRadius: function(_radius) {
        return function(_value) {
            return {
                borderBottomRadius: ''
            };
        };
    },
    borderLeftRadius: function(_radius) {
        return function(_value) {
            return {
                borderLeftRadius: ''
            };
        };
    },
    borderRightRadius: function(_radius) {
        return function(_value) {
            return {
                borderRightRadius: ''
            };
        };
    },
    borderTopRadius: function(_radius) {
        return function(_value) {
            return {
                borderTopRadius: ''
            };
        };
    },
    borderYRadius: function(_radius) {
        return function(_value) {
            return {
                borderTopRadius: '',
                borderBottomRadius: ''
            };
        };
    },
    borderXRadius: function(_radius) {
        return function(_value) {
            return {
                borderRightRadius: '',
                borderLeftRadius: ''
            };
        };
    },
    r: function(_radius) {
        return function(_value) {
            return {
                borderRadius: ''
            };
        };
    },
    rb: function(_radius) {
        return function(_value) {
            return {
                borderBottomRadius: ''
            };
        };
    },
    rl: function(_radius) {
        return function(_value) {
            return {
                borderLeftRadius: ''
            };
        };
    },
    rr: function(_radius) {
        return function(_value) {
            return {
                borderRightRadius: ''
            };
        };
    },
    rt: function(_radius) {
        return function(_value) {
            return {
                borderTopRadius: ''
            };
        };
    },
    ry: function(_radius) {
        return function(_value) {
            return {
                borderTopRadius: '',
                borderBottomRadius: ''
            };
        };
    },
    rx: function(_radius) {
        return function(_value) {
            return {
                borderRightRadius: '',
                borderLeftRadius: ''
            };
        };
    },
    elevate: function(_elevate) {
        return function(_value) {
            return {
                boxShadow: ''
            };
        };
    },
    e: function(_elevate) {
        return function(_value) {
            return {
                boxShadow: ''
            };
        };
    },
    centered: function() {
        return {
            margin: '0 auto'
        };
    },
    c: function() {
        return {
            margin: '0 auto'
        };
    },
    display: function(_value) {
        return {
            display: ''
        };
    },
    d: function(_value) {
        return {
            display: ''
        };
    },
    flex: function(_value) {
        return {
            flex: ''
        };
    },
    f: function(_value) {
        return {
            flex: ''
        };
    },
    flexGrow: function(_value) {
        return {
            flexGrow: ''
        };
    },
    fg: function(_value) {
        return {
            flexGrow: ''
        };
    },
    order: function(_value) {
        return {
            order: ''
        };
    },
    od: function(_value) {
        return {
            order: ''
        };
    },
    flexShrink: function(_value) {
        return {
            flexShrink: ''
        };
    },
    fs: function(_value) {
        return {
            flexShrink: ''
        };
    },
    flexDirection: function(_value) {
        return {
            flexDirection: ''
        };
    },
    fd: function(_value) {
        return {
            flexDirection: 'string'
        };
    },
    flexWrap: function(_value) {
        return {
            flexWrap: 'string'
        };
    },
    fw: function(_value) {
        return {
            flexWrap: 'string'
        };
    },
    flexBasis: function(_value) {
        return {
            flexBasis: ''
        };
    },
    fb: function(_value) {
        return {
            flexBasis: ''
        };
    },
    justifyContent: function(_value) {
        return {
            justifyContent: ''
        };
    },
    jc: function(_value) {
        return {
            justifyContent: ''
        };
    },
    justifyItems: function(_value) {
        return {
            justifyContent: ''
        };
    },
    ji: function(_value) {
        return {
            justifyContent: ''
        };
    },
    justifySelf: function(_value) {
        return {
            justifyContent: ''
        };
    },
    js: function(_value) {
        return {
            justifyContent: ''
        };
    },
    alignContent: function(_value) {
        return {
            alignContent: ''
        };
    },
    ac: function(_value) {
        return {
            alignContent: ''
        };
    },
    alignItems: function(_value) {
        return {
            alignItems: ''
        };
    },
    ai: function(_value) {
        return {
            alignItems: ''
        };
    },
    alignSelf: function(_value) {
        return {
            alignSelf: ''
        };
    },
    af: function(_value) {
        return {
            alignSelf: ''
        };
    },
    heightSize: function(_unit) {
        return function(_value) {
            return {
                width: 'string'
            };
        };
    },
    h: function(_unit) {
        return function(_value) {
            return {
                width: ''
            };
        };
    },
    widthSize: function(_unit) {
        return function(_value) {
            return {
                width: ''
            };
        };
    },
    w: function(_unit) {
        return function(_value) {
            return {
                width: ''
            };
        };
    },
    overflow: function(_value) {
        return {
            overflow: ''
        };
    },
    of: function(_value) {
        return {
            overflow: ''
        };
    }
};
export var swatchesThemeDefaults = {
};
export var unitThemeDefaults = {
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
    default: ''
};
export var themeDefaults = {
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
    global: {
    }
};
