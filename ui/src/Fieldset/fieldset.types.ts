import { ThemeComponentInterface } from '@redesign-system/theme'

export interface FieldsetInterface extends ThemeComponentInterface {
  children?: React.ReactNode
  legend: string | any
}
