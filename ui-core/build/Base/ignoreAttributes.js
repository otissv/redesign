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
import { utilityTheme } from '@redesign-system/theme';
export var ignoreAttributes = _toConsumableArray(Object.keys(utilityTheme({
}))).concat([
    'childrenCss',
    'childrenProps',
    'css',
    'theme',
    'as',
    'stacked',
    '__ignore',
    'pill',
    'invalid',
    'stretch',
    'hover',
    'condensed',
    'dispatch',
    'appearance',
    'element',
    'smallAppBar',
    'flip',
    'justify',
    'opened',
    'columns',
    'cover',
    'parallax',
    'repeat',
    'active', 
]);
