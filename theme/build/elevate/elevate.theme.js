"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elevateTheme = void 0;
var tslib_1 = require("tslib");
var deepmerge_1 = tslib_1.__importDefault(require("deepmerge"));
var maybe_1 = require("../utils/maybe");
var elevate_types_1 = require("./elevate.types");
function elevateTheme(theme) {
    var elevate = maybe_1.maybe({})(theme === null || theme === void 0 ? void 0 : theme.elevate);
    var defaults = {
        0: elevate_types_1.ELEVATE_0,
        1: elevate_types_1.ELEVATE_1,
        2: elevate_types_1.ELEVATE_2,
        3: elevate_types_1.ELEVATE_3,
        4: elevate_types_1.ELEVATE_4,
        5: elevate_types_1.ELEVATE_5,
    };
    return deepmerge_1.default(defaults, elevate);
}
exports.elevateTheme = elevateTheme;
//# sourceMappingURL=elevate.theme.js.map