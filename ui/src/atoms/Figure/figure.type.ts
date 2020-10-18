import { ThemeComponentInterface } from '@redesign/theme'

import { CaptionInterface } from '../Caption'

export interface FigureInterface extends ThemeComponentInterface {
  caption?: string | CaptionInterface
  figure?: any
}
