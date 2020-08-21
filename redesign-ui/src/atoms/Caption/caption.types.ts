import { ThemeComponentInterface } from '@redesign/theme'

export interface CaptionInterface
  extends Pick<ThemeComponentInterface, 'as' | 'className' | 'css' | 'theme'> {
  children?: React.ReactNode
}
