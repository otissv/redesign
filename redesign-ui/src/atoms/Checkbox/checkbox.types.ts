import { ThemeComponentInterface, AppearanceBaseTypes } from '@redesign/theme'

export interface CheckboxInterface extends ThemeComponentInterface {
  appearance?: AppearanceBaseTypes
  checked?: boolean
  disabled?: boolean
  id: string
  name?: string
  onBlur?: (e: React.SyntheticEvent<EventTarget>) => void
  onChange?: (e: React.SyntheticEvent<EventTarget>) => void
  onFocus?: (e: React.SyntheticEvent<EventTarget>) => void
}
