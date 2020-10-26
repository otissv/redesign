import { TextboxInterface } from './textbox.types'

export function textboxGroupTheme({
  theme: { color, border, font, unit, radius },
}: TextboxInterface) {
  return {
    position: 'relative',
    width: 'auto',
    height: '41px',
    display: 'flex',

    background: color.grey_600,
    border: border.thinTransparent,
    borderBottom: border.thinForeground,
    lineHeight: font.lineHeight.default,
    borderTopLeftRadius: radius.rounded,
    borderTopRightRadius: radius.rounded,

    '>svg.Icon': {
      marginLeft: unit[2],
    },

    textbox: {
      display: 'inline-block',
      width: 'auto',
      background: 'none',
      border: border.thinTransparent,
      flex: 1,

      lineHeight: 'inherit',
      '&:hover, &:active, &:focus': {
        background: 'none',
        border: 'none',
      },
    },

    button: {
      float: 'right',
      borderBottom: 'inherit',
      height: 'inherit',
      // padding: `${unit[2]} ${unit[3]}`,

      '&:hover, &:active, &:focus': {
        borderBottom: 'inherit',
      },
    },

    'textbox+button': {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },

    'button+textbox': {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
    },
  }
}

export function textboxGroupButtonTheme({
  theme: { color, border },
}: TextboxInterface) {
  return {
    background: color.grey_600,
    border: border.thinTransparent,
    borderBottom: border.thinForeground,
  }
}
