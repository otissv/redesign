import merge from 'deepmerge';
import { maybe } from '../utils';
export function mediaQueriesTheme(theme) {
    var mediaQueries = maybe({
    })(theme === null || theme === void 0 ? void 0 : theme.mediaQueries);
    var defaults = {
        sm: 425,
        md: 768,
        lg: 1024,
        xl: 1280
    };
    return merge(defaults, mediaQueries);
}
