"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitTheme = void 0;
var tslib_1 = require("tslib");
var deepmerge_1 = tslib_1.__importDefault(require("deepmerge"));
function unitTheme(theme) {
    var unit = (theme === null || theme === void 0 ? void 0 : theme.unit) || {};
    var defaults = {
        0: '0px',
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '24px',
        6: '32px',
        7: '48px',
        8: '64px',
        9: '96px',
        10: '128px',
        11: '192px',
        12: '256px',
        13: '384px',
        14: '512px',
        15: '768px',
        16: '1024px',
        default: '24px',
    };
    return deepmerge_1.default(defaults, unit);
}
exports.unitTheme = unitTheme;
//# sourceMappingURL=unit.theme.js.map