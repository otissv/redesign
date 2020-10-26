import { isFunction } from '@redesign-system/theme';
export function cssProps(css) {
    return function(props) {
        return isFunction(css) ? css(props) : css;
    };
}
