"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isComponentDisabled = void 0;
var theme_1 = require("@redesign-system/theme");
function isComponentDisabled(_a) {
    var appearance = _a.appearance, disabled = _a.disabled;
    return disabled ||
        appearance === theme_1.DISABLED ||
        appearance === theme_1.PRIMARY_DISABLED ||
        appearance === theme_1.SECONDARY_DISABLED ||
        appearance === theme_1.TERTIARY_DISABLED
        ? true
        : undefined;
}
exports.isComponentDisabled = isComponentDisabled;
//# sourceMappingURL=isComponentDisabled.js.map