import merge from 'deepmerge';
import { maybe } from '../utils';
import { RADIUS_CIRCLE, RADIUS_NONE, RADIUS_ROUND, RADIUS_ROUNDED } from './radius.types';
export function radiusTheme(theme) {
    var radius = maybe({
    })(theme === null || theme === void 0 ? void 0 : theme.radius);
    var defaults = {
        circle: RADIUS_CIRCLE,
        none: RADIUS_NONE,
        round: RADIUS_ROUND,
        rounded: RADIUS_ROUNDED
    };
    return merge(defaults, radius);
}
