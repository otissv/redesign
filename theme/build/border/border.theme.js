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
    var thickWidth = border.thickWidth || border_types_1.BORDER_THICK_WIDTH;
    var thickColor = border.thickColor || color[border_types_1.BORDER_THICK_COLOR];
    var thinWidth = border.thinWidth || border_types_1.BORDER_THIN_WIDTH;
    var thinColor = border.thinColor || color[border_types_1.BORDER_THIN_COLOR];
    var none = border_types_1.BORDER_NONE;
    var style = border.style || border_types_1.BORDER_STYLE;
    function getColor(value) {
        return color[value] || value;
    }
    var defaults = {
        none: none,
        style: style,
        thickWidth: thickWidth,
        thickColor: thickColor,
        thinWidth: thinWidth,
        thinColor: thinColor,
        // thick
        thick: thickWidth + " " + style + " " + getColor(thickColor),
        thickInvert: thickWidth + " " + style + " " + getColor(thickColor),
        thickTransparent: thickWidth + " " + style + " rgba(0, 0, 0, 0);",
        // thin
        thin: thinWidth + " " + style + " " + getColor(thinColor),
        thinInvert: thinWidth + " " + style + " " + getColor(thinColor),
        thinTransparent: thinWidth + " " + style + " rgba(0, 0, 0, 0);",
    };
    for (var key in color) {
        var colorValue = color[key];
        var upperFirstKey = textTransform_1.toUpperFirst(textTransform_1.toCamel(key));
        defaults["thick" + upperFirstKey] = thickWidth + " " + style + " " + colorValue;
        defaults["thin" + upperFirstKey] = thinWidth + " " + style + " " + colorValue;
    }
    return deepmerge_1.default(defaults, border);
}
exports.borderTheme = borderTheme;
//# sourceMappingURL=border.theme.js.map