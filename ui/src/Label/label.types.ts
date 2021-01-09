import { TypographyInterface } from '../Typography'

export interface LabelInterface extends TypographyInterface {
  children?: React.ReactNode
  htmlFor: string
  required?: boolean
}
