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
import React, { useMemo, useState } from 'react';
import { createTheme } from '@redesign-system/theme';
import { GlobalStyles } from '../GlobalStyles';
import { ThemeContext } from './ThemeContext';
import { Normalize } from '../Normalize';
export var ThemeProvider = function ThemeProvider(param) {
    var children = param.children, hostTheme = param.theme;
    var theme = createTheme(hostTheme);
    var ref = _slicedToArray(useState(theme), 2), themeContext = ref[0], setTheme = ref[1];
    var context = useMemo(function() {
        return {
            theme: themeContext,
            setTheme: setTheme
        };
    }, [
        themeContext,
        setTheme, 
    ]);
    return React.createElement(ThemeContext.Provider, {
        value: context
    }, React.createElement(Normalize, null), React.createElement(GlobalStyles, {
        theme: themeContext
    }), children);
};
