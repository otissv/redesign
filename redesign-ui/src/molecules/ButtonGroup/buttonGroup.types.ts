import { ButtonInterface } from '../../atoms/Button'
import { ButtonIconInterface } from '../../molecules/ButtonIcon'
import { ThemeComponentInterface, AppearanceTypes } from '@redesign/theme'

export interface ButtonGroupInterface extends ButtonInterface {
  children?: React.ReactNode
}

export interface ButtonGroupButtonInterface extends ButtonInterface {
  children?: React.ReactNode
  active?: boolean
}

export interface ButtonGroupButtonIconInterface extends ButtonIconInterface {
  children?: React.ReactNode
  active?: boolean
}

export interface ButtonGroupProviderInterface extends ThemeComponentInterface {
  appearance?: AppearanceTypes | undefined
  children?: React.ReactNode
  size?: number | undefined
  stacked?: boolean | undefined
  stretch?: boolean | undefined
}
