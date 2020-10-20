import { ThemeComponentInterface } from '@redesign-system/theme'
import { TypographyInterface } from '../../atoms/Typography'

interface ReactChildren {
  children: React.ReactNode
}

export interface HeadingInterface extends ThemeComponentInterface {
  children?: React.ReactNode
  title?: string | ReactChildren | TypographyInterface
  secondaryTitle?: string | ReactChildren
  image?: {
    src: string
    alt: string
  }
  meta?: any
}
