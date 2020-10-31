"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBackgroundColor = void 0;
var theme_1 = require("@redesign-system/theme");
function getBackgroundColor(_a) {
    var appearance = _a.appearance, color = _a.color;
    switch (appearance) {
        case theme_1.ACCENT: {
            return {
                background: color.accent_600,
                '&:hover': {
                    background: color.accent_500,
                },
                '&:focus': {
                    background: color.accent_700,
                },
                '&:active': {
                    background: color.accent_700,
                },
            };
        }
        case theme_1.ACTIVE: {
            return {
                background: color.active_600,
                '&:hover': {
                    background: color.active_500,
                },
                '&:focus': {
                    background: color.active_700,
                },
                '&:active': {
                    background: color.active_600,
                },
            };
        }
        case theme_1.ACTION: {
            return {
                background: color.action_600,
                '&:hover': {
                    background: color.action_500,
                },
                '&:focus': {
                    background: color.action_700,
                },
                '&:active': {
                    background: color.action_700,
                },
            };
        }
        case theme_1.DANGER: {
            return {
                background: color.danger_600,
                '&:hover': {
                    background: color.danger_500,
                },
                '&:focus': {
                    background: color.danger_700,
                },
                '&:active': {
                    background: color.danger_700,
                },
            };
        }
        case theme_1.ERROR: {
            return {
                background: color.error_600,
                '&:hover': {
                    background: color.error_500,
                },
                '&:focus': {
                    background: color.error_700,
                },
                '&:active': {
                    background: color.error_700,
                },
            };
        }
        case theme_1.SUCCESS: {
            return {
                background: color.success_600,
                '&:hover': {
                    background: color.success_500,
                },
                '&:focus': {
                    background: color.success_700,
                },
                '&:active': {
                    background: color.success_700,
                },
            };
        }
        case theme_1.WARNING: {
            return {
                background: color.warning_600,
                '&:hover': {
                    background: color.warning_500,
                },
                '&:focus': {
                    background: color.warning_700,
                },
                '&:active': {
                    background: color.warning_700,
                },
            };
        }
        case theme_1.DISABLED: {
            return {
                background: color.disabled,
                '&:active': {
                    background: color.disabled,
                },
                '&:focus': {
                    background: color.disabled,
                },
                '&:hover': {
                    background: color.disabled,
                },
            };
        }
        case theme_1.PRIMARY:
        default:
            return {
                background: color.grey_600,
                '&:hover': {
                    background: color.grey_500,
                },
                '&:focus': {
                    background: color.grey_700,
                },
                '&:active': {
                    background: color.grey_700,
                },
            };
    }
}
exports.getBackgroundColor = getBackgroundColor;
//# sourceMappingURL=getBackgroundColor.js.map