"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = exports.ThemeContext = void 0;
var react_1 = require("react");
var theme_1 = require("@redesign-system/theme");
var initialState = {
    theme: theme_1.themeDefaults,
    setTheme: theme_1.noop,
};
exports.ThemeContext = react_1.createContext(initialState);
function useTheme() {
    return react_1.useContext(exports.ThemeContext);
}
exports.useTheme = useTheme;
//# sourceMappingURL=ThemeContext.js.map