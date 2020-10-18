import { ButtonInterface } from '../../atoms/Button'
import { ButtonIconInterface } from '../../molecules/ButtonIcon'

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
