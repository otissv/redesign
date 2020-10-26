function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
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
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "",
        ""
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
import React, { createElement, cloneElement } from 'react';
import { css as emotionCss } from 'emotion';
import { createStyleString } from '../helpers/createStyleString';
import { buildCssUtilities } from '../helpers/buildCssUtilities';
import { ignoreAttributes } from './ignoreAttributes';
import { isFunction } from '@redesign-system/theme';
function CreateComponent(_param) {
    var _tag = _param.tag, tag = _tag === void 0 ? 'div' : _tag, children = _param.children, props = _objectWithoutProperties(_param, ["tag", "children"]);
    return createElement(tag, props, Array.isArray(children) ? _toConsumableArray(children) : children);
}
/**
 Base component to build components upon.
 
 ##Installation
 Install the ui-core and its peer dependencies into your project
 `npm install @redesign-system/theme emotion react`  
 or  
 `yarn add @redesign-system/theme emotion react`  

 ## Default

 */ export var Base = function Base(props) {
    var tag = props.as, children = props.children, childrenCss = props.childrenCss, childrenProps = props.childrenProps, _className = props.className, className = _className === void 0 ? '' : _className, _css = props.css, css = _css === void 0 ? '' : _css, theme = props.theme, ___ignore = props.__ignore, __ignore = ___ignore === void 0 ? [] : ___ignore, propsRest = _objectWithoutProperties(props, [
        "as", "children", "childrenCss", "childrenProps", "className", "css", "theme", "__ignore"]);
    // merge styles into string
    var _styles = _toConsumableArray(css ? [
        createStyleString(css, props)
    ] : []).concat([
        createStyleString(buildCssUtilities(props)), 
    ]).filter(function(s) {
        return s.trim() !== '';
    }).join(';');
    var classNameStyles = emotionCss(_templateObject(), _styles);
    var classNames = "Base ".concat(classNameStyles, " ").concat(className);
    // attributes
    var ignore = _toConsumableArray(ignoreAttributes).concat(_toConsumableArray(Array.isArray(__ignore) ? __ignore : [
        __ignore
    ]));
    var attributes = Object.entries(propsRest).reduce(function(acc, param) {
        var _param = _slicedToArray(param, 2), key = _param[0], value = _param[1];
        return ignore.includes(key) || typeof value === 'undefined' ? acc : _objectSpread({
        }, acc, _defineProperty({
        }, key, value));
    }, {
    });
    // clone children props and css
    var clonedChildren = childrenProps || childrenCss ? React.Children.map(children, function(child) {
        var ref, ref1;
        if (!child) return null;
        var childProps = isFunction(childrenProps) ? childrenProps && childrenProps(props) : childrenProps;
        return child.props ? cloneElement(child, _objectSpread({
        }, child.props, childProps || {
        }, {
            css: [
                child.props.css || '',
                (childProps === null || childProps === void 0 ? void 0 : childProps.css) || '',
                childrenCss || '', 
            ],
            className: "".concat(((ref = child.props) === null || ref === void 0 ? void 0 : ref.className) || '', " ").concat(((ref1 = childrenProps) === null || ref1 === void 0 ? void 0 : ref1.className) || '')
        }), child.props.children) : child;
    }) : children;
    return React.createElement(CreateComponent, _extends({
        className: classNames,
        tag: tag,
        children: clonedChildren
    }, attributes));
};
Base.displayName = 'Base';
