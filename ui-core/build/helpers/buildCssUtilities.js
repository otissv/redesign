import { utilityStyles } from './utilityStyles';
export function buildCssUtilities(props) {
    return props.match ? '' : utilityStyles(props);
}
