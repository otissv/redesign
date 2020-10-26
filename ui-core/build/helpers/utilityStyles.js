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
import { getAlias } from './getAlias';
export var utilityStyles = function(props) {
    var initialTheme = {
    };
    var reducer = function(previous, key) {
        var propKey = getAlias(key);
        var prop = props[key];
        var utility = props.theme.utility || {
        };
        var utilityFn = utility[propKey];
        return prop && utilityFn ? _objectSpread({
        }, previous, utilityFn(prop)) : previous;
    };
    return props.theme ? Object.keys(props).reduce(reducer, initialTheme) : initialTheme;
};
