import { ThemeInterface } from '../theme';
import { borderTheme } from '../border';
import { colorTheme } from '../color';
import { elevateTheme } from '../elevate';
import { fontTheme } from '../font';
import { radiusTheme } from '../radius';
import { scrollbarTheme } from '../scrollbar';
import { transitionTheme } from '../transition';
import { unitTheme } from '../unit';
import { utilityTheme } from '../utility';
import { globalTheme } from '../global';

export function createTheme(partialTheme: Partial<ThemeInterface> = {}) {
  const _color = colorTheme(partialTheme);
  const _unit = unitTheme(partialTheme);

  const defaultTheme = {
    ...partialTheme,
    color: _color,
    unit: _unit,
  };

  const baseTheme = {
    ...defaultTheme,
    border: borderTheme(defaultTheme),
    color: _color,
    elevate: elevateTheme(defaultTheme),
    font: fontTheme(defaultTheme),
    radius: radiusTheme(defaultTheme),
    scrollbar: scrollbarTheme(defaultTheme),
    transition: transitionTheme(defaultTheme),
    unit: unitTheme(defaultTheme),
  };

  return {
    ...baseTheme,
    global: globalTheme(baseTheme),
    utility: utilityTheme(baseTheme),
  };
}
