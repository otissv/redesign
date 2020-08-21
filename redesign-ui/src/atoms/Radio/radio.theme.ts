import { RadioInterface } from './radio.types'
import { getBackgroundColor, getBorder } from '@redesign/ui-core'

export function radioTheme() {
  return {
    display: 'inline-block',
  }
}

export function radioContainerTheme({
  appearance,
  theme: { color, transition, border, unit },
}: RadioInterface) {
  const positionAbsolute = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }

  return {
    position: 'relative',
    height: unit[5],
    width: unit[5],
    color: '#fff',
    cursor: 'pointer',
    display: 'inline-block',
    top: '5px',

    label: {
      marginRight: unit[3],
    },

    input: {
      ...positionAbsolute,
      margin: 0,
      padding: 0,
      opacity: 0,
      cursor: 'inherit',
    },

    '.RadioBackground': {
      width: 'inherit',
      height: 'inherit',
      pointerEvents: 'none',
    },

    '.RadioInnerCircle': {
      ...positionAbsolute,
      borderRadius: '50%',
      border: getBorder(border, appearance),
    },

    '.RadioOuterCircle': {
      ...positionAbsolute,
      ...getBackgroundColor({ appearance, color }),
      borderRadius: '50%',
      opacity: 0,
      transform: 'scale(0)',
      transformOrigin: 'center center',
      transition: `${transition.easeFast()}, outline`,
    },

    // 'input:checked+.RadioBackground': {
    //   '.RadioOuterCircle': {
    //     ...getBackgroundColor({ appearance, color }),

    //     opacity: 1,
    //     transform: 'scale(0.5)',
    //   },
    // },
  }
}
