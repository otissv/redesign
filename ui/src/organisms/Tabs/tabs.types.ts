import React from 'react'
import { ButtonInterface } from '../../atoms/Button'
import { ThemeComponentInterface } from '@redesign/theme'
import { ButtonGroupInterface, ButtonGroupButtonIconInterface } from 'molecules'

export const SET_TAB_ACTIVE = 'SET_TAB_ACTIVE'
export const RESET_TABS = 'RESET_TABS'

export const TABS_ALIGN_TOP = 'TABS_ALIGN_TOP'
export const TABS_ALIGN_BOTTOM = 'TABS_ALIGN_BOTTOM'
export const TABS_ALIGN_LEFT = 'TABS_ALIGN_LEFT'
export const TABS_ALIGN_RIGHT = 'TABS_ALIGN_RIGHT'

export type TabStackedTypes =
  | typeof TABS_ALIGN_TOP
  | typeof TABS_ALIGN_BOTTOM
  | typeof TABS_ALIGN_LEFT
  | typeof TABS_ALIGN_RIGHT

export interface ResetTabsAction {
  type: typeof RESET_TABS
}

export interface SetActiveTabAction {
  type: typeof SET_TAB_ACTIVE
  active: string
}

export type TabActionsTypes = SetActiveTabAction | ResetTabsAction

export interface TabStateInterface {
  active?: string
}

export interface TabsInterface extends ThemeComponentInterface {
  children?: React.ReactNode
}

export interface TabsListInterface extends ButtonGroupInterface {}

export interface TabButtonInterface extends ButtonInterface {
  active?: boolean
  id: string
  title: string
  onClick?: any
}

export interface TabButtonIconInterface extends ButtonGroupButtonIconInterface {
  active?: boolean
  id: string
  title: string
  onClick?: any
}

export interface TabPanelInterface extends ThemeComponentInterface {
  active: boolean
}
