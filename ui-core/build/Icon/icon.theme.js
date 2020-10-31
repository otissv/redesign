"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iconAppearanceTheme = exports.iconTheme = void 0;
var tslib_1 = require("tslib");
var theme_1 = require("@redesign-system/theme");
var theme_2 = require("@redesign-system/theme");
function iconTheme(props) {
    var _a;
    var hoverColor = props.hoverColor, Icon = props.theme.Icon;
    return tslib_1.__assign(tslib_1.__assign({ display: 'inline-block', color: 'inherit', fill: 'currentcolor', height: 'auto', position: 'relative' }, (hoverColor && { '&:hover': { color: hoverColor } })), (theme_1.isFunction(Icon) ? (_a = Icon(props)) === null || _a === void 0 ? void 0 : _a.default : Icon === null || Icon === void 0 ? void 0 : Icon.default));
}
exports.iconTheme = iconTheme;
function iconAppearanceTheme(props) {
    var _a;
    var appearance = props.appearance, _b = props.theme, color = _b.color, Icon = _b.Icon;
    var iconAppearanceTheme = theme_1.isFunction(Icon)
        ? (_a = Icon(props)) === null || _a === void 0 ? void 0 : _a.appearance : Icon === null || Icon === void 0 ? void 0 : Icon.appearance;
    switch (appearance) {
        case theme_2.ACCENT:
            return tslib_1.__assign({ color: color.accent, '&:hover': {
                    color: color.accent2,
                } }, iconAppearanceTheme === null || iconAppearanceTheme === void 0 ? void 0 : iconAppearanceTheme.accent);
        case theme_2.ACTION:
            return tslib_1.__assign({ color: color.action, '&:hover': {
                    color: color.action2,
                } }, iconAppearanceTheme === null || iconAppearanceTheme === void 0 ? void 0 : iconAppearanceTheme.action);
        case theme_2.ACTIVE:
            return tslib_1.__assign({ color: color.active, '&:hover': {
                    color: color.active2,
                } }, iconAppearanceTheme === null || iconAppearanceTheme === void 0 ? void 0 : iconAppearanceTheme.active);
        case theme_2.DANGER:
            return tslib_1.__assign({ color: color.danger, '&:hover': {
                    color: color.danger2,
                } }, iconAppearanceTheme === null || iconAppearanceTheme === void 0 ? void 0 : iconAppearanceTheme.danger);
        case theme_2.ERROR:
            return tslib_1.__assign({ color: color.error, '&:hover': {
                    color: color.error2,
                } }, iconAppearanceTheme === null || iconAppearanceTheme === void 0 ? void 0 : iconAppearanceTheme.error);
        case theme_2.SUCCESS:
            return tslib_1.__assign({ color: color.success, '&:hover': {
                    color: color.success2,
                } }, iconAppearanceTheme === null || iconAppearanceTheme === void 0 ? void 0 : iconAppearanceTheme.success);
        case theme_2.WARNING:
            return tslib_1.__assign({ color: color.warning, '&:hover': {
                    color: color.warning2,
                } }, iconAppearanceTheme === null || iconAppearanceTheme === void 0 ? void 0 : iconAppearanceTheme.warning);
        case theme_2.DISABLED:
            return tslib_1.__assign({ color: color.disabled, '&:hover': {
                    color: color.disabled2,
                } }, iconAppearanceTheme === null || iconAppearanceTheme === void 0 ? void 0 : iconAppearanceTheme.disabled);
        default:
            return tslib_1.__assign({}, iconAppearanceTheme === null || iconAppearanceTheme === void 0 ? void 0 : iconAppearanceTheme[appearance]);
    }
}
exports.iconAppearanceTheme = iconAppearanceTheme;
//# sourceMappingURL=icon.theme.js.map