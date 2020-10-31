"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTheme = void 0;
var tslib_1 = require("tslib");
var border_1 = require("../border");
var color_1 = require("../color");
var elevate_1 = require("../elevate");
var font_1 = require("../font");
var radius_1 = require("../radius");
var scrollbar_1 = require("../scrollbar");
var transition_1 = require("../transition");
var unit_1 = require("../unit");
var utility_1 = require("../utility");
var global_1 = require("../global");
var mediaQueries_1 = require("../mediaQueries");
function createTheme(partialTheme) {
    if (partialTheme === void 0) { partialTheme = {}; }
    var _color = color_1.colorTheme(partialTheme);
    var _unit = unit_1.unitTheme(partialTheme);
    var defaultTheme = tslib_1.__assign(tslib_1.__assign({}, partialTheme), { color: _color, unit: _unit });
    var baseTheme = tslib_1.__assign(tslib_1.__assign({}, defaultTheme), { border: border_1.borderTheme(defaultTheme), color: _color, elevate: elevate_1.elevateTheme(defaultTheme), font: font_1.fontTheme(defaultTheme), mediaQueries: mediaQueries_1.mediaQueriesTheme(defaultTheme), radius: radius_1.radiusTheme(defaultTheme), scrollbar: scrollbar_1.scrollbarTheme(defaultTheme), transition: transition_1.transitionTheme(defaultTheme) });
    return tslib_1.__assign(tslib_1.__assign({}, baseTheme), { global: global_1.globalTheme(baseTheme), utility: utility_1.utilityTheme(baseTheme) });
}
exports.createTheme = createTheme;
//# sourceMappingURL=theme.js.map