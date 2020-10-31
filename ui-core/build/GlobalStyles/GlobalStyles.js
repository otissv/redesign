"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalStyles = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var emotion_1 = require("emotion");
var createStyleString_1 = require("../helpers/createStyleString");
var theme_1 = require("@redesign-system/theme");
function GlobalStyles(_a) {
    var theme = _a.theme, css = _a.css;
    var normalize = react_1.default.useCallback(theme_1.normalizeTheme, []);
    var global = (theme === null || theme === void 0 ? void 0 : theme.global) || {};
    emotion_1.injectGlobal(normalize(), global, createStyleString_1.createStyleString(css));
    return null;
}
exports.GlobalStyles = GlobalStyles;
//# sourceMappingURL=GlobalStyles.js.map