var _typeof = function(obj) {
    return obj && obj.constructor === Symbol ? "symbol" : typeof obj;
};
import { either } from '../either/either';
export function maybe(param) {
    var empty = param === void 0 ? null : param;
    return function(value) {
        return either(value, empty)(value);
    };
}
function maybeType(type) {
    return function(value) {
        return Array.isArray(value) ? value !== null && value !== void 0 ? value : null : _typeof(value) === type ? value : null;
    };
}
export function maybeString(value) {
    return maybe('')(maybeType('string')(value));
}
export function maybeNumber(value) {
    return maybe(0)(maybeType('number')(value));
}
export function maybeBoolean(value) {
    return maybe(false)(maybeType('boolean')(value));
}
export function maybeArray(value) {
    return maybe([])(function() {
        return Array.isArray(value) && value;
    });
}
