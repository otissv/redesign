import { TextboxInterface } from '../Textbox'
import { ErrorMessageInterface } from '../ErrorMessage'
import { ThemeComponentInterface } from '@redesign-system/theme'
import { LabelInterface } from '../Label'

export interface HelpMessageInterface {}

export type ValidateField = (value: string) => boolean

export interface FormTextBoxInterface extends ThemeComponentInterface {
  control?: Partial<TextboxInterface>
  errorMessage?: string | Partial<ErrorMessageInterface>
  helpMessage?: string | Partial<HelpMessageInterface>
  id: string
  invalid?: boolean
  label?: string | Partial<LabelInterface>
  placeholder?: string
  required?: boolean
  touched?: boolean
  value?: string
}
