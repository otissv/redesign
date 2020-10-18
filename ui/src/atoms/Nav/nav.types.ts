import { ThemeComponentInterface, AppearanceTypes } from '@redesign/theme'

export interface NavInterface extends ThemeComponentInterface {}

export interface NavProviderInterface extends ThemeComponentInterface {
  appearance?: AppearanceTypes | undefined
  children?: React.ReactNode
  size?: number | undefined
  stacked?: boolean | undefined
  stretch?: boolean | undefined
}

export interface NavItemInterface extends ThemeComponentInterface {
  stacked?: boolean | undefined
  children?: React.ReactNode
}

export interface NavIconInterface extends ThemeComponentInterface {
  children?: React.ReactNode
  active?: boolean
}
