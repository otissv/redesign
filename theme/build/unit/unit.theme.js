import merge from 'deepmerge';
export function unitTheme(theme) {
    var unit = (theme === null || theme === void 0 ? void 0 : theme.unit) || {
    };
    var defaults = {
        0: '0px',
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '24px',
        6: '32px',
        7: '48px',
        8: '64px',
        9: '96px',
        10: '128px',
        default: '24px'
    };
    return merge(defaults, unit);
}
