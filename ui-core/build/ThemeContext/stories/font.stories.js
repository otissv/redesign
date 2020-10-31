"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weight = exports.LineHeight = exports.Size = exports.Font = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var story_components_1 = require("./story.components");
var ThemeProvider_1 = require("../ThemeProvider");
var tdLineHeightStyle = {
    paddingTop: 0,
    paddingBottom: 0,
};
exports.default = {
    title: 'Theme/Font',
};
exports.Font = function () {
    return (react_1.default.createElement(ThemeProvider_1.ThemeProvider, null,
        react_1.default.createElement(story_components_1.Box, { display: "flex", flexWrap: "wrap" },
            react_1.default.createElement("table", null,
                react_1.default.createElement("thead", null,
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement(story_components_1.Th, null, "Key"),
                        react_1.default.createElement(story_components_1.Th, null, "Value"),
                        react_1.default.createElement(story_components_1.Th, null, "Example"))),
                react_1.default.createElement("tbody", null,
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement(story_components_1.Td, null, "base"),
                        react_1.default.createElement(story_components_1.Td, null, story_components_1.theme.font.base),
                        react_1.default.createElement(story_components_1.Td, { style: { fontSize: story_components_1.theme.font.base } }, "Base font size")),
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement(story_components_1.Td, null, "color"),
                        react_1.default.createElement(story_components_1.Td, null, story_components_1.theme.font.color),
                        react_1.default.createElement(story_components_1.Td, { style: { color: story_components_1.theme.font.color } }, "Text color")),
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement(story_components_1.Td, null, "colorInvert"),
                        react_1.default.createElement(story_components_1.Td, null, story_components_1.theme.font.colorInvert),
                        react_1.default.createElement(story_components_1.Td, { style: { color: story_components_1.theme.font.colorInvert } }, "Text color inverted")),
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement(story_components_1.Td, null, "smooth"),
                        react_1.default.createElement(story_components_1.Td, null, story_components_1.theme.font.smooth),
                        react_1.default.createElement(story_components_1.Td, { style: { fontFamily: story_components_1.theme.font.smooth } }, "Smooth font")),
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement(story_components_1.Td, null, "code"),
                        react_1.default.createElement(story_components_1.Td, null, story_components_1.theme.font.code),
                        react_1.default.createElement(story_components_1.Td, { style: { fontFamily: story_components_1.theme.font.code } }, "Code font")),
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement(story_components_1.Td, null, "serif"),
                        react_1.default.createElement(story_components_1.Td, null, story_components_1.theme.font.serif),
                        react_1.default.createElement(story_components_1.Td, { style: { fontFamily: story_components_1.theme.font.serif } }, "Serif font")),
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement(story_components_1.Td, null, "sans"),
                        react_1.default.createElement(story_components_1.Td, null, story_components_1.theme.font.sans),
                        react_1.default.createElement(story_components_1.Td, { style: { fontFamily: story_components_1.theme.font.sans } }, "Sans font")),
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement(story_components_1.Td, null, "letterSpacing"),
                        react_1.default.createElement(story_components_1.Td, null, story_components_1.theme.font.letterSpacing),
                        react_1.default.createElement(story_components_1.Td, { style: { letterSpacing: story_components_1.theme.font.letterSpacing } }, "Letter spacing")))))));
};
exports.Size = function () {
    return (react_1.default.createElement(ThemeProvider_1.ThemeProvider, null,
        react_1.default.createElement(story_components_1.Box, { display: "flex", flexWrap: "wrap" },
            react_1.default.createElement("table", null,
                react_1.default.createElement("thead", null,
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement(story_components_1.Th, null, "Key"),
                        react_1.default.createElement(story_components_1.Th, null, "Value"),
                        react_1.default.createElement(story_components_1.Th, null, "Example"))),
                react_1.default.createElement("tbody", null, Object.entries(story_components_1.theme.font.size).map(function (_a) {
                    var key = _a[0], size = _a[1];
                    return (react_1.default.createElement("tr", { key: key },
                        react_1.default.createElement(story_components_1.Td, null, key),
                        react_1.default.createElement(story_components_1.Td, null, size),
                        react_1.default.createElement(story_components_1.Td, { css: {
                                fontSize: size,
                            } },
                            "font Size ",
                            key)));
                }))))));
};
exports.LineHeight = function () {
    return (react_1.default.createElement(ThemeProvider_1.ThemeProvider, null,
        react_1.default.createElement(story_components_1.Box, { display: "flex", flexWrap: "wrap" },
            react_1.default.createElement("table", null,
                react_1.default.createElement("thead", null,
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement(story_components_1.Th, null, "Key"),
                        react_1.default.createElement(story_components_1.Th, null, "Value"),
                        react_1.default.createElement(story_components_1.Th, null, "Example"))),
                react_1.default.createElement("tbody", null, Object.entries(story_components_1.theme.font.lineHeight).map(function (_a) {
                    var key = _a[0], lineHeight = _a[1];
                    return (react_1.default.createElement("tr", { key: key },
                        react_1.default.createElement(story_components_1.Td, { css: tdLineHeightStyle }, key),
                        react_1.default.createElement(story_components_1.Td, { css: tdLineHeightStyle }, lineHeight),
                        react_1.default.createElement(story_components_1.Td, { css: tslib_1.__assign(tslib_1.__assign({}, tdLineHeightStyle), { lineHeight: lineHeight }) },
                            "Line height ",
                            key)));
                }))))));
};
exports.Weight = function () {
    return (react_1.default.createElement(ThemeProvider_1.ThemeProvider, null,
        react_1.default.createElement(story_components_1.Box, { display: "flex", flexWrap: "wrap" },
            react_1.default.createElement("table", null,
                react_1.default.createElement("thead", null,
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement(story_components_1.Th, null, "Key"),
                        react_1.default.createElement(story_components_1.Th, null, "Value"),
                        react_1.default.createElement(story_components_1.Th, null, "Example"))),
                react_1.default.createElement("tbody", null, Object.entries(story_components_1.theme.font.weight).map(function (_a) {
                    var key = _a[0], weight = _a[1];
                    return (react_1.default.createElement("tr", { key: key },
                        react_1.default.createElement(story_components_1.Td, null, key),
                        react_1.default.createElement(story_components_1.Td, null, weight),
                        react_1.default.createElement(story_components_1.Td, { css: {
                                fontWeight: weight,
                            } },
                            "Weight",
                            key)));
                }))))));
};
//# sourceMappingURL=font.stories.js.map