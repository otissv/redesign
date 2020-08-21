import { ThemeComponentInterface } from '@redesign/theme'
import { CloseInterface } from '../Close'

export interface AlertInterface extends ThemeComponentInterface {
  stretch?: boolean
  onClose?: any
  close?: CloseInterface | boolean
  children?: React.ReactNode
}
