"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Swatch = exports.Th = exports.Td = exports.Box = exports.theme = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("@redesign-system/theme");
var Base_1 = require("../../Base");
exports.theme = theme_1.createTheme();
function Box(props) {
    return react_1.default.createElement(Base_1.Base, tslib_1.__assign({ theme: exports.theme }, props));
}
exports.Box = Box;
function Td(_a) {
    var css = _a.css, props = tslib_1.__rest(_a, ["css"]);
    var cssStyles = tslib_1.__assign({ borderTop: "1px solid #ececec", padding: '20px 10px 10px 10px', verticalAlign: 'top' }, css);
    return react_1.default.createElement(Base_1.Base, tslib_1.__assign({ as: "td", theme: exports.theme, css: cssStyles }, props));
}
exports.Td = Td;
function Th(_a) {
    var css = _a.css, props = tslib_1.__rest(_a, ["css"]);
    var cssStyles = tslib_1.__assign({ textAlign: 'left', paddingLeft: '10px' }, css);
    return react_1.default.createElement(Base_1.Base, tslib_1.__assign({ as: "th", theme: exports.theme, css: cssStyles }, props));
}
exports.Th = Th;
function Swatch(_a) {
    var css = _a.css, props = tslib_1.__rest(_a, ["css"]);
    var cssStyles = tslib_1.__assign(tslib_1.__assign({}, css), { display: 'table-cell', verticalAlign: 'bottom', width: '100px', height: '100px', padding: '5px' });
    return react_1.default.createElement(Box, tslib_1.__assign({ css: cssStyles }, props));
}
exports.Swatch = Swatch;
//# sourceMappingURL=story.components.js.map