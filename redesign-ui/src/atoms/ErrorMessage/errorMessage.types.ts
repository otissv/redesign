import { ThemeComponentInterface } from '@redesign/theme'
import { PRIMARY, SECONDARY } from '@redesign/theme'

import {
  ModifyType,
  TextAlignType,
  TextWrapType,
  TextVerticalType,
  TextTransformType,
} from '../Typography'

type ErrorTypes = typeof PRIMARY | typeof SECONDARY

export interface ErrorMessageInterface extends ThemeComponentInterface {
  appearance?: ErrorTypes
  children?: React.ReactNode
  href?: string
  modify?: ModifyType
  required?: boolean
  textAlign?: TextAlignType
  textTransform?: TextTransformType
  textVertical?: TextVerticalType
  textWrap?: TextWrapType
}
