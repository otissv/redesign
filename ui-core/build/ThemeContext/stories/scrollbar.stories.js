"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scrollbar = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var story_components_1 = require("./story.components");
var ThemeProvider_1 = require("../ThemeProvider");
exports.default = {
    title: 'Theme/Scrollbar',
};
exports.Scrollbar = function () {
    return (react_1.default.createElement(ThemeProvider_1.ThemeProvider, null,
        react_1.default.createElement(story_components_1.Box, { display: "flex", flexWrap: "wrap" },
            react_1.default.createElement("table", null,
                react_1.default.createElement("thead", null,
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement(story_components_1.Th, null, "Key"),
                        react_1.default.createElement(story_components_1.Th, null, "Value"))),
                react_1.default.createElement("tbody", null,
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement(story_components_1.Td, null, "width"),
                        react_1.default.createElement(story_components_1.Td, null, story_components_1.theme.scrollbar.width)),
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement(story_components_1.Td, null, "height"),
                        react_1.default.createElement(story_components_1.Td, null, story_components_1.theme.scrollbar.height)),
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement(story_components_1.Td, null, "backgroundColor"),
                        react_1.default.createElement(story_components_1.Td, null, story_components_1.theme.scrollbar.backgroundColor)),
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement(story_components_1.Td, null, "corner.backgroundColor"),
                        react_1.default.createElement(story_components_1.Td, null, story_components_1.theme.scrollbar.corner.backgroundColor)),
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement(story_components_1.Td, null, "thumb.backgroundColor"),
                        react_1.default.createElement(story_components_1.Td, null, story_components_1.theme.scrollbar.thumb.backgroundColor)),
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement(story_components_1.Td, null, "thumb.outline"),
                        react_1.default.createElement(story_components_1.Td, null, story_components_1.theme.scrollbar.thumb.outline)),
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement(story_components_1.Td, null, "thumb.transition"),
                        react_1.default.createElement(story_components_1.Td, null, story_components_1.theme.scrollbar.thumb.transition)),
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement(story_components_1.Td, null, "thumb.hover"),
                        react_1.default.createElement(story_components_1.Td, null, story_components_1.theme.scrollbar.thumb.hover.backgroundColor)))))));
};
//# sourceMappingURL=scrollbar.stories.js.map