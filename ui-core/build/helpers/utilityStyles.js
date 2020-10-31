"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utilityStyles = void 0;
var tslib_1 = require("tslib");
var theme_1 = require("@redesign-system/theme");
exports.utilityStyles = function (props) {
    var initialTheme = {};
    var reducer = function (previous, key) {
        var propKey = theme_1.getAlias(key);
        var prop = props[key];
        var utility = props.theme.utility || {};
        var utilityFn = utility[propKey];
        return prop && utilityFn
            ? tslib_1.__assign(tslib_1.__assign({}, previous), utilityFn(prop)) : previous;
    };
    return props.theme
        ? Object.keys(props).reduce(reducer, initialTheme)
        : initialTheme;
};
//# sourceMappingURL=utilityStyles.js.map