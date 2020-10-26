import React from 'react';
import { theme, Box, Td, Th } from './story.components';
import { ThemeProvider } from '../ThemeProvider';
export default {
    title: 'Theme/Utility'
};
console.log(theme);
export var Utility = function() {
    return React.createElement(ThemeProvider, null, React.createElement(Box, {
        display: "flex",
        flexWrap: "wrap"
    }, React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement(Th, null, "Functions"), React.createElement(Th, null, "Descriptions"))), React.createElement("tbody", null, Object.keys(theme.utility).map(function(key) {
        return React.createElement("tr", {
            key: key
        }, React.createElement(Td, null, key));
    })))));
};
