import merge from 'deepmerge'
import { maybe } from '../utils/maybe'
import {
  EASE,
  EASE_IN,
  EASE_IN_OUT,
  EASE_OUT,
  EasePropsInterface,
  FAST,
  MEDIUM,
  PartialTransitionInterface,
  SLOW,
  TransitionEaseInterface,
  TransitionInterface,
  XSLOW,
} from './transition.types'

import { PartialThemeInterface } from '../theme'

export function easeTransition(options?: Partial<TransitionEaseInterface>) {
  const { delay = '', property = 'all', speed = MEDIUM, ease = 'ease' } =
    options || {}
  return `${property} ${speed} ${ease} ${delay}`
}

export function transitionTheme<
  P extends PartialThemeInterface,
  T extends PartialTransitionInterface
>(theme?: P): T {
  const transition = maybe({})(theme?.transition)

  const xslow = transition[0] || XSLOW
  const slow = transition[1] || SLOW
  const medium = transition[2] || MEDIUM
  const fast = transition[3] || FAST

  const defaults: TransitionInterface = {
    0: xslow,
    1: slow,
    2: medium,
    3: fast,

    // ease
    easeFast: (props?: EasePropsInterface) => {
      return easeTransition({
        ...props,
        ease: EASE,
        speed: fast,
      })
    },
    easeMedium: (props?: EasePropsInterface) => {
      return easeTransition({
        ...props,
        ease: EASE,
        speed: medium,
      })
    },
    easeSlow: (props?: EasePropsInterface) => {
      return easeTransition({
        ...props,
        ease: EASE,
        speed: slow,
      })
    },
    easeXslow: (props?: EasePropsInterface) => {
      return easeTransition({
        ...props,
        ease: EASE,
        speed: xslow,
      })
    },

    // easIn
    easeInFast: (props?: EasePropsInterface) => {
      return easeTransition({
        ...props,
        ease: EASE_IN,
        speed: fast,
      })
    },
    easeInMedium: (props?: EasePropsInterface) => {
      return easeTransition({
        ...props,
        ease: EASE_IN,
        speed: medium,
      })
    },
    easeInSlow: (props?: EasePropsInterface) => {
      return easeTransition({
        ...props,
        ease: EASE_IN,
        speed: slow,
      })
    },
    easeInXslow: (props?: EasePropsInterface) => {
      return easeTransition({
        ...props,
        ease: EASE_IN,
        speed: xslow,
      })
    },

    // easeInOut
    easeInOutFast: (props?: EasePropsInterface) => {
      return easeTransition({
        ...props,
        ease: EASE_IN_OUT,
        speed: fast,
      })
    },
    easeInOutMedium: (props?: EasePropsInterface) => {
      return easeTransition({
        ...props,
        ease: EASE_IN_OUT,
        speed: medium,
      })
    },
    easeInOutSlow: (props?: EasePropsInterface) => {
      return easeTransition({
        ...props,
        ease: EASE_IN_OUT,
        speed: slow,
      })
    },
    easeInOutXslow: (props?: EasePropsInterface) => {
      return easeTransition({
        ...props,
        ease: EASE_IN_OUT,
        speed: xslow,
      })
    },

    // easeOut
    easeOutFast: (props?: EasePropsInterface) => {
      return easeTransition({
        ...props,
        ease: EASE_OUT,
        speed: fast,
      })
    },
    easeOutMedium: (props?: EasePropsInterface) => {
      return easeTransition({
        ...props,
        ease: EASE_OUT,
        speed: medium,
      })
    },
    easeOutSlow: (props?: EasePropsInterface) => {
      return easeTransition({
        ...props,
        ease: EASE_OUT,
        speed: slow,
      })
    },
    easeOutXslow: (props?: EasePropsInterface) => {
      return easeTransition({
        ...props,
        ease: EASE_OUT,
        speed: xslow,
      })
    },
  }

  return merge(defaults, transition) as T
}
