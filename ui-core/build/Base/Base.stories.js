"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Children_Props_Function = exports.Children_Props_Object = exports.Children_CSS_Function = exports.Children_CSS_Object = exports.Children_CSS_String = exports.Animate = exports.Default = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Base_1 = require("./Base");
var theme_1 = require("@redesign-system/theme");
var ThemeContext_1 = require("../ThemeContext");
exports.default = {
    title: 'Core/Base',
    component: Base_1.Base,
};
var theme = theme_1.createTheme();
exports.Default = function () { return (react_1.default.createElement(ThemeContext_1.ThemeProvider, null,
    react_1.default.createElement(Base_1.Base, { w: "100px", h: "100px", theme: theme, color: "white" }, "Base"))); };
exports.Animate = function () {
    var _a = react_1.default.useState(''), animate = _a[0], setAnimate = _a[1];
    var animations = {
        fadeIn: {
            opacity: {
                from: 0.2,
                to: 1,
                duration: 2000,
            },
        },
        moveLeft: {
            transform: {
                from: 'translateX(300px)',
                to: 'translateX(0px)',
                bounce: 1,
            },
        },
        moveRight: {
            transform: {
                from: 'translateX(0px)',
                to: 'translateX(300px)',
                bounce: 1,
            },
        },
    };
    return (react_1.default.createElement(ThemeContext_1.ThemeProvider, null,
        react_1.default.createElement(Base_1.Base, { animate: animate, animations: animations, onClick: function () {
                return setAnimate(animate !== 'moveRight' ? 'moveRight' : 'moveLeft');
            }, w: "100px", h: "100px", theme: theme, color: "white", bg: "grey" }, "Click Me")));
};
exports.Children_CSS_String = function () { return (react_1.default.createElement(ThemeContext_1.ThemeProvider, null,
    react_1.default.createElement(Base_1.Base, { theme: theme, childrenCss: "\n      width: 30px;\n      height: 30px;\n      margin: 10px;\n      background: red;\n    ", css: "padding: 10px; border: 1px solid red" },
        react_1.default.createElement(Base_1.Base, { theme: theme }),
        react_1.default.createElement(Base_1.Base, { theme: theme }),
        react_1.default.createElement(Base_1.Base, { theme: theme })))); };
exports.Children_CSS_Object = function () { return (react_1.default.createElement(ThemeContext_1.ThemeProvider, null,
    react_1.default.createElement(Base_1.Base, { theme: theme, childrenCss: {
            width: '30px',
            height: '30px',
            margin: '10px',
            background: 'red',
        }, css: "padding: 10px; border: 1px solid red" },
        react_1.default.createElement(Base_1.Base, { theme: theme }),
        react_1.default.createElement(Base_1.Base, { theme: theme }),
        react_1.default.createElement(Base_1.Base, { theme: theme })))); };
exports.Children_CSS_Function = function () { return (react_1.default.createElement(ThemeContext_1.ThemeProvider, null,
    react_1.default.createElement(Base_1.Base, { theme: theme, childrenCss: function (_a) {
            var theme = _a.theme;
            return {
                width: '30px',
                height: '30px',
                margin: '10px',
                background: theme.color.success,
            };
        }, css: "padding: 10px; border: 1px solid red" },
        react_1.default.createElement(Base_1.Base, { theme: theme }),
        react_1.default.createElement(Base_1.Base, { theme: theme }),
        react_1.default.createElement(Base_1.Base, { theme: theme })))); };
exports.Children_Props_Object = function () { return (react_1.default.createElement(ThemeContext_1.ThemeProvider, null,
    react_1.default.createElement(Base_1.Base, { theme: theme, childrenProps: {
            className: 'my-class',
            css: {
                width: '100px',
                height: '100px',
                margin: '10px',
                border: '1px solid blue',
            },
        } },
        react_1.default.createElement(Base_1.Base, { theme: theme }),
        react_1.default.createElement(Base_1.Base, { theme: theme }),
        react_1.default.createElement(Base_1.Base, { theme: theme })))); };
exports.Children_Props_Function = function () { return (react_1.default.createElement(ThemeContext_1.ThemeProvider, null,
    react_1.default.createElement(Base_1.Base, { theme: theme, childrenProps: function (_a) {
            var _b;
            var theme = _a.theme;
            return {
                className: 'my-class',
                css: {
                    width: '30px',
                    height: '30px',
                    margin: '10px',
                    border: (_b = theme === null || theme === void 0 ? void 0 : theme.border) === null || _b === void 0 ? void 0 : _b.thin,
                },
            };
        }, css: "padding: 10px; border: 1px solid red" },
        react_1.default.createElement(Base_1.Base, { theme: theme }),
        react_1.default.createElement(Base_1.Base, { theme: theme }),
        react_1.default.createElement(Base_1.Base, { theme: theme })))); };
//# sourceMappingURL=Base.stories.js.map