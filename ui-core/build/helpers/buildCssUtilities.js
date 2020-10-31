"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCssUtilities = void 0;
var utilityStyles_1 = require("./utilityStyles");
function buildCssUtilities(props) {
    return props.match ? '' : utilityStyles_1.utilityStyles(props);
}
exports.buildCssUtilities = buildCssUtilities;
//# sourceMappingURL=buildCssUtilities.js.map