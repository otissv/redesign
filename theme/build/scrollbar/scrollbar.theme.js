import merge from 'deepmerge';
import { maybe } from '../utils';
export function scrollbarTheme(theme) {
    var maybeTheme = maybe({
    });
    var color = maybeTheme(theme === null || theme === void 0 ? void 0 : theme.color);
    var scrollbar = maybeTheme(theme === null || theme === void 0 ? void 0 : theme.scrollbar);
    var unit = maybeTheme(theme === null || theme === void 0 ? void 0 : theme.unit);
    var defaults = {
        width: unit[3],
        height: unit[3],
        backgroundColor: color.background,
        corner: {
            backgroundColor: color.background
        },
        thumb: {
            backgroundColor: '#7d7d7d94',
            outline: 'transparent',
            transition: 'background-color ease 0.2s',
            hover: {
                backgroundColor: '#7d7d7d'
            }
        }
    };
    return merge(defaults, scrollbar);
}
