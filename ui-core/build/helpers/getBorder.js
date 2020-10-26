import { toUpperFirst } from '@redesign-system/theme';
export function getBorder(border, appearance) {
    if (appearance && appearance !== 'PRIMARY') {
        return border["thick".concat(toUpperFirst(appearance.toLowerCase()))];
    }
    return border.thick;
}
