import { TableInterface } from './table.types';

export function tableTheme({
  condensed,
  hover,
  theme: { transition, border, color, elevate, unit },
}: any) {
  return {
    borderCollapse: 'collapse',
    transition: transition.easeMedium(),
    position: 'relative',

    'td, th': {
      lineHeight: condensed ? 2 : 2.5,
      padding: 0,
      borderTop: border.thinTransparent,
      position: 'relative',
    },

    td: {
      borderBottom: border.thin,
    },

    'tbody tr:hover': {
      background: hover ? color.background_500 : '',
      boxShadow: hover ? elevate[2] : '',
    },

    '.TableView': {
      '.RowDetail >td': {
        padding: `0 0 ${unit[7]} 0`,
      },
    },

    a: {
      background: 'none',
      display: 'block',
      height: '100%',
      marginRight: '3px',
      border: border.thinTransparent,
    },

    'a:hover, a:active': {
      background: 'none',
      border: border.thinTransparent,
      color: color.link,
    },
  };
}

export function tableHeaderTheme() {
  return {};
}

export function tableToolbarTheme({ theme: { border } }: TableInterface) {
  return {
    borderBottom: border.thin,
  };
}

export function tableErrorTheme({ theme: { font } }: TableInterface) {
  return {
    position: 'absolute',
    left: 0,
    right: 0,
    lineHeight: font.lineHeight[2],
    zIndex: 2,
  };
}

export function tableInputTheme({
  appearance,
  theme: { border },
}: TableInterface) {
  return {
    lineHeight: 'inherit',
    resize: 'none',
    border: 'none',
    borderTop: appearance ? border.thinError : 'none',
    borderBottom: appearance ? border.thinError : 'none',
    borderLeft: appearance ? border.thinError : border.thin,
    borderRight: appearance ? border.thinError : border.thin,
    padding: '0 8px',
  };
}
