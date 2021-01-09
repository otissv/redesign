"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var story_components_1 = require("./story.components");
var ThemeProvider_1 = require("../ThemeProvider");
exports.default = {
    title: 'Theme/Color',
};
function getColorItems() {
    var items = [];
    for (var key in story_components_1.theme.color) {
        var value = story_components_1.theme.color[key];
        items.push(react_1.default.createElement(react_1.Fragment, null,
            react_1.default.createElement(story_components_1.Box, { w: "200px", m: 4, childrenProps: { mb: 2 } },
                react_1.default.createElement(story_components_1.Box, null,
                    react_1.default.createElement(story_components_1.Box, { as: "p" }, key),
                    react_1.default.createElement(story_components_1.Box, { as: "p" }, value)),
                react_1.default.createElement(story_components_1.Box, { w: "100px", h: "100px", bg: value, display: "block" }))));
    }
    console.log(items);
    return items;
}
exports.Color = function () {
    return (react_1.default.createElement(ThemeProvider_1.ThemeProvider, null,
        react_1.default.createElement(story_components_1.Box, { display: "flex", flexWrap: "wrap" }, getColorItems())));
};
{
    /* <table>
  <thead>
    <tr>
      <Th>Key</Th>
      <Th>Value</Th>
      <Th>Example</Th>
    </tr>
  </thead>
  <tbody>
    {Object.entries(theme.color).map(([key, color]) => {
      return (
        <tr key={key}>
          <Td>{key}</Td>
          <Td>{color as string}</Td>
          <Td>
            <div
              style={{
                height: '100px',
                width: '100px',
                background: color as string,
              }}
            ></div>
          </Td>
        </tr>
      )
    })}
  </tbody>
  </table> */
}
//# sourceMappingURL=color.stories.js.map