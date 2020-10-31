"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBorder = void 0;
var theme_1 = require("@redesign-system/theme");
function getBorder(border, appearance) {
    if (appearance && appearance !== 'PRIMARY') {
        return border["thick" + theme_1.toUpperFirst(appearance.toLowerCase())];
    }
    return border.thick;
}
exports.getBorder = getBorder;
//# sourceMappingURL=getBorder.js.map