"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var story_components_1 = require("./story.components");
var ThemeProvider_1 = require("../ThemeProvider");
exports.default = {
    title: 'Theme/Color',
};
exports.Color = function () {
    return (react_1.default.createElement(ThemeProvider_1.ThemeProvider, null,
        react_1.default.createElement(story_components_1.Box, { display: "flex", flexWrap: "wrap" },
            react_1.default.createElement("table", null,
                react_1.default.createElement("thead", null,
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement(story_components_1.Th, null, "Key"),
                        react_1.default.createElement(story_components_1.Th, null, "Value"),
                        react_1.default.createElement(story_components_1.Th, null, "Example"))),
                react_1.default.createElement("tbody", null, Object.entries(story_components_1.theme.color).map(function (_a) {
                    var key = _a[0], color = _a[1];
                    return (react_1.default.createElement("tr", { key: key },
                        react_1.default.createElement(story_components_1.Td, null, key),
                        react_1.default.createElement(story_components_1.Td, null, color),
                        react_1.default.createElement(story_components_1.Td, null,
                            react_1.default.createElement("div", { style: {
                                    height: '100px',
                                    width: '100px',
                                    background: color,
                                } }))));
                }))))));
};
//# sourceMappingURL=color.stories.js.map