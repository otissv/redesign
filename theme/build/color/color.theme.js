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
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
import merge from 'deepmerge';
import { maybe } from '../utils';
import { swatches as palette } from '../swatches';
export function colorTheme(theme) {
    var maybeTheme = maybe({
    });
    var hostSwatches = maybeTheme(theme === null || theme === void 0 ? void 0 : theme.swatches);
    var _swatches = merge(hostSwatches, palette);
    var _ref = maybeTheme(theme === null || theme === void 0 ? void 0 : theme.color), hostAccent = _ref.accent, hostAction = _ref.action, hostActive = _ref.active, hostBackground = _ref.background, hostDanger = _ref.danger, hostDefault = _ref.default, hostError = _ref.error, hostDisabled = _ref.disabled, hostSuccess = _ref.success, hostWarning = _ref.warning, hostGrey = _ref.grey, hostText = _ref.text, hostBackgroundInvert = _ref.backgroundInvert, hostTextInvert = _ref.textInvert, hostColors = _objectWithoutProperties(_ref, [
        "accent",
        "action",
        "active",
        "background",
        "danger",
        "default",
        "error",
        "disabled",
        "success",
        "warning",
        "grey",
        "text",
        "backgroundInvert",
        "textInvert"
    ]);
    var color = {
        accent: hostAccent || 'pink',
        action: hostAction || 'blue',
        active: hostActive || 'pink',
        background: hostBackground || 'night_blue',
        danger: hostDanger || 'red',
        error: hostError || 'red',
        default: hostDefault || 'grey',
        disabled: hostDisabled || 'grey',
        success: hostSuccess || 'green',
        warning: hostWarning || 'yellow',
        grey: hostGrey || 'grey',
        text: hostText || 'grey_050',
        backgroundInvert: hostBackgroundInvert || 'grey_050',
        textInvert: hostTextInvert || 'night_blue_700'
    };
    var colors = _objectSpread({
        black: '#000',
        white: '#fff',
        transparent: 'rgba(0, 0, 0, 0)',
        outline: '#006dea',
        text: _swatches[color['text']],
        textInvert: _swatches[color['textInvert']],
        linkText: '#4ea1f3',
        linkTextHover: '#4ea1f3',
        linkTextActive: '#4ea1f3',
        linkTextFocus: '#4ea1f3',
        linkTextVisited: '#4ea1f3',
        linkBackground: '#4ea1f3',
        linkBackgroundHover: '#4ea1f3',
        linkBackgroundActive: '#4ea1f3',
        linkBackgroundFocus: '#4ea1f3',
        linkBackgroundVisited: '#4ea1f3',
        background: _swatches["".concat(color['background'], "_600")],
        backgroundInvert: _swatches[color['backgroundInvert']],
        background_050: _swatches["".concat(color['background'], "_050")],
        background_100: _swatches["".concat(color['background'], "_100")],
        background_200: _swatches["".concat(color['background'], "_200")],
        background_300: _swatches["".concat(color['background'], "_300")],
        background_400: _swatches["".concat(color['background'], "_400")],
        background_500: _swatches["".concat(color['background'], "_500")],
        background_600: _swatches["".concat(color['background'], "_600")],
        background_700: _swatches["".concat(color['background'], "_700")],
        background_800: _swatches["".concat(color['background'], "_800")],
        background_900: _swatches["".concat(color['background'], "_900")],
        default: _swatches["".concat(color['default'], "_600")],
        default2: _swatches["".concat(color['default'], "_500")],
        default_050: _swatches["".concat(color['default'], "_050")],
        default_100: _swatches["".concat(color['default'], "_100")],
        default_200: _swatches["".concat(color['default'], "_200")],
        default_300: _swatches["".concat(color['default'], "_300")],
        default_400: _swatches["".concat(color['default'], "_400")],
        default_500: _swatches["".concat(color['default'], "_500")],
        default_600: _swatches["".concat(color['default'], "_600")],
        default_700: _swatches["".concat(color['default'], "_700")],
        default_800: _swatches["".concat(color['default'], "_800")],
        default_900: _swatches["".concat(color['default'], "_900")],
        grey: _swatches["".concat(color['grey'], "_600")],
        grey2: _swatches["".concat(color['grey'], "_500")],
        grey_050: _swatches["".concat(color['grey'], "_050")],
        grey_100: _swatches["".concat(color['grey'], "_100")],
        grey_200: _swatches["".concat(color['grey'], "_200")],
        grey_300: _swatches["".concat(color['grey'], "_300")],
        grey_400: _swatches["".concat(color['grey'], "_400")],
        grey_500: _swatches["".concat(color['grey'], "_500")],
        grey_600: _swatches["".concat(color['grey'], "_600")],
        grey_700: _swatches["".concat(color['grey'], "_700")],
        grey_800: _swatches["".concat(color['grey'], "_800")],
        grey_900: _swatches["".concat(color['grey'], "_900")],
        active: _swatches["".concat(color['active'], "_600")],
        active2: _swatches["".concat(color['active'], "_500")],
        active_050: _swatches["".concat(color['active'], "_050")],
        active_100: _swatches["".concat(color['active'], "_100")],
        active_200: _swatches["".concat(color['active'], "_200")],
        active_300: _swatches["".concat(color['active'], "_300")],
        active_400: _swatches["".concat(color['active'], "_400")],
        active_500: _swatches["".concat(color['active'], "_500")],
        active_600: _swatches["".concat(color['active'], "_600")],
        active_700: _swatches["".concat(color['active'], "_700")],
        active_800: _swatches["".concat(color['active'], "_800")],
        active_900: _swatches["".concat(color['active'], "_900")],
        accent: _swatches["".concat(color['accent'], "_600")],
        accent2: _swatches["".concat(color['accent'], "_500")],
        accent_050: _swatches["".concat(color['accent'], "_050")],
        accent_100: _swatches["".concat(color['accent'], "_100")],
        accent_200: _swatches["".concat(color['accent'], "_200")],
        accent_300: _swatches["".concat(color['accent'], "_300")],
        accent_400: _swatches["".concat(color['accent'], "_400")],
        accent_500: _swatches["".concat(color['accent'], "_500")],
        accent_600: _swatches["".concat(color['accent'], "_600")],
        accent_700: _swatches["".concat(color['accent'], "_700")],
        accent_800: _swatches["".concat(color['accent'], "_800")],
        accent_900: _swatches["".concat(color['accent'], "_900")],
        action: _swatches["".concat(color['action'], "_600")],
        action2: _swatches["".concat(color['action'], "_500")],
        action_050: _swatches["".concat(color['action'], "_050")],
        action_100: _swatches["".concat(color['action'], "_100")],
        action_200: _swatches["".concat(color['action'], "_200")],
        action_300: _swatches["".concat(color['action'], "_300")],
        action_400: _swatches["".concat(color['action'], "_400")],
        action_500: _swatches["".concat(color['action'], "_500")],
        action_600: _swatches["".concat(color['action'], "_600")],
        action_700: _swatches["".concat(color['action'], "_700")],
        action_800: _swatches["".concat(color['action'], "_800")],
        action_900: _swatches["".concat(color['action'], "_900")],
        danger: _swatches["".concat(color['danger'], "_600")],
        danger2: _swatches["".concat(color['danger'], "_500")],
        danger_050: _swatches["".concat(color['danger'], "_050")],
        danger_100: _swatches["".concat(color['danger'], "_100")],
        danger_200: _swatches["".concat(color['danger'], "_200")],
        danger_300: _swatches["".concat(color['danger'], "_300")],
        danger_400: _swatches["".concat(color['danger'], "_400")],
        danger_500: _swatches["".concat(color['danger'], "_500")],
        danger_600: _swatches["".concat(color['danger'], "_600")],
        danger_700: _swatches["".concat(color['danger'], "_700")],
        danger_800: _swatches["".concat(color['danger'], "_800")],
        danger_900: _swatches["".concat(color['danger'], "_900")],
        error: _swatches["".concat(color['error'], "_600")],
        error2: _swatches["".concat(color['error'], "_500")],
        error_050: _swatches["".concat(color['error'], "_050")],
        error_100: _swatches["".concat(color['error'], "_100")],
        error_200: _swatches["".concat(color['error'], "_200")],
        error_300: _swatches["".concat(color['error'], "_300")],
        error_400: _swatches["".concat(color['error'], "_400")],
        error_500: _swatches["".concat(color['error'], "_500")],
        error_600: _swatches["".concat(color['error'], "_600")],
        error_700: _swatches["".concat(color['error'], "_700")],
        error_800: _swatches["".concat(color['error'], "_800")],
        error_900: _swatches["".concat(color['error'], "_900")],
        warning: _swatches["".concat(color['warning'], "_600")],
        warning2: _swatches["".concat(color['warning'], "_500")],
        warning_050: _swatches["".concat(color['warning'], "_050")],
        warning_100: _swatches["".concat(color['warning'], "_100")],
        warning_200: _swatches["".concat(color['warning'], "_200")],
        warning_300: _swatches["".concat(color['warning'], "_300")],
        warning_400: _swatches["".concat(color['warning'], "_400")],
        warning_500: _swatches["".concat(color['warning'], "_500")],
        warning_600: _swatches["".concat(color['warning'], "_600")],
        warning_700: _swatches["".concat(color['warning'], "_700")],
        warning_800: _swatches["".concat(color['warning'], "_800")],
        warning_900: _swatches["".concat(color['warning'], "_900")],
        success: _swatches["".concat(color['success'], "_600")],
        success2: _swatches["".concat(color['success'], "_500")],
        success_050: _swatches["".concat(color['success'], "_050")],
        success_100: _swatches["".concat(color['success'], "_100")],
        success_200: _swatches["".concat(color['success'], "_200")],
        success_300: _swatches["".concat(color['success'], "_300")],
        success_400: _swatches["".concat(color['success'], "_400")],
        success_500: _swatches["".concat(color['success'], "_500")],
        success_600: _swatches["".concat(color['success'], "_600")],
        success_700: _swatches["".concat(color['success'], "_700")],
        success_800: _swatches["".concat(color['success'], "_800")],
        success_900: _swatches["".concat(color['success'], "_900")],
        disabled: _swatches["".concat(color['disabled'], "_600")],
        disabled2: _swatches["".concat(color['disabled'], "_500")],
        disabled_050: _swatches["".concat(color['disabled'], "_050")],
        disabled_100: _swatches["".concat(color['disabled'], "_100")],
        disabled_200: _swatches["".concat(color['disabled'], "_200")],
        disabled_300: _swatches["".concat(color['disabled'], "_300")],
        disabled_400: _swatches["".concat(color['disabled'], "_400")],
        disabled_500: _swatches["".concat(color['disabled'], "_500")],
        disabled_600: _swatches["".concat(color['disabled'], "_600")],
        disabled_700: _swatches["".concat(color['disabled'], "_700")],
        disabled_800: _swatches["".concat(color['disabled'], "_800")],
        disabled_900: _swatches["".concat(color['disabled'], "_900")]
    }, hostColors, _swatches);
    return colors;
}
