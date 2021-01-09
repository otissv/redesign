import { RadioInterface } from '../Radio'
import { ErrorMessageInterface } from '../ErrorMessage'
import { ThemeComponentInterface } from '@redesign-system/theme'
import { LabelInterface } from '../Label'

export interface HelpMessageInterface {}

export type ValidateField = (value: string) => boolean

export interface FormRadioInterface extends ThemeComponentInterface {
  checked?: boolean
  control?: Partial<RadioInterface>
  errorMessage?: string | Partial<ErrorMessageInterface>
  helpMessage?: string | Partial<HelpMessageInterface>
  id: string
  invalid?: boolean
  label?: string | Partial<LabelInterface>
  name: string
  required?: boolean
  touched?: boolean
}
