import { ThemeComponentInterface } from '@redesign/theme'

export interface ButtonInterface extends ThemeComponentInterface {
  children?: React.ReactNode
  active?: boolean
  disabled?: boolean
  onClick?: any
  role?: string
  size?: number
  stretch?: boolean
}
