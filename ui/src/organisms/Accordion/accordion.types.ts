import { ThemeComponentInterface } from '@redesign-system/theme'

import {
  TabsInterface,
  TabButtonInterface,
  TabButtonIconInterface,
} from '../Tabs'

export interface AccordionInterface extends TabsInterface {}

export interface AccordionItemInterface extends ThemeComponentInterface {
  children?: React.ReactNode
}

export interface AccordionButtonInterface extends TabButtonInterface {}

export interface AccordionButtonIconInterface extends TabButtonIconInterface {}

export interface AccordionContentInterface extends ThemeComponentInterface {}
