"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.MediaQueries = exports.Breakpoints = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var story_components_1 = require("./story.components");
var ThemeProvider_1 = require("../ThemeProvider");
exports.default = {
    title: 'Theme/MediaQueries',
};
exports.Breakpoints = function () {
    var rows = [];
    for (var key in story_components_1.theme.breakpoints) {
        var item = story_components_1.theme.breakpoints[key];
        var row = (react_1.default.createElement("tr", { key: key },
            react_1.default.createElement(story_components_1.Td, null, key),
            react_1.default.createElement(story_components_1.Td, null, item.min),
            react_1.default.createElement(story_components_1.Td, null, item.max)));
        rows.push(row);
    }
    return (react_1.default.createElement(ThemeProvider_1.ThemeProvider, null,
        react_1.default.createElement(story_components_1.Box, { display: "flex", flexWrap: "wrap" },
            react_1.default.createElement("table", null,
                react_1.default.createElement("thead", null,
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement(story_components_1.Th, null, "Key"),
                        react_1.default.createElement(story_components_1.Th, null, "Min Value"),
                        react_1.default.createElement(story_components_1.Th, null, "Max Value"))),
                react_1.default.createElement("tbody", null, rows)))));
};
exports.MediaQueries = function () {
    var rows = [];
    for (var key in story_components_1.theme.mediaQueries) {
        var item = story_components_1.theme.mediaQueries[key];
        var row = (react_1.default.createElement("tr", { key: key },
            react_1.default.createElement(story_components_1.Td, null, key),
            react_1.default.createElement(story_components_1.Td, null, item.min),
            react_1.default.createElement(story_components_1.Td, null, item.max)));
        rows.push(row);
    }
    return (react_1.default.createElement(ThemeProvider_1.ThemeProvider, null,
        react_1.default.createElement(story_components_1.Box, { display: "flex", flexWrap: "wrap" },
            react_1.default.createElement("table", null,
                react_1.default.createElement("thead", null,
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement(story_components_1.Th, null, "Key"),
                        react_1.default.createElement(story_components_1.Th, null, "Min Value"),
                        react_1.default.createElement(story_components_1.Th, null, "Max Value"))),
                react_1.default.createElement("tbody", null, rows)))));
};
exports.Example = function () {
    var boxCss = {
        background: 'red',
        width: '100%',
        height: '100px',
        margin: '10px',
    };
    var mq = {
        sm: {
            min: {
                color: 'blue',
                background: 'green',
            },
        },
        md: {
            min: {
                fontSize: '48px',
                color: 'white',
                background: 'black',
            },
        },
    };
    return (react_1.default.createElement(ThemeProvider_1.ThemeProvider, null,
        react_1.default.createElement(story_components_1.Box, { css: boxCss, mq: mq, radius: "rounded" }, "Media Queries")));
};
//# sourceMappingURL=mediaQueries.stories.js.map