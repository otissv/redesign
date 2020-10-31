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

  const defaults: TransitionInterface = {
    0: XSLOW,
    1: SLOW,
    2: MEDIUM,
    3: FAST,

    // ease
    easeFast: (props?: EasePropsInterface) => {
      return easeTransition({
        ...props,
        ease: EASE,
        speed: FAST,
      })
    },
    easeMedium: (props?: EasePropsInterface) => {
      return easeTransition({
        ...props,
        ease: EASE,
        speed: MEDIUM,
      })
    },
    easeSlow: (props?: EasePropsInterface) => {
      return easeTransition({
        ...props,
        ease: EASE,
        speed: SLOW,
      })
    },
    easeXslow: (props?: EasePropsInterface) => {
      return easeTransition({
        ...props,
        ease: EASE,
        speed: XSLOW,
      })
    },

    // easIn
    easeInFast: (props?: EasePropsInterface) => {
      return easeTransition({
        ...props,
        ease: EASE_IN,
        speed: FAST,
      })
    },
    easeInMedium: (props?: EasePropsInterface) => {
      return easeTransition({
        ...props,
        ease: EASE_IN,
        speed: MEDIUM,
      })
    },
    easeInSlow: (props?: EasePropsInterface) => {
      return easeTransition({
        ...props,
        ease: EASE_IN,
        speed: SLOW,
      })
    },
    easeInXslow: (props?: EasePropsInterface) => {
      return easeTransition({
        ...props,
        ease: EASE_IN,
        speed: XSLOW,
      })
    },

    // easeInOut
    easeInOutFast: (props?: EasePropsInterface) => {
      return easeTransition({
        ...props,
        ease: EASE_IN_OUT,
        speed: FAST,
      })
    },
    easeInOutMedium: (props?: EasePropsInterface) => {
      return easeTransition({
        ...props,
        ease: EASE_IN_OUT,
        speed: MEDIUM,
      })
    },
    easeInOutSlow: (props?: EasePropsInterface) => {
      return easeTransition({
        ...props,
        ease: EASE_IN_OUT,
        speed: SLOW,
      })
    },
    easeInOutXslow: (props?: EasePropsInterface) => {
      return easeTransition({
        ...props,
        ease: EASE_IN_OUT,
        speed: XSLOW,
      })
    },

    // easeOut
    easeOutFast: (props?: EasePropsInterface) => {
      return easeTransition({
        ...props,
        ease: EASE_OUT,
        speed: FAST,
      })
    },
    easeOutMedium: (props?: EasePropsInterface) => {
      return easeTransition({
        ...props,
        ease: EASE_OUT,
        speed: MEDIUM,
      })
    },
    easeOutSlow: (props?: EasePropsInterface) => {
      return easeTransition({
        ...props,
        ease: EASE_OUT,
        speed: SLOW,
      })
    },
    easeOutXslow: (props?: EasePropsInterface) => {
      return easeTransition({
        ...props,
        ease: EASE_OUT,
        speed: XSLOW,
      })
    },
  }

  return merge(defaults, transition) as T
}
