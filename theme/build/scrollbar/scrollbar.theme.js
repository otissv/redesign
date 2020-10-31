"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrollbarTheme = void 0;
var tslib_1 = require("tslib");
var deepmerge_1 = tslib_1.__importDefault(require("deepmerge"));
var maybe_1 = require("../utils/maybe");
function scrollbarTheme(theme) {
    var maybeTheme = maybe_1.maybe({});
    var color = maybeTheme(theme === null || theme === void 0 ? void 0 : theme.color);
    var scrollbar = maybeTheme(theme === null || theme === void 0 ? void 0 : theme.scrollbar);
    var unit = maybeTheme(theme === null || theme === void 0 ? void 0 : theme.unit);
    var defaults = {
        width: unit[3],
        height: unit[3],
        backgroundColor: color.background,
        corner: {
            backgroundColor: color.background,
        },
        thumb: {
            backgroundColor: '#7d7d7d94',
            outline: 'transparent',
            transition: 'background-color ease 0.2s',
            hover: {
                backgroundColor: '#7d7d7d',
            },
        },
    };
    return deepmerge_1.default(defaults, scrollbar);
}
exports.scrollbarTheme = scrollbarTheme;
//# sourceMappingURL=scrollbar.theme.js.map