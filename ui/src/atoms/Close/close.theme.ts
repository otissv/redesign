import { isFunction } from '@redesign-system/theme'

import { CloseInterface } from './close.types'

export function closeTheme(props: CloseInterface) {
  const {
    theme: { border, color, unit, transition, Close },
  } = props

  return {
    position: 'relative',
    cursor: 'pointer',
    width: unit[6],
    height: unit[6],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    transition: transition.easeMedium(),
    outlineColor: 'transparent',
    border: border.thickTransparent,

    '&:hover': {
      background: color.default_400,
    },

    '&:focus': {
      border: border.thickOutline,
      outlineWidth: '0px',
    },

    svg: {
      color: 'inherit',
      stroke: 'currentColor',
    },

    ...(isFunction(Close) ? Close(props)?.default : Close?.default),
  }
}
