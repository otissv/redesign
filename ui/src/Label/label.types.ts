import { TypographyInterface } from '../Typography'

export interface LabelInterface extends TypographyInterface {
  htmlFor: string
  required?: boolean
}
