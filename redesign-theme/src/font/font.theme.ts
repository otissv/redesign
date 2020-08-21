import { merge } from 'rambda';
import { FontInterface, PartialFontInterface } from './font.types';
import { PartialThemeInterface } from '../theme';

export function fontTheme<
  P extends PartialThemeInterface,
  T extends PartialFontInterface
>(theme?: P): T {
  const color = theme?.color || {};
  const font = theme?.font || {};

  const base = font.base || 16; // font base in pixels

  const defaults: FontInterface = {
    base,
    color: color.text || '',
    colorInvert: color.textInvert || '',
    smooth: `
      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased;0
      -moz-osx-font-smoothing: grayscale;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
    `,

    // family
    code:
      "'Source Code Pro', 'Consolas', 'Inconsolata', 'Source Code Pro', 'Monaco', monospace !important",
    serif: "'Merriweather','Georgia',serif",
    sans:
      'system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif',

    size: {
      1: `${12 / base}rem`,
      2: `${14 / base}rem`,
      3: `${16 / base}rem`,
      4: `${18 / base}rem`,
      5: `${20 / base}rem`,
      6: `${24 / base}rem`,
      7: `${30 / base}rem`,
      8: `${36 / base}rem`,
      9: `${48 / base}rem`,
      10: `${60 / base}rem`,
      11: `${72 / base}rem`,
      12: `${84 / base}rem`,
      default: `1rem`,
      base: `${base}px`,
    },

    lineHeight: {
      1: 1,
      2: 1.5,
      3: 1.75,
      4: 2,
      5: 2.5,
      default: 1.75,
    },

    letterSpacing: '0px',

    weight: {
      1: 400,
      2: 500,
      3: 600,
      4: 700,
      5: 800,
      6: 900,
      default: 400,
    },
  };

  return merge(font)(defaults) as T;
}
