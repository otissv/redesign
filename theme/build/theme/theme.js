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
import { borderTheme } from '../border';
import { colorTheme } from '../color';
import { elevateTheme } from '../elevate';
import { fontTheme } from '../font';
import { radiusTheme } from '../radius';
import { scrollbarTheme } from '../scrollbar';
import { transitionTheme } from '../transition';
import { unitTheme } from '../unit';
import { utilityTheme } from '../utility';
import { globalTheme } from '../global';
import { mediaQueriesTheme } from '../mediaQueries';
export function createTheme(param) {
    var partialTheme = param === void 0 ? {
    } : param;
    var _color = colorTheme(partialTheme);
    var _unit = unitTheme(partialTheme);
    var defaultTheme = _objectSpread({
    }, partialTheme, {
        color: _color,
        unit: _unit
    });
    var baseTheme = _objectSpread({
    }, defaultTheme, {
        border: borderTheme(defaultTheme),
        color: _color,
        elevate: elevateTheme(defaultTheme),
        font: fontTheme(defaultTheme),
        mediaQueries: mediaQueriesTheme(defaultTheme),
        radius: radiusTheme(defaultTheme),
        scrollbar: scrollbarTheme(defaultTheme),
        transition: transitionTheme(defaultTheme)
    });
    return _objectSpread({
    }, baseTheme, {
        global: globalTheme(baseTheme),
        utility: utilityTheme(baseTheme)
    });
}
