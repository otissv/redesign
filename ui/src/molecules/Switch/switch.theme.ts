import { isFunction } from '@redesign/theme'

import { SwitchInterface } from './switch.types'

export function switchTheme(props: SwitchInterface) {
  const {
    width,
    theme: { color, unit, Switch },
  } = props

  return {
    position: 'relative',
    background: color.default,
    justifyContent: 'normal',
    width: width || unit[7],

    '.ToggleUnchecked, .ToggleChecked': {
      transform: `translateX(0) scale(1.1)`,
    },

    'input:checked~.ToggleChecked, input:indeterminate~.ToggleChecked': {
      transform: `translateX(24px) scale(1.1)`,
      opacity: 1,
    },

    'input:checked~.ToggleUnchecked, input:indeterminate~.ToggleUnchecked': {
      transform: `translateX(24px) scale(1.1)`,
      opacity: 0,
    },

    ...(isFunction(Switch) ? Switch(props)?.default : Switch?.default),
  }
}
