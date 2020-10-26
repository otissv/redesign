import { injectGlobal } from 'emotion';
import { createStyleString } from '../helpers/createStyleString';
export function GlobalStyles(param) {
    var theme = param.theme, css = param.css;
    var global = (theme === null || theme === void 0 ? void 0 : theme.global) || {
    };
    injectGlobal(global, createStyleString(css));
    return null;
}
