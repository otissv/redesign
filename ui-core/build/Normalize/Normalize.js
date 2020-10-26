import { useCallback, useEffect } from 'react';
import { injectGlobal } from 'emotion';
import { normalizeTheme } from '@redesign-system/theme';
export function Normalize() {
    var normalize = useCallback(normalizeTheme, []);
    useEffect(function() {
        injectGlobal(normalize());
    }, []);
    return null;
}
