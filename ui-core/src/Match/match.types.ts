import { ThemeInterface, CssTypes } from '@redesign-system/theme'
import { AnimateInterface } from '../Base'

export interface MatchInterface {
  animate?: string
  children: React.ReactNode
  animations?: { [key: string]: { [key: string]: AnimateInterface } }
  theme?: Partial<ThemeInterface>
  css?: CssTypes
  [key: string]: any
}
