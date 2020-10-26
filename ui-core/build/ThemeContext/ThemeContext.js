import { createContext, useContext } from 'react';
import { themeDefaults, noop } from '@redesign-system/theme';
var initialState = {
    theme: themeDefaults,
    setTheme: noop
};
export var ThemeContext = createContext(initialState);
export function useTheme() {
    return useContext(ThemeContext);
}
