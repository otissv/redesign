function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
}
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    return obj && obj.constructor === Symbol ? "symbol" : typeof obj;
};
import { memoize } from './memoize';
import { unitlessKeys as unitless } from './unitless';
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var cursor;
var shouldWarnAboutInterpolatingClassNameFromCss = true;
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function(property) {
    return property.charCodeAt(1) === 45;
};
var isProcessableValue = function(value) {
    return value != null && typeof value !== 'boolean';
};
var processStyleName = memoize(function(styleName) {
    return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});
var processStyleValue = function(key, value) {
    switch(key){
        case 'animation':
        case 'animationName':
            {
                if (typeof value === 'string') {
                    return value.replace(animationRegex, function(_match, p1, p2) {
                        cursor = {
                            name: p1,
                            styles: p2,
                            next: cursor
                        };
                        return p1;
                    });
                }
            }
    }
    if (unitless[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
        return value + 'px';
    }
    return value;
};
function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
    if (interpolation == null) {
        return '';
    }
    if (interpolation.__emotion_styles !== undefined) {
        if (process.env.NODE_ENV !== 'production' && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }
        return interpolation;
    }
    switch(_typeof(interpolation)){
        case 'boolean':
            {
                return '';
            }
        case 'object':
            {
                if (interpolation.anim === 1) {
                    cursor = {
                        name: interpolation.name,
                        styles: interpolation.styles,
                        next: cursor
                    };
                    return interpolation.name;
                }
                if (interpolation.styles !== undefined) {
                    var next = interpolation.next;
                    if (next !== undefined) {
                        // not the most efficient thing ever but this is a pretty rare case
                        // and there will be very few iterations of this generally
                        while(next !== undefined){
                            cursor = {
                                name: next.name,
                                styles: next.styles,
                                next: cursor
                            };
                            next = next.next;
                        }
                    }
                    var styles = "".concat(interpolation.styles, ";");
                    if (process.env.NODE_ENV !== 'production' && interpolation.map !== undefined) {
                        styles += interpolation.map;
                    }
                    return styles;
                }
                return createStringFromObject(mergedProps, registered, interpolation);
            }
        case 'function':
            {
                if (mergedProps !== undefined) {
                    var previousCursor = cursor;
                    var result = interpolation(mergedProps);
                    cursor = previousCursor;
                    return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
                } else if (process.env.NODE_ENV !== 'production') {
                    console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
                }
                break;
            }
        case 'string':
            if (process.env.NODE_ENV !== 'production') {
                var matched = [];
                var replaced = interpolation.replace(animationRegex, function(_match, _p1, p2) {
                    var fakeVarName = "animation".concat(matched.length);
                    matched.push("const ".concat(fakeVarName, " = keyframes`").concat(p2.replace(/^@keyframes animation-\w+/, ''), "`"));
                    return "${".concat(fakeVarName, "}");
                });
                if (matched.length) {
                    console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + _toConsumableArray(matched).concat([
                        "`".concat(replaced, "`")
                    ]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + "css`".concat(replaced, "`"));
                }
            }
            break;
    }
    // finalize string values (regular strings and functions interpolated into css calls)
    if (registered == null) {
        return interpolation;
    }
    var cached = registered[interpolation];
    if (process.env.NODE_ENV !== 'production' && couldBeSelectorInterpolation && shouldWarnAboutInterpolatingClassNameFromCss && cached !== undefined) {
        console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' + 'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
        shouldWarnAboutInterpolatingClassNameFromCss = false;
    }
    return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}
export function createStringFromObject(mergedProps, registered, obj) {
    var string = '';
    if (Array.isArray(obj)) {
        for(var i = 0; i < obj.length; i++){
            string += handleInterpolation(mergedProps, registered, obj[i], false);
        }
    } else {
        for(var key in obj){
            var value = obj[key];
            if (typeof value !== 'object') {
                if (registered != null && registered[value] !== undefined) {
                    string += "".concat(key, "{").concat(registered[value], "}");
                } else if (isProcessableValue(value)) {
                    string += "".concat(processStyleName(key), ":").concat(processStyleValue(key, value), ";");
                }
            } else {
                if (key === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production') {
                    throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
                }
                if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
                    for(var i = 0; i < value.length; i++){
                        if (isProcessableValue(value[i])) {
                            string += "".concat(processStyleName(key), ":").concat(processStyleValue(key, value[i]), ";");
                        }
                    }
                } else {
                    var interpolated = handleInterpolation(mergedProps, registered, value, false);
                    switch(key){
                        case 'animation':
                        case 'animationName':
                            {
                                string += "".concat(processStyleName(key), ":").concat(interpolated, ";");
                                break;
                            }
                        default:
                            {
                                if (process.env.NODE_ENV !== 'production' && key === 'undefined') {
                                    console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                                }
                                string += "".concat(key, "{").concat(interpolated, "}");
                            }
                    }
                }
            }
        }
    }
    return string;
}
function buildStyles(styles, param) {
    var props = param === void 0 ? {
    } : param;
    var registered = {
    };
    switch(_typeof(styles)){
        case 'function':
            // transform function to string
            var result = styles(props);
            if (typeof result === 'string') {
                return result;
            } else {
                return createStringFromObject({
                }, registered, result);
            }
        case 'object':
            // transform object to string
            return createStringFromObject({
            }, registered, styles);
        default:
            return styles;
    }
}
export function createStyleString(styles, param) {
    var props = param === void 0 ? {
    } : param;
    return Array.isArray(styles) ? styles.reduce(function(acc, style) {
        return "".concat(acc, " ").concat(createStyleString(style, props));
    }, '') : buildStyles(styles, props);
}
