"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediaQueriesTheme = exports.breakpointsTheme = void 0;
var tslib_1 = require("tslib");
var deepmerge_1 = tslib_1.__importDefault(require("deepmerge"));
var maybe_1 = require("../utils/maybe");
function breakpointsTheme(theme) {
    var breakpoints = maybe_1.maybe({})(theme === null || theme === void 0 ? void 0 : theme.breakpoints);
    var defaults = {
        sm: { min: 640, max: 767 },
        md: { min: 768, max: 1023 },
        lg: { min: 1024, max: 1279 },
        xl: { min: 1280, max: 1535 },
    };
    return deepmerge_1.default(defaults, breakpoints);
}
exports.breakpointsTheme = breakpointsTheme;
function mediaQueriesTheme(theme) {
    var mediaQueries = maybe_1.maybe({})(theme === null || theme === void 0 ? void 0 : theme.mediaQueries);
    var breakpoints = maybe_1.maybe({})(theme === null || theme === void 0 ? void 0 : theme.breakpoints);
    var defaults = {};
    for (var key in breakpoints) {
        var breakpoint = breakpoints[key];
        defaults[key] = tslib_1.__assign(tslib_1.__assign({}, (breakpoint.min
            ? { min: "@media(min-width: " + breakpoint.min + "px)" }
            : {})), (breakpoint.max
            ? { max: "@media(max-width: " + breakpoint.max + "px)" }
            : {}));
    }
    return deepmerge_1.default(defaults, mediaQueries);
}
exports.mediaQueriesTheme = mediaQueriesTheme;
//# sourceMappingURL=mediaQueries.theme.js.map