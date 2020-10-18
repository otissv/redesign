import { ThemeComponentInterface, AppearanceBaseTypes } from '@redesign/theme'

import {
  ButtonGroupInterface,
  ButtonGroupButtonIconInterface,
  ButtonGroupButtonInterface,
} from '../../molecules/ButtonGroup'
import { TextboxInterface } from '../../atoms/Textbox'

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
