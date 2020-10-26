import React from 'react';
import { Base } from './Base';
import { createTheme } from '@redesign-system/theme';
export default {
    title: 'Core/Base',
    component: Base
};
var theme = createTheme();
/**
 ##Default
 */ export var Default = function() {
    return React.createElement(Base, {
        theme: theme,
        color: "white"
    }, "Base");
};
export var Children_CSS_String = function() {
    return React.createElement(Base, {
        theme: theme,
        childrenCss: "\n      width: 30px;\n      height: 30px;\n      margin: 10px;\n      background: red;\n    ",
        css: "padding: 10px; border: 1px solid red"
    }, React.createElement(Base, {
        theme: theme
    }), React.createElement(Base, {
        theme: theme
    }), React.createElement(Base, {
        theme: theme
    }));
};
export var Children_CSS_Object = function() {
    return React.createElement(Base, {
        theme: theme,
        childrenCss: {
            width: '30px',
            height: '30px',
            margin: '10px',
            background: 'red'
        },
        css: "padding: 10px; border: 1px solid red"
    }, React.createElement(Base, {
        theme: theme
    }), React.createElement(Base, {
        theme: theme
    }), React.createElement(Base, {
        theme: theme
    }));
};
export var Children_CSS_Function = function() {
    return React.createElement(Base, {
        theme: theme,
        childrenCss: function(param) {
            var theme1 = param.theme;
            return {
                width: '30px',
                height: '30px',
                margin: '10px',
                background: theme1.color.success
            };
        },
        css: "padding: 10px; border: 1px solid red"
    }, React.createElement(Base, {
        theme: theme
    }), React.createElement(Base, {
        theme: theme
    }), React.createElement(Base, {
        theme: theme
    }));
};
export var Children_Props_Object = function() {
    return React.createElement(Base, {
        theme: theme,
        childrenProps: {
            className: 'my-class',
            css: {
                width: '100px',
                height: '100px',
                margin: '10px',
                border: '1px solid blue'
            }
        }
    }, React.createElement(Base, {
        theme: theme
    }), React.createElement(Base, {
        theme: theme
    }), React.createElement(Base, {
        theme: theme
    }));
};
export var Children_Props_Function = function() {
    return React.createElement(Base, {
        theme: theme,
        childrenProps: function(param) {
            var theme1 = param.theme;
            var ref;
            return {
                className: 'my-class',
                css: {
                    width: '30px',
                    height: '30px',
                    margin: '10px',
                    border: theme1 === null || theme1 === void 0 ? void 0 : (ref = theme1.border) === null || ref === void 0 ? void 0 : ref.thin
                }
            };
        },
        css: "padding: 10px; border: 1px solid red"
    }, React.createElement(Base, {
        theme: theme
    }), React.createElement(Base, {
        theme: theme
    }), React.createElement(Base, {
        theme: theme
    }));
};
