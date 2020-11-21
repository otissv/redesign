import {
  ThemeComponentInterface,
  AppearanceBaseTypes,
} from '@redesign-system/theme'
import { IconInterface } from '@redesign-system/ui-core'

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
  children?: React.ReactNode
  appearance?: AppearanceBaseTypes
  position?: PositionType
  opened?: boolean
}

export interface AppBarNavInterface extends ThemeComponentInterface {}

export interface AppBarButtonGroupInterface extends ButtonGroupInterface {}

export interface AppBarButtonGroupButtonGroupInterface
  extends ButtonGroupButtonInterface {}

export interface AppBarButtonGroupButtonIconInterface
  extends ButtonGroupButtonIconInterface {}

export interface AppBarSearchInterface extends TextboxInterface {
  placeholder?: string
  onSearch?: (e: any, { value }: { value: any }) => void
  textbox?: TextboxInterface
}

export interface AppBarPanelInterface extends ThemeComponentInterface {
  children?: React.ReactNode
}

export interface AppBarBrandInterface extends ThemeComponentInterface {
  children?: React.ReactNode
}

export interface AppBarFooterInterface extends ThemeComponentInterface {
  children?: React.ReactNode
}

export interface AppBarContentInterface extends ThemeComponentInterface {
  children?: React.ReactNode
}

export interface AppBarTriggerInterface extends ThemeComponentInterface {
  children?: React.ReactNode[]
  opened?: boolean
  onClick?: (e: any) => void
  onChange?: (e: any) => void
  triggerOn?: IconInterface
  triggerOff?: IconInterface
}
