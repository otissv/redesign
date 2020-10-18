import { ThemeComponentInterface } from '@redesign/theme'

import { ButtonInterface } from '../../atoms/Button'

export interface DropdownInterface extends ThemeComponentInterface {}

export interface DropdownContentInterface extends ThemeComponentInterface {
  children?: React.ReactNode
  flip?: boolean
  height?: string
  justify?: boolean
  opened?: boolean
  position?: string
  overflow?: 'hidden' | 'visible' | 'scroll' | 'auto'
}

export interface DropdownButtonInterface extends ButtonInterface {
  children?: React.ReactNode
}
