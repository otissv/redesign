function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
import { isFunction } from '@redesign-system/theme';
import { ACCENT, ACTION, ACTIVE, DANGER, ERROR, SUCCESS, WARNING, DISABLED } from '@redesign-system/theme';
export function iconTheme(props) {
    var ref;
    var hoverColor = props.hoverColor, _theme = props.theme, Icon = _theme.Icon;
    return _objectSpread({
        display: 'inline-block',
        color: 'inherit',
        fill: 'currentcolor',
        height: 'auto',
        position: 'relative'
    }, hoverColor && {
        '&:hover': {
            color: hoverColor
        }
    }, isFunction(Icon) ? (ref = Icon(props)) === null || ref === void 0 ? void 0 : ref.default : Icon === null || Icon === void 0 ? void 0 : Icon.default);
}
export function iconAppearanceTheme(props) {
    var ref;
    var appearance = props.appearance, _theme = props.theme, color = _theme.color, Icon = _theme.Icon;
    var iconAppearanceTheme1 = isFunction(Icon) ? (ref = Icon(props)) === null || ref === void 0 ? void 0 : ref.appearance : Icon === null || Icon === void 0 ? void 0 : Icon.appearance;
    switch(appearance){
        case ACCENT:
            return _objectSpread({
                color: color.accent,
                '&:hover': {
                    color: color.accent2
                }
            }, iconAppearanceTheme1 === null || iconAppearanceTheme1 === void 0 ? void 0 : iconAppearanceTheme1.accent);
        case ACTION:
            return _objectSpread({
                color: color.action,
                '&:hover': {
                    color: color.action2
                }
            }, iconAppearanceTheme1 === null || iconAppearanceTheme1 === void 0 ? void 0 : iconAppearanceTheme1.action);
        case ACTIVE:
            return _objectSpread({
                color: color.active,
                '&:hover': {
                    color: color.active2
                }
            }, iconAppearanceTheme1 === null || iconAppearanceTheme1 === void 0 ? void 0 : iconAppearanceTheme1.active);
        case DANGER:
            return _objectSpread({
                color: color.danger,
                '&:hover': {
                    color: color.danger2
                }
            }, iconAppearanceTheme1 === null || iconAppearanceTheme1 === void 0 ? void 0 : iconAppearanceTheme1.danger);
        case ERROR:
            return _objectSpread({
                color: color.error,
                '&:hover': {
                    color: color.error2
                }
            }, iconAppearanceTheme1 === null || iconAppearanceTheme1 === void 0 ? void 0 : iconAppearanceTheme1.error);
        case SUCCESS:
            return _objectSpread({
                color: color.success,
                '&:hover': {
                    color: color.success2
                }
            }, iconAppearanceTheme1 === null || iconAppearanceTheme1 === void 0 ? void 0 : iconAppearanceTheme1.success);
        case WARNING:
            return _objectSpread({
                color: color.warning,
                '&:hover': {
                    color: color.warning2
                }
            }, iconAppearanceTheme1 === null || iconAppearanceTheme1 === void 0 ? void 0 : iconAppearanceTheme1.warning);
        case DISABLED:
            return _objectSpread({
                color: color.disabled,
                '&:hover': {
                    color: color.disabled2
                }
            }, iconAppearanceTheme1 === null || iconAppearanceTheme1 === void 0 ? void 0 : iconAppearanceTheme1.disabled);
        default:
            return _objectSpread({
            }, iconAppearanceTheme1 === null || iconAppearanceTheme1 === void 0 ? void 0 : iconAppearanceTheme1[appearance]);
    }
}
