import { ThemeComponentInterface } from '@redesign-system/theme'

import { CaptionInterface } from '../Caption'

export interface FigureInterface extends ThemeComponentInterface {
  caption?: string | CaptionInterface
  figure?: any
}
