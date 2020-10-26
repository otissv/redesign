import React from 'react';
import { theme, Box, Td, Th } from './story.components';
import { ThemeProvider } from '../ThemeProvider';
export default {
    title: 'Theme/Scrollbar'
};
export var Scrollbar = function() {
    return React.createElement(ThemeProvider, null, React.createElement(Box, {
        display: "flex",
        flexWrap: "wrap"
    }, React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement(Th, null, "Key"), React.createElement(Th, null, "Value"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement(Td, null, "width"), React.createElement(Td, null, theme.scrollbar.width)), React.createElement("tr", null, React.createElement(Td, null, "height"), React.createElement(Td, null, theme.scrollbar.height)), React.createElement("tr", null, React.createElement(Td, null, "backgroundColor"), React.createElement(Td, null, theme.scrollbar.backgroundColor)), React.createElement("tr", null, React.createElement(Td, null, "corner.backgroundColor"), React.createElement(Td, null, theme.scrollbar.corner.backgroundColor)), React.createElement("tr", null, React.createElement(Td, null, "thumb.backgroundColor"), React.createElement(Td, null, theme.scrollbar.thumb.backgroundColor)), React.createElement("tr", null, React.createElement(Td, null, "thumb.outline"), React.createElement(Td, null, theme.scrollbar.thumb.outline)), React.createElement("tr", null, React.createElement(Td, null, "thumb.transition"), React.createElement(Td, null, theme.scrollbar.thumb.transition)), React.createElement("tr", null, React.createElement(Td, null, "thumb.hover"), React.createElement(Td, null, theme.scrollbar.thumb.hover.backgroundColor))))));
};
