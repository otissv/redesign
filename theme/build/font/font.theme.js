import { merge } from 'rambda';
export function fontTheme(theme) {
    var color = (theme === null || theme === void 0 ? void 0 : theme.color) || {
    };
    var font = (theme === null || theme === void 0 ? void 0 : theme.font) || {
    };
    var base = font.base || 16// font base in pixels
    ;
    var defaults = {
        base: base,
        color: color.text || '',
        colorInvert: color.textInvert || '',
        smooth: "\n      text-rendering: optimizeLegibility !important;\n      -webkit-font-smoothing: antialiased;0\n      -moz-osx-font-smoothing: grayscale;\n      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n    ",
        // family
        code: "'Source Code Pro', 'Consolas', 'Inconsolata', 'Monaco', monospace",
        serif: "'Merriweather','Georgia',serif",
        sans: 'system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif',
        size: {
            1: "".concat(12 / base, "rem"),
            2: "".concat(14 / base, "rem"),
            3: "".concat(16 / base, "rem"),
            4: "".concat(18 / base, "rem"),
            5: "".concat(20 / base, "rem"),
            6: "".concat(24 / base, "rem"),
            7: "".concat(30 / base, "rem"),
            8: "".concat(36 / base, "rem"),
            9: "".concat(48 / base, "rem"),
            10: "".concat(60 / base, "rem"),
            11: "".concat(72 / base, "rem"),
            12: "".concat(84 / base, "rem"),
            default: "1rem",
            base: "".concat(base, "px")
        },
        lineHeight: {
            1: 1,
            2: 1.5,
            3: 1.75,
            4: 2,
            5: 2.5,
            default: 1.75
        },
        letterSpacing: '0px',
        weight: {
            1: 400,
            2: 500,
            3: 600,
            4: 700,
            5: 800,
            6: 900,
            default: 400
        }
    };
    return merge(font)(defaults);
}
