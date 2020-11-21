import { isFunction } from '@redesign-system/theme'

import {
  DoubleContentInterface,
  DoubleContentInnerInterface,
} from './doubleContent.types'

export function doubleContentTheme(props: DoubleContentInterface) {
  const {
    theme: { breakpoints, DoubleContent },
  } = props

  return {
    display: 'flex',
    flexWrap: 'warp',
    flexDirection: 'column',
    position: 'relative',
    [` @media only screen and (min-width: ${breakpoints.md}px)`]: {
      flexDirection: 'row',
    },

    ...(isFunction(DoubleContent)
      ? DoubleContent(props)?.appearance
      : DoubleContent?.appearance),
  }
}

export function doubleContentInnerTheme(props: DoubleContentInnerInterface) {
  const {
    theme: { unit, DoubleContentInner },
  } = props

  return {
    display: 'flex',
    flex: 1,
    padding: unit[7],
    justifyContent: 'center',
    justifyItems: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'relative',

    ...(isFunction(DoubleContentInner)
      ? DoubleContentInner(props)?.appearance
      : DoubleContentInner?.appearance),
  }
}
