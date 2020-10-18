import React from 'react'

import { ThemeComponentInterface, AppearanceBaseTypes } from '@redesign/theme'

export interface ToggleInterface extends ThemeComponentInterface {
  children: React.ReactNode[]
  appearance?: AppearanceBaseTypes
  checked?: boolean
  disabled?: boolean
  id: string
  label: string
  name?: string
  onBlur?: (e: React.SyntheticEvent<EventTarget>) => void
  onChange?: (e: React.SyntheticEvent<EventTarget>) => void
  onFocus?: (e: React.SyntheticEvent<EventTarget>) => void
}
