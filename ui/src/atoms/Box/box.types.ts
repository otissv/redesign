import { ThemeComponentInterface } from '@redesign/theme'

export interface BoxInterface extends ThemeComponentInterface {
  children?: React.ReactNode
  stretch?: boolean
}
