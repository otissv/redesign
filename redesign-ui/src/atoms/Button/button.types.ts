import { ThemeComponentInterface } from '@redesign/theme'

export interface ButtonInterface extends ThemeComponentInterface {
  children?: React.ReactNode
  stretch?: boolean
  size?: number
  onClick?: any
  disabled?: boolean
}
