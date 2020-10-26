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
import { iconTheme, iconAppearanceTheme } from './icon.theme';
import { useTheme } from '../ThemeContext';
import { Base } from '../Base';
var Icon = function Icon(_param) {
    var _as = _param.as, as = _as === void 0 ? 'svg' : _as, children = _param.children, _className = _param.className, className = _className === void 0 ? '' : _className, _height = _param.height, height = _height === void 0 ? '24px' : _height, _css = _param.css, css = _css === void 0 ? '' : _css, title = _param.title, _viewBox = _param.viewBox, viewBox = _viewBox === void 0 ? '0 0 24 24' : _viewBox, _width = _param.width, width = _width === void 0 ? '24px' : _width, propsRest = _objectWithoutProperties(_param, ["as", "children", "className", "height", "css", "title", "viewBox", "width"]);
    var ref = useTheme(), theme = ref.theme;
    var classNames = "Icon ".concat(className);
    var cssList = [
        iconTheme,
        iconAppearanceTheme,
        css
    ];
    var props = _objectSpread({
        height: height,
        viewBox: viewBox,
        width: width
    }, propsRest);
    return React.createElement(Base, _extends({
        as: as,
        className: classNames,
        theme: theme,
        css: cssList,
        xmlns: "http://www.w3.org/2000/svg"
    }, props), title ? React.createElement("title", null, title) : null, children);
};
export { Icon };
Icon.displayName = 'Icon';
