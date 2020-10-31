"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStyleString = exports.createStringFromObject = void 0;
var tslib_1 = require("tslib");
var memoize_1 = require("./memoize");
var unitless_1 = require("./unitless");
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var cursor;
var shouldWarnAboutInterpolatingClassNameFromCss = true;
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function (property) { return property.charCodeAt(1) === 45; };
var isProcessableValue = function (value) {
    return value != null && typeof value !== 'boolean';
};
var processStyleName = memoize_1.memoize(function (styleName) {
    return isCustomProperty(styleName)
        ? styleName
        : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});
var processStyleValue = function (key, value) {
    switch (key) {
        case 'animation':
        case 'animationName': {
            if (typeof value === 'string') {
                return value.replace(animationRegex, function (_match, p1, p2) {
                    cursor = {
                        name: p1,
                        styles: p2,
                        next: cursor,
                    };
                    return p1;
                });
            }
        }
    }
    if (unitless_1.unitlessKeys[key] !== 1 &&
        !isCustomProperty(key) &&
        typeof value === 'number' &&
        value !== 0) {
        return value + 'px';
    }
    return value;
};
function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
    if (interpolation == null) {
        return '';
    }
    if (interpolation.__emotion_styles !== undefined) {
        if (process.env.NODE_ENV !== 'production' &&
            interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }
        return interpolation;
    }
    switch (typeof interpolation) {
        case 'boolean': {
            return '';
        }
        case 'object': {
            if (interpolation.anim === 1) {
                cursor = {
                    name: interpolation.name,
                    styles: interpolation.styles,
                    next: cursor,
                };
                return interpolation.name;
            }
            if (interpolation.styles !== undefined) {
                var next = interpolation.next;
                if (next !== undefined) {
                    // not the most efficient thing ever but this is a pretty rare case
                    // and there will be very few iterations of this generally
                    while (next !== undefined) {
                        cursor = {
                            name: next.name,
                            styles: next.styles,
                            next: cursor,
                        };
                        next = next.next;
                    }
                }
                var styles = interpolation.styles + ";";
                if (process.env.NODE_ENV !== 'production' &&
                    interpolation.map !== undefined) {
                    styles += interpolation.map;
                }
                return styles;
            }
            return createStringFromObject(mergedProps, registered, interpolation);
        }
        case 'function': {
            if (mergedProps !== undefined) {
                var previousCursor = cursor;
                var result = interpolation(mergedProps);
                cursor = previousCursor;
                return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
            }
            else if (process.env.NODE_ENV !== 'production') {
                console.error('Functions that are interpolated in css calls will be stringified.\n' +
                    'If you want to have a css call based on props, create a function that returns a css call like this\n' +
                    'let dynamicStyle = (props) => css`color: ${props.color}`\n' +
                    'It can be called directly with props or interpolated in a styled call like this\n' +
                    "let SomeComponent = styled('div')`${dynamicStyle}`");
            }
            break;
        }
        case 'string':
            if (process.env.NODE_ENV !== 'production') {
                var matched_1 = [];
                var replaced = interpolation.replace(animationRegex, function (_match, _p1, p2) {
                    var fakeVarName = "animation" + matched_1.length;
                    matched_1.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
                    return "${" + fakeVarName + "}";
                });
                if (matched_1.length) {
                    console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' +
                        'Instead of doing this:\n\n' +
                        tslib_1.__spreadArrays(matched_1, ["`" + replaced + "`"]).join('\n') +
                        '\n\nYou should wrap it with `css` like this:\n\n' +
                        ("css`" + replaced + "`"));
                }
            }
            break;
    }
    // finalize string values (regular strings and functions interpolated into css calls)
    if (registered == null) {
        return interpolation;
    }
    var cached = registered[interpolation];
    if (process.env.NODE_ENV !== 'production' &&
        couldBeSelectorInterpolation &&
        shouldWarnAboutInterpolatingClassNameFromCss &&
        cached !== undefined) {
        console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' +
            'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
        shouldWarnAboutInterpolatingClassNameFromCss = false;
    }
    return cached !== undefined && !couldBeSelectorInterpolation
        ? cached
        : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
    var string = '';
    if (Array.isArray(obj)) {
        for (var i = 0; i < obj.length; i++) {
            string += handleInterpolation(mergedProps, registered, obj[i], false);
        }
    }
    else {
        for (var key in obj) {
            var value = obj[key];
            if (typeof value !== 'object') {
                if (registered != null && registered[value] !== undefined) {
                    string += key + "{" + registered[value] + "}";
                }
                else if (isProcessableValue(value)) {
                    string += processStyleName(key) + ":" + processStyleValue(key, value) + ";";
                }
            }
            else {
                if (key === 'NO_COMPONENT_SELECTOR' &&
                    process.env.NODE_ENV !== 'production') {
                    throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
                }
                if (Array.isArray(value) &&
                    typeof value[0] === 'string' &&
                    (registered == null || registered[value[0]] === undefined)) {
                    for (var i = 0; i < value.length; i++) {
                        if (isProcessableValue(value[i])) {
                            string += processStyleName(key) + ":" + processStyleValue(key, value[i]) + ";";
                        }
                    }
                }
                else {
                    var interpolated = handleInterpolation(mergedProps, registered, value, false);
                    switch (key) {
                        case 'animation':
                        case 'animationName': {
                            string += processStyleName(key) + ":" + interpolated + ";";
                            break;
                        }
                        default: {
                            if (process.env.NODE_ENV !== 'production' &&
                                key === 'undefined') {
                                console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                            }
                            string += key + "{" + interpolated + "}";
                        }
                    }
                }
            }
        }
    }
    return string;
}
exports.createStringFromObject = createStringFromObject;
function buildStyles(styles, props) {
    if (props === void 0) { props = {}; }
    var registered = {};
    switch (typeof styles) {
        case 'function':
            // transform function to string
            var result = styles(props);
            if (typeof result === 'string') {
                return result;
            }
            else {
                return createStringFromObject({}, registered, result);
            }
        case 'object':
            // transform object to string
            return createStringFromObject({}, registered, styles);
        default:
            return styles;
    }
}
function createStyleString(styles, props) {
    if (props === void 0) { props = {}; }
    return Array.isArray(styles)
        ? styles.reduce(function (acc, style) {
            return acc + " " + createStyleString(style, props);
        }, '')
        : buildStyles(styles, props);
}
exports.createStyleString = createStyleString;
//# sourceMappingURL=createStyleString.js.map