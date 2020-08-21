import { CheckboxInterface } from './checkbox.types'
import { getBackgroundColor, getBorder } from '@redesign/ui-core'

export function checkboxTheme({
  appearance,
  theme: { color, transition, border, unit },
}: CheckboxInterface) {
  return {
    position: 'relative',
    height: unit[5],
    width: unit[5],
    border: getBorder(border, appearance),
    color: '#fff',
    cursor: 'pointer',
    display: 'inline-block',
    top: '5px',

    input: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      padding: 0,
      opacity: 0,
      cursor: 'inherit',
    },

    '.CheckboxBackground': {
      width: 'inherit',
      height: 'inherit',
      pointerEvents: 'none',
      position: 'relative',
      top: '-2px',
      left: '-2px',
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
      transition: `${transition.easeFast()}, outline`,
    },

    '.CheckboxBackground, .CheckboxCheckmark': {
      transition: transition.easeFast(),
    },

    'input:checked+.CheckboxBackground, input:indeterminate+.CheckboxBackground': {
      ...getBackgroundColor({ appearance, color }),

      '.CheckboxCheckmark': {
        opacity: 1,
        transform: 'scale(0.7)',
      },
    },
  }
}
