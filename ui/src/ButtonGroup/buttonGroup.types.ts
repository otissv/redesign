import { ButtonInterface } from '../Button'
import { ButtonIconInterface } from '../ButtonIcon'

export interface ButtonGroupInterface extends ButtonInterface {
  children?: React.ReactNode
}

export interface ButtonGroupButtonInterface extends ButtonInterface {
  children?: React.ReactNode
  active?: boolean
  onClick?: any
}

export interface ButtonGroupButtonIconInterface extends ButtonIconInterface {
  children?: React.ReactNode
  active?: boolean
  onClick?: any
}
