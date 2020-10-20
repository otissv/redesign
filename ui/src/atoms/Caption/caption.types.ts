import { ThemeComponentInterface } from '@redesign-system/theme'

export interface CaptionInterface
  extends Pick<ThemeComponentInterface, 'as' | 'className' | 'css' | 'theme'> {
  children?: React.ReactNode
}
