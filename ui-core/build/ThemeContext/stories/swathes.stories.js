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
import { theme, Box, Swatch } from './story.components';
import { ThemeProvider } from '../ThemeProvider';
export default {
    title: 'Theme/Swatches'
};
export var Swatches = function() {
    return React.createElement(ThemeProvider, null, React.createElement(Box, {
        display: "flex",
        flexWrap: "wrap"
    }, Object.entries(theme.color).map(function(param) {
        var _param = _slicedToArray(param, 2), key = _param[0], color = _param[1];
        return React.createElement(Box, {
            key: key,
            mx: 3,
            mb: 8,
            textAlign: "center",
            alignItems: "center"
        }, key, React.createElement(Swatch, {
            css: {
                background: color
            }
        }), color);
    })));
};
