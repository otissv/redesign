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
import merge from 'deepmerge';
import { maybe } from '../utils';
import { EASE, EASE_IN, EASE_IN_OUT, EASE_OUT, FAST, MEDIUM, SLOW, XSLOW } from './transition.types';
export function easeTransition(options) {
    var ref = options || {
    }, _delay = ref.delay, delay = _delay === void 0 ? '' : _delay, _property = ref.property, property = _property === void 0 ? 'all' : _property, _speed = ref.speed, speed = _speed === void 0 ? MEDIUM : _speed, _ease = ref.ease, ease = _ease === void 0 ? 'ease' : _ease;
    return "".concat(property, " ").concat(speed, " ").concat(ease, " ").concat(delay);
}
export function transitionTheme(theme) {
    var transition = maybe({
    })(theme === null || theme === void 0 ? void 0 : theme.transition);
    var defaults = {
        0: XSLOW,
        1: SLOW,
        2: MEDIUM,
        3: FAST,
        // ease
        easeFast: function(props) {
            return easeTransition(_objectSpread({
            }, props, {
                ease: EASE,
                speed: FAST
            }));
        },
        easeMedium: function(props) {
            return easeTransition(_objectSpread({
            }, props, {
                ease: EASE,
                speed: MEDIUM
            }));
        },
        easeSlow: function(props) {
            return easeTransition(_objectSpread({
            }, props, {
                ease: EASE,
                speed: SLOW
            }));
        },
        easeXslow: function(props) {
            return easeTransition(_objectSpread({
            }, props, {
                ease: EASE,
                speed: XSLOW
            }));
        },
        // easIn
        easeInFast: function(props) {
            return easeTransition(_objectSpread({
            }, props, {
                ease: EASE_IN,
                speed: FAST
            }));
        },
        easeInMedium: function(props) {
            return easeTransition(_objectSpread({
            }, props, {
                ease: EASE_IN,
                speed: MEDIUM
            }));
        },
        easeInSlow: function(props) {
            return easeTransition(_objectSpread({
            }, props, {
                ease: EASE_IN,
                speed: SLOW
            }));
        },
        easeInXslow: function(props) {
            return easeTransition(_objectSpread({
            }, props, {
                ease: EASE_IN,
                speed: XSLOW
            }));
        },
        // easeInOut
        easeInOutFast: function(props) {
            return easeTransition(_objectSpread({
            }, props, {
                ease: EASE_IN_OUT,
                speed: FAST
            }));
        },
        easeInOutMedium: function(props) {
            return easeTransition(_objectSpread({
            }, props, {
                ease: EASE_IN_OUT,
                speed: MEDIUM
            }));
        },
        easeInOutSlow: function(props) {
            return easeTransition(_objectSpread({
            }, props, {
                ease: EASE_IN_OUT,
                speed: SLOW
            }));
        },
        easeInOutXslow: function(props) {
            return easeTransition(_objectSpread({
            }, props, {
                ease: EASE_IN_OUT,
                speed: XSLOW
            }));
        },
        // easeOut
        easeOutFast: function(props) {
            return easeTransition(_objectSpread({
            }, props, {
                ease: EASE_OUT,
                speed: FAST
            }));
        },
        easeOutMedium: function(props) {
            return easeTransition(_objectSpread({
            }, props, {
                ease: EASE_OUT,
                speed: MEDIUM
            }));
        },
        easeOutSlow: function(props) {
            return easeTransition(_objectSpread({
            }, props, {
                ease: EASE_OUT,
                speed: SLOW
            }));
        },
        easeOutXslow: function(props) {
            return easeTransition(_objectSpread({
            }, props, {
                ease: EASE_OUT,
                speed: XSLOW
            }));
        }
    };
    return merge(defaults, transition);
}
