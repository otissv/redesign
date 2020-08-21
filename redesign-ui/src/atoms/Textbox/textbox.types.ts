import React from 'react'

import { ThemeComponentInterface } from '@redesign/theme'

export interface TextboxInterface extends ThemeComponentInterface {
  id: string
  children?: React.ReactNode
  disabled?: boolean
  onBlur?: (e: React.SyntheticEvent<EventTarget>) => void
  onChange?: (e: React.SyntheticEvent<EventTarget>) => void
  onFocus?: (e: React.SyntheticEvent<EventTarget>) => void
  placeholder?: string
  size?: number
  stretch?: boolean
  invalid?: boolean
  value?: string
  widths?: number
  required?: boolean
}
