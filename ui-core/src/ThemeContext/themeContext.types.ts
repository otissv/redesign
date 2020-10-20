import { ThemeInterface } from '@redesign-system/theme'

export interface ThemeContextInterface {
  theme: ThemeInterface
  setTheme: any
}

export interface ThemeProviderInterface {
  children?: React.ReactNode
  theme?: ThemeInterface | { [key: string]: any }
}
