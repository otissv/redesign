"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borderTheme = void 0;
var tslib_1 = require("tslib");
var deepmerge_1 = tslib_1.__importDefault(require("deepmerge"));
var textTransform_1 = require("../utils/textTransform");
var maybe_1 = require("../utils/maybe");
var border_types_1 = require("./border.types");
function borderTheme(theme) {
    var maybeTheme = maybe_1.maybe({});
    var border = maybeTheme(theme === null || theme === void 0 ? void 0 : theme.border);
    var color = maybeTheme(theme === null || theme === void 0 ? void 0 : theme.color);
    var initialBorders = {};
    var defaults = tslib_1.__assign({ none: border_types_1.BORDER_NONE, style: border_types_1.BORDER_STYLE, dash: border_types_1.BORDER_DASH, thickWidth: border_types_1.BORDER_THICK_WIDTH, thickColor: color[border_types_1.BORDER_THICK_COLOR], thinWidth: border_types_1.BORDER_THIN_WIDTH, thinColor: color[border_types_1.BORDER_THIN_COLOR], 
        // thick
        thick: border_types_1.BORDER_THICK_WIDTH + " " + border_types_1.BORDER_STYLE + " " + color[border_types_1.BORDER_THICK_COLOR], thickInvert: border_types_1.BORDER_THICK_WIDTH + " " + border_types_1.BORDER_STYLE + " " + color[border_types_1.BORDER_THICK_COLOR], thickDashed: border_types_1.BORDER_THICK_WIDTH + " " + border_types_1.BORDER_DASH + " " + color[border_types_1.BORDER_THICK_COLOR], thickDashedInvert: border_types_1.BORDER_THICK_WIDTH + " " + border_types_1.BORDER_DASH + " " + color[border_types_1.BORDER_THICK_COLOR], thickTransparent: border_types_1.BORDER_THICK_WIDTH + " " + border_types_1.BORDER_STYLE + " rgba(0, 0, 0, 0);", 
        // thin
        thin: border_types_1.BORDER_THIN_WIDTH + " " + border_types_1.BORDER_STYLE + " " + color[border_types_1.BORDER_THIN_COLOR], thinDashed: border_types_1.BORDER_THIN_WIDTH + " " + border_types_1.BORDER_DASH + "  " + color[border_types_1.BORDER_THIN_COLOR], thinDashedInvert: border_types_1.BORDER_THIN_WIDTH + " " + border_types_1.BORDER_DASH + "  " + color[border_types_1.BORDER_THIN_COLOR], thinInvert: border_types_1.BORDER_THIN_WIDTH + " " + border_types_1.BORDER_STYLE + " " + color[border_types_1.BORDER_THIN_COLOR], thinTransparent: border_types_1.BORDER_THIN_WIDTH + " " + border_types_1.BORDER_STYLE + " rgba(0, 0, 0, 0);" }, Object.keys(color).reduce(function (previous, key) {
        var _a;
        var color_key = color[key];
        var upperFirstKey = textTransform_1.toUpperFirst(textTransform_1.toCamel(key));
        return tslib_1.__assign(tslib_1.__assign({}, previous), (_a = {}, _a["thick" + upperFirstKey] = border_types_1.BORDER_THICK_WIDTH + " " + border_types_1.BORDER_STYLE + " " + color_key, _a["thin" + upperFirstKey] = border_types_1.BORDER_THIN_WIDTH + " " + border_types_1.BORDER_STYLE + " " + color_key, _a["thickDashed" + upperFirstKey] = border_types_1.BORDER_THICK_WIDTH + " " + border_types_1.BORDER_DASH + " " + color_key, _a["thinDashed" + upperFirstKey] = border_types_1.BORDER_THIN_WIDTH + " " + border_types_1.BORDER_DASH + " " + color_key, _a));
    }, initialBorders));
    return deepmerge_1.default(defaults, border);
}
exports.borderTheme = borderTheme;
//# sourceMappingURL=border.theme.js.map