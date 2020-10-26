import {
  ThemeComponentInterface,
  AppearanceBaseTypes,
} from '@redesign-system/theme'

import {
  ButtonGroupInterface,
  ButtonGroupButtonIconInterface,
  ButtonGroupButtonInterface,
} from '../ButtonGroup'
import { TextboxInterface } from '../Textbox'

export type PositionType =
  | 'fixed'
  | 'absolute'
  | 'sticky'
  | 'static'
  | 'relative'

export interface AppBarInterface extends ThemeComponentInterface {
  appearance?: AppearanceBaseTypes
  position?: PositionType
}

export interface AppBarButtonGroupInterface extends ButtonGroupInterface {}

export interface AppBarButtonGroupButtonGroupInterface
  extends ButtonGroupButtonInterface {}

export interface AppBarButtonGroupButtonIconInterface
  extends ButtonGroupButtonIconInterface {}

export interface AppBarSearchInterface extends TextboxInterface {}

export interface AppBarPanelInterface extends ThemeComponentInterface {}
export interface AppBarBrandInterface extends ThemeComponentInterface {}
