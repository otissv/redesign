export const XSLOW = '3s'
export const SLOW = '0.5s'
export const MEDIUM = '0.3s'
export const FAST = '0.1s'
export const EASE = 'ease'
export const EASE_IN = 'ease-in'
export const EASE_OUT = 'ease-out'
export const EASE_IN_OUT = 'ease-in-out'

export type TransitionSpeedTypes =
  | typeof XSLOW
  | typeof SLOW
  | typeof MEDIUM
  | typeof FAST

export type EaseTypes =
  | typeof EASE
  | typeof EASE_IN
  | typeof EASE_OUT
  | typeof EASE_IN_OUT

export interface TransitionEaseInterface {
  delay?: string
  ease?: EaseTypes | string
  property?: string
  speed?: TransitionSpeedTypes | string
}

export interface EasePropsInterface
  extends Pick<TransitionEaseInterface, 'property' | 'delay'> {}

export interface TransitionInterface {
  0: typeof XSLOW | string
  1: typeof SLOW | string
  2: typeof MEDIUM | string
  3: typeof FAST

  easeFast: (props?: EasePropsInterface) => string
  easeMedium: (props?: EasePropsInterface) => string
  easeSlow: (props?: EasePropsInterface) => string
  easeXslow: (props?: EasePropsInterface) => string

  easeInFast: (props?: EasePropsInterface) => string
  easeInMedium: (props?: EasePropsInterface) => string
  easeInSlow: (props?: EasePropsInterface) => string
  easeInXslow: (props?: EasePropsInterface) => string

  easeInOutFast: (props?: EasePropsInterface) => string
  easeInOutMedium: (props?: EasePropsInterface) => string
  easeInOutSlow: (props?: EasePropsInterface) => string
  easeInOutXslow: (props?: EasePropsInterface) => string

  easeOutFast: (props?: EasePropsInterface) => string
  easeOutMedium: (props?: EasePropsInterface) => string
  easeOutSlow: (props?: EasePropsInterface) => string
  easeOutXslow: (props?: EasePropsInterface) => string
}

export interface PartialTransitionInterface
  extends Partial<TransitionInterface> {}
