import { ThemeComponentInterface } from '@redesign/theme'

export interface FieldsetInterface extends ThemeComponentInterface {
  children?: React.ReactNode
  legend: string | any
}
