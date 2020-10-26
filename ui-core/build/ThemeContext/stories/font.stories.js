function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
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
function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
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
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
import React from 'react';
import { theme, Box, Td, Th } from './story.components';
import { ThemeProvider } from '../ThemeProvider';
var tdLineHeightStyle = {
    paddingTop: 0,
    paddingBottom: 0
};
export default {
    title: 'Theme/Font'
};
export var Font = function() {
    return React.createElement(ThemeProvider, null, React.createElement(Box, {
        display: "flex",
        flexWrap: "wrap"
    }, React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement(Th, null, "Key"), React.createElement(Th, null, "Value"), React.createElement(Th, null, "Example"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement(Td, null, "base"), React.createElement(Td, null, theme.font.base), React.createElement(Td, {
        style: {
            fontSize: theme.font.base
        }
    }, "Base font size")), React.createElement("tr", null, React.createElement(Td, null, "color"), React.createElement(Td, null, theme.font.color), React.createElement(Td, {
        style: {
            color: theme.font.color
        }
    }, "Text color")), React.createElement("tr", null, React.createElement(Td, null, "colorInvert"), React.createElement(Td, null, theme.font.colorInvert), React.createElement(Td, {
        style: {
            color: theme.font.colorInvert
        }
    }, "Text color inverted")), React.createElement("tr", null, React.createElement(Td, null, "smooth"), React.createElement(Td, null, theme.font.smooth), React.createElement(Td, {
        style: {
            fontFamily: theme.font.smooth
        }
    }, "Smooth font")), React.createElement("tr", null, React.createElement(Td, null, "code"), React.createElement(Td, null, theme.font.code), React.createElement(Td, {
        style: {
            fontFamily: theme.font.code
        }
    }, "Code font")), React.createElement("tr", null, React.createElement(Td, null, "serif"), React.createElement(Td, null, theme.font.serif), React.createElement(Td, {
        style: {
            fontFamily: theme.font.serif
        }
    }, "Serif font")), React.createElement("tr", null, React.createElement(Td, null, "sans"), React.createElement(Td, null, theme.font.sans), React.createElement(Td, {
        style: {
            fontFamily: theme.font.sans
        }
    }, "Sans font")), React.createElement("tr", null, React.createElement(Td, null, "letterSpacing"), React.createElement(Td, null, theme.font.letterSpacing), React.createElement(Td, {
        style: {
            letterSpacing: theme.font.letterSpacing
        }
    }, "Letter spacing"))))));
};
export var Size = function() {
    return React.createElement(ThemeProvider, null, React.createElement(Box, {
        display: "flex",
        flexWrap: "wrap"
    }, React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement(Th, null, "Key"), React.createElement(Th, null, "Value"), React.createElement(Th, null, "Example"))), React.createElement("tbody", null, Object.entries(theme.font.size).map(function(param) {
        var _param = _slicedToArray(param, 2), key = _param[0], size = _param[1];
        return React.createElement("tr", {
            key: key
        }, React.createElement(Td, null, key), React.createElement(Td, null, size), React.createElement(Td, {
            css: {
                fontSize: size
            }
        }, "font Size ", key));
    })))));
};
export var LineHeight = function() {
    return React.createElement(ThemeProvider, null, React.createElement(Box, {
        display: "flex",
        flexWrap: "wrap"
    }, React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement(Th, null, "Key"), React.createElement(Th, null, "Value"), React.createElement(Th, null, "Example"))), React.createElement("tbody", null, Object.entries(theme.font.lineHeight).map(function(param) {
        var _param = _slicedToArray(param, 2), key = _param[0], lineHeight = _param[1];
        return React.createElement("tr", {
            key: key
        }, React.createElement(Td, {
            css: tdLineHeightStyle
        }, key), React.createElement(Td, {
            css: tdLineHeightStyle
        }, lineHeight), React.createElement(Td, {
            css: _objectSpread({
            }, tdLineHeightStyle, {
                lineHeight: lineHeight
            })
        }, "Line height ", key));
    })))));
};
export var Weight = function() {
    return React.createElement(ThemeProvider, null, React.createElement(Box, {
        display: "flex",
        flexWrap: "wrap"
    }, React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement(Th, null, "Key"), React.createElement(Th, null, "Value"), React.createElement(Th, null, "Example"))), React.createElement("tbody", null, Object.entries(theme.font.weight).map(function(param) {
        var _param = _slicedToArray(param, 2), key = _param[0], weight = _param[1];
        return React.createElement("tr", {
            key: key
        }, React.createElement(Td, null, key), React.createElement(Td, null, weight), React.createElement(Td, {
            css: {
                fontWeight: weight
            }
        }, "Weight", key));
    })))));
};
