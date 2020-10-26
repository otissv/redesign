function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
}
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
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
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
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
import facepaint from 'facepaint';
import { RADIUS_CIRCLE, RADIUS_NONE, RADIUS_ROUND, RADIUS_ROUNDED } from '../radius';
import { maybeString, maybe, toUpperFirst, toCamel } from '../utils';
import { themeDefaults } from '../defaults';
var propCase = function(key) {
    return toCamel(key).trim();
};
export var getColor = function(color) {
    return function(value) {
        return {
            color: color[value] || value
        };
    };
};
export var getBackground = function(color) {
    return function(value) {
        return {
            background: color[value] || value
        };
    };
};
export var getBorder = function(border) {
    return function(value) {
        return {
            border: border[value] || value
        };
    };
};
export var getBorderBottom = function(border) {
    return function(value) {
        return {
            borderBottom: border[value] || border
        };
    };
};
export var getBorderLeft = function(border) {
    return function(value) {
        return {
            borderLeft: border[value] || value
        };
    };
};
export var getBorderRight = function(border) {
    return function(value) {
        return {
            borderRight: border[value] || value
        };
    };
};
export var getBorderTop = function(border) {
    return function(value) {
        return {
            borderTop: border[value] || value
        };
    };
};
export var getBorderY = function(border) {
    return function(value) {
        return {
            borderTop: border[value] || value,
            borderBottom: border[value] || value
        };
    };
};
export var getBorderX = function(border) {
    return function(value) {
        return {
            borderRight: border[value] || value,
            borderLeft: border[value] || value
        };
    };
};
export var getRadius = function(radius) {
    return function(value) {
        return {
            borderRadius: getRadiuses(radius)(value)
        };
    };
};
export var getBorderBottomRadius = function(radius) {
    return function(value) {
        return {
            borderBottomRadius: getRadiuses(radius)(value)
        };
    };
};
export var getBorderLeftRadius = function(radius) {
    return function(value) {
        return {
            borderLeftRadius: getRadiuses(radius)(value)
        };
    };
};
export var getBorderRightRadius = function(radius) {
    return function(value) {
        return {
            borderRightRadius: getRadiuses(radius)(value)
        };
    };
};
export var getBorderTopRadius = function(radius) {
    return function(value) {
        return {
            borderTopRadius: getRadiuses(radius)(value)
        };
    };
};
export var getBorderYRadius = function(radius) {
    return function(value) {
        return {
            borderTopRadius: getRadiuses(radius)(value),
            borderBottomRadius: getRadiuses(radius)(value)
        };
    };
};
export var getBorderXRadius = function(radius) {
    return function(value) {
        return {
            borderRightRadius: getRadiuses(radius)(value),
            borderLeftRadius: getRadiuses(radius)(value)
        };
    };
};
export var getElevate = function(elevate) {
    return function(value) {
        var elevateValue = typeof value === 'number' ? value : parseInt(value, 10);
        return {
            boxShadow: elevate[elevateValue]
        };
    };
};
export var getCentered = function() {
    return {
        margin: '0 auto'
    };
};
export var getDisplay = function(value) {
    return {
        display: value
    };
};
export var getFlex = function(value) {
    return {
        flex: value
    };
};
export var getFlexGrow = function(value) {
    return {
        flexGrow: value
    };
};
export var getOrder = function(value) {
    return {
        order: value
    };
};
export var getFlexShrink = function(value) {
    return {
        flexShrink: value
    };
};
export var getFlexDirection = function(value) {
    return {
        flexDirection: value
    };
};
export var getFlexWrap = function(value) {
    return {
        flexWrap: value
    };
};
export var getFlexBasis = function(value) {
    return {
        flexBasis: value
    };
};
export var getJustifyContent = function(value) {
    return {
        justifyContent: value
    };
};
export var getJustifyItems = function(value) {
    return {
        justifyItems: value
    };
};
export var getJustifySelf = function(value) {
    return {
        justifySelf: value
    };
};
export var getAlignContent = function(value) {
    return {
        alignContent: value
    };
};
export var getAlignItems = function(value) {
    return {
        alignItems: value
    };
};
export var getAlignSelf = function(value) {
    return {
        alignSelf: value
    };
};
export var getHeight = function(unit) {
    return function(value) {
        return {
            height: unit[value] || value
        };
    };
};
export var getWidth = function(unit) {
    return function(value) {
        return {
            width: unit[value] || value
        };
    };
};
export var getMaxHeight = function(unit) {
    return function(value) {
        return {
            maxHeight: unit[value] || value
        };
    };
};
export var getMaxWidth = function(unit) {
    return function(value) {
        return {
            maxWidth: unit[value] || value
        };
    };
};
export var getTextAlign = function(value) {
    return {
        textAlign: value
    };
};
export var getTruncate = function() {
    return {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    };
};
export var getMediaQuires = function(mediaQuires) {
    return function(value) {
        var sm = mediaQuires.sm, md = mediaQuires.md, lg = mediaQuires.lg, xl = mediaQuires.xl, breakpoints = _objectWithoutProperties(mediaQuires, ["sm", "md", "lg", "xl"]);
        return facepaint([
            "@media(min-width: ".concat(sm, "px"),
            "@media(min-width: ".concat(md, "px"),
            "@media(min-width: ".concat(lg, "px"),
            "@media(min-width: ".concat(xl, "px"), 
        ].concat(_toConsumableArray(Object.values(breakpoints).map(function(b) {
            return "@media(min-width: ".concat(b, "px");
        }))), {
            literal: true
        })(value)[0];
    };
};
export var getOverflow = function(value) {
    return {
        overflow: value
    };
};
export function utilityTheme(theme) {
    var maybeTheme = maybe({
    });
    var hostColor = maybeTheme(theme.color);
    var hostBorder = maybeTheme(theme.border);
    var hostElevate = maybeTheme(theme.elevate);
    var hostRadius = maybeTheme(theme.radius);
    var hostUnit = maybeTheme(theme.unit);
    var hostUtility = maybeTheme(theme.utility);
    var hostMediaQueries = maybeTheme(theme.mediaQueries);
    var defaults = _objectSpread({
    }, unitPositions({
        unit: hostUnit,
        style: 'margin'
    }), unitPositions({
        unit: hostUnit,
        style: 'padding'
    }), unitPositions({
        unit: hostUnit,
        style: 'm'
    }), unitPositions({
        unit: hostUnit,
        style: 'p'
    }), {
        color: getColor(hostColor),
        c: getColor(hostColor),
        background: getBackground(hostColor),
        bg: getBackground(hostColor),
        border: getBorder(hostBorder),
        borderBottom: getBorderBottom(hostBorder),
        borderLeft: getBorderLeft(hostBorder),
        borderRight: getBorderRight(hostBorder),
        borderTop: getBorderTop(hostBorder),
        borderY: getBorderY(hostBorder),
        borderX: getBorderX(hostBorder),
        b: getBorder(hostBorder),
        bb: getBorderBottom(hostBorder),
        bl: getBorderLeft(hostBorder),
        br: getBorderRight(hostBorder),
        bt: getBorderTop(hostBorder),
        bx: getBorderX(hostBorder),
        by: getBorderY(hostBorder),
        radius: getRadius(hostRadius),
        borderBottomRadius: getBorderBottomRadius(hostRadius),
        borderLeftRadius: getBorderLeftRadius(hostRadius),
        borderRightRadius: getBorderRightRadius(hostRadius),
        borderTopRadius: getBorderTopRadius(hostRadius),
        borderYRadius: getBorderYRadius(hostRadius),
        borderXRadius: getBorderXRadius(hostRadius),
        r: getRadius(hostRadius),
        rb: getBorderBottomRadius(hostRadius),
        rl: getBorderLeftRadius(hostRadius),
        rr: getBorderRightRadius(hostRadius),
        rt: getBorderTopRadius(hostRadius),
        ry: getBorderYRadius(hostRadius),
        rx: getBorderXRadius(hostRadius),
        display: getDisplay,
        d: getDisplay,
        flex: getFlex,
        f: getFlex,
        flexGrow: getFlex,
        fg: getFlex,
        order: getOrder,
        od: getOrder,
        flexShrink: getFlexShrink,
        fs: getFlexShrink,
        flexDirection: getFlexDirection,
        fd: getFlexDirection,
        flexWrap: getFlexWrap,
        fw: getFlexWrap,
        flexBasis: getFlexBasis,
        fb: getFlexBasis,
        justifyContent: getJustifyContent,
        jc: getJustifyContent,
        justifyItems: getJustifyItems,
        ji: getJustifyItems,
        justifySelf: getJustifySelf,
        js: getJustifySelf,
        alignContent: getAlignContent,
        ac: getAlignContent,
        alignItems: getAlignItems,
        ai: getAlignItems,
        alignSelf: getAlignSelf,
        af: getAlignSelf,
        elevate: getElevate(hostElevate),
        e: getElevate(hostElevate),
        centered: getCentered,
        ct: getCentered,
        heightSize: getHeight(hostUnit),
        h: getHeight(hostUnit),
        widthSize: getWidth(hostUnit),
        w: getWidth(hostUnit),
        maxHeight: getMaxHeight(hostUnit),
        mh: getMaxHeight(hostUnit),
        maxWidth: getMaxWidth(hostUnit),
        mw: getMaxWidth(hostUnit),
        textAlign: getTextAlign,
        ta: getTextAlign,
        truncate: getTruncate,
        tr: getTruncate,
        mediaQuires: getMediaQuires(hostMediaQueries),
        mq: getMediaQuires(hostMediaQueries),
        overflow: getOverflow,
        of: getOverflow
    }, hostUtility);
    return defaults;
}
export var isValidStringValue = function(value) {
    return typeof value === 'string' && value.trim() !== '';
};
export var isValidNumberValue = function(value) {
    return typeof value === 'number';
};
export var isValidUnitValue = function(value) {
    return isValidStringValue(value) && Boolean(value.match(/%|px|rem|em|auto/));
};
export function getRadiuses(param) {
    var radius = param === void 0 ? themeDefaults.radius : param;
    return function(value) {
        switch(value){
            case 'circle':
                var ref;
                return (ref = maybeString(radius.circle)) !== null && ref !== void 0 ? ref : RADIUS_CIRCLE;
            case 'none':
                var ref1;
                return (ref1 = maybeString(radius.none)) !== null && ref1 !== void 0 ? ref1 : RADIUS_NONE;
            case 'round':
                var ref2;
                return (ref2 = maybeString(radius.round)) !== null && ref2 !== void 0 ? ref2 : RADIUS_ROUND;
            case 'rounded':
                var ref3;
                return (ref3 = maybeString(radius.rounded)) !== null && ref3 !== void 0 ? ref3 : RADIUS_ROUNDED;
            default:
                return value || 0;
        }
    };
}
export function allPositions(unit) {
    return function(value, prop) {
        var propsList = prop.split(';');
        switch(true){
            case value === 'default':
                return propsList.reduce(function(acc, key) {
                    return _objectSpread({
                    }, acc, _defineProperty({
                    }, propCase(key), unit.default));
                }, {
                });
            case isValidNumberValue(value):
                return propsList.reduce(function(acc, key) {
                    return _objectSpread({
                    }, acc, _defineProperty({
                    }, propCase(key), unit[value]));
                }, {
                });
            case isValidUnitValue(value) && isValidStringValue(value):
                {
                    return propsList.reduce(function(acc, key) {
                        return _objectSpread({
                        }, acc, _defineProperty({
                        }, propCase(key), value));
                    }, {
                    });
                }
            default:
                {
                    return '';
                }
        }
    };
}
var _obj;
export function unitPositions(param) {
    var unit = param.unit, style = param.style;
    var unitsReducer = function(accumulator, key) {
        if (key === 'default') return accumulator;
        var prop = "".concat(style).concat(toUpperFirst(key));
        return _objectSpread({
        }, accumulator, _defineProperty({
        }, prop, function(value) {
            if (!isValidStringValue(value)) return {
            };
            var positions = value.split(' ');
            return Object.keys(positions).reduce(function(accum, pos) {
                var index = parseInt(pos, 10);
                return _objectSpread({
                }, accum, _defineProperty({
                }, toCamel("".concat(style, "-").concat(positions[index])), unit[key]));
            }, {
            });
        }));
    };
    var getAllPositions = allPositions(unit);
    var initialStyles = (_obj = {
    }, _defineProperty(_obj, style, function(value) {
        return getAllPositions(value, style);
    }), _defineProperty(_obj, "".concat(style, "Bottom"), function(value) {
        return getAllPositions(value, "".concat(style, "Bottom"));
    }), _defineProperty(_obj, "".concat(style, "Left"), function(value) {
        return getAllPositions(value, "".concat(style, "Left"));
    }), _defineProperty(_obj, "".concat(style, "Right"), function(value) {
        return getAllPositions(value, "".concat(style, "Right"));
    }), _defineProperty(_obj, "".concat(style, "Top"), function(value) {
        return getAllPositions(value, "".concat(style, "Top"));
    }), _defineProperty(_obj, "".concat(style, "X"), function(value) {
        return getAllPositions(value, "".concat(style, "Right; ").concat(style, "Left"));
    }), _defineProperty(_obj, "".concat(style, "Y"), function(value) {
        return getAllPositions(value, "".concat(style, "Bottom; ").concat(style, "Top"));
    }), _obj);
    return Object.keys(unit).reduce(unitsReducer, initialStyles);
}
