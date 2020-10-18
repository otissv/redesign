import { TextboxInterface } from '../../atoms/Textbox';
import { ErrorMessageInterface } from '../../atoms/ErrorMessage';
import { ThemeComponentInterface } from '@redesign/theme';
import { LabelInterface } from 'atoms/Label';

export interface HelpMessageInterface {}

export type ValidateField = (value: string) => boolean;

export interface FormTextBoxInterface extends ThemeComponentInterface {
  control?: Partial<TextboxInterface>;
  errorMessage?: string | Partial<ErrorMessageInterface>;
  helpMessage?: string | Partial<HelpMessageInterface>;
  id: string;
  invalid?: boolean;
  label?: string | Partial<LabelInterface>;
  placeholder?: string;
  required?: boolean;
  touched?: boolean;
  value?: string;
}
