import { ThemeComponentInterface, AppearanceTypes } from '@redesign-system/theme'

export interface BadgeInterface extends ThemeComponentInterface {
  children: React.ReactNode
  appearance?: AppearanceTypes
  pill?: boolean
}
