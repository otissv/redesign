import { ThemeComponentInterface } from '@redesign/theme'

export interface AlertInterface extends ThemeComponentInterface {
  stretch?: boolean
  children?: React.ReactNode
  opened?: boolean
}
