import { ThemeComponentInterface } from '@redesign/theme'

import { ButtonInterface } from '../../atoms/Button'

export const SET_DROPDOWN_OPENED = 'SET_DROPDOWN_OPENED'
export const SET_DROPDOWN_FLIP = 'SET_FLIP'
export const SET_DROPDOWN_JUSTIFY = 'SET_DROPDOWN_JUSTIFY'
export const SET_DROPDOWN_POSITION = 'SET_DROPDOWN_POSITION;'
export const SET_REF = 'SET_REF'

export type DropdownActionTypes =
  | typeof SET_DROPDOWN_OPENED
  | typeof SET_DROPDOWN_FLIP
  | typeof SET_DROPDOWN_JUSTIFY
  | typeof SET_DROPDOWN_POSITION

export type SetDropdownOpenedAction = {
  type: typeof SET_DROPDOWN_OPENED
  payload: boolean
}
export type SetDropdownFlipAction = {
  type: typeof SET_DROPDOWN_FLIP
  payload: boolean
}
export type SetDropdownJustifyAction = {
  type: typeof SET_DROPDOWN_JUSTIFY
  payload: boolean
}

export type SetDropdownPositionAction = {
  type: typeof SET_DROPDOWN_POSITION
  payload: string
}

export type SetRefAction = {
  type: typeof SET_REF
  payload: string
}

export type DropdownAction =
  | SetDropdownOpenedAction
  | SetDropdownFlipAction
  | SetDropdownJustifyAction
  | SetDropdownPositionAction

export interface DropDownStateInterface {
  position: string
  flip: boolean
  justify: boolean
  opened: boolean
  id: string
}

export interface DropdownInterface extends ThemeComponentInterface {}

export interface DropdownContextInterface {
  state: DropDownStateInterface
  dispatch: any
}

export const DropdownInitialState: DropdownContextInterface = {
  state: {
    flip: true,
    justify: false,
    opened: false,
    position: 'bottom-left',
    id: '',
  },
  dispatch: (_action: DropdownAction) => {},
}

export interface DropdownProviderInterface extends ThemeComponentInterface {
  children?: React.ReactNode
  position?: string
  flip?: boolean
  justify?: boolean
  opened?: boolean
  id?: string
  reducer?<S, A>(state: S, action: A): S
}

export interface DropdownContentInterface extends ThemeComponentInterface {
  children?: React.ReactNode
  height?: string
}

export interface DropdownButtonInterface extends ButtonInterface {
  children?: React.ReactNode
}
