import { HeaderInterface } from '../Header'
import { CssTypes } from '@redesign-system/theme'

export interface LayoutInterface {
  as?: string
  children?: React.ReactNode
  className?: string
  css?: CssTypes
  customHeader?: React.ReactNode
  footer?: React.ReactNode
  header?: HeaderInterface
  seo?: any
}
