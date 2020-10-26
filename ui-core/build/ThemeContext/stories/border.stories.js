function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
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
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
import React from 'react';
import { theme, Box, Td, Th } from './story.components';
import { ThemeProvider } from '../ThemeProvider';
export default {
    title: 'Theme/Border'
};
function extractColor(str) {
    var ref;
    var value = (ref = str.match(/(?:^|[ ])#([a-zA-Z0-9]+)|(?:^|[ ])hsla(.*)/)) === null || ref === void 0 ? void 0 : ref[0];
    return value ? value.trim() : value;
}
export var Border = function() {
    return React.createElement(ThemeProvider, null, React.createElement(Box, {
        display: "flex",
        flexWrap: "wrap"
    }, React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement(Th, null, "Key"), React.createElement(Th, null, "Value"), React.createElement(Th, null, "Example"))), React.createElement("tbody", null, Object.entries(theme.border).map(function(param) {
        var _param = _slicedToArray(param, 2), key = _param[0], value = _param[1];
        var borderColor = extractColor(value);
        var borderStyle = value.split(' ')[1] || 'solid';
        return React.createElement("tr", {
            key: key
        }, React.createElement(Td, null, key), React.createElement(Td, null, value), React.createElement(Td, null, React.createElement("div", {
            style: {
                height: '100px',
                width: '100px',
                border: "1px ".concat(borderStyle, " ").concat(borderColor)
            }
        })));
    })))));
};
