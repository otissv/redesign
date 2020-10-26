import {
  ThemeComponentInterface,
  AppearanceBaseTypes,
} from '@redesign-system/theme'

export interface RadioInterface extends ThemeComponentInterface {
  appearance?: AppearanceBaseTypes
  checked?: boolean
  id: string
  label: string
  disabled?: boolean
  name?: string
  onBlur?: (e: React.SyntheticEvent<EventTarget>) => void
  onChange?: (e: React.SyntheticEvent<EventTarget>) => void
  onFocus?: (e: React.SyntheticEvent<EventTarget>) => void
}
