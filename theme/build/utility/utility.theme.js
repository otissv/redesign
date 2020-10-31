"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utilityTheme = void 0;
var tslib_1 = require("tslib");
var maybe_1 = require("../utils/maybe");
var utility_helpers_1 = require("./utility.helpers");
function utilityTheme(theme) {
    var maybeTheme = maybe_1.maybe({});
    var hostColor = maybeTheme(theme.color);
    var hostBorder = maybeTheme(theme.border);
    var hostElevate = maybeTheme(theme.elevate);
    var hostFont = maybeTheme(theme.font);
    var hostRadius = maybeTheme(theme.radius);
    var hostUnit = maybeTheme(theme.unit);
    var hostUtility = maybeTheme(theme.utility);
    var hostMediaQueries = maybeTheme(theme.mediaQueries);
    var defaults = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, utility_helpers_1.unitPositions({ unit: hostUnit, style: 'margin' })), utility_helpers_1.unitPositions({ unit: hostUnit, style: 'm' })), utility_helpers_1.unitPositions({ unit: hostUnit, style: 'padding' })), utility_helpers_1.unitPositions({ unit: hostUnit, style: 'p' })), { 
        /*
         * Color
         */
        color: utility_helpers_1.getColor(hostColor), cl: utility_helpers_1.getColor(hostColor), 
        /*
         * Display
         */
        display: utility_helpers_1.getDisplay, d: utility_helpers_1.getDisplay, 
        /*
         * Background
         */
        background: utility_helpers_1.getBackground(hostColor), bg: utility_helpers_1.getBackground(hostColor), backgroundAttachment: utility_helpers_1.getBackgroundAttachment, bga: utility_helpers_1.getBackgroundAttachment, backgroundClip: utility_helpers_1.getBackgroundClip, bgl: utility_helpers_1.getBackgroundClip, backgroundColor: utility_helpers_1.getBackgroundColor, bgc: utility_helpers_1.getBackgroundColor(hostColor), backgroundPosition: utility_helpers_1.getBackgroundPosition, bgp: utility_helpers_1.getBackgroundPosition, backgroundRepeat: utility_helpers_1.getBackgroundRepeat, bgr: utility_helpers_1.getBackgroundRepeat, backgroundSize: utility_helpers_1.getBackgroundSize, bgs: utility_helpers_1.getBackgroundSize, backgroundImage: utility_helpers_1.getBackgroundImage, bgi: utility_helpers_1.getBackgroundImage, 
        /*
         * Border
         */
        border: utility_helpers_1.getBorder(hostBorder), borderBottom: utility_helpers_1.getBorderBottom(hostBorder), borderLeft: utility_helpers_1.getBorderLeft(hostBorder), borderRight: utility_helpers_1.getBorderRight(hostBorder), borderTop: utility_helpers_1.getBorderTop(hostBorder), borderY: utility_helpers_1.getBorderY(hostBorder), borderX: utility_helpers_1.getBorderX(hostBorder), borderColor: utility_helpers_1.getBorderColor(hostColor), borderWidth: utility_helpers_1.getBorderWidth, borderStyle: utility_helpers_1.getBorderStyle, bd: utility_helpers_1.getBorder(hostBorder), bdb: utility_helpers_1.getBorderBottom(hostBorder), bdl: utility_helpers_1.getBorderLeft(hostBorder), bdr: utility_helpers_1.getBorderRight(hostBorder), bdt: utility_helpers_1.getBorderTop(hostBorder), bdx: utility_helpers_1.getBorderX(hostBorder), bdy: utility_helpers_1.getBorderY(hostBorder), bdc: utility_helpers_1.getBorderColor(hostColor), bdw: utility_helpers_1.getBorderWidth, bds: utility_helpers_1.getBorderStyle, radius: utility_helpers_1.getRadius(hostRadius), borderBottomRadius: utility_helpers_1.getBorderBottomRadius(hostRadius), borderLeftRadius: utility_helpers_1.getBorderLeftRadius(hostRadius), borderRightRadius: utility_helpers_1.getBorderRightRadius(hostRadius), borderTopRadius: utility_helpers_1.getBorderTopRadius(hostRadius), borderYRadius: utility_helpers_1.getBorderYRadius(hostRadius), borderXRadius: utility_helpers_1.getBorderXRadius(hostRadius), r: utility_helpers_1.getRadius(hostRadius), rb: utility_helpers_1.getBorderBottomRadius(hostRadius), rl: utility_helpers_1.getBorderLeftRadius(hostRadius), rr: utility_helpers_1.getBorderRightRadius(hostRadius), rt: utility_helpers_1.getBorderTopRadius(hostRadius), ry: utility_helpers_1.getBorderYRadius(hostRadius), rx: utility_helpers_1.getBorderXRadius(hostRadius), 
        /*
         * Elevate
         */
        elevate: utility_helpers_1.getElevate(hostElevate), e: utility_helpers_1.getElevate(hostElevate), boxSizing: utility_helpers_1.getBoxSizing, bs: utility_helpers_1.getBoxSizing, 
        /*
         * Centered
         */
        centered: utility_helpers_1.getCentered, ct: utility_helpers_1.getCentered, 
        /*
         * Flex
         */
        flex: utility_helpers_1.getFlex, fl: utility_helpers_1.getFlex, flexGrow: utility_helpers_1.getFlexGrow, flg: utility_helpers_1.getFlexGrow, flexShrink: utility_helpers_1.getFlexShrink, fls: utility_helpers_1.getFlexShrink, flexDirection: utility_helpers_1.getFlexDirection, fld: utility_helpers_1.getFlexDirection, flexWrap: utility_helpers_1.getFlexWrap, flw: utility_helpers_1.getFlexWrap, flexBasis: utility_helpers_1.getFlexBasis, flb: utility_helpers_1.getFlexBasis, order: utility_helpers_1.getOrder, od: utility_helpers_1.getOrder, justifyContent: utility_helpers_1.getJustifyContent, jc: utility_helpers_1.getJustifyContent, justifyItems: utility_helpers_1.getJustifyItems, ji: utility_helpers_1.getJustifyItems, justifySelf: utility_helpers_1.getJustifySelf, js: utility_helpers_1.getJustifySelf, alignContent: utility_helpers_1.getAlignContent, ac: utility_helpers_1.getAlignContent, alignItems: utility_helpers_1.getAlignItems, ai: utility_helpers_1.getAlignItems, alignSelf: utility_helpers_1.getAlignSelf, af: utility_helpers_1.getAlignSelf, 
        /*
         * Width / Height
         */
        h: utility_helpers_1.getHeight(hostUnit), w: utility_helpers_1.getWidth(hostUnit), maxHeight: utility_helpers_1.getMaxHeight(hostUnit), mh: utility_helpers_1.getMaxHeight(hostUnit), maxWidth: utility_helpers_1.getMaxWidth(hostUnit), mw: utility_helpers_1.getMaxWidth(hostUnit), wh: utility_helpers_1.getWidthHeight(hostUnit), 
        /*
         * Text
         */
        textAlign: utility_helpers_1.getTextAlign, ta: utility_helpers_1.getTextAlign, truncate: utility_helpers_1.getTruncate, tc: utility_helpers_1.getTruncate, wordBreak: utility_helpers_1.getWordBreak, wb: utility_helpers_1.getWordBreak, listStyle: utility_helpers_1.getListStyle, lt: utility_helpers_1.getListStyle, listPosition: utility_helpers_1.getListPosition, lp: utility_helpers_1.getListPosition, textDecoration: utility_helpers_1.getTextDecoration, td: utility_helpers_1.getTextDecoration, tt: utility_helpers_1.getTextTransform, verticalAlign: utility_helpers_1.getVerticalAlign, va: utility_helpers_1.getVerticalAlign, whiteSpace: utility_helpers_1.getWhiteSpace, 
        /*
         * Media
         */
        mediaQuires: utility_helpers_1.getMediaQuires(hostMediaQueries), mq: utility_helpers_1.getMediaQuires(hostMediaQueries), 
        /*
         * Position
         */
        position: utility_helpers_1.getPosition, ps: utility_helpers_1.getPosition, top: utility_helpers_1.getBorderTop, bottom: utility_helpers_1.getBottom, left: utility_helpers_1.getLeft, right: utility_helpers_1.getRight, 
        /*
         * Float
         */
        float: utility_helpers_1.getFloat, ft: utility_helpers_1.getFloat, clearFix: utility_helpers_1.getClearFix, cf: utility_helpers_1.getClearFix, 
        /*
         * Overflow
         */
        overflow: utility_helpers_1.getOverflow, of: utility_helpers_1.getOverflow, overflowX: utility_helpers_1.getOverflowX, ox: utility_helpers_1.getOverflowX, overflowY: utility_helpers_1.getOverflowY, oy: utility_helpers_1.getOverflowY, overflowScrolling: utility_helpers_1.getOverflowScrolling, os: utility_helpers_1.getOverflowScrolling, overflowWrap: utility_helpers_1.getOverflowWrap, ow: utility_helpers_1.getOverflowWrap, fontFamily: utility_helpers_1.getFontFamily(hostFont), fontSize: utility_helpers_1.getFontSize(hostFont), fs: utility_helpers_1.getFontSize(hostFont), lineHeight: utility_helpers_1.getLineHeight(hostFont), lh: utility_helpers_1.getLineHeight(hostFont), letterSpacing: utility_helpers_1.getLetterSpacing, ls: utility_helpers_1.getLetterSpacing(hostFont), fontWeight: utility_helpers_1.getFontWeight(hostFont), fw: utility_helpers_1.getFontWeight(hostFont), 
        /*
         * Z Index
         */
        zIndex: utility_helpers_1.getZIndex, zi: utility_helpers_1.getZIndex, 
        /*
         * Object
         */
        objectFit: utility_helpers_1.getObjectFit, ot: utility_helpers_1.getObjectFit, objectPosition: utility_helpers_1.getObjectPosition, op: utility_helpers_1.getObjectPosition, 
        /*
         * Visibility
         */
        visibility: utility_helpers_1.getVisibility, 
        /*
         * Interactivity
         */
        cursor: utility_helpers_1.getCursor, cr: utility_helpers_1.getCursor, appearance: utility_helpers_1.getAppearance, ap: utility_helpers_1.getAppearance, pointerEvents: utility_helpers_1.getPointerEvents, pe: utility_helpers_1.getPointerEvents, resize: utility_helpers_1.getResize, rs: utility_helpers_1.getResize, userSelect: utility_helpers_1.getUserSelect, us: utility_helpers_1.getUserSelect, 
        /*
         * Transition
         */
        transition: utility_helpers_1.getTransition, tr: utility_helpers_1.getTransition, 
        /*
         * Transforms
         */
        transform: utility_helpers_1.getTransform, tf: utility_helpers_1.getTransform }), hostUtility);
    return defaults;
}
exports.utilityTheme = utilityTheme;
//# sourceMappingURL=utility.theme.js.map