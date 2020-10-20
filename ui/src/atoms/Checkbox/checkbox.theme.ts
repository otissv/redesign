import { isFunction } from '@redesign-system/theme'

import { CheckboxInterface } from './checkbox.types'
import { getBackgroundColor, getBorder } from '@redesign-system/ui-core'

export function checkboxTheme(props: CheckboxInterface) {
  const {
    appearance,
    theme: { color, transition, border, unit, Checkbox },
  } = props

  return {
    position: 'relative',
    height: unit[5],
    width: unit[5],
    border: getBorder(border, appearance),
    color: '#fff',
    cursor: 'pointer',
    display: 'inline-block',
    top: '5px',
    outline: '0px solid transparent',

    input: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      margin: 0,
      padding: 0,
      opacity: 0,
      cursor: 'inherit',
      outline: '0px solid transparent',

      '&:focus~.CheckboxBackground': {
        border: border.thickOutline,
      },
    },

    '.CheckboxBackground': {
      width: 'inherit',
      height: 'inherit',
      pointerEvents: 'none',
      transform: `translate(-2px, -2px)`,
      outline: '0px solid transparent',
    },

    '.CheckboxCheckmark': {
      strokeWidth: '3.12px',
      strokeDasharray: 29.7833385,
      opacity: 0,
      transform: 'scale(0)',
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: 'center center',
      outline: '0px solid transparent',
      transition: transition.easeFast(),
    },

    'input:checked+.CheckboxBackground, input:indeterminate+.CheckboxBackground': {
      ...getBackgroundColor({ appearance, color }),

      '.CheckboxCheckmark': {
        opacity: 1,
        transform: 'scale(0.7)',
      },
    },

    ...(isFunction(Checkbox) ? Checkbox(props)?.default : Checkbox)?.default,
  }
}
