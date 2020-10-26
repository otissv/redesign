import { ThemeComponentInterface } from '@redesign-system/theme'
import { PRIMARY, SECONDARY } from '@redesign-system/theme'

type ErrorTypes = typeof PRIMARY | typeof SECONDARY

export interface ErrorMessageInterface extends ThemeComponentInterface {
  appearance?: ErrorTypes
  children?: React.ReactNode
  href?: string
  required?: boolean
}
