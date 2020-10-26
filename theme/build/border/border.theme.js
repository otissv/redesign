function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
import merge from 'deepmerge';
import { toCamel, toUpperFirst, maybe } from '../utils';
import { BORDER_NONE, BORDER_STYLE, BORDER_DASH, BORDER_THICK_WIDTH, BORDER_THICK_COLOR, BORDER_THIN_WIDTH, BORDER_THIN_COLOR } from './border.types';
var _obj;
export function borderTheme(theme) {
    var maybeTheme = maybe({
    });
    var border = maybeTheme(theme === null || theme === void 0 ? void 0 : theme.border);
    var color = maybeTheme(theme === null || theme === void 0 ? void 0 : theme.color);
    var initialBorders = {
    };
    var defaults = _objectSpread({
        none: BORDER_NONE,
        style: BORDER_STYLE,
        dash: BORDER_DASH,
        thickWidth: BORDER_THICK_WIDTH,
        thickColor: color[BORDER_THICK_COLOR],
        thinWidth: BORDER_THIN_WIDTH,
        thinColor: color[BORDER_THIN_COLOR],
        // thick
        thick: "".concat(BORDER_THICK_WIDTH, " ").concat(BORDER_STYLE, " ").concat(color[BORDER_THICK_COLOR]),
        thickInvert: "".concat(BORDER_THICK_WIDTH, " ").concat(BORDER_STYLE, " ").concat(color[BORDER_THICK_COLOR]),
        thickDashed: "".concat(BORDER_THICK_WIDTH, " ").concat(BORDER_DASH, " ").concat(color[BORDER_THICK_COLOR]),
        thickDashedInvert: "".concat(BORDER_THICK_WIDTH, " ").concat(BORDER_DASH, " ").concat(color[BORDER_THICK_COLOR]),
        thickTransparent: "".concat(BORDER_THICK_WIDTH, " ").concat(BORDER_STYLE, " rgba(0, 0, 0, 0);"),
        // thin
        thin: "".concat(BORDER_THIN_WIDTH, " ").concat(BORDER_STYLE, " ").concat(color[BORDER_THIN_COLOR]),
        thinDashed: "".concat(BORDER_THIN_WIDTH, " ").concat(BORDER_DASH, "  ").concat(color[BORDER_THIN_COLOR]),
        thinDashedInvert: "".concat(BORDER_THIN_WIDTH, " ").concat(BORDER_DASH, "  ").concat(color[BORDER_THIN_COLOR]),
        thinInvert: "".concat(BORDER_THIN_WIDTH, " ").concat(BORDER_STYLE, " ").concat(color[BORDER_THIN_COLOR]),
        thinTransparent: "".concat(BORDER_THIN_WIDTH, " ").concat(BORDER_STYLE, " rgba(0, 0, 0, 0);")
    }, Object.keys(color).reduce(function(previous, key) {
        var color_key = color[key];
        var upperFirstKey = toUpperFirst(toCamel(key));
        return _objectSpread({
        }, previous, (_obj = {
        }, // [key]: color_key,
        _defineProperty(_obj, "thick".concat(upperFirstKey), "".concat(BORDER_THICK_WIDTH, " ").concat(BORDER_STYLE, " ").concat(color_key)), _defineProperty(_obj, "thin".concat(upperFirstKey), "".concat(BORDER_THIN_WIDTH, " ").concat(BORDER_STYLE, " ").concat(color_key)), _defineProperty(_obj, "thickDashed".concat(upperFirstKey), "".concat(BORDER_THICK_WIDTH, " ").concat(BORDER_DASH, " ").concat(color_key)), _defineProperty(_obj, "thinDashed".concat(upperFirstKey), "".concat(BORDER_THIN_WIDTH, " ").concat(BORDER_DASH, " ").concat(color_key)), _obj));
    }, initialBorders));
    return merge(defaults, border);
}
