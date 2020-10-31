"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediaQueriesTheme = void 0;
var tslib_1 = require("tslib");
var deepmerge_1 = tslib_1.__importDefault(require("deepmerge"));
var maybe_1 = require("../utils/maybe");
function mediaQueriesTheme(theme) {
    var mediaQueries = maybe_1.maybe({})(theme === null || theme === void 0 ? void 0 : theme.mediaQueries);
    var defaults = {
        sm: 425,
        md: 768,
        lg: 1024,
        xl: 1280,
    };
    return deepmerge_1.default(defaults, mediaQueries);
}
exports.mediaQueriesTheme = mediaQueriesTheme;
//# sourceMappingURL=mediaQueries.theme.js.map