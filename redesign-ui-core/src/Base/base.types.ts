import { ThemeInterface, CssTypes } from '@redesign/theme'

export type ChildrenPropsObjectType = Partial<BaseInterface>
export type ChildrenPropsFunctionType = (
  p: BaseInterface
) => Partial<BaseInterface>
export type ChildrenPropsTypes =
  | ChildrenPropsObjectType
  | ChildrenPropsFunctionType

export interface BaseInterface {
  // animate?: { [key: string]: any }
  // state?: string
  as?: string
  children?: any
  className?: string
  childrenCss?: CssTypes
  childrenProps?: ChildrenPropsTypes
  theme: Partial<ThemeInterface>
  css?: CssTypes
  [key: string]: any
}
