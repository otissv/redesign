"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utility = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var story_components_1 = require("./story.components");
var ThemeProvider_1 = require("../ThemeProvider");
exports.default = {
    title: 'Theme/Utility',
};
exports.Utility = function () {
    return (react_1.default.createElement(ThemeProvider_1.ThemeProvider, null,
        react_1.default.createElement(story_components_1.Box, { display: "flex", flexWrap: "wrap" },
            react_1.default.createElement("table", null,
                react_1.default.createElement("thead", null,
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement(story_components_1.Th, null, "Functions"),
                        react_1.default.createElement(story_components_1.Th, null, "Descriptions"))),
                react_1.default.createElement("tbody", null, Object.keys(story_components_1.theme.utility).map(function (key) {
                    return (react_1.default.createElement("tr", { key: key },
                        react_1.default.createElement(story_components_1.Td, null, key)));
                }))))));
};
//# sourceMappingURL=utility.stories.js.map