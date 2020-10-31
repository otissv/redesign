"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var icon_theme_1 = require("./icon.theme");
var ThemeContext_1 = require("../ThemeContext");
var Base_1 = require("../Base");
exports.Icon = function Icon(_a) {
    var _b = _a.as, as = _b === void 0 ? 'svg' : _b, children = _a.children, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.height, height = _d === void 0 ? '24px' : _d, _e = _a.css, css = _e === void 0 ? '' : _e, title = _a.title, _f = _a.viewBox, viewBox = _f === void 0 ? '0 0 24 24' : _f, _g = _a.width, width = _g === void 0 ? '24px' : _g, propsRest = tslib_1.__rest(_a, ["as", "children", "className", "height", "css", "title", "viewBox", "width"]);
    var theme = ThemeContext_1.useTheme().theme;
    var classNames = "Icon " + className;
    var cssList = [icon_theme_1.iconTheme, icon_theme_1.iconAppearanceTheme, css];
    var props = tslib_1.__assign({ height: height,
        viewBox: viewBox,
        width: width }, propsRest);
    return (react_1.default.createElement(Base_1.Base, tslib_1.__assign({ as: as, className: classNames, theme: theme, css: cssList, xmlns: "http://www.w3.org/2000/svg" }, props),
        title ? react_1.default.createElement("title", null, title) : null,
        children));
};
exports.Icon.displayName = 'Icon';
//# sourceMappingURL=Icon.js.map