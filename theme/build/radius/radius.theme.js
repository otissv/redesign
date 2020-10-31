"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.radiusTheme = void 0;
var tslib_1 = require("tslib");
var deepmerge_1 = tslib_1.__importDefault(require("deepmerge"));
var maybe_1 = require("../utils/maybe");
var radius_types_1 = require("./radius.types");
function radiusTheme(theme) {
    var radius = maybe_1.maybe({})(theme === null || theme === void 0 ? void 0 : theme.radius);
    var defaults = {
        circle: radius_types_1.RADIUS_CIRCLE,
        none: radius_types_1.RADIUS_NONE,
        round: radius_types_1.RADIUS_ROUND,
        rounded: radius_types_1.RADIUS_ROUNDED,
    };
    return deepmerge_1.default(defaults, radius);
}
exports.radiusTheme = radiusTheme;
//# sourceMappingURL=radius.theme.js.map