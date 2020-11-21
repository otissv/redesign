import { ThemeComponentInterface } from '@redesign-system/theme'
import { ButtonInterface } from '../Button'

export interface NavInterface extends ThemeComponentInterface {}

export interface NavItemInterface extends ThemeComponentInterface {
  stacked?: boolean | undefined
  children?: React.ReactNode
}

export interface NavIconInterface extends ThemeComponentInterface {
  children?: React.ReactNode
  active?: boolean
}

export interface NavItemButtonInterface extends ButtonInterface {}
