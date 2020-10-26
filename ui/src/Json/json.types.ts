import { ThemeComponentInterface } from '@redesign-system/theme'
export interface JsonInterface extends ThemeComponentInterface {
  data: any[] | { [key: string]: any } | { [key: number]: any }
}
