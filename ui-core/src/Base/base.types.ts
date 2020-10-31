import { ThemeInterface, CssTypes } from '@redesign-system/theme'

export type ChildrenPropsObjectType = Partial<BaseInterface>
export type ChildrenPropsFunctionType = (
  p: BaseInterface
) => Partial<BaseInterface>
export type ChildrenPropsTypes =
  | ChildrenPropsObjectType
  | ChildrenPropsFunctionType

export interface BaseInterface {
  as?: string
  animate?: string
  animations?: { [key: string]: { [key: string]: AnimateInterface } }
  children?: any
  className?: string
  childrenCss?: CssTypes
  childrenProps?: ChildrenPropsTypes
  theme: Partial<ThemeInterface>
  css?: CssTypes
  [key: string]: any
}

export interface AnimateInterface {
  to: number | number[] | string | string[]

  bounce?: number
  damping?: number
  driver?: any
  duration?: number
  ease?: any | any[]
  elapsed?: number
  from?: number | string
  mass?: number
  offset?: number[]
  repeat?: number | 'Infinity'
  repeatDelay?: number
  repeatType?: 'loop' | 'mirror' | 'reverse'
  restDelta?: number
  restSpeed?: number
  stiffness?: number
  type?: 'keyframes' | 'spring' | 'decay'
  velocity?: number
  onUpdate?: (value: any) => void
  onPlay?: () => void
  onComplete?: () => void
  onRepeat?: () => void
  onStop?: () => void
}
