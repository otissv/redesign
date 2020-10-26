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
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
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
import React from 'react';
import { createTheme } from '@redesign-system/theme';
import { Base } from '../../Base';
export var theme = createTheme();
export function Box(props) {
    console.log(theme);
    return React.createElement(Base, _extends({
        theme: theme
    }, props));
}
export function Td(_param) {
    var css = _param.css, props = _objectWithoutProperties(_param, ["css"]);
    var cssStyles = _objectSpread({
        borderTop: "1px solid #ececec",
        padding: '20px 10px 10px 10px',
        verticalAlign: 'top'
    }, css);
    return React.createElement(Base, _extends({
        as: "td",
        theme: theme,
        css: cssStyles
    }, props));
}
export function Th(_param) {
    var css = _param.css, props = _objectWithoutProperties(_param, ["css"]);
    var cssStyles = _objectSpread({
        textAlign: 'left',
        paddingLeft: '10px'
    }, css);
    return React.createElement(Base, _extends({
        as: "th",
        theme: theme,
        css: cssStyles
    }, props));
}
export function Swatch(_param) {
    var css = _param.css, props = _objectWithoutProperties(_param, ["css"]);
    var cssStyles = _objectSpread({
    }, css, {
        display: 'table-cell',
        verticalAlign: 'bottom',
        width: '100px',
        height: '100px',
        padding: '5px'
    });
    return React.createElement(Box, _extends({
        css: cssStyles
    }, props));
}
