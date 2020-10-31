"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeProvider = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var theme_1 = require("@redesign-system/theme");
var GlobalStyles_1 = require("../GlobalStyles");
var ThemeContext_1 = require("./ThemeContext");
exports.ThemeProvider = function ThemeProvider(_a) {
    var children = _a.children, hostTheme = _a.theme;
    var theme = theme_1.createTheme(hostTheme);
    var _b = react_1.useState(theme), themeContext = _b[0], setTheme = _b[1];
    var context = react_1.useMemo(function () { return ({ theme: themeContext, setTheme: setTheme }); }, [
        themeContext,
        setTheme,
    ]);
    return (react_1.default.createElement(ThemeContext_1.ThemeContext.Provider, { value: context },
        react_1.default.createElement(GlobalStyles_1.GlobalStyles, { theme: themeContext }),
        children));
};
//# sourceMappingURL=ThemeProvider.js.map