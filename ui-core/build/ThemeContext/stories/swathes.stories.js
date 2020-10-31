"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Swatches = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var story_components_1 = require("./story.components");
var ThemeProvider_1 = require("../ThemeProvider");
exports.default = {
    title: 'Theme/Swatches',
};
exports.Swatches = function () {
    return (react_1.default.createElement(ThemeProvider_1.ThemeProvider, null,
        react_1.default.createElement(story_components_1.Box, { display: "flex", flexWrap: "wrap" }, Object.entries(story_components_1.theme.color).map(function (_a) {
            var key = _a[0], color = _a[1];
            return (react_1.default.createElement(story_components_1.Box, { key: key, mx: 3, mb: 8, textAlign: "center", alignItems: "center" },
                key,
                react_1.default.createElement(story_components_1.Swatch, { css: {
                        background: color,
                    } }),
                color));
        }))));
};
//# sourceMappingURL=swathes.stories.js.map