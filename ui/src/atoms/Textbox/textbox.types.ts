import React from 'react'

import { ThemeComponentInterface } from '@redesign-system/theme'

export interface TextboxInterface extends ThemeComponentInterface {
  children?: React.ReactNode
  disabled?: boolean
  id: string
  invalid?: boolean
  name?: string
  label: string
  onBlur?: (e: React.SyntheticEvent<EventTarget>) => void
  onChange?: (e: React.SyntheticEvent<EventTarget>) => void
  onFocus?: (e: React.SyntheticEvent<EventTarget>) => void
  placeholder?: string
  required?: boolean
  size?: number
  stretch?: boolean
  value?: string
  widths?: number
}
