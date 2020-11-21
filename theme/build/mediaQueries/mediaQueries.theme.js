"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediaQueriesTheme = exports.breakpointTheme = void 0;
var tslib_1 = require("tslib");
var deepmerge_1 = tslib_1.__importDefault(require("deepmerge"));
var maybe_1 = require("../utils/maybe");
function breakpointTheme(theme) {
    var breakpoints = maybe_1.maybe({})(theme === null || theme === void 0 ? void 0 : theme.breakpoints);
    var defaults = {
        sm: 425,
        md: 768,
        lg: 1024,
        xl: 1280,
    };
    return deepmerge_1.default(defaults, breakpoints);
}
exports.breakpointTheme = breakpointTheme;
function mediaQueriesTheme(theme) {
    var mediaQueries = maybe_1.maybe({})(theme === null || theme === void 0 ? void 0 : theme.mediaQueries);
    var breakpoints = maybe_1.maybe({})(theme === null || theme === void 0 ? void 0 : theme.breakpoints);
    var defaults = Object.entries(breakpoints).reduce(function (acc, _a) {
        var _b;
        var key = _a[0], value = _a[1];
        return tslib_1.__assign(tslib_1.__assign({}, acc), (_b = {}, _b[key] = "@media(min-width: " + value + "px)", _b));
    }, {});
    return deepmerge_1.default(defaults, mediaQueries);
}
exports.mediaQueriesTheme = mediaQueriesTheme;
//# sourceMappingURL=mediaQueries.theme.js.map