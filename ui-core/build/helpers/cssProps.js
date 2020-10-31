"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssProps = void 0;
var theme_1 = require("@redesign-system/theme");
function cssProps(css) {
    return function (props) {
        return theme_1.isFunction(css) ? css(props) : css;
    };
}
exports.cssProps = cssProps;
//# sourceMappingURL=cssProps.js.map