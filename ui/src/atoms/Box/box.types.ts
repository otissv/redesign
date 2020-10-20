import { ThemeComponentInterface } from '@redesign-system/theme'

export interface BoxInterface extends ThemeComponentInterface {
  children?: React.ReactNode
  stretch?: boolean
}
