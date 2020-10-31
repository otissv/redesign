"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fontTheme = void 0;
var rambda_1 = require("rambda");
function fontTheme(theme) {
    var color = (theme === null || theme === void 0 ? void 0 : theme.color) || {};
    var font = (theme === null || theme === void 0 ? void 0 : theme.font) || {};
    var base = font.base || 16; // font base in pixels
    var defaults = {
        base: base,
        color: color.text || '',
        colorInvert: color.textInvert || '',
        smooth: "\n      text-rendering: optimizeLegibility !important;\n      -webkit-font-smoothing: antialiased;0\n      -moz-osx-font-smoothing: grayscale;\n      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n    ",
        // family
        family: {
            mono: "'Source Code Pro', 'Consolas', 'Inconsolata', 'Monaco', monospace",
            serif: "'Merriweather','Georgia',serif",
            sans: 'system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif',
        },
        size: {
            0: '0rem',
            1: '0.512.rem',
            2: '0.64rem',
            3: '0.8rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.563rem',
            7: '1.953rem',
            8: '2.441rem',
            9: '3.052rem',
            10: '3.815rem',
            11: '4.768rem',
            12: '5.96rem',
            13: '7.451rem',
            14: '7.451rem',
            15: '9.313rem',
            16: '11.642rem',
            default: "1rem",
            base: base + "px",
        },
        lineHeight: {
            0: 0,
            1: 1,
            2: 1.5,
            3: 1.75,
            4: 2,
            5: 2.5,
            default: 1.5,
        },
        letterSpacing: '0px',
        weight: {
            1: 400,
            2: 500,
            3: 600,
            4: 700,
            5: 800,
            6: 900,
            default: 400,
        },
    };
    return rambda_1.merge(font)(defaults);
}
exports.fontTheme = fontTheme;
//# sourceMappingURL=font.theme.js.map