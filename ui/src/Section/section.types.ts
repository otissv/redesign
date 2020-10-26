import { ThemeComponentInterface } from '@redesign-system/theme'

import { HeadingInterface } from '../Heading'

export interface SectionInterface extends ThemeComponentInterface {
  children?: React.ReactNode
  heading?: string | HeadingInterface
}
