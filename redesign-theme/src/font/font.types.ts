// export const FONT_SMOOTH = `
// text-rendering: optimizeLegibility !important;
// -webkit-font-smoothing: antialiased;0
// -moz-osx-font-smoothing: grayscale;
// text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
// `;

// export const FONT_CODE =
//   "'Source Code Pro', 'Consolas', 'Inconsolata', 'Source Code Pro', 'Monaco', monospace !important";
// export const FONT_SERIF = "'Merriweather','Georgia',serif";
// export const FONT_SANS =
//   'system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif';

// export const FONT_SIZE_BASE = 16;

// export const FONT_SIZE_1 = `${12 / FONT_SIZE_BASE}rem`;
// export const FONT_SIZE_2 = `${14 / FONT_SIZE_BASE}rem`;
// export const FONT_SIZE_3 = `${16 / FONT_SIZE_BASE}rem`;
// export const FONT_SIZE_4 = `${18 / FONT_SIZE_BASE}rem`;
// export const FONT_SIZE_5 = `${20 / FONT_SIZE_BASE}rem`;
// export const FONT_SIZE_6 = `${24 / FONT_SIZE_BASE}rem`;
// export const FONT_SIZE_7 = `${30 / FONT_SIZE_BASE}rem`;
// export const FONT_SIZE_8 = `${36 / FONT_SIZE_BASE}rem`;
// export const FONT_SIZE_9 = `${48 / FONT_SIZE_BASE}rem`;
// export const FONT_SIZE_10 = `${60 / FONT_SIZE_BASE}rem`;
// export const FONT_SIZE_11 = `${72 / FONT_SIZE_BASE}rem`;
// export const FONT_SIZE_12 = `${84 / FONT_SIZE_BASE}rem`;
// export const FONT_SIZE_DEFAULT = '1rem';

// export const FONT_LINE_HEIGHT_1 = 1;
// export const FONT_LINE_HEIGHT_2 = 1.5;
// export const FONT_LINE_HEIGHT_3 = 1.75;
// export const FONT_LINE_HEIGHT_4 = 2;
// export const FONT_LINE_HEIGHT_DEFAULT = 1.75;

// export const FONT_WEIGHT_1 = 400;
// export const FONT_WEIGHT_2 = 500;
// export const FONT_WEIGHT_3 = 600;
// export const FONT_WEIGHT_4 = 700;
// export const FONT_WEIGHT_5 = 800;
// export const FONT_WEIGHT_6 = 900;
// export const FONT_WEIGHT_DEFAULT = 400;

export interface FontInterface {
  base: number;
  code: string;
  color: string;
  colorInvert: string;
  letterSpacing: string;
  lineHeight: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    default: number;
  };
  sans: string;
  serif: string;
  size: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    11: string;
    12: string;
    default: string;
    base: string;
  };
  smooth: string;
  weight: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    default: number;
  };
}

export interface PartialFontInterface extends Partial<FontInterface> {}
