import { CheckboxInterface } from '../Checkbox'
import { ErrorMessageInterface } from '../ErrorMessage'
import { ThemeComponentInterface } from '@redesign-system/theme'
import { LabelInterface } from '../Label'

export interface HelpMessageInterface {}

export type ValidateField = (value: string) => boolean

export interface FormCheckboxInterface extends ThemeComponentInterface {
  control?: Partial<CheckboxInterface>
  errorMessage?: string | Partial<ErrorMessageInterface>
  helpMessage?: string | Partial<HelpMessageInterface>
  id: string
  invalid?: boolean
  label?: string | Partial<LabelInterface>
  required?: boolean
  touched?: boolean
  checked?: boolean
}
