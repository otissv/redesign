export interface ColorInterface {
  defaults?: { [key: string]: string }
  text: string
  textInvert: string
  transparent: string

  black: string
  white: string
  outline: string

  linkText: string
  linkTextHover: string
  linkTextActive: string
  linkTextFocus: string
  linkTextVisited: string
  linkBackground: string
  linkBackgroundHover: string
  linkBackgroundActive: string
  linkBackgroundFocus: string
  linkBackgroundVisited: string

  background: string
  backgroundInvert: string
  background_050: string
  background_100: string
  background_200: string
  background_300: string
  background_400: string
  background_500: string
  background_600: string
  background_700: string
  background_800: string
  background_900: string

  default: string
  default2: string
  default_050: string
  default_100: string
  default_200: string
  default_300: string
  default_400: string
  default_500: string
  default_600: string
  default_700: string
  default_800: string
  default_900: string

  grey: string
  grey2: string
  grey_050: string
  grey_100: string
  grey_200: string
  grey_300: string
  grey_400: string
  grey_500: string
  grey_600: string
  grey_700: string
  grey_800: string
  grey_900: string

  active: string
  active2: string
  active_050: string
  active_100: string
  active_200: string
  active_300: string
  active_400: string
  active_500: string
  active_600: string
  active_700: string
  active_800: string
  active_900: string

  accent: string
  accent2: string
  accent_050: string
  accent_100: string
  accent_200: string
  accent_300: string
  accent_400: string
  accent_500: string
  accent_600: string
  accent_700: string
  accent_800: string
  accent_900: string

  action: string
  action2: string
  action_050: string
  action_100: string
  action_200: string
  action_300: string
  action_400: string
  action_500: string
  action_600: string
  action_700: string
  action_800: string
  action_900: string

  error: string
  error2: string
  error_050: string
  error_100: string
  error_200: string
  error_300: string
  error_400: string
  error_500: string
  error_600: string
  error_700: string
  error_800: string
  error_900: string

  danger: string
  danger2: string
  danger_050: string
  danger_100: string
  danger_200: string
  danger_300: string
  danger_400: string
  danger_500: string
  danger_600: string
  danger_700: string
  danger_800: string
  danger_900: string

  warning: string
  warning2: string
  warning_050: string
  warning_100: string
  warning_200: string
  warning_300: string
  warning_400: string
  warning_500: string
  warning_600: string
  warning_700: string
  warning_800: string
  warning_900: string

  success: string
  success2: string
  success_050: string
  success_100: string
  success_200: string
  success_300: string
  success_400: string
  success_500: string
  success_600: string
  success_700: string
  success_800: string
  success_900: string

  disabled: string
  disabled2: string
  disabled_050: string
  disabled_100: string
  disabled_200: string
  disabled_300: string
  disabled_400: string
  disabled_500: string
  disabled_600: string
  disabled_700: string
  disabled_800: string
  disabled_900: string
}

export interface PartialColorInterface extends Partial<ColorInterface> {}
