import { DISABLED, PRIMARY_DISABLED, SECONDARY_DISABLED, TERTIARY_DISABLED } from '@redesign-system/theme';
export function isComponentDisabled(param) {
    var appearance = param.appearance, disabled = param.disabled;
    return disabled || appearance === DISABLED || appearance === PRIMARY_DISABLED || appearance === SECONDARY_DISABLED || appearance === TERTIARY_DISABLED ? true : undefined;
}
