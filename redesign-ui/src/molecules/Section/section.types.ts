import { ThemeComponentInterface } from '@redesign/theme'

import { HeadingInterface } from '../Heading'

export interface SectionInterface extends ThemeComponentInterface {
  children?: React.ReactNode
  heading?: string | HeadingInterface
}
