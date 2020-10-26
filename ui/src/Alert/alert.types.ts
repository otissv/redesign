import { ThemeComponentInterface } from '@redesign-system/theme'

export interface AlertInterface extends ThemeComponentInterface {
  stretch?: boolean
  children?: React.ReactNode
  opened?: boolean
}
