import merge from 'deepmerge';
import { maybe } from '../utils';
import { ELEVATE_0, ELEVATE_1, ELEVATE_2, ELEVATE_3, ELEVATE_4, ELEVATE_5 } from './elevate.types';
export function elevateTheme(theme) {
    var elevate = maybe({
    })(theme === null || theme === void 0 ? void 0 : theme.elevate);
    var defaults = {
        0: ELEVATE_0,
        1: ELEVATE_1,
        2: ELEVATE_2,
        3: ELEVATE_3,
        4: ELEVATE_4,
        5: ELEVATE_5
    };
    return merge(defaults, elevate);
}
