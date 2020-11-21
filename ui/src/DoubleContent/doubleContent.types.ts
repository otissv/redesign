import { ThemeComponentInterface, UnitInterface } from '@redesign-system/theme'
import { CoverImageInterface } from '../CoverImage'

export interface DoubleContentInterface extends ThemeComponentInterface {
  h?: UnitInterface | string
  w?: UnitInterface | string
  coverImage?: CoverImageInterface
  children?: React.ReactNode
  doubleContentInner?: DoubleContentInnerInterface
}

export interface DoubleContentInnerInterface extends ThemeComponentInterface {}
