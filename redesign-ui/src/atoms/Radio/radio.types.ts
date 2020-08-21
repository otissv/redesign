import { ThemeComponentInterface, AppearanceBaseTypes } from '@redesign/theme'

export interface RadioInterface extends ThemeComponentInterface {
  appearance?: AppearanceBaseTypes
  checked?: boolean
  id: string
  label?: string
  disabled?: boolean
  onBlur?: (e: React.SyntheticEvent<EventTarget>) => void
  onChange?: (e: React.SyntheticEvent<EventTarget>) => void
  onFocus?: (e: React.SyntheticEvent<EventTarget>) => void
}
